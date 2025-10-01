import { Link } from "react-router-dom";

const GlobalButton = ({ text, href, className = "", onClick }) => {
  return href ? (
    <Link to={href}>
      <button className={`button heading dark-text position-relative fs-5 text-uppercase overflow-hidden fw-semibold px-4 py-3 ${className}`} onClick={onClick}>
        {text}
      </button>
    </Link>
  ) : (
    <button className={`button heading dark-text position-relative fs-5 text-uppercase overflow-hidden fw-semibold px-4 py-3 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlobalButton;