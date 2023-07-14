import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <p data-testid="footer" className="text-center my-4">
      @ Created by{" "}
      <a
        href=""
        className="hover:text-gray-900 hover:font-medium"
        target="_blank"
      >
       Tejas Jaiswal

      </a>
    </p>
  );
};

export default Footer;
