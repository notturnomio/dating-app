import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return users.length === 0 ? (
    // document.querySelector(".table").setAttribute("hidden", true)
    <></>
  ) : (
    <table className="table mt-3 container-sm">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Контакты</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User {...user} {...rest} />
        ))}
      </tbody>
    </table>
  );
};

export default Users;
