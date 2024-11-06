import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Envelope, Lock } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewLoginComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await JSON.parse(localStorage.getItem('user'));
      if (userData && userData.email === formData.email && userData.password === formData.password) {
        alert('Login Successful!');
        const token = Math.random().toString(36).substring(2, 10);
        localStorage.setItem('token', token);
        navigate('/admin');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error handling login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className='bg-white'>
      <div>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <div className="p-4 bg-white rounded-3 shadow">
            <h2 className="text-center mb-4 fw-bold">🔑 Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <Envelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <Lock />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 fw-semibold">
                Log In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      </div>
      
    </Container>
  );
};

export default NewLoginComponent;