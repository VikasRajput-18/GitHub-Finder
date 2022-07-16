import React, { useState } from "react";
import { useGitHubFinder } from "../../Context/Github/GithubContext";
import { useAlertContext } from "../../Context/alert/AlertContext";
import { searchUser } from "../../Context/Github/GithubAction";
// import { clearData } from "../../Context/Github/GithubAction";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useGitHubFinder();
  const { setAlert } = useAlertContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "" || text.trim("") === "") {
      setAlert("Please Enter Text", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUser(text);
      dispatch({ type: "GET_GITHUB_DATA", payload: users });
      setText("");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-10 mx-4 mb-12">
      <form
        action=""
        className="rounded-md overflow-hidden flex items-center bg-red-400"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Profile..."
          value={text}
          onChange={handleChange}
          className="input text-gray-900 sm:w-96 w-full text-xl max-w-xs focus:outline-none bg-slate-300 rounded-none"
        />
        <button className="btn sm:px-10 px-5 rounded-none text-xl border-0 outline-none text-white">
          Go
        </button>
      </form>
      {users.length > 0 && (
        <button
          className="text-2xl btn btn-outline text-white"
          onClick={() => dispatch({ type: "CLEAR_DATA" })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default UserSearch;
