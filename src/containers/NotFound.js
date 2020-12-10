import React from "react";
import SectionMore from "../components/SectionMore";
import image from "./../assets/img/404.jpg";
export default function NotFound() {
  return (
    <>
      <section className={`section section--current`}>
        <div className="section__content">
          <h3 className="section__title">404!</h3>
          <p className="section__description">
            <span className="section__description-inner">
              You look like in the wrong page.
            </span>
          </p>
        </div>
        <div className="section__img">
          <div
            className="section__img-inner"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <SectionMore />
        <div className={`section__expander not_expanded`}></div>
      </section>
    </>
  );
}
