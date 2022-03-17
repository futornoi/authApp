import { useNavigate } from "react-router-dom";
import "../Styles/NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="not-found">
      <h1>Not Fount</h1>
      <span className="default-link" onClick={goBack}>go back</span>
    </section>
  )
}

export default NotFound