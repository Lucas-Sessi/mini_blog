import { Fragment } from "react";
import styles from './Footer.module.css';

const Footer = ()=> {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que vc tem interesse!</h3>
      <p>Mini Blog &copy; 2023</p>
      <p>desenvolvido por Lucas Sessi :)</p>
    </footer>
  );
};

export default Footer;