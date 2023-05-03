import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
    // const {r_Id} = useParams;
    const recipeDetails = useLoaderData();
    console.log(recipeDetails);
    const {imageUrl, ingredients,instructions,r_Id,recipeName}=recipeDetails;
    return (
        <div>
            <h1>New Recipe : {recipeDetails.length}</h1>
        </div>
    );
};

export default Recipe;