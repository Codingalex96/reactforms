import React, { useState } from "react";
import "../App.css";  // Importing the external CSS directly from the src folder

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);

  const handleClick = async () => {
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.message || "Authentication failed!");
      }

      setSuccessMessage(result.message);
      setUsername(result.data.username);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Authenticate</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {username && <p>Welcome, {username}!</p>}
      <button onClick={handleClick} disabled={!token}>
        Authenticate Token
      </button>
    </div>
  );
};

export default Authenticate;