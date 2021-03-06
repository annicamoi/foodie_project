import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const RecipeSingle = () => {
  const [recipe, setRecipe] = useState();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!recipe) {
      axios
        .get("http://localhost:3001/recipes/" + id)
        .then((res) => setRecipe(res.data));
    }
  });
  console.log(recipe);

  let recipeData = undefined;

  if (!recipe) {
    recipeData = <h1>Loading recipe...</h1>;
  }
  if (recipe) {
    recipeData = (
      <>
        <div className="recipe">
          <h1>{recipe.snackname}</h1>
          <img
            src={recipe.image}
            alt={recipe.snackname}
            width="600"
            height="500"
          />
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
        <Button variant="outline-info" onClick={() => history.goBack()}>
          Back to recipes
        </Button>
      </>
    );
  }
  return <div>{recipeData}</div>;
};

export default RecipeSingle;
