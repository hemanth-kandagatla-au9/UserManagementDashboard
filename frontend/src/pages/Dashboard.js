import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useNavigate();
  
  const goToUserList = () => {
    location('/users-list')
  }

  return (
    <div className="dashboard">
      <button onClick={goToUserList}>Go to User List</button>
      <h1>Welcome to Your Dashboard</h1>
    </div>
  );
};

export default Dashboard;