import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import Header from "./header";

const Users = ({ users, ...rest }) => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedProf] = useState();
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  // useEffect(() => {
  //   api.professions
  //     .fetchAll()
  //     .then((data) =>
  //       setProfession(
  //         Object.assign(data, { allProfession: { name: "Все профессии" } })
  //       )
  //     );
  // }, []);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession === selectedProf)
    : users;
  const count = filteredUsers.length;

  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    // document.querySelector(".table").setAttribute("hidden", true)
    <div className="d-flex justify-content-center align-items-start">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <Header />
        <SearchStatus length={count} />
        {count > 0 && (
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
              {userCrop.map((user) => (
                <User {...user} {...rest} key={user._id} />
              ))}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

Users.propTypes = { users: PropTypes.array.isRequired };

export default Users;
