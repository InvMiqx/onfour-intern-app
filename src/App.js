import React from "react";
import "./App.css";
import data from "./data.json";
import ConcertCard from "./components/concertCard";

export class App extends React.Component{
  compareToByDate(a, b){
    //tests if a>b (date a is after date b)
    //assumes parameters are datetime objs
    return a.valueOf() - b.valueOf() > 0;
  }

  createConcertCard(element){
    return <ConcertCard
      key={element.image} //subject to change as see fit
      imageurl={element.image}
      artist_name={element.artist_name}
      concert_name={element.concert_name}
      datetime = {new Date(element.date + " " + element.time)}
      genre={element.genre}
    />;
  }

  createContent(data){
    let concertCardList = data.map(this.createConcertCard);
    concertCardList.sort((a, b) => (this.compareToByDate(a.props.datetime, b.props.datetime)) ? 1 : -1);
    return concertCardList;
  }

  render(){
    return (
      <div className="flex-container">
        {this.createContent(data)}
      </div>
    )
  }
}

export default App;
