import type { NextPage } from "next";
import styles from "../styles/Main.module.css";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Title from "../components/title";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Skills from "../components/skills";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Home: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={8}>
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={3.4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        /> */}
        <Title offset={0} factor={1} />
        <About offset={1} factor={1} />
        <Skills offset={2} factor={1} />
        <Projects offset={3} factor={4} />
        <Contact offset={7} factor={1} />
      </Parallax>
    </div>
  );
};

export default Home;
