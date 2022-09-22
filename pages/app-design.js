import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";
import ProjectCard from "../components/ProjectCard";

export default function AppDesign() {
  return (
    <>
      <Layout />
      <main>
        <CategoryBanner
          title="App Design"
          description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
          bgImageClass="app-banner-bg-image"
        />
        <section className="project-portfolio">
          <ProjectCard
            bgImageClass="bg-airfilter"
            heading="AIRFILTER"
            description="Solving the problem of poor indoor air quality by filtering the air"
          />
          <ProjectCard
            bgImageClass="bg-eyecam"
            heading="EYECAM"
            description="Product that lets you edit your favorite photos and videos at any time"
          />
          <ProjectCard
            bgImageClass="bg-faceit"
            heading="FACEIT"
            description="Get to meet your favorite internet superstar with the faceit app"
          />
          <ProjectCard
            bgImageClass="bg-todo"
            heading="TODO"
            description="A todo app that features cloud sync with light and dark mode"
          />
          <ProjectCard
            bgImageClass="bg-loopstudios"
            heading="LOOPSTUDIOS"
            description="A VR experience app made for Loopstudios"
          />
        </section>
        <section className="category-container">
          <CategoryCard
            background="category-web"
            title="web design"
            link="web-design"
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
