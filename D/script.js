TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "opacity": 0.4,
   "selectedBackgroundColor": "#202020",
   "id": "Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "C01",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "C02",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "C03",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "C04",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "C05",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "C06",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "C07",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "C08",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "C09",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "C10",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "C11",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "C12",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "C13",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "C14",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "C15",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "C16",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "C17",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "class": "MenuItem",
     "label": "C18",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "class": "MenuItem",
     "label": "C19",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    },
    {
     "class": "MenuItem",
     "label": "C20",
     "click": "this.mainPlayList.set('selectedIndex', 19)"
    },
    {
     "class": "MenuItem",
     "label": "C21",
     "click": "this.mainPlayList.set('selectedIndex', 20)"
    },
    {
     "class": "MenuItem",
     "label": "C22",
     "click": "this.mainPlayList.set('selectedIndex', 21)"
    },
    {
     "class": "MenuItem",
     "label": "C23",
     "click": "this.mainPlayList.set('selectedIndex', 22)"
    }
   ],
   "rollOverFontColor": "#FFFFFF"
  },
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "mapLocations": [
   {
    "x": 310.47,
    "class": "PanoramaMapLocation",
    "y": 133.23,
    "angle": 115.94,
    "map": {
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 342,
     "id": "map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "class": "Map",
     "thumbnailUrl": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_t.png",
     "image": {
      "levels": [
       {
        "height": 218,
        "class": "ImageResourceLevel",
        "width": 342,
        "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1.png"
       },
       {
        "height": 109,
        "class": "ImageResourceLevel",
        "width": 171,
        "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_lq.png",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 218,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872E7BEE_8971_86AB_41C4_C81338392D94",
       "map": {
        "offsetY": 0,
        "x": 299.06,
        "class": "HotspotMapOverlayMap",
        "width": 21.5,
        "y": 121.53,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_46_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "x": 299.06,
        "class": "HotspotMapOverlayImage",
        "y": 121.53,
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_46.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872FABEE_8971_86A8_41C9_6537CE1664CB",
       "map": {
        "offsetY": 0,
        "x": 343.83,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 141.03,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_47_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "x": 343.83,
        "class": "HotspotMapOverlayImage",
        "y": 141.03,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_47.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F8BEF_8971_86A9_41DC_4FACD2ACE2E8",
       "map": {
        "offsetY": 0,
        "x": 390.96,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 160.02,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_48_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "x": 390.96,
        "class": "HotspotMapOverlayImage",
        "y": 160.02,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_48.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872FFBEF_8971_86A9_41D4_1FCE2375D219",
       "map": {
        "offsetY": 0,
        "x": 441.65,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 182.92,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_49_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "x": 441.65,
        "class": "HotspotMapOverlayImage",
        "y": 182.92,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_49.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872FCBEF_8971_86A9_41B0_AB9D99641CFD",
       "map": {
        "offsetY": 0,
        "x": 501.63,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 202.28,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_50_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "x": 501.63,
        "class": "HotspotMapOverlayImage",
        "y": 202.28,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_50.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F2BEF_8971_86A9_41CB_C6C54500600B",
       "map": {
        "offsetY": 0,
        "x": 535.1,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 216.39,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_51_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "x": 535.1,
        "class": "HotspotMapOverlayImage",
        "y": 216.39,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_51.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F0BEF_8971_86A9_41C5_0B58AB767F94",
       "map": {
        "offsetY": 0,
        "x": 599.75,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 246.98,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_52_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "x": 599.75,
        "class": "HotspotMapOverlayImage",
        "y": 246.98,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_52.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F1BEF_8971_86A9_41B4_8EEA562D6F20",
       "map": {
        "offsetY": 0,
        "x": 624.13,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 207.16,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_53_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "x": 624.13,
        "class": "HotspotMapOverlayImage",
        "y": 207.16,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_53.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F6BEF_8971_86A9_41DA_0EBF6F88B7B9",
       "map": {
        "offsetY": 0,
        "x": 623.02,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 146.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_54_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "x": 623.02,
        "class": "HotspotMapOverlayImage",
        "y": 146.43,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_54.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872F5BEF_8971_86A9_41CB_0CACE4A3FCED",
       "map": {
        "offsetY": 0,
        "x": 674.21,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.7,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_55_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "x": 674.21,
        "class": "HotspotMapOverlayImage",
        "y": 238.7,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_55.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872CABEF_8971_86A9_41DF_FC1E929BC75E",
       "map": {
        "offsetY": 0,
        "x": 735.68,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 237.89,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_56_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "x": 735.68,
        "class": "HotspotMapOverlayImage",
        "y": 237.89,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_56.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872CBBEF_8971_86A9_41DE_ACFC8ACF75CF",
       "map": {
        "offsetY": 0,
        "x": 800.4,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.7,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_57_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "x": 800.4,
        "class": "HotspotMapOverlayImage",
        "y": 238.7,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_57.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C9BEF_8971_86A9_41D9_EAC2BDB2C21C",
       "map": {
        "offsetY": 0,
        "x": 845.98,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.7,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_58_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "x": 845.98,
        "class": "HotspotMapOverlayImage",
        "y": 238.7,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_58.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872CEBEF_8971_86A9_41D3_436D6325D298",
       "map": {
        "offsetY": 0,
        "x": 886.84,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 241.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_59_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "image": {
        "x": 886.84,
        "class": "HotspotMapOverlayImage",
        "y": 241.43,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_59.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872CDBEF_8971_86A9_41D9_71876BEA4647",
       "map": {
        "offsetY": 0,
        "x": 935.15,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 240.03,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_60_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "image": {
        "x": 935.15,
        "class": "HotspotMapOverlayImage",
        "y": 240.03,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_60.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C3BF0_8971_86B7_41A7_B20D3A9C3004",
       "map": {
        "offsetY": 0,
        "x": 616.52,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 298.62,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_61_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "image": {
        "x": 616.52,
        "class": "HotspotMapOverlayImage",
        "y": 298.62,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_61.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C1BF0_8971_86B7_41D3_3D98E84D80EE",
       "map": {
        "offsetY": 0,
        "x": 664.24,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 304.67,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_62_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "image": {
        "x": 664.24,
        "class": "HotspotMapOverlayImage",
        "y": 304.67,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_62.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C6BF0_8971_86B7_41CC_4064035FCE4F",
       "map": {
        "offsetY": 0,
        "x": 662.91,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 332.23,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_63_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "image": {
        "x": 662.91,
        "class": "HotspotMapOverlayImage",
        "y": 332.23,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_63.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C7BF0_8971_86B7_41D8_F07A4C5ACB9F",
       "map": {
        "offsetY": 0,
        "x": 658.63,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 374.56,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_64_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "image": {
        "x": 658.63,
        "class": "HotspotMapOverlayImage",
        "y": 374.56,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_64.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872C4BF0_8971_86B7_41D9_ED4D48DD8A93",
       "map": {
        "offsetY": 0,
        "x": 672.88,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 422.95,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_65_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "image": {
        "x": 672.88,
        "class": "HotspotMapOverlayImage",
        "y": 422.95,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_65.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872DABF0_8971_86B7_41D4_6E291C762EB8",
       "map": {
        "offsetY": 0,
        "x": 624.86,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 330.68,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_66_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "image": {
        "x": 624.86,
        "class": "HotspotMapOverlayImage",
        "y": 330.68,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_66.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872DBBF0_8971_86B7_41D3_0C0345F21A8E",
       "map": {
        "offsetY": 0,
        "x": 585.63,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 343.9,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_67_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "image": {
        "x": 585.63,
        "class": "HotspotMapOverlayImage",
        "y": 343.9,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_67.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_872D9BF0_8971_86B7_41DD_EF24C1B2F826",
       "map": {
        "offsetY": 0,
        "x": 558.52,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 359.79,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_68_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "image": {
        "x": 558.52,
        "class": "HotspotMapOverlayImage",
        "y": 359.79,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1_HS_68.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "none",
     "maximumZoomFactor": 1
    }
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.2,
        "yaw": 2.71,
        "image": {
         "levels": [
          {
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 65,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.74
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_87CF72AA_89B3_86AA_41B7_B5C7F0D8DCC4); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.71,
        "hfov": 9.2,
        "image": {
         "levels": [
          {
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 130,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.74
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "class": "ImageResourceLevel",
       "width": 5000,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "label": "C01",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.06,
           "yaw": 2.66,
           "image": {
            "levels": [
             {
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14.65
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_8746A0DE_89B3_82EA_41D7_38D36311D2EB); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 2.66,
           "hfov": 9.06,
           "image": {
            "levels": [
             {
              "height": 130,
              "class": "ImageResourceLevel",
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0.png"
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
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.74,
           "yaw": -179.81,
           "image": {
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.94
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_874130C6_89B3_82DA_41C4_174E1C680293); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -179.81,
           "hfov": 8.74,
           "image": {
            "levels": [
             {
              "height": 78,
              "class": "ImageResourceLevel",
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.94
          }
         ]
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "class": "ImageResourceLevel",
          "width": 5000,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60.jpeg"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMin": 60,
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "backwardYaw": 2.71,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.78,
              "yaw": 179.91,
              "image": {
               "levels": [
                {
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -20.32
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_8772B10F_89B3_836A_41DE_7014C295484F); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 179.91,
              "hfov": 8.78,
              "image": {
               "levels": [
                {
                 "height": 130,
                 "class": "ImageResourceLevel",
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png"
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
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.98,
              "yaw": 1.93,
              "image": {
               "levels": [
                {
                 "height": 37,
                 "class": "ImageResourceLevel",
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.36
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_874D80F7_89B3_82BA_41DA_9F141D23CAF5); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 1.93,
              "hfov": 8.98,
              "image": {
               "levels": [
                {
                 "height": 74,
                 "class": "ImageResourceLevel",
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.36
             }
            ]
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfovMin": 60,
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "yaw": 1.93,
          "backwardYaw": 2.66,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
           "partial": false,
           "pitch": 0,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 9.04,
                 "yaw": -179.87,
                 "image": {
                  "levels": [
                   {
                    "height": 52,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -14.96
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_844E21C2_89B3_82DB_41D5_0205BAF3FA4F); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.87,
                 "hfov": 9.04,
                 "image": {
                  "levels": [
                   {
                    "height": 104,
                    "class": "ImageResourceLevel",
                    "width": 129,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png"
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
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.5,
                 "yaw": -1.53,
                 "image": {
                  "levels": [
                   {
                    "height": 52,
                    "class": "ImageResourceLevel",
                    "width": 60,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.8
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_844B71B3_89B3_82B8_41B4_A02745055D9D); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -1.54,
                 "hfov": 8.5,
                 "image": {
                  "levels": [
                   {
                    "height": 104,
                    "class": "ImageResourceLevel",
                    "width": 120,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.8
                }
               ]
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 2500,
                "class": "ImageResourceLevel",
                "width": 5000,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "hfovMin": 60,
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
              "partial": false,
              "pitch": 0,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
               }
              ],
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.01,
                    "yaw": -177.15,
                    "image": {
                     "levels": [
                      {
                       "height": 53,
                       "class": "ImageResourceLevel",
                       "width": 65,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -15.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_87947227_89B3_815A_41DD_D52280187A06); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -177.15,
                    "hfov": 9.01,
                    "image": {
                     "levels": [
                      {
                       "height": 106,
                       "class": "ImageResourceLevel",
                       "width": 130,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png"
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
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.22,
                    "yaw": -1.42,
                    "image": {
                     "levels": [
                      {
                       "height": 64,
                       "class": "ImageResourceLevel",
                       "width": 64,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.99
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_846F3219_89B3_8176_41D0_C2142DEB5C29); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -1.42,
                    "hfov": 9.22,
                    "image": {
                     "levels": [
                      {
                       "height": 128,
                       "class": "ImageResourceLevel",
                       "width": 129,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.99
                   }
                  ]
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 2500,
                   "class": "ImageResourceLevel",
                   "width": 5000,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "hfovMin": 60,
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "backwardYaw": -1.54,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                  }
                 ],
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.08,
                       "yaw": -179.79,
                       "image": {
                        "levels": [
                         {
                          "height": 37,
                          "class": "ImageResourceLevel",
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.13
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_86D733B3_89B3_86BA_41CB_45F8F876C636); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -179.79,
                       "hfov": 9.08,
                       "image": {
                        "levels": [
                         {
                          "height": 75,
                          "class": "ImageResourceLevel",
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png"
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
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.22,
                       "yaw": 5.64,
                       "image": {
                        "levels": [
                         {
                          "height": 32,
                          "class": "ImageResourceLevel",
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -9.93
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_86C493C1_89B3_86D6_41C4_E2F29B3BF06E); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 5.64,
                       "hfov": 9.22,
                       "image": {
                        "levels": [
                         {
                          "height": 65,
                          "class": "ImageResourceLevel",
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -9.93
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 2500,
                      "class": "ImageResourceLevel",
                      "width": 5000,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "hfovMin": 60,
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "backwardYaw": -177.15,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "class": "PanoramaMapLocation",
                      "y": 258.07,
                      "angle": 25.28,
                      "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                     }
                    ],
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.22,
                          "yaw": -91.86,
                          "image": {
                           "levels": [
                            {
                             "height": 48,
                             "class": "ImageResourceLevel",
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -10.01
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_869F617B_89B3_83A9_41D4_A5FE3C14A470); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -91.86,
                          "hfov": 9.22,
                          "image": {
                           "levels": [
                            {
                             "height": 96,
                             "class": "ImageResourceLevel",
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png"
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
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.14,
                          "yaw": 11.96,
                          "image": {
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -12.45
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_876DD15D_89B3_83E8_41DA_1D702AB43F48); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 11.96,
                          "hfov": 9.14,
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "class": "ImageResourceLevel",
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png"
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
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.24,
                          "yaw": 163.21,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "class": "ImageResourceLevel",
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.18
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8694316D_89B3_83A9_41D0_8CEC3BBBEBA6); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 163.21,
                          "hfov": 9.24,
                          "image": {
                           "levels": [
                            {
                             "height": 61,
                             "class": "ImageResourceLevel",
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.18
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2500,
                         "class": "ImageResourceLevel",
                         "width": 5000,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "hfovMin": 60,
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                       "partial": false,
                       "pitch": 0,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "class": "PanoramaMapLocation",
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                        }
                       ],
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.23,
                             "yaw": -168.2,
                             "image": {
                              "levels": [
                               {
                                "height": 33,
                                "class": "ImageResourceLevel",
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -15
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_847461D0_89B3_82F7_41DB_27CD8CCA018A); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -168.2,
                             "hfov": 9.23,
                             "image": {
                              "levels": [
                               {
                                "height": 67,
                                "class": "ImageResourceLevel",
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png"
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
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.92,
                             "yaw": -36.3,
                             "image": {
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -21.01
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_847E41ED_89B3_82AE_41D0_2067BCF8EC7D); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -36.3,
                             "hfov": 8.92,
                             "image": {
                              "levels": [
                               {
                                "height": 69,
                                "class": "ImageResourceLevel",
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png"
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
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.36,
                             "yaw": 30.75,
                             "image": {
                              "levels": [
                               {
                                "height": 26,
                                "class": "ImageResourceLevel",
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -11.5
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_847811DF_89B3_82EA_41CE_E2EEC8C75566); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 30.75,
                             "hfov": 9.36,
                             "image": {
                              "levels": [
                               {
                                "height": 53,
                                "class": "ImageResourceLevel",
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -11.5
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2450,
                            "class": "ImageResourceLevel",
                            "width": 4900,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "hfovMin": 60,
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "class": "PanoramaMapLocation",
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                           }
                          ],
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.5,
                                "yaw": 130.87,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 65,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -5.71
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_87EF22D7_89B3_86F9_41AF_6A7AE9B5DAC9); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.87,
                                "hfov": 9.5,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 130,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -5.71
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 2450,
                               "class": "ImageResourceLevel",
                               "width": 4900,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C09",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 130.87,
                            "backwardYaw": -168.2,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -168.2,
                         "backwardYaw": 130.87,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 30.75,
                         "backwardYaw": 11.96,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "class": "PanoramaMapLocation",
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                           }
                          ],
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.23,
                                "yaw": -138.38,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 33,
                                   "class": "ImageResourceLevel",
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -9.68
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_87BA5261_89B3_81D6_41E1_2580E83447B6); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -138.38,
                                "hfov": 9.23,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 67,
                                   "class": "ImageResourceLevel",
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png"
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
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.14,
                                "yaw": -1.2,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "class": "ImageResourceLevel",
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -12.42
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_87AE527E_89B3_81AA_41A8_356547DA7F76); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -1.2,
                                "hfov": 9.14,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 122,
                                   "class": "ImageResourceLevel",
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png"
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
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.12,
                                "yaw": 78.56,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 48,
                                   "class": "ImageResourceLevel",
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -12.93
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_87A5226F_89B3_81AA_41C2_FB2200B93523); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 78.56,
                                "hfov": 9.12,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 96,
                                   "class": "ImageResourceLevel",
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -12.93
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 2500,
                               "class": "ImageResourceLevel",
                               "width": 5000,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "backwardYaw": -36.3,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                             "partial": false,
                             "pitch": 0,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "class": "PanoramaMapLocation",
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                              }
                             ],
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.05,
                                   "yaw": -93.19,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 34,
                                      "class": "ImageResourceLevel",
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.74
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8690136A_89B3_87AA_41D1_BDBCB7139F12); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -93.19,
                                   "hfov": 9.05,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 69,
                                      "class": "ImageResourceLevel",
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png"
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.25,
                                   "yaw": 155.68,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 52,
                                      "class": "ImageResourceLevel",
                                      "width": 64,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.65
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_8681E378_89B3_87B6_41D0_5474961D0096); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 155.68,
                                   "hfov": 9.25,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 104,
                                      "class": "ImageResourceLevel",
                                      "width": 129,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png"
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.11,
                                   "yaw": 37.47,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 33,
                                      "class": "ImageResourceLevel",
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -13.25
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_868F3387_89B3_875A_419B_645B9FEB1D5D); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 37.47,
                                   "hfov": 9.11,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 67,
                                      "class": "ImageResourceLevel",
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -13.25
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "class": "ImageResourceLevel",
                                  "width": 5000,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "class": "ImageResourceLevel",
                                  "width": 3217,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                "partial": false,
                                "pitch": 0,
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                "mapLocations": [
                                 {
                                  "x": 628.49,
                                  "class": "PanoramaMapLocation",
                                  "y": 310.59,
                                  "angle": 0,
                                  "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                 }
                                ],
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.22,
                                      "yaw": -172.45,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 32,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -10.04
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8748533F_89B3_87A9_41DF_9EDC8E1CA3B3); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -172.45,
                                      "hfov": 9.22,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 64,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png"
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.21,
                                      "yaw": -20.33,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 26,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -10.3
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_875AB32F_89B3_87A9_41DE_30C701D78800); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -20.33,
                                      "hfov": 9.21,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 53,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png"
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.93,
                                      "yaw": 101.34,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 33,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -17.37
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_872D1321_89B3_8759_41CE_0D96EF5D3F70); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 101.34,
                                      "hfov": 8.93,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 66,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -17.37
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2500,
                                     "class": "ImageResourceLevel",
                                     "width": 5000,
                                     "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "class": "ImageResourceLevel",
                                     "width": 3217,
                                     "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C16",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": 101.34,
                                  "backwardYaw": -93.19,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": -20.33,
                                  "backwardYaw": 163.21,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                   "partial": false,
                                   "pitch": 0,
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "mapLocations": [
                                    {
                                     "x": 636.99,
                                     "class": "PanoramaMapLocation",
                                     "y": 342.51,
                                     "angle": 144.87,
                                     "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.68,
                                         "yaw": -166.65,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 61,
                                            "class": "ImageResourceLevel",
                                            "width": 60,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -8.17
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_879F7236_89B3_81BA_41C5_527211B41D31); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -166.65,
                                         "hfov": 8.68,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 123,
                                            "class": "ImageResourceLevel",
                                            "width": 121,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png"
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.47,
                                         "yaw": -6.22,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 39,
                                            "class": "ImageResourceLevel",
                                            "width": 45,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -10.72
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_87B0F252_89B3_81FA_41C5_A1434D4CA873); this.mainPlayList.set('selectedIndex', 18)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -6.22,
                                         "hfov": 6.47,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 79,
                                            "class": "ImageResourceLevel",
                                            "width": 91,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png"
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.15,
                                         "yaw": 87.5,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 62,
                                            "class": "ImageResourceLevel",
                                            "width": 57,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -9.88
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_87871245_89B3_81DE_41BA_54EF478FEA5C); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 87.5,
                                         "hfov": 8.15,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 124,
                                            "class": "ImageResourceLevel",
                                            "width": 114,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0.png"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -9.88
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 2500,
                                        "class": "ImageResourceLevel",
                                        "width": 5000,
                                        "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "class": "ImageResourceLevel",
                                        "width": 3217,
                                        "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C23",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "yaw": -166.65,
                                     "backwardYaw": -172.45,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                      "partial": false,
                                      "pitch": 0,
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "mapLocations": [
                                       {
                                        "x": 597.76,
                                        "class": "PanoramaMapLocation",
                                        "y": 356.03,
                                        "angle": 71.57,
                                        "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.82,
                                            "yaw": -178.42,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 64,
                                               "class": "ImageResourceLevel",
                                               "width": 63,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -15.23
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_8764C35B_89B3_87EA_41D4_6AC4979A0FD2); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -178.42,
                                            "hfov": 8.82,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 128,
                                               "class": "ImageResourceLevel",
                                               "width": 127,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png"
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9,
                                            "yaw": 23.25,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 55,
                                               "class": "ImageResourceLevel",
                                               "width": 63,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -11.12
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8777334D_89B3_87EE_418B_378CF2E55BDF); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 23.25,
                                            "hfov": 9,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 111,
                                               "class": "ImageResourceLevel",
                                               "width": 127,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0.png"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -11.12
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "class": "ImageResourceLevel",
                                           "width": 5000,
                                           "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "class": "ImageResourceLevel",
                                           "width": 3217,
                                           "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C22",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                        "yaw": 23.25,
                                        "backwardYaw": 87.5,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                         "partial": false,
                                         "pitch": 0,
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "mapLocations": [
                                          {
                                           "x": 570.65,
                                           "class": "PanoramaMapLocation",
                                           "y": 371.77,
                                           "angle": 249.33,
                                           "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.65,
                                               "yaw": -178.92,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 82,
                                                  "class": "ImageResourceLevel",
                                                  "width": 77,
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -16.66
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_87C2329B_89B3_816A_41B1_BF2305BB8EAE); this.mainPlayList.set('selectedIndex', 21)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -178.92,
                                               "hfov": 10.65,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 165,
                                                  "class": "ImageResourceLevel",
                                                  "width": 154,
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -16.66
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "class": "ImageResourceLevel",
                                              "width": 5000,
                                              "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C21",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                           "yaw": -178.92,
                                           "backwardYaw": -178.42,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -178.42,
                                        "backwardYaw": -178.92,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 87.5,
                                     "backwardYaw": 23.25,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                      "partial": false,
                                      "pitch": 0,
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                      "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                      "mapLocations": [
                                       {
                                        "x": 670.6,
                                        "class": "PanoramaMapLocation",
                                        "y": 386.76,
                                        "angle": 0,
                                        "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.18,
                                            "yaw": -36.03,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 53,
                                               "class": "ImageResourceLevel",
                                               "width": 65,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -11.37
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_877EE140_89B3_83D6_4196_22F0D3790A28); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -36.03,
                                            "hfov": 9.18,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 106,
                                               "class": "ImageResourceLevel",
                                               "width": 130,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png"
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.21,
                                            "yaw": 26.17,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 34,
                                               "class": "ImageResourceLevel",
                                               "width": 65,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -11.26
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_8764014F_89B3_83EA_41DA_0C6BF5EB7A35); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 26.17,
                                            "hfov": 9.21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 68,
                                               "class": "ImageResourceLevel",
                                               "width": 130,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png"
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.06,
                                            "yaw": 163.47,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 54,
                                               "class": "ImageResourceLevel",
                                               "width": 57,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.17
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_8779A129_89B3_8356_41CE_F73C7D05E826); this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 163.47,
                                            "hfov": 8.06,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 109,
                                               "class": "ImageResourceLevel",
                                               "width": 115,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0.png"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.17
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "class": "ImageResourceLevel",
                                           "width": 5000,
                                           "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "class": "ImageResourceLevel",
                                           "width": 3217,
                                           "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C19",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                         "partial": false,
                                         "pitch": 0,
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                         "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                         "mapLocations": [
                                          {
                                           "x": 684.05,
                                           "class": "PanoramaMapLocation",
                                           "y": 434.27,
                                           "angle": 147.84,
                                           "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.22,
                                               "yaw": -179.2,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 34,
                                                  "class": "ImageResourceLevel",
                                                  "width": 65,
                                                  "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0_0_map.gif"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -9.77
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_8447E1A5_89B3_8359_41C2_4E136522380F); this.mainPlayList.set('selectedIndex', 18)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -179.2,
                                               "hfov": 9.22,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 69,
                                                  "class": "ImageResourceLevel",
                                                  "width": 130,
                                                  "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -9.77
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "class": "ImageResourceLevel",
                                              "width": 5000,
                                              "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A.jpeg"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C20",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                           "yaw": -179.2,
                                           "backwardYaw": 163.47,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 163.47,
                                        "backwardYaw": -179.2,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                        "yaw": -36.03,
                                        "backwardYaw": -6.22,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                         "partial": false,
                                         "pitch": 0,
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                         "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                         "mapLocations": [
                                          {
                                           "x": 674.74,
                                           "class": "PanoramaMapLocation",
                                           "y": 343.99,
                                           "angle": 163.35,
                                           "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.16,
                                               "yaw": 4.5,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 38,
                                                  "class": "ImageResourceLevel",
                                                  "width": 65,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -11.86
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_870742F5_89B3_86B9_41A5_A8F443E129BF); this.mainPlayList.set('selectedIndex', 18)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 4.5,
                                               "hfov": 9.16,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 76,
                                                  "class": "ImageResourceLevel",
                                                  "width": 130,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png"
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
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.19,
                                               "yaw": -162.77,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 41,
                                                  "class": "ImageResourceLevel",
                                                  "width": 64,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -11.1
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_871AF2E8_89B3_86D7_41CC_91127925C51A); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -162.77,
                                               "hfov": 9.19,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 82,
                                                  "class": "ImageResourceLevel",
                                                  "width": 129,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -11.1
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "class": "ImageResourceLevel",
                                              "width": 5000,
                                              "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C18",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": -162.77,
                                           "backwardYaw": 155.68,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                           "yaw": 4.5,
                                           "backwardYaw": 26.17,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 26.17,
                                        "backwardYaw": 4.5,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -6.22,
                                     "backwardYaw": -36.03,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -172.45,
                                  "backwardYaw": -166.65,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -93.19,
                               "backwardYaw": 101.34,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                               "yaw": 155.68,
                               "backwardYaw": -162.77,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "backwardYaw": 78.56,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 78.56,
                            "backwardYaw": 37.47,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                             "partial": false,
                             "pitch": 0,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "class": "PanoramaMapLocation",
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                              }
                             ],
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.95,
                                   "yaw": 1.16,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 42,
                                      "class": "ImageResourceLevel",
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.05
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_87E252C9_89B3_86D6_41CF_17EA01E15C1E); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 1.16,
                                   "hfov": 8.95,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 84,
                                      "class": "ImageResourceLevel",
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png"
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.75,
                                   "yaw": -179.89,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 44,
                                      "class": "ImageResourceLevel",
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.83
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_87F9F2B9_89B3_86B6_41CF_DBF0C834D206); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -179.89,
                                   "hfov": 8.75,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 89,
                                      "class": "ImageResourceLevel",
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.83
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "class": "ImageResourceLevel",
                                  "width": 5000,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "class": "ImageResourceLevel",
                                  "width": 3217,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                "partial": false,
                                "pitch": 0,
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "class": "PanoramaMapLocation",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                 }
                                ],
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.14,
                                      "yaw": 0.64,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 53,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -12.53
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_8721C312_89B3_877B_41E1_1C24F1CC4215); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 0.64,
                                      "hfov": 9.14,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 107,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png"
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.47,
                                      "yaw": 167.51,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 53,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -25.2
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8733A304_89B3_875F_41C3_8EADB3644E5B); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 167.51,
                                      "hfov": 8.47,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 107,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -25.2
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2500,
                                     "class": "ImageResourceLevel",
                                     "width": 5000,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "class": "ImageResourceLevel",
                                     "width": 3217,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                   "partial": false,
                                   "pitch": 0,
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.95,
                                         "yaw": 0.65,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 36,
                                            "class": "ImageResourceLevel",
                                            "width": 64,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -17.08
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_86A823A4_89B3_875E_41A4_B893A332A64B); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 0.65,
                                         "hfov": 8.95,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 73,
                                            "class": "ImageResourceLevel",
                                            "width": 129,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png"
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.14,
                                         "yaw": 176.12,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 47,
                                            "class": "ImageResourceLevel",
                                            "width": 74,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.57
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_86BA6395_89B3_877E_41D4_86C0AF608B6D); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 176.12,
                                         "hfov": 10.14,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 94,
                                            "class": "ImageResourceLevel",
                                            "width": 148,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.57
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 2500,
                                        "class": "ImageResourceLevel",
                                        "width": 5000,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "class": "ImageResourceLevel",
                                        "width": 3217,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C13",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "backwardYaw": 167.51,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                      "partial": false,
                                      "pitch": 0,
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "class": "PanoramaMapLocation",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.08,
                                            "yaw": 178.92,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 42,
                                               "class": "ImageResourceLevel",
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.01
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8465C1FB_89B3_82AA_41D0_13841ACD3B21); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 178.92,
                                            "hfov": 9.08,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 84,
                                               "class": "ImageResourceLevel",
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png"
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.12,
                                            "yaw": 0.43,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 30,
                                               "class": "ImageResourceLevel",
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -12.99
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_846BC20A_89B3_816A_41AA_41B66D04927C); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 0.43,
                                            "hfov": 9.12,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 61,
                                               "class": "ImageResourceLevel",
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -12.99
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "class": "ImageResourceLevel",
                                           "width": 5000,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "class": "ImageResourceLevel",
                                           "width": 3217,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": 178.92,
                                        "backwardYaw": 0.65,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
                                         "partial": false,
                                         "pitch": 0,
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "class": "PanoramaMapLocation",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.1,
                                               "yaw": 0.3,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 29,
                                                  "class": "ImageResourceLevel",
                                                  "width": 65,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -13.54
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_87D9428C_89B3_816E_41DD_A394609E80D0); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 0.3,
                                               "hfov": 9.1,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 59,
                                                  "class": "ImageResourceLevel",
                                                  "width": 130,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -13.54
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "class": "ImageResourceLevel",
                                              "width": 5000,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C15",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.3,
                                           "backwardYaw": 0.43,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 0.43,
                                        "backwardYaw": 0.3,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 0.65,
                                     "backwardYaw": 178.92,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 167.51,
                                  "backwardYaw": 176.12,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.64,
                                  "backwardYaw": -179.89,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -179.89,
                               "backwardYaw": 0.64,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "backwardYaw": -1.2,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "backwardYaw": 1.16,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "backwardYaw": -138.38,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 11.96,
                      "backwardYaw": 30.75,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "backwardYaw": -20.33,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "backwardYaw": 5.64,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "backwardYaw": -91.86,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -177.15,
                "backwardYaw": -179.79,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "yaw": -1.54,
             "backwardYaw": -1.42,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "backwardYaw": 179.91,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "yaw": 179.91,
          "backwardYaw": -179.87,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "yaw": 2.66,
       "backwardYaw": 1.93,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "yaw": 2.71,
    "backwardYaw": -179.81,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "preloadEnabled": false
 },
 {
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer",
  "viewerArea": "this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
 {
  "class": "PanoramaCamera",
  "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.84,
   "pitch": 3.87
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.31,
   "pitch": -3.25
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.78,
   "pitch": 5.39
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.32,
   "pitch": -2.81
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.92,
   "pitch": -0.89
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.16,
   "pitch": -4.17
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.48,
   "pitch": 4.56
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 2.88
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8729E069_89B3_81D6_41BD_A512F87054AA",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8729E069_89B3_81D6_41BD_A512F87054AA, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8729706A_89B3_81AA_41D5_F0AFABFC36C0",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8729706A_89B3_81AA_41D5_F0AFABFC36C0, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8729106A_89B3_81AA_41D9_0B980C232ED4",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8729106A_89B3_81AA_41D9_0B980C232ED4, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8728B06B_89B3_81AA_41D8_0F2F8AB856B1",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8728B06B_89B3_81AA_41D8_0F2F8AB856B1, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8728606B_89B3_81AA_41E0_0FD21328673E",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8728606B_89B3_81AA_41E0_0FD21328673E, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_8728006C_89B3_81AE_417E_C329C0DE7A8F",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8728006C_89B3_81AE_417E_C329C0DE7A8F, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872BB06C_89B3_81AE_41DE_82B9F29E9534",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872BB06C_89B3_81AE_41DE_82B9F29E9534, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872B706D_89B3_81A5_41AB_3F33E3842AAA",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872B706D_89B3_81A5_41AB_3F33E3842AAA, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872B6073_89B3_81BA_41E0_01E7C1A52126",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872B6073_89B3_81BA_41E0_01E7C1A52126, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872B0073_89B3_81BA_418F_36F219474D9B",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872B0073_89B3_81BA_418F_36F219474D9B, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872AB074_89B3_81BE_41D3_3478852C8304",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872AB074_89B3_81BE_41D3_3478852C8304, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872A6074_89B3_81BE_41B9_CDE63D537F7F",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872A6074_89B3_81BE_41B9_CDE63D537F7F, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872A0075_89B3_81BE_41DA_01DE7FD90442",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872A0075_89B3_81BE_41DA_01DE7FD90442, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872DB076_89B3_81BA_41C5_79B2CDA186C0",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872DB076_89B3_81BA_41C5_79B2CDA186C0, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872D6076_89B3_81BA_41C2_8BB78C970698",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872D6076_89B3_81BA_41C2_8BB78C970698, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872D1077_89B3_81BA_41D6_E9AF8D04BB56",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872D1077_89B3_81BA_41D6_E9AF8D04BB56, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872CF07C_89B3_81AE_41DB_E40BE3F9A028",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872CF07C_89B3_81AE_41DB_E40BE3F9A028, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872C807D_89B3_81AE_41C8_5F2F6472A436",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872C807D_89B3_81AE_41C8_5F2F6472A436, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872C307E_89B3_81AA_41D4_64E5A7087E68",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872C307E_89B3_81AA_41D4_64E5A7087E68, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872FE07E_89B3_81AA_41E1_0F682F21BFC9",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872FE07E_89B3_81AA_41E1_0F682F21BFC9, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872F707F_89B3_81AA_41DD_4C2A7BF7FC75",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872F707F_89B3_81AA_41DD_4C2A7BF7FC75, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872F307F_89B3_81AA_41E0_7917C4EAE5D7",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872F307F_89B3_81AA_41E0_7917C4EAE5D7, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_872EB080_89B3_8156_41B2_E220F04401AF",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_872EB080_89B3_8156_41B2_E220F04401AF, this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1",
 {
  "class": "PlayList",
  "id": "playList_87266063_89B3_81DA_41E0_1B0A315E6D4D",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer",
    "media": "this.map_872E6BEE_8971_86AB_41C0_B3297DCEDCE1",
    "begin": "this.ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "thumbnailUrl": "media/map_86B1CC9D_8990_816E_41C9_7E7F548F8702_t.png",
  "initialZoomFactor": 1,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "label": "map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "image": {
   "levels": [
    {
     "height": 652,
     "class": "ImageResourceLevel",
     "width": 1021,
     "url": "media/map_86B1CC9D_8990_816E_41C9_7E7F548F8702.png"
    },
    {
     "height": 326,
     "class": "ImageResourceLevel",
     "width": 510,
     "url": "media/map_86B1CC9D_8990_816E_41C9_7E7F548F8702_lq.png",
     "grayscale": true
    }
   ],
   "class": "ImageResource"
  },
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "minimumZoomFactor": 1,
  "width": 1021,
  "id": "map_86B1CC9D_8990_816E_41C9_7E7F548F8702",
  "height": 652,
  "scaleMode": "fit_inside",
  "maximumZoomFactor": 1
 },
 {
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "paddingLeft": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 10,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 342,
   "playbackBarHeadShadow": true,
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
   "toolTipFontColor": "#606060",
   "transitionMode": "blending",
   "paddingTop": 0,
   "progressHeight": 10,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "width": 342,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowBlurRadius": 3,
   "height": 218,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadBorderColor": "#000000",
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
   "borderRadius": 10,
   "playbackBarProgressOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "minHeight": 218,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "class": "ViewerArea",
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
  }
 },
 {
  "class": "PlayList",
  "id": "playList_87265063_89B3_81DA_41D2_905DE307311D",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_86B1CC9D_8990_816E_41C9_7E7F548F8702",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_872E1081_89B3_8156_41BD_E90FC028A7FF",
 {
  "class": "PanoramaCamera",
  "id": "camera_874130C6_89B3_82DA_41C4_174E1C680293",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8746A0DE_89B3_82EA_41D7_38D36311D2EB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_874D80F7_89B3_82BA_41DA_9F141D23CAF5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.34,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8772B10F_89B3_836A_41DE_7014C295484F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8779A129_89B3_8356_41CE_F73C7D05E826",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_877EE140_89B3_83D6_4196_22F0D3790A28",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8764014F_89B3_83EA_41DA_0C6BF5EB7A35",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_876DD15D_89B3_83E8_41DA_1D702AB43F48",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8694316D_89B3_83A9_41D0_8CEC3BBBEBA6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.67,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_869F617B_89B3_83A9_41D4_A5FE3C14A470",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8447E1A5_89B3_8359_41C2_4E136522380F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_844B71B3_89B3_82B8_41B4_A02745055D9D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_844E21C2_89B3_82DB_41D5_0205BAF3FA4F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.09,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_847461D0_89B3_82F7_41DB_27CD8CCA018A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_847811DF_89B3_82EA_41CE_E2EEC8C75566",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_847E41ED_89B3_82AE_41D0_2067BCF8EC7D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.62,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8465C1FB_89B3_82AA_41D0_13841ACD3B21",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_846BC20A_89B3_816A_41AA_41B66D04927C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_846F3219_89B3_8176_41D0_C2142DEB5C29",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.46,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87947227_89B3_815A_41DD_D52280187A06",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_879F7236_89B3_81BA_41C5_527211B41D31",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87871245_89B3_81DE_41BA_54EF478FEA5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87B0F252_89B3_81FA_41C5_A1434D4CA873",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87BA5261_89B3_81D6_41E1_2580E83447B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87A5226F_89B3_81AA_41C2_FB2200B93523",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87AE527E_89B3_81AA_41A8_356547DA7F76",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.84,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87D9428C_89B3_816E_41DD_A394609E80D0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.57,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87C2329B_89B3_816A_41B1_BF2305BB8EAE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87CF72AA_89B3_86AA_41B7_B5C7F0D8DCC4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.19,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87F9F2B9_89B3_86B6_41CF_DBF0C834D206",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87E252C9_89B3_86D6_41CF_17EA01E15C1E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87EF22D7_89B3_86F9_41AF_6A7AE9B5DAC9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_871AF2E8_89B3_86D7_41CC_91127925C51A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_870742F5_89B3_86B9_41A5_A8F443E129BF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8733A304_89B3_875F_41C3_8EADB3644E5B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8721C312_89B3_877B_41E1_1C24F1CC4215",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_872D1321_89B3_8759_41CE_0D96EF5D3F70",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_875AB32F_89B3_87A9_41DE_30C701D78800",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8748533F_89B3_87A9_41DF_9EDC8E1CA3B3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8777334D_89B3_87EE_418B_378CF2E55BDF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8764C35B_89B3_87EA_41D4_6AC4979A0FD2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8690136A_89B3_87AA_41D1_BDBCB7139F12",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.66,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8681E378_89B3_87B6_41D0_5474961D0096",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.23,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_868F3387_89B3_875A_419B_645B9FEB1D5D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_86BA6395_89B3_877E_41D4_86C0AF608B6D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.49,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_86A823A4_89B3_875E_41A4_B893A332A64B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_86D733B3_89B3_86BA_41CB_45F8F876C636",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_86C493C1_89B3_86D6_41C4_E2F29B3BF06E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 }
], "children": [
 {
  "toolTipPaddingTop": 4,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "paddingLeft": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarHeadShadow": true,
  "minWidth": 100,
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
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
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
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "class": "ViewerArea",
  "left": 0,
  "progressBorderSize": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontStyle": "normal"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "height": 137.15,
  "width": "98.378%",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "gap": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "shadow": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "minHeight": 1,
  "bottom": "1.95%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "backgroundOpacity": 0,
  "layout": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "overflow": "visible",
  "right": "0%",
  "children": [
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "width": 408,
    "height": 90,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "paddingTop": 0,
    "class": "Container",
    "gap": 0,
    "overflow": "visible",
    "scrollBarWidth": 10,
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "width": 408,
      "height": 90,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "gap": 10,
      "overflow": "visible",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "height": 90,
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "borderSize": 0,
        "scrollBarVisible": "always",
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 9,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "top": "-1.37%",
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "shadow": false,
        "minHeight": 1,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarWidth": 10,
        "overflow": "visible",
        "left": "0%",
        "right": "0%",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "scrollBarOpacity": 0.5,
          "width": 94,
          "height": 90,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarColor": "#000000",
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "gap": 0,
          "overflow": "visible",
          "scrollBarWidth": 10,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "width": 63,
            "height": 63,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "gap": 10,
            "overflow": "visible",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "paddingLeft": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 63,
              "height": 63,
              "maxHeight": 746,
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Image",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "height": 21,
            "width": "100%",
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "gap": 10,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           }
          ],
          "scrollBarMargin": 2
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "scrollBarOpacity": 0.5,
          "width": 94,
          "height": 90,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarColor": "#000000",
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "gap": 0,
          "overflow": "visible",
          "scrollBarWidth": 10,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "width": 63,
            "height": 63,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "gap": 10,
            "overflow": "visible",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "paddingLeft": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Image",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "height": 21,
            "width": "100%",
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "gap": 10,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           }
          ],
          "scrollBarMargin": 2
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "scrollBarOpacity": 0.5,
          "width": 94,
          "height": 90,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "scrollBarColor": "#000000",
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "gap": 0,
          "overflow": "visible",
          "scrollBarWidth": 10,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "width": 63,
            "height": 63,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "gap": 10,
            "overflow": "visible",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "paddingLeft": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Image",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "scrollBarOpacity": 0.5,
            "height": 21,
            "width": "100%",
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "scrollBarColor": "#000000",
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "gap": 10,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarWidth": 10,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "paddingTop": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ],
            "scrollBarMargin": 2
           }
          ],
          "scrollBarMargin": 2
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     }
    ],
    "scrollBarMargin": 2
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": 42,
    "width": "100%",
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "paddingTop": 0,
    "gap": 10,
    "class": "Container",
    "overflow": "scroll",
    "scrollBarWidth": 10,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": 42,
      "width": "33.33%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "visible",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "width": 35,
        "height": 35,
        "maxHeight": 84,
        "paddingLeft": 0,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "maxWidth": 84,
        "shadow": false,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "IconButton",
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png"
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": 42,
      "width": "33.33%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_71C7C7ED_7FD2_E9D7_4170_C42954483082",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "visible",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "top",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "width": 27,
        "height": 27,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "left",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "backgroundOpacity": 0,
        "layout": "absolute",
        "paddingTop": 0,
        "class": "Container",
        "gap": 10,
        "overflow": "visible",
        "scrollBarWidth": 10,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 27,
          "height": 27,
          "maxHeight": 509,
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "right": "-1.96%"
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 509,
          "width": "100%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "left": "0%"
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": 42,
      "width": "33.33%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "visible",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarMargin": 2
   }
  ],
  "scrollBarMargin": 2
 },
 {
  "verticalAlign": "top",
  "paddingRight": 0,
  "height": "96.96%",
  "width": "98.794%",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "gap": 3,
  "borderRadius": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "shadow": false,
  "scrollBarColor": "#000000",
  "visible": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "backgroundOpacity": 0,
  "layout": "absolute",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "overflow": "hidden",
  "right": "0%",
  "children": [
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "width": 38.1,
    "height": "99.332%",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "shadow": false,
    "minHeight": 1,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "visible",
    "left": 14,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "left": "0%"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "right": "-2.13%"
     }
    ],
    "scrollBarMargin": 2
   },
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "width": 1638,
    "height": 335,
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 9,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "0.06%",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "shadow": false,
    "minHeight": 1,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "visible",
    "left": "0%",
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "maxWidth": 108,
      "top": "0.1%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "left": "1.17%"
     }
    ],
    "scrollBarMargin": 2
   },
   {
    "toolTipShadowOpacity": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "progressBarOpacity": 1,
    "paddingLeft": 0,
    "playbackBarHeadWidth": 6,
    "playbackBarHeight": 10,
    "playbackBarProgressBorderSize": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "minWidth": 1,
    "playbackBarHeadShadow": true,
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
    "toolTipFontColor": "#606060",
    "transitionMode": "blending",
    "paddingTop": 0,
    "progressHeight": 10,
    "playbackBarHeadShadowHorizontalLength": 0,
    "playbackBarBorderRadius": 0,
    "playbackBarProgressBorderColor": "#000000",
    "toolTipPaddingRight": 6,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "toolTipBorderRadius": 3,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "progressLeft": 0,
    "progressBackgroundColorRatios": [
     0
    ],
    "width": 400,
    "playbackBarHeadBorderRadius": 0,
    "playbackBarBorderColor": "#FFFFFF",
    "playbackBarHeadShadowBlurRadius": 3,
    "height": 255,
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "playbackBarHeadBorderColor": "#000000",
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
    "playbackBarProgressOpacity": 1,
    "playbackBarOpacity": 1,
    "playbackBarHeadShadowColor": "#000000",
    "progressRight": 0,
    "playbackBarHeadBorderSize": 0,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "top": "29.81%",
    "minHeight": 1,
    "playbackBarHeadOpacity": 1,
    "progressOpacity": 1,
    "progressBackgroundColorDirection": "vertical",
    "progressBarBorderColor": "#000000",
    "progressBarBackgroundColorDirection": "vertical",
    "id": "ViewerAreaLabeled_8414104F_8971_81EA_41A7_5263E0F3DAF7",
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipShadowHorizontalLength": 0,
    "progressBorderColor": "#000000",
    "toolTipFontFamily": "Arial",
    "playbackBarBottom": 0,
    "class": "ViewerArea",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "left": "1.31%",
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "progressBorderSize": 0,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "toolTipPaddingTop": 4,
    "toolTipFontStyle": "normal"
   }
  ],
  "scrollBarMargin": 2
 },
 {
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "height": "100%",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "width": "100%",
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "class": "Container",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarWidth": 10,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "paddingLeft": 0,
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
    "paddingTop": 0,
    "class": "Image",
    "left": -0.04
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": "88.587%",
    "width": "60.736%",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "top": "2.62%",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "shadow": false,
    "minHeight": 1,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "overflow": "scroll",
    "left": "18.69%",
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "10.152%",
      "width": "92.083%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "children": [
       {
        "paddingRight": 0,
        "height": "73.333%",
        "maxHeight": 61,
        "width": "79.193%",
        "paddingLeft": 0,
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
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "1.764%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "7.327%",
      "width": "99.94%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "visible",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "86.667%",
        "width": "99.901%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 6,
        "class": "Container",
        "overflow": "visible",
        "scrollBarWidth": 10,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.55%",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarVisible": "rollOver",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "scrollBarColor": "#000000",
          "contentOpaque": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "scrollBarWidth": 10,
          "class": "Container",
          "overflow": "scroll",
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "maxHeight": 108,
            "width": "95.833%",
            "paddingLeft": 0,
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
            "paddingTop": 0,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "scrollBarMargin": 2
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.549%",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarVisible": "rollOver",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "scrollBarColor": "#000000",
          "contentOpaque": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "scrollBarWidth": 10,
          "class": "Container",
          "overflow": "scroll",
          "children": [
           {
            "paddingRight": 0,
            "height": "96%",
            "maxHeight": 108,
            "width": "95.83%",
            "paddingLeft": 0,
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
            "paddingTop": 0,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "scrollBarMargin": 2
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "scrollBarOpacity": 0.5,
          "height": "97.297%",
          "width": "46.753%",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "scrollBarColor": "#000000",
          "contentOpaque": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "gap": 10,
          "class": "Container",
          "overflow": "scroll",
          "scrollBarWidth": 10,
          "children": [
           {
            "paddingRight": 0,
            "height": "70.59%",
            "maxHeight": 40,
            "width": "99.138%",
            "paddingLeft": 0,
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
            "paddingTop": 0,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "scrollBarMargin": 2
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "1.227%",
      "width": "99.858%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarWidth": 10,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "paddingLeft": 0,
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
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "4.417%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 5,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "13.477%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "width": "86.03%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "14.091%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "97.183%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "39.063%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "width": "99.491%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "15.139%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "visible",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "width": 30,
          "height": "100%",
          "maxHeight": 300,
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "7.276%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "visible",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "97.67%",
        "width": "83.008%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "64.407%",
          "maxHeight": 49,
          "width": "87.799%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "2.454%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarWidth": 10,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "paddingLeft": 0,
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
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "6.937%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 4,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "62.5%",
        "width": "13.505%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "width": "86.03%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "12.891%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "83.33%",
          "maxHeight": 222,
          "width": "85.42%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "67.857%",
        "width": "54.618%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "84.211%",
          "maxHeight": 41,
          "width": "83.455%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "5.834%",
      "width": "100%",
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "gap": 10,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarWidth": 10,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "width": "33.984%",
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "scrollBarColor": "#000000",
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "gap": 10,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarWidth": 10,
        "children": [
         {
          "paddingRight": 0,
          "height": "70.833%",
          "maxHeight": 44,
          "width": "86.842%",
          "paddingLeft": 0,
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
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "scrollBarMargin": 2
       }
      ],
      "scrollBarMargin": 2
     }
    ],
    "scrollBarMargin": 2
   },
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "height": "12.935%",
    "width": "100%",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "0%",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "shadow": false,
    "minHeight": 1,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "overflow": "scroll",
    "left": "0%",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 31,
      "height": 29,
      "maxHeight": 72,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "left": "3.02%"
     }
    ],
    "scrollBarMargin": 2
   }
  ]
 },
 {
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "paddingLeft": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 1,
  "playbackBarHeadShadow": true,
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
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "width": 342,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "height": 218,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderColor": "#000000",
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
  "playbackBarProgressOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": "4.57%",
  "minHeight": 1,
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "id": "ViewerAreaLabeled_87E2108F_89B1_8169_41C7_EAE1D1B1BA63",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 0,
  "class": "ViewerArea",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": "4.64%",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal"
 }
], 
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Player",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "width": "100%",
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_87266063_89B3_81DA_41E0_1B0A315E6D4D.set('selectedIndex', 0); this.playList_87265063_89B3_81DA_41D2_905DE307311D.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)"
})