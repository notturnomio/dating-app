import PropTypes from "prop-types";
import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number === 0) {
            return "Для вас нет подходящей пары.";
        } else if (
            (number.toString().substr(-1) > 1 &&
                number.toString().substr(-1) < 5 &&
                number < 11) ||
            number > 15
        ) {
            return number + " человека готовы встретиться с вами.";
        } else if (number === 1) {
            return number + " человек готов встретиться с вами.";
        } else {
            return number + " человек готовы встретиться с вами.";
        }
    };

    const getPhraseClasses = (number) => {
        let classes = "badge fs-5 ";
        classes += number === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div className="text-center">
            <span className={getPhraseClasses(length)}>
                {renderPhrase(length)}
            </span>
        </div>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
