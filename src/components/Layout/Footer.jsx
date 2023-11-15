import React from "react";
import logo from "../../assets/logo 1.png";
import styles from "./Footer.module.scss"; // Import the SCSS module
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.container}>
          <div className={styles["footer-inside"]}>
            <div className={styles["footer-first-row"]}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <p className={styles["footer-desc"]}>
                Expertly trained, battle-tested, elite software developers on
                demand
              </p>
              <Link>
                {" "}
                <i class="fa-solid fa-phone"></i> +94 713249222
              </Link>
              <Link>
                {" "}
                <i class="fa-solid fa-envelope"></i> hello@courtney.lk
              </Link>
              <Link>
                {" "}
                <i class="fa-solid fa-location-dot"></i> Courtney Lanka
                (Private) Limited <br /> Level 35World Trade CenterColombo 01
              </Link>
              <div className={styles.social}>
                <Link>
                  <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link>
                  <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link>
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                  <i class="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className={styles["footer-second-row"]}>
              <h2>Company</h2>
              <Link>About Us</Link>
              <Link>Success Stories</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
              <Link>Contact Us</Link>
            </div>
            <div className={styles["footer-third-row"]}>
              <h2>Services</h2>
              <Link>Hire Permanent Staff</Link>
              <Link>Staff Augmentation</Link>
              <Link>Software Outsourcing</Link>
              <Link>Build Remote Office</Link>
            </div>
            <div className={styles["footer-third-row"]}>
              <h2>How to Start</h2>
              <Link>You Asked</Link>
              <Link>We Proceed</Link>
              <Link>Negotiate </Link>
              <Link>You Get</Link>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles["container-bottom"]}>
        <p className={styles.bottomtext}>© 2022 courtney</p>
      </div>
    </div>
  );
}
