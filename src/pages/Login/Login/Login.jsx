import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  const navigate =useNavigate();
  const location =useLocation(); 

 const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    loginUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Container className=" mx-auto my-5 bg-light p-5" style={{width: '500px'}}>
        <h3 className="text-center py-3">Login your account</h3>
        <hr />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className="py-2" type="email" name="email" placeholder="Enter your password address" required/>
        </Form.Group>
        <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="py-2" type="password" name="password" placeholder="Enter your password" required />
        </Form.Group>
      <Form.Text className="text-success">
      </Form.Text>
      <Form.Text className="text-danger">
      </Form.Text>
        <Button variant="dark" className="w-100 py-2" type="submit">
          Login
        </Button>
        <br />
        <p className="text-secondary text-center pt-4">
            Don't have an account ? <Link to="/register">Register</Link>
      </p>
      </Form>
    </Container>
  );
};

export default Login;
