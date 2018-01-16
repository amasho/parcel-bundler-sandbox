import RaisedButton from 'material-ui/RaisedButton'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import styled from 'styled-components'

import CounterActions from '../../actions/Counter'

const MainWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`

namespace Counter {
  export interface IProps {
    handlePlusAction: () => void
    handleMinusAction: () => void
  }

  export interface IState {
    Counter: object
  }
}

class Counter extends React.Component<Counter.IProps, object> {
  constructor(props?: Counter.IProps, context?: any) {
    super(props, context)
    this.handlePlus = this.handlePlus.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
  }

  handlePlus(e: SpeechSynthesisEvent) {
    e.preventDefault()
    this.props.handlePlusAction()
  }

  handleMinus(e: SpeechSynthesisEvent) {
    e.preventDefault()
    this.props.handleMinusAction()
  }

  render() {
    return (
      <MainWrapper>
        <RaisedButton
          name="plus"
          label="ぷらす"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={this.handlePlus}
        />
        <p>{0}</p>
        <RaisedButton
          name="minus"
          label="まいなす"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={this.handleMinus}
        />
      </MainWrapper>
    )
  }
}

const mapStateToProps: any = (state: Counter.IState): Counter.IState => {
  return {
    Counter: state.Counter
  }
}

const mapDispatchToProps: object = (
  dispatch: Dispatch<void>
): Counter.IProps => {
  return {
    handleMinusAction: () => dispatch(CounterActions.handleMinusIfNeeded()),
    handlePlusAction: () => dispatch(CounterActions.handlePlusIfNeeded())
  }
}

export default connect(
  (state: Counter.IState) => mapStateToProps,
  (dispatch: Dispatch<void>) => mapDispatchToProps
)(Counter)
