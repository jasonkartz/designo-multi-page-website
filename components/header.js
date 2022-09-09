import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo-dark.png";
import hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "../public/assets/shared/mobile/icon-close.svg";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Designo Logo"
        width={196}
        height={24}
      />
      <nav className={`${styles.nav} ${navToggle && styles.navDisplay}`}>
        <ul>
          <li>Our Company</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
      </nav>

      <button
        className={styles.navBtn}
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? (
          <Image
            src={closeMenu}
            alt="Close Navigation Menu"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src={hamburger}
            alt="Open Navigation Menu"
            width={24}
            height={20}
          />
        )}
      </button>

      <div
        className={styles.darken}
        style={{ display: !navToggle && "none" }}
      ></div>
    </header>
  );
}
