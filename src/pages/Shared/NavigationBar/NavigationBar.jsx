import React, { useContext, useRef, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleLogout = () => {
      logOut()
      .then(() => {
        console.log("Logout");
      })
      .catch((error)=> console.log(error))
    }

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

  return (
    <Container >
      <Navbar className="mt-3" collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-secondary me-4" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-secondary me-4">
                About
              </Link>
              <Link className="text-decoration-none text-secondary me-4">
                News
              </Link>
              <Link className="text-decoration-none text-secondary">
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                  <div onClick={handleClick}>
                    <Image style={{height: '40px', width: '40px'}} src={user.photoURL} roundedCircle />
                    <div ref={ref}>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <strong>{user.displayName}</strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
                  </div>
              )}
                {user ? (
                  <Link to="/login">
                    <Button onClick={handleLogout} className="px-4 ms-3" variant="dark">
                      Logout
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className="px-4" variant="dark">
                      Login
                    </Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
