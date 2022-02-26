import photo from "../images/austin-wade-X6Uj51n5CE8-unsplash.jpg";
const About = () => {
  return (
    <div className="aboutContainer">
      <section>
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
    </div>
  );
};

export default About;
