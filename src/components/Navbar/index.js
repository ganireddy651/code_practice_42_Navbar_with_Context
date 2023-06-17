// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backGround = isDarkTheme ? 'dark-background' : 'light-background'
      const logoSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const title = isDarkTheme ? 'titles-dark-mode' : 'titles-light-mode'
      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onBackgroundChange = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={backGround}>
            <img src={logoSrc} alt="website logo" className="custom-logo" />
            <ul className="dark-mode-sub-container">
              <Link to="/" className="link-items">
                <li>
                  <h1 className={title}>Home</h1>
                </li>
              </Link>
              <Link to="/about" className="link-items">
                <li>
                  <h1 className={title}>About</h1>
                </li>
              </Link>
            </ul>
            <button
              type="button"
              className="custom-btn"
              onClick={onBackgroundChange}
              data-testid="theme"
            >
              <img src={themeImg} alt="theme" className="custom-theme" />
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
