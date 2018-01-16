import * as Constants from '../../constants/Counter'

export default function counterreducer(state = {}, action) {
  switch (action.type) {
    case Constants.CLICK_BUTTON_PLUS:
      return Object.assign({}, state, {
        count: action.count + 1
      })
    case Constants.CLICK_BUTTON_MINUS:
      return Object.assign({}, state, {
        count: action.count - 1
      })
    default:
      return state
  }
}
