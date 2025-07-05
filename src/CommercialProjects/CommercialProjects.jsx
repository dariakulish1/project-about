import "./CommercialProjects.scss";

export const CommercialProjects = () => {
  return (
    <div className="commercial-projects">
      <h1>Commercial Projects</h1>
      <div className="projects-grid">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of your first commercial project</p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of your second commercial project</p>
          <div className="project-tech">
            <span>Vue.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}; 