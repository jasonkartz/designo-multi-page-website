import Footer from "../components/footer";
import Layout from "../components/layout";
import LocationDirectory from "../components/LocationDirectory";
import FormError from "./FormError";
import styles from "../styles/contact.module.css";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <form
            className={styles.form}
            onSubmit={handleSubmit(() => {
              alert("Thank you! We will be in touch shortly!");
            })}
          >
            {errors.name && (
              <FormError
                className={styles.errorContainer}
                message={errors.name?.message}
              />
            )}
            <input
              {...register("name", { required: "Can't be empty" })}
              placeholder="Name"
            />
            {errors.email && (
              <FormError
                className={styles.errorContainer}
                message={errors.email?.message}
              />
            )}
            <input
              {...register("email", {
                required: "Can't be empty",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please use a valid email address",
                },
              })}
              placeholder="Email Address"
            />
            <input {...register("phone")} placeholder="Phone" />
            {errors.message && (
              <FormError
                className={styles.errorContainer}
                message={errors.message?.message}
              />
            )}
            <textarea
              {...register("message", { required: "Can't be empty" })}
              placeholder="Your Message"
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
