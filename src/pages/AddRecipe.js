import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AddRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    prepTime: "",
    servings: "",
    incredients: [],
    instructions: "",
    image: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, quantity: "", ingredientName: "" },
  ]);

  // useEffect(() => {
  //   axios
  //     //.get("http://localhost:3001/recipes")
  //
  //     .then((response) => setNewRecipe(response.data));
  // }, []);

  const valueChangeHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const ingredientChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setNewRecipe({ ...newRecipe, ingredients: ingredients });
  };
  const addMore = (e) => {
    e.preventDefault();
    const newIng = {
      id: ingredients.length + 1,
      ingredientName: "",
      quantity: "",
    };
    setIngredients((prevState) => [...prevState, newIng]);
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipies", newRecipe);
    e.target.reset();
    //alert("Recipe added!");
  };

  return (
    <div>
      <h1>Add a new recipe:</h1>
      <div className="form">
        <form onSubmit={submitRecipe}>
          <div>
            <label htmlFor="name">Recipe name:</label>
            <input
              type="text"
              placeholder="example"
              maxLength="30"
              name="name"
              id="name"
              onChange={valueChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image url (optional):</label>
            <input
              type="text"
              maxLength="255"
              placeholder="https://exampleimages.com/example.png"
              name="image"
              id="image"
              onChange={valueChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="prepTime">Preparation time (minutes):</label>
            <input
              type="number"
              placeholder="45"
              name="prepTime"
              id="prepTime"
              max="999"
              min="0"
              onChange={valueChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="servings">How many servings:</label>
            <input
              type="number"
              name="servings"
              placeholder="4"
              id="servings"
              max="99"
              min="0"
              onChange={valueChangeHandler}
            />
          </div>
          <section>
            <Form.Label>Ingredients:</Form.Label>
            {ingredients.map((_, i) => {
              return (
                <Form.Group key={i}>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="quantity">Quantity</Form.Label>
                      <Form.Control
                        type="text"
                        name="quantity"
                        onChange={(e) => ingredientChangeHandler(e, i)}
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="inggredientName">
                        Ingredient
                      </Form.Label>
                      <Form.Control
                        maxLength="255"
                        type="text"
                        name="ingredientName"
                        onChange={(e) => ingredientChangeHandler(e, i)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              );
            })}

            <Button variant="secondary" onClick={addMore}>
              add another ingredient
            </Button>
          </section>
          <div>
            <label htmlFor="instructions">
              Instructions (max 255 characters):
            </label>
            <textarea
              name="instructions"
              placeholder="mix everything and cook it"
              id="instructions"
              maxLength="255"
              onChange={valueChangeHandler}
              required
            ></textarea>
          </div>
          {/* <Button onClick={() => submitRecipe} value="Next"> */}
          <Button type="submit">Add recipe</Button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
