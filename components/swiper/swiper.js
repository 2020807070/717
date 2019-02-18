Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    data: {
      "鸟瞰图": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291549_m.jpg"
      ],
      "整体图": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291545_m.jpg"
      ],
      "卫生间": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291535_m.jpg"
      ],
      "客厅": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291543_m.jpg",
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291539_m.jpg"
      ],
      "卧室": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291531_m.jpg"
      ],
      "厨房": [
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291541_m.jpg",
        "http://imgs2.jiwu.com/attachment/buildpic/2018/07/05/19291537_m.jpg"
      ],
      "嘻嘻": [
        1, 2, 3
      ]
    },
    // data :
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() {}
  }
})