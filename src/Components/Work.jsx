const Work = () => {
  // create an array for all detail on cards then loop over to create each card
  return (
    <section className="work" id="work">
      <div className="work-container">
        <h3>my work</h3>
        <div class="cards-container">
          <div class="card">
            <div class="inner-container">
              {/* <img src="./assets/weather.png" alt="weather" /> */}
              <div class="card-description">
                <h4>weather app</h4>
                <div class="stack">
                  <p>react</p>
                  <p>redux</p>
                  <p>restAPI</p>
                </div>
                <p class="info-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero minima temporibus facilis saepe, ratione nostrum
                  numquam dolor est! Odit obcaecati neque quas voluptatum
                  doloribus quia saepe officiis recusandae! Quos, atque.
                </p>
                <div class="btn-container">
                  <button>live</button>
                  <button>code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
