import Footer from "../components/footer";
import Layout from "../components/layout";
import LocationDirectory from "../components/LocationDirectory";
import styles from "../styles/about.module.css";
export default function About() {
  return (
    <>
      <Layout />
      <main>
        <section className={styles.aboutHero}>
          <div className={styles.heroImg}></div>
          <div className={styles.heroText}>
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </section>
        <section className={styles.cardOne}>
          <div className={styles.cardOneImg}></div>
          <div className={styles.cardText}>
            <h4>World-class Talent</h4>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.{" "}
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </section>
        <LocationDirectory />
        <section className={styles.cardTwo}>
          <div className={styles.cardTwoImg}></div>
          <div className={styles.cardText}>
            <h4>The real deal</h4>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </section>
      </main>
      <Footer includeContactCard={true} />
    </>
  );
}
