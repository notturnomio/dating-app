import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    return number === 0
      ? "Для вас нет подходящей пары."
      : (number.toString().substr(-1) > 1 &&
          number.toString().substr(-1) < 5 &&
          number < 11) ||
        number > 15
      ? `${number} человека готовы встретиться с вами.`
      : number === 1
      ? `${number} человек готов встретиться с вами.`
      : `${number} человек готовы встретиться с вами.`;
  };

  const getPhraseClasses = (number) => {
    let classes = "badge fs-5 ";
    classes += number === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div className="text-center">
      <span className={getPhraseClasses(length)}>{renderPhrase(length)}</span>
    </div>
  );
};

export default SearchStatus;
