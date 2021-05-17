import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import RecipiesList from "./components/RecipiesList";
import RecipeCard from "./components/InstructionsCard";
import SearchBox from "./components/SearchBox";
import axios from "axios";

export const Recipes = () => (
  <div>
    <h2>Recipes</h2>
    <SearchBox />
    <RecipiesList>
      <RecipeCard />
    </RecipiesList>
    <p>
      Apple pie cake lollipop soufflé. Candy gummi bears tiramisu chocolate bar
      pastry candy canes. Pudding lollipop donut tiramisu. Chocolate bar cookie
      cupcake topping tart tootsie roll liquorice tiramisu caramels. Dessert
      brownie jelly-o jelly beans liquorice. Dessert brownie cookie caramels
      chupa chups tart jelly-o. Tart macaroon donut pudding. Tiramisu jelly
      beans bonbon bear claw jelly tootsie roll. Chocolate cake lollipop
      chocolate dessert cupcake jelly-o jelly beans icing halvah. Chupa chups
      liquorice icing bonbon apple pie apple pie. Jelly-o icing dragée carrot
      cake wafer candy canes dragée soufflé cheesecake. Dessert chocolate cake
      muffin cake jelly-o marshmallow. Toffee croissant candy canes jujubes
      topping cheesecake caramels oat cake. Cheesecake sesame snaps cupcake
      sweet roll. Fruitcake gummies cake cookie caramels caramels candy canes
      tart.
    </p>
  </div>
);
