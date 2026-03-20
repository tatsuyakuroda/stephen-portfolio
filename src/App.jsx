import { useState } from 'react'
import './App.css'

const TABS = ['DESIGN', 'STORY', 'SKILLS']
const PROJECTS = [
  { id: 'brownie', name: 'BROWNIE' },
  { id: 'freddy', name: 'FREDDY' },
  { id: 'adrone', name: 'ADRONE' },
]

const SKILLS = [
  { name: 'Machine Learning', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'System Design', level: 85 },
  { name: 'UX Research', level: 82 },
  { name: 'Data Pipelines', level: 80 },
  { name: 'APIs & Integrations', level: 92 },
]

const STORY_INTRO =
  'From code to canvas, strategy to systems — I build bridges between disciplines. Not a specialist. A connector.'

const STORY_TAGLINE = 'engineer · designer · storyteller'

const PROJECT_TEASERS = [
  { id: 'brownie', name: 'BROWNIE', tag: 'AI-powered bakery app' },
  { id: 'freddy', name: 'FREDDY', tag: 'Voice assistant platform' },
  { id: 'adrone', name: 'ADRONE', tag: 'Drone fleet analytics' },
]

function NavButton({ label, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`nav-btn ${isActive ? 'nav-btn-active' : ''}`}
      data-animation="both"
      onClick={onClick}
    >
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
  const [activeTab, setActiveTab] = useState('DESIGN')

  return (
    <div className="app">
      <div className="layout">
        <nav className="sidebar">
          {TABS.map((label) => (
            <NavButton
              key={label}
              label={label}
              isActive={activeTab === label}
              onClick={() => setActiveTab(label)}
            />
          ))}
          {PROJECTS.map((p) => (
            <NavButton key={p.id} label={p.name} />
          ))}
        </nav>
        <div className="mobile-layout">
          <div className="nav-tabs">
            {TABS.map((label) => (
              <NavButton
                key={label}
                label={label}
                isActive={activeTab === label}
                onClick={() => setActiveTab(label)}
              />
            ))}
          </div>

          <main className={`canvas canvas-${activeTab.toLowerCase()}`}>
            {activeTab === 'DESIGN' && (
              <>
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
              </>
            )}
          </main>

          <section className="tab-content">
            {activeTab === 'DESIGN' && (
              <div className="tab-design">
                <div className="project-teasers">
                  {PROJECT_TEASERS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className="project-teaser"
                    >
                      <span className="project-teaser-name">{p.name}</span>
                      <span className="project-teaser-tag">{p.tag}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'STORY' && (
              <div className="tab-story">
                <img
                  src="/images/sign.png"
                  alt="Signature"
                  className="tab-story-signature"
                />
                <p className="tab-story-intro">{STORY_INTRO}</p>
                <p className="tab-story-tagline">{STORY_TAGLINE}</p>
                <button type="button" className="tab-story-btn">
                  Dive deeper
                </button>
              </div>
            )}

            {activeTab === 'SKILLS' && (
              <div className="tab-skills">
                <div className="skills-grid">
                  {SKILLS.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar-wrap">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {activeTab !== 'DESIGN' && (
            <div className="nav-bottom">
              {PROJECTS.map((p) => (
                <NavButton key={p.id} label={p.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
