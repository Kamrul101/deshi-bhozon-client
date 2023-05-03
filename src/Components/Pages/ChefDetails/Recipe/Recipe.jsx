import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import "./Recipe.css";
import { FaCheckCircle, FaCheckDouble } from "react-icons/fa";

const Recipe = () => {
  // const {r_Id} = useParams;
  const recipeDetails = useLoaderData();
  console.log(recipeDetails);
  const { imageUrl, ingredients, instructions, r_Id, recipeName } =
    recipeDetails;
  return (
    <Container>
      <div className="my-5">
        <div className="w-100">
          <img className="rounded" src={imageUrl} alt="" />
        </div>
        <div>
          <h1 className="my-5">{recipeName}</h1>
          <div className="data-recipe">
            <div className="ingredient">
            <h2 className="text-success">Ingredients:</h2>
            {ingredients.map((ingredient) => (
              <p className="decoration">
                <FaCheckCircle className="text-danger fs-2"></FaCheckCircle>
                <span className="fs-4 px-2">{ingredient}</span>
              </p>
            ))}
          </div>

          <div className="ingredient">
            <h2 className="text-info">Instruction:</h2>
            {instructions.map((ins) => (
              <p>
                <FaCheckDouble className="text-danger fs-2"></FaCheckDouble>
                <span  className="fs-4 px-2">{ins}</span>
              </p>
            ))}
          </div>
          </div>
          

        </div>
      </div>
    </Container>
  );
};

export default Recipe;
