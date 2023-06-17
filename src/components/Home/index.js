import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGroundColor = isDarkTheme ? 'dark-container' : 'light-container'
      const imgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const className = isDarkTheme ? 'dark-theme' : 'light-theme'

      return (
        <>
          <Navbar />
          <div className={backGroundColor}>
            <img src={imgSrc} alt="home" className="custom-img" />
            <p className={className}>Home</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
