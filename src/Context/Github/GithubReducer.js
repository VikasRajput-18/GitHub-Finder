const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_GITHUB_DATA": {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }
    case "GET_USER": {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case "GET_USER_REPOS": {
      return {
        ...state ,
        repos : action.payload,
        isLoading: false,
      }
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CLEAR_DATA": {
      return {
        ...state,
        users: [],
      };
    }
    default:
      return state;
  }
};

export default githubReducer;
