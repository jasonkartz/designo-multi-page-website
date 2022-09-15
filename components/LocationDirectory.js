import styles from "./LocationDirectory.module.css";
import canada from "../public/assets/shared/desktop/illustration-canada.svg";
import australia from "../public/assets/shared/desktop/illustration-australia.svg";
import uk from "../public/assets/shared/desktop/illustration-united-kingdom.svg";
import Image from "next/image";
export default function LocationDirectory() {
  return (
    <section className={styles.section}>
      <div className={styles.location}>
        <Image
          className="img-infographic"
          src={canada}
          alt="canada"
          width={202}
          height={202}
        />
        <h3>Canada</h3>
        <button className="btn-on-light">See Location</button>
      </div>
      <div className={styles.location}>
        <Image
          className="img-infographic"
          src={australia}
          alt="australia"
          width={202}
          height={202}
        />
        <h3>Australia</h3>
        <button className="btn-on-light">See Location</button>
      </div>
      <div className={styles.location}>
        <Image
          className="img-infographic"
          src={uk}
          alt="united kingdom"
          width={202}
          height={202}
        />
        <h3>United Kingdom</h3>
        <button className="btn-on-light">See Location</button>
      </div>
    </section>
  );
}