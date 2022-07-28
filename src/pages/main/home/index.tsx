import React from "react"
import { connect } from "react-redux"
import Taro from "@tarojs/taro"
import { View, Button, Input } from '@tarojs/components'
import TabBar from "src/component/business/tabBar"
import { doGetVglod } from 'src/common'
import State, * as Interface from 'src/interface'
import './index.scss'

namespace Home{
  export interface Props {
    data: PickValue<Interface.Common.State, 'data'>
  }
}

const Home: React.FC<Home.Props> = props => {


  const {
    data
  } = props

  const [value, setValue] = React.useState('')

  const goOrder = () => {
    Taro.switchTab({
      url: '/pages/main/order/index'
    })
  }

  const getInput = e => {
    setValue(e.target.value)
  }

  const handleValue = () => {
    doGetVglod(value)
  }

  return (
    <>
      <View>v金: {data}</View>
      <View className="wrapper">
        <Input placeholder="输入V金" className="input" onInput={getInput} />
        <Button type="primary" className="btn" onClick={handleValue} >确认</Button>
      </View>
      <Button onClick={goOrder}>去往点单页</Button>
      <TabBar current={0} />
    </>
  )
}

export default connect((state: State) => ({
    data: state.common.data
  })
)(Home)
