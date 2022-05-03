import styles from "./homePage.module.scss";
import search_icon from "../../assets/icons/search_icon_for_startpage.png";
import { useSelector } from "react-redux";
import { InformationForUser } from "../../components/InformationForUser/InformationForUser";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
  const user = useSelector(i => i.manageUserDataReducer.user)
  const navigate = useNavigate();
  if (user.message === "Not Found") {
    navigate("*");
    
  }
  return (
    <div className={styles["home-page"]}>
      <InformationForUser
        img={search_icon}
        text="Start with searching a GitHub user"
      />
    
    </div>
  );
};
