import Footer from "../components/footer";
import Layout from "../components/layout";
import CategoryCard from "../components/CategoryCard";
import CategoryBanner from "../components/CategoryBanner";

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
