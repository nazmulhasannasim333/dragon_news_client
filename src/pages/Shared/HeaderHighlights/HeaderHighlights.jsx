import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const HeaderHighlights = () => {
    return (
        <Container>
            <div className="d-flex bg-light py-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-dark fs-6" speed={80}>
          I can be a React component, multiple React components, or just some
          text I can be a React component, multiple React components, or just
          some text....
        </Marquee>
      </div>
        </Container>
    );
};

export default HeaderHighlights;