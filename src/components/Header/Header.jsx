import styles from "./header.module.scss";
import icon from "../../assets/icons/icon.svg";
import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleOnChange = (event) => {
    setUserName(event.target.value);
  };

  const sendRequest = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: ACTIONS.GET_USER_DATA_REQUEST, userName, page: 1 });
      navigate(`/${userName}`);
    }
  };

  return (
    <div className={styles.header}>
      <img className={styles.icon} src={icon} alt="" />
      <div className={styles["input-wrap"]}>
        <input
          onKeyDown={sendRequest}
          value={userName}
          onChange={handleOnChange}
          className={styles.input}
          placeholder="Enter GitHub username"
          type="text"
        />
      </div>
    </div>
  );
};
