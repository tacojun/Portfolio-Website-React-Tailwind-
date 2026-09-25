const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive React portfolio focused on clean structure, accessibility, and maintainable components.',
    href: 'https://github.com/tacojun/Portfolio-Website-React-Tailwind-'
  },
  {
    title: 'Flask Chatbot',
    description: 'A Python and Flask project being improved with clearer configuration, documentation, and tests.',
    href: 'https://github.com/tacojun/Flask-Chatbot'
  }
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">tacojun</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Developer · Builder · Open-source learner</p>
          <h1 id="hero-title">Building useful things and learning in public.</h1>
          <p className="hero-copy">
            I work with JavaScript, React, Python, and Flask while improving my software engineering workflow through real projects and open-source contributions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href="https://github.com/tacojun">GitHub profile</a>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <p className="section-kicker">About</p>
          <h2 id="about-title">A practical, project-first approach</h2>
          <p>
            My current focus is turning small ideas into working applications, documenting the decisions behind them, and using issues and pull requests to keep changes reviewable.
          </p>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <p className="section-kicker">Projects</p>
          <h2 id="projects-title">Selected work</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href}>View repository →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Open to collaboration and useful feedback</h2>
          <p>The easiest place to follow my work or start a technical conversation is GitHub.</p>
          <a className="button primary" href="https://github.com/tacojun">Visit GitHub</a>
        </section>
      </main>

      <footer>
        <span>Built with React.</span>
        <a href="https://github.com/tacojun">github.com/tacojun</a>
      </footer>
    </div>
  );
}

export default App;
