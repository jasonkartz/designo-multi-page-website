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
        <h4>Canada</h4>
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
        <h4>Australia</h4>
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
        <h4>United Kingdom</h4>
        <button className="btn-on-light">See Location</button>
      </div>
    </section>
  );
}
