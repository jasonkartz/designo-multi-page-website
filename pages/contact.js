import Footer from "../components/footer";
import Layout from "../components/layout";
import LocationDirectory from "../components/LocationDirectory";
import Image from "next/image";
import iconError from "../public/assets/contact/desktop/icon-error.svg";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const error = (
    <div className={styles.errorContainer}>
      <p>
        <em>{"Can't be empty"}</em>
      </p>
      <Image src={iconError} alt="Error" height={20} width={20} />
    </div>
  );
  return (
    <>
      <Layout />
      <main>
        <section className={styles.contactSection}>
          <div className={styles.contactText}>
            <h1>Conact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form className={styles.form}>
            {error}
            <input type="text" name="name" placeholder="Name" />
            {error}
            <input type="email" name="email" placeholder="Email Address" />
            {error}
            <input type="tel" name="phone" placeholder="Phone" />
            {error}
            <textarea name="message" placeholder="Your Message" />
            <button type="submit" className="btn-on-dark">
              Submit
            </button>
          </form>
        </section>
        <LocationDirectory />
      </main>
      <Footer includeContactCard={false} />
    </>
  );
}
