import React from "react"
import { View, ScrollView } from '@tarojs/components'
import TabBar from "src/component/business/tabBar"
import SideNav from "./components/SideNav"
import Menu from "./components/Menu"
import { getActualSize } from 'src/common'
import { OrderList } from 'src/pages/constant'
import './index.scss'

const sectionMap: ObjectType = Object.create(null) //区间映射

const Order: React.FC = () => {

  const { list } = OrderList

  const [pageTop, setPageTop] = React.useState(0)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    getListData()
  }, [])

  const getListData = () => {
    list.forEach((item: ObjectType, index: number) => {

      // 这里的start取得是当落在某个区间时的起始位置所距离top的高度
      // 或者说取的是落在当前区间的上个区间的底部距离top的高度把它作为当前区间距离top的高度
      // 这里的classify是个只有两位元素的数组，代表的是首位和末位分别距离top的高度
      let start = index === 0 ? 0 : sectionMap[index - 1].classify[1] // 其实这里可以看作取的是上个区间的末尾高度

      let height = 0 // 声明每个list所占高度
      let top = 0 // 声明每个list距离顶部高度

      sectionMap[index] = {}
      // sectionMap[index].list = [];
      height += getActualSize(32) // 这里的height加的是每个list所对应的最顶部的padding的值为32px
      height += getActualSize(26 + 16) // 这里的height加的是每个list所对应的标题所占的高度

      height += getActualSize(16) // 这里的height加的是每个list所对应的内部padding-top的值为16px

      item.menuList.forEach((_, eIndex: number) => {
        let itemHeight = 0; // 这里设置的是每个list内部除padding以外真正所占的高度
        itemHeight += getActualSize(228)
        if(eIndex < item.menuList.length - 1) { // 这里所加的高度是每个list内部的margin
          itemHeight += getActualSize(32)
        }
        height += itemHeight
        // sectionMap[index].list.push({
        //   height: itemHeight
        // })
      })
      if(index < list.length - 1) { // 这里加的是每个list外部底部的padding-bottom
        height += getActualSize(32)
      }
      top += height
      sectionMap[index].height = height
      sectionMap[index].classify = [start, top + start]
    })
  }

  const setScorll = (scrollTop: number) => {
    for(const key in sectionMap) {
      const { classify } = sectionMap[key]
      if(scrollTop >= classify[0] && scrollTop < classify[1] ) {
        setCurrent(Number(key))
      }
    }
  }

  const handleScroll = (e: any) => setScorll(e.target.scrollTop)

  const handleCurrent = (data: number) => {
    setCurrent(data)
    setPageTop(sectionMap[data].classify[0])
  }

  return (
    <>
      <ScrollView
        className="globalScroll"
        scrollY={true}
        enhanced={true}
        bounces={true}
        showScrollbar={false}
        scrollTop={pageTop}
        onScroll={handleScroll}
      >
        <View>
          <View className="topContent">content</View>
          <View className="content">
            <SideNav
              list={list}
              current={current}
              getCurrent={handleCurrent}
            />
            <Menu
              list={list}
            />
          </View>
        </View>
      </ScrollView>
      <TabBar current={1} />
    </>
  )
}

export default Order
