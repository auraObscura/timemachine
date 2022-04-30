import { useNavigate } from "react-router-dom";

const ForceLoginPage = (props) => {
  const nav = useNavigate;
  if (!props.username) {
    nav("/register");
  }
};

export default ForceLoginPage;
