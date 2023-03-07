import Card from "./Card";

const Work = () => {
  // create an array for all detail on cards then loop over to create each card
  return (
    <section className="work" id="work">
      <div className="work-container">
        <h3>my work</h3>
        <div className="cards-container">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Work;
