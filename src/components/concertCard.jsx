import React from "react";

export class ConcertCard extends React.Component{
  render(){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL","AUG", "SEP", "OCT", "NOV", "DEC"];
    let dt = this.props.datetime;
    return (
      <div className="container">
        <img className="concert_image" src={this.props.imageurl} alt="concert"/>
        <div className="genre">{(this.props.genre).toUpperCase()}</div>
        <h4 className="mainInformation">{this.props.artist_name} - {this.props.concert_name}</h4>
        <div className="dateInfo">{days[dt.getDay()]} | {dt.getDate()+" "+months[dt.getMonth()]+" "+dt.getFullYear()} | {dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + " EST"}</div>
      </div>
    );
  }
}

export default ConcertCard;
