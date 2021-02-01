import React from "react";
import PropTypes from "prop-types";
import Buttton from "./Butttons";

function Header({ title }) {
  const onClick = () => {
    console.log("button clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Buttton color="green" onclick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
Header.prototypes = {
  title: PropTypes.string,
};
export default Header;
