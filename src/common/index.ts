import Taro from '@tarojs/taro'
import { getValue } from "src/reducer/test";
import { getVglod } from 'src/reducer/common';
import { store } from 'src/store'

export const doGetValue = (value: string) => {
  return store.dispatch(getValue(value))
}

export const doGetVglod = (data: string) => {
  return store.dispatch(getVglod(data))
}

export const getActualSize = (size: number) => Math.floor(Taro.getSystemInfoSync().windowWidth * size / 750)

