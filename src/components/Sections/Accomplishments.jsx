import './Accomplishments.css';

const Accomplishments = () => {
  const cpProfiles = [
    {
      platform: "Codeforces",
      rating: "Max Rating: 1622",
      link: "https://codeforces.com/profile/Eren767"
    },
    {
      platform: "LeetCode",
      rating: "Max rating: 2026 (Top 2.5%)",
      link: "https://leetcode.com/Vishnu767/"  
    },
    {
      platform: "CodeChef",
      rating: "Max Rating: 2039",
      link: "https://www.codechef.com/users/mikey767"
    }
  ];

  return (
    <section id="accomplishments" className="section">
      <h2 className="section-title">ACCOMPLISHMENTS.TXT</h2>

      <div className="accomplishments-grid">
        <div className="accomplishments-section">
          <h3>Competitive Programming Profiles</h3>
          <div className="cp-profiles">
            {cpProfiles.map((profile, index) => (
              <div key={index} className="cp-profile">
                <div className="cp-platform">{profile.platform}</div>
                <div className="cp-rating">{profile.rating}</div>
                <div className="cp-link">
                  <a href={profile.link} target="_blank" rel="noopener noreferrer">View Profile →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="accomplishments-section">
          <h3>Personal Milestones</h3>
          <div className="achievement-card">
            <div className="achievement-title">JEE Advanced</div>
            <p>Secured a rank of <strong>1873</strong> in JEE Advanced 2020 (out of 1,200,000+ applicants)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;