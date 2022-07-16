import axios from "axios";
const apiURL = "https://github.com";

const github = axios.create({
  baseURL: apiURL,
});

export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await fetch(`https://api.github.com/search/users?${params}`);
  const { items } = await res.json();
  return items;

};



export const getUser = async (login) => {
  try {
    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.status === 404) {
      window.location = "/*";
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserRepos = async (login) => {
  try {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const res = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );

    if (res.status === 404) {
      window.location = "/*";
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
