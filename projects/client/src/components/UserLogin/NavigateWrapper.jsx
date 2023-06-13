import { useNavigate } from "react-router-dom";

function NavigateWrapper() {
  const navigate = useNavigate();
  return navigate;
}

export default NavigateWrapper;
