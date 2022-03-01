import { motion, useAnimation } from "framer-motion";
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
    <div ref={ref} className="projectContainer">
      <motion.section animate={animation}>
        <h2>Projects</h2>
      </motion.section>
      <section className="grid">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1645906321292-07a671e6deb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <div className="title">
            <h3>Disny Plusss Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p>
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
            <h3>Disney Plus Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p>
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
            <h3>Disney Plus Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p>
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
            <h3>Disney Plus Clone</h3>
            <div className="button">
              <button>Github</button>
              <button>Live demo</button>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            laboriosam ipsa ullam praesentium dolor labore expedita modi,
            nostrum magnam iusto facilis sapiente quasi consequatur itaque
            dolores, odit accusantium, rerum libero.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
