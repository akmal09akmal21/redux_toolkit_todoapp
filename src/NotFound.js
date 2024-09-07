import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Not Found 404</h1>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
};

export default NotFound;
