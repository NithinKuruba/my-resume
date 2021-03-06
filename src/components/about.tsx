import * as React from "react";
import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
import { useTheme } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const theme = useTheme();
  return (
    <div>
      <Divider
        bg="linear-gradient(to right, red 0%, orange 100%)"
        speed={-0.2}
        offset={offset}
        factor={factor}
        clipPath={`polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`}
      />
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg
            icon="box"
            hiddenMobile
            width={116}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={118}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <Svg
            icon="triangle"
            width={118}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={124}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={116}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <Svg
            icon="triangle"
            width={112}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <Svg
            icon="circle"
            hiddenMobile
            width={116}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={118}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg
          icon="circle"
          hiddenMobile
          width={116}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <Svg
          icon="circle"
          width={112}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <Svg icon="box" width={116} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={112} color="icon_darkest" left="20%" top="30%" />
        <Svg
          icon="hexa"
          width={118}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <div style={{ maxWidth: "1000px" }}>
          <Inner>
            <h2>About</h2>
            <p style={{ textAlign: "justify" }}>
              Nithin is a logical and results driven Full Stack Developer and a
              Test Automation Speacialist dedicated to building and optimizing
              user-focused websites and applications. 7 plus years of experience
              in Analyzing, Designing, Developing and Integrating front end and
              back end applications. Judicious and creative when crafting
              effective websites, apps and platforms to propel competetive
              advantage and revenue growth. Technically proficient and
              analytical problem solver with calm and focused demeanor
            </p>
            <br />
            <Button bg={`primary`}>Download Resume</Button>
          </Inner>
        </div>
      </Content>
    </div>
  );
};

export default About;
