import * as React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { Parallax } from "@react-spring/parallax";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <Layout>
      <Parallax pages={5}>
        <Title offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  );
};

export default IndexPage;
