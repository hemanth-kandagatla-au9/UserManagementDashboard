import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
 
import Dashboard from "./pages/Dashboard";
import UserList from './pages/UserList';
import CreateUser from './pages/createUser';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes> 
          <Route path="/userslist" element={<UserList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
