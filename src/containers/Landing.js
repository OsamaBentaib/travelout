import React, { useState } from "react";
import {
  FiArrowDown,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiX,
} from "react-icons/fi";
import SectionIndex from "./../components/SectionIndex";
import Section from "./Section";
import { sectionsData } from "./../store";
export default function Landing() {
  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(!expanded);
  };
  const [currentSection, setCurrentSection] = useState(1);
  const onNavigate = (event) => {
    const arrLen = sectionsData.length;
    let count;
    if (event === "up")
      count = currentSection === 1 ? arrLen : currentSection - 1;
    if (event === "down")
      count = currentSection === arrLen ? 1 : currentSection + 1;
    setCurrentSection(count);
  };
  return (
    <>
      <div className="facts">
        <div className="facts__toggle">
          {!expanded ? (
            <span
              onClick={onClick}
              className="facts__toggle-inner facts__toggle-inner--"
            >
              <FiPlus />
              <span className="facts__toggle-text">See more facts</span>
            </span>
          ) : (
            <span
              onClick={onClick}
              className="facts__toggle-inner facts__toggle-inner--"
            >
              <FiArrowDown />
              <span className="facts__toggle-text">See less facts</span>
            </span>
          )}
        </div>
        <button className="button-contentclose">
          <FiX />
        </button>
      </div>
      {/* <!-- index --> */}
      <SectionIndex start={currentSection} end={sectionsData.length} />
      {/* <!-- navigation down --> */}
      <nav className="sections__nav">
        <button
          onClick={() => onNavigate("up")}
          className="sections__nav-item sections__nav-item--prev"
        >
          <FiChevronUp className="mt-1" />
        </button>
        <button
          onClick={() => onNavigate("down")}
          className="sections__nav-item sections__nav-item--next ml-2"
        >
          <FiChevronDown className="mt-1" />
        </button>
      </nav>
      {/* <!-- sections --> */}
      {sectionsData &&
        sectionsData.map((section, i) => (
          <Section
            key={i}
            section={section}
            expanded={expanded}
            currentSection={currentSection}
          />
        ))}
    </>
  );
}
