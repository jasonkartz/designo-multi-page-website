import styles from "./ProjectCard.module.css";

export default function ProjectCard({ bgImageClass, heading, description }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.imageSection} ${bgImageClass && bgImageClass}`}
      ></div>
      <div className={styles.textSection}>
        <h3>{heading ? heading : "Heading Text"}</h3>
        <p>{description ? description : "description text"}</p>
      </div>
    </div>
  );
}
