import Footer from "../components/footer";
import Layout from "../components/layout";
import LocationDirectory from "../components/LocationDirectory";
import styles from "../styles/contact.module.css";

export default function Contact() {
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
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="tel" name="phone" placeholder="Phone" />
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
