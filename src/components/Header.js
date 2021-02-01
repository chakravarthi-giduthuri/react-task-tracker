import React from "react";
import PropTypes from "prop-types";
import Buttton from "./Butttons";

function Header({ title, onadd, showadd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Buttton
        color={showadd ? "red" : "green"}
        text={showadd ? "Close" : "Add"}
        onclick={onadd}
      />
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
