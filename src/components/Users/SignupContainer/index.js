import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signUp } from '../../../actions/users/users-actions'

class SignupContainer extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(
      signUp(
        this.state.username,
        this.state.email,
        this.state.password)
    )
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userCreated !== this.props.userCreated) {
      setTimeout(() => this.props.history.push("/login/"), 1500);
    }
  }

  render() {
    return (
      <div>
        {this.props.userCreated ? <p>Account created</p> : null}
        <SignupForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userCreated: state.users.userCreated
  }
}
export default connect(mapStateToProps)(SignupContainer)
