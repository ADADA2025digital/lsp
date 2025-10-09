import { Link } from "react-router-dom";

const GlobalButton = ({ text, href, className = "", onClick }) => {
  return href ? (
    <Link to={href}>
      <button
        className={`button heading position-relative text-uppercase overflow-hidden fw-semibold rounded-5 px-4 py-3 ${className}`}
        onClick={onClick}
      >
        <span className="button-content">{text}</span>
      </button>
    </Link>
  ) : (
    <button
      className={`button heading  position-relative text-uppercase overflow-hidden fw-semibold rounded-5 px-4 py-3 ${className}`}
      onClick={onClick}
    >
      <span className="button-content">{text}</span>
    </button>
  );
};

export default GlobalButton;
