import FruitCards from "../../components/FruitCards";
import ValuesTimeline from "../../components/ValuesTimeline";
import CsrSection from "./CsrSection";
import CustomerReviews from "./CustomerReviews";
import HealthyDiet from "./HealthyDiet";
import JoinOurTeam from "./JoinOurTeam";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main>
      <div className="hero-wrapper">
        <img
          src={`${window.location.origin}/Images/Layer-0.jpg`}
          alt="Hero"
          className="hero-img"
        />
        <div className="hero-content">
          <h1>Naturally Clean,</h1>
          <p>Naturally Delicious</p>
          <button className="hero-btn">Shop Now →</button>
        </div>
      </div>
      <div
        className="value"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: "20px" ,
        }}
      >
        <div
          className="introduce"
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="leaf-logo">
            <p className="our-process">OUR PROCESS</p>
            <img src="/Images/Icon-17.svg" alt="Logo" className="logo-img" />
          </div>
          <p className="our-value">Our Values</p>
        </div>
        <p className="intro-text" style={{ flex: 2 }}>
          Welcome to Vietlongfruit, where nature’s finest fruits meet global
          markets.
          <br />
          We are a premier fruit exporting company committed to delivering only
          the
          <br />
          highest quality produce sourced from sustainable and innovative farms.
        </p>
      </div>
      <ValuesTimeline />
      <img
        src="./Images/project-bg.png"
        className="timelinebg"
        alt="Timeline Background"
      />
      
      <CsrSection />
      <JoinOurTeam />
      <HealthyDiet />
      <CustomerReviews />
    </main>
  );
}
