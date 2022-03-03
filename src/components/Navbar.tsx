import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navContainer">
      <main>
        <h1>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            Google
          </Link>
        </h1>
        <section>
          <h3>About</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
