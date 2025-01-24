import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../api/users"; // Example function to fetch user data
import CustomizedSnackbars from '../components/CustomizedSnackbars';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const data = await getUserData();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);


  const goToCreateUser = () => {
    location('/add-user');
  }
  const backToDashboard = () => {
    location('/dashboard');
  }

  const editUser = (user_id) => {
    let user = users.filter((item) => item.id === user_id);
    // console.log(user,"useruserkkk")
    localStorage.setItem('UserInfo', JSON.stringify(user));
    location('/edit-user')
  }

  const deleteUser = (user_id) => {
    //delete api cal
    setOpen(true)
  }

  const setOpenfn = (val) => {
    setOpen(val)
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
          users?.map(each =>
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
      <CustomizedSnackbars open={open} deleted_id = {1} setOpenfn={setOpenfn}/>
    </div>
  );
};

export default UserList;
