import { ParallaxLayer } from "@react-spring/parallax";

type DividerProps = {
  speed: number;
  offset: number;
  children?: React.ReactNode;
  bg?: string;
  fill?: string;
  clipPath?: string;
  className?: string;
  factor?: number;
};

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <ParallaxLayer
    style={{
      position: `absolute`,
      width: `full`,
      background: bg,
      backgroundColor: bg,
      clipPath,
      fill,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
);

export default Divider;
