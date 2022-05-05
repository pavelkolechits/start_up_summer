import styles from "./repositoriesNotFound.module.scss";
import { InformationForUser } from "../InformationForUser/InformationForUser";
import repositoriesNotFoundIcon from "../../assets/icons/repositories_not_found_icon.png";

export const RepositoriesNotFound = () => {
  return (
    <div className={styles["repositories-not-found-wrap"]}>
      <InformationForUser
        img={repositoriesNotFoundIcon}
        text="Repository list is empty"
      />
    </div>
  );
};
