import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="responsive-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-image home-sm-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-image home-lg-image"
      />
    </div>
  </div>
)

export default Home
