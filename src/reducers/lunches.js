import { SET_LUNCHES, REMOVE_LUNCH } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_LUNCHES:
      return action.lunches
    case REMOVE_LUNCH:
      return state.filter(lunch => lunch.id !== action.lunchId)
    default:
      return state
  }
}
