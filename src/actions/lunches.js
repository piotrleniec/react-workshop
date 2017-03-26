import { SET_LUNCHES } from '../constants'

const setLunches = lunches => ({
  type: SET_LUNCHES,
  lunches
})

export const fetchLunches = () => dispatch => {
  fetch('/lunches.json')
    .then(response => response.json())
    .then(lunches => { dispatch(setLunches(lunches)) })
}
