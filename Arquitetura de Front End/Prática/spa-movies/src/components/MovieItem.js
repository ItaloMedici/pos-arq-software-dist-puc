import { Link } from "react-router-dom";

export const MovieItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
  );
};
