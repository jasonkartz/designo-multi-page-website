import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../public/images/logo-light.png";
import iconFacebook from "../public/images/icon-facebook.svg";
import iconInstagram from "../public/images/icon-instagram.svg";
import iconPinterest from "../public/images/icon-pinterest.svg";
import iconTwitter from "../public/images/icon-twitter.svg";
import iconYoutube from "../public/images/icon-youtube.svg";
import Link from "next/link";

export default function Footer({ includeContactCard }) {
  return (
    <>
      {includeContactCard && (
        <div className={styles.contactContainer}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardText}>
              <h4>Let’s talk about your project</h4>

              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Link href="contact">
              <button className="btn-on-dark">Get in touch</button>
            </Link>
          </div>
          <div className={styles.footerExtender}></div>
        </div>
      )}
      <footer className={styles.footer}>
        <section className={styles.footerTop}>
          <Link href="/">
            <a>
              <Image
                className={styles.logo}
                src={logo}
                alt="Designo Logo"
                width={202}
                height={27}
              />
            </a>
          </Link>
          <nav className={styles.footerNav}>
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
        </section>
        <section className={styles.footerBottom}>
          <address className={styles.streetAddress}>
            <span>Designo Central Office</span>
            <br />
            3886 Wellington
            <br />
            Street Toronto, Ontario M9C 3J5
          </address>
          <address className={styles.contactInfo}>
            <span>Contact Us (Central Office)</span> <br />
            P : +1 253-863-8967 <br />M : contact@designo.co
          </address>
          <ul className={styles.socialLinks}>
            <li>
              <a>
                <Image
                  src={iconFacebook}
                  alt="Follow us on Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src={iconYoutube}
                  alt="Subscribe to our YouTube Channel"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src={iconTwitter}
                  alt="Follow us on Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src={iconPinterest}
                  alt="Follow us on Pinterest"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src={iconInstagram}
                  alt="Follow us on Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
