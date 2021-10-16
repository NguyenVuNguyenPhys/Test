TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "class": "Panorama",
  "partial": false,
  "pitch": 0,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "backgroundColor": "#404040",
   "id": "Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "label": "C01",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "C02",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "C03",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "C04",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "C05",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "C06",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "C07",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "C08",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "C09",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "C10",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "C11",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "C12",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "C13",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "C14",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "C15",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "C16",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "C17",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    },
    {
     "label": "C18",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "class": "MenuItem"
    },
    {
     "label": "C19",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "class": "MenuItem"
    },
    {
     "label": "C20",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "class": "MenuItem"
    },
    {
     "label": "C21",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "class": "MenuItem"
    },
    {
     "label": "C22",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "class": "MenuItem"
    },
    {
     "label": "C23",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "class": "MenuItem"
    }
   ],
   "rollOverFontColor": "#FFFFFF"
  },
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "mapLocations": [
   {
    "x": 310.47,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_9289F148_8740_B1BC_41E0_1F0A6681D154",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_t.png",
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 652,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_9289E148_8740_B1BC_41DA_2E7C95D84E60",
       "map": {
        "offsetY": 0,
        "x": 299.65,
        "width": 21.5,
        "y": 122.19,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_46_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 299.65,
        "y": 122.19,
        "class": "HotspotMapOverlayImage",
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_46.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92883148_8740_B1BC_41D8_C8016EF50229",
       "map": {
        "offsetY": 0,
        "x": 344.5,
        "width": 21,
        "y": 141.55,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_47_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 344.5,
        "y": 141.55,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_47.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92882148_8740_B1BC_41DA_2644D242CF74",
       "map": {
        "offsetY": 0,
        "x": 391.56,
        "width": 21,
        "y": 160.69,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_48_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 391.56,
        "y": 160.69,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_48.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92881148_8740_B1BC_41B7_7A9E0DBA0E10",
       "map": {
        "offsetY": 0,
        "x": 442.31,
        "width": 21,
        "y": 183.59,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_49_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 442.31,
        "y": 183.59,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_49.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92880148_8740_B1BC_41DA_77CFDA360452",
       "map": {
        "offsetY": 0,
        "x": 502.3,
        "width": 21,
        "y": 202.72,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_50_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 502.3,
        "y": 202.72,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_50.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92887148_8740_B1BC_41BB_498535E20685",
       "map": {
        "offsetY": 0,
        "x": 535.69,
        "width": 21,
        "y": 216.98,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_51_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 535.69,
        "y": 216.98,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_51.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92886148_8740_B1BC_41E0_8331244CEBEC",
       "map": {
        "offsetY": 0,
        "x": 600.34,
        "width": 21,
        "y": 247.49,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_52_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 600.34,
        "y": 247.49,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_52.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92885148_8740_B1BC_41CF_2BAB65247A4F",
       "map": {
        "offsetY": 0,
        "x": 624.64,
        "width": 21,
        "y": 207.67,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_53_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 624.64,
        "y": 207.67,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_53.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92884148_8740_B1BC_41BA_5A91FA514966",
       "map": {
        "offsetY": 0,
        "x": 623.46,
        "width": 21,
        "y": 147.02,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_54_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 623.46,
        "y": 147.02,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_54.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288B148_8740_B1BC_41CA_425107FCD71E",
       "map": {
        "offsetY": 0,
        "x": 674.81,
        "width": 21,
        "y": 239.22,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_55_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 674.81,
        "y": 239.22,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_55.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288A148_8740_B1BC_41D5_067CC01A9077",
       "map": {
        "offsetY": 0,
        "x": 736.2,
        "width": 21,
        "y": 238.41,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_56_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 736.2,
        "y": 238.41,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_56.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92889148_8740_B1BC_41D2_88F44257955C",
       "map": {
        "offsetY": 0,
        "x": 800.99,
        "width": 21,
        "y": 239.22,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_57_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 800.99,
        "y": 239.22,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_57.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_92888149_8740_B1BC_41C5_FCDBFE8BEA9F",
       "map": {
        "offsetY": 0,
        "x": 846.65,
        "width": 21,
        "y": 239.22,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_58_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 846.65,
        "y": 239.22,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_58.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288F149_8740_B1BC_41CA_C4120C18B77D",
       "map": {
        "offsetY": 0,
        "x": 887.43,
        "width": 21,
        "y": 241.88,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_59_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 887.43,
        "y": 241.88,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_59.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288E149_8740_B1BC_4194_2BD205FB03BB",
       "map": {
        "offsetY": 0,
        "x": 935.67,
        "width": 21,
        "y": 240.55,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_60_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 935.67,
        "y": 240.55,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_60.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288D149_8740_B1BC_41DA_225F7225BE7A",
       "map": {
        "offsetY": 0,
        "x": 617.11,
        "width": 21,
        "y": 299.13,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_61_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 617.11,
        "y": 299.13,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_61.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9288C149_8740_B1BC_41A3_3CB502F9E3D5",
       "map": {
        "offsetY": 0,
        "x": 664.76,
        "width": 21,
        "y": 305.34,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_62_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 664.76,
        "y": 305.34,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_62.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 16)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91773149_8740_B1BC_41DF_F761846EB5AD",
       "map": {
        "offsetY": 0,
        "x": 663.35,
        "width": 21,
        "y": 332.67,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_63_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 663.35,
        "y": 332.67,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_63.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 17)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91772149_8740_B1BC_41C1_6DAF47AE9A76",
       "map": {
        "offsetY": 0,
        "x": 659.14,
        "width": 21,
        "y": 375.15,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_64_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 659.14,
        "y": 375.15,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_64.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 18)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91771149_8740_B1BC_41C3_1A728D800E7C",
       "map": {
        "offsetY": 0,
        "x": 673.48,
        "width": 21,
        "y": 423.69,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_65_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 673.48,
        "y": 423.69,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_65.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91770149_8740_B1BC_41CA_F0AB18843701",
       "map": {
        "offsetY": 0,
        "x": 625.45,
        "width": 21,
        "y": 331.12,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_66_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 625.45,
        "y": 331.12,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_66.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91777149_8740_B1BC_418A_A66701CEFE56",
       "map": {
        "offsetY": 0,
        "x": 586.23,
        "width": 21,
        "y": 344.5,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_67_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 586.23,
        "y": 344.5,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_67.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_91776149_8740_B1BC_41D9_D29012FC1612",
       "map": {
        "offsetY": 0,
        "x": 559.11,
        "width": 21,
        "y": 360.38,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_68_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 559.11,
        "y": 360.38,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9289F148_8740_B1BC_41E0_1F0A6681D154_HS_68.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1
    },
    "y": 133.23,
    "angle": 115.94,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C01",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 9.2,
        "yaw": 2.71,
        "image": {
         "levels": [
          {
           "height": 41,
           "width": 65,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.74
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A0615AF8_8740_505C_41D0_6B4BDBE5AC44); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.2,
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 130,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.74
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "class": "Panorama",
     "partial": false,
     "pitch": 0,
     "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
       "y": 152.86,
       "angle": 108.43,
       "class": "PanoramaMapLocation"
      }
     ],
     "label": "C02",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 9.06,
           "yaw": 2.66,
           "image": {
            "levels": [
             {
              "height": 65,
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -14.65
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_A090FA68_8740_507B_41B8_2A652692F132); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.06,
           "image": {
            "levels": [
             {
              "height": 130,
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14.65
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 8.74,
           "yaw": -179.81,
           "image": {
            "levels": [
             {
              "height": 39,
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.94
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_A0AE5A77_8740_5055_41D4_750975B75DBC); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -179.81,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.74,
           "image": {
            "levels": [
             {
              "height": 78,
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.94
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "class": "Panorama",
        "partial": false,
        "pitch": 0,
        "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
          "y": 172.15,
          "angle": -70.14,
          "class": "PanoramaMapLocation"
         }
        ],
        "label": "C03",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 8.78,
              "yaw": 179.91,
              "image": {
               "levels": [
                {
                 "height": 65,
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.32
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_A0744B07_8740_51B4_41C7_E719BCD48682); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 179.91,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.78,
              "image": {
               "levels": [
                {
                 "height": 130,
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -20.32
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 8.98,
              "yaw": 1.93,
              "image": {
               "levels": [
                {
                 "height": 37,
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -17.36
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A00DAB15_8740_51D4_41D5_F1CC95B20136); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 1.93,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.98,
              "image": {
               "levels": [
                {
                 "height": 74,
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.36
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "class": "Panorama",
           "partial": false,
           "pitch": 0,
           "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
             "y": 194.9,
             "angle": 107.74,
             "class": "PanoramaMapLocation"
            }
           ],
           "label": "C04",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 9.04,
                 "yaw": -179.87,
                 "image": {
                  "levels": [
                   {
                    "height": 52,
                    "width": 64,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -14.96
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_AFC20B7F_8740_5055_41DF_895DA52986E0); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -179.87,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.04,
                 "image": {
                  "levels": [
                   {
                    "height": 104,
                    "width": 129,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -14.96
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 8.5,
                 "yaw": -1.53,
                 "image": {
                  "levels": [
                   {
                    "height": 52,
                    "width": 60,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.8
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_AFD52B8E_8740_50B7_41A9_6870B74DE00C); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -1.54,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.5,
                 "image": {
                  "levels": [
                   {
                    "height": 104,
                    "width": 120,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.8
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "class": "AdjacentPanorama",
             "backwardYaw": 179.91
            },
            {
             "distance": 1,
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "class": "Panorama",
              "partial": false,
              "pitch": 0,
              "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                "y": 214.18,
                "angle": -68.2,
                "class": "PanoramaMapLocation"
               }
              ],
              "label": "C05",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 9.01,
                    "yaw": -177.15,
                    "image": {
                     "levels": [
                      {
                       "height": 53,
                       "width": 65,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_ABADF8BE_8740_50D7_41DA_87B026CB1AAD); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -177.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.01,
                    "image": {
                     "levels": [
                      {
                       "height": 106,
                       "width": 130,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -15.71
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 9.22,
                    "yaw": -1.42,
                    "image": {
                     "levels": [
                      {
                       "height": 64,
                       "width": 64,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -9.99
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_ABA0B8CC_8740_50BB_419D_8C8FE14D2179); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -1.42,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.22,
                    "image": {
                     "levels": [
                      {
                       "height": 128,
                       "width": 129,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.99
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 2500,
                   "width": 5000,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "class": "Panorama",
                 "partial": false,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                   "y": 228.44,
                   "angle": 109.18,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "label": "C06",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 9.08,
                       "yaw": -179.79,
                       "image": {
                        "levels": [
                         {
                          "height": 37,
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -14.13
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_A0BC9A95_8740_50D5_41B1_8534FEB9692A); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -179.79,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.08,
                       "image": {
                        "levels": [
                         {
                          "height": 75,
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.13
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 9.22,
                       "yaw": 5.64,
                       "image": {
                        "levels": [
                         {
                          "height": 32,
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -9.93
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A0A58A86_8740_50B7_41BB_D7C56AE61CD9); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 5.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.22,
                       "image": {
                        "levels": [
                         {
                          "height": 65,
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -9.93
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "height": 2500,
                      "width": 5000,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "class": "Panorama",
                    "partial": false,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                      "y": 258.07,
                      "angle": 25.28,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "label": "C07",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 9.22,
                          "yaw": -91.86,
                          "image": {
                           "levels": [
                            {
                             "height": 48,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -10.01
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_A0FE7A02_8740_53AF_41C5_2C96842EBDDB); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -91.86,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.22,
                          "image": {
                           "levels": [
                            {
                             "height": 96,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -10.01
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 9.14,
                          "yaw": 11.96,
                          "image": {
                           "levels": [
                            {
                             "height": 34,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -12.45
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A0E0E9F4_8740_506B_41D1_0906F0CBC8B4); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 11.96,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.14,
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -12.45
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 9.24,
                          "yaw": 163.21,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -9.18
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A0FACA11_8740_53AD_41C1_E878685D43E0); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 163.21,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.24,
                          "image": {
                           "levels": [
                            {
                             "height": 61,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.18
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 2500,
                         "width": 5000,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "class": "Panorama",
                       "partial": false,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                         "y": 219.13,
                         "angle": 180.55,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "label": "C08",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 9.23,
                             "yaw": -168.2,
                             "image": {
                              "levels": [
                               {
                                "height": 33,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -15
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_A0DDA99D_8740_50D4_4196_D38C80B9BDC7); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -168.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.23,
                             "image": {
                              "levels": [
                               {
                                "height": 67,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -15
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 8.92,
                             "yaw": -36.3,
                             "image": {
                              "levels": [
                               {
                                "height": 34,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -21.01
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_AB62E913_8740_51AD_41C7_7CABA131A6DE); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -36.3,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.92,
                             "image": {
                              "levels": [
                               {
                                "height": 69,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -21.01
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 9.36,
                             "yaw": 30.75,
                             "image": {
                              "levels": [
                               {
                                "height": 26,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -11.5
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_AB77A921_8740_51EC_41D2_6362A9753DAF); this.mainPlayList.set('selectedIndex', 6)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 30.75,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.36,
                             "image": {
                              "levels": [
                               {
                                "height": 53,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -11.5
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "height": 2450,
                            "width": 4900,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "class": "Panorama",
                          "partial": false,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                            "y": 250.53,
                            "angle": 91.91,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "label": "C10",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 9.23,
                                "yaw": -138.38,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 33,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -9.68
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AB5FA8F6_8740_5057_41AC_234562B954A3); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -138.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.23,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -9.68
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 9.14,
                                "yaw": -1.2,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -12.42
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_ABB448DA_8740_505F_41D1_8F5A9570159B); this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -1.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.14,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -12.42
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 9.12,
                                "yaw": 78.56,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 48,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -12.93
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_AB49E8E8_8740_507B_41DB_71F9D23FF71C); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 78.56,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.12,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 96,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -12.93
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 2500,
                               "width": 5000,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "class": "Panorama",
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                               "y": 249.79,
                               "angle": -86.82,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "label": "C11",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 8.95,
                                   "yaw": 1.16,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 42,
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -17.05
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A0DFE9AC_8740_50F4_41C9_95CE22E4718F); this.mainPlayList.set('selectedIndex', 9)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 1.16,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.95,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 84,
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.05
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 8.75,
                                   "yaw": -179.89,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 44,
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.83
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A0D4E9BA_8740_50DF_41A8_DCACB6A70B94); this.mainPlayList.set('selectedIndex', 11)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.89,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.75,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 89,
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.83
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -1.2
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "class": "Panorama",
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "label": "C12",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 9.14,
                                      "yaw": 0.64,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 53,
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -12.53
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_A0F17A1F_8740_53D5_41D7_6C366B448F02); this.mainPlayList.set('selectedIndex', 10)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 0.64,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.14,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -12.53
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 8.47,
                                      "yaw": 167.51,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 53,
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -25.2
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_A0881A2D_8740_53F5_41D9_948F3F00E404); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 167.51,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.47,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -25.2
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.64,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -179.89
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "class": "Panorama",
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "label": "C13",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 8.95,
                                         "yaw": 0.65,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 36,
                                            "width": 64,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -17.08
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_A0BA7AA3_8740_50EC_41D2_3E46D46F7242); this.mainPlayList.set('selectedIndex', 13)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 0.65,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.95,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 73,
                                            "width": 129,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -17.08
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 10.14,
                                         "yaw": 176.12,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 47,
                                            "width": 74,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -18.57
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A0B1FAB2_8740_50EC_41C4_2349CCC12ECD); this.mainPlayList.set('selectedIndex', 11)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 176.12,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 10.14,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 94,
                                            "width": 148,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.57
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "label": "C14",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 9.08,
                                            "yaw": 178.92,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 42,
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -14.01
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_AB94D8B0_8740_50EB_41DF_11127BB73FEA); this.mainPlayList.set('selectedIndex', 12)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 178.92,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.08,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 84,
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.01
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 9.12,
                                            "yaw": 0.43,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 30,
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -12.99
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_AB8248A1_8740_50ED_41BD_C795685D436C); this.mainPlayList.set('selectedIndex', 14)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 0.43,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.12,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 61,
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -12.99
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "label": "C15",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 9.1,
                                               "yaw": 0.3,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 29,
                                                  "width": 65,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -13.54
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_AB6C6905_8740_51B5_41CB_09F32D6B927D); this.mainPlayList.set('selectedIndex', 13)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.3,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.1,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 59,
                                                  "width": 130,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -13.54
                                              }
                                             ]
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.3,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 0.43
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 0.43,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.3
                                       },
                                       {
                                        "distance": 1,
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": 178.92,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.65
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 0.65,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 178.92
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 167.51
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 167.51,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 176.12
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -179.89,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 0.64
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 1.16
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "class": "Panorama",
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                               "y": 316.87,
                               "angle": 0,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "label": "C17",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 9.05,
                                   "yaw": -93.19,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 34,
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -14.74
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A0E449E5_8740_5075_41D1_F467F8949968); this.mainPlayList.set('selectedIndex', 15)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -93.19,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.05,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 69,
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.74
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 9.25,
                                   "yaw": 155.68,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 52,
                                      "width": 64,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -8.65
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A0EE99D7_8740_5055_41B9_952F8DF22A68); this.mainPlayList.set('selectedIndex', 17)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 155.68,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.25,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 104,
                                      "width": 129,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.65
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 9.11,
                                   "yaw": 37.47,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 33,
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -13.25
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A0D259C9_8740_50BD_419B_F97DA98AE2F7); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 37.47,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.11,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 67,
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -13.25
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 78.56
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "class": "Panorama",
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "label": "C18",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 9.16,
                                      "yaw": 4.5,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 38,
                                         "width": 65,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -11.86
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_AFE8FB9D_8740_50D5_41DE_BB244CD979AE); this.mainPlayList.set('selectedIndex', 18)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 4.5,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.16,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 76,
                                         "width": 130,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.86
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 9.19,
                                      "yaw": -162.77,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 41,
                                         "width": 64,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -11.1
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_AFFD5BAC_8740_50FB_41E0_4579EB73AF63); this.mainPlayList.set('selectedIndex', 16)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -162.77,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.19,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 82,
                                         "width": 129,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.1
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "class": "Panorama",
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                     "y": 386.76,
                                     "angle": 0,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "label": "C19",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 9.18,
                                         "yaw": -36.03,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 53,
                                            "width": 65,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -11.37
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A019AB33_8740_51ED_41D1_40174FB4A31C); this.mainPlayList.set('selectedIndex', 22)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -36.03,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 9.18,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 106,
                                            "width": 130,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -11.37
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 9.21,
                                         "yaw": 26.17,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 34,
                                            "width": 65,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -11.26
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A02C7B42_8740_51AF_416E_BEE99D292B4A); this.mainPlayList.set('selectedIndex', 17)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 26.17,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 9.21,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 68,
                                            "width": 130,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -11.26
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 8.06,
                                         "yaw": 163.47,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 54,
                                            "width": 57,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -14.17
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_A0006B23_8740_51EC_41D8_A71CE21F92C7); this.mainPlayList.set('selectedIndex', 19)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 163.47,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.06,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 109,
                                            "width": 115,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -14.17
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                      "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                      "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                      "mapLocations": [
                                       {
                                        "x": 684.05,
                                        "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                        "y": 434.27,
                                        "angle": 147.84,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "label": "C20",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 9.22,
                                            "yaw": -179.2,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 34,
                                               "width": 65,
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -9.77
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_AFCDBB70_8740_506B_41D4_7843AEFB5E53); this.mainPlayList.set('selectedIndex', 18)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -179.2,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.22,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 69,
                                               "width": 130,
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -9.77
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -179.2,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 163.47
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 163.47,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -179.2
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "label": "C23",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 8.68,
                                            "yaw": -166.65,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 61,
                                               "width": 60,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -8.17
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A04A7AC0_8740_50AC_41BB_42B65ACE15B3); this.mainPlayList.set('selectedIndex', 15)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -166.65,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.68,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 123,
                                               "width": 121,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -8.17
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 6.47,
                                            "yaw": -6.22,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 39,
                                               "width": 45,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -10.72
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A043EACD_8740_50B4_41A7_1F40697F81D9); this.mainPlayList.set('selectedIndex', 18)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -6.22,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.47,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 79,
                                               "width": 91,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -10.72
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 8.15,
                                            "yaw": 87.5,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 62,
                                               "width": 57,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -9.88
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A055FADB_8740_505C_41D0_C77467BF143F); this.mainPlayList.set('selectedIndex', 21)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 87.5,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.15,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 124,
                                               "width": 114,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -9.88
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                           "y": 310.59,
                                           "angle": 0,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "label": "C16",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 9.22,
                                               "yaw": -172.45,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 32,
                                                  "width": 65,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -10.04
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A09CAA4A_8740_53BF_41C3_683146627235); this.mainPlayList.set('selectedIndex', 22)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -172.45,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.22,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 64,
                                                  "width": 130,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -10.04
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 9.21,
                                               "yaw": -20.33,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 26,
                                                  "width": 65,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -10.3
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A099DA59_8740_505D_41C6_4C5A1E2BD0E0); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -20.33,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.21,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 53,
                                                  "width": 130,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -10.3
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 8.93,
                                               "yaw": 101.34,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 33,
                                                  "width": 65,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -17.37
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A0857A3C_8740_53DB_4199_53854D6CB129); this.mainPlayList.set('selectedIndex', 16)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 101.34,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.93,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 66,
                                                  "width": 130,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -17.37
                                              }
                                             ]
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 101.34,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -93.19
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -172.45,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -166.65
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": -20.33,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 163.21
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -166.65,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -172.45
                                       },
                                       {
                                        "distance": 1,
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -6.22,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -36.03
                                       },
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "label": "C22",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 8.82,
                                               "yaw": -178.42,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 64,
                                                  "width": 63,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -15.23
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_A025FB52_8740_51AF_41D4_1A1DB88D6E43); this.mainPlayList.set('selectedIndex', 20)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -178.42,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.82,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 128,
                                                  "width": 127,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -15.23
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 9,
                                               "yaw": 23.25,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 55,
                                                  "width": 63,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -11.12
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A039CB62_8740_506F_41CF_70A5A3210E70); this.mainPlayList.set('selectedIndex', 22)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 23.25,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 111,
                                                  "width": 127,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -11.12
                                              }
                                             ]
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "distance": 1,
                                           "panorama": {
                                            "hfovMax": 120,
                                            "hfovMin": 60,
                                            "class": "Panorama",
                                            "partial": false,
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "label": "C21",
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "hfov": 10.65,
                                                  "yaw": -178.92,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 82,
                                                     "width": 77,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -16.66
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A06E4AEA_8740_507C_41CB_F97E11A2BD2C); this.mainPlayList.set('selectedIndex', 21)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": -178.92,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 10.65,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 165,
                                                     "width": 154,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0.png",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -16.66
                                                 }
                                                ]
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "sphere": {
                                               "levels": [
                                                {
                                                 "height": 2500,
                                                 "width": 5000,
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg",
                                                 "class": "ImageResourceLevel"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg",
                                                 "class": "ImageResourceLevel"
                                                }
                                               ],
                                               "class": "ImageResource"
                                              }
                                             }
                                            ],
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "distance": 1,
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "yaw": -178.92,
                                              "class": "AdjacentPanorama",
                                              "backwardYaw": -178.42
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "yaw": -178.42,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -178.92
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": 23.25,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 87.5
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 87.5,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 23.25
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -36.03,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -6.22
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "yaw": 26.17,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 4.5
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 4.5,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 26.17
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": -162.77,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 155.68
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": 155.68,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.77
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "yaw": -93.19,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 101.34
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 78.56,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 37.47
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -36.3
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -138.38
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 30.75,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 11.96
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "class": "Panorama",
                          "partial": false,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "map": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
                            "y": 158.55,
                            "angle": 35.54,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "label": "C09",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 9.5,
                                "yaw": 130.87,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 22,
                                   "width": 65,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.71
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AFF08BBC_8740_50DB_41E0_8951C9A257F8); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 130.87,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.5,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 44,
                                   "width": 130,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -5.71
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 2450,
                               "width": 4900,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 130.87,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -168.2
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -168.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 130.87
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 11.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 30.75
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 5.64
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -20.33
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -91.86
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -177.15
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -177.15,
                "class": "AdjacentPanorama",
                "backwardYaw": -179.79
               },
               {
                "distance": 1,
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -1.54
               }
              ],
              "vfov": 180
             },
             "yaw": -1.54,
             "class": "AdjacentPanorama",
             "backwardYaw": -1.42
            }
           ],
           "vfov": 180
          },
          "yaw": 179.91,
          "class": "AdjacentPanorama",
          "backwardYaw": -179.87
         },
         {
          "distance": 1,
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "yaw": 1.93,
          "class": "AdjacentPanorama",
          "backwardYaw": 2.66
         }
        ],
        "vfov": 180
       },
       "yaw": 2.66,
       "class": "AdjacentPanorama",
       "backwardYaw": 1.93
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "class": "AdjacentPanorama",
       "backwardYaw": 2.71
      }
     ],
     "vfov": 180
    },
    "yaw": 2.71,
    "class": "AdjacentPanorama",
    "backwardYaw": -179.81
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "preloadEnabled": false
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "maxHeight": 218,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 342,
   "playbackBarHeadShadow": true,
   "maxWidth": 342,
   "playbackBarRight": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "shadow": false,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "toolTipShadowVerticalLength": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "paddingLeft": 0,
   "transitionMode": "blending",
   "paddingTop": 0,
   "toolTipFontColor": "#606060",
   "progressHeight": 10,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipPaddingRight": 6,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "class": "ViewerArea",
   "progressBackgroundColorRatios": [
    0
   ],
   "width": 342,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "height": 218,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadBorderColor": "#000000",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarLeft": 0,
   "playbackBarProgressOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadHeight": 15,
   "borderRadius": 10,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 218,
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": 18,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal"
  },
  "class": "MapPlayer"
 },
 {
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
 {
  "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "initialPosition": {
   "yaw": -175.84,
   "class": "PanoramaCameraPosition",
   "pitch": 3.87
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "initialPosition": {
   "yaw": -175.31,
   "class": "PanoramaCameraPosition",
   "pitch": -3.25
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "initialPosition": {
   "yaw": -162.78,
   "class": "PanoramaCameraPosition",
   "pitch": 5.39
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "initialPosition": {
   "yaw": 176.32,
   "class": "PanoramaCameraPosition",
   "pitch": -2.81
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "initialPosition": {
   "yaw": -177.92,
   "class": "PanoramaCameraPosition",
   "pitch": -0.89
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "initialPosition": {
   "yaw": -179.16,
   "class": "PanoramaCameraPosition",
   "pitch": -4.17
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "initialPosition": {
   "yaw": 6.48,
   "class": "PanoramaCameraPosition",
   "pitch": 4.56
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 161.16,
   "class": "PanoramaCameraPosition",
   "pitch": 2.07
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
 {
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "initialPosition": {
   "yaw": -175.58,
   "class": "PanoramaCameraPosition",
   "pitch": 2.88
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABDB0872_8740_506F_4148_0F7620D99704, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABDB0872_8740_506F_4148_0F7620D99704",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD41873_8740_506D_41E0_1547F38F06EC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD41873_8740_506D_41E0_1547F38F06EC",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD53873_8740_506D_41D2_4E955CA49500, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD53873_8740_506D_41D2_4E955CA49500",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD5E874_8740_506B_41B6_B19A81E7556C, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD5E874_8740_506B_41B6_B19A81E7556C",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD68874_8740_506B_41C3_01501F0AFBEA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD68874_8740_506B_41C3_01501F0AFBEA",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD74875_8740_5055_41D0_AF9CE6627DE4, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD74875_8740_5055_41D0_AF9CE6627DE4",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD07875_8740_5055_41E0_C374969E8573, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD07875_8740_5055_41E0_C374969E8573",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD11876_8740_5057_41C4_C445504D7901, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD11876_8740_5057_41C4_C445504D7901",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD23876_8740_5057_41DE_EF69DC3B1ED9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD23876_8740_5057_41DE_EF69DC3B1ED9",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD2F877_8740_5055_41CF_92B089FE6C68, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD2F877_8740_5055_41CF_92B089FE6C68",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABD3B877_8740_5055_417D_C602EA3BA49A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABD3B877_8740_5055_417D_C602EA3BA49A",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEC5878_8740_505B_41D3_4EA58C41D65A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEC5878_8740_505B_41D3_4EA58C41D65A",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABED7878_8740_505B_41E0_16BDA7E49959, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABED7878_8740_505B_41E0_16BDA7E49959",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEE6879_8740_505D_41C2_7A1C818955CD, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEE6879_8740_505D_41C2_7A1C818955CD",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEF2879_8740_505D_41D0_54508003C057, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEF2879_8740_505D_41D0_54508003C057",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEFF87A_8740_505F_41A3_096AAA20A0A1, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEFF87A_8740_505F_41A3_096AAA20A0A1",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABE8887B_8740_505D_41D0_EB03B1EFFF19, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABE8887B_8740_505D_41D0_EB03B1EFFF19",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABE9787B_8740_505D_41D1_2BC92F673C6C, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABE9787B_8740_505D_41D1_2BC92F673C6C",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEA787C_8740_505B_41CD_156BD98C0E23, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEA787C_8740_505B_41CD_156BD98C0E23",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEAD87C_8740_505B_41D8_5B167A2128CA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEAD87C_8740_505B_41D8_5B167A2128CA",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABEBF87D_8740_5055_41D9_5E0A661288F1, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABEBF87D_8740_5055_41D9_5E0A661288F1",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABE4B87D_8740_5055_41CC_6CB91136752D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABE4B87D_8740_5055_41CC_6CB91136752D",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_ABE5887E_8740_5057_4191_A3240CE9455D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_ABE5887E_8740_5057_4191_A3240CE9455D",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
 {
  "id": "playList_ABDA1872_8740_506F_41C5_101E6F9BE0C8",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9289F148_8740_B1BC_41E0_1F0A6681D154",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_ABE6587E_8740_5057_41CB_1FD9CB28A2C0",
 {
  "id": "camera_AB8248A1_8740_50ED_41BD_C795685D436C",
  "initialPosition": {
   "yaw": -179.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB94D8B0_8740_50EB_41DF_11127BB73FEA",
  "initialPosition": {
   "yaw": -179.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_ABADF8BE_8740_50D7_41DA_87B026CB1AAD",
  "initialPosition": {
   "yaw": 0.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_ABA0B8CC_8740_50BB_419D_8C8FE14D2179",
  "initialPosition": {
   "yaw": 178.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_ABB448DA_8740_505F_41D1_8F5A9570159B",
  "initialPosition": {
   "yaw": -178.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB49E8E8_8740_507B_41DB_71F9D23FF71C",
  "initialPosition": {
   "yaw": -142.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB5FA8F6_8740_5057_41AC_234562B954A3",
  "initialPosition": {
   "yaw": 143.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB6C6905_8740_51B5_41CB_09F32D6B927D",
  "initialPosition": {
   "yaw": -179.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB62E913_8740_51AD_41C7_7CABA131A6DE",
  "initialPosition": {
   "yaw": 41.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AB77A921_8740_51EC_41D2_6362A9753DAF",
  "initialPosition": {
   "yaw": -168.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0DDA99D_8740_50D4_4196_D38C80B9BDC7",
  "initialPosition": {
   "yaw": -49.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0DFE9AC_8740_50F4_41C9_95CE22E4718F",
  "initialPosition": {
   "yaw": 178.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0D4E9BA_8740_50DF_41A8_DCACB6A70B94",
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0D259C9_8740_50BD_419B_F97DA98AE2F7",
  "initialPosition": {
   "yaw": -101.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0EE99D7_8740_5055_41B9_952F8DF22A68",
  "initialPosition": {
   "yaw": 17.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0E449E5_8740_5075_41D1_F467F8949968",
  "initialPosition": {
   "yaw": -78.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0E0E9F4_8740_506B_41D1_0906F0CBC8B4",
  "initialPosition": {
   "yaw": -149.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0FE7A02_8740_53AF_41C5_2C96842EBDDB",
  "initialPosition": {
   "yaw": -174.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0FACA11_8740_53AD_41C1_E878685D43E0",
  "initialPosition": {
   "yaw": 159.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0F17A1F_8740_53D5_41D7_6C366B448F02",
  "initialPosition": {
   "yaw": 0.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0881A2D_8740_53F5_41D9_948F3F00E404",
  "initialPosition": {
   "yaw": -3.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0857A3C_8740_53DB_4199_53854D6CB129",
  "initialPosition": {
   "yaw": 86.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A09CAA4A_8740_53BF_41C3_683146627235",
  "initialPosition": {
   "yaw": 13.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A099DA59_8740_505D_41C6_4C5A1E2BD0E0",
  "initialPosition": {
   "yaw": -16.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A090FA68_8740_507B_41B8_2A652692F132",
  "initialPosition": {
   "yaw": -178.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0AE5A77_8740_5055_41D4_750975B75DBC",
  "initialPosition": {
   "yaw": -177.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0A58A86_8740_50B7_41BB_D7C56AE61CD9",
  "initialPosition": {
   "yaw": 88.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0BC9A95_8740_50D5_41B1_8534FEB9692A",
  "initialPosition": {
   "yaw": 2.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0BA7AA3_8740_50EC_41D2_3E46D46F7242",
  "initialPosition": {
   "yaw": -1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0B1FAB2_8740_50EC_41C4_2349CCC12ECD",
  "initialPosition": {
   "yaw": -12.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A04A7AC0_8740_50AC_41BB_42B65ACE15B3",
  "initialPosition": {
   "yaw": 7.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A043EACD_8740_50B4_41A7_1F40697F81D9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A055FADB_8740_505C_41D0_C77467BF143F",
  "initialPosition": {
   "yaw": -156.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A06E4AEA_8740_507C_41CB_F97E11A2BD2C",
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0615AF8_8740_505C_41D0_6B4BDBE5AC44",
  "initialPosition": {
   "yaw": 0.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0744B07_8740_51B4_41C7_E719BCD48682",
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A00DAB15_8740_51D4_41D5_F1CC95B20136",
  "initialPosition": {
   "yaw": -177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A0006B23_8740_51EC_41D8_A71CE21F92C7",
  "initialPosition": {
   "yaw": 0.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A019AB33_8740_51ED_41D1_40174FB4A31C",
  "initialPosition": {
   "yaw": 173.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A02C7B42_8740_51AF_416E_BEE99D292B4A",
  "initialPosition": {
   "yaw": -175.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A025FB52_8740_51AF_41D4_1A1DB88D6E43",
  "initialPosition": {
   "yaw": 1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_A039CB62_8740_506F_41CF_70A5A3210E70",
  "initialPosition": {
   "yaw": -92.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AFCDBB70_8740_506B_41D4_7843AEFB5E53",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AFC20B7F_8740_5055_41DF_895DA52986E0",
  "initialPosition": {
   "yaw": -0.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AFD52B8E_8740_50B7_41A9_6870B74DE00C",
  "initialPosition": {
   "yaw": 178.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AFE8FB9D_8740_50D5_41DE_BB244CD979AE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AFFD5BAC_8740_50FB_41E0_4579EB73AF63",
  "initialPosition": {
   "yaw": -24.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "id": "camera_AFF08BBC_8740_50DB_41E0_8951C9A257F8",
  "initialPosition": {
   "yaw": 11.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 }
], "children": [
 {
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "minWidth": 100,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "shadow": false,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "transitionMode": "blending",
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "progressHeight": 10,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "borderRadius": 0,
  "width": "100%",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "bottom": "0%",
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "class": "Container",
  "height": 137.15,
  "width": "98.378%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "1.95%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 408,
    "height": 90,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "width": 408,
      "height": 90,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": 90,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 9,
        "contentOpaque": false,
        "top": "-1.37%",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "always",
        "overflow": "visible",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 63,
              "height": 63,
              "maxHeight": 746,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "scaleMode": "fit_inside",
              "maxWidth": 747,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "scaleMode": "fit_inside",
              "maxWidth": 63,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "scaleMode": "fit_inside",
              "maxWidth": 63,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "backgroundOpacity": 0,
              "paddingLeft": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ]
           }
          ]
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": 42,
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "IconButton",
        "mode": "push",
        "width": 35,
        "height": 35,
        "maxHeight": 84,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "maxWidth": 84,
        "shadow": false,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "paddingTop": 0
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_71C7C7ED_7FD2_E9D7_4170_C42954483082",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "top",
        "paddingRight": 0,
        "class": "Container",
        "width": 27,
        "height": 27,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "left",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "absolute",
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Image",
          "width": 27,
          "height": 27,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "scaleMode": "fit_inside",
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "right": "-1.96%"
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 509,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "scaleMode": "fit_inside",
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "minHeight": 1,
          "visible": false,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "left": "0%"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "top",
  "paddingRight": 0,
  "class": "Container",
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 3,
  "borderRadius": 0,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 38.1,
    "height": "99.332%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "top": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": 14,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "0%"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "right": "-2.13%"
     }
    ]
   },
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 1638,
    "height": 335,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 9,
    "contentOpaque": false,
    "top": "0.06%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "maxWidth": 108,
      "top": "0.1%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "1.17%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "class": "Container",
  "paddingRight": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingLeft": 0,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Image",
    "height": "100%",
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "borderRadius": 0,
    "scaleMode": "fit_outside",
    "top": 0,
    "click": "eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "left": -0.04
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": "88.587%",
    "width": "60.736%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 0,
    "contentOpaque": false,
    "top": "2.62%",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "18.69%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": "10.152%",
      "width": "92.083%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "73.333%",
        "maxHeight": 61,
        "width": "79.193%",
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "minWidth": 1,
        "maxWidth": 500,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": "1.764%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "7.327%",
      "width": "99.94%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "86.667%",
        "width": "99.901%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.55%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 10,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "96%",
            "maxHeight": 108,
            "width": "95.833%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "minWidth": 1,
            "maxWidth": 108,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "backgroundOpacity": 0,
            "paddingLeft": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.549%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 10,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "96%",
            "maxHeight": 108,
            "width": "95.83%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "minWidth": 1,
            "maxWidth": 108,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "backgroundOpacity": 0,
            "paddingLeft": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "width": "46.753%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 10,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "70.59%",
            "maxHeight": 40,
            "width": "99.138%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "minWidth": 1,
            "maxWidth": 275,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "backgroundOpacity": 0,
            "paddingLeft": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "1.227%",
      "width": "99.858%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "4.417%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "13.477%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "97.14%",
          "maxHeight": 45,
          "width": "86.03%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "14.091%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "97.183%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "minWidth": 1,
          "maxWidth": 258,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "39.063%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "97.14%",
          "maxHeight": 45,
          "width": "99.491%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "minWidth": 1,
          "maxWidth": 408,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "15.139%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "width": 30,
          "height": "100%",
          "maxHeight": 300,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "minWidth": 1,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "7.276%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "97.67%",
        "width": "83.008%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "64.407%",
          "maxHeight": 49,
          "width": "87.799%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "minWidth": 1,
          "maxWidth": 734,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "2.454%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "backgroundOpacity": 0,
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "6.937%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "62.5%",
        "width": "13.505%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "97.14%",
          "maxHeight": 45,
          "width": "86.03%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "12.891%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "83.33%",
          "maxHeight": 222,
          "width": "85.42%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "minWidth": 1,
          "maxWidth": 222,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "67.857%",
        "width": "54.618%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "84.211%",
          "maxHeight": 41,
          "width": "83.455%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "minWidth": 1,
          "maxWidth": 459,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "5.834%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "33.984%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "70.833%",
          "maxHeight": 44,
          "width": "86.842%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "minWidth": 1,
          "maxWidth": 297,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "backgroundOpacity": 0,
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "top": "0%",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 31,
      "height": 29,
      "maxHeight": 72,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "3.02%"
     }
    ]
   }
  ]
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "contentOpaque": false,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_ABDA1872_8740_506F_41C5_101E6F9BE0C8.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)"
})