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
    </div>
  )
}

export default App
