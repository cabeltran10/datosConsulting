import React from "react";
import Toggle from "./Toggle";
import { useSpring, animated } from "react-spring";

const AnimatedLogo = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <animated.div style={fade}>
      <h1>Hello</h1>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
};

export default AnimatedLogo;
