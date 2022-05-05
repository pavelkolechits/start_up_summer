import styles from "./informationForUser.module.scss";

export const InformationForUser = ({ img, text }) => {
  return (
    <div className={styles["content-wrap"]}>
      <img src={img} alt="" />
      <div className={styles["text-container"]}>{text}</div>
    </div>
  );
};
