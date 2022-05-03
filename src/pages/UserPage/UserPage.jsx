import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import styles from "./userPage.module.scss";
import { Paginate } from "../../components/Paginate/Paginate";
import { RepositoriesNotFound } from "../../components/RepositoriesNotFound/RepositoriesNotFound";
import { Loader } from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { RepositoriesList } from "../../components/RepositoriesList/RepositoriesList";
export const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.manageUserDataReducer.user);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.message === "Not Found") {
      navigate("*");
    }
  });

  if (!user.login) {
    dispatch({ type: ACTIONS.GET_USER_DATA_REQUEST, userName: params.user });
  }

  return (
    <>
      {!user.login ? (
        <Loader />
      ) : (
        <div className={styles["user-page"]}>
          <Avatar
            userName={user.name}
            photo={user.avatar_url}
            followers={user.followers}
            following={user.following}
            login={user.login}
            html_url={user.html_url}
          />
          <RepositoriesList />
          <Paginate  totalRepositories={user.public_repos} />
        </div>
      )}
    </>
  );
};
