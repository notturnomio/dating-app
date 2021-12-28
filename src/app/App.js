import React, { useState } from "react";
import Header from "./components/header";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDeleteUsers = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const handleToggleBookmark = (id) => {
    const bookmarkToggle = users.map((user) => {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
        console.log(user.name + " - bookmark is: " + user.bookmark);
      }

      return user;
    });
    setUsers(bookmarkToggle);
  };

  return (
    <>
      <Header />
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDeleteUsers}
        onBookmark={handleToggleBookmark}
      />
    </>
  );
}

export default App;
