import React from 'react'

export default ({ lunch, onCloseClick }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      {lunch.restaurantName} - {lunch.time}
      <a className="close" onClick={onCloseClick}>
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
