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
        "/static/19291549_m.jpg"
      ],
      "整体图": [
        "/static/19291545_m.jpg"
      ],
      "卫生间": [
        "/static/19291535_m.jpg"
      ],
      "客厅": [
        "/static/19291543_m.jpg",
        "/static/19291539_m.jpg"
      ],
      "卧室": [
        "/static/19291531_m.jpg"
      ],
      "厨房": [
        "/static/19291541_m.jpg",
        "/static/19291537_m.jpg"
      ]
    },
    // data :
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() {},
    swiperChange: function(e) {
      console.log(e.detail.current);
    }
  }
})