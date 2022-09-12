import Image from "next/image";
import CategoryCard from "../components/CategoryCard";
import Infographic from "../components/InfoGraphic";
import friendlyImg from "../public/assets/home/desktop/illustration-friendly.svg";
import passionateImg from "../public/assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../public/assets/home/desktop/illustration-resourceful.svg";

export default function Home() {
  return (
    <>
      <section className="banner-home">
        <h1>Award-winning custom designs and digital branding solutions </h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="btn-on-dark">Learn more </button>
      </section>
      <section className="category-container-home">
        <CategoryCard background="category-web-home" title="web design" />
        <CategoryCard background="category-app" title="app design" />
        <CategoryCard background="category-graphic" title="graphic design" />
      </section>
      <section className="infographic-container">
        <Infographic
          image={passionateImg}
          alt="passionate"
          title="Passionate"
          description="Each
        project starts with an in-depth brand research to ensure we only create
        products that serve a purpose. We merge art, design, and technology into
        exciting new solutions."
        />
        <Infographic
          image={resourcefulImg}
          alt="resourceful"
          title="Resourceful"
          description="Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
        />
        <Infographic
          image={friendlyImg}
          alt="friendly"
          title="Friendly"
          description="We are a group of enthusiastic folks who know how to put people
          first. Our success depends on our customers, and we strive to give them
          the best experience a company can provide."
        />
      </section>
      Let’s talk about your project Ready to take it to the next level? Contact
      us today and find out how our expertise can help your business grow. Get
      in touch
    </>
  );
}
