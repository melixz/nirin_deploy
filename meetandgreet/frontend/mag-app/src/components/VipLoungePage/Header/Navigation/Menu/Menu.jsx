import React from "react";
import styles from "./Menu.module.css";
import plane_icon from "../../../../../assets/vip_lounge_airplane.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menu__list}>
          <div className={styles.menu__item_plane}>
            <div className={styles.menu__icon_box}>
              <img
                className={styles.menu__icon}
                src={plane_icon}
                alt="plane_icon"
              />
            </div>
            <Link to="/fastbooking">
              <p className={styles.menu__text}>Fast Booking</p>
            </Link>
          </div>
        </li>
        <div className={styles.menu__list_wrapper}>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <Link to="/services">
                <p className={styles.menu__text}>Services +</p>
              </Link>
            </div>
          </li>
          <li className={styles.menu__list}>
            <div className={styles.menu__item}>
              <Link to="/travelers">
                <p className={styles.menu__text}>Travalers +</p>
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </>
  );
}
