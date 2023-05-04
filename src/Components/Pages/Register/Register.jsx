import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers.jsx/AuthProviders';



const Register = () => {
    const [error, setError] = useState('');
    const {createUser}= useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name,email,password,confirm);
        setError('');
        if(password != confirm){
            setError('Password did not match');
            return;
        }
        else if(password.length<8){
            setError('Password length must be 8 characters long')
        }
        createUser(email,password)
        .then(result=>{
            const registeredUser = result.user;
            console.log(registeredUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
 
    return (
        <div>
            <Container className="w-50 mx-auto">
      <Form onSubmit={handleRegister}>
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
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
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
            Already have an account?<Link to='/login'>Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <p className="text-error text-danger fs-2">{error}</p>
    </Container>
    
        </div>
    );
};

export default Register;