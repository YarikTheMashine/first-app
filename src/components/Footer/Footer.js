import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="mainLinks">
          <li>
            <Link className="text-white" to="/first-app">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/articles">
              News
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/login">
              Profile
            </Link>
          </li>
        </ul>
        <ul className="socialIcons">
          <li>
            <a className="skype" href="skype:yarik007?chat" target="_blank">
              <i className="fa fa-skype" />
            </a>
          </li>
          <li>
            <a
              className="telegram"
              href="https://t.me/l28ve980"
              target="_blank"
            >
              <i className="fa fa-telegram" />
            </a>
          </li>
          <li>
            <a
              className="instagram"
              href="https://www.instagram.com/captain.wex/"
              target="_blank"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a className="phone" href="viber://chat?number=+380666602315">
              <i className="fa fa-phone" />
            </a>
          </li>
        </ul>
        <p className="text-white">
          © Copyright 2019{" "}
          <a
            id="link"
            href="https://github.com/YarikTheMashine"
            target="_blank"
          >
            Yaroslav Baiduk
          </a>{" "}
          - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
