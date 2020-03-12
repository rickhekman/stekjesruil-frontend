import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCuttings } from '../../../actions/cuttings/cuttings-actions'
import CuttingsList from './CuttingsList'

class CuttingsListcontainer extends Component {
  componentDidMount() {
    this.props.getAllCuttings()
  }

  render() {

    console.log('GET ALL CUTTING in container', this.props)
    return (
      <div>
        <CuttingsList cuttings={this.props.cuttings} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cuttings: state.cuttings
})

export default connect(mapStateToProps, { getAllCuttings })(CuttingsListcontainer)