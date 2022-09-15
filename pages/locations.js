import Footer from "../components/footer";
import Layout from "../components/layout";
import styles from "../styles/locations.module.css";
import LocationCard from "../components/LocationCard";

export default function Locations() {
  return (
    <>
      <Layout />
      <main>
        <section className={styles.locationSection}>
          <LocationCard
            imageClass={styles.imgCanada}
            locationTitle="Canada"
            locationName="Designo Central Office"
            addressLine1="3886 Wellington Street"
            addressLine2="Toronto, Ontario M9C 3J5"
            phone="+1 253-863-8967"
            email="contact@designo.co"
          />
          <LocationCard
            imageClass={styles.imgAustralia}
            locationTitle="Australia"
            locationName="Designo AU Office"
            addressLine1="19 Balonne Street"
            addressLine2="New South Wales 2443"
            phone="(02) 6720 9092"
            email="contact@designo.au"
            containerClass={styles.flexRow}
          />
          <LocationCard
            imageClass={styles.imgUK}
            locationTitle="United Kingdom"
            locationName="Designo UK Office"
            addressLine1="13  Colorado Way"
            addressLine2="Rhyd-y-fro SA8 9GA"
            phone="078 3115 1400"
            email="contact@designo.uk"
          />
        </section>
      </main>
      <Footer includeContactCard={true} />
    </>
  );
}
