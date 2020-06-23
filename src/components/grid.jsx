// Source: https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
// INSTRUCTIONS FOR USING THIS COMPONENT IN THE LINK ABOVE ^

// Module imports
import styled from "styled-components";

// Define main grid container
export const Grid = styled.div``;

// Define main row container
export const Row = styled.div`
  display: flex;
`;

// Define main column container
export const Col = styled.div`
  flex: ${(props) => props.size};
`;
