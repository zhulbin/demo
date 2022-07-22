import { getValue } from "src/reducer/common";
import { store } from 'src/store'

export const doGetValue = (value: string) => {
  return store.dispatch(getValue(value))
}
