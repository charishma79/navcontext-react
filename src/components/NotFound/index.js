// Write your code here
// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <>
              <Navbar />
              <div className="home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-img"
                />
                <h1 className="not-heading">Lost Your Way</h1>
                <p className="text">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="home-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-img"
                />
                <h1 className="not-found-heading">Lost Your Way</h1>
                <p className="not-text">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
