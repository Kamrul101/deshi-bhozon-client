import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefRecipeCard = ({r}) => {
    console.log(r);
    const {id,imageUrl,ingredients,instructions,r_Id,recipeName}= r;
    return (

        <div>
<Col>
<Card className="">
      <Card.Img  variant="top" src={imageUrl} className="w-100"/>
      <Card.Body>
        <Card.Title>{recipeName}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-center">
        <Link><Button variant="danger">See More</Button></Link>
      </Card.Footer>
    </Card>
    </Col>
    
    </div>
    );
};

export default ChefRecipeCard;