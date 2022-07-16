import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGitHubFinder } from "../../Context/Github/GithubContext";
import { Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import Loading from "../pages/Loading";
import RepoList from "../repos/RepoList";
import { getUser } from "../../Context/Github/GithubAction";
import { getUserRepos } from "../../Context/Github/GithubAction";

const User = () => {
  const { login } = useParams();
  const { dispatch, user, loading, repos } = useGitHubFinder();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUser(login);
      dispatch({ type: "GET_USER", payload: userData });
      const userRepos = await getUserRepos(login);
      dispatch({ type: "GET_USER_REPOS", payload: userRepos });
    };
    getUserData();
  }, [dispatch, login]);

  if (loading) return <Loading />;
  else {
    return (
      <div className="w-full xl:w-10/12 mx-auto">
        <div>
          <Link to="/">
            <h1 className="text-2xl mb-4 mx-2 font-semibold text-white">
              Back To Search
            </h1>
          </Link>
          <div className="md:flex md:flex-nowrap md:justify-start md:items-start items-center justify-center gap-6 flex-wrap">
            <div className=" flex justify-center">
              <figure className="relative rounded-lg sm:w-80 sm:h-80 w-full shadow-xl">
                <img
                  src={avatar_url}
                  alt={name}
                  className="w-full h-full rounded-lg opacity-70"
                />
                <div className="absolute bottom-5 flex justify-center  items-center flex-col  w-full">
                  <p className="text-white text-2xl font-bold tracking-wide">
                    {name}
                  </p>
                  <p className="text-white text-lg font-bold tracking-wide">
                    {login}
                  </p>
                </div>
              </figure>
            </div>
            <div className="sm:mt-0 mt-4">
              <div className="flex items-center md:justify-start justify-center gap-3 mb-3 md:mt-0 mt-4">
                <p className="sm:text-3xl text-lg sm:font-bold font-semibold text-white">
                  {name}
                </p>
                <p className="text-green-500 bg-green-800 px-3 rounded-xl font-semibold">
                  {type}
                </p>
                {hireable ? (
                  <p className="text-cyan-500 bg-cyan-800 px-3 rounded-xl font-semibold my-3">
                    Hireable
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className="flex justify-center md:items-start items-center flex-col text-slate-200">
                  <p>{bio}</p>
                  <a
                    href={html_url}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-outline btn-success mt-3 "
                  >
                    Visit GitHub Profile
                  </a>
                </div>

                <div className=" sm:flex sm:flex-nowrap flex-wrap justify-between sm:mt-10 mt-5 gap-3">
                  {location !== null ? (
                    <div className="shadow-2xl py-3 px-2 w-full ">
                      <p className="text-2xl text-slate-200 font-semibold">
                        Location
                      </p>
                      <p className="text-slate-200">{location} </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {blog !== "" ? (
                    <div className="shadow-2xl py-3 px-2 w-full ">
                      <p className="text-2xl text-slate-200 font-semibold">
                        Website
                      </p>
                      <p className="text-slate-200">{blog}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {twitter_username !== null ? (
                    <div className="shadow-2xl py-3 px-2 w-full ">
                      <p className="text-2xl text-slate-200 font-semibold">
                        Twitter
                      </p>
                      <p className="text-slate-200">{twitter_username}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" sm:flex sm:flex-nowrap flex-wrap justify-between items-center gap-10 ">
            <div className="flex justify-between items-center w-full shadow-2xl py-10  px-4">
              <div>
                <p className="text-slate-200">Followers</p>
                <p className="text-3xl font-bold text-white">{followers}</p>
              </div>
              <FaUsers className="text-3xl text-secondary" />
            </div>
            <div className="flex justify-between items-center w-full shadow-2xl py-10  px-4">
              <div>
                <p className="text-slate-200">Following</p>
                <p className="text-3xl font-bold text-white">{following}</p>
              </div>
              <FaUserFriends className="text-3xl text-secondary" />
            </div>
            <div className="flex justify-between items-center w-full shadow-2xl py-10  px-4">
              <div>
                <p className="text-slate-200">Public Repos</p>
                <p className="text-3xl font-bold text-white">{public_repos}</p>
              </div>
              <FaCodepen className="text-3xl text-secondary" />
            </div>
            <div className="flex justify-between items-center w-full shadow-2xl py-10  px-4">
              <div>
                <p className="text-slate-200">Public Gists</p>
                <p className="text-3xl font-bold text-white">{public_gists}</p>
              </div>
              <FaStore className="text-3xl text-secondary" />
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    );
  }
};

export default User;
