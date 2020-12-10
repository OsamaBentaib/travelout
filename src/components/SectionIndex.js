import React from "react";

export default function SectionIndex({ start, end }) {
  return (
    <div className="sections__index">
      <span className="sections__index-current">
        <span className="sections__index-inner">0{start}</span>
      </span>
      <span className="sections__index-total">0{end}</span>
    </div>
  );
}
