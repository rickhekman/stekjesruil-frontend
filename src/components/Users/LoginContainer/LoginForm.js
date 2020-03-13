import React from 'react';

function LoginForm(props) {
  const {
    onChange,
    onSubmit,
    values: {
      email,
      password
    }
  } = props;

  return (<div>
    <div>
      <h1>Login</h1>
    </div>
    <form onSubmit={onSubmit}>
      <div>
        <label>Email </label>
        <input
          type='email'
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  </div>
  )
}

export default LoginForm
