import PropTypes from "prop-types";
import React from "react";

const Qualities = ({ color, name, _id }) => {
    return (
        <span key={_id} className={"badge bg-sm m-2 bg-" + color}>
            {name}
        </span>
    );
};

Qualities.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualities;
