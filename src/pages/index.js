import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Classes from "../components/classes";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <About />
      <Classes />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Minds Grateful Hearts</title>;
