import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdBook, MdClass } from "react-icons/md";
import { useTheme } from "@emotion/react";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => {
  const theme = useTheme();
  return (
    <div>
      <Content speed={0.2} offset={offset + 0.7} factor={factor}>
        <Inner>
          <h2>Professional Journey</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Victoria, BC
              </h4>
              <p>BC Public Service</p>
              <p>(2022 - Present)</p>
              <p>
                Code Development, DevOps, User Experience, System Improvements,
                Software Architecture
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Victoria, BC
              </h4>
              <p>BC Public Service</p>
              <p>(2021 - 2022)</p>
              <p>
                Code Development, DevOps, User Experience, System Improvements,
                Software Architecture, Address Client Issues
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Intermediate Test Automation Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Victoria, BC
              </h4>
              <p>BC Pension Corporation</p>
              <p>(2019 - 2020)</p>
              <p>
                Code Development, DevOps, System Improvements, Regression
                Analysis, Test Upgrades
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Victoria, BC
              </h4>
              <p>Vivid Solutions Inc.</p>
              <p>(2018 - 2019)</p>
              <p>
                Code Development, DevOps, User Experience, System Improvements,
                Software Architecture, Address Client Issues
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer Coop
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Victoria, BC
              </h4>
              <p>BC Public Service</p>
              <p>(2017 - 2018)</p>
              <p>Prototype Development, DevOps, Software Evaluation</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdClass />}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Masters Degree
              </h4>
              <p>University Of Victoria</p>
              <p>(2016 - 2018)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Systems Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Hyd, India</h4>
              <p>Tata Consultancy Services</p>
              <p>(2012 - 2015)</p>
              <p>
                Code Development, DevOps, User Experience, System Improvements,
                Software Architecture, Disaster Recovery, Adhoc Reports,
                Application Maintenance, Oracle Apps
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: eval(`theme.colors.primary`),
                color: eval(`theme.colors.text`),
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdClass />}
            >
              <h3 className="vertical-timeline-element-title">
                Biomedical Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>BIET (VTU)</p>
              <p>(2008 - 2012)</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
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
          <Svg
            icon="upDown"
            width={118}
            color="icon_teal"
            left="70%"
            top="20%"
          />
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
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={offset}
        factor={factor}
        clipPath={`polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`}
      />
    </div>
  );
};

export default Projects;
