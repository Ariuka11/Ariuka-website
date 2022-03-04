import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navContainer">
      <main>
        <h1>
          <Link
            className="ariuka"
            to="hero"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            Ariuka.
          </Link>
        </h1>
        <section>
          <Link to="about" spy={true} smooth={true} offset={-55} duration={500}>
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
            to="projects"
          >
            Projects
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
            to="contact"
          >
            Contact
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
