import moment from "moment";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center mt-4">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      
    </Container>
  );
};

export default Header;
