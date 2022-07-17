import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
// @ts-ignore
import ProjectsMDX from "../sections/projects";
import { Box } from "@chakra-ui/react";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.2}
      offset={1.1}
      factor={factor}
      clipPath={`polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`}
    />
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Box
          display={`grid`}
          gridGap={[4, 4, 4, 5]}
          gridTemplateColumns={[`1fr`, `1fr`, `repeat(2, 1fr)`]}
        ></Box>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="box"
          width={116}
          color="icon_brightest"
          left="85%"
          top="75%"
        />
        <Svg icon="upDown" width={118} color="icon_teal" left="70%" top="20%" />
        <Svg
          icon="triangle"
          width={118}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={164}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={116}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={112}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <Svg
          icon="circle"
          width={116}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          hiddenMobile
          width={116}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <Svg
          icon="circle"
          width={116}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={118}
          color="icon_green"
          left="45%"
          top="0%"
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
      <Svg icon="circle" width={182} color="icon_pink" left="80%" top="60%" />
      <Svg icon="box" width={106} color="icon_orange" left="10%" top="0%" />
      <Svg icon="box" width={122} color="icon_yellow" left="29%" top="26%" />
      <Svg
        icon="hexa"
        width={156}
        stroke
        color="icon_red"
        left="75%"
        top="80%"
      />
      <Svg
        icon="hexa"
        width={188}
        stroke
        color="icon_yellow"
        left="80%"
        top="90%"
      />
    </Divider>
  </div>
);

export default Projects;
