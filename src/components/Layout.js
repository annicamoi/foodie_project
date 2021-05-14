import React from "react";
import { Container } from "react-bootstrap";

//** rendering as props, jsx tags **/

export const Layout = (props) => <Container>{props.children}</Container>;
