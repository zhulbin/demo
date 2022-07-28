import React from "react"
// import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { getActualSize } from 'src/common'
import './index.scss'

namespace SideNav {
  export interface Props {
    list: ObjectType[],
    current: number,
    getCurrent(param: number): void
  }
}

let timer: any

const SideNav: React.FC<SideNav.Props> = props => {

  // const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight
  // const topHeight = Taro.getMenuButtonBoundingClientRect().top
  // const bottomHeight = Taro.getMenuButtonBoundingClientRect().bottom
  // const navHeight = topHeight - statusBarHeight + bottomHeight
  // console.log(navHeight)

  const {
    list,
    current,
    getCurrent
  } = props

  // const [current, setCurrent] = React.useState(0)
  const [top, setTop] = React.useState(0)

  const onItem = (e: any) => {
    const index = Number(e.target.dataset.index)
    getCurrent(index)
  }

  React.useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(() => setTop((current - 1) * getActualSize(180)), 400 )
  }, [current])

  return (
    <>
      <ScrollView
        className="scrollView"
        scrollY={true}
        scrollWithAnimation={true}
        showScrollbar={false}
        enhanced={true}
        scrollTop={top}
      >
        {
          list.map((item, index) => {
            return (
            <View
              className="srcollItem"
              key={index}
              data-index={index}
              onClick={onItem}
            >
              {item.name}
            </View>
            )
          })
        }
        <View className="scrollBlank"></View>
        <View className="scrollMask" style={{top: getActualSize(180) * current}}></View>
      </ScrollView>
    </>
  )
}

export default SideNav
