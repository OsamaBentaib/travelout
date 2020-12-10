import React, { useState } from "react";
import { FiAlignJustify, FiThumbsDown, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setOpened] = useState();
  return (
    <nav className={`menu ${isOpen && "menu--open"}`}>
      <ul className={`menu__inner ${!isOpen && "d-none"}`}>
        <li className="menu__item">
          <Link className="menu__item-link" to="/">
            Adventures
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__item-link" to="/story/">
            Our Story
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__item-link" to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
      <div className="menu__toggle">
        <span
          onClick={() => setOpened(!isOpen)}
          className="menu__toggle-inner menu__toggle-inner--open"
        >
          <FiAlignJustify />
        </span>
        {isOpen && (
          <span
            onClick={() => setOpened(!isOpen)}
            className="menu__toggle-inner menu__toggle-inner--close"
          >
            <FiX />
          </span>
        )}
      </div>
    </nav>
  );
}
