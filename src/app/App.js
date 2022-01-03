import React, { useState } from "react";
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
      <Users
        users={users}
        onDelete={handleDeleteUsers}
        onBookmark={handleToggleBookmark}
      />
    </>
  );
}

export default App;
