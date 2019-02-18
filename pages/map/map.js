// map.js
Page({
  data: {
    markers: [{
      // iconPath: '/resources/others.png',
      id: 0,
      latitude: 35.03468,
      longitude: 111.00457,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 35.03468,
        latitude: 111.00457
      }, {
        longitude: 35.03468,
        latitude: 111.00457
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})