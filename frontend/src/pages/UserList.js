import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../api/users"; // Example function to fetch user data
// import TaskList from "./TaskList"; // A component to display tasks
// import ProjectList from ".."; // A component to display projects
// import constants from "./constants";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const data = await getUserData();
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    }; 

    fetchUserData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!user) {
  //   // Link to login if user is not authenticated
  //   return <Link to="/login" />;
  // }

  const goToCreateUser = () => {
    location('/createUser');
  }
  const backToDashboard = () => {
    location('/dashboard');
  }
 
  const createuser = (proj_id) => {
    location('/createuser')
  }

  return (
<div className="dashboard">
      {/* <h1>Welcome to Your Dashboard, {user.name}!</h1> */}
      <div className="dashboard-content">
<div className="projects">
           
          <button onClick={goToCreateUser}> Create User </button>
          <button  > Add User </button>
          
          {
            user?.map(each => 
              <div>
                <p> ID: {each.id} </p>
                <p> name: {each.name} </p>
                <p> username: {each.username} </p>
                <p> email: {each.email} </p>
                
                <button onClick={() => createuser(each.id)}> Edit User</button>
                <button onClick={() => createuser(each.id)}> Delete User</button>
                <p><hr/></p>
              </div>
            )
          }

          <button onClick={backToDashboard}> Back to dashboard </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
