import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Register = () => {
 
    return (
        <div>
            <Container className="w-50 mx-auto">
      <Form >
        <h2>Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Your Photo Url</Form.Label>
          <Form.Control type="text" name="photoUrl" placeholder="Your Photo Url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          
          type="checkbox" 
          name='accept'
          label={<>Accepts <Link to='/terms'>Terms and conditions</Link></>} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text>
            Already have an account?<Link to='/login'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
    
        </div>
    );
};

export default Register;