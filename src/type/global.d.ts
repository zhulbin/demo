interface ObjectType {
  [key: string]: any // 任意属性
}

interface Operate {
  complete?(json?: ObjectType): void // 请求完成
  success?(json?: ObjectType): void // 请求成功
  fail?(json?: ObjectType): void // 请求失败
}

interface CustomAction extends Operate {
  type: string // action type
  resolve?: boolean // 是否更新reducer
  intercept?: boolean // 是否拦截重复请求
  fetchApi?(): Promise<ObjectType> // 请求
  pipe?(json: ObjectType): void // 数据处理
}

type PickValue<T, K extends keyof T> = T[K]

type Callback = () => void
