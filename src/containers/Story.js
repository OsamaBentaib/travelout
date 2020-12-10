import React from "react";
import SectionMore from "../components/SectionMore";
import office from "./../assets/img/office.jpg";
export default function Story() {
  return (
    <>
      <section className={`section section--current`}>
        <div className="section__content">
          <h3 className="section__title">Our story</h3>
          <p className="section__description">
            <span className="section__description-inner">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </span>
          </p>
        </div>
        <div className="section__img">
          <div
            className="section__img-inner"
            style={{
              backgroundImage: `url(${office})`,
            }}
          ></div>
        </div>
        <SectionMore />
        <div className={`section__expander not_expanded`}></div>
        <ul className="section__facts">
          <li className={`section__facts-item fact_unexpanded`}>
            <h3 className="section__facts-title">We're here!</h3>
            <span className="section__facts-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
