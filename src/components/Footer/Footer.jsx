import styles from "./styles.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerTop}>
        <div className={styles.img1}>
          <img src="./images/logoFuckingBeer2.png" alt="logoFuckingBeer2" />
        </div>
        <div className={styles.img2}>
          <img src="./images/calavera2.png" alt="calavera2" />
        </div>
        <div className={styles.icons}>
          <ul>
            <li>
              <a href="https://www.instagram.com/l.tamburlini/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lucasgabrieltamburlini/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/lucastamburlini">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+5493442644674">
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBotton}>
        <p>© 2022-2023 FuckingBeer - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
