import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className=" shadow-xl p-3 py-6 hover:bg-gray-700 transition-all rounded-md flex items-center space-x-4">
      <div className="h-14 w-14">
        <img
          src={avatar_url}
          alt={login}
          className="img-responsive rounded-full"
        />
      </div>
      <div>
        <p className="text-lg text-white">{login}</p>
        <Link to={`/user/${login}`}>
          <p className=" text-opacity-60 text-slate-200">Visit Profile</p>
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
