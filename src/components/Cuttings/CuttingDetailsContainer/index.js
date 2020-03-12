import React, { Component } from 'react';
import { connect } from 'react-redux';
import CuttingDetails from './CuttingDetails';
import { loadCutting, deleteCutting } from '../../../actions/cuttings/cuttings-actions';

class CuttingDetailsContainer extends Component {

  componentDidMount() {
    this.props.loadCutting(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteCutting(this.props.cutting.id)
    this.props.history.push('/')
  }

  render() {

    return (
      <div>
        <CuttingDetails
          cutting={this.props.cutting}
          onDelete={this.onDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cutting: state.cutting
})

export default connect(mapStateToProps, { loadCutting, deleteCutting })(CuttingDetailsContainer)