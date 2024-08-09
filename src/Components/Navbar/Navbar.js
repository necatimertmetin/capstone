import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import PopupWrapper from "../wrapper/PopupWrapper";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

const NavbarForm = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleClosePopup = () => {
    setSignUp(false);
    setSignIn(false);
  };
  return (
    <div className="navbar">
      {(signIn || signUp) && (
        <PopupWrapper onClose={handleClosePopup}>{signUp && <SignUp handleLogin={() => {setSignIn(true); setSignUp(false);}} />}{signIn && <Login handleSignUp={() => {setSignIn(false); setSignUp(true);}}/>}</PopupWrapper>
      )}
      <div className="navbar-left">Stay Healthy</div>
      <div className="navbar-center">
        <NavLink to="/home" className="navbar-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-item" activeClassName="active">
          Appointment
        </NavLink>
        <NavLink
          to="/services"
          className="navbar-item"
          activeClassName="active"
        >
          Health Blog
        </NavLink>
        <NavLink to="/reviews" className="navbar-item" activeClassName="active">
          Reviews
        </NavLink>
      </div>
      <div className="navbar-right">
        <button className="secondary-button navbar-button button" onClick={() => {setSignIn(true)}}>
          Sign in
        </button>
        <button className="primary-button navbar-button button" onClick={() => {setSignUp(true)}}>Sign Up</button>
      </div>
    </div>
  );
};

export default NavbarForm;
