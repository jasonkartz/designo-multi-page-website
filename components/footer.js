import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo-light.png";
import iconFacebook from "../public/assets/shared/desktop/icon-facebook.svg";
import iconInstagram from "../public/assets/shared/desktop/icon-instagram.svg";
import iconPinterest from "../public/assets/shared/desktop/icon-pinterest.svg";
import iconTwitter from "../public/assets/shared/desktop/icon-twitter.svg";
import iconYoutube from "../public/assets/shared/desktop/icon-youtube.svg";

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
            <button className="btn-on-dark">Get in touch</button>
          </div>
          <div className={styles.footerExtender}></div>
        </div>
      )}
      <footer className={styles.footer}>
        <section className={styles.footerTop}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Designo Logo"
            width={202}
            height={27}
          />
          <nav className={styles.footerNav}>
            <ul>
              <li>Our Company</li>
              <li>Locations</li>
              <li>Contact</li>
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
              <Image
                src={iconFacebook}
                alt="Follow us on Facebook"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={iconYoutube}
                alt="Subscribe to our YouTube Channel"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={iconTwitter}
                alt="Follow us on Twitter"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={iconPinterest}
                alt="Follow us on Pinterest"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={iconInstagram}
                alt="Follow us on Instagram"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
