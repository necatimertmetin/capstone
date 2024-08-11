import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import PopupWrapper from "../wrapper/PopupWrapper";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

const NavbarForm = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    // Fetch user data from sessionStorage
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClosePopup = () => {
    setSignUp(false);
    setSignIn(false);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    setUserData(null);
    setIsUserLoggedIn(false);
    window.location.reload(); // Refresh the page to update the state
  };

  return (
    <div className="navbar">
      {(signIn || signUp) && (
        <PopupWrapper onClose={handleClosePopup}>
          {signUp && (
            <SignUp
              handleLogin={() => {
                setSignIn(true);
                setSignUp(false);
              }}
            />
          )}
          {signIn && (
            <Login
              onClose={handleClosePopup}
              handleSignUp={() => {
                setSignIn(false);
                setSignUp(true);
              }}
            />
          )}
        </PopupWrapper>
      )}
      {editUser && (
        <PopupWrapper onClose={() => {setEditUser(false)}}>
          <Profile />
        </PopupWrapper>
      )}
      <div className="navbar-left">Stay Healthy</div>
      <div className="navbar-center">
        <NavLink to="/home" className="navbar-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          to="/instant-consultation"
          className="navbar-item"
          activeClassName="active"
        >
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
      {!isUserLoggedIn ? (
        <div className="navbar-right">
          <button
            className="secondary-button navbar-button button"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Sign in
          </button>
          <button
            className="primary-button navbar-button button"
            onClick={() => {
              setSignUp(true);
            }}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="navbar-right">
          <div className="profile-container">
            <button
              className="secondary-button profile-button navbar-button button"
              onClick={() => {
                setProfileDropdown(!profileDropdown);
              }}
            >
              {userData.name}
            </button>
            {profileDropdown && (
              <div className="profile-dropdown">
                <button
                  className="profile-dropdown-button"
                  onClick={() => setEditUser(true)}
                >
                  Edit
                </button>
                <button
                  className="profile-dropdown-button"
                  onClick={handleSignOut}
                >
                  Sign-Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarForm;
