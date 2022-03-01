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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          exercitationem illum cupiditate eaque, voluptatem laborum ullam quia
          culpa adipisci quod doloribus minima excepturi aperiam nemo magnam
          sapiente dignissimos doloremque dolores.
        </p>
      </section>
      <section className="photo">
        <img src={photo} alt="" />
      </section>
    </motion.div>
  );
};

export default About;
