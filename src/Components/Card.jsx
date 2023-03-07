import myWork from "./work-data";

const Card = () => {
  return (
    <>
      {myWork.map((work) => {
        return (
          <div key={work.id} className="card">
            <div className="inner-container">
              <img src={work.img} alt="weather" />
              <div className="card-description">
                <h4>{work.title}</h4>
                <div className="stack">
                  <p>{work.stack}</p>
                </div>
                <p className="info-text">{work.description}</p>
                <div className="btn-container">
                  <a
                    className="button"
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live
                  </a>
                  <a
                    className="button"
                    href={work.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    code
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
