export default {
  pages: [
    // 'pages/test/home/index',
    'pages/main/home/index',
    'pages/main/order/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/main/home/index',
        text: '主页'
      },
      {
        pagePath: 'pages/main/order/index',
        text: '点单'
      }
    ]
  },
  usingComponents: {

  }
}
