import Divider from "./divider";
import Inner from "./inner";
import Content from "./content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "./animations";
import { Box } from "@chakra-ui/react";

const Title = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="triangle"
          hiddenMobile
          width={158}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <Svg
          icon="hexa"
          width={158}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
        />
        <Svg icon="box" width={126} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={126}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <Svg
          icon="triangle"
          width={122}
          stroke
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <Svg
          icon="circle"
          width={126}
          color="icon_darker"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={126}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <Svg
          icon="cross"
          width={126}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <Svg
          icon="circle"
          width={116}
          color="icon_darkest"
          left="75%"
          top="10%"
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
        width={134}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <Svg icon="circle" width={116} color="icon_darkest" left="4%" top="20%" />
      <Svg
        icon="circle"
        width={122}
        color="icon_darkest"
        left="50%"
        top="60%"
      />
      <Svg
        icon="upDown"
        width={118}
        color="icon_darkest"
        left="95%"
        top="90%"
      />
      <Svg
        icon="upDown"
        hiddenMobile
        width={134}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <Svg
        icon="triangle"
        width={118}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <Svg icon="circle" width={364} color="icon_green" left="95%" top="5%" />
      <Svg
        icon="box"
        hiddenMobile
        width={174}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <Svg icon="box" width={16} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={22} color="icon_darkest" left="40%" top="30%" />
      <Svg
        icon="hexa"
        width={126}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <Svg
        icon="hexa"
        width={118}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1>Hi, I'm Nithin Shekar Kuruba</h1>
      </Inner>
    </Content>
  </div>
);

export default Title;
