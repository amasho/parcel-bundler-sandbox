import * as Constants from '../../constants/Counter'

namespace CounterActions {
  export interface ICounterActions {
    count: number
    type: string
  }
}

class CounterActions {
  Plus(stateCount: number): CounterActions.ICounterActions {
    return {
      count: stateCount + 1,
      type: Constants.CLICK_BUTTON_PLUS
    }
  }

  Minus(stateCount: number): CounterActions.ICounterActions {
    return {
      count: stateCount - 1,
      type: Constants.CLICK_BUTTON_MINUS
    }
  }

  handlePlusIfNeeded() {
    return (dispatch: any, getState: any) => {
      return dispatch(this.Plus(getState().Counter.count))
    }
  }

  handleMinusIfNeeded() {
    return (dispatch: any, getState: any) => {
      return dispatch(this.Minus(getState().Counter.count))
    }
  }
}

export default new CounterActions()
