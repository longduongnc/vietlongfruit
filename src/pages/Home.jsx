import "./Home.css";
import ValuesTimeline from "../components/ValuesTimeline";
import FruitCards from "../components/FruitCards";

export default function Home() {
  return (
    <main>

      <div className="hero-wrapper" >
      <img
        src={`${window.location.origin}/Images/Layer-0.jpg`}
        alt="Hero"
        className="hero-img"
      />
        <div className="hero-content" style={{marginLeft:'-150px'}}>
          <h1>Naturally Clean,</h1>
          <p>Naturally Delicious</p>
          <button className="hero-btn">Shop Now →</button>
        </div>
      </div>

      <div className="value">
        <div className="introduce">
          <div className="leaf-logo">
            <p className="our-process">OUR PROCESS</p>
            <img src="/Images/Icon-17.svg" alt="Logo" className="logo-img"/>
          </div>
          <p className="our-value">Our Values</p>
        </div>
        <p className="intro-text">
        Welcome to Vietlongfruit, where nature’s finest fruits meet global markets.
        <br/> 
        We are a premier fruit exporting company committed to delivering only the
        <br/> 
        highest quality produce sourced from sustainable and innovative farms.
        </p>
      </div>
      <ValuesTimeline />
      <img src="./Images/project-bg.png" className="timelinebg"/>
      <FruitCards />
    </main>
  );
}


