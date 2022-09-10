import React from "react";
import PropTypes from "prop-types";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
};

export default Like;
