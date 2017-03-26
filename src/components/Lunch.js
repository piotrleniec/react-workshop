import React from 'react'
import { connect } from 'react-redux'
import { removeLunch } from '../actions/lunches'

const Lunch = ({ lunch, removeLunch }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      {lunch.restaurantName} - {lunch.time}
      <a className="close" onClick={removeLunch}>
        <span>&times;</span>
      </a>
    </div>
    <ul className="list-group">
      {lunch.users.map(user => (
        <li key={user} className="list-group-item">
          {user}
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  lunch: state.lunches.find(lunch => lunch.id === ownProps.lunchId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeLunch: () => { dispatch(removeLunch(ownProps.lunchId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Lunch)
