import styles from "./header.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../redux/constants";
import icon from "../../assets/icons/icon.svg";

export const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleOnChange = (event) => {
    setUserName(event.target.value);
  };

  const sendRequest = (event) => {
    if (event.key === "Enter" && userName.trim() !== "" ) {
      dispatch({ type: ACTIONS.GET_USER_DATA_REQUEST, userName, page: 1 });
      navigate(`/${userName}`);
    }
  };

  return (
    <div className={styles.header}>
      <img className={styles.icon} src={icon} alt="/"/>
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
