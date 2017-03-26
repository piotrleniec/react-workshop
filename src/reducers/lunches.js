import { SET_LUNCHES } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_LUNCHES:
      return action.lunches
    default:
      return state
  }
}
