import { createContext, useContext, useReducer } from "react";

import githubReducer from "./GithubReducer";

const GitHubFinderContext = createContext();

const GitHubFinderProvider = ({ children }) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  return (
    <GitHubFinderContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubFinderContext.Provider>
  );
};

const useGitHubFinder = () => {
  return useContext(GitHubFinderContext);
};

export { useGitHubFinder, GitHubFinderProvider };
