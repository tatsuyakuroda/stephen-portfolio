import './App.css'

const navItems = ['DESIGN', 'STORY', 'SKILLS', 'BROWNIE', 'FREDDY', 'ADRONE']

function App() {
  return (
    <div className="app">
      <div className="layout">
        <nav className="sidebar">
          {navItems.map((label) => (
            <button
              key={label}
              type="button"
              className="nav-btn"
              data-animation="both"
            >
              <span className="nav-btn-text">
                <span className="nav-btn-text-track">
                  <span>{label}</span>
                  <span aria-hidden="true">{label}</span>
                </span>
              </span>
            </button>
          ))}
        </nav>
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
      </div>
    </div>
  )
}

export default App
