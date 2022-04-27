import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";


export const UserPage = () => {
  const user = useSelector((state) => state.manageUserDataReducer.user);
  const navigate = useNavigate();

  if (user.message === "Not Found") {
    navigate("*");
  }

  return (
    <Avatar
      userName={user.name === null ? "" : user.name}
      photo={user.avatar_url}
      followers={user.followers}
      following={user.following}
      login={user.login}
      html_url={user.html_url}
    />
  );
};
