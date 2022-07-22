import { combineReducers } from '@reduxjs/toolkit'
import { reducer as commonReducer } from './common'

export const createRootReducer = () => combineReducers({
  common: commonReducer
})
