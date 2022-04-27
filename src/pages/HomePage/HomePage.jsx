import styles from "./homePage.module.scss";
import search_icon from "../../assets/icons/search_icon_for_startpage.png";
import { useSelector } from "react-redux";
import { InformationForUser } from "../../components/InformationForUser/InformationForUser";

export const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <InformationForUser
        img={search_icon}
        text="Start with searching a GitHub user"
      />
    </div>
  );
};
