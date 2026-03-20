import './App.css'

const navItems = ['DESIGN', 'STORY', 'SKILLS', 'BROWNIE', 'FREDDY', 'ADRONE']
const navRight = navItems.slice(0, 3)
const navBottom = navItems.slice(3, 6)

function NavButton({ label }) {
  return (
    <button type="button" className="nav-btn" data-animation="both">
      <span className="nav-btn-text">
        <span className="nav-btn-text-track">
          <span>{label}</span>
          <span aria-hidden="true">{label}</span>
        </span>
      </span>
    </button>
  )
}

function App() {
  return (
    <div className="app">
      <div className="layout">
        <nav className="sidebar">
          {navItems.map((label) => (
            <NavButton key={label} label={label} />
          ))}
        </nav>
        <div className="mobile-layout">
          <div className="nav-right">
            {navRight.map((label) => (
              <NavButton key={label} label={label} />
            ))}
          </div>
          <main className="canvas">
            <img
              src="/images/stephen.png"
              alt="Stephen"
              className="portrait"
            />
            <aside className="branding">
              <img
                src="/images/sign.png"
                alt="Signature"
                className="branding-signature"
              />
            </aside>
          </main>
          <div className="nav-bottom">
            {navBottom.map((label) => (
              <NavButton key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
