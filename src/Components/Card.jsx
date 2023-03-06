const Card = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            minima temporibus facilis saepe, ratione nostrum numquam dolor est!
            Odit obcaecati neque quas voluptatum doloribus quia saepe officiis
            recusandae! Quos, atque.
          </p>
          <div class="btn-container">
            <button>live</button>
            <button>code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
