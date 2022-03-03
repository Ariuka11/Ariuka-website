import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import photo from "../images/austin-wade-X6Uj51n5CE8-unsplash.jpg";

const About = () => {
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
    [inViewRef]
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
        },
      });
    } else {
    }
  }, [inView2]);

  return (
    <motion.div id="about" ref={setRefs} className="aboutContainer">
      <motion.section animate={animation1}>
        <h2>About Me</h2>
        <p>
          {""}Hi! I am <b>Ariunbold Oyungerel.</b> Graduated from{" "}
          <b>Bloomtech</b> {""}
          coding school in 2021 after one and a half years long full stack
          developer program. I genuinly enjoy writing code. Makes me wish I
          started earlier. I am father of two beautiful daugthers and husband to
          an one beautiful wife.
        </p>
        <p>
          {""}I can create a websign in <b>Figma</b> and Framer. Then I create
          the website in <b>React</b>. Mainly like to work with Next.js or Vite.
          I prefer styling with <b>SASS</b> but recently Tailwind seems a better
          option.
        </p>
        <p></p>
      </motion.section>
      <section className="photo">
        <img src={photo} alt="" />
      </section>
    </motion.div>
  );
};

export default About;
