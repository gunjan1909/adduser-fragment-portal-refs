import React, { useState } from "react";
//import {Fragment} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      {/* <Fragment> */}
      {/* <React.Fragment> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* </React.Fragment> */}
      {/* </Fragment> */}
    </>
  );
}

export default App;
