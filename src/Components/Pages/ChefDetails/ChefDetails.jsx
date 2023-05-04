import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import ChefRecipe from './chefRecipe';

const ChefDetails = () => {
    const {id} = useParams();
    const chefDetails = useLoaderData();
    // console.log(chefDetails);
    const {name, picture, recipes,experience,likes,_id,bio} = chefDetails;
    return (
        <div>
        <Card className="">
      <Card.Img  variant="top" src={picture} className="w-100"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Bio: {bio}
        </Card.Text>
        <Card.Text>
        Years of Experiences:{experience}
        </Card.Text>
        <Card.Text>
        Numbers of Recipes:{recipes}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <Card.Text className="flex-grow-1 fs-4">
            <FaThumbsUp ></FaThumbsUp>
            {likes}</Card.Text>
        <Link to='/'>
        <Button variant="primary">All Chefs</Button></Link>
      
      </Card.Footer>
    </Card>
    <ChefRecipe></ChefRecipe>
        </div>
    );
};

export default ChefDetails;