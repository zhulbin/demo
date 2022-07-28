import { combineReducers } from '@reduxjs/toolkit'
import { reducer as testReducer } from './test'

export const createRootReducer = () => combineReducers({
  test: testReducer
})
