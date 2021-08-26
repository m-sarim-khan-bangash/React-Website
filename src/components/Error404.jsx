import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED <br /> HAD ITS
            NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
          <Link to="/" className="btn btn-primary">
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
