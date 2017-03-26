import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Lunch from './Lunch'
import { fetchLunches } from '../actions/lunches'

class Lunches extends React.Component {
  componentDidMount() {
    this.props.fetchLunches()
  }

  render() {
    return (
      <div>
        {this.props.lunches.map(lunch => (
          <div key={lunch.id} className="col-xs-6">
            <Lunch lunchId={lunch.id} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lunches: state.lunches
})

const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchLunches }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Lunches)
