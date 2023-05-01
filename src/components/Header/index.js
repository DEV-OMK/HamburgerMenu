import {withRouter, Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const renderPopup = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="trigger-button"
          >
            <GiHamburgerMenu />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button close"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="menu-container">
              <li>
                <Link to="/" className="hamberger-menu-item">
                  <AiFillHome className="icon" />
                  <p className="link-text">Home</p>
                </Link>
              </li>

              <li>
                <Link to="/about" className="hamberger-menu-item">
                  <BsInfoCircleFill className="icon" />
                  <p className="link-text">About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  )

  return (
    <nav className="navbar">
      <div className="navbar-responsive-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        {renderPopup()}
      </div>
    </nav>
  )
}

export default withRouter(Header)
