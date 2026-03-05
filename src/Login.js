import React from 'react';

function Login() {
  const handleLogin = () => {
    // Google OAuth logic will go here
    alert('Google OAuth login not yet implemented');
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login; 