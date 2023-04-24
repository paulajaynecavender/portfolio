import Links from "./Links";
import myWork from "./work-data";

const Card = () => {
  return (
    <>
      {myWork.map((work) => {
        return (
          <div key={work.id} className="card">
            <img src={work.img} alt="weather" />
            <div className="card-description">
              <h4>{work.title}</h4>
              <p className="info-text">{work.description}</p>
              <div className="card-footer">
                <div className="stack">
                  <p>{work.stack}</p>
                </div>
                <Links work={work} />
                {/* if work.live = fantasy footabll do this  otherwise, do this */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
