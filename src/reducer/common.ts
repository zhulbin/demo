import { createReducer } from "@reduxjs/toolkit"
import { COMMON as TYPE } from 'src/constant'
import { Common as Interface } from 'src/interface'

const initialState: Interface.State = {
  data: ''
}

export const reducer = createReducer(initialState, {
  [TYPE.GET_VGLOD]: (state, action) => {
    state.data = action.data
  }
})

export const getVglod = (data: string) => {
  return ({
    type:TYPE.GET_VGLOD,
    data
  })
}
