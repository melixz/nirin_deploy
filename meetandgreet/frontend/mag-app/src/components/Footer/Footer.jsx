import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/footer__logo.png";
import insta from "../../assets/instagram.png";
import telega from "../../assets/telegram.png";
import watsapp from "../../assets/watsapp.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div
            className={styles.footer__block + " " + styles.footer__block_left}
          >
            <div className={styles.title}>
              <h1 className={styles.title__text}>CONTACTS</h1>
            </div>
            <div className={styles.footer__logo_wrapper}>
              <div
                style={{ backgroundImage: `url(${logo})` }}
                className={styles.footer__logo}
              ></div>
              <div>
                <h2 className={styles.footer__subtitle}>MEET PLUS GREET</h2>
              </div>
            </div>
            <div className={styles.contacts}>
              <ul className={styles.contacts__list}>
                <li className={styles.contacts__item}>
                  <p className={styles.contacts__text}>
                    JSC «Первоклассные решения»
                  </p>
                </li>
                <li className={styles.contacts__item}>
                  <p className={styles.contacts__text}>
                    Moscow, 1st Tikhvinsky tulip, no. 5-7, premises. 1p
                  </p>
                </li>
                <li className={styles.contacts__item}>
                  <p className={styles.contacts__text}>Tel: +66 99 160 97 11</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={styles.footer__block + " " + styles.footer__block_center}
          >
            <ul className={styles.footer__list_center}>
              <li className={styles.footer__item_center}>
                <p className={styles.footer__text_center}>TIN: 9707025574</p>
              </li>
              <li className={styles.footer__item_center}>
                <p className={styles.footer__text_center}>RRC: 770701001</p>
              </li>
            </ul>
          </div>
          <div
            className={styles.footer__block + " " + styles.footer__block_right}
          >
            <ul className={styles.footer__list_right}>
              <li
                style={{ backgroundImage: `url(${insta})` }}
                className={styles.footer__item_right}
              ></li>
              <li
                style={{ backgroundImage: `url(${telega})` }}
                className={styles.footer__item_right}
              ></li>
              <li
                style={{ backgroundImage: `url(${watsapp})` }}
                className={styles.footer__item_right}
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles.footer__hr} />
      <div className={styles.footer__container}>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom_left}>
            <ul className={styles.footer__bottom_list}>
              <li className={styles.footer__bottom_item}>
                <p className={styles.footer__bottom_text}>Privacy Policy</p>
              </li>
              <li className={styles.footer__bottom_item}>
                <p className={styles.footer__bottom_text}>Cookies policy</p>
              </li>
            </ul>
          </div>
          <div className={styles.footer__bottom_right}>
            <p className={styles.footer__bottom_text}>
              2024 © All Rights reserved
            </p>
          </div>
        </div>
      </div>
      {/* Вставка виджета чата */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script type='text/javascript'>
              (function(){
                  let language = 'ru';
                  let s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = encodeURI('https://tocha.online/36206a0011e961d05245f7b01a7766e8/widget.js?language=' + language);
                  let ss = document.getElementsByTagName('script')[0];
                  ss.parentNode.insertBefore(s, ss);
              })();
            </script>
          `
        }}
      />
    </div>
  );
}