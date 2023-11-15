import React, { useState } from "react";
import logo from "../../assets/logo 1.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.scss"; // Import the SCSS module

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <header>
        <div className={styles.container}>
          <nav>
            <div className={styles["nav-logo"]}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={styles["nav-link"]}>
              <Link to="/start">How to start</Link>
              <Link to="/services">Services</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/careers">Careers</Link>
            </div>
            <div className={styles.contact}>
              <Button btnText="BUILD A TEAM" styles="transparent" />
              <Link className={styles["contact-us"]} to="/contact">
                Contact us
              </Link>
              <div className={styles.bar}>
                <i onClick={handleClick} class="fa-solid fa-bars"></i>
              </div>
            </div>
          </nav>
        </div>
        <div
          id={isToggled ? styles.block : styles.hidden}
          className={styles["nav-links"]}
        >
          {/* Use conditional class names to show/hide the navigation links */}
          <h1 className={styles.x} onClick={handleClick}>
            <i class="fa-solid fa-xmark"></i>
          </h1>
          <Link onClick={handleClick} to="/start">
            How to start
          </Link>
          <Link onClick={handleClick} to="/services">
            Services
          </Link>
          <Link onClick={handleClick} to="/technologies">
            Technologies
          </Link>
          <Link onClick={handleClick} to="/careers">
            Careers
          </Link>
        </div>
      </header>
    </div>
  );
}
