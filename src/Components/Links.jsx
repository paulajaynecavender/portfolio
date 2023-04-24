const Links = ({ work, setModal }) => {
  const openModal = () => {
    setModal((current) => !current);
  };

  switch (work.id) {
    case 3:
      return (
        <div className="btn-container">
          <button className="button" onClick={openModal}>
            view project
          </button>
          <a
            className="button"
            href={work.code}
            target="_blank"
            rel="noreferrer"
          >
            view code
          </a>
        </div>
      );

    default:
      return (
        <div className="btn-container">
          <a
            className="button"
            href={work.live}
            target="_blank"
            rel="noreferrer"
          >
            view project
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
      );
  }
};

export default Links;
