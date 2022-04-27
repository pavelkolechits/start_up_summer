import styles from "./notFoundPage.module.scss";
import React from "react";
import { InformationForUser } from "../../components/InformationForUser/InformationForUser";
import not_found_icon from "../../assets/icons/page_not_found_icon.png";

export const NotFoundPage = () => {
  return (
    <div className={styles["not-found-page"]}>
      <InformationForUser img={not_found_icon} text="User not found" />
    </div>
  );
};
