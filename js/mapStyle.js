export const style = {
    "version": 8,
    "name": "Outdoors",
    "metadata": {
      "mapbox:autocomposite": false,
      "openmaptiles:version": "3.x",
      "maputnik:renderer": "mbgljs"
    },
    "center": [8.542, 47.372],
    "zoom": 11.6,
    "bearing": 0,
    "pitch": 0,
    "sources": {
      "openmaptiles": {
        "type": "vector",
        "url": "https://tiles.stadiamaps.com/data/openmaptiles.json"
      }
    },
    "sprite": "https://tiles.stadiamaps.com/styles/outdoors/sprite",
    "glyphs": "https://tiles.stadiamaps.com/fonts/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {"background-color": "#f9f3ea"}
      },
      {
        "id": "landcover-glacier",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "subclass", "glacier"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#fff",
          "fill-opacity": {"base": 1, "stops": [[0, 0.9], [10, 0.3]]}
        }
      },
      {
        "id": "park",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "park",
        "filter": ["==", "$type", "Polygon"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#d8e8c8",
          "fill-opacity": {"base": 1.8, "stops": [[6, 0.5], [12, 0.2]]}
        }
      },
      {
        "id": "landuse-cemetery",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["==", "class", "cemetery"],
        "paint": {"fill-color": "#e0e4dd"}
      },
      {
        "id": "landuse-railway",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["==", "class", "railway"],
        "paint": {"fill-color": "hsla(30, 19%, 90%, 0.4)"}
      },
      {
        "id": "landcover-grass-park",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "park",
        "filter": [
          "in",
          "class",
          "public_park",
          "national_park",
          "nature_reserve"
        ],
        "paint": {
          "fill-antialias": {"base": 1, "stops": [[0, false], [9, true]]},
          "fill-color": "#d5e8c2",
          "fill-outline-color": "hsla(0, 0%, 0%, 0.1)"
        }
      },
      {
        "id": "landcover-rock",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["all", ["==", "class", "rock"]],
        "paint": {
          "fill-color": "hsla(0, 0%, 85%, 1)",
          "fill-opacity": 1,
          "fill-outline-color": "hsla(0, 0%, 0%, 0.1)"
        }
      },
      {
        "id": "landcover-sand",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["all", ["==", "class", "sand"]],
        "paint": {
          "fill-color": "hsla(44, 70%, 87%, 1)",
          "fill-opacity": 1,
          "fill-outline-color": "hsla(0, 0%, 0%, 0.1)"
        }
      },
      {
        "id": "landcover-wetland",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "wetland"],
        "paint": {
          "fill-antialias": {"base": 1, "stops": [[0, false], [9, true]]},
          "fill-color": "#3D85C6",
          "fill-opacity": 0.075,
          "fill-outline-color": "hsla(0, 0%, 0%, 0.03)"
        }
      },
      {
        "id": "landcover-wood",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "wood"],
        "paint": {
          "fill-antialias": {"base": 1, "stops": [[0, false], [9, true]]},
          "fill-color": "#90d86c",
          "fill-opacity": 0.15,
          "fill-outline-color": "hsla(0, 0%, 0%, 0.2)"
        }
      },
      {
        "id": "landcover-grass",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "grass"],
        "paint": {"fill-color": "#d8e8c8", "fill-opacity": 1}
      },
      {
        "id": "waterway-other",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": ["!in", "class", "canal", "river", "stream"],
        "layout": {"line-cap": "round"},
        "paint": {
          "line-color": "#a0c8f0",
          "line-width": {"base": 1.3, "stops": [[13, 0.5], [20, 2]]}
        }
      },
      {
        "id": "waterway-stream-canal",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": ["in", "class", "canal", "stream"],
        "layout": {"line-cap": "round"},
        "paint": {
          "line-color": "#a0c8f0",
          "line-width": {"base": 1.3, "stops": [[13, 0.5], [20, 6]]}
        }
      },
      {
        "id": "waterway-river",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": ["==", "class", "river"],
        "layout": {"line-cap": "round"},
        "paint": {
          "line-color": "#a0c8f0",
          "line-width": {"base": 1.2, "stops": [[10, 0.8], [20, 6]]}
        }
      },
      {
        "id": "boundary-land-level-4",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "boundary",
        "filter": ["all", ["in", "admin_level", 4], ["!=", "maritime", 1]],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#9e9cab",
          "line-dasharray": [4, 2, 2, 2],
          "line-opacity": 0.5,
          "line-width": {"base": 1.4, "stops": [[4, 0.4], [5, 0.8], [12, 2.5]]}
        }
      },
      {
        "id": "boundary-land-level-2",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "boundary",
        "filter": [
          "all",
          ["==", "admin_level", 2],
          ["!=", "maritime", 1],
          ["!=", "disputed", 1]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "hsl(248, 7%, 66%)",
          "line-width": {
            "base": 1,
            "stops": [[0, 0.6], [4, 1.4], [5, 2], [12, 4]]
          }
        }
      },
      {
        "id": "boundary-land-disputed",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "boundary",
        "filter": ["all", ["!=", "maritime", 1], ["==", "disputed", 1]],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "hsl(248, 7%, 70%)",
          "line-dasharray": [1, 3],
          "line-width": {
            "base": 1,
            "stops": [[0, 0.6], [4, 1.4], [5, 2], [12, 4]]
          }
        }
      },
      {
        "id": "water-offset",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "water",
        "minzoom": 6,
        "maxzoom": 8,
        "filter": ["==", "$type", "Polygon"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#a0c8f0",
          "fill-opacity": 1,
          "fill-translate": {"base": 1, "stops": [[6, [2, 0]], [8, [0, 0]]]}
        }
      },
      {
        "id": "water",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "water",
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "hsl(210, 60%, 80%)"}
      },
      {
        "id": "park-outline",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "park",
        "minzoom": 6,
        "filter": ["==", "$type", "Polygon"],
        "layout": {},
        "paint": {
          "line-color": {
            "base": 1,
            "stops": [
              [6, "hsla(96, 40%, 49%, 0.36)"],
              [8, "hsla(96, 40%, 49%, 0.66)"]
            ]
          },
          "line-dasharray": [3, 3]
        }
      },
      {
        "id": "landcover-ice-shelf",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "subclass", "ice_shelf"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#fff",
          "fill-opacity": {"base": 1, "stops": [[0, 0.9], [10, 0.3]]}
        }
      },
      {
        "id": "building",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "building",
        "paint": {
          "fill-antialias": true,
          "fill-color": {"base": 1, "stops": [[15.5, "#f2eae2"], [16, "#dfdbd7"]]}
        }
      },
      {
        "id": "building-top",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "building",
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#f2eae2",
          "fill-opacity": {"base": 1, "stops": [[13, 0], [16, 1]]},
          "fill-outline-color": "#dfdbd7",
          "fill-translate": {"base": 1, "stops": [[14, [0, 0]], [16, [-2, -2]]]}
        }
      },
      {
        "id": "tunnel-service-track-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "service", "track"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#cfcdca",
          "line-dasharray": [0.5, 0.25],
          "line-width": {"base": 1.2, "stops": [[15, 1], [16, 4], [20, 11]]}
        }
      },
      {
        "id": "tunnel-minor-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["all", ["==", "brunnel", "tunnel"], ["==", "class", "minor"]],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#cfcdca",
          "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
          "line-width": {
            "base": 1.2,
            "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "tunnel-secondary-tertiary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
        }
      },
      {
        "id": "tunnel-trunk-primary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "primary", "trunk"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "tunnel-motorway-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["==", "class", "motorway"]
        ],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#e9ac77",
          "line-dasharray": [0.5, 0.25],
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "tunnel-path",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "brunnel", "tunnel"], ["in", "class", "path", "footway"]]
        ],
        "paint": {
          "line-color": "#cba",
          "line-dasharray": [1.5, 0.75],
          "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 4]]}
        }
      },
      {
        "id": "tunnel-service-track",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "service", "track"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#fff",
          "line-width": {"base": 1.2, "stops": [[15.5, 0], [16, 2], [20, 7.5]]}
        }
      },
      {
        "id": "tunnel-minor",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["==", "class", "minor_road"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#fff",
          "line-opacity": 1,
          "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 11.5]]}
        }
      },
      {
        "id": "tunnel-secondary-tertiary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#fff4c6",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 10]]}
        }
      },
      {
        "id": "tunnel-trunk-primary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["in", "class", "primary", "trunk"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#fff4c6",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "tunnel-motorway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "tunnel"],
          ["==", "class", "motorway"]
        ],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "#ffdaa6",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "tunnel-railway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["all", ["==", "brunnel", "tunnel"], ["==", "class", "rail"]],
        "paint": {
          "line-color": "#bbb",
          "line-dasharray": [2, 2],
          "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
        }
      },
      {
        "id": "ferry",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["all", ["in", "class", "ferry"]],
        "layout": {"line-join": "round", "visibility": "visible"},
        "paint": {
          "line-color": "rgba(108, 159, 182, 1)",
          "line-dasharray": [2, 2],
          "line-width": 1.1
        }
      },
      {
        "id": "aeroway-taxiway-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 12,
        "filter": ["all", ["in", "class", "taxiway"]],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(153, 153, 153, 1)",
          "line-opacity": 1,
          "line-width": {"base": 1.5, "stops": [[11, 2], [17, 12]]}
        }
      },
      {
        "id": "aeroway-runway-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 12,
        "filter": ["all", ["in", "class", "runway"]],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(153, 153, 153, 1)",
          "line-opacity": 1,
          "line-width": {"base": 1.5, "stops": [[11, 5], [17, 55]]}
        }
      },
      {
        "id": "aeroway-area",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 4,
        "filter": [
          "all",
          ["==", "$type", "Polygon"],
          ["in", "class", "runway", "taxiway"]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "rgba(255, 255, 255, 1)",
          "fill-opacity": {"base": 1, "stops": [[13, 0], [14, 1]]}
        }
      },
      {
        "id": "aeroway-taxiway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 4,
        "filter": [
          "all",
          ["in", "class", "taxiway"],
          ["==", "$type", "LineString"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(255, 255, 255, 1)",
          "line-opacity": {"base": 1, "stops": [[11, 0], [12, 1]]},
          "line-width": {"base": 1.5, "stops": [[11, 1], [17, 10]]}
        }
      },
      {
        "id": "aeroway-runway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 4,
        "filter": [
          "all",
          ["in", "class", "runway"],
          ["==", "$type", "LineString"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(255, 255, 255, 1)",
          "line-opacity": {"base": 1, "stops": [[11, 0], [12, 1]]},
          "line-width": {"base": 1.5, "stops": [[11, 4], [17, 50]]}
        }
      },
      {
        "id": "highway-area",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["==", "$type", "Polygon"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-antialias": false,
          "fill-color": "hsla(0, 0%, 89%, 0.56)",
          "fill-opacity": 0.9,
          "fill-outline-color": "#cfcdca"
        }
      },
      {
        "id": "highway-motorway-link-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 12,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "motorway_link"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {
            "base": 1.2,
            "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "highway-link-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          [
            "in",
            "class",
            "primary_link",
            "secondary_link",
            "tertiary_link",
            "trunk_link"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {
            "base": 1.2,
            "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "highway-minor-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!=", "brunnel", "tunnel"],
            ["in", "class", "minor", "service", "track"]
          ]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "#cfcdca",
          "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
          "line-width": {
            "base": 1.2,
            "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "highway-secondary-tertiary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {"base": 1.2, "stops": [[6, 1.5], [20, 17]]}
        }
      },
      {
        "id": "highway-primary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 5,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "primary"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e9ac77",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.5], [8, 0.6], [9, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "highway-trunk-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 5,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "trunk"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": {"stops": [[5, 0], [6, 1]]},
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "highway-motorway-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 4,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "motorway"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": {"stops": [[4, 0], [5, 1]]},
          "line-width": {
            "base": 1.2,
            "stops": [[4, 0], [5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "highway-path",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!in", "brunnel", "bridge", "tunnel"],
            ["in", "class", "path", "footway"]
          ]
        ],
        "paint": {
          "line-color": "#cba",
          "line-dasharray": {
            "stops": [[13, [1, 0.5]], [14, [2, 1]], [20, [3, 1]]]
          },
          "line-width": {"base": 1.2, "stops": [[13, 1], [14, 2], [20, 4]]}
        }
      },
      {
        "id": "highway-motorway-link",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 12,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "motorway_link"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "#e5b87e",
          "line-width": {
            "base": 1.2,
            "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
          }
        }
      },
      {
        "id": "highway-link",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          [
            "in",
            "class",
            "primary_link",
            "secondary_link",
            "tertiary_link",
            "trunk_link"
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {
            "base": 1.2,
            "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
          }
        }
      },
      {
        "id": "ski-slopes-line",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "piste",
        "minzoom": 11,
        "filter": [
          "all",
          ["in", "class", "downhill", "nordic"],
          ["==", "$type", "LineString"]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-blur": 0.5,
          "line-color": "rgba(75, 122, 195, 1)",
          "line-dasharray": [3, 2],
          "line-width": {"stops": [[10, 1], [13, 1.5]]}
        }
      },
      {
        "id": "highway-minor",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!=", "brunnel", "tunnel"],
            ["in", "class", "minor", "service", "track"]
          ]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "#fff",
          "line-opacity": 1,
          "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 11.5]]}
        }
      },
      {
        "id": "highway-secondary-tertiary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [8, 0.5], [20, 13]]}
        }
      },
      {
        "id": "highway-primary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!in", "brunnel", "bridge", "tunnel"],
            ["in", "class", "primary"]
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {"base": 1.2, "stops": [[5, 0.1], [9, 0.5], [20, 18]]}
        }
      },
      {
        "id": "highway-trunk",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!in", "brunnel", "bridge", "tunnel"],
            ["in", "class", "trunk"]
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "highway-motorway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 5,
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!in", "brunnel", "bridge", "tunnel"],
            ["==", "class", "motorway"]
          ]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#e5b87e",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 10]]}
        }
      },
      {
        "id": "railway-transit",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "hsla(0, 0%, 73%, 0.77)",
          "line-width": {"base": 1.4, "stops": [[14, 0.4], [20, 1]]}
        }
      },
      {
        "id": "railway-transit-hatching",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "hsla(0, 0%, 73%, 0.68)",
          "line-dasharray": [0.2, 8],
          "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 2], [20, 6]]}
        }
      },
      {
        "id": "railway-service",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "class", "rail"], ["has", "service"]]
        ],
        "paint": {
          "line-color": "hsla(0, 0%, 73%, 0.77)",
          "line-width": {"base": 1.4, "stops": [[14, 0.4], [20, 1]]}
        }
      },
      {
        "id": "railway-service-hatching",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "class", "rail"], ["has", "service"]]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "hsla(0, 0%, 73%, 0.68)",
          "line-dasharray": [0.2, 8],
          "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 2], [20, 6]]}
        }
      },
      {
        "id": "railway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!has", "service"],
            ["!in", "brunnel", "bridge", "tunnel"],
            ["==", "class", "rail"]
          ]
        ],
        "paint": {
          "line-color": "#bbb",
          "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
        }
      },
      {
        "id": "railway-hatching",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          [
            "all",
            ["!has", "service"],
            ["!in", "brunnel", "bridge", "tunnel"],
            ["==", "class", "rail"]
          ]
        ],
        "paint": {
          "line-color": "#bbb",
          "line-dasharray": [0.2, 8],
          "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
        }
      },
      {
        "id": "bridge-motorway-link-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["==", "class", "motorway_link"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {
            "base": 1.2,
            "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "bridge-link-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          [
            "in",
            "class",
            "primary_link",
            "secondary_link",
            "tertiary_link",
            "trunk_link"
          ]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {
            "base": 1.2,
            "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
          }
        }
      },
      {
        "id": "bridge-secondary-tertiary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-opacity": 1,
          "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 28]]}
        }
      },
      {
        "id": "bridge-trunk-primary-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["in", "class", "primary", "trunk"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "hsl(28, 76%, 67%)",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 26]]
          }
        }
      },
      {
        "id": "bridge-motorway-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["==", "class", "motorway"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e9ac77",
          "line-width": {
            "base": 1.2,
            "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
          }
        }
      },
      {
        "id": "bridge-path-casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "brunnel", "bridge"], ["in", "class", "path", "footway"]]
        ],
        "paint": {
          "line-color": "#f8f4f0",
          "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 18]]}
        }
      },
      {
        "id": "bridge-path",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["all", ["==", "brunnel", "bridge"], ["in", "class", "path", "footway"]]
        ],
        "paint": {
          "line-color": "#cba",
          "line-dasharray": [1.5, 0.75],
          "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 4]]}
        }
      },
      {
        "id": "bridge-motorway-link",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["==", "class", "motorway_link"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e5b87e",
          "line-width": {
            "base": 1.2,
            "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
          }
        }
      },
      {
        "id": "bridge-link",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          [
            "in",
            "class",
            "primary_link",
            "secondary_link",
            "tertiary_link",
            "trunk_link"
          ]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {
            "base": 1.2,
            "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
          }
        }
      },
      {
        "id": "bridge-secondary-tertiary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 20]]}
        }
      },
      {
        "id": "bridge-trunk-primary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["in", "class", "primary", "trunk"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e5d7a0",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "bridge-motorway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "brunnel", "bridge"],
          ["==", "class", "motorway"]
        ],
        "layout": {"line-join": "round"},
        "paint": {
          "line-color": "#e5b87e",
          "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
        }
      },
      {
        "id": "bridge-railway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
        "paint": {
          "line-color": "#bbb",
          "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
        }
      },
      {
        "id": "bridge-railway-hatching",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
        "paint": {
          "line-color": "#bbb",
          "line-dasharray": [0.2, 8],
          "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
        }
      },
      {
        "id": "cablecar",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 11,
        "filter": ["==", "class", "cable_car"],
        "layout": {"line-cap": "round", "visibility": "visible"},
        "paint": {
          "line-color": "hsl(0, 0%, 70%)",
          "line-width": {"base": 1, "stops": [[11, 1], [19, 2.5]]}
        }
      },
      {
        "id": "cablecar-dash",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 11,
        "filter": ["==", "class", "cable_car"],
        "layout": {"line-cap": "round", "visibility": "visible"},
        "paint": {
          "line-color": "hsl(0, 0%, 70%)",
          "line-dasharray": [2, 3],
          "line-width": {"base": 1, "stops": [[11, 3], [19, 5.5]]}
        }
      },
      {
        "id": "waterway-name",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "minzoom": 13,
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["has", "name"],
          ["!=", "name", ""]
        ],
        "layout": {
          "symbol-placement": "line",
          "symbol-spacing": 350,
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", " ", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Italic"],
          "text-letter-spacing": 0.2,
          "text-max-width": 5,
          "text-pitch-alignment": "viewport",
          "text-rotation-alignment": "map",
          "text-size": 14,
          "visibility": "none"
        },
        "paint": {"text-color": "#115AA7"}
      },
      {
        "id": "water-name-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "water_name",
        "minzoom": 1,
        "filter": ["all", ["==", "$type", "Point"], ["!in", "class", "ocean"]],
        "layout": {
          "symbol-placement": "point",
          "symbol-spacing": 150,
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Italic"],
          "text-letter-spacing": 0.2,
          "text-line-height": 1.55,
          "text-max-width": 5,
          "text-size": {"stops": [[0, 10], [6, 14]]},
          "visibility": "none"
        },
        "paint": {"text-color": "#115AA7"}
      },
      {
        "id": "water-name-ocean",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "water_name",
        "filter": ["all", ["==", "$type", "Point"], ["==", "class", "ocean"]],
        "layout": {
          "symbol-avoid-edges": true,
          "symbol-placement": "point",
          "symbol-spacing": 350,
          "text-field": "{name:latin}",
          "text-font": ["Stadia Italic"],
          "text-letter-spacing": 0.2,
          "text-max-width": 5,
          "text-size": 14,
          "visibility": "none"
        },
        "paint": {"text-color": "#115AA7"}
      },
      {
        "id": "poi-level-3",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 16,
        "filter": ["all", ["==", "$type", "Point"], [">=", "rank", 25]],
        "layout": {
          "icon-image": "{class}_11",
          "symbol-avoid-edges": true,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "poi-level-2",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 15,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["<=", "rank", 24],
          [">=", "rank", 15]
        ],
        "layout": {
          "icon-image": "{class}_11",
          "symbol-avoid-edges": true,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "poi-level-1",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 14,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["<=", "rank", 14],
          ["has", "name"],
          ["!=", "name", ""]
        ],
        "layout": {
          "icon-image": "{class}_11",
          "symbol-avoid-edges": true,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "poi-railway",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 13,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["has", "name"],
          ["!=", "name", ""],
          ["==", "class", "railway"],
          ["==", "subclass", "station"]
        ],
        "layout": {
          "icon-allow-overlap": false,
          "icon-ignore-placement": false,
          "icon-image": "{class}_11",
          "icon-optional": false,
          "symbol-avoid-edges": true,
          "text-allow-overlap": false,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-ignore-placement": false,
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-optional": true,
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "highway-name-path",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 15.5,
        "filter": ["in", "class", "path", "footway"],
        "layout": {
          "symbol-placement": "line",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", " ", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-pitch-alignment": "viewport",
          "text-rotation-alignment": "map",
          "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "hsl(30, 23%, 62%)",
          "text-halo-color": "#f8f4f0",
          "text-halo-width": 0.5
        }
      },
      {
        "id": "ski-slopes-label",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "piste",
        "minzoom": 13,
        "layout": {
          "icon-pitch-alignment": "auto",
          "symbol-placement": "line-center",
          "text-anchor": "bottom",
          "text-field": "{name}",
          "text-font": ["Stadia Regular"],
          "text-keep-upright": true,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "rgba(75, 122, 195, 1)",
          "text-halo-blur": 0.5,
          "text-halo-color": "rgba(255, 255, 255, 1)",
          "text-halo-width": 1
        }
      },
      {
        "id": "highway-name-minor",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 15,
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["in", "class", "minor", "service", "track"]
        ],
        "layout": {
          "symbol-placement": "line",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", " ", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-pitch-alignment": "viewport",
          "text-rotation-alignment": "map",
          "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
        },
        "paint": {
          "text-color": "#765",
          "text-halo-blur": 0.5,
          "text-halo-width": 1
        }
      },
      {
        "id": "highway-name-major",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 12.2,
        "filter": ["in", "class", "primary", "secondary", "tertiary", "trunk"],
        "layout": {
          "symbol-placement": "line",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", " ", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-pitch-alignment": "viewport",
          "text-rotation-alignment": "map",
          "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
        },
        "paint": {
          "text-color": "#765",
          "text-halo-blur": 0.5,
          "text-halo-width": 1
        }
      },
      {
        "id": "highway-shield-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 8,
        "filter": [
          "all",
          ["<=", "ref_length", 6],
          ["==", "$type", "LineString"],
          ["!in", "network", "us-interstate", "us-highway", "us-state"]
        ],
        "layout": {
          "icon-image": "road_{ref_length}",
          "icon-rotation-alignment": "viewport",
          "icon-size": 1,
          "symbol-avoid-edges": true,
          "symbol-placement": {"base": 1, "stops": [[10, "point"], [11, "line"]]},
          "text-field": "{ref}",
          "text-font": ["Stadia Semibold"],
          "text-rotation-alignment": "viewport",
          "text-size": 10
        },
        "paint": {}
      },
      {
        "id": "highway-shield-us-interstate",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 7,
        "filter": [
          "all",
          ["<=", "ref_length", 6],
          ["==", "$type", "LineString"],
          ["in", "network", "us-interstate"]
        ],
        "layout": {
          "icon-image": "{network}_{ref_length}",
          "icon-rotation-alignment": "viewport",
          "icon-size": 1,
          "symbol-avoid-edges": true,
          "symbol-placement": {
            "base": 1,
            "stops": [[7, "point"], [7, "line"], [8, "line"]]
          },
          "text-field": "{ref}",
          "text-font": ["Stadia Semibold"],
          "text-rotation-alignment": "viewport",
          "text-size": 10
        },
        "paint": {"text-color": "rgba(0, 0, 0, 1)"}
      },
      {
        "id": "highway-shield-us-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "minzoom": 9,
        "filter": [
          "all",
          ["<=", "ref_length", 6],
          ["==", "$type", "LineString"],
          ["in", "network", "us-highway", "us-state"]
        ],
        "layout": {
          "icon-image": "{network}_{ref_length}",
          "icon-rotation-alignment": "viewport",
          "icon-size": 1,
          "symbol-avoid-edges": true,
          "symbol-placement": {"base": 1, "stops": [[10, "point"], [11, "line"]]},
          "text-field": "{ref}",
          "text-font": ["Stadia Semibold"],
          "text-rotation-alignment": "viewport",
          "text-size": 10
        },
        "paint": {"text-color": "rgba(0, 0, 0, 1)"}
      },
      {
        "id": "airport-label-major",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "aerodrome_label",
        "minzoom": 10,
        "filter": ["all", ["has", "iata"]],
        "layout": {
          "icon-image": "airport_11",
          "icon-size": 1,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-optional": true,
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "place-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 12,
        "filter": [
          "!in",
          "class",
          "city",
          "town",
          "village",
          "country",
          "continent"
        ],
        "layout": {
          "symbol-avoid-edges": true,
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-letter-spacing": 0.1,
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-size": {"base": 1.2, "stops": [[12, 10], [15, 14]]},
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#633",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1.2
        }
      },
      {
        "id": "place-village",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 11,
        "filter": ["==", "class", "village"],
        "layout": {
          "symbol-avoid-edges": true,
          "symbol-spacing": 350,
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-line-height": 1.55,
          "text-max-width": 8,
          "text-size": {"base": 1.2, "stops": [[10, 12], [15, 22]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "#333",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1.2
        }
      },
      {
        "id": "mountain-peaks",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "mountain_peak",
        "minzoom": 9,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["<=", "rank", 2],
          ["has", "name"],
          ["!=", "name", ""]
        ],
        "layout": {
          "icon-image": "mountain_11",
          "symbol-avoid-edges": true,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ],
            "\n",
            ["to-string", ["get", "ele"]],
            " m"
          ],
          "text-font": ["Stadia Regular"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "mountain-peaks-important",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "mountain_peak",
        "minzoom": 7,
        "maxzoom": 9,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          [">=", "ele", 2500],
          ["has", "name"],
          ["!=", "name", ""],
          ["<=", "rank", 1]
        ],
        "layout": {
          "icon-image": "mountain_11",
          "symbol-avoid-edges": true,
          "text-anchor": "top",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ],
            "\n",
            ["to-string", ["get", "ele"]],
            " m"
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-padding": 2,
          "text-size": 12,
          "visibility": "none"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        }
      },
      {
        "id": "place-town",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "filter": ["==", "class", "town"],
        "layout": {
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Regular"],
          "text-line-height": 1.55,
          "text-max-width": 8,
          "text-size": {"base": 1.2, "stops": [[10, 14], [15, 22]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "#333",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1.2
        }
      },
      {
        "id": "park-national",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "park",
        "minzoom": 6,
        "filter": [
          "all",
          ["==", "class", "national_park"],
          ["==", "$type", "Point"],
          ["==", "rank", 1]
        ],
        "layout": {
          "symbol-avoid-edges": true,
          "symbol-placement": "point",
          "text-anchor": "center",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Italic"],
          "text-justify": "center",
          "text-line-height": 1.55,
          "text-max-width": 10,
          "text-padding": 2,
          "text-size": {"base": 1.2, "stops": [[6, 12], [8, 14], [12, 16]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "rgba(102, 51, 1, 1)",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1
        }
      },
      {
        "id": "water-name-lakeline",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "water_name",
        "filter": ["==", "$type", "LineString"],
        "layout": {
          "symbol-placement": "line",
          "symbol-spacing": 250,
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", " ", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Italic"],
          "text-letter-spacing": 0.2,
          "text-line-height": 1.55,
          "text-max-width": 5,
          "text-pitch-alignment": "viewport",
          "text-rotation-alignment": "map",
          "text-size": {"base": 1.2, "stops": [[0, 10], [14, 14]]},
          "visibility": "none"
        },
        "paint": {"text-color": "#115AA7"}
      },
      {
        "id": "place-city",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "filter": ["all", ["!=", "capital", 2], ["==", "class", "city"]],
        "layout": {
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 8,
          "text-size": {"base": 1.2, "stops": [[7, 14], [11, 24]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "#333",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1.2
        }
      },
      {
        "id": "place-city-capital",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "filter": ["all", ["==", "capital", 2], ["==", "class", "city"]],
        "layout": {
          "icon-image": "star_11",
          "icon-size": 0.8,
          "text-anchor": "left",
          "text-field": [
            "concat",
            ["get", "name:latin"],
            [
              "case",
              [
                "all",
                ["has", "name:nonlatin"],
                ["is-supported-script", ["get", "name:nonlatin"]]
              ],
              ["concat", "\n", ["get", "name:nonlatin"]],
              ""
            ]
          ],
          "text-font": ["Stadia Semibold"],
          "text-line-height": 1.55,
          "text-max-width": 8,
          "text-offset": [0.4, 0],
          "text-size": {"base": 1.2, "stops": [[7, 14], [11, 24]]},
          "visibility": "none"
        },
        "paint": {
          "text-color": "#333",
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 1.2
        }
      },
      {
        "id": "place-country-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 1,
        "filter": [
          "all",
          ["==", "class", "country"],
          [">=", "rank", 3],
          ["!has", "iso_a2"]
        ],
        "layout": {
          "symbol-avoid-edges": true,
          "text-field": "{name:latin}",
          "text-font": ["Stadia Italic"],
          "text-max-width": 6.25,
          "text-size": {"stops": [[3, 11], [7, 17]]},
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#334",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 2
        }
      },
      {
        "id": "place-country-3",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 1,
        "filter": [
          "all",
          ["==", "class", "country"],
          [">=", "rank", 3],
          ["has", "iso_a2"]
        ],
        "layout": {
          "text-field": "{name:latin}",
          "text-font": ["Stadia Bold"],
          "text-max-width": 6.25,
          "text-size": {"stops": [[3, 11], [7, 17]]},
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#334",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 2
        }
      },
      {
        "id": "place-country-2",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 1,
        "filter": [
          "all",
          ["==", "class", "country"],
          ["==", "rank", 2],
          ["has", "iso_a2"]
        ],
        "layout": {
          "text-field": "{name:latin}",
          "text-font": ["Stadia Bold"],
          "text-max-width": 6.25,
          "text-size": {"stops": [[2, 11], [5, 17]]},
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#334",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 2
        }
      },
      {
        "id": "place-country-1",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 1,
        "filter": [
          "all",
          ["==", "class", "country"],
          ["==", "rank", 1],
          ["has", "iso_a2"]
        ],
        "layout": {
          "text-field": "{name:latin}",
          "text-font": ["Stadia Bold"],
          "text-max-width": 6.25,
          "text-size": {"stops": [[1, 11], [4, 17]]},
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#334",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 2
        }
      },
      {
        "id": "place-continent",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "maxzoom": 1,
        "filter": ["==", "class", "continent"],
        "layout": {
          "text-field": "{name:latin}",
          "text-font": ["Stadia Bold"],
          "text-max-width": 6.25,
          "text-size": 14,
          "text-transform": "uppercase",
          "visibility": "none"
        },
        "paint": {
          "text-color": "#334",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "text-halo-width": 2
        }
      }
    ],
    "id": "gq2k1dh6m"
  }
