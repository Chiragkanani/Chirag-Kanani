import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="not-found">
      <div className="text-center">
        <p className="section-index">Route unavailable</p>
        <h1>404</h1>
        <p>This page isn’t here.</p>
        <a href="/" className="text-link">
          Return to the portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
