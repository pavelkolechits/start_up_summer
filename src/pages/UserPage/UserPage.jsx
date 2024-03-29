import styles from "./userPage.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ACTIONS } from "../../redux/constants";
import { Loader } from "../../components/Loader/Loader";
import { Avatar } from "../../components/Avatar/Avatar";
import { Paginate } from "../../components/Paginate/Paginate";
import { RepositoriesList } from "../../components/RepositoriesList/RepositoriesList";

export const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.manageUserDataReducer.user);
  const repositories = useSelector(
    (state) => state.manageRepositoriesReducer.repositories
  );

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.message === "Not Found") {
      navigate("*");
      return
    }

    if (user.message === "api limit exceded") {
      navigate("/limit-exceeded");
      return;
    }

    if (!user.login) {
      dispatch({ type: ACTIONS.GET_USER_DATA_REQUEST, userName: params.user });
    }
  },[user]);

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
          <div className={styles["repository-page"]}>
            {repositories.length ? <RepositoriesList /> : <Loader />}
            <Paginate totalRepositories={user.public_repos} />
          </div>
        </div>
      )}
    </>
  );
};
