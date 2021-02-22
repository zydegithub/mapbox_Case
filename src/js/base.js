function addBase(map) {
  // geojson格式数据
  // 点
  const pointData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [116.39104843139647, 39.912287369097186]
        }
      }
    ]
  };
  // 线
  const lineData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [116.38540506362915, 39.91115171447854],
            [116.3856840133667, 39.90613156632883],
            [116.3971424102783, 39.906510147702974],
            [116.39682054519652, 39.9116290208874]
          ]
        }
      }
    ]
  };
  // 面
  const polygonData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.38752937316895, 39.907859855577165],
              [116.39570474624634, 39.907859855577165],
              [116.39570474624634, 39.91083076519556],
              [116.38752937316895, 39.91083076519556],
              [116.38752937316895, 39.907859855577165]
            ]
          ]
        }
      }
    ]
  };
  // 添加数据源
  map.addSource("point", {
    type: "geojson",
    data: pointData
  });
  map.addSource("line", {
    type: "geojson",
    data: lineData
  });
  map.addSource("polygon", {
    type: "geojson",
    data: polygonData
  });
  // 添加图层
  map.addLayer({
    id: "point",
    type: "symbol",
    source: "point",
    layout: {
      "icon-size": 3,
      "icon-image": "museum-15"
    },
    paint: {}
  });
  map.addLayer({
    id: "line",
    type: "line",
    source: "line",
    layout: {},
    paint: {
      "line-color": "#fbb03b",
      "line-width": 2.5
    }
  });
  map.addLayer({
    id: "polygon",
    type: "fill",
    source: "polygon",
    layout: {},
    paint: {
      "fill-color": "#fbb03b",
      "fill-opacity": 0.7
    }
  });
}
function addFillExtrusion(map) {
  // geojson格式数据
  // 面
  const polygonData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.38752937316895, 39.907859855577165],
              [116.39570474624634, 39.907859855577165],
              [116.39570474624634, 39.91083076519556],
              [116.38752937316895, 39.91083076519556],
              [116.38752937316895, 39.907859855577165]
            ]
          ]
        }
      }
    ]
  };
  // 添加数据源
  map.addSource("polygon", {
    type: "geojson",
    data: polygonData
  });
  // 添加图层
  map.addLayer({
    id: "polygon",
    type: "fill-extrusion",
    source: "polygon",
    layout: {},
    paint: {
      "fill-extrusion-color": "#aaa", // 体块颜色
      "fill-extrusion-height": 100, // 体块高度
      "fill-extrusion-base": 0, // 体块基础高度
      "fill-extrusion-opacity": 0.6 // 透明度
    }
  });
  // 缩放至
  map.flyTo({ pitch: 70, bearing: 30 });
}
export { addBase, addFillExtrusion };
