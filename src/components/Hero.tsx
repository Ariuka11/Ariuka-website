import { motion } from "framer-motion";
const project = {
  begin: {
    x: "-100vw",
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};
const me = {
  begin: {
    x: "100vw",
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="heroContainer">
      <main>
        <section>
          <motion.h1 variants={project} initial="begin" animate="start">
            Hire
          </motion.h1>
          <motion.h1 id="me" variants={me} initial="begin" animate="start">
            Me
          </motion.h1>
        </section>
        <h2>Full Stack Developer</h2>
        <h2 className="passionate">Passionate</h2>
      </main>
    </div>
  );
};

export default Hero;
