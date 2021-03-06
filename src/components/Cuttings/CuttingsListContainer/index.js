import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCuttings } from '../../../actions/cuttings/cuttings-actions'
import CuttingsList from './CuttingsList'

class CuttingsListcontainer extends Component {
  componentDidMount() {
    this.props.getAllCuttings()
  }

  render() {

    return (<CuttingsList cuttings={this.props.cuttings} />)
  }
}

const mapStateToProps = state => ({
  cuttings: state.cuttings
})

export default connect(mapStateToProps, { getAllCuttings })(CuttingsListcontainer)
