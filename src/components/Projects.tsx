import { motion, useAnimation } from "framer-motion";
import trello from "../images/Screen Shot 2022-03-01 at 12.47.42 PM.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
    <motion.div  ref={ref} className="projectContainer">
      <motion.section animate={animation}>
        <h2>Projects</h2>
      </motion.section>
      <motion.section className="grid">
        <motion.div className="card">
          <motion.img
            src="https://images.unsplash.com/photo-1645906321292-07a671e6deb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <motion.div className="title">
            <h3>Disny Plus Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </motion.div>
          <motion.p initial ={{x: "-100vw"}} animate={{x: 0}} className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            laboriosam ipsa ullam praesentium dolor labore expedita modi,
            nostrum magnam iusto facilis sapiente quasi consequatur itaque
            dolores, odit accusantium, rerum libero.
          </motion.p>
        </motion.div>
        <motion.div className="card">
          <img
            src="https://images.unsplash.com/photo-1645906321292-07a671e6deb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <div className="title">
            <h3>E-commerce Web</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            laboriosam ipsa ullam praesentium dolor labore expedita modi,
            nostrum magnam iusto facilis sapiente quasi consequatur itaque
            dolores, odit accusantium, rerum libero.
          </p>
        </motion.div>
        <div className="card">
          <img src={trello} alt="" />
          <div className="title">
            <h3>Trello Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            laboriosam ipsa ullam praesentium dolor labore expedita modi,
            nostrum magnam iusto facilis sapiente quasi consequatur itaque
            dolores, odit accusantium, rerum libero.
          </p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1645906321292-07a671e6deb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <div className="title">
            <h3>E-commerce Admin panel</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            laboriosam ipsa ullam praesentium dolor labore expedita modi,
            nostrum magnam iusto facilis sapiente quasi consequatur itaque
            dolores, odit accusantium, rerum libero.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;
