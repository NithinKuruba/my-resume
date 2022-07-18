import { Box } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { jsx } from "@chakra-ui/react";

type ContentProps = {
  speed: number;
  offset: number;
  children: React.ReactNode;
  className?: string;
  factor?: number;
};

const Content = ({
  speed,
  offset,
  children,
  className = ``,
  factor = 1,
}: ContentProps) => (
  <ParallaxLayer
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
);

export default Content;
