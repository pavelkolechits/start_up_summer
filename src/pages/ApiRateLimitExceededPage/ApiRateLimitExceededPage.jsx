import { Link } from "react-router-dom";

export const ApiRateLimitExceededPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>API rate limit exceeded.</h2>
      <Link to="/">Back</Link>
    </div>
  );
};
