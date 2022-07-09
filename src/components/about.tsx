import * as React from "react";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
// @ts-ignore
import AboutMDX from "../sections/about";

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_purple"
          left="5%"
          top="80%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1>About Me</h1>
        <p>
          Nithin is a full stack developer, who also has experience performing
          other roles such as production support executive and test automation
          developer. Nithin grew up in India, where he earned his bachelors
          degree in Bio-Medical Engineering. He moved to Canada in 2016 for
          studies, where he obtained his masters degree in Computer Engineering
          from University of Victoria.
        </p>
        <p>
          He started his journey in Information Technology by performing
          multiple roles in Tata Consultancy Services back in India. After
          earning his masters degree, he joined Vivid Solutions Inc as a
          developer and contributed in different projects including wildfire
          one. He later moved to BC Pensions, where he helped the automation
          team in many process improvements. In 2021, he joined Ministry of
          Citizen Services, APS team where he played an important role in some
          tech advancements.
        </p>
        <p>
          When not working, Nithin enjoys cooking, hiking, watching tech videos,
          and playing chess.
        </p>
      </Inner>
    </Content>
  </div>
);

export default About;
