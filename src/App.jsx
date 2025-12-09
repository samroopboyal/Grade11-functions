import './App.css'

const units = [
  {
    id: 'functions',
    title: 'Functions',
    bullets: [
      'Terminology and notation for relations vs. functions, domain, range, and restrictions',
      'Evaluating, composing, and working with inverses using one-to-one tests',
      'Spotting even/odd behaviour and interpreting rates of change in context'
    ]
  },
  {
    id: 'rational-expressions',
    title: 'Rational Expressions',
    bullets: [
      'Factor numerators/denominators and simplify with stated restrictions',
      'Add, subtract, multiply, and divide rational expressions accurately',
      'Solve rational equations and inequalities while checking for extraneous solutions'
    ]
  },
  {
    id: 'transformations',
    title: 'Transformations',
    bullets: [
      'Link parameters a, k, d, c to stretches, reflections, and translations',
      'Map key points from parent functions such as linear, quadratic, reciprocal, and root',
      'Write equations from transformed graphs and describe changes clearly'
    ]
  },
  {
    id: 'exponential-functions',
    title: 'Exponential Functions',
    bullets: [
      'Connect initial value, base, and growth/decay factor to real scenarios',
      'Graph with asymptotes and interpret percent change and restrictions',
      'Solve exponential equations using logarithms and change-of-base strategies'
    ]
  },
  {
    id: 'trig-geometry',
    title: 'Trig Geometry',
    bullets: [
      'Use right-triangle trig ratios and special angles to solve for sides and angles',
      'Apply the sine law and cosine law, noting the ambiguous case when it appears',
      'Model bearings, elevation/depression, and area problems with clear diagrams'
    ]
  },
  {
    id: 'trig-functions',
    title: 'Trig Functions',
    bullets: [
      'Graph sine and cosine with amplitude, period, phase shift, and vertical shift',
      'Relate unit-circle values to periodic behaviour and key points on graphs',
      'Model oscillations like sound, tides, or ferris wheels and interpret parameters'
    ]
  },
  {
    id: 'discrete-functions',
    title: 'Discrete Functions',
    bullets: [
      'Work with arithmetic and geometric sequences/series in recursive and explicit forms',
      'Use sigma notation, partial sums, and financial applications such as annuities',
      'Compare discrete vs. continuous models and choose the best representation'
    ]
  }
]
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

const unitContents = [
  {
    unit: '1. Functions',
    sections: [
      'Terminology and notation: relations vs. functions, domain, range, restrictions',
      'Evaluating and composing functions; working with inverses and one-to-one tests',
      'Identifying even/odd behaviour and interpreting rates of change in context'
    ]
  },
  {
    unit: '2. Rational Expressions',
    sections: [
      'Factoring numerators/denominators and simplifying with restrictions stated',
      'Adding, subtracting, multiplying, and dividing rational expressions accurately',
      'Solving rational equations/inequalities and checking for extraneous solutions'
    ]
  },
  {
    unit: '3. Transformations',
    sections: [
      'Linking parameters a, k, d, c to stretches, reflections, and translations',
      'Mapping key points from parent functions (linear, quadratic, reciprocal, root)',
      'Writing equations from transformed graphs and describing changes in words'
    ]
  },
  {
    unit: '4. Exponential Functions',
    sections: [
      'Connecting initial value, base, and growth/decay factor to real scenarios',
      'Graphing with asymptotes, restrictions, and interpreting percent change',
      'Solving exponential equations using logarithms and change-of-base strategies'
    ]
  },
  {
    unit: '5. Trig Geometry',
    sections: [
      'Right-triangle trig ratios, special angles, and solving for missing sides/angles',
      'Applying the sine law and cosine law, including ambiguous case awareness',
      'Connecting triangle solutions to bearing, elevation/depression, and area problems'
    ]
  },
  {
    unit: '6. Trig Functions',
    sections: [
      'Graphing sine/cosine with amplitude, period, phase shift, and vertical shift',
      'Relating unit-circle values to periodic behaviour and key points on graphs',
      'Modelling oscillations (sound, tides, ferris wheels) and interpreting parameters'
    ]
  },
  {
    unit: '7. Discrete Functions',
    sections: [
      'Arithmetic and geometric sequences/series with recursive and explicit forms',
      'Using sigma notation, partial sums, and financial applications like annuities',
      'Comparing discrete vs. continuous models and choosing appropriate representations'
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
        <p className="eyebrow">Ontario Secondary School • MCR3U</p>
        <h1>Ontario Grade 11 Functions (MCR3U)</h1>
        <p className="subtitle">
          A clean, at-a-glance hub for the seven course units. Open a card to dive into
          lesson checklists, examples, and study tips for each unit.
        </p>
      </header>

      <section className="unit-section" aria-labelledby="units-title">
        <div className="unit-header">
          <p className="eyebrow">Unit roadmap</p>
          <h2 id="units-title">Explore the seven units</h2>
          <p className="section-note">
            Use these cards as your quick table of contents. Each links to a focused unit
            page so the homepage stays light and easy to scan.
          </p>
        </div>

        <div className="unit-grid">
          {units.map((unit, index) => (
            <a className="unit-card" href={`/units/${unit.id}`} key={unit.id}>
              <div className="unit-meta">Unit {index + 1}</div>
              <h3>{unit.title}</h3>
              <ul>
                {unit.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>
        <p className="eyebrow">Ontario Grade 11 Mathematics</p>
        <h1>Functions (MCR3U) Student Guide</h1>
        <p className="lede">
          A quick reference for the main ideas, skills, and study habits you need to feel
          confident in Grade 11 Functions across Ontario. Use it as a checklist while you
          work through lessons, assignments, and exam review.
        </p>
        <div className="cta-row">
          <a className="button primary" href="#units">See unit table</a>
          <a className="button ghost" href="#topics">Explore topics</a>
          <a className="button primary" href="#topics">Explore topics</a>
          <a className="button ghost" href="#study-habits">Study habits</a>
        </div>
      </header>

      <section className="units" id="units">
        <div className="section-header">
          <p className="eyebrow">Unit roadmap</p>
          <h2>Table of contents by unit</h2>
          <p className="lede">
            Scan the unit summaries below to see how lessons connect. Use them as
            bookmarks for your notes or to plan weekly study goals.
          </p>
        </div>
        <div className="unit-grid">
          {unitContents.map((unit) => (
            <article className="unit-card" key={unit.unit}>
              <div className="unit-title-row">
                <span className="unit-badge">{unit.unit.split('.')[0]}</span>
                <h3>{unit.unit}</h3>
              </div>
              <ul>
                {unit.sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

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
