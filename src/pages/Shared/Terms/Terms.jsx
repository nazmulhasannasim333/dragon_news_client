import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam iste nobis molestiae, sapiente fugiat exercitationem eaque voluptatum dolores aspernatur maxime quisquam, iusto autem? Earum sequi voluptas reiciendis repellat! Ratione, corrupti!</p>
            <Button variant="light" > <Link to="/register">Back to Register</Link></Button>
        </div>
        </Container>
    );
};

export default Terms;