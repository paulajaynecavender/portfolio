import Card from "./Card";

const Work = ({ setModal }) => {
  // create an array for all detail on cards then loop over to create each card
  return (
    <section className="work" id="work">
      <div className="container">
        <h3 className="title">My Projects</h3>
        <p class="description">
          Here are some projects that I have worked on. For more, don't forget
          to check out my <span className="link inline">GitHub!</span>
        </p>
        <div className="cards-container">
          <Card setModal={setModal} />
        </div>
      </div>
    </section>
  );
};

export default Work;
