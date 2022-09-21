import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";

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
