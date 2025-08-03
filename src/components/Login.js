import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate API call with dummy data
    const userData = {
      name: formData.name || 'John Doe',
      email: formData.email,
      referralCode: 'johndoe2025',
      totalDonations: 1250,
      rank: 3
    };
    
    onLogin(userData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Intern Dashboard</h1>
          <p>Track your donations and rewards</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {isSignup && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required={isSignup}
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary login-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
        
       
      </div>
    </div>
  );
};

export default Login; 