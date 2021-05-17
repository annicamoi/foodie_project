import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useRouteMatch } from "react-router";

import { LinkContainer } from "react-router-bootstrap";

export const RecipeCard = ({ name, desc, img, id, country }) => {
  let math = useRouteMatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <LinkContainer
          to={{
            pathname: `${match.path}/${name}`,
            state: { id: id, country: country },
          }}
        >
          <Button variant="outline-dark">See more</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
