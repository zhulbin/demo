import { combineReducers } from '@reduxjs/toolkit'
import { reducer as testReducer } from './test'
import { reducer as commonReducer } from './common'

export const createRootReducer = () => combineReducers({
  test: testReducer,
  common: commonReducer
})
