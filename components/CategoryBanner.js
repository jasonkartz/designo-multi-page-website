import styles from "./CategoryBanner.module.css";

export default function CategoryBanner({ title, bgImageClass, description }) {
  return (
    <section className={`${styles.banner} ${bgImageClass && bgImageClass}`}>
      <h1>{title ? title : "Title"}</h1>
      <p>{description ? description : "description text"}</p>
    </section>
  );
}
