import { useSelector } from "react-redux";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import styles from "./repositoriesList.module.scss";
import { Paginate } from "../Paginate/Paginate";
import { Loader } from "../Loader/Loader";
import { RepositoriesNotFound } from "../RepositoriesNotFound/RepositoriesNotFound";
import { lazy, Suspense } from "react";

export const RepositoriesList = () => {
  const repositories = useSelector(
    (state) => state.manageRepositoriesReducer.repositories
  );
  const user = useSelector((state) => state.manageUserDataReducer.user);

  return (
    <>
      {repositories[0] === "Not Found" ? (
        <RepositoriesNotFound />
      ) : (
        <>
          {repositories.length !== 0 ? (
            <div className={styles["repositories-wrap"]}>
              <p className={styles.title}>Repositories ({user.public_repos})</p>
              {repositories.map((repositoriItem) => (
                <RepositoryItem
                  key={repositoriItem.id}
                  html_url={repositoriItem.html_url}
                  description={repositoriItem.description}
                  repositoryName={repositoriItem.name}
                />
              ))}
             
            </div>
          ) : (
            <Loader />
          )}
        </>
      )}
    </>
  );
};
