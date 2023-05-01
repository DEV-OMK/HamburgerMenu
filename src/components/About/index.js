import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-bg-container">
    <Header />
    <div className="responsive-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-image about-sm-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-image about-lg-image"
      />
    </div>
  </div>
)

export default About
