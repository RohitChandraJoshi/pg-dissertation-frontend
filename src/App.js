// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import toggleButtonImage from './assets/threeline.png';
import Calendar from './My components/Calendar';
import Dashboard from './My components/Dashboard';
import StudentToGuideRatio from './My components/StudentToGuideRatio';
import ConnectWithGuide from './My components/ConnectWithGuide';
import MeetingWithGuide from './My components/MeetingWithGuide';
import SubmitProjectRepo from './My components/SubmitProjectRepo';
import TopicRecommendationComponent from './My components/TopicRecommendationComponent';
import TaskManagerComponent from './My components/TaskManagerComponent';
import LeaderboardComponent from './My components/LeaderboardComponent';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedShowSidebar = localStorage.getItem('showSidebar');
    if (storedShowSidebar !== null) {
      setShowSidebar(storedShowSidebar === 'true');
    }
  }, []);

  const toggleSidebar = () => {
    const updatedShowSidebar = !showSidebar;
    setShowSidebar(updatedShowSidebar);
    localStorage.setItem('showSidebar', updatedShowSidebar.toString());
  };

  return (
    <Router>
      <div className={`app-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="sidebar">
          <ul>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/student-guide-ratio">Student to Guide Ratio</NavLink></li>
            <li><NavLink to="/connect-with-guide">Connect with Guide</NavLink></li>
            <li><NavLink to="/meeting-with-guide">Meeting with Guide</NavLink></li>
            <li><NavLink to="/submit-project">Submit Project Repo</NavLink></li>
            <li><NavLink to="/topic-recommendation">Topic Recommendation</NavLink></li>
            <li><NavLink to="/task-manager">Task Manager</NavLink></li>
            <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
        </div>
        <div className={`toggle-button ${showSidebar ? 'open' : ''}`} onClick={toggleSidebar}>
          <img className="toggle-icon" src={toggleButtonImage} alt="Toggle Sidebar" />
        </div>
        <div className="content">
          <Calendar />
          <Dashboard />
          <StudentToGuideRatio />
          <MeetingWithGuide />
          <LeaderboardComponent />
        </div>
      </div>
    </Router>
  );
};

export default App;
