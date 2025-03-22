import React from 'react';

const LoginForm = () => {
  return (
    <div className="login_wrapper">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          data-test="username"
        />
        <input
          type="password"
          placeholder="Password"
          data-test="password"
        />
        <button
          type="submit"
          data-test="login-button"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
