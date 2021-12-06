import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

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
    let classes = "badge fs-5 m-2 position-absolute start-50 translate-middle ";
    classes += number === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const getQualityClasses = (quality) => {
    let classes = `btn btn-${quality.color} btn-sm m-2`;
    return classes;
  };

  const renderQualities = (user) => {
    return user.qualities.map((quality) => (
      <li key={quality._id} className={getQualityClasses(quality)}>
        {quality.name}
      </li>
    ));
  };

  const handleDeleteUsers = (id) => {
    setUsers((prevState) => prevState.filter((user) => user !== id));
  };

  const renderTable = (number) => {
    return number === 0
      ? document.querySelector(".table").setAttribute("hidden", true)
      : users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{renderQualities(user)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => handleDeleteUsers(user)}
              >
                Удалить
              </button>
            </td>
          </tr>
        ));
  };

  return (
    <>
      <h1 className="fw-bold text-danger text-center m-3 p-3">Fast Love App</h1>
      <span className={getPhraseClasses(users.length)}>
        {renderPhrase(users.length)}
      </span>

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Контакты</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderTable(users.length)}</tbody>
      </table>
    </>
  );
};

export default Users;
