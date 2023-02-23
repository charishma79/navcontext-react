// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onClickTheme = () => {
            toggleTheme()
          }

          return (
            <>
              {!isDarkTheme ? (
                <nav className="nav-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                    alt="website logo"
                    className="logo"
                  />
                  <ul className="nav-item">
                    <Link className="nav-link" to="/">
                      <li className="item">Home</li>
                    </Link>
                    <Link to="/about" className="nav-link">
                      <li className="item">About</li>
                    </Link>
                  </ul>
                  <button
                    type="button"
                    className="theme-btn"
                    data-testid="theme"
                    onClick={onClickTheme}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="theme"
                      className="mode"
                    />
                  </button>
                </nav>
              ) : (
                <nav className="nav-dark-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                    alt="website logo"
                    className="logo"
                  />
                  <ul className="nav-item">
                    <Link className="nav-link" to="/">
                      <li className="item-1">Home</li>
                    </Link>
                    <Link to="/about" className="nav-link">
                      <li className="item-1">About</li>
                    </Link>
                  </ul>
                  <button
                    type="button"
                    className="theme-btn"
                    data-testid="theme"
                    onClick={onClickTheme}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="theme"
                      className="mode"
                    />
                  </button>
                </nav>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
