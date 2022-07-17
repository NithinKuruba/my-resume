import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
import Footer from "./footer";
import { keyframes, useTheme } from "@chakra-ui/react";
import styles from "../styles/Contact.module.css";

const Contact = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => {
  const theme = useTheme();
  return (
    <div>
      <Divider
        fill={theme.colors.divider}
        speed={0.2}
        offset={offset}
        factor={factor}
      >
        <div
          style={{
            position: `absolute`,
            bottom: 0,
            width: "100%",
            transform: `matrix(1, 0, 0, -1, 0, 0)`,
          }}
        >
          <div
            style={{
              position: `relative`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="contact-wave"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
              width={"100%"}
              height={"40vh"}
            >
              <path className={`styles.wave-animation`}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </div>
        </div>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <div></div>
        </Inner>
        <Footer />
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
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
        </UpDown>
        <UpDownWide>
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
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <Svg
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
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
    </div>
  );
};

export default Contact;
