import React from "react";
import styles from "./Options.module.css";
import login_icon from "../../../../../assets/vip_lounge_login_icon.png";
import call_icon from "../../../../../assets/vip_lounge_phone_icon.png";
import {Link} from  "react-router-dom";

export default function Options() {
  return (
    <div className={styles.options}>
      <div className={styles.options__wrapper}>
        <p className={styles.options__text}>Ru</p>
        <p className={styles.options__text}>En</p>
      </div>

      <div className={styles.options__wrapper_items}>
        <div className={styles.options__item}>
          <Link to="tel: +7 (978) 585-70-56" className={styles.options__item_link}><img src={call_icon} alt="call_icon" width="20" height="20" /></Link>
        </div>
        <div className={styles.options__item}>
          <img src={login_icon} alt="login_icon" />
        </div>
      </div>
    </div>
  );
}
