const FantasyFootball = ({ modal, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className={modal ? "modal-open" : "modal-hidden"}>
      <p className="close-modal" onClick={closeModal}>
        close
      </p>
      <div className="screenshots">
        <img
          src="../assets/fantasy_football_screenshots/home-menu-1.png"
          alt=""
        />
        <img
          src="../assets/fantasy_football_screenshots/home-menu-2.png"
          alt=""
        />
        <img
          src="../assets/fantasy_football_screenshots/team-selection.png"
          alt=""
        />
        <img
          src="../assets/fantasy_football_screenshots/team-stats.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FantasyFootball;
