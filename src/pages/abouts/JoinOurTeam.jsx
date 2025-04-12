import './JoinOurTeam.css';

export default function JoinOurTeam() {
  return (
    <section className="team-section">
      <h2>Join Our Team</h2>
      <div className="team-content">
        <p>
          Vietlongfruit is a diverse, growing company, working with us to shape the opportunity to develop
          your career in a meaningful way. Currently, we have new positions, but if you don’t see a role
          that matches your skills, please send us your CV and cover letter.
        </p>
        <div className="team-cards">
          <div className="card left-card">
            <span className="card-icon">🌿</span> {/* Placeholder icon */}
            <span>Sustainability</span>
          </div>
          <div className="right-cards">
            <div className="card">
              <span className="card-icon">📊</span> {/* Placeholder icon */}
              <span>Transparency</span>
            </div>
            <div className="card">
              <span className="card-icon">📚</span> {/* Placeholder icon */}
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}