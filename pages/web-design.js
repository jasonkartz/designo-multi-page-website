import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";
import ProjectCard from "../components/ProjectCard";

export default function WebDesign() {
  return (
    <>
      <Layout />
      <main>
        <CategoryBanner
          title="Web Design"
          description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
          bgImageClass="web-banner-bg-image"
        />
        <section className="project-portfolio">
          <ProjectCard
            bgImageClass="bg-express"
            heading="EXPRESS"
            description="A multi-carrier shipping website for ecommerce businesses"
          />
          <ProjectCard
            bgImageClass="bg-transfer"
            heading="TRANSFER"
            description="Site for low-cost money transfers and sending money within seconds"
          />
          <ProjectCard
            bgImageClass="bg-photon"
            heading="PHOTON"
            description="A state-of-the-art music player with high-resolution audio and DSP effects"
          />
          <ProjectCard
            bgImageClass="bg-builder"
            heading="BUILDER"
            description="Connects users with local contractors based on their location"
          />
          <ProjectCard
            bgImageClass="bg-blogr"
            heading="BLOGR"
            description="Blogr is a platform for creating an online blog or publication"
          />
          <ProjectCard
            bgImageClass="bg-camp"
            heading="CAMP"
            description="Get expert training in coding, data, design, and digital marketing"
          />
        </section>
        <section className="category-container">
          <CategoryCard
            background="category-app"
            title="app design"
            link="app-design"
          />
          <CategoryCard
            background="category-graphic"
            title="graphic design"
            link="graphic-design"
          />
        </section>
      </main>
      <Footer includeContactCard={true} />
    </>
  );
}
