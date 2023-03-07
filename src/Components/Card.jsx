import myWork from "./work-data";

const Card = () => {
  console.log(myWork);

  return (
    <>
      {myWork.map((work) => {
        console.log(work.stack);
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
                  <a className="button" href={work.live}>
                    live
                  </a>
                  <a className="button" href={work.code}>
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
