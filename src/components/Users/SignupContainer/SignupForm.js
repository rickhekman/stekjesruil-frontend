import React from 'react';

function SignupForm(props) {
  const {
    onChange,
    onSubmit,
    values: {
      name,
      email,
      password
    }
  } = props;

  return (<div>
    <div>
      <h1>Create an account</h1>
    </div>
    <form onSubmit={onSubmit}>
      <div>
        <label>Username </label>
        <input
          type='text'
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Username"
        />
      </div>
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

export default SignupForm
