// Example in Login.jsx
// Example in Login.jsx
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.headers.get("content-type")?.includes("application/json")) {
        const data = await response.json();
        // Handle successful login
      } else {
        throw new Error("Received non-JSON response");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};

export default Login;
