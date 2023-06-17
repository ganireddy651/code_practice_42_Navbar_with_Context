// Write your code here
// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGroundColor = isDarkTheme ? 'dark-container' : 'light-container'
      const imgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const className = isDarkTheme ? 'dark-theme' : 'light-theme'

      return (
        <>
          <Navbar />
          <div className={backGroundColor}>
            <img src={imgSrc} alt="about" className="custom-img" />
            <p className={className}>About</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
