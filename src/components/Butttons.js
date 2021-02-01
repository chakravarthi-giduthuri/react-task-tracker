import PropTypes from "prop-types";

function Buttton({ color, onclick }) {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      Add
    </button>
  );
}
Buttton.defaultProps = {
  color: "steelblue",
};

Buttton.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Buttton;
