import styles from "./repositoriesList.module.scss";
import { useSelector } from "react-redux";
import { RepositoryItem } from "../RepositoryItem/RepositoryItem";
import { RepositoriesNotFound } from "../RepositoriesNotFound/RepositoriesNotFound";

export const RepositoriesList = () => {
  const repositories = useSelector((state) => state.manageRepositoriesReducer.repositories);
  const user = useSelector((state) => state.manageUserDataReducer.user);

  return (
    <>
      {repositories[0] === "Not Found" ? (
        <RepositoriesNotFound />
      ) : (
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
      )}
    </>
  );
};
