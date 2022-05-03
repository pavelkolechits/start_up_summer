import styles from "./avatar.module.scss";
import { Follovers } from "../../components/Follovers/Follovers";

export const Avatar = ({
  photo,
  followers,
  following,
  userName,
  login,
  html_url,
}) => {
  return (
    <div className={styles["avatar-wrap"]}>
      <img className={styles.photo} src={photo} alt="" />
      <div className={styles["user-data"]}>
        <h3 className={styles["user-name"]}>{userName}</h3>
        <a target="_blank" href={html_url} className={styles.login}>
          {login}
        </a>
        <div className={styles["followers-wrap"]}>
          <Follovers followers={followers} />
          <Follovers following={following} />
        </div>
      </div>
    </div>
  );
};
