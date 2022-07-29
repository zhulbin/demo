import { bindActionCreators } from "@reduxjs/toolkit"
import State from 'src/interface'
import { connect } from "react-redux"

export default (state = (_: State) => ({}), actionCreator = {}) =>
 (Component: React.FunctionComponent) =>
  connect(state, dispatch => bindActionCreators(actionCreator, dispatch))(Component)
