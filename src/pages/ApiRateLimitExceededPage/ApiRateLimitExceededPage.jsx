import { useSelector } from "react-redux";

export const ApiRateLimitExceededPage = () => {
  const { message, documentation_url } = useSelector(
    (state) => state.manageUserDataReducer.user.fullMessage
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3>{message}</h3>
      <hr />
      <a href={documentation_url}>{documentation_url}</a>
    </div>
  );
};
