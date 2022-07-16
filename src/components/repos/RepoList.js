import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";


const RepoList = ({ repos }) => {
  return (
    <div className="mt-10">
        <h1 className="sm:text-4xl text-2xl sm:font-bold text-white font-semibold mb-10">Latest Repositary</h1>
        {repos.map((repo) => {
          return (
            <RepoItem key={repo.id} repo={repo} />
          );
        })}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
