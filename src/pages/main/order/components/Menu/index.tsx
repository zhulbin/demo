import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

namespace Menu {
  export interface Props {
    list: ObjectType[]
  }
}

const Menu: React.FC<Menu.Props> = props => {

  const {
    list
  } = props

  return (
    <View className="menu">
      {
        list.map((item, index) => {
          return <View key={index} className="menuItem">
            <Text className="txt">{item.title}</Text>
            <View className="itemContent">
              {
                item.menuList.map((ele, eIndex) => {
                  return <View  key={eIndex} className="listItem">{ele.text}</View>
                })
              }
            </View>
          </View>
        })
      }
    </View>
  )
}

export default Menu
