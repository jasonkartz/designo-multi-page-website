import styles from "./LocationDirectory.module.css";
import canada from "../public/images/illustration-canada.svg";
import australia from "../public/images/illustration-australia.svg";
import uk from "../public/images/illustration-united-kingdom.svg";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="locations#canada">
          <button className="btn-on-light">See Location</button>
        </Link>
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
        <Link href="locations#australia">
          <button className="btn-on-light">See Location</button>
        </Link>
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
        <Link href="locations#uk">
          <button className="btn-on-light">See Location</button>
        </Link>
      </div>
    </section>
  );
}
