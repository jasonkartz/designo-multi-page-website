import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";
import ProjectCard from "../components/ProjectCard";

export default function GraphicDesign() {
  return (
    <>
      <Layout />
      <main>
        <CategoryBanner
          title="Graphic Design"
          description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
          bgImageClass="graphic-banner-bg-image"
        />
        <section className="project-portfolio">
          <ProjectCard
            bgImageClass="bg-tim-brown"
            heading="TIM BROWN"
            description="A book cover designed for 
                        Tim Brown’s new release, ‘Change’"
          />
          <ProjectCard
            bgImageClass="bg-boxed-water"
            heading="BOXED WATER"
            description="A simple packaging concept made for Boxed Water"
          />
          <ProjectCard
            bgImageClass="bg-science"
            heading="SCIENCE!"
            description="A poster made in collaboration with the Federal Art Project"
          />
        </section>
        <section className="category-container">
          <CategoryCard
            background="category-web"
            title="web design"
            link="web-design"
          />
          <CategoryCard
            background="category-app"
            title="app design"
            link="app-design"
          />
        </section>
      </main>
      <Footer includeContactCard={true} />
    </>
  );
}
