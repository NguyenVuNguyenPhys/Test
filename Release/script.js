TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
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
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "mapLocations": [
   {
    "x": 262.97,
    "class": "PanoramaMapLocation",
    "y": 114.95,
    "angle": 114.15,
    "map": {
     "maximumZoomFactor": 1,
     "overlays": [
      {
       "id": "overlay_BC8E2140_AB58_64EC_41B6_0D6A85AAD76A",
       "map": {
        "offsetY": 0,
        "x": 797.89,
        "width": 31,
        "y": 198.88,
        "height": 31,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 15,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_90_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 797.89,
        "class": "HotspotMapOverlayImage",
        "y": 198.88,
        "width": 31,
        "height": 31,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 31,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_90.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E5141_AB58_64EC_41E4_5DED9DF83AAB",
       "map": {
        "offsetY": 0,
        "x": 763.83,
        "width": 31,
        "y": 197.92,
        "height": 31.88,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 15,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_91_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 763.83,
        "class": "HotspotMapOverlayImage",
        "y": 197.92,
        "width": 31,
        "height": 31.88,
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 31,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_91.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E6141_AB58_64EC_41D1_D859349367CC",
       "map": {
        "offsetY": 0,
        "x": 248.97,
        "width": 28,
        "y": 101.95,
        "height": 26,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 14,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_93_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 248.97,
        "class": "HotspotMapOverlayImage",
        "y": 101.95,
        "width": 28,
        "height": 26,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 28,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_93.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E7141_AB58_64EC_41CA_A08DD81B0EAB",
       "map": {
        "offsetY": 0,
        "x": 298.99,
        "width": 23,
        "y": 117.98,
        "height": 26,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 11,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_94_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 298.99,
        "class": "HotspotMapOverlayImage",
        "y": 117.98,
        "width": 23,
        "height": 26,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 23,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_94.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E8141_AB58_64EC_41DD_81939352E9B0",
       "map": {
        "offsetY": 0,
        "x": 336,
        "width": 29,
        "y": 128.99,
        "height": 28,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 14,
           "width": 14,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_95_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 336,
        "class": "HotspotMapOverlayImage",
        "y": 128.99,
        "width": 29,
        "height": 28,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 29,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_95.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E9141_AB58_64EC_41A8_AD33FE8A8D00",
       "map": {
        "offsetY": 0,
        "x": 379,
        "width": 26.99,
        "y": 147.98,
        "height": 26,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_96_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 379,
        "class": "HotspotMapOverlayImage",
        "y": 147.98,
        "width": 26.99,
        "height": 26,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_96.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8EA141_AB58_64EC_41E2_6E24F3A0937C",
       "map": {
        "offsetY": 0,
        "x": 420.96,
        "width": 25.92,
        "y": 165.93,
        "height": 24,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_97_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 420.96,
        "class": "HotspotMapOverlayImage",
        "y": 165.93,
        "width": 25.92,
        "height": 24,
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 25,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_97.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8EB141_AB58_64EC_41CB_A29A953DF96E",
       "map": {
        "offsetY": 0,
        "x": 461.96,
        "width": 24.85,
        "y": 185.95,
        "height": 22,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 11,
           "width": 12,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_98_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 461.96,
        "class": "HotspotMapOverlayImage",
        "y": 185.95,
        "width": 24.85,
        "height": 22,
        "image": {
         "levels": [
          {
           "height": 22,
           "width": 24,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_98.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8EC141_AB58_64EC_41BA_47DCECFA8535",
       "map": {
        "offsetY": 0,
        "x": 512.94,
        "width": 27,
        "y": 203.98,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_99_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 512.94,
        "class": "HotspotMapOverlayImage",
        "y": 203.98,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_99.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8ED141_AB58_64EC_41E2_A456B0E44E97",
       "map": {
        "offsetY": 0,
        "x": 548.99,
        "width": 27,
        "y": 178.93,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_100_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 548.99,
        "class": "HotspotMapOverlayImage",
        "y": 178.93,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_100.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8EE141_AB58_64EC_41DC_2FC3E9B341DD",
       "map": {
        "offsetY": 0,
        "x": 537.98,
        "width": 27,
        "y": 112.96,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_101_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 537.98,
        "class": "HotspotMapOverlayImage",
        "y": 112.96,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_101.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8EF141_AB58_64EC_41D9_1DCD680BEF77",
       "map": {
        "offsetY": 0,
        "x": 579.95,
        "width": 27,
        "y": 199.99,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_102_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 579.95,
        "class": "HotspotMapOverlayImage",
        "y": 199.99,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_102.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F0141_AB58_64EC_41D1_288B9E4B2684",
       "map": {
        "offsetY": 0,
        "x": 634.99,
        "width": 27,
        "y": 199.99,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_103_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 634.99,
        "class": "HotspotMapOverlayImage",
        "y": 199.99,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_103.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F1141_AB58_64EF_41D6_83D0FB2E0046",
       "map": {
        "offsetY": 0,
        "x": 689.95,
        "width": 27,
        "y": 197.99,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_104_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 689.95,
        "class": "HotspotMapOverlayImage",
        "y": 197.99,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_104.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F2142_AB58_64EC_41DF_298BBE8144A6",
       "map": {
        "offsetY": 0,
        "x": 728,
        "width": 27,
        "y": 198.95,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_105_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 728,
        "class": "HotspotMapOverlayImage",
        "y": 198.95,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_105.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F3142_AB58_64EC_41E0_FCE4701D1CC4",
       "map": {
        "offsetY": 0,
        "x": 582.97,
        "width": 27,
        "y": 357.94,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_106_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 582.97,
        "class": "HotspotMapOverlayImage",
        "y": 357.94,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_106.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F4142_AB58_64EC_41D5_8807E94CA3DB",
       "map": {
        "offsetY": 0,
        "x": 567.98,
        "width": 27,
        "y": 320.93,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_107_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 567.98,
        "class": "HotspotMapOverlayImage",
        "y": 320.93,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_107.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F5142_AB58_64EC_41D8_860EBDCE16EE",
       "map": {
        "offsetY": 0,
        "x": 572.93,
        "width": 27,
        "y": 275.94,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_108_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 572.93,
        "class": "HotspotMapOverlayImage",
        "y": 275.94,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_108.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F6142_AB58_64EC_41D3_17C52E4AAD2C",
       "map": {
        "offsetY": 0,
        "x": 575,
        "width": 27,
        "y": 253.99,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_109_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 575,
        "class": "HotspotMapOverlayImage",
        "y": 253.99,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_109.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F7142_AB58_64EC_41D6_C78130A4C4FF",
       "map": {
        "offsetY": 0,
        "x": 474.96,
        "width": 27,
        "y": 304.97,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_110_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 474.96,
        "class": "HotspotMapOverlayImage",
        "y": 304.97,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_110.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F8142_AB58_64EC_41DE_39D63B14655E",
       "map": {
        "offsetY": 0,
        "x": 504,
        "width": 27,
        "y": 287.98,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_111_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 504,
        "class": "HotspotMapOverlayImage",
        "y": 287.98,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_111.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8F9142_AB58_64EC_41C0_8D4F6696BE02",
       "map": {
        "offsetY": 0,
        "x": 545.96,
        "width": 27,
        "y": 286.94,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_112_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 545.96,
        "class": "HotspotMapOverlayImage",
        "y": 286.94,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_112.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_BC8E1142_AB58_64EC_41DB_E39A50A5E002",
       "map": {
        "offsetY": 0,
        "x": 529.93,
        "width": 27,
        "y": 250.97,
        "height": 27,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_113_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 529.93,
        "class": "HotspotMapOverlayImage",
        "y": 250.97,
        "width": 27,
        "height": 27,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_HS_113.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayInsideColor": "#97004E",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "width": 1021,
     "id": "map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
     "height": 652,
     "minimumZoomFactor": 1,
     "initialZoomFactor": 1,
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_t.png",
     "fieldOfViewOverlayRadiusScale": 0.05,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "scaleMode": "fit_to_height",
     "class": "Map"
    }
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.2,
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
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.74
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_B3D8D65B_AB58_AC9C_41E4_E0EC63E0C009); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.2,
        "yaw": 2.71,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.74
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
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
  "label": "C01",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
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
   "paddingLeft": 0,
   "shadow": false,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "progressBarOpacity": 1,
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressBackgroundOpacity": 1,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
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
   "minWidth": 683,
   "toolTipShadowSpread": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 683,
   "height": 436,
   "minHeight": 436,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 10,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressHeight": 10,
   "left": 18,
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
  "mapLocations": [
   {
    "x": 310.49,
    "class": "PanoramaMapLocation",
    "y": 130.98,
    "angle": 118.81,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.06,
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
        "yaw": 2.66,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.65
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_BCB4E53F_AB58_AC94_41B2_716DDA1CF1EE); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.06,
        "yaw": 2.66,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.65
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.74,
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
        "yaw": -179.81,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.94
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_BCAA1531_AB58_ACAC_41BB_A88454449662); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.74,
        "yaw": -179.81,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.94
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
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
  "label": "C02",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
  "mapLocations": [
   {
    "x": 350.5,
    "class": "PanoramaMapLocation",
    "y": 142.99,
    "angle": 289.92,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.78,
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
        "yaw": 179.91,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.32
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_BC9E24F8_AB58_AD9C_41D9_0E217261988C); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.78,
        "yaw": 179.91,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.32
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.98,
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
        "yaw": 1.93,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.36
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_BC9414EA_AB58_ADBC_41A6_F8FF3695C3DA); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.98,
        "yaw": 1.93,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.36
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
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
  "label": "C03",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
  "mapLocations": [
   {
    "x": 392.49,
    "class": "PanoramaMapLocation",
    "y": 160.98,
    "angle": 114.78,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.04,
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
        "yaw": -179.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.96
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_B2F74447_AB58_ACF3_41E2_B212500A938D); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.04,
        "yaw": -179.87,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.96
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.5,
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
        "yaw": -1.54,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.8
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_B2E16439_AB58_AC9F_41E2_8F9A78A1A172); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.5,
        "yaw": -1.54,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.8
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
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
  "label": "C04",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
  "mapLocations": [
   {
    "x": 433.92,
    "class": "PanoramaMapLocation",
    "y": 177.93,
    "angle": 291.13,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.01,
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
        "yaw": -177.15,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.71
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_BC8E94CD_AB58_ADF7_41D7_373EEC7C15C9); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.01,
        "yaw": -177.15,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.71
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.22,
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
        "yaw": -1.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.99
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_BC8874DB_AB58_AD9C_41CE_6EEA41A35D56); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -1.42,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.99
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
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
  "label": "C05",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
  "mapLocations": [
   {
    "x": 474.39,
    "class": "PanoramaMapLocation",
    "y": 196.95,
    "angle": 112.99,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.08,
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
        "yaw": -179.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.13
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_B3EFA669_AB58_ACBC_41C9_705DB31DDC05); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.08,
        "yaw": -179.79,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.13
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.22,
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
        "yaw": 5.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.93
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B3F2E677_AB58_AC94_41E0_F78BC4798A27); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": 5.64,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.93
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
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
  "label": "C06",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
  "mapLocations": [
   {
    "x": 526.44,
    "class": "PanoramaMapLocation",
    "y": 217.48,
    "angle": 24.78,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.22,
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
        "yaw": -91.86,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.01
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_B31D65FA_AB58_AF9C_41A3_646E855EE8D6); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -91.86,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.01
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.14,
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
        "yaw": 11.96,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.45
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B3230608_AB58_AC7C_41BB_AC152F8BBBE0); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": 11.96,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.45
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.24,
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
        "yaw": 163.21,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.18
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B32BA616_AB58_AC94_41E3_250F17589E06); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.24,
        "yaw": 163.21,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.18
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
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
  "label": "C07",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
  "mapLocations": [
   {
    "x": 562.49,
    "class": "PanoramaMapLocation",
    "y": 192.43,
    "angle": 176.22,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.23,
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
        "yaw": -168.2,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_BCA0C522_AB58_ACAC_41E0_9A27835FD76A); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.23,
        "yaw": -168.2,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.92,
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
        "yaw": -36.3,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.01
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_BCA41514_AB58_AC94_41D9_3B6E64BE0C5F); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.92,
        "yaw": -36.3,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.01
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.36,
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
        "yaw": 30.75,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.5
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_BC9AF506_AB58_AC74_41C7_71AD1BE9CA62); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.36,
        "yaw": 30.75,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.5
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
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
  "label": "C08",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
  "mapLocations": [
   {
    "x": 551.48,
    "class": "PanoramaMapLocation",
    "y": 126.46,
    "angle": 34.51,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.5,
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
        "yaw": 130.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.71
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_BCB0954D_AB58_ACF4_41CA_D18D19D7B115); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.5,
        "yaw": 130.87,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.71
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
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
  "label": "C09",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
  "mapLocations": [
   {
    "x": 593.45,
    "class": "PanoramaMapLocation",
    "y": 213.49,
    "angle": 90,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.23,
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
        "yaw": -138.38,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.68
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B2858464_AB58_ACB4_41D1_D3B04CD61912); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.23,
        "yaw": -138.38,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.68
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.14,
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
        "yaw": -1.2,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.42
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_BC82C4BF_AB58_AD94_41DC_D5E6035F1A74); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": -1.2,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.42
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.12,
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
        "yaw": 78.56,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.93
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B2887473_AB58_ACAC_41A4_7E74E266B0DF); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.12,
        "yaw": 78.56,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.93
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
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
  "label": "C10",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
  "mapLocations": [
   {
    "x": 648.49,
    "class": "PanoramaMapLocation",
    "y": 213.49,
    "angle": -82.09,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.95,
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
        "yaw": 1.16,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.05
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B256E6E7_AB58_ADB3_41D6_F39BB2980CC0); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.95,
        "yaw": 1.16,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.05
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.75,
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
        "yaw": -179.89,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.83
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B25DE6F7_AB58_AD92_41DF_2B3C998E187B); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.75,
        "yaw": -179.89,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.83
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
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
  "label": "C11",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
  "mapLocations": [
   {
    "x": 703.45,
    "class": "PanoramaMapLocation",
    "y": 211.49,
    "angle": 274.9,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.14,
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
        "yaw": 0.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.53
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B3AAB6BE_AB58_AD95_41E4_88E3B38A876F); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": 0.64,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.53
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.47,
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
        "yaw": 167.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.2
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B39996B0_AB58_ADAC_41B3_DE979011CD34); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.47,
        "yaw": 167.51,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -25.2
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
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
  "label": "C12",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
  "mapLocations": [
   {
    "x": 741.5,
    "class": "PanoramaMapLocation",
    "y": 212.45,
    "angle": 91.55,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.95,
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
        "yaw": 0.65,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.08
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B2D8442B_AB58_ACB3_41D0_C154AF1F3F9B); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.95,
        "yaw": 0.65,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.08
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 10.14,
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
        "yaw": 176.12,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.57
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B2D2441D_AB58_AC97_41BF_7A37D14D3FE9); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.14,
        "yaw": 176.12,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.57
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
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
  "label": "C13",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
  "mapLocations": [
   {
    "x": 779.33,
    "class": "PanoramaMapLocation",
    "y": 213.86,
    "angle": 83.66,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.08,
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
        "yaw": 178.92,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.01
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B38E0694_AB58_AD94_41E1_4C28406A3BC3); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.08,
        "yaw": 178.92,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.01
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.12,
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
        "yaw": 0.43,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.99
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_B39346A2_AB58_ADAC_4183_0A3AB66F5394); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.12,
        "yaw": 0.43,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.99
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
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
  "label": "C14",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
  "mapLocations": [
   {
    "x": 813.39,
    "class": "PanoramaMapLocation",
    "y": 214.38,
    "angle": 264.59,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.1,
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
        "yaw": 0.3,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.54
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B3318624_AB58_ACB4_41B4_7DB919F3C8E4); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.1,
        "yaw": 0.3,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.54
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
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
  "label": "C15",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
  "mapLocations": [
   {
    "x": 543.43,
    "class": "PanoramaMapLocation",
    "y": 264.47,
    "angle": 14.04,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.22,
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
        "yaw": -172.45,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.04
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B34E4577_AB58_AC93_41B2_69ACB7292689); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -172.45,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.04
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.21,
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
        "yaw": -20.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.3
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B347E569_AB58_ACBF_4165_11390C6191AA); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.21,
        "yaw": -20.33,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.3
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.93,
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
        "yaw": 101.34,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.37
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_BCBA855B_AB58_AC93_41C8_8EF78AFD0F7B); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.93,
        "yaw": 101.34,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -17.37
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
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
  "label": "C16",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
  "mapLocations": [
   {
    "x": 588.5,
    "class": "PanoramaMapLocation",
    "y": 267.49,
    "angle": -2.86,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.05,
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
        "yaw": -93.19,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.74
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B37065BF_AB58_AF93_41CD_A6D57DD3BA9C); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.05,
        "yaw": -93.19,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.74
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.25,
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
        "yaw": 155.68,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.65
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B36A45B1_AB58_AFAF_41D9_B5C743BC394E); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.25,
        "yaw": 155.68,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.65
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.11,
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
        "yaw": 37.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.25
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B36515A2_AB58_AFAD_41BD_621E8C686E53); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.11,
        "yaw": 37.47,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.25
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
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
  "label": "C17",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
  "mapLocations": [
   {
    "x": 586.43,
    "class": "PanoramaMapLocation",
    "y": 289.44,
    "angle": 170.61,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.16,
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
        "yaw": 4.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.86
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B3BEC6CB_AB58_ADF3_41DD_0B50D85D273E); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.16,
        "yaw": 4.5,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.86
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.19,
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
        "yaw": -162.77,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.1
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B245D6D9_AB58_AD9F_41E1_7CAD4512FDDE); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.19,
        "yaw": -162.77,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.1
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
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
  "label": "C18",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
  "mapLocations": [
   {
    "x": 581.48,
    "class": "PanoramaMapLocation",
    "y": 334.43,
    "angle": 0,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.18,
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
        "yaw": -36.03,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.37
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B30EF5DE_AB58_AF94_41D2_02AAFDF057DA); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.18,
        "yaw": -36.03,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.37
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.21,
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
        "yaw": 26.17,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.26
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B31735EC_AB58_AFB4_41C5_73C005B65976); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.21,
        "yaw": 26.17,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.26
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.06,
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
        "yaw": 163.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.17
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_B378E5CE_AB58_AFF4_41DF_06CBFBB238D4); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.06,
        "yaw": 163.47,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.17
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
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
  "label": "C19",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
  "mapLocations": [
   {
    "x": 596.47,
    "class": "PanoramaMapLocation",
    "y": 371.44,
    "angle": 154.54,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9.22,
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
        "yaw": -179.2,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.77
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B3FA9685_AB58_AC74_41E3_C3EE8CE059F6); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -179.2,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.77
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
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
  "label": "C20",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
  "mapLocations": [
   {
    "x": 488.46,
    "class": "PanoramaMapLocation",
    "y": 318.47,
    "angle": 242.01,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 10.65,
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
        "yaw": -178.92,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.66
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B2FFC456_AB58_AC94_41D0_CAE4F5FBB0EE); this.mainPlayList.set('selectedIndex', 21)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.65,
        "yaw": -178.92,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.66
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
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
  "label": "C21",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
  "mapLocations": [
   {
    "x": 517.5,
    "class": "PanoramaMapLocation",
    "y": 301.48,
    "angle": 74.74,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.82,
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
        "yaw": -178.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.23
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_B35F3594_AB58_AF95_4182_9E5E7BB53B0D); this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.82,
        "yaw": -178.42,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.23
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 9,
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
        "yaw": 23.25,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.12
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B3495586_AB58_AC75_41CA_1AEB4FB27D48); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9,
        "yaw": 23.25,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.12
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
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
  "label": "C22",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
 {
  "vfov": 180,
  "cardboardMenu": "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
  "mapLocations": [
   {
    "x": 559.46,
    "class": "PanoramaMapLocation",
    "y": 300.44,
    "angle": 151.39,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.68,
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
        "yaw": -166.65,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.17
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B3C68632_AB58_ACAC_41DB_6CD0F27958A5); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.68,
        "yaw": -166.65,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.17
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 6.47,
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
        "yaw": -6.22,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.72
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B3CCB63F_AB58_AC94_41DF_23D03998B198); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 6.47,
        "yaw": -6.22,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.72
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 8.15,
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
        "yaw": 87.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.88
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B3D3F64D_AB58_ACF4_41D3_F8BA81135C1D); this.mainPlayList.set('selectedIndex', 21)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.15,
        "yaw": 87.5,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.88
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
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
  "label": "C23",
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama"
 },
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
    "id": "PanoramaPlayListItem_B21D63E4_AB58_ABB5_41B1_CC889DDB7C5C",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21D63E4_AB58_ABB5_41B1_CC889DDB7C5C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "id": "PanoramaPlayListItem_B21DB3E4_AB58_ABB6_41C7_2C2D0C7318E1",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21DB3E4_AB58_ABB6_41C7_2C2D0C7318E1, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera"
   },
   {
    "id": "PanoramaPlayListItem_B21AF3E5_AB58_ABB7_41DD_6C8E65EBCD54",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21AF3E5_AB58_ABB7_41DD_6C8E65EBCD54, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "id": "PanoramaPlayListItem_B21B33E6_AB58_ABB5_41D9_C29A4A58D174",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21B33E6_AB58_ABB5_41D9_C29A4A58D174, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "id": "PanoramaPlayListItem_B21863EA_AB58_ABBD_41BE_861FE1C672C8",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21863EA_AB58_ABBD_41BE_861FE1C672C8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "id": "PanoramaPlayListItem_B21883EA_AB58_ABBD_41CC_E55BE1CF3BE0",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B21883EA_AB58_ABBD_41CC_E55BE1CF3BE0, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "id": "PanoramaPlayListItem_B219D3EB_AB58_ABB3_41D0_6E38223050E1",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B219D3EB_AB58_ABB3_41D0_6E38223050E1, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22613EB_AB58_ABB3_41CA_E87BD44A6FB9",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22613EB_AB58_ABB3_41CA_E87BD44A6FB9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22733EC_AB58_ABB5_41D6_385FD745DE35",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22733EC_AB58_ABB5_41D6_385FD745DE35, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22793EC_AB58_ABB5_41C6_6D0EBF9AF47F",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22793EC_AB58_ABB5_41C6_6D0EBF9AF47F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22483ED_AB58_ABB7_41DD_7FE1278FD390",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22483ED_AB58_ABB7_41DD_7FE1278FD390, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "id": "PanoramaPlayListItem_B225C3EE_AB58_ABB5_41D9_20C0C86A8757",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B225C3EE_AB58_ABB5_41D9_20C0C86A8757, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22233EE_AB58_ABB5_41A0_2A2B09D534E8",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22233EE_AB58_ABB5_41A0_2A2B09D534E8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22363EF_AB58_ABB3_41DC_5A2BF252AE4C",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22363EF_AB58_ABB3_41DC_5A2BF252AE4C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_B223B3EF_AB58_ABB3_41D0_7963088ED485",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B223B3EF_AB58_ABB3_41D0_7963088ED485, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "id": "PanoramaPlayListItem_B220F3F0_AB58_ABAD_41B7_A54F52B3E5D9",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B220F3F0_AB58_ABAD_41B7_A54F52B3E5D9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22113F1_AB58_ABAF_41D7_E71A75AC2CEE",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22113F1_AB58_ABAF_41D7_E71A75AC2CEE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22E53F1_AB58_ABAF_41D3_56C621FF4B42",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22E53F1_AB58_ABAF_41D3_56C621FF4B42, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22E83F2_AB58_ABAD_41E0_23E84C2893B8",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22E83F2_AB58_ABAD_41E0_23E84C2893B8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22C13F2_AB58_ABAD_41C9_9E93A6394E98",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22C13F2_AB58_ABAD_41C9_9E93A6394E98, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22D43F3_AB58_AB93_41E2_0FC76827934F",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22D43F3_AB58_AB93_41E2_0FC76827934F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22D93F3_AB58_AB93_41D0_3CB04A6604CA",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22D93F3_AB58_AB93_41D0_3CB04A6604CA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "id": "PanoramaPlayListItem_B22AA3F4_AB58_AB95_41E1_C04AC535E6F2",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B22AA3F4_AB58_AB95_41E1_C04AC535E6F2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
 {
  "id": "playList_B21F93DE_AB58_AB95_41DE_4FA1B6CC5D29",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_B22BC3F4_AB58_AB95_41B0_B1A44808A870",
 {
  "id": "camera_B2D2441D_AB58_AC97_41BF_7A37D14D3FE9",
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
  "id": "camera_B2D8442B_AB58_ACB3_41D0_C154AF1F3F9B",
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
  "id": "camera_B2E16439_AB58_AC9F_41E2_8F9A78A1A172",
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
  "id": "camera_B2F74447_AB58_ACF3_41E2_B212500A938D",
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
  "id": "camera_B2FFC456_AB58_AC94_41D0_CAE4F5FBB0EE",
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
  "id": "camera_B2858464_AB58_ACB4_41D1_D3B04CD61912",
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
  "id": "camera_B2887473_AB58_ACAC_41A4_7E74E266B0DF",
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
  "id": "camera_BC82C4BF_AB58_AD94_41DC_D5E6035F1A74",
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
  "id": "camera_BC8E94CD_AB58_ADF7_41D7_373EEC7C15C9",
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
  "id": "camera_BC8874DB_AB58_AD9C_41CE_6EEA41A35D56",
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
  "id": "camera_BC9414EA_AB58_ADBC_41A6_F8FF3695C3DA",
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
  "id": "camera_BC9E24F8_AB58_AD9C_41D9_0E217261988C",
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
  "id": "camera_BC9AF506_AB58_AC74_41C7_71AD1BE9CA62",
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
  "id": "camera_BCA41514_AB58_AC94_41D9_3B6E64BE0C5F",
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
  "id": "camera_BCA0C522_AB58_ACAC_41E0_9A27835FD76A",
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
  "id": "camera_BCAA1531_AB58_ACAC_41BB_A88454449662",
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
  "id": "camera_BCB4E53F_AB58_AC94_41B2_716DDA1CF1EE",
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
  "id": "camera_BCB0954D_AB58_ACF4_41CA_D18D19D7B115",
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
  "id": "camera_BCBA855B_AB58_AC93_41C8_8EF78AFD0F7B",
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
  "id": "camera_B347E569_AB58_ACBF_4165_11390C6191AA",
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
  "id": "camera_B34E4577_AB58_AC93_41B2_69ACB7292689",
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
  "id": "camera_B3495586_AB58_AC75_41CA_1AEB4FB27D48",
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
  "id": "camera_B35F3594_AB58_AF95_4182_9E5E7BB53B0D",
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
  "id": "camera_B36515A2_AB58_AFAD_41BD_621E8C686E53",
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
  "id": "camera_B36A45B1_AB58_AFAF_41D9_B5C743BC394E",
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
  "id": "camera_B37065BF_AB58_AF93_41CD_A6D57DD3BA9C",
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
 },
 {
  "id": "camera_B378E5CE_AB58_AFF4_41DF_06CBFBB238D4",
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
  "id": "camera_B30EF5DE_AB58_AF94_41D2_02AAFDF057DA",
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
  "id": "camera_B31735EC_AB58_AFB4_41C5_73C005B65976",
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
  "id": "camera_B31D65FA_AB58_AF9C_41A3_646E855EE8D6",
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
  "id": "camera_B3230608_AB58_AC7C_41BB_AC152F8BBBE0",
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
  "id": "camera_B32BA616_AB58_AC94_41E3_250F17589E06",
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
  "id": "camera_B3318624_AB58_ACB4_41B4_7DB919F3C8E4",
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
  "id": "camera_B3C68632_AB58_ACAC_41DB_6CD0F27958A5",
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
  "id": "camera_B3CCB63F_AB58_AC94_41DF_23D03998B198",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B3D3F64D_AB58_ACF4_41D3_F8BA81135C1D",
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
  "id": "camera_B3D8D65B_AB58_AC9C_41E4_E0EC63E0C009",
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
  "id": "camera_B3EFA669_AB58_ACBC_41C9_705DB31DDC05",
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
  "id": "camera_B3F2E677_AB58_AC94_41E0_F78BC4798A27",
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
  "id": "camera_B3FA9685_AB58_AC74_41E3_C3EE8CE059F6",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B38E0694_AB58_AD94_41E1_4C28406A3BC3",
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
  "id": "camera_B39346A2_AB58_ADAC_4183_0A3AB66F5394",
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
  "id": "camera_B39996B0_AB58_ADAC_41B3_DE979011CD34",
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
  "id": "camera_B3AAB6BE_AB58_AD95_41E4_88E3B38A876F",
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
  "id": "camera_B3BEC6CB_AB58_ADF3_41DD_0B50D85D273E",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B245D6D9_AB58_AD9F_41E1_7CAD4512FDDE",
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
  "id": "camera_B256E6E7_AB58_ADB3_41D6_F39BB2980CC0",
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
  "id": "camera_B25DE6F7_AB58_AD92_41DF_2B3C998E187B",
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
 }
], "children": [
 {
  "paddingLeft": 0,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
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
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBottom": 5,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "left": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "paddingRight": 0,
  "gap": 3,
  "width": "98.794%",
  "minHeight": 1,
  "height": "96.96%",
  "borderRadius": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "paddingTop": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "width": 235.1,
    "gap": 10,
    "height": "99.327%",
    "minHeight": 1,
    "borderRadius": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "class": "Container",
    "verticalAlign": "top",
    "top": 0,
    "paddingBottom": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "horizontalAlign": "left",
    "paddingTop": 0,
    "minWidth": 1,
    "left": 14,
    "backgroundOpacity": 0,
    "children": [
     {
      "maxHeight": 145,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "shadow": false,
      "mode": "push",
      "width": 181.7,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "height": 71,
      "minHeight": 1,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "maxWidth": 378,
      "paddingTop": 0,
      "minWidth": 1,
      "left": "2.47%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "width": 1638,
    "gap": 4,
    "height": 436,
    "minHeight": 1,
    "borderRadius": 9,
    "paddingRight": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "class": "Container",
    "verticalAlign": "top",
    "top": "0.06%",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     "this.MapViewer",
     {
      "maxHeight": 145,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "shadow": false,
      "mode": "push",
      "width": 70,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "height": 70,
      "minHeight": 1,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "maxWidth": 145,
      "paddingTop": 0,
      "minWidth": 1,
      "left": "1.16%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "hidden",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "paddingRight": 0,
  "gap": 10,
  "height": 275.05,
  "width": "100%",
  "minHeight": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "vertical",
  "class": "Container",
  "verticalAlign": "bottom",
  "paddingBottom": 0,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "paddingTop": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundOpacity": 0,
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "gap": 10,
    "width": "97.739%",
    "minHeight": 1,
    "height": 181,
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "class": "Container",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "width": 564,
      "gap": 10,
      "height": 181,
      "minHeight": 1,
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "width": 564,
        "height": 167,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "top": "2.21%",
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "paddingTop": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "height": 300,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "width": 564,
        "height": 167,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "top": "2.15%",
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "paddingTop": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "97.619%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "height": 300,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "width": "100%",
        "minHeight": 1,
        "height": "86.188%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "top": "5.47%",
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "paddingTop": 0,
        "minWidth": 1,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "height": 300,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "width": 180,
          "gap": 0,
          "height": 156,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "width": 126,
            "gap": 10,
            "height": 126,
            "minHeight": 1,
            "borderRadius": 0,
            "paddingRight": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "height": 126,
              "minHeight": 1,
              "transparencyActive": false,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "class": "IconButton",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "width": 126,
              "height": 126,
              "minHeight": 1,
              "borderRadius": 0,
              "paddingRight": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "maxWidth": 126,
              "paddingTop": 0,
              "minWidth": 1,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "shadow": false,
            "paddingRight": 0,
            "gap": 10,
            "width": "100%",
            "minHeight": 1,
            "height": 42,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "class": "Container",
            "verticalAlign": "top",
            "paddingBottom": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "shadow": false,
              "fontSize": 18,
              "paddingRight": 0,
              "width": "100%",
              "minHeight": 1,
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "fontStyle": "normal",
              "textDecoration": "none",
              "paddingTop": 0,
              "minWidth": 1,
              "horizontalAlign": "center",
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "gap": 10,
    "width": "97.913%",
    "minHeight": 1,
    "height": 77,
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "class": "Container",
    "verticalAlign": "bottom",
    "paddingBottom": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "33.33%",
      "minHeight": 1,
      "height": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 84,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "shadow": false,
        "mode": "push",
        "width": 70,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "height": 70,
        "minHeight": 1,
        "transparencyActive": false,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "IconButton",
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "cursor": "hand",
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "maxWidth": 84,
        "paddingTop": 0,
        "minWidth": 1,
        "left": "2.45%",
        "backgroundOpacity": 0
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "33.33%",
      "minHeight": 1,
      "height": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "width": 54,
        "gap": 10,
        "height": 54,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "left",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "absolute",
        "class": "Container",
        "verticalAlign": "top",
        "paddingBottom": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 509,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "shadow": false,
          "width": 54,
          "height": 54,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "maxWidth": 509,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "right": "-1.96%"
         },
         {
          "maxHeight": 509,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "shadow": false,
          "width": 54,
          "height": 54,
          "minHeight": 1,
          "borderRadius": 0,
          "paddingRight": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "maxWidth": 509,
          "paddingTop": 0,
          "minWidth": 1,
          "left": "0%",
          "backgroundOpacity": 0
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "33.33%",
      "minHeight": 1,
      "height": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "paddingRight": 0,
  "minHeight": 1,
  "scrollBarColor": "#000000",
  "height": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "verticalAlign": "middle",
  "top": "0%",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "horizontalAlign": "center",
  "paddingTop": 0,
  "minWidth": 1,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingLeft": 0,
    "shadow": false,
    "paddingRight": 0,
    "width": "100%",
    "minHeight": 1,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "borderSize": 0,
    "scaleMode": "fit_outside",
    "class": "Image",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "0%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "width": "95.4%",
    "minHeight": 1,
    "height": "49.24%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "gap": 3,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "class": "Container",
    "verticalAlign": "middle",
    "top": "23.14%",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "91.466%",
      "minHeight": 1,
      "height": "10.817%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "paddingLeft": 0,
        "shadow": false,
        "paddingRight": 0,
        "width": "47.17%",
        "minHeight": 1,
        "height": "65.789%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "maxWidth": 500,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "100%",
      "minHeight": 1,
      "height": "0.613%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "95.69%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 6,
        "width": "69.5%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "10.79%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "100%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "8.63%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "98.889%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "43.969%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "92.63%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "maxWidth": 1000,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.52%",
      "minHeight": 1,
      "height": "3.07%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "width": 726,
        "height": 2,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "shadow": false,
      "scrollBarColor": "#000000",
      "width": "95.22%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "gap": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "11.131%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 45,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "98.485%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "maxWidth": 117,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "13.57%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "97.98%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "maxWidth": 258,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "39.005%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "94.66%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "maxWidth": 408,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "6.977%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "94%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "93.798%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "88.522%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "67.082%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "maxWidth": 734,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "97.61%",
      "minHeight": 1,
      "height": "3.07%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "width": 726,
        "height": 2,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 4,
      "width": "99.914%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "11.389%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "98.99%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "maxWidth": 117,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "6.897%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 222,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "85.612%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "maxWidth": 222,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "41.415%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "99.792%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "95.69%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "29.099%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "97.52%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "gap": 10,
    "width": "100%",
    "minHeight": 1,
    "height": "12.935%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "class": "Container",
    "verticalAlign": "top",
    "top": "0%",
    "paddingBottom": 0,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "maxHeight": 72,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "shadow": false,
      "mode": "push",
      "width": 62,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "height": 58,
      "minHeight": 1,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "maxWidth": 72,
      "paddingTop": 0,
      "minWidth": 1,
      "left": "3.02%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "width": "95.4%",
    "minHeight": 1,
    "height": "49.24%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "gap": 3,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "class": "Container",
    "verticalAlign": "middle",
    "top": "23.14%",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "91.379%",
      "minHeight": 1,
      "height": "10.82%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "paddingLeft": 0,
        "shadow": false,
        "paddingRight": 0,
        "width": "47.17%",
        "minHeight": 1,
        "height": "47.5%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "maxWidth": 500,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "100%",
      "minHeight": 1,
      "height": "0.613%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "95.69%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 6,
        "width": "69.5%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "10.79%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "99.123%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "8.63%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "98.889%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "46.891%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "100%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "maxWidth": 1000,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.52%",
      "minHeight": 1,
      "height": "3.07%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "width": 726,
        "height": 2,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "shadow": false,
      "scrollBarColor": "#000000",
      "width": "95.22%",
      "minHeight": 1,
      "height": "12.5%",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "gap": 3,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "8.714%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 45,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "81.25%",
          "minHeight": 1,
          "height": "95.238%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "maxWidth": 117,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "11.212%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "91.13%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "maxWidth": 258,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "21.881%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "97.93%",
          "minHeight": 1,
          "height": "97.62%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "maxWidth": 408,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "4.973%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "100%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 9,
        "width": "19.078%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "86.73%",
          "minHeight": 1,
          "height": "85.714%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "93.798%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "88.522%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "33.333%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "maxWidth": 734,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "97.61%",
      "minHeight": 1,
      "height": "3.07%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "width": 726,
        "height": 2,
        "minHeight": 1,
        "borderRadius": 0,
        "paddingRight": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 4,
      "width": "99.914%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "8.534%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "77.193%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "maxWidth": 117,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "6.897%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 222,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "85.612%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "maxWidth": 222,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "40.316%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "98.98%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "maxWidth": 459,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "95.69%",
      "minHeight": 1,
      "height": "12.46%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "53.351%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "64%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "paddingRight": 0,
    "width": "63.993%",
    "minHeight": 1,
    "height": "80.657%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "gap": 6,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "class": "Container",
    "verticalAlign": "middle",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "17.25%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "5.77%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "paddingLeft": 0,
        "shadow": false,
        "paddingRight": 0,
        "width": "79.087%",
        "minHeight": 1,
        "height": "68.085%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "maxWidth": 500,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "0.12%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "class": "Container",
      "verticalAlign": "top",
      "paddingBottom": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 0,
      "width": "99.44%",
      "minHeight": 1,
      "height": "4.17%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 0,
        "width": "100%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "9.882%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "80.769%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "9.88%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "100%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "maxWidth": 300,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "shadow": false,
          "paddingRight": 0,
          "gap": 10,
          "width": "52.993%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "class": "Container",
          "verticalAlign": "middle",
          "paddingBottom": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "paddingLeft": 0,
            "shadow": false,
            "paddingRight": 0,
            "width": "100%",
            "minHeight": 1,
            "height": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "maxWidth": 1000,
            "paddingTop": 0,
            "minWidth": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "1.23%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "paddingRight": 0,
        "width": "100%",
        "minHeight": 1,
        "height": "20%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 5,
      "width": "100%",
      "minHeight": 1,
      "height": "4.178%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "36.784%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "99.515%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "12.412%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "97.78%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "maxWidth": 258,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "18.943%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "93.13%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "4.17%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "66.075%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "99.764%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "maxWidth": 800,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 2,
      "width": "99.44%",
      "minHeight": 1,
      "height": "4.17%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "4.213%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "maxWidth": 1000,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "95.45%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "10.118%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "82.14%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "32.594%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "92.89%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "1.35%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "paddingLeft": 0,
        "shadow": false,
        "paddingRight": 0,
        "width": "100%",
        "minHeight": 1,
        "height": "18.18%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "maxWidth": 726,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 0,
      "width": "99.44%",
      "minHeight": 1,
      "height": "4.17%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "33.925%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "92.12%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "8.471%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "maxWidth": 300,
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "89.8%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "maxWidth": 300,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "17.96%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "93.98%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "paddingRight": 0,
      "gap": 10,
      "width": "99.44%",
      "minHeight": 1,
      "height": "4.17%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "class": "Container",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "paddingTop": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "shadow": false,
        "paddingRight": 0,
        "gap": 10,
        "width": "56.984%",
        "minHeight": 1,
        "height": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "class": "Container",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "paddingTop": 0,
        "minWidth": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "paddingLeft": 0,
          "shadow": false,
          "paddingRight": 0,
          "width": "99.78%",
          "minHeight": 1,
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "maxWidth": 1000,
          "paddingTop": 0,
          "minWidth": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "scrollBarVisible": "rollOver"
 }
], 
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 20,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "class": "Player",
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "id": "rootPlayer",
 "paddingTop": 0,
 "minWidth": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B21F93DE_AB58_AB95_41DE_4FA1B6CC5D29.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
})