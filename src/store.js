import { createStore } from 'redux'
import reducers from './reducers'

export default createStore(reducers, {
  lunches: [
    {
      "id": 1,
      "restaurantName": "Du-za Mi-ha",
      "time": "13:30",
      "users": [
        "Krzysztof Rybka",
        "Kamil Poprawa",
        "Adam Paca",
        "Michał Markiewicz"
      ]
    },
    {
      "id": 2,
      "restaurantName": "Kwadrans po nieparzystej",
      "time": "13:15",
      "users": [
        "Piotr Paściak",
        "Piotr Leniec",
        "Piotr Rybarczyk"
      ]
    }
  ]
})
