import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Leaderboard.css';

const Leaderboard = ({ userData, onLogout }) => {
  const location = useLocation();

  // Dummy leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      totalDonations: 2850,
      referralCode: 'sarah2025',
      rank: 1,
      avatar: 'S'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      totalDonations: 2100,
      referralCode: 'mike2025',
      rank: 2,
      avatar: 'M'
    },
    {
      id: 3,
      name: userData.name,
      email: userData.email,
      totalDonations: userData.totalDonations,
      referralCode: userData.referralCode,
      rank: userData.rank,
      avatar: userData.name.charAt(0).toUpperCase(),
      isCurrentUser: true
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@company.com',
      totalDonations: 1100,
      referralCode: 'emily2025',
      rank: 4,
      avatar: 'E'
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'david.kim@company.com',
      totalDonations: 950,
      referralCode: 'david2025',
      rank: 5,
      avatar: 'D'
    },
    {
      id: 6,
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      totalDonations: 800,
      referralCode: 'lisa2025',
      rank: 6,
      avatar: 'L'
    },
    {
      id: 7,
      name: 'Alex Thompson',
      email: 'alex.thompson@company.com',
      totalDonations: 650,
      referralCode: 'alex2025',
      rank: 7,
      avatar: 'A'
    },
    {
      id: 8,
      name: 'Jessica Lee',
      email: 'jessica.lee@company.com',
      totalDonations: 520,
      referralCode: 'jessica2025',
      rank: 8,
      avatar: 'J'
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return '#fbbf24';
      case 2: return '#9ca3af';
      case 3: return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/dashboard" className="navbar-brand">
            Intern Dashboard
          </Link>
          <div className="navbar-nav">
            <Link 
              to="/dashboard" 
              className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/leaderboard" 
              className={`nav-link ${location.pathname === '/leaderboard' ? 'active' : ''}`}
            >
              Leaderboard
            </Link>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Leaderboard </h1>
            <p className="page-subtitle">your rankings among other interns</p>
          </div>

          <div className="leaderboard-card">
            <div className="leaderboard-header">
              <h2>Top Performers</h2>
              <p>Ranked by total donations raised</p>
            </div>

            <div className="leaderboard-list">
              {leaderboardData.map((user) => (
                <div 
                  key={user.id} 
                  className={`leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}`}
                >
                  <div className="rank-section">
                    <div 
                      className="rank-icon"
                      style={{ color: getRankColor(user.rank) }}
                    >
                      {getRankIcon(user.rank)}
                    </div>
                    <div className="user-avatar-small">
                      <div className="avatar-circle-small">
                        {user.avatar}
                      </div>
                    </div>
                  </div>

                  <div className="user-info">
                    <h3 className="user-name">
                      {user.name}
                      {user.isCurrentUser && <span className="current-user-badge">You</span>}
                    </h3>
                    <p className="user-email">{user.email}</p>
                    <p className="referral-code">Code: {user.referralCode}</p>
                  </div>

                  <div className="donation-info">
                    <div className="donation-amount-small">
                      <span className="currency-small">$</span>
                      <span className="amount-small">{user.totalDonations.toLocaleString()}</span>
                    </div>
                    <p className="donation-label">raised</p>
                  </div>
                </div>
              ))}
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 