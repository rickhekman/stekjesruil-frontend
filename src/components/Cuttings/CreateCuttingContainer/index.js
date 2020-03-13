import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCutting } from '../../../actions/cuttings/cuttings-actions';
import CuttingForm from '../CuttingForm';

class CreateCuttingContainer extends Component {

  state = {
    name: '',
    photo: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createCutting(this.state)
    this.setState({
      name: '',
      photo: '',
      description: ''
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cuttingCreated !== this.props.cuttingCreated) {
      setTimeout(() => this.props.history.push("/cuttings/"), 1500);
    }
  }

  render() {
    return (<div>
      {this.props.cuttingCreated ? <p>You just posted a cutting</p> : null}
      <CuttingForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cuttingCreated: state.cuttings.cuttingCreated
  }
}

export default connect(mapStateToProps, { createCutting })(CreateCuttingContainer)
