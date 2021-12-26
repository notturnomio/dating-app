import React from "react";

const Bookmark = ({ status, ...rest }) => {
  const BookmarkToggle = () => {
    return status ? (
      <i className="bi bi-heart-fill"></i>
    ) : (
      <i className="bi bi-heart"></i>
    );
  };
  return (
    <button {...rest} className="btn btn-secondary btn-sm m-2">
      {BookmarkToggle()}
    </button>
  );
};

export default Bookmark;
