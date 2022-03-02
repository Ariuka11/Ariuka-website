import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import photo from "../images/austin-wade-X6Uj51n5CE8-unsplash.jpg";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <motion.div className="aboutContainer">
      <section ref={ref}>
        <h2>About Me</h2>
        <p>
          Hi! I am <b>Ariunbold Oyungerel.</b> Graduated from{" "}
          <b>Bloomtech</b> {""}
          coding school in 2021 after one and a half years long full stack
          developer program. I genuinly enjoy writing code. Makes me wish I
          started earlier. I am father of two beautiful daugthers and husband to
          an one beautiful wife.
        </p>
        <p>
          I can create a websign in <b>Figma</b>  and Framer. Then I create the website
          in <b>React</b>. Mainly like to work with Next.js or Vite. I prefer styling
          with <b>SASS</b>  but recently Tailwind seems a better option.
        </p>
        <p></p>
      </section>
      <section className="photo">
        <img src={photo} alt="" />
      </section>
    </motion.div>
  );
};

export default About;
