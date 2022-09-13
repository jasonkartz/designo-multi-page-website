import Footer from "../components/footer";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <>
      <Layout />
      <main>Contact</main>
      <Footer includeContactCard={false} />
    </>
  );
}
