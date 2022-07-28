import React from "react";
import { connect } from "react-redux";
import { View, Button, Input, Block } from "@tarojs/components";
import { doGetValue } from "src/common"
import State, * as Interface from 'src/interface'

namespace Home {
  export interface Props {
    value: PickValue<Interface.Test.State, 'value'>
  }
}

const Home: React.FC<Home.Props> = props => {

  const [currentValue, setCurrentValue] = React.useState('')

  let list = [
    {
      name: 'abc',
      age:20
    },
    {
      name: 'def',
      age:21
    },
    {
      name: 'ghi',
      age:22
    },
  ]

  const getVlue = e => {
    setCurrentValue(e.target.value)
  }

  const handleValue = () => {
    doGetValue(currentValue)
  }

  return (
    <>
      <View>数值器的值为：{props.value}</View>
      <Input onInput={getVlue} />
      <Button type="primary" onClick={() => handleValue()} >确定</Button>
      <Block>
        {
          list.map((item, index) =>
            (<View key={index}>
              {item.age}
            </View>)
          )
        }
      </Block>

    </>
  )
}

export default connect((state: State) => {
  return({
    value: state.test.value
  })
})(Home)
