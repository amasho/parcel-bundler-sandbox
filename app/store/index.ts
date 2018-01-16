import { Action, applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'

interface IWindow {
  devToolsExtension(): () => void
}
declare var window: IWindow

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk, createLogger()),
    window.devToolsExtension && window.devToolsExtension()
  )
)
