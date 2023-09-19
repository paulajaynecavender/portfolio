import Card from "./Card";

const Work = ({ setModal }) => {
  // create an array for all detail on cards then loop over to create each card
  return (
    <section className="work" id="work">
      <div className="container">
        <h3 className="title">My Projects</h3>
        <p class="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, aut
          delectus! Animi nam, accusamus ducimus, distinctio consequuntur.
        </p>
        <div className="cards-container">
          <Card setModal={setModal} />
        </div>
      </div>
    </section>
  );
};

export default Work;
