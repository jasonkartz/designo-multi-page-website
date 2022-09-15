import styles from "./LocationCard.module.css";

export default function LocationCard({
  imageClass,
  locationTitle,
  locationName,
  addressLine1,
  addressLine2,
  phone,
  email,
}) {
  return (
    <div className={styles.location}>
      <div className={`${styles.mapImage} ${imageClass}`}></div>
      <div className={styles.locationText}>
        <h4>{locationTitle}</h4>
        <address>
          <span>{locationName}</span>
          <br />
          {addressLine1}
          <br />
          {addressLine2}
        </address>
        <address>
          <span>Contact</span>
          <br />P : {phone}
          <br />M : {email}
        </address>
      </div>
    </div>
  );
}
