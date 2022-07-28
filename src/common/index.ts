import Taro from '@tarojs/taro'
import { getValue } from "src/reducer/test";
import { store } from 'src/store'

export const doGetValue = (value: string) => {
  return store.dispatch(getValue(value))
}

export const getActualSize = (size: number) => Math.floor(Taro.getSystemInfoSync().windowWidth * size / 750)

