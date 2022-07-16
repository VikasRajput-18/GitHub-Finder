import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className=" py-10 sm:pl-10 pl-3 bg-neutral mb-6 rounded-md">
      <div className="flex  gap-4 items-center text-white text-2xl font-semibold">
        <FaLink />
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="text-slate-200"
        >
          {name}
        </a>
      </div>
      <p className="my-3 text-white text-sm"> {description}</p>
      <div className="flex sm:gap-10 gap-4 flex-wrap items-center mt-6">
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 text-cyan-500  rounded-3xl font-bold ">
          <FaEye />
          <p className="">{watchers_count}</p>
        </div>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 text-green-500  rounded-3xl font-bold">
          <FaStar />
          <p>{stargazers_count}</p>
        </div>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 text-pink-500  rounded-3xl font-bold">
          <FaInfo />
          <p>{open_issues}</p>
        </div>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 text-yellow-400  rounded-3xl font-bold">
          <FaUtensils />
          <p>{forks}</p>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
