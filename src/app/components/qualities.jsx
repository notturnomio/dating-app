import React from "react";

const Qualities = ({ color, name, _id }) => {
  return (
    <span key={_id} className={"badge bg-sm m-2 bg-" + color}>
      {name}
    </span>
  );
};

export default Qualities;
