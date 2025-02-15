import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.form__areas}>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="Phone number" />
        <input type="text" placeholder="Email adress" />
        <input className={styles.form__area}
          name="Ask questions"
          id="area"
          cols="30"
          rows="10"
          placeholder="Ask questions"
        ></input>
      </div>
      <button className={styles.form__btn}>Send</button>
    </div>
  );
}
