import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import foodImage from "../assets/img/foodImage.jpg";

//** `string` allows us to write pure css and javascript mixed. z-index is stating where the other divs, eg overlay are postitioned - overlay need to be higher */

const Styles = styled.div`
  .jumbo {
    background: url(${foodImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    oapcity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

//** adding a functional component. Overlay pure css. Container is the text in the middle of the **/
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid={true} className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Become a foodie from my Foodie App</p>
      </Container>
    </Jumbo>
  </Styles>
);
