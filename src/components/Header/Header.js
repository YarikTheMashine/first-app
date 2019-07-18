import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import image from "../../assets/Images/logo.jpg";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = ({ loginToggler }) => {
  return (
    <div>
      <header className="menu">
        <ul className="height">
          <li>
            <Link className="bg-lblue height" to="/">
              <span className="link-hover" />
              <span className="main-text">Home</span>
            </Link>
          </li>
          <li>
            <Link className="bg-red height" to="/contact_us">
              <span className="link-hover" />
              <span className="main-text">About</span>
            </Link>
          </li>
          <li id="rel">
            <Link className="bg-green height" to="/articles">
              <span className="link-hover" />
              <span className="main-text">News</span>
            </Link>
          </li>
          <li>
            {cookies.get("isLogin") ? (
              <Link
                className="bg-purple height"
                to="/login"
                onClick={loginToggler}
              >
                <span className="link-hover" />
                <span className="main-text">Log Out</span>
              </Link>
            ) : (
              <Link
                className="bg-purple height"
                to="/login"
                onClick={loginToggler}
              >
                <span className="link-hover" />
                <span className="main-text">Login</span>
              </Link>
            )}
          </li>
          <div>
            <img className="rounded-circle" src={image} />
          </div>
        </ul>
      </header>
    </div>
  );
};

export default Header;
