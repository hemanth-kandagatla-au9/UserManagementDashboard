import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
 
import Dashboard from "./pages/Dashboard";
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users-list" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
