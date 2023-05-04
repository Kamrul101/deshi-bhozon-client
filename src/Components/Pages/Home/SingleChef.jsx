import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa';


const SingleChef = ({ oneChef }) => {
  // console.log(oneChef);
  const {id, name, picture, recipes,experience,likes,_id} = oneChef;
  return (
    <Card className="mb-3 me-3" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={picture} className="pt-2"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
        <Link to={`/chefDetails/${id}`}>
        <Button variant="primary">View Recipes</Button></Link>
      
      </Card.Footer>
    </Card>
  );
};

export default SingleChef;
