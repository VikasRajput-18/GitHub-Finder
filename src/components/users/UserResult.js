import React, { useEffect } from "react";
import Loading from "../pages/Loading";
import UserItem from "./UserItem";
import { useGitHubFinder } from "../../Context/Github/GithubContext";

// using useReducer instead useState 

const UserResult = () => {
  const { isLoading, users } = useGitHubFinder();


  if (isLoading) return <Loading />;
  else {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default UserResult;
