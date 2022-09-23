import Footer from "../components/footer";
import Layout from "../components/layout";
import LocationDirectory from "../components/LocationDirectory";
import Image from "next/image";
import iconError from "../public/assets/contact/desktop/icon-error.svg";
import styles from "../styles/contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            {error}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {error}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            {error}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            {error}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />
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
