import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CustomizedSnackbars from "../components/CustomizedSnackbars";

const EditUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('UserInfo'));
    if (userData) {
      setFormData({
        id: userData[0].id,
        name: userData[0].name,
        username: userData[0].username,
        email: userData[0].email,
      })
    }

    //clean up function
    return () => {
      localStorage.removeItem('UserInfo')
    }
  }, [])

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      let userData = {
        title: formData.id,
        description: formData.name,
        creation_date: formData.username,
        project_owner: formData.email
      }

      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`, userData);
      // setSuccess(`User updated successfully: ${JSON.stringify(response.data)}`);

      setSuccess("User Edited successfully! Redirecting to Users List ...");
      setTimeout(() => navigate("/users-list"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update user. Please try again.");
    }
  };
 
  return (
    <div>
      <h2>User Details </h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button type="submit" style={styles.button}>
          Edit User
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

export default EditUser;
