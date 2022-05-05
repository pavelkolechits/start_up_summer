import styles from "./follovers.module.scss";
import followersIcon from "../../assets/icons/followers.png";
import followingIcon from "../../assets/icons/following.png";

export const Follovers = ({ followers, following }) => {
  const checkIsDataMoreThan1000 = (data) => {
    if (data > 1000) {
      return (data / 1000).toFixed(1) + "k";
    } else {
      return data;
    }
  };

  if (followers) {
    return (
      <div className={styles.followers}>
        <img src={followersIcon} alt="" />
        <p className={styles["count-followers"]}>
          {checkIsDataMoreThan1000(followers)}&nbsp; followers
        </p>
      </div>
    );
  }

  if (following) {
    return (
      <div className={styles.following}>
        <img src={followingIcon} alt="" />
        <p className={styles["count-following"]}>
          {checkIsDataMoreThan1000(following)}&nbsp; following
        </p>
      </div>
    );
  }
};
