import React from "react";
import { Carousel, CarouselItem, Image } from "react-bootstrap";

export const About = () => (
  <div>
    <h2>About page</h2>
    <p>
      Jujubes fruitcake cheesecake gummi bears fruitcake topping jelly-o. Tart
      carrot cake marshmallow brownie chocolate cake sweet roll apple pie.
      Chocolate cake lemon drops tootsie roll pudding tart soufflé marshmallow.
      Bonbon marzipan marshmallow. Chocolate bar gingerbread marzipan carrot
      cake. Cheesecake cake toffee. Bonbon cupcake brownie ice cream. Muffin
      muffin lollipop muffin powder sesame snaps dragée. Dessert cheesecake
      brownie jujubes ice cream topping dessert. Halvah gummies topping pudding
      lollipop dragée croissant pudding carrot cake. Oat cake ice cream cookie
      soufflé chocolate sweet roll cheesecake sesame snaps. Cake jelly beans
      lollipop dessert candy canes marshmallow macaroon. Topping cotton candy
      icing pastry chocolate bar danish candy tootsie roll lollipop. Brownie oat
      cake liquorice halvah chocolate cake pudding sweet roll. Halvah sweet
      sugar plum chocolate cake.
    </p>
    <Carousel>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="./assets/img/avocado.jpg"
          alt="Avocado"
        ></img>
        <Carousel.Caption className="text-black">
          <h3>Landing page</h3>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="./assets/img/bowl.jpg"
          alt="Bowl"
        ></img>
        <Carousel.Caption className="text-black">
          <h3>Recipe page</h3>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="./assets/img/chia.jpg"
          alt="Chia"
        ></img>
        <Carousel.Caption className="text-black">
          <h3>Recipe adding page</h3>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  </div>
);
