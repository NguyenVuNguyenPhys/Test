TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
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
        "hfov": 9.2,
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.74
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_8CA084FF_9741_B9C9_41C5_9CA656701C2E); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
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
        "yaw": 2.71,
        "hfov": 9.2,
        "class": "HotspotPanoramaOverlayImage",
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
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "label": "C01",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "C02",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "C03",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "C04",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "C05",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "C06",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "C07",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "C08",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "C09",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "C10",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "C11",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "C12",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "label": "C13",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "label": "C14",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "label": "C15",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "label": "C16",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "label": "C17",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "label": "C18",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "label": "C19",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    },
    {
     "label": "C20",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 19)"
    },
    {
     "label": "C21",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 20)"
    },
    {
     "label": "C22",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 21)"
    },
    {
     "label": "C23",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 22)"
    }
   ],
   "fontColor": "#FFFFFF",
   "class": "Menu"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "mapLocations": [
   {
    "x": 310.47,
    "class": "PanoramaMapLocation",
    "y": 133.23,
    "angle": 115.94,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#97004E",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "width": 1021,
     "id": "map_93241DD6_8F20_FA74_41DB_8AAB37E27056",
     "height": 652,
     "minimumZoomFactor": 1,
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_t.png",
     "fieldOfViewOverlayRadiusScale": 0.05,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "image": {
        "x": 299.01,
        "y": 121.45,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_46.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21.5,
        "height": 21.92,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93242DD6_8F20_FA74_41A0_90A8A00EB5AD",
       "map": {
        "offsetY": 0,
        "x": 299.01,
        "width": 21.5,
        "y": 121.45,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_46_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 343.76,
        "y": 140.93,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_47.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93243DD6_8F20_FA74_41D3_3805B1E32158",
       "map": {
        "offsetY": 0,
        "x": 343.76,
        "width": 21,
        "y": 140.93,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_47_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 390.86,
        "y": 159.94,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_48.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93244DD6_8F20_FA74_41DA_395A2A6442E4",
       "map": {
        "offsetY": 0,
        "x": 390.86,
        "width": 21,
        "y": 159.94,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_48_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 441.55,
        "y": 182.83,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_49.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93245DD6_8F20_FA74_41D9_621186105B0D",
       "map": {
        "offsetY": 0,
        "x": 441.55,
        "width": 21,
        "y": 182.83,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_49_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 501.54,
        "y": 202.17,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_50.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93246DD7_8F20_FA74_41E1_C95A2AEB02BA",
       "map": {
        "offsetY": 0,
        "x": 501.54,
        "width": 21,
        "y": 202.17,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_50_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 535.02,
        "y": 216.34,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_51.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B8DD7_8F20_FA74_41D6_55CAA04A3A1D",
       "map": {
        "offsetY": 0,
        "x": 535.02,
        "width": 21,
        "y": 216.34,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_51_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 599.62,
        "y": 246.89,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_52.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B9DD7_8F20_FA74_41CA_EC95426EBED7",
       "map": {
        "offsetY": 0,
        "x": 599.62,
        "width": 21,
        "y": 246.89,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_52_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 624.09,
        "y": 207.08,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_53.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BADD7_8F20_FA74_41D9_DCAB6D374E1F",
       "map": {
        "offsetY": 0,
        "x": 624.09,
        "width": 21,
        "y": 207.08,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_53_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 622.95,
        "y": 146.32,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_54.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BBDD7_8F20_FA74_41DF_C75AE86B91CF",
       "map": {
        "offsetY": 0,
        "x": 622.95,
        "width": 21,
        "y": 146.32,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_54_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 674.15,
        "y": 238.61,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_55.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BCDD7_8F20_FA74_41D7_C2983E468372",
       "map": {
        "offsetY": 0,
        "x": 674.15,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_55_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 735.61,
        "y": 237.81,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_56.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BDDD7_8F20_FA74_41B4_36BE23D1AC52",
       "map": {
        "offsetY": 0,
        "x": 735.61,
        "width": 21,
        "y": 237.81,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_56_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 800.29,
        "y": 238.61,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_57.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BEDD7_8F20_FA74_41D5_3F45B85F8194",
       "map": {
        "offsetY": 0,
        "x": 800.29,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_57_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 845.89,
        "y": 238.61,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_58.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932BFDD7_8F20_FA74_41A8_B7BE685C85DA",
       "map": {
        "offsetY": 0,
        "x": 845.89,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_58_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 886.76,
        "y": 241.36,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_59.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B0DD7_8F20_FA74_41E1_BFED048A95DE",
       "map": {
        "offsetY": 0,
        "x": 886.76,
        "width": 21,
        "y": 241.36,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_59_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 935.07,
        "y": 239.97,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_60.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B1DD7_8F20_FA74_41E0_259B633EA7AD",
       "map": {
        "offsetY": 0,
        "x": 935.07,
        "width": 21,
        "y": 239.97,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_60_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 616.43,
        "y": 298.53,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_61.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B2DD7_8F20_FA74_41DB_68301F1CE1D2",
       "map": {
        "offsetY": 0,
        "x": 616.43,
        "width": 21,
        "y": 298.53,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_61_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 664.19,
        "y": 304.61,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_62.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B3DD7_8F20_FA74_41BF_9467D3F42AA3",
       "map": {
        "offsetY": 0,
        "x": 664.19,
        "width": 21,
        "y": 304.61,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_62_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 662.87,
        "y": 332.15,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_63.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B4DD7_8F20_FA74_41DC_2B1388D91A11",
       "map": {
        "offsetY": 0,
        "x": 662.87,
        "width": 21,
        "y": 332.15,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_63_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 658.55,
        "y": 374.45,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_64.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B5DD7_8F20_FA74_41C0_8FAF64CEE4DC",
       "map": {
        "offsetY": 0,
        "x": 658.55,
        "width": 21,
        "y": 374.45,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_64_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 672.84,
        "y": 422.91,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_65.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932B7DD7_8F20_FA74_41D8_11EC4EFF06E3",
       "map": {
        "offsetY": 0,
        "x": 672.84,
        "width": 21,
        "y": 422.91,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_65_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 624.78,
        "y": 330.58,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_66.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_932A8DD7_8F20_FA74_41C6_46B1CEDAEA11",
       "map": {
        "offsetY": 0,
        "x": 624.78,
        "width": 21,
        "y": 330.58,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_66_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 585.56,
        "y": 343.8,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_67.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93240DD8_8F20_FA7C_41C8_B4942145FC95",
       "map": {
        "offsetY": 0,
        "x": 585.56,
        "width": 21,
        "y": 343.8,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_67_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 558.42,
        "y": 359.69,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_68.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage"
       },
       "id": "overlay_93241DD8_8F20_FA7C_41CB_6F37E940F6B3",
       "map": {
        "offsetY": 0,
        "x": 558.42,
        "width": 21,
        "y": 359.69,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_93241DD6_8F20_FA74_41DB_8AAB37E27056_HS_68_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "label": "FloorPlan",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1,
     "class": "Map"
    }
   }
  ],
  "hfovMin": 60,
  "label": "C01",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
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
           "hfov": 9.06,
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -14.65
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_8EAC263A_9741_B84B_41D7_A357BFB75E2C); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
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
           "yaw": 2.66,
           "hfov": 9.06,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.65
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
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
           "hfov": 8.74,
           "yaw": -179.81,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.94
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_8EA5362C_9741_B84F_41B9_75B05B88DE75); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
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
           "yaw": -179.81,
           "hfov": 8.74,
           "class": "HotspotPanoramaOverlayImage",
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
     "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
      }
     ],
     "hfovMin": 60,
     "label": "C02",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "class": "AdjacentPanorama",
       "backwardYaw": 2.71,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 8.78,
              "yaw": 179.91,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.32
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_8E7C0569_9741_B8C9_41C3_CBEA9A9B6AE8); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
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
              "yaw": 179.91,
              "hfov": 8.78,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -20.32
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 8.98,
              "yaw": 1.93,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -17.36
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_8E702559_9741_B8C9_41B3_280DA230AB04); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
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
              "yaw": 1.93,
              "hfov": 8.98,
              "class": "HotspotPanoramaOverlayImage",
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
        "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
         }
        ],
        "hfovMin": 60,
        "label": "C03",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "yaw": 1.93,
          "class": "AdjacentPanorama",
          "backwardYaw": 2.66,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 9.04,
                 "yaw": -179.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -14.96
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_8C8C44D2_9741_B9DB_41DC_6DA6AA479DE5); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
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
                 "yaw": -179.87,
                 "hfov": 9.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -14.96
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 8.5,
                 "yaw": -1.54,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.8
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_8C85F4C4_9741_B83F_41E1_3BD4E5FE0020); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
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
                 "yaw": -1.54,
                 "hfov": 8.5,
                 "class": "HotspotPanoramaOverlayImage",
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
           "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
            }
           ],
           "hfovMin": 60,
           "label": "C04",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 9.01,
                    "yaw": -177.15,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.71
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_8DBC874B_9741_B8C9_41B0_EF2DE55CFCFE); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
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
                    "yaw": -177.15,
                    "hfov": 9.01,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -15.71
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 9.22,
                    "yaw": -1.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -9.99
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_8DA2575A_9741_B8CB_41DE_F471C9ED4EC2); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
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
                    "yaw": -1.42,
                    "hfov": 9.22,
                    "class": "HotspotPanoramaOverlayImage",
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
              "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
               }
              ],
              "hfovMin": 60,
              "label": "C05",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 9.08,
                       "yaw": -179.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -14.13
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_8D3506BC_9741_B84F_41C6_B90EBFF55745); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
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
                       "yaw": -179.79,
                       "hfov": 9.08,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -14.13
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 9.22,
                       "yaw": 5.64,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -9.93
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_8D3AC6CA_9741_B9CB_41D9_A5CDE6E890E0); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
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
                       "yaw": 5.64,
                       "hfov": 9.22,
                       "class": "HotspotPanoramaOverlayImage",
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
                 "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                  }
                 ],
                 "hfovMin": 60,
                 "label": "C06",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -177.15,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 9.22,
                          "yaw": -91.86,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -10.01
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_8ED7F649_9741_B8C9_41C8_3526ABA1ABAA); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
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
                          "yaw": -91.86,
                          "hfov": 9.22,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -10.01
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 9.14,
                          "yaw": 11.96,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -12.45
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_8EDE4657_9741_B8D9_41D1_444EBAB833E0); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
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
                          "yaw": 11.96,
                          "hfov": 9.14,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -12.45
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 9.24,
                          "yaw": 163.21,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -9.18
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8EC62666_9741_B8FB_41DF_211F824DEA1C); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
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
                          "yaw": 163.21,
                          "hfov": 9.24,
                          "class": "HotspotPanoramaOverlayImage",
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
                    "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "class": "PanoramaMapLocation",
                      "y": 258.07,
                      "angle": 25.28,
                      "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                     }
                    ],
                    "hfovMin": 60,
                    "label": "C07",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 5.64,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 9.23,
                             "yaw": -168.2,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -15
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_8E9635B5_9741_B859_41DE_0EC7FEF2349E); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
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
                             "yaw": -168.2,
                             "hfov": 9.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -15
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 8.92,
                             "yaw": -36.3,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -21.01
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_8E6845A6_9741_B87B_41E1_558BBAFB47E5); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
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
                             "yaw": -36.3,
                             "hfov": 8.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -21.01
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 9.36,
                             "yaw": 30.75,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -11.5
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_8E6DF597_9741_B859_41D8_AA9271DD586A); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
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
                             "yaw": 30.75,
                             "hfov": 9.36,
                             "class": "HotspotPanoramaOverlayImage",
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
                       "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "class": "PanoramaMapLocation",
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                        }
                       ],
                       "hfovMin": 60,
                       "label": "C08",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 30.75,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 11.96,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 9.23,
                                "yaw": -138.38,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -9.68
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_8E9BD5D2_9741_BBDB_41CF_3CAA92CCC885); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
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
                                "yaw": -138.38,
                                "hfov": 9.23,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -9.68
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 9.14,
                                "yaw": -1.2,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -12.42
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_8E9DD5C4_9741_B83F_41D8_30F93ED21BC1); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
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
                                "yaw": -1.2,
                                "hfov": 9.14,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -12.42
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 9.12,
                                "yaw": 78.56,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -12.93
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_8E8755E1_9741_BBF9_41DD_9C3C672FF083); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
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
                                "yaw": 78.56,
                                "hfov": 9.12,
                                "class": "HotspotPanoramaOverlayImage",
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
                          "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "class": "PanoramaMapLocation",
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C10",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 8.95,
                                   "yaw": 1.16,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -17.05
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_8E782579_9741_B8C9_41D3_BE9348C1755E); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
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
                                   "yaw": 1.16,
                                   "hfov": 8.95,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -17.05
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 8.75,
                                   "yaw": -179.89,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.83
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_8E665588_9741_B837_41D3_FA0841D81306); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
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
                                   "yaw": -179.89,
                                   "hfov": 8.75,
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "class": "PanoramaMapLocation",
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C11",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -1.2,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
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
                                      "hfov": 9.14,
                                      "yaw": 0.64,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -12.53
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_8E8D35F0_9741_BBD7_41B6_D91F1C978762); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
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
                                      "yaw": 0.64,
                                      "hfov": 9.14,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -12.53
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
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
                                      "hfov": 8.47,
                                      "yaw": 167.51,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -25.2
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8E8905FF_9741_BBC9_41D8_052D1CA029DE); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
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
                                      "yaw": 167.51,
                                      "hfov": 8.47,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "class": "PanoramaMapLocation",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C12",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.64,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -179.89,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 36,
                                            "width": 65,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 8.95,
                                         "yaw": 0.65,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -17.08
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_8D70B704_9741_B83F_41E1_0A846D0A8387); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 73,
                                            "width": 130,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": 0.65,
                                         "hfov": 8.95,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -17.08
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
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
                                         "hfov": 10.14,
                                         "yaw": 176.12,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -18.57
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_8D664712_9741_B85B_416F_AB9D7503EDFC); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
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
                                         "yaw": 176.12,
                                         "hfov": 10.14,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                   "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C13",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 9.08,
                                            "yaw": 178.92,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -14.01
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8C9204B5_9741_B859_41D4_A982BC71ED99); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": 178.92,
                                            "hfov": 9.08,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -14.01
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 9.12,
                                            "yaw": 0.43,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -12.99
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_8C6B74A7_9741_B879_41DC_9CB806C326E9); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": 0.43,
                                            "hfov": 9.12,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "class": "PanoramaMapLocation",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 9.1,
                                               "yaw": 0.3,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -13.54
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_8CA8850F_9741_B849_4114_81A3EDD43100); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": 0.3,
                                               "hfov": 9.1,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "class": "PanoramaMapLocation",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C15",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.3,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 0.43,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 0.43,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.3,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": 178.92,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.65,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 0.65,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 178.92,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 167.51,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 167.51,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 176.12,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": -179.89,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 0.64,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 1.16,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -36.3,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 9.05,
                                   "yaw": -93.19,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -14.74
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8DFB57D0_9741_A7D7_41E1_BCF11515F2A5); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
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
                                   "yaw": -93.19,
                                   "hfov": 9.05,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -14.74
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 9.25,
                                   "yaw": 155.68,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -8.65
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_8DC6B794_9741_B85F_41D2_5D6653DC63CF); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
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
                                   "yaw": 155.68,
                                   "hfov": 9.25,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -8.65
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 9.11,
                                   "yaw": 37.47,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -13.25
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_8DF4F7B2_9741_B85B_41D3_5FCA3593C194); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
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
                                   "yaw": 37.47,
                                   "hfov": 9.11,
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "class": "PanoramaMapLocation",
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C17",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
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
                                      "hfov": 9.16,
                                      "yaw": 4.5,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -11.86
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_8ECB3674_9741_B8DF_41B0_0A8940E65FC0); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
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
                                      "yaw": 4.5,
                                      "hfov": 9.16,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -11.86
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 41,
                                         "width": 65,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 9.19,
                                      "yaw": -162.77,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -11.1
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_8EF9D682_9741_B83B_41D6_B8F554C6948A); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 82,
                                         "width": 130,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -162.77,
                                      "hfov": 9.19,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "class": "PanoramaMapLocation",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C18",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
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
                                         "hfov": 9.18,
                                         "yaw": -36.03,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -11.37
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8D5FB6E6_9741_B9F9_41DB_D1AF0901AF00); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
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
                                         "yaw": -36.03,
                                         "hfov": 9.18,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -11.37
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
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
                                         "hfov": 9.21,
                                         "yaw": 26.17,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -11.26
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_8D2E36D9_9741_B9C9_41DB_635FBD7C6FBF); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
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
                                         "yaw": 26.17,
                                         "hfov": 9.21,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -11.26
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
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
                                         "hfov": 8.06,
                                         "yaw": 163.47,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -14.17
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_8D4D36F5_9741_B9D9_41DA_32314B61CA89); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
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
                                         "yaw": 163.47,
                                         "hfov": 8.06,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                   "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "class": "PanoramaMapLocation",
                                     "y": 386.76,
                                     "angle": 0,
                                     "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C19",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "yaw": 26.17,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 4.5,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 8.68,
                                            "yaw": -166.65,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -8.17
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8D89A73D_9741_B849_41CB_D5A54A0319B3); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": -166.65,
                                            "hfov": 8.68,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -8.17
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 6.47,
                                            "yaw": -6.22,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -10.72
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_8D95471F_9741_B849_41DE_F0EB55BEEEC1); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": -6.22,
                                            "hfov": 6.47,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -10.72
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 8.15,
                                            "yaw": 87.5,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -9.88
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_8D98172E_9741_B84B_41D9_D8EC3892E0BA); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": 87.5,
                                            "hfov": 8.15,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "class": "PanoramaMapLocation",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C23",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -6.22,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -36.03,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 8.82,
                                               "yaw": -178.42,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -15.23
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_8CBE54F0_9741_B9D7_41DD_1753403C1700); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": -178.42,
                                               "hfov": 8.82,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -15.23
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 9,
                                               "yaw": 23.25,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -11.12
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8CB414E1_9741_B9F9_41C5_37B09D58B86B); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": 23.25,
                                               "hfov": 9,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "class": "PanoramaMapLocation",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C22",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": 23.25,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 87.5,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": {
                                            "hfovMax": 120,
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
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
                                                  "hfov": 10.65,
                                                  "yaw": -178.92,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -16.66
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_8EBF961D_9741_B849_41E2_C1832B5EC257); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
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
                                                  "yaw": -178.92,
                                                  "hfov": 10.65,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                            "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "class": "PanoramaMapLocation",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "label": "C21",
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "yaw": -178.92,
                                              "class": "AdjacentPanorama",
                                              "backwardYaw": -178.42,
                                              "distance": 1
                                             }
                                            ],
                                            "class": "Panorama",
                                            "vfov": 180
                                           },
                                           "yaw": -178.42,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -178.92,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 87.5,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 23.25,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 9.22,
                                               "yaw": -172.45,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -10.04
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8D13D69E_9741_B84B_41E0_5E1F7AE809B9); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": -172.45,
                                               "hfov": 9.22,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -10.04
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 9.21,
                                               "yaw": -20.33,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -10.3
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_8EEC4690_9741_B857_41DE_86A1A33BF5D6); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": -20.33,
                                               "hfov": 9.21,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -10.3
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
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
                                               "hfov": 8.93,
                                               "yaw": 101.34,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -17.37
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_8D01A6AD_9741_B849_41D3_C3AE02D33E1A); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
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
                                               "yaw": 101.34,
                                               "hfov": 8.93,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "class": "PanoramaMapLocation",
                                           "y": 310.59,
                                           "angle": 0,
                                           "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C16",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": -20.33,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 163.21,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -172.45,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -166.65,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 101.34,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -93.19,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -166.65,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -172.45,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": -36.03,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -6.22,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
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
                                            "hfov": 9.22,
                                            "yaw": -179.2,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -9.77
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_8DD35776_9741_B8DB_41C8_267F386EC3D7); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
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
                                            "yaw": -179.2,
                                            "hfov": 9.22,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                      "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                      "mapLocations": [
                                       {
                                        "x": 684.05,
                                        "class": "PanoramaMapLocation",
                                        "y": 434.27,
                                        "angle": 147.84,
                                        "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C20",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -179.2,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 163.47,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 163.47,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -179.2,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 4.5,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 26.17,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": -162.77,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 155.68,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 155.68,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.77,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 78.56,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "yaw": -93.19,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 101.34,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 78.56,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 37.47,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -138.38,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 9.5,
                                "yaw": 130.87,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.71
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_8EB6C60E_9741_B84B_419A_F4772F93208E); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
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
                                "yaw": 130.87,
                                "hfov": 9.5,
                                "class": "HotspotPanoramaOverlayImage",
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
                          "cardboardMenu": "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "class": "PanoramaMapLocation",
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C09",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 130.87,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -168.2,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -168.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 130.87,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": 11.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 30.75,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -20.33,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -91.86,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -177.15,
                "class": "AdjacentPanorama",
                "backwardYaw": -179.79,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -1.54,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -1.54,
             "class": "AdjacentPanorama",
             "backwardYaw": -1.42,
             "distance": 1
            },
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "class": "AdjacentPanorama",
             "backwardYaw": 179.91,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 179.91,
          "class": "AdjacentPanorama",
          "backwardYaw": -179.87,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 2.66,
       "class": "AdjacentPanorama",
       "backwardYaw": 1.93,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 2.71,
    "class": "AdjacentPanorama",
    "backwardYaw": -179.81,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressBackgroundOpacity": 1,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "shadow": false,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 682,
   "height": 436,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 10,
   "toolTipFontSize": 12,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadow": true,
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "paddingLeft": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "minWidth": 342,
   "minHeight": 218,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": 18,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  }
 },
 {
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "initialPosition": {
   "yaw": 161.16,
   "class": "PanoramaCameraPosition",
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10,
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C590456_9741_B8DB_41D8_11319266BBA9",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C590456_9741_B8DB_41D8_11319266BBA9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C585457_9741_B8D9_41C6_F5A0696FA8A0",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C585457_9741_B8D9_41C6_F5A0696FA8A0, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C5BC45D_9741_B8C9_41D0_5FC13E222497",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C5BC45D_9741_B8C9_41D0_5FC13E222497, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C5B345D_9741_B8C9_41DD_53E7B576A354",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C5B345D_9741_B8C9_41DD_53E7B576A354, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C5A945E_9741_B8CB_41D4_357060C4B4DA",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C5A945E_9741_B8CB_41D4_357060C4B4DA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C5A045E_9741_B8CB_41DC_1544FD478071",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C5A045E_9741_B8CB_41DC_1544FD478071, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C45745F_9741_B8C9_41C4_33EF55D663A4",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C45745F_9741_B8C9_41C4_33EF55D663A4, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C44E45F_9741_B8C9_41AF_048B98A6EBA2",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C44E45F_9741_B8C9_41AF_048B98A6EBA2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C445465_9741_B8F9_41E1_B500E650A9D1",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C445465_9741_B8F9_41E1_B500E650A9D1, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C47A466_9741_B8FB_41E1_C6AA7EEFC555",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C47A466_9741_B8FB_41E1_C6AA7EEFC555, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C471466_9741_B8FB_41C9_B1599EA40EC8",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C471466_9741_B8FB_41C9_B1599EA40EC8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C467467_9741_B8F9_41BF_213CA052D5B6",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C467467_9741_B8F9_41BF_213CA052D5B6, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C41F467_9741_B8F9_41C8_3B246CEB4CD5",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C41F467_9741_B8F9_41C8_3B246CEB4CD5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C414468_9741_B8F7_41C6_379B0023304B",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C414468_9741_B8F7_41C6_379B0023304B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C40F46E_9741_B8CB_41DA_7C7B38F64F5E",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C40F46E_9741_B8CB_41DA_7C7B38F64F5E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C40446E_9741_B8CB_41E2_7AF75F556E33",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C40446E_9741_B8CB_41E2_7AF75F556E33, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C43646F_9741_B8C9_41E0_61D33742E890",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C43646F_9741_B8C9_41E0_61D33742E890, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C42C46F_9741_B8C9_41C4_1891BDF5B5CA",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C42C46F_9741_B8C9_41C4_1891BDF5B5CA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C4DE470_9741_B8D7_41C0_DEC0A887CC77",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C4DE470_9741_B8D7_41C0_DEC0A887CC77, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C4D3470_9741_B8D7_41B8_6CF883610D51",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C4D3470_9741_B8D7_41B8_6CF883610D51, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C4CA476_9741_B8DB_41DB_8D28B240E20B",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C4CA476_9741_B8DB_41DB_8D28B240E20B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C4C0477_9741_B8D9_41C6_83FD4FDC9210",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C4C0477_9741_B8D9_41C6_83FD4FDC9210, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_8C4F4477_9741_B8D9_41E0_4E12BCFF62A6",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8C4F4477_9741_B8D9_41E0_4E12BCFF62A6, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056",
 {
  "id": "playList_8C5E0456_9741_B8DB_41DB_F842CAC32CB3",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "class": "MapPlayListItem",
    "media": "this.map_93241DD6_8F20_FA74_41DB_8AAB37E27056"
   }
  ]
 },
 "this.Menu_8C4C0478_9741_B8D7_41DC_F2AAE90F107E",
 {
  "id": "camera_8C6B74A7_9741_B879_41DC_9CB806C326E9",
  "initialPosition": {
   "yaw": -179.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8C9204B5_9741_B859_41D4_A982BC71ED99",
  "initialPosition": {
   "yaw": -179.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8C85F4C4_9741_B83F_41E1_3BD4E5FE0020",
  "initialPosition": {
   "yaw": 178.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8C8C44D2_9741_B9DB_41DC_6DA6AA479DE5",
  "initialPosition": {
   "yaw": -0.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CB414E1_9741_B9F9_41C5_37B09D58B86B",
  "initialPosition": {
   "yaw": -92.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CBE54F0_9741_B9D7_41DD_1753403C1700",
  "initialPosition": {
   "yaw": 1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CA084FF_9741_B9C9_41C5_9CA656701C2E",
  "initialPosition": {
   "yaw": 0.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CA8850F_9741_B849_4114_81A3EDD43100",
  "initialPosition": {
   "yaw": -179.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E702559_9741_B8C9_41B3_280DA230AB04",
  "initialPosition": {
   "yaw": -177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E7C0569_9741_B8C9_41C3_CBEA9A9B6AE8",
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E782579_9741_B8C9_41D3_BE9348C1755E",
  "initialPosition": {
   "yaw": 178.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E665588_9741_B837_41D3_FA0841D81306",
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E6DF597_9741_B859_41D8_AA9271DD586A",
  "initialPosition": {
   "yaw": -168.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E6845A6_9741_B87B_41E1_558BBAFB47E5",
  "initialPosition": {
   "yaw": 41.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E9635B5_9741_B859_41DE_0EC7FEF2349E",
  "initialPosition": {
   "yaw": -49.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E9DD5C4_9741_B83F_41D8_30F93ED21BC1",
  "initialPosition": {
   "yaw": -178.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E9BD5D2_9741_BBDB_41CF_3CAA92CCC885",
  "initialPosition": {
   "yaw": 143.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E8755E1_9741_BBF9_41DD_9C3C672FF083",
  "initialPosition": {
   "yaw": -142.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E8D35F0_9741_BBD7_41B6_D91F1C978762",
  "initialPosition": {
   "yaw": 0.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E8905FF_9741_BBC9_41D8_052D1CA029DE",
  "initialPosition": {
   "yaw": -3.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EB6C60E_9741_B84B_419A_F4772F93208E",
  "initialPosition": {
   "yaw": 11.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EBF961D_9741_B849_41E2_C1832B5EC257",
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EA5362C_9741_B84F_41B9_75B05B88DE75",
  "initialPosition": {
   "yaw": -177.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EAC263A_9741_B84B_41D7_A357BFB75E2C",
  "initialPosition": {
   "yaw": -178.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8ED7F649_9741_B8C9_41C8_3526ABA1ABAA",
  "initialPosition": {
   "yaw": -174.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EDE4657_9741_B8D9_41D1_444EBAB833E0",
  "initialPosition": {
   "yaw": -149.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EC62666_9741_B8FB_41DF_211F824DEA1C",
  "initialPosition": {
   "yaw": 159.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8ECB3674_9741_B8DF_41B0_0A8940E65FC0",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EF9D682_9741_B83B_41D6_B8F554C6948A",
  "initialPosition": {
   "yaw": -24.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EEC4690_9741_B857_41DE_86A1A33BF5D6",
  "initialPosition": {
   "yaw": -16.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D13D69E_9741_B84B_41E0_5E1F7AE809B9",
  "initialPosition": {
   "yaw": 13.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D01A6AD_9741_B849_41D3_C3AE02D33E1A",
  "initialPosition": {
   "yaw": 86.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D3506BC_9741_B84F_41C6_B90EBFF55745",
  "initialPosition": {
   "yaw": 2.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D3AC6CA_9741_B9CB_41D9_A5CDE6E890E0",
  "initialPosition": {
   "yaw": 88.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D2E36D9_9741_B9C9_41DB_635FBD7C6FBF",
  "initialPosition": {
   "yaw": -175.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D5FB6E6_9741_B9F9_41DB_D1AF0901AF00",
  "initialPosition": {
   "yaw": 173.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D4D36F5_9741_B9D9_41DA_32314B61CA89",
  "initialPosition": {
   "yaw": 0.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D70B704_9741_B83F_41E1_0A846D0A8387",
  "initialPosition": {
   "yaw": -1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D664712_9741_B85B_416F_AB9D7503EDFC",
  "initialPosition": {
   "yaw": -12.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D95471F_9741_B849_41DE_F0EB55BEEEC1",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D98172E_9741_B84B_41D9_D8EC3892E0BA",
  "initialPosition": {
   "yaw": -156.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D89A73D_9741_B849_41CB_D5A54A0319B3",
  "initialPosition": {
   "yaw": 7.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DBC874B_9741_B8C9_41B0_EF2DE55CFCFE",
  "initialPosition": {
   "yaw": 0.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DA2575A_9741_B8CB_41DE_F471C9ED4EC2",
  "initialPosition": {
   "yaw": 178.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DD35776_9741_B8DB_41C8_267F386EC3D7",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DC6B794_9741_B85F_41D2_5D6653DC63CF",
  "initialPosition": {
   "yaw": 17.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DF4F7B2_9741_B85B_41D3_5FCA3593C194",
  "initialPosition": {
   "yaw": -101.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DFB57D0_9741_A7D7_41E1_BCF11515F2A5",
  "initialPosition": {
   "yaw": -78.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "shadow": false,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadow": true,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "minWidth": 100,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "height": "96.96%",
  "width": "98.794%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "left",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "minWidth": 1,
  "layout": "absolute",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 38.1,
    "height": "99.332%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "top": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "minWidth": 1,
    "layout": "absolute",
    "paddingTop": 0,
    "gap": 10,
    "left": 14,
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "height": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "shadow": false,
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 108,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "minWidth": 1,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "left": "0%",
      "backgroundOpacity": 0,
      "maxWidth": 108
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 70,
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "height": 70,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "shadow": false,
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 108,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "minWidth": 1,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "left": "10.27%",
      "backgroundOpacity": 0,
      "maxWidth": 108
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 1638,
    "height": 436,
    "borderRadius": 9,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "top": "0.06%",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "minWidth": 1,
    "layout": "absolute",
    "horizontalAlign": "left",
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 70,
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "height": 70,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "shadow": false,
      "class": "IconButton",
      "top": "0.1%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 108,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "minWidth": 1,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "left": "1.17%",
      "backgroundOpacity": 0,
      "maxWidth": 108
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "center",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "minWidth": 1,
  "layout": "absolute",
  "paddingTop": 0,
  "gap": 10,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "shadow": false,
    "class": "Image",
    "top": 0,
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"en\";this.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, false, 0, null, null, false);this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false);this.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, false, 0, null, null, false);this.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, false, 0, null, null, false);this.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, false, 0, null, null, false);this.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "minWidth": 1,
    "paddingTop": 0,
    "left": -0.04,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "88.587%",
    "width": "60.736%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "center",
    "top": "2.62%",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "minWidth": 1,
    "layout": "vertical",
    "paddingTop": 0,
    "left": "18.69%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "10.152%",
      "width": "92.083%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "height": "73.333%",
        "width": "79.193%",
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "class": "Image",
        "paddingBottom": 0,
        "maxHeight": 61,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 500,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "bottom",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "1.764%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "minWidth": 1,
      "layout": "absolute",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "7.327%",
      "width": "99.94%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "86.667%",
        "width": "99.901%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "10.55%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "width": "95.833%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 108,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "10.549%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "width": "95.83%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 108,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "46.753%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 1000,
          "children": [
           {
            "paddingRight": 0,
            "height": "70.59%",
            "width": "99.138%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 40,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 275,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "1.227%",
      "width": "99.858%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "scaleMode": "fit_inside",
        "horizontalAlign": "center",
        "class": "Image",
        "shadow": false,
        "paddingBottom": 0,
        "maxHeight": 2,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "4.417%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 5,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "13.477%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "14.091%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "width": "97.183%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 243,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 258,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "39.063%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "99.491%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 408,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "15.139%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "width": 30,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "minWidth": 1,
          "paddingTop": 0,
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "7.276%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "97.67%",
        "width": "83.008%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "64.407%",
          "width": "87.799%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 49,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 734,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "2.454%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "scaleMode": "fit_inside",
        "horizontalAlign": "center",
        "class": "Image",
        "shadow": false,
        "paddingBottom": 0,
        "maxHeight": 2,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "6.937%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "62.5%",
        "width": "13.505%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "12.891%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "83.33%",
          "width": "85.42%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 222,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 222,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "67.857%",
        "width": "54.618%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "84.211%",
          "width": "83.455%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 41,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 459,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "5.834%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "33.984%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "70.833%",
          "width": "86.842%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 44,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 297,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "12.935%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "top": "0%",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "minWidth": 1,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 31,
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "height": 29,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "shadow": false,
      "class": "IconButton",
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 72,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "minWidth": 1,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "left": "3.02%",
      "backgroundOpacity": 0,
      "maxWidth": 72
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": "77.065%",
    "width": "53.136%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_8094493A_8C48_84B7_41A9_59553E60A5AE",
    "minWidth": 1,
    "layout": "absolute",
    "bottom": "9.57%",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0.3,
    "right": "20.33%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "textDecoration": "none",
      "width": "70.034%",
      "height": "77.433%",
      "borderRadius": 0,
      "fontFamily": "Arial",
      "text": "English",
      "borderSize": 0,
      "shadow": false,
      "fontColor": "#FFFFFF",
      "class": "Label",
      "horizontalAlign": "center",
      "top": "8.32%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Label_80D5A638_8C48_8C4C_41DF_09CEF71B3091",
      "minWidth": 1,
      "paddingTop": 0,
      "fontStyle": "normal",
      "left": "14.87%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": "72.065%",
    "width": "54.346%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5",
    "minWidth": 1,
    "layout": "absolute",
    "bottom": "13.8%",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0.3,
    "right": "20.75%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "textDecoration": "none",
      "width": "37.292%",
      "height": "26.848%",
      "borderRadius": 0,
      "fontFamily": "Arial",
      "text": "Japanese",
      "borderSize": 0,
      "shadow": false,
      "fontColor": "#FFFFFF",
      "class": "Label",
      "horizontalAlign": "center",
      "top": "36.5%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Label_813B3942_8C49_843F_41AE_348AA4BEC457",
      "minWidth": 1,
      "paddingTop": 0,
      "fontStyle": "normal",
      "left": "31.3%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "height": "29.896%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "minWidth": 1,
  "layout": "vertical",
  "bottom": "0.87%",
  "paddingTop": 0,
  "gap": 10,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": 181,
    "width": "97.739%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "minWidth": 1,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0.3,
    "children": [
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": 564,
      "scrollBarColor": "#000000",
      "height": 181,
      "borderRadius": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "minWidth": 1,
      "layout": "absolute",
      "horizontalAlign": "left",
      "paddingTop": 0,
      "backgroundOpacity": 0.3,
      "children": [
       {
        "backgroundColorDirection": "vertical",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "top": "2.21%",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "minWidth": 1,
        "layout": "horizontal",
        "horizontalAlign": "center",
        "paddingTop": 0,
        "gap": 10,
        "left": "0%",
        "backgroundOpacity": 0.3,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "backgroundColorDirection": "vertical",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "top": "2.15%",
        "visible": false,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "minWidth": 1,
        "layout": "horizontal",
        "horizontalAlign": "center",
        "paddingTop": 0,
        "gap": 10,
        "left": "0%",
        "backgroundOpacity": 0.3,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "97.619%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "backgroundColorDirection": "vertical",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "height": "86.188%",
        "width": "100%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "top": "5.47%",
        "visible": false,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "backgroundColorRatios": [
         0,
         1
        ],
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "left": "0%",
        "backgroundOpacity": 0.3,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "minWidth": 1,
          "layout": "vertical",
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "minWidth": 1,
            "layout": "absolute",
            "horizontalAlign": "left",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "shadow": false,
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "maxHeight": 126,
              "paddingLeft": 0,
              "minHeight": 1,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "minWidth": 1,
              "horizontalAlign": "center",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "maxWidth": 126
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "horizontalAlign": "left",
            "paddingBottom": 0,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "minWidth": 1,
            "layout": "absolute",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "paddingLeft": 0,
              "minHeight": 1,
              "bottom": "0%",
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "minWidth": 1,
              "paddingTop": 0,
              "fontStyle": "normal",
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top",
            "scrollBarVisible": "rollOver"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": 77,
    "width": "97.913%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "minWidth": 1,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0.3,
    "children": [
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "minWidth": 1,
      "layout": "absolute",
      "paddingTop": 0,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "width": 70,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "height": 70,
        "transparencyActive": false,
        "borderRadius": 0,
        "borderSize": 0,
        "shadow": false,
        "class": "IconButton",
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "cursor": "hand",
        "paddingBottom": 0,
        "maxHeight": 84,
        "paddingLeft": 0,
        "minHeight": 1,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "minWidth": 1,
        "horizontalAlign": "center",
        "paddingTop": 0,
        "left": "2.45%",
        "backgroundOpacity": 0,
        "maxWidth": 84
       }
      ],
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 54,
        "height": 54,
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "minWidth": 1,
        "layout": "absolute",
        "horizontalAlign": "left",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "maxHeight": 509,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "minWidth": 1,
          "horizontalAlign": "center",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 509,
          "right": "-1.96%"
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "maxHeight": 509,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "minWidth": 1,
          "horizontalAlign": "center",
          "paddingTop": 0,
          "left": "0%",
          "backgroundOpacity": 0,
          "maxWidth": 509
         }
        ],
        "verticalAlign": "top",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "minWidth": 1,
      "layout": "absolute",
      "paddingTop": 0,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     }
    ],
    "verticalAlign": "bottom",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "height": "100%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "center",
  "top": "0%",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "minWidth": 1,
  "layout": "absolute",
  "paddingTop": 0,
  "gap": 10,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "shadow": false,
    "class": "Image",
    "top": 0,
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"jp\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_98B73C5B_8F20_FA7C_41DD_7BA02D5246C8, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_98B73C5B_8F20_FA7C_41DD_7BA02D5246C8, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_98B75C5C_8F20_FA74_41DE_54D374C8C19E, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "minWidth": 1,
    "paddingTop": 0,
    "left": -0.04,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "88.587%",
    "width": "60.736%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "center",
    "top": "2.62%",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F",
    "minWidth": 1,
    "layout": "vertical",
    "paddingTop": 0,
    "left": "18.69%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "10.152%",
      "width": "92.083%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B5CC58_8F20_FA7C_41D0_BCFD2E1AEFD8",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "height": "73.333%",
        "width": "79.193%",
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_98B5FC58_8F20_FA7C_41CF_16B24E2C182B.png",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "class": "Image",
        "paddingBottom": 0,
        "maxHeight": 61,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_98B5FC58_8F20_FA7C_41CF_16B24E2C182B",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 500,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "bottom",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "1.764%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B51C58_8F20_FA7C_41C3_07465F7A7D45",
      "minWidth": 1,
      "layout": "absolute",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "7.327%",
      "width": "99.94%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B53C58_8F20_FA7C_41C7_25C84179F40F",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "86.667%",
        "width": "99.901%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B54C58_8F20_FA7C_41C7_55C6CA21DBF8",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "10.55%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_98B55C58_8F20_FA7C_41DE_2FC905C7642A",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "width": "95.833%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_98B56C58_8F20_FA7C_41CB_FB46B09B752D.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 108,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_98B56C58_8F20_FA7C_41CB_FB46B09B752D",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "10.549%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_98B57C58_8F20_FA7C_41E0_192C6B73E11E",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "width": "95.83%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_98B49C58_8F20_FA7C_417E_3080F03C007F.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 108,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_98B49C58_8F20_FA7C_417E_3080F03C007F",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "46.753%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Container_98B4AC58_8F20_FA7C_41D7_F4C0856AA3B7",
          "minWidth": 1,
          "layout": "horizontal",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 1000,
          "children": [
           {
            "paddingRight": 0,
            "height": "70.59%",
            "width": "99.138%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_98B4CC58_8F20_FA7C_41DD_459A55DDCED7.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "maxHeight": 40,
            "paddingLeft": 0,
            "minHeight": 1,
            "id": "Image_98B4CC58_8F20_FA7C_41DD_459A55DDCED7",
            "minWidth": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 275,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "1.227%",
      "width": "99.858%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B4DC58_8F20_FA7C_41D3_A0DA1AF2D73D",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_98B40C58_8F20_FA7D_41BF_B592349DF04D.png",
        "scaleMode": "fit_inside",
        "horizontalAlign": "center",
        "class": "Image",
        "shadow": false,
        "paddingBottom": 0,
        "maxHeight": 2,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_98B40C58_8F20_FA7D_41BF_B592349DF04D",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "4.417%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 5,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B41C59_8F20_FA7C_417A_D1EEE368BDE0",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "13.477%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B42C59_8F20_FA7C_41B0_A7D32CE60594",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B43C59_8F20_FA7C_41C4_CC61FBAA80D7.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B43C59_8F20_FA7C_41C4_CC61FBAA80D7",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "14.091%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B44C59_8F20_FA7C_41C4_18DD347BA1AD",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "width": "97.183%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B45C59_8F20_FA7C_41BB_E5F60FF9202D.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 243,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B45C59_8F20_FA7C_41BB_E5F60FF9202D",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 258,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "39.063%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B47C59_8F20_FA7C_417C_221F710A34A0",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "99.491%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B7BC59_8F20_FA7C_41DA_B68FAED4FC52.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B7BC59_8F20_FA7C_41DA_B68FAED4FC52",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 408,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "15.139%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B7CC59_8F20_FA7F_41DA_337C61DC91A4",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "width": 30,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 300,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B7EC5A_8F20_FA7C_41D4_12D604EF94DD",
          "minWidth": 1,
          "paddingTop": 0,
          "url": "skin/Image_98B7EC5A_8F20_FA7C_41D4_12D604EF94DD.png",
          "backgroundOpacity": 0,
          "maxWidth": 300,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "7.276%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B72C5A_8F20_FA7C_41C4_A70972BE1D71",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "97.67%",
        "width": "83.008%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B74C5A_8F20_FA7C_41DA_A2F410E01A4D",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "64.407%",
          "width": "87.799%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B75C5A_8F20_FA7C_41DE_14021F6C57A4.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 49,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B75C5A_8F20_FA7C_41DE_14021F6C57A4",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 734,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "2.454%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B76C5A_8F20_FA7C_41AC_71A4EFC75D62",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_98B77C5A_8F20_FA7C_41E0_D8B3A4DE7E92.png",
        "scaleMode": "fit_inside",
        "horizontalAlign": "center",
        "class": "Image",
        "shadow": false,
        "paddingBottom": 0,
        "maxHeight": 2,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Image_98B77C5A_8F20_FA7C_41E0_D8B3A4DE7E92",
        "minWidth": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "6.937%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B68C5A_8F20_FA7C_4197_075AA0C0A7EE",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "62.5%",
        "width": "13.505%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B69C5A_8F20_FA7C_41DB_DC7156C1EEB0",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B6AC5A_8F20_FA7C_41DF_4C6984CF64B5.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 45,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B6AC5A_8F20_FA7C_41DF_4C6984CF64B5",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "12.891%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B6CC5A_8F20_FA7C_41CD_DBBF5C2E7F28",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "83.33%",
          "width": "85.42%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B6DC5A_8F20_FA7C_41B4_CFAB9365400F.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 222,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B6DC5A_8F20_FA7C_41B4_CFAB9365400F",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 222,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "67.857%",
        "width": "54.618%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B47C5B_8F20_FA7C_419F_F9F46A21885D",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "84.211%",
          "width": "83.455%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B78C5B_8F20_FA7C_41D8_5FC66A63567B.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 41,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B78C5B_8F20_FA7C_41D8_5FC66A63567B",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 459,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "height": "5.834%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Container_98B7BC5B_8F20_FA7C_41CB_324B6CF0DC9D",
      "minWidth": 1,
      "layout": "horizontal",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "100%",
        "width": "33.984%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 1,
        "id": "Container_98B7EC5B_8F20_FA7C_4199_363F5172B89E",
        "minWidth": 1,
        "layout": "horizontal",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "height": "70.833%",
          "width": "86.842%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_98B70C5B_8F20_FA7C_41D2_2F828B9E6B19.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "maxHeight": 44,
          "paddingLeft": 0,
          "minHeight": 1,
          "id": "Image_98B70C5B_8F20_FA7C_41D2_2F828B9E6B19",
          "minWidth": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 297,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "12.935%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "top": "0%",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "minWidth": 1,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 62,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "height": 58,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "shadow": false,
      "class": "IconButton",
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 72,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "minWidth": 1,
      "horizontalAlign": "center",
      "paddingTop": 0,
      "left": "3.02%",
      "backgroundOpacity": 0,
      "maxWidth": 72
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": "77.065%",
    "width": "53.136%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_98B73C5B_8F20_FA7C_41DD_7BA02D5246C8",
    "minWidth": 1,
    "layout": "absolute",
    "bottom": "9.57%",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0.3,
    "right": "20.33%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "textDecoration": "none",
      "width": "70.034%",
      "height": "77.433%",
      "borderRadius": 0,
      "fontFamily": "Arial",
      "text": "English",
      "borderSize": 0,
      "shadow": false,
      "fontColor": "#FFFFFF",
      "class": "Label",
      "horizontalAlign": "center",
      "top": "8.32%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Label_98B74C5B_8F20_FA73_41E1_5CF7DD0025D3",
      "minWidth": 1,
      "paddingTop": 0,
      "fontStyle": "normal",
      "left": "14.87%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "height": "72.065%",
    "width": "54.346%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "left",
    "visible": false,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_98B75C5C_8F20_FA74_41DE_54D374C8C19E",
    "minWidth": 1,
    "layout": "absolute",
    "bottom": "13.8%",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0.3,
    "right": "20.75%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "textDecoration": "none",
      "width": "37.292%",
      "height": "26.848%",
      "borderRadius": 0,
      "fontFamily": "Arial",
      "text": "Japanese",
      "borderSize": 0,
      "shadow": false,
      "fontColor": "#FFFFFF",
      "class": "Label",
      "horizontalAlign": "center",
      "top": "36.5%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "id": "Label_98B68C5C_8F20_FA74_41D6_F25C0664C6A0",
      "minWidth": 1,
      "paddingTop": 0,
      "fontStyle": "normal",
      "left": "31.3%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "class": "Player",
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "id": "rootPlayer",
 "minWidth": 20,
 "layout": "absolute",
 "vrPolyfillScale": 1,
 "paddingTop": 0,
 "gap": 10,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_8C5E0456_9741_B8DB_41DB_F842CAC32CB3.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click');self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})