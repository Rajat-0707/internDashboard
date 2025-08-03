import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ userData, onLogout }) => {
  const location = useLocation();

  const rewards = [
    {
      id: 1,
      name: 'Bronze Badge',
      description: 'Raise $500 in donations',
      unlocked: userData.totalDonations >= 500,
      icon: '🥉'
    },
    {
      id: 2,
      name: 'Silver Badge',
      description: 'Raise $1000 in donations',
      unlocked: userData.totalDonations >= 1000,
      icon: '🥈'
    },
    {
      id: 3,
      name: 'Gold Badge',
      description: 'Raise $2000 in donations',
      unlocked: userData.totalDonations >= 2000,
      icon: '🥇'
    },
    {
      id: 4,
      name: 'Referral Master',
      description: 'Get 10 people to use your referral code',
      unlocked: false,
      icon: '👥'
    },
    {
      id: 5,
      name: 'Top Performer',
      description: 'Reach top 5 on leaderboard',
      unlocked: userData.rank <= 5,
      icon: '🏆'
    }
  ];

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
            <h1 className="page-title">Welcome back, {userData.name}! 👋</h1>
            <p className="page-subtitle">Track your progress and unlock rewards</p>
          </div>

          <div className="dashboard-grid">
            {/* User Info Card */}
            <div className="card user-info-card">
              <div className="user-avatar">
                <div className="avatar-circle">
                  {userData.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <h3>{userData.name}</h3>
              <p className="user-email">{userData.email}</p>
              <div className="user-rank">
                <span className="rank-badge">#{userData.rank}</span>
                <span className="rank-text">on Leaderboard</span>
              </div>
            </div>

            {/* Referral Code Card */}
            <div className="card referral-card">
              <h3>Your Referral Code</h3>
              <div className="referral-code">
                <code>{userData.referralCode}</code>
                <button 
                  className="copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(userData.referralCode);
                    alert('Referral code copied!');
                  }}
                >
                  Copy
                </button>
              </div>
              <p className="referral-info">
                Share this code with friends to earn rewards when they donate!
              </p>
            </div>

            {/* Donations Card */}
            <div className="card donations-card">
              <h3>Total Donations Raised</h3>
              <div className="donation-amount">
                <span className="currency">$</span>
                <span className="amount">{userData.totalDonations.toLocaleString()}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${Math.min((userData.totalDonations / 2000) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {userData.totalDonations < 2000 
                  ? `$${2000 - userData.totalDonations} more to Gold Badge`
                  : 'Gold Badge unlocked! 🎉'
                }
              </p>
            </div>

            {/* Rewards Card */}
            <div className="card rewards-card">
              <h3>Rewards & Unlockables</h3>
              <div className="rewards-grid">
                {rewards.map((reward) => (
                  <div 
                    key={reward.id} 
                    className={`reward-item ${reward.unlocked ? 'unlocked' : 'locked'}`}
                  >
                    <div className="reward-icon">{reward.icon}</div>
                    <div className="reward-content">
                      <h4>{reward.name}</h4>
                      <p>{reward.description}</p>
                    </div>
                    <div className="reward-status">
                      {reward.unlocked ? '✅' : '🔒'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 