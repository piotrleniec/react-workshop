import React from 'react'

const lunch = {
  restaurantName: 'Du-za Mi-ha',
  time: '13:30',
  users: [
    'Krzysztof Rybka',
    'Kamil Poprawa',
    'Adam Paca',
    'Michał Markiewicz'
  ]
}

export default () => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      {lunch.restaurantName} - {lunch.time}
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
