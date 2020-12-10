import React from "react";
import tokyo from "./../assets/img/tokyo.jpg";
import newyork from "./../assets/img/newyork.jpg";
import SectionMore from "../components/SectionMore";
export default function Section({ section, expanded, currentSection }) {
  const { id, title, description, facts, background } = section;
  return (
    <section
      className={`section ${
        currentSection === id ? "section--current" : "d-none"
      }`}
    >
      <div className="section__content">
        <h2 className="section__title">{title}</h2>
        <p className="section__description">
          <span className="section__description-inner">{description}</span>
        </p>
      </div>
      <div className="section__img">
        <div
          className="section__img-inner"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
      </div>
      <SectionMore />
      <div
        className={`section__expander ${
          expanded ? "_expanded" : "not_expanded"
        }`}
      ></div>
      <ul className="section__facts">
        {facts &&
          expanded &&
          facts.map((fact, index) => (
            <li
              key={index}
              className={`section__facts-item ${
                expanded ? "fact_expanded" : "fact_unexpanded"
              }`}
            >
              <h3 className="section__facts-title">{fact.title}</h3>
              <span className="section__facts-detail">{fact.detail}</span>
            </li>
          ))}
        {facts && !expanded && (
          <>
            <li
              key={0}
              className={`section__facts-item ${
                expanded ? "fact_expanded" : "fact_unexpanded"
              }`}
            >
              <h3 className="section__facts-title">{facts[0].title}</h3>
              <span className="section__facts-detail">{facts[0].detail}</span>
            </li>
            <li
              key={1}
              className={`section__facts-item ${
                expanded ? "fact_expanded" : "fact_unexpanded"
              }`}
            >
              <h3 className="section__facts-title">{facts[1].title}</h3>
              <span className="section__facts-detail">{facts[1].detail}</span>
            </li>
          </>
        )}
      </ul>
      <div className="section__gallery">
        <h3 className="section__gallery-item section__gallery-item--title">
          More impressions
        </h3>
      </div>
    </section>
  );
}
