import React from "react";

const Footer = () => {
  return (
    <footer className="text-center my-5 bg-light">
      <p>
        Made by <a href="https://github.com/tna007">Anh To</a>. Copyright{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
