import Card from "./Card";

const Work = ({ setModal }) => {
  // create an array for all detail on cards then loop over to create each card
  return (
    <section className="work  section" id="work">
      <div className="container">
        <h3 className="title">My Projects</h3>
        <p className="description">
          Here are some projects that I have worked on. For more, don't forget
          to check out my{" "}
          <span
            className="link inline"
            href="https://github.com/paulajaynecavender"
          >
            <a
              href="https://github.com/paulajaynecavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub!
            </a>
          </span>
        </p>
        <div className="cards-container">
          <Card setModal={setModal} />
        </div>
      </div>
    </section>
  );
};

export default Work;
