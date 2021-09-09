import { createStore } from 'redux'
import reducers from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from '@reduxjs/toolkit';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware()
  )
)



export default store