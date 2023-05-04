import React, { useEffect, useState } from 'react';
import ChefRecipeCard from './ChefRecipeCard';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const ChefRecipe = () => {
    const {id}=useParams();
    // console.log(id);
    const [recipe, setRecipe] = useState([]);
    useEffect(()=>{
    fetch(`https://recipe-hunter-server-one.vercel.app/recipe/${id}`)
    .then(res => res.json())
    .then(data => setRecipe(data))
    },[]);
    
    return (
        <div>
            <h1>Details:{recipe.length}</h1>
            <div>
            <Row xs={1} md={2} className="g-4">
                
                {
                    recipe.map(r => <ChefRecipeCard
                    key={r.r_Id}
                    r={r}
                    >

                    </ChefRecipeCard>)
                }
                
    </Row>
                
            </div>
        </div>
    );
};

export default ChefRecipe;