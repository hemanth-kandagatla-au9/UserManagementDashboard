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

  const editUser = (proj_id) => {
    location('/createuser')
  }
  const deleteUser = (proj_id) => {
    location('/createuser')
  }

  return (
    <div >
      <div className="add-user" >
        <button onClick={goToCreateUser}>
          Add User
        </button>
      <button onClick={backToDashboard}> Back to dashboard </button>

      </div>

      <h2>Users Data</h2>

      <table className="table-head">
        <tr>
          <th> Id </th>
          <th> Name </th>
          <th> User Name </th>
          <th> Email </th>
          <th>  </th>
          <th>  </th>
        </tr>
        {
          user?.map(each =>
            <tr className="table-row">
              <td>{each.id}</td>
              <td>{each.name}</td>
              <td>{each.username}</td>
              <td>{each.email}</td>
              <td>
                <button  className = "edit-user" onClick={() => editUser(each.id)}> Edit User</button>
              </td>
              <td>
                <button onClick={() => deleteUser(each.id)}> Delete User</button>
              </td>
            </tr>)}
      </table>

    </div>
  );
};

export default UserList;
