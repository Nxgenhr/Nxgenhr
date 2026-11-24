import logo from './assets/logo.png'

const FACEBOOK_URL = 'https://www.facebook.com/NXgen-Consulting-104709935549253'
const LINKEDIN_URL = 'https://www.linkedin.com/in/janice-smith-she-her-22171273/'

function App() {
  return (
    <div className="page">
      <main className="main">
        <div className="text">
          <h1>
            New look
            <br />
            <em>coming soon.</em>
          </h1>
          <p className="lede">
            We're building a brand-new home for Nxgen HR Consulting. Check back soon.
          </p>
        </div>

        <div className="card">
          <svg
            className="card-rings"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="56" cy="50" r="44" fill="none" stroke="#2C4646" strokeWidth="7" />
            <circle cx="56" cy="50" r="31" fill="none" stroke="#2C4646" strokeWidth="0.6" />
          </svg>
          <img className="card-logo" src={logo} alt="Nxgen HR Consulting" />
          <div className="card-caption">
            <span className="tagline">HR for the future.</span>
            <span className="values">People · Purpose · Progress</span>
          </div>
        </div>
      </main>

      <footer className="foot">
        <nav aria-label="Social media">
          <a
            className="icon"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            aria-label="Nxgen HR Consulting on Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="icon"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="Nxgen HR Consulting on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4.5 9h3.2v11H4.5zM6.1 3.8a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zM10 9h3.1v1.5h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20h-3.2v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z"
                fill="currentColor"
              />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App
