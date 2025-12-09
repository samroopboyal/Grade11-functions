import './App.css'

const topics = [
  {
    title: 'Linear and Quadratic Relations',
    points: [
      'Interpret slopes, intercepts, and the effects of transformations.',
      'Model scenarios with linear functions and solve using algebraic or graphical methods.',
      'Compare standard, vertex, and factored forms to analyze quadratics.'
    ]
  },
  {
    title: 'Exponential and Polynomial Functions',
    points: [
      'Investigate growth/decay situations and connect them to real-world contexts.',
      'Use function notation to communicate relationships and restrictions.',
      'Perform operations on polynomials and explore higher-degree functions.'
    ]
  },
  {
    title: 'Trigonometric Connections',
    points: [
      'Review right-triangle trigonometry and extend to periodic relationships.',
      'Relate sine and cosine graphs to amplitude, midline, and phase shift.',
      'Solve problems involving angles of elevation/depression and navigation.'
    ]
  },
  {
    title: 'Data and Modelling Skills',
    points: [
      'Evaluate when to model with a function versus a discrete relation.',
      'Use tables, graphs, and technology to compare different models.',
      'Interpret domain, range, and rate of change using proper mathematical language.'
    ]
  }
]

const studyHabits = [
  'Sketch first: translate descriptions into graphs before using a calculator.',
  'Check units and scales on every graph so your interpretations stay realistic.',
  'Rewrite functions in different forms (standard, factored, vertex) to see new insights.',
  'Summarize each practice set with a few sentences explaining what the function tells you.',
  'Use Desmos or graphing tools to visualize transformations step by step.'
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Ontario Grade 11 Mathematics</p>
        <h1>Functions (MCR3U) Student Guide</h1>
        <p className="lede">
          A quick reference for the main ideas, skills, and study habits you need to feel
          confident in Grade 11 Functions across Ontario. Use it as a checklist while you
          work through lessons, assignments, and exam review.
        </p>
        <div className="cta-row">
          <a className="button primary" href="#topics">Explore topics</a>
          <a className="button ghost" href="#study-habits">Study habits</a>
        </div>
      </header>

      <section className="grid" id="overview">
        <div className="card">
          <h2>Course focus</h2>
          <p>
            The course builds a bridge from algebra to real-world modelling. You will
            analyze how changes in equations affect graphs, compare different ways of
            writing the same function, and interpret what each part means in context.
          </p>
        </div>
        <div className="card">
          <h2>Success criteria</h2>
          <ul>
            <li>Use proper notation for domain, range, and function restrictions.</li>
            <li>Explain how transformations affect key points or features.</li>
            <li>Choose appropriate tools (algebra, graphing, technology) for a problem.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Assessment reminders</h2>
          <p>
            Expect a blend of skill checks, application problems, and investigations.
            Show reasoning with labeled diagrams, organized algebra, and concise
            explanations of what your answer represents.
          </p>
        </div>
      </section>

      <section className="topics" id="topics">
        <div className="section-header">
          <p className="eyebrow">What to review</p>
          <h2>Key ideas and checkpoints</h2>
          <p className="lede">
            Use this list as a roadmap for quizzes and unit tests. Try creating a small
            example for each point to see if you can explain it aloud.
          </p>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <h3>{topic.title}</h3>
              <ul>
                {topic.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resources" id="study-habits">
        <div className="section-header">
          <p className="eyebrow">Build confidence</p>
          <h2>Study habits that pay off</h2>
          <p className="lede">
            Blend practice with reflection so the patterns in functions feel natural.
            Revisit these tips each time you start a new unit.
          </p>
        </div>
        <div className="split">
          <div className="card">
            <h3>Consistent routines</h3>
            <ul>
              {studyHabits.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="card highlight">
            <h3>Exam warm-up plan</h3>
            <ol>
              <li>Pick three representative problems: algebraic, graphical, and word-based.</li>
              <li>Set a 20-minute timer and work with no notes to spot gaps.</li>
              <li>Check answers, then rewrite one solution more cleanly as if teaching a peer.</li>
            </ol>
            <p className="note">
              If you get stuck, rewrite the question in your own words or sketch a quick
              diagram to surface the relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Need a checklist?</p>
          <h2>Track your progress for each unit</h2>
          <p>
            After every lesson, mark one new concept you understand and one question you
            still have. This habit keeps you ready for unit tests and the final exam.
          </p>
        </div>
        <a className="button secondary" href="#overview">Back to the top</a>
      </section>
    </div>
  )
}

export default App
