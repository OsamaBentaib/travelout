import React from "react";
import SectionMore from "../components/SectionMore";
import office from "./../assets/img/office.jpg";
import {
  SiFacebook,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
export default function Contact() {
  return (
    <>
      <section className={`section section--current`}>
        <div className="section__content">
          <h3 className="section__title">Contact</h3>
          <p className="section__description">
            <span className="section__description-inner">13 New york .</span>
          </p>

          <span className="_links">
            <a href="https://facebook.com">
              <SiFacebook />
            </a>
          </span>
          <span className="_links">
            <a href="https://instagram.com">
              <SiInstagram />
            </a>
          </span>
          <span className="_links">
            <a href="https://twitter.com">
              <SiTwitter />
            </a>
          </span>
          <span className="_links">
            <a href="https://linkedin.com">
              <SiLinkedin />
            </a>
          </span>
          <span className="_links">
            <a href="https://whatsapp.com">
              <SiWhatsapp />
            </a>
          </span>
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
