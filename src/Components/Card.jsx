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
                <div className="btn-container">
                  <a
                    className="button"
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live version
                  </a>
                  <a
                    className="button"
                    href={work.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    view code
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
