import Footer from "../components/footer";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout />
      <main>About</main>
      <Footer includeContactCard={true} />
    </>
  );
}
