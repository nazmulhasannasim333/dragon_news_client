import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import bg from '../../../assets/bg.png';
import Qzoon from "../QZoon/Qzoon";

const RightNav = () => {
  return (
    <div>
      <h4 className="py-3">Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className="pb-2 pt-4">Find Us On</h4>
        <ListGroup>
      <ListGroup.Item className="py-3"><FaFacebook  /> Facebook</ListGroup.Item>
      <ListGroup.Item className="py-3"><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item className="py-3"><FaInstagram /> Intagram</ListGroup.Item>
    </ListGroup>
      </div>
      <Qzoon></Qzoon>
      <div className="position-relative">
      <img className="w-100 h-75" src={bg} alt="" />
      <div style={{top: '80px'}} className="text-center position-absolute text-white">
        <h1 className="py-3">Create an Amazing Newspaper</h1>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button className="py-3 mt-3"  variant="primary">
         LEARN MORE
      </Button>
      </div>
      </div>
    </div>
  );
};

export default RightNav;
