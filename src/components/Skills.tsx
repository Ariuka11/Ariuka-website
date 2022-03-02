import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Svg from "./Svg";

const Skills = () => {
  const ref = useRef();
  const [inViewRef, inView2] = useInView();

  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );
  const animation1 = useAnimation();
  
  useEffect(() => {
    if (inView2) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          when: "beforeChildren",
          delayChildren: 1,
        },
      });
    } else {
      animation1.start({ x: "-100vw" });
    }
 
  }, [inView2]);
  return (
    <motion.div ref={setRefs} className="skillsContainer">
      <motion.section animate={animation1}>
        <h2>Skills</h2>
      </motion.section>
      <Svg />
      {/* <motion.section className="gridSkill">
        <Icon
          icon="logos:javascript"
          width={"100%"}
          className="logo tall-wide"
        />
        <Icon icon="logos:react" width={"100%"} className="logo tall-wide" />
        <Icon icon="logos:html-5" width={"100%"} className="logo" />
        <Icon icon="logos:css-3" width={"100%"} className="logo" />
        <Icon icon="logos:nodejs" width={"100%"} className="logo tall-wide" />
        <Icon
          icon="logos:mongodb"
          color="black"
          width={"100%"}
          className="logo"
        />
        <Icon icon="logos:redux" width={"100%"} className="logo" />
        <Icon icon="logos:typescript-icon" width={"100%"} className="logo" />
        <Icon icon="logos:tailwindcss-icon" width={"100%"} className="logo" />
        <Icon icon="logos:figma" width={"100%"} className="logo wide" />
        <Icon icon="logos:nextjs-icon" width={"100%"} className="logo" />
        <Icon icon="logos:express" width={"100%"} className="logo" />
        <Icon icon="logos:git" width={"100%"} className="logo" />
        <Icon icon="logos:vitejs" width={"100%"} className="logo" />
        <Icon icon="logos:svelte-icon" width={"100%"} className="logo" />
        <Icon icon="logos:python" width={"100%"} className="logo wide" />
        <Icon icon="simple-icons:threedotjs" width={"100%"} className="logo" />
        <Icon icon="logos:docker-icon" width={"100%"} className="logo" />
      </motion.section> */}
    </motion.div>
  );
};

export default Skills;
