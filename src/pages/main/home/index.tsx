import React from "react"
import { View } from '@tarojs/components'
import TabBar from "src/component/business/tabBar"
import './index.scss'

const Home: React.FC = () => {

  return (
    <>
      <View>主页</View>
      <TabBar current={0} />
    </>
  )
}

export default Home
