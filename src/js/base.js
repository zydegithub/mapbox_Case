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
      "icon-size": 3, //图标大小
      "icon-image": "museum-15" //图片名称
    },
    paint: {}
  });
  map.addLayer({
    id: "line",
    type: "line",
    source: "line",
    layout: {},
    paint: {
      "line-color": "#fbb03b", //线颜色
      "line-width": 2.5 // 线宽
    }
  });
  map.addLayer({
    id: "polygon",
    type: "fill",
    source: "polygon",
    layout: {},
    paint: {
      "fill-color": "#fbb03b", //面颜色
      "fill-opacity": 0.7 // 面透明度
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
function addCircle(map) {
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
  // 添加数据源
  map.addSource("point", {
    type: "geojson",
    data: pointData
  });
  // 添加圆图层
  map.addLayer({
    id: "point",
    type: "circle",
    source: "point",
    paint: {
      "circle-radius": 15, //圆半径
      "circle-color": "purple" //圆颜色
    }
  });
}

function addHeatMap(map) {
  // 本示例为官方示例改动而成
  map.addSource("earthquakes", {
    type: "geojson",
    // 数据为mapbox官方数据
    data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
  });

  map.addLayer(
    {
      id: "earthquakes-heat",
      type: "heatmap",
      source: "earthquakes",
      maxzoom: 9,
      paint: {
        // 根据频率和属性大小增加热力图权重
        "heatmap-weight": [
          "interpolate",
          ["linear"],
          ["get", "mag"],
          0,
          0,
          6,
          1
        ],
        // 根据缩放级别增加热力图权重
        // heatmap-intensity 是热力图权重的乘数
        "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 9, 3],
        // 色带
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          0,
          "rgba(33,102,172,0)",
          0.2,
          "rgb(103,169,207)",
          0.4,
          "rgb(209,229,240)",
          0.6,
          "rgb(253,219,199)",
          0.8,
          "rgb(239,138,98)",
          1,
          "rgb(178,24,43)"
        ],
        // 根据缩放级别调整热力图半径
        "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
        // 透明度
        "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0]
      }
    },
    "waterway-label"
  );
  // 添加第二个热力图，两个热力图叠加效果更好
  map.addLayer(
    {
      id: "earthquakes-point",
      type: "circle",
      source: "earthquakes",
      minzoom: 7,
      paint: {
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["interpolate", ["linear"], ["get", "mag"], 1, 1, 6, 4],
          16,
          ["interpolate", ["linear"], ["get", "mag"], 1, 5, 6, 50]
        ],
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "mag"],
          1,
          "rgba(33,102,172,0)",
          2,
          "rgb(103,169,207)",
          3,
          "rgb(209,229,240)",
          4,
          "rgb(253,219,199)",
          5,
          "rgb(239,138,98)",
          6,
          "rgb(178,24,43)"
        ],
        "circle-stroke-color": "white",
        "circle-stroke-width": 1,
        "circle-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 1]
      }
    },
    "waterway-label"
  );
  map.flyTo({
    center: [-120, 50],
    zoom: 5
  });
}

function addSky(map) {
  map.addLayer({
    id: "sky",
    type: "sky",
    paint: {
      // 渐进天空
      "sky-type": "gradient",
      // 中间白，向外逐渐扩散
      // 模拟了地平线以下太阳的外观
      "sky-gradient": [
        "interpolate",
        ["linear"],
        ["sky-radial-progress"],
        0.8,
        "rgba(135, 206, 235, 1.0)",
        1,
        "rgba(0,0,0,0.1)"
      ],
      "sky-gradient-center": [0, 0],
      "sky-gradient-radius": 90,
      "sky-opacity": [
        "interpolate",
        ["exponential", 0.1],
        ["zoom"],
        5,
        0,
        22,
        1
      ]
    }
  });
  map.flyTo({
    pitch: 80
  });
}
function uniqueValue(map) {
  // 数据
  const data = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "1"
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.38585567474364, 39.92099342895789],
              [116.38615608215332, 39.91622086779371],
              [116.39057636260985, 39.91655002062137],
              [116.39049053192137, 39.921125081103234],
              [116.38585567474364, 39.92099342895789]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "2"
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.39104843139647, 39.92102634201797],
              [116.39117717742919, 39.91655002062137],
              [116.39503955841063, 39.91684625681369],
              [116.39469623565674, 39.920960515882015],
              [116.39104843139647, 39.92102634201797]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "3"
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.38628482818604, 39.91576005117727],
              [116.38662815093993, 39.91227091046905],
              [116.39044761657713, 39.91243549657234],
              [116.39049053192137, 39.91618795242394],
              [116.38628482818604, 39.91576005117727]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          name: "4"
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [116.39139175415039, 39.91612212163695],
              [116.39147758483887, 39.91240257938332],
              [116.39516830444335, 39.91266591645252],
              [116.39486789703369, 39.91628669848582],
              [116.39139175415039, 39.91612212163695]
            ]
          ]
        }
      }
    ]
  };
  map.addSource("polygon", {
    type: "geojson",
    data: data
  });
  // 添加图层
  map.addLayer({
    id: "uniquePolygon",
    type: "fill",
    source: "polygon",
    paint: {
      "fill-color": [
        "match",
        // 通过字段name进行唯一值渲染
        // 属性值为1的颜色为rgb(255,0,0),红色
        ["get", "name"],
        "1",
        "rgb(255,0,0)",
        "2",
        "rgb(255,255,0)",
        "3",
        "rgb(0,255,0)",
        // 没有被指定颜色的属性值，默认为该颜色
        "rgb(0,255,255)"
      ]
    },
    layout: {}
  });
}
export {
  addBase,
  addFillExtrusion,
  addCircle,
  addHeatMap,
  addSky,
  uniqueValue
};
