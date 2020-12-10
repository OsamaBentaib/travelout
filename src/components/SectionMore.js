import React from "react";
import { Link } from "react-router-dom";

export default function SectionMore() {
  return (
    <div className="section__more">
      <div className="section__more-inner section__more-inner--bg1">
        <span className="section__more-text">Want to know more?</span>
        <Link to="/contact/" className="section__more-link">
          <span className="section__more-linktext">get in touch!</span>
        </Link>
      </div>
    </div>
  );
}
