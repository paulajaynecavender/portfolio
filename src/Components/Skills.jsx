const Skills = () => {
  return (
    <section className="skills  section" id="skills">
      <div className="container">
        <h3 className="title skills-title">Tech Stack Skills</h3>
        <p className="description">
          I specialise in React.js but am always keen to learn more!
        </p>
        <div className="icons-grid">
          <div>
            <img src="https://skillicons.dev/icons?i=html" alt="html icon" />
            <p className="stack-name">HTML</p>
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=css" alt="css icon" />
            <p className="stack-name">CSS</p>
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=sass" alt="sass icon" />
            <p className="stack-name">SASS</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript icon"
            />
            <p className="stack-name">JavaScript</p>
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=react" alt="react icon" />
            <p className="stack-name">React</p>
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=redux" alt="redux icon" />
            <p className="stack-name">Redux</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="github icon"
            />
            <p className="stack-name">GitHub</p>
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=git" alt="git icon" />
            <p className="stack-name">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
