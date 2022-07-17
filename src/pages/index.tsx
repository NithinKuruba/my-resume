import type { NextPage } from "next";
import styles from "../styles/Main.module.css";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Title from "../components/title";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Home: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <Title offset={0} factor={1} />
        <Projects offset={1} factor={1} />
        <About offset={2} factor={1} />
        <Contact offset={3} factor={1} />
      </Parallax>
    </div>
  );
};

export default Home;
