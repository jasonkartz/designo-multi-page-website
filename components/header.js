import Image from "next/image";
import logo from "../public/images/logo-dark.png";
import hamburger from "../public/images/mobile/icon-hamburger.svg";
import closeMenu from "../public/images/mobile/icon-close.svg";
import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${navToggle && styles.fixed}`}>
        <Link href="/">
          <a>
            <Image
              className={styles.logo}
              src={logo}
              alt="Designo Logo"
              width={196}
              height={24}
            />
          </a>
        </Link>
        <nav className={`${styles.nav} ${navToggle && styles.navDisplay}`}>
          <ul>
            <li>
              <Link href="about">
                <a>Our Company</a>
              </Link>
            </li>
            <li>
              <Link href="locations">
                <a>Locations</a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a>Contact</a>
              </Link>
            </li>
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
      </header>
      <div
        className={`${styles.darken} ${navToggle && styles.darkenDisplay}`}
      ></div>
    </>
  );
}
