import React from "react";
import UserResult from "../users/UserResult";
import UserSearch from "../users/UserSearch";

const Home = () => {
  return (
    <div className="home">
      <UserSearch />
      <UserResult />
    </div>
  );
};

export default Home;
