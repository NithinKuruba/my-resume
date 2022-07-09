import * as React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { Parallax } from "@react-spring/parallax";
import About from "../components/about";
import Contact from "../components/contact";
import Skills from "../components/skills";

const IndexPage = () => {
  return (
    <Layout>
      <Parallax pages={4}>
        <Title offset={0} factor={1} />
        <About offset={1} factor={1} />
        <Skills offset={2} factor={1} />
        <Contact offset={3} factor={1} />
      </Parallax>
    </Layout>
  );
};

export default IndexPage;
