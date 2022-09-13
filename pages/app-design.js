import Footer from "../components/footer";
import Layout from "../components/layout";

export default function AppDesign() {
  return (
    <>
      <Layout />
      <main>App Design</main>
      <Footer includeContactCard={true} />
    </>
  );
}
