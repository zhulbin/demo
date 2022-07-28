import { createReducer } from "@reduxjs/toolkit";
import  * as TYPE  from 'src/constant'
import { Test as Interface } from 'src/interface'

const initialState: Interface.State = {
  value: ''
}

export const reducer = createReducer(initialState, {
  [TYPE.GET_VALUE]: (state, action) => {
    state.value = action.value
  }
})

export const getValue = (value: string) => {
  return ({
  type: TYPE.GET_VALUE,
  value
})
}
