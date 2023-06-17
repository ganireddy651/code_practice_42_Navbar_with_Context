// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGround = isDarkTheme
        ? 'dark-mode-container'
        : 'light-mode-container'
      const title = isDarkTheme ? 'dark-title' : 'light-title'
      const description = isDarkTheme ? 'dark-description' : 'light-description'

      return (
        <>
          <Navbar />
          <div className={backGround}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={title}>Lost Your Way</h1>
            <p className={description}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
