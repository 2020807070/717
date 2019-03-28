// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    query: '酒店',
    markers: [],
    latitude: "",
    longitude: "",
    // placeData: {},
    mapbar: [{
        val: '公交',
        icon: 'logistics'
      },
      {
        val: '餐饮',
        icon: 'shop-o'
      },
      {
        val: '商场',
        icon: 'shopping-cart-o'
      },
      {
        val: '教育',
        icon: 'column'
      },
      {
        val: '医疗',
        icon: 'plus'
      }
    ]
  },
  onClickLeft: () => {
    wx.navigateBack({})
  },
  // makertap: function(e) {
  //   var that = this;
  //   var id = e.markerId;
  //   that.showSearchInfo(wxMarkerData, id);
  //   that.changeMarkerColor(wxMarkerData, id);
  //   console.log(wxMarkerData)
  // },
  onLoad: function(e) {
    this.mapLoad()
  },
  mapLoad: function(e) {
    if (e) {
      this.query = e.currentTarget.dataset.type[e.detail].val
    }
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'PfSGF91THH2mzy2VzNQDcaCGwFLzCKnI'
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      wxMarkerData = data.wxMarkerData;
      console.log(wxMarkerData)
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      location: "35.0410009586,111.0109531998",
      "query": that.query,
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../img/marker_red.png'
    });
  },
  // showSearchInfo: function(data, i) {
  //   var that = this;
  //   that.setData({
  //     placeData: {
  //       title: '名称：' + data[i].title + '\n',
  //       address: '地址：' + data[i].address + '\n',
  //       telephone: '电话：' + data[i].telephone
  //     }
  //   });
  // },
  // changeMarkerColor: function(data, i) {
  //   var that = this;
  //   var markers = [];
  //   for (var j = 0; j < data.length; j++) {
  //     if (j == i) {
  //       // 此处需要在相应路径放置图片文件 
  //       data[j].iconPath = "../../img/marker_yellow.png";
  //     } else {
  //       // 此处需要在相应路径放置图片文件 
  //       data[j].iconPath = "../../img/marker_red.png";
  //     }
  //     markers[j](data[j]);
  //   }
  //   that.setData({
  //     markers: markers
  //   });
  // },
  mapSearch: (e) => {
    var that = this;
    console.log(that)
  }
})