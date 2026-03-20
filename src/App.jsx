import './App.css'

const navItems = ['DESIGN', 'STORY', 'SKILLS', 'BROWNIE', 'FREDDY', 'ADRONE']

function App() {
  return (
    <div className="app">
      <div className="layout">
        <nav className="sidebar">
          {navItems.map((label) => (
            <button key={label} type="button" className="nav-btn">
              {label}
            </button>
          ))}
        </nav>
        <main className="canvas">
          <img
            src="/images/stephen.png"
            alt="Stephen"
            className="portrait"
          />
        </main>
      </div>
      <footer className="footer">
        <div className="footer-marquee">
          <img
            src="/images/footertext.png"
            alt="10 years of experience in AI software engineering"
            className="footer-marquee-img"
          />
        </div>
      </footer>
    </div>
  )
}

export default App
