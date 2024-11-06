import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginComponent.css'; // Import CSS file for styles

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.email === formData.email && userData.password === formData.password) {
      alert('Login Successful!');
      navigate('/home'); // Navigate to the home or dashboard page
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          🔑 Log In
        </h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>📧</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Email"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>🔒</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" style={styles.button}>Log In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    backgroundImage: 'url("your-background-image-url.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '300px',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '15px',
  },
  inputIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px', // Adjust icon size if needed
    pointerEvents: 'none', // Prevents clicking on the icon
  },
  input: {
    padding: '10px 10px 10px 40px', // Left padding for the icon
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box', // Include padding in width
  },
  button: {
    padding: '10px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LoginComponent;
