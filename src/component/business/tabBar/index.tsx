import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

namespace TabBar {
  export interface Props {
    current: number
  }
}

const TabBar: React.FC<TabBar.Props> = props => {

  const list = [
    {
      pagePath: '/pages/main/home/index',
      text: '主页'
    },
    {
      pagePath: '/pages/main/order/index',
      text: '点单'
    }
  ]

  const onSwitchTab = (url: any) => {
    Taro.switchTab({url})
  }

  return (
    <>
      <View className="tabBar">
        {
          list.map((item, index) => {
            return (
              <View key={index} onClick={() => onSwitchTab(item.pagePath)} className="tabBarItem">
                <Text className={props.current === index ? "active txt" : "txt"}>{item.text}</Text>
              </View>
            )
          })
        }
      </View>
    </>
  )
}
export default TabBar
