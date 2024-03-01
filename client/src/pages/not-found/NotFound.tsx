import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <section className="notFound">
      <h1>Page not Found</h1>
      <Link to="/">Return Home Page</Link>
    </section>
  );
}

export default NotFound;
