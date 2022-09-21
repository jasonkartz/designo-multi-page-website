import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";

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
