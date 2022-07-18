import * as React from "react";
import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
import { useTheme } from "@chakra-ui/react";
import CircularProgressWithLabel from "./circularprogresswithlabel";
import styles from "../styles/Skills.module.css";

const Skills = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => {
  const theme = useTheme();
  const skills = {
    NodeJS: 90,
    Python: 80,
    Docker: 98,
    Kubernetes: 85,
    CICD: 90,
    Terraform: 80,
    Java: 85,
    AWS: 60,
  };
  return (
    <div>
      <Divider speed={0.4} offset={offset} factor={factor}>
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
      <Divider
        bg={theme.colors.divider}
        clipPath={`polygon(0 16%, 100% 4%, 100% 82%, 0 94%)`}
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <div className={styles.skills}>
            <h2 style={{ gridColumn: "-1/1", color: "white !important" }}>
              Skills
            </h2>
            <CircularProgressWithLabel value={90} label={"NodeJS"} />
            <CircularProgressWithLabel value={80} label={"Python"} />
            <CircularProgressWithLabel value={98} label={"Docker"} />
            <CircularProgressWithLabel value={85} label={"Kubernetes"} />
            <CircularProgressWithLabel value={90} label={"CI/CD"} />
            <CircularProgressWithLabel value={80} label={"Terraform"} />
            <CircularProgressWithLabel value={85} label={"Java"} />
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default Skills;
