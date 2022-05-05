import { useSelector } from "react-redux";

export const ApiRateLimitExceededPage = () => {
  const { message, documentation_url } = useSelector( (state) => state.manageUserDataReducer.user);

  return (
    <div>
      <h3>{message}</h3>
      <hr />
      <a href={documentation_url}>{documentation_url}</a>
    </div>
  );
};
