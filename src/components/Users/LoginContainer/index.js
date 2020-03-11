import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../../actions/users/users-actions';

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // onSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.login(
  //     this.state.email,
  //     this.state.password)
  // }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(
      login(
        this.state.email,
        this.state.password)
    )
    this.setState({
      email: '',
      password: ''
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userLoggedIn !== this.props.userLoggedIn) {
      setTimeout(() => this.props.history.push("/"), 1500);
    }
  }

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
            <LoginForm
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              values={this.state}
            />
          )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.users.token !== null
  }
}

export default connect(mapStateToProps)(LoginContainer)