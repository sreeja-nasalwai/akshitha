import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>You are logged in</h2>
      <button onClick={handleLogout} style={styles.button}>Log Out</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#d9534f', // Red for logout button
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LogoutComponent;
