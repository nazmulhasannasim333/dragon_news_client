import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

  const {createUser, profileUpdat} = useContext(AuthContext);
  const navigate =useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result => {
      const signupUser = result.user;
      console.log(signupUser);
      form.reset();
      navigate('/')
      

      profileUpdat(name, photo)
      .then(() => {
        console.log('Profile updated');
      })
      .catch(error => console.log(error))
    })
    
    .catch(error => {
      console.log(error);
    })
  }

  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  }



  return (
    <Container
      className=" mx-auto my-5 bg-light p-5"
      style={{ width: "500px" }}
    >
      <h3 className="text-center py-3">Register your account</h3>
      <hr />
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            className="py-2"
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="py-2"
            type="email"
            name="email"
            placeholder="Enter your password address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="py-2"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccept}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Term & Conditions</Link></>}
          />
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Button variant="dark" disabled={!accepted} className="w-100 py-2" type="submit">
          Register
        </Button>
        <br />
        <p className="text-secondary text-center pt-4">
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
