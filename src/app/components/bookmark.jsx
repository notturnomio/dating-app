import propTypes from "prop-types";
import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button {...rest} className="btn btn-secondary btn-sm m-2">
      <i className={"bi bi-heart" + (status ? "-fill" : "")}></i>
    </button>
  );
};

Bookmark.propTypes = {
  status: propTypes.bool.isRequired
};

export default Bookmark;
