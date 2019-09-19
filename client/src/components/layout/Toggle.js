import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
    fontSize: isToggled ? "10rem" : "1em",
    color: isToggled ? "tomato" : "green",
    transform: isToggled ? "translate3d(0,0,0)" : "translate3d(0,-50px,0)"
  });

  return (
    <div>
      <animated.h1 style={fade}>I take a lot but.. IT WORKS!!!</animated.h1>
      <button className="btn" onClick={() => setToggle(!isToggled)}>Show Creative</button>
    </div>
  );
};

export default Toggle;
