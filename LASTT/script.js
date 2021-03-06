TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "fontFamily": "Arial",
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedBackgroundColor": "#202020",
   "class": "Menu",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
   "selectedFontColor": "#FFFFFF",
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
   ]
  },
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "x": 310.47,
    "y": 133.23,
    "angle": 115.94,
    "map": {
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
     "height": 652,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_t.png",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 652,
        "width": 1021,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62.png"
       },
       {
        "class": "ImageResourceLevel",
        "height": 326,
        "width": 510,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_lq.png",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.05,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC75E9D_973A_9CF1_41BF_4EB86B8B1803",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 299.01,
        "offsetY": 0,
        "width": 21.5,
        "y": 121.45,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 299.01,
        "y": 121.45,
        "class": "HotspotMapOverlayImage",
        "width": 21.5,
        "height": 21.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 343.76,
        "offsetY": 0,
        "width": 21,
        "y": 140.93,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 343.76,
        "y": 140.93,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 390.86,
        "offsetY": 0,
        "width": 21,
        "y": 159.94,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 390.86,
        "y": 159.94,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 441.55,
        "offsetY": 0,
        "width": 21,
        "y": 182.83,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 441.55,
        "y": 182.83,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 501.54,
        "offsetY": 0,
        "width": 21,
        "y": 202.17,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 501.54,
        "y": 202.17,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 535.02,
        "offsetY": 0,
        "width": 21,
        "y": 216.34,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 535.02,
        "y": 216.34,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 599.62,
        "offsetY": 0,
        "width": 21,
        "y": 246.89,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 599.62,
        "y": 246.89,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 624.09,
        "offsetY": 0,
        "width": 21,
        "y": 207.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.09,
        "y": 207.08,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 622.95,
        "offsetY": 0,
        "width": 21,
        "y": 146.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 622.95,
        "y": 146.32,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 674.15,
        "offsetY": 0,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 674.15,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 735.61,
        "offsetY": 0,
        "width": 21,
        "y": 237.81,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 735.61,
        "y": 237.81,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 800.29,
        "offsetY": 0,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 800.29,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 845.89,
        "offsetY": 0,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 845.89,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 886.76,
        "offsetY": 0,
        "width": 21,
        "y": 241.36,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 886.76,
        "y": 241.36,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC66E9E_973A_9CF3_4188_A666263EFCE3",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 935.07,
        "offsetY": 0,
        "width": 21,
        "y": 239.97,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 935.07,
        "y": 239.97,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 616.43,
        "offsetY": 0,
        "width": 21,
        "y": 298.53,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 616.43,
        "y": 298.53,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 664.19,
        "offsetY": 0,
        "width": 21,
        "y": 304.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 664.19,
        "y": 304.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 662.87,
        "offsetY": 0,
        "width": 21,
        "y": 332.15,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 662.87,
        "y": 332.15,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 658.55,
        "offsetY": 0,
        "width": 21,
        "y": 374.45,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 658.55,
        "y": 374.45,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 672.84,
        "offsetY": 0,
        "width": 21,
        "y": 422.91,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 672.84,
        "y": 422.91,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 624.78,
        "offsetY": 0,
        "width": 21,
        "y": 330.58,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.78,
        "y": 330.58,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 585.56,
        "offsetY": 0,
        "width": 21,
        "y": 343.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 585.56,
        "y": 343.8,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "class": "HotspotMapOverlayMap",
        "x": 558.42,
        "offsetY": 0,
        "width": 21,
        "y": 359.69,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 558.42,
        "y": 359.69,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68.png"
          }
         ]
        }
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "useHandCursor": true
      }
     ],
     "class": "Map",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1,
     "fieldOfViewOverlayOutsideColor": "#00FF99"
    }
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.2,
        "yaw": 2.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 41,
           "width": 65,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.74
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_91F55D48_9D07_057B_41D1_B76EC76CBB26); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 83,
           "width": 130,
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.74
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985.jpeg"
      }
     ]
    }
   }
  ],
  "label": "C01",
  "class": "Panorama",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "pitch": 0,
     "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "x": 356.03,
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.06,
           "yaw": 2.66,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 65,
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -14.65
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_91B60CE7_9D07_0B36_41D2_64937F6DD2BB); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.06,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 130,
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -14.65
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.74,
           "yaw": -179.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 39,
              "width": 65,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.94
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_91BCDCF5_9D07_0B15_41D6_29C772AE6C0C); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -179.81,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 78,
              "width": 130,
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0.png"
             }
            ]
           },
           "pitch": -20.94
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60.jpeg"
         }
        ]
       }
      }
     ],
     "label": "C02",
     "class": "Panorama",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "pitch": 0,
        "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "x": 403.09,
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.78,
              "yaw": 179.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 65,
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -20.32
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_9346EF32_9D07_052E_41D6_2414ABC20437); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "yaw": 179.91,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.78,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 130,
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -20.32
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.98,
              "yaw": 1.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 37,
                 "width": 65,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -17.36
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_93345F1E_9D07_0517_41B4_446F294E7A6B); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "yaw": 1.93,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 74,
                 "width": 130,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -17.36
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg"
            }
           ]
          }
         }
        ],
        "label": "C03",
        "class": "Panorama",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "yaw": 1.93,
          "distance": 1,
          "backwardYaw": 2.66
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "pitch": 0,
           "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "x": 453.77,
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 9.04,
                 "yaw": -179.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 52,
                    "width": 64,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.96
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_90A19E2E_9D07_0736_41BB_427FBE62DC04); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "yaw": -179.87,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 104,
                    "width": 129,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -14.96
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.5,
                 "yaw": -1.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 52,
                    "width": 60,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -11.8
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_90B24E4F_9D07_0776_41B9_085C24A7D1D8); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "yaw": -1.54,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 104,
                    "width": 120,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0.png"
                   }
                  ]
                 },
                 "pitch": -11.8
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg"
               }
              ]
             }
            }
           ],
           "label": "C04",
           "class": "Panorama",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "distance": 1,
             "backwardYaw": 179.91
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "pitch": 0,
              "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "x": 513.69,
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
               }
              ],
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.01,
                    "yaw": -177.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 53,
                       "width": 65,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -15.71
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_93235F06_9D07_06F7_41E0_A396D9CDE708); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -177.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 106,
                       "width": 130,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -15.71
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.22,
                    "yaw": -1.42,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 64,
                       "width": 64,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.99
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_9310EEEE_9D07_0737_41DA_868A99B2C74F); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -1.42,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.22,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 128,
                       "width": 129,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": -9.99
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2500,
                   "width": 5000,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg"
                  }
                 ]
                }
               }
              ],
              "label": "C05",
              "class": "Panorama",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "distance": 1,
                "backwardYaw": -1.54
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "partial": false,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "class": "PanoramaMapLocation",
                   "x": 547.15,
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                  }
                 ],
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.08,
                       "yaw": -179.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 37,
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.13
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_91DB5002_9D07_FAEF_41AC_374602623458); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -179.79,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.08,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 75,
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -14.13
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.22,
                       "yaw": 5.64,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 32,
                          "width": 65,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -9.93
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_91DF0FF4_9D07_052B_41E0_51D5C9B37C66); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 5.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 9.22,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 65,
                          "width": 130,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -9.93
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2500,
                      "width": 5000,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "label": "C06",
                 "class": "Panorama",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "x": 610.91,
                      "y": 258.07,
                      "angle": 25.28,
                      "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                     }
                    ],
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.22,
                          "yaw": -91.86,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 48,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -10.01
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_91EC0D39_9D07_051C_41DC_BE4E250CA94D); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -91.86,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.22,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 96,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png"
                            }
                           ]
                          },
                          "pitch": -10.01
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.14,
                          "yaw": 11.96,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 34,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -12.45
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_91D11D1E_9D07_0517_41D1_B35C8BC465A7); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 11.96,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 69,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png"
                            }
                           ]
                          },
                          "pitch": -12.45
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.24,
                          "yaw": 163.21,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 30,
                             "width": 65,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9.18
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_91E63D2C_9D07_053B_41B1_933E0C5F7F28); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 163.21,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.24,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 61,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png"
                            }
                           ]
                          },
                          "pitch": -9.18
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2500,
                         "width": 5000,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "label": "C07",
                    "class": "Panorama",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "partial": false,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 636.25,
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                        }
                       ],
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.23,
                             "yaw": -168.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 33,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -15
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_9016AD73_9D07_052D_41CC_B4FCEF4DC783); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -168.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.23,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 67,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png"
                               }
                              ]
                             },
                             "pitch": -15
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.92,
                             "yaw": -36.3,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 34,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -21.01
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_91FBFD56_9D07_0517_41D1_96750B65913B); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -36.3,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 69,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png"
                               }
                              ]
                             },
                             "pitch": -21.01
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.36,
                             "yaw": 30.75,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 26,
                                "width": 65,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -11.5
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_9001ED64_9D07_052B_4180_AD1AF5A4BF52); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 30.75,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.36,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 53,
                                "width": 130,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png"
                               }
                              ]
                             },
                             "pitch": -11.5
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2450,
                            "width": 4900,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "label": "C08",
                       "class": "Panorama",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "partial": false,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 686.27,
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                           }
                          ],
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.23,
                                "yaw": -138.38,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 33,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -9.68
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_90361D9D_9D07_0515_41D2_11BA030F8D08); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -138.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 67,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png"
                                  }
                                 ]
                                },
                                "pitch": -9.68
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.14,
                                "yaw": -1.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 61,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -12.42
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_90429DB9_9D07_051A_41C0_0EC0674B8F12); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -1.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.14,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 122,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png"
                                  }
                                 ]
                                },
                                "pitch": -12.42
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.12,
                                "yaw": 78.56,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 48,
                                   "width": 65,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -12.93
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_903FADAB_9D07_053D_41DB_7B3195CC4217); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 78.56,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.12,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 96,
                                   "width": 130,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png"
                                  }
                                 ]
                                },
                                "pitch": -12.93
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2500,
                               "width": 5000,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "label": "C10",
                          "class": "Panorama",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "distance": 1,
                            "backwardYaw": -36.3
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 676.22,
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.05,
                                   "yaw": -93.19,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 34,
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -14.74
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_90873E03_9D07_06EE_41CF_312AD9BDF416); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -93.19,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.05,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 69,
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -14.74
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.25,
                                   "yaw": 155.68,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 64,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -8.65
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_909CEE20_9D07_072A_4191_BC0460EA2F50); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 155.68,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 104,
                                      "width": 129,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -8.65
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.11,
                                   "yaw": 37.47,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 33,
                                      "width": 65,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -13.25
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_908B5E12_9D07_06EE_41E2_B40AD2A8395B); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 37.47,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.11,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 67,
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -13.25
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "label": "C17",
                             "class": "Panorama",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                "mapLocations": [
                                 {
                                  "class": "PanoramaMapLocation",
                                  "x": 628.49,
                                  "y": 310.59,
                                  "angle": 0,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.22,
                                      "yaw": -172.45,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 32,
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -10.04
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_90C56E6C_9D07_073A_41B2_51270058E36E); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -172.45,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.22,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 64,
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -10.04
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.21,
                                      "yaw": -20.33,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 26,
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -10.3
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_90D88E97_9D07_0715_41E0_E54E8B73A6B6); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -20.33,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.21,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 53,
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -10.3
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.93,
                                      "yaw": 101.34,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 33,
                                         "width": 65,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -17.37
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_90D63E7F_9D07_0715_41D3_998D0C947760); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 101.34,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.93,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 66,
                                         "width": 130,
                                         "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -17.37
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "label": "C16",
                                "class": "Panorama",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "mapLocations": [
                                    {
                                     "class": "PanoramaMapLocation",
                                     "x": 636.99,
                                     "y": 342.51,
                                     "angle": 144.87,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                     "overlays": [
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.68,
                                         "yaw": -166.65,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 61,
                                            "width": 60,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -8.17
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_935A5F52_9D07_056E_41E0_1D95B81A8430); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -166.65,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.68,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 123,
                                            "width": 121,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -8.17
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.47,
                                         "yaw": -6.22,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 39,
                                            "width": 45,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -10.72
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_936FAF60_9D07_052A_419A_A976FB2F2496); this.mainPlayList.set('selectedIndex', 18)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -6.22,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.47,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 79,
                                            "width": 91,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -10.72
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.15,
                                         "yaw": 87.5,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 62,
                                            "width": 57,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -9.88
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_93488F44_9D07_056A_41D4_618A673CEE8F); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 87.5,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.15,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 124,
                                            "width": 114,
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -9.88
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "label": "C23",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "mapLocations": [
                                       {
                                        "class": "PanoramaMapLocation",
                                        "x": 597.76,
                                        "y": 356.03,
                                        "angle": 71.57,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.82,
                                            "yaw": -178.42,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 64,
                                               "width": 63,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -15.23
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_91CB4D10_9D07_0AEB_41BF_62F4CC14499B); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -178.42,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.82,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 128,
                                               "width": 127,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -15.23
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9,
                                            "yaw": 23.25,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 55,
                                               "width": 63,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -11.12
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_91C20D02_9D07_0AEF_41A0_761568786A97); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 23.25,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 111,
                                               "width": 127,
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.12
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "label": "C22",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                        "yaw": 23.25,
                                        "distance": 1,
                                        "backwardYaw": 87.5
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "mapLocations": [
                                          {
                                           "class": "PanoramaMapLocation",
                                           "x": 570.65,
                                           "y": 371.77,
                                           "angle": 249.33,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.65,
                                               "yaw": -178.92,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 82,
                                                  "width": 77,
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.66
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_90720DF5_9D07_052A_41A9_8A330D1828A4); this.mainPlayList.set('selectedIndex', 21)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -178.92,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 10.65,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 165,
                                                  "width": 154,
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.66
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "label": "C21",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                           "yaw": -178.92,
                                           "distance": 1,
                                           "backwardYaw": -178.42
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -178.42,
                                        "distance": 1,
                                        "backwardYaw": -178.92
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 87.5,
                                     "distance": 1,
                                     "backwardYaw": 23.25
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "yaw": -166.65,
                                     "distance": 1,
                                     "backwardYaw": -172.45
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                      "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                      "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                      "mapLocations": [
                                       {
                                        "class": "PanoramaMapLocation",
                                        "x": 670.6,
                                        "y": 386.76,
                                        "angle": 0,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.18,
                                            "yaw": -36.03,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 53,
                                               "width": 65,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -11.37
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_90ED8EAA_9D07_073F_41D0_60CAB0457994); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -36.03,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.18,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 106,
                                               "width": 130,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.37
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.21,
                                            "yaw": 26.17,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 34,
                                               "width": 65,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -11.26
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_90FC1EC3_9D07_076D_41DE_92B3FAED53AC); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 26.17,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.21,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 68,
                                               "width": 130,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.26
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.06,
                                            "yaw": 163.47,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 54,
                                               "width": 57,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -14.17
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_930F6EDB_9D07_071D_41E0_0B548E2678F5); this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 163.47,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.06,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 109,
                                               "width": 115,
                                               "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -14.17
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "label": "C19",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                        "yaw": -36.03,
                                        "distance": 1,
                                        "backwardYaw": -6.22
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                         "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                         "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                         "mapLocations": [
                                          {
                                           "class": "PanoramaMapLocation",
                                           "x": 674.74,
                                           "y": 343.99,
                                           "angle": 163.35,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.16,
                                               "yaw": 4.5,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 38,
                                                  "width": 65,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.86
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_91C9DFD7_9D07_0516_41DF_7E5D423A0299); this.mainPlayList.set('selectedIndex', 18)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 4.5,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.16,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 76,
                                                  "width": 130,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.86
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.19,
                                               "yaw": -162.77,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 41,
                                                  "width": 65,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.1
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_91D5CFE5_9D07_0535_41E2_7F4825BCAC8A); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -162.77,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.19,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 82,
                                                  "width": 130,
                                                  "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.1
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "label": "C18",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                           "yaw": 4.5,
                                           "distance": 1,
                                           "backwardYaw": 26.17
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": -162.77,
                                           "distance": 1,
                                           "backwardYaw": 155.68
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 26.17,
                                        "distance": 1,
                                        "backwardYaw": 4.5
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                         "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                         "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                         "mapLocations": [
                                          {
                                           "class": "PanoramaMapLocation",
                                           "x": 684.05,
                                           "y": 434.27,
                                           "angle": 147.84,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.22,
                                               "yaw": -179.2,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 34,
                                                  "width": 65,
                                                  "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -9.77
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_93826F7B_9D07_051E_41E2_04D765EC2241); this.mainPlayList.set('selectedIndex', 18)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.2,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.22,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 69,
                                                  "width": 130,
                                                  "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -9.77
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "label": "C20",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                           "yaw": -179.2,
                                           "distance": 1,
                                           "backwardYaw": 163.47
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 163.47,
                                        "distance": 1,
                                        "backwardYaw": -179.2
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -6.22,
                                     "distance": 1,
                                     "backwardYaw": -36.03
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -172.45,
                                  "distance": 1,
                                  "backwardYaw": -166.65
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": 101.34,
                                  "distance": 1,
                                  "backwardYaw": -93.19
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": -20.33,
                                  "distance": 1,
                                  "backwardYaw": 163.21
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -93.19,
                               "distance": 1,
                               "backwardYaw": 101.34
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "distance": 1,
                               "backwardYaw": 78.56
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                               "yaw": 155.68,
                               "distance": 1,
                               "backwardYaw": -162.77
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 78.56,
                            "distance": 1,
                            "backwardYaw": 37.47
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 747.51,
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.95,
                                   "yaw": 1.16,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 42,
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -17.05
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_905A7DD7_9D07_0516_41D8_DAC1B5303B7D); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 1.16,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.95,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 84,
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -17.05
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.75,
                                   "yaw": -179.89,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 44,
                                      "width": 64,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -20.83
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_906E8DE5_9D07_0535_41E1_81190C001310); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -179.89,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.75,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 89,
                                      "width": 129,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -20.83
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "label": "C11",
                             "class": "Panorama",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "distance": 1,
                               "backwardYaw": -1.2
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "class": "PanoramaMapLocation",
                                  "x": 812.45,
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.14,
                                      "yaw": 0.64,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 53,
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -12.53
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_90231D8F_9D07_05F5_41C6_C88751216B8B); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 0.64,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.14,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 107,
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -12.53
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.47,
                                      "yaw": 167.51,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 53,
                                         "width": 65,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -25.2
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_901DAD81_9D07_05ED_41C2_D459E1721E98); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 167.51,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.47,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 107,
                                         "width": 130,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -25.2
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "label": "C12",
                                "class": "Panorama",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "class": "PanoramaMapLocation",
                                     "x": 858.03,
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.95,
                                         "yaw": 0.65,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 36,
                                            "width": 65,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -17.08
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_93956F8A_9D07_05FE_41DE_2D3ED0A65EC6); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 0.65,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.95,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 73,
                                            "width": 130,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -17.08
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.14,
                                         "yaw": 176.12,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 47,
                                            "width": 74,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -18.57
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_91CD5FCA_9D07_057E_41D1_3AFCE57AD159); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 176.12,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 10.14,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 94,
                                            "width": 148,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -18.57
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "label": "C13",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "class": "PanoramaMapLocation",
                                        "x": 898.74,
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.08,
                                            "yaw": 178.92,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 42,
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -14.01
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_919AECCA_9D07_0B7E_41DD_08B858EFB809); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 178.92,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.08,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 84,
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -14.01
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.12,
                                            "yaw": 0.43,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 30,
                                               "width": 65,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -12.99
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_91AE5CD9_9D07_0B1A_41BF_F39C821E988C); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 0.43,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.12,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 61,
                                               "width": 130,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -12.99
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "label": "C14",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": 178.92,
                                        "distance": 1,
                                        "backwardYaw": 0.65
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "class": "PanoramaMapLocation",
                                           "x": 947.2,
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.1,
                                               "yaw": 0.3,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 29,
                                                  "width": 65,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -13.54
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_937E0F6E_9D07_0536_41E0_48614D2EF571); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 0.3,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 9.1,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 59,
                                                  "width": 130,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -13.54
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "label": "C15",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.3,
                                           "distance": 1,
                                           "backwardYaw": 0.43
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 0.43,
                                        "distance": 1,
                                        "backwardYaw": 0.3
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 0.65,
                                     "distance": 1,
                                     "backwardYaw": 178.92
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "distance": 1,
                                     "backwardYaw": 167.51
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 167.51,
                                  "distance": 1,
                                  "backwardYaw": 176.12
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.64,
                                  "distance": 1,
                                  "backwardYaw": -179.89
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -179.89,
                               "distance": 1,
                               "backwardYaw": 0.64
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "distance": 1,
                            "backwardYaw": 1.16
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "distance": 1,
                         "backwardYaw": -138.38
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 30.75,
                         "distance": 1,
                         "backwardYaw": 11.96
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "partial": false,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 634.92,
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                           }
                          ],
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.5,
                                "yaw": 130.87,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 22,
                                   "width": 65,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.71
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9056BDC8_9D07_057A_41A6_BFBED73EEA3F); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 130.87,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 44,
                                   "width": 130,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.71
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2450,
                               "width": 4900,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "label": "C09",
                          "class": "Panorama",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 130.87,
                            "distance": 1,
                            "backwardYaw": -168.2
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -168.2,
                         "distance": 1,
                         "backwardYaw": 130.87
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 11.96,
                      "distance": 1,
                      "backwardYaw": 30.75
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "distance": 1,
                      "backwardYaw": -20.33
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "distance": 1,
                      "backwardYaw": 5.64
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "distance": 1,
                   "backwardYaw": -91.86
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "distance": 1,
                   "backwardYaw": -177.15
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -177.15,
                "distance": 1,
                "backwardYaw": -179.79
               }
              ],
              "vfov": 180
             },
             "yaw": -1.54,
             "distance": 1,
             "backwardYaw": -1.42
            }
           ],
           "vfov": 180
          },
          "yaw": 179.91,
          "distance": 1,
          "backwardYaw": -179.87
         }
        ],
        "vfov": 180
       },
       "yaw": 2.66,
       "distance": 1,
       "backwardYaw": 1.93
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "distance": 1,
       "backwardYaw": 2.71
      }
     ],
     "vfov": 180
    },
    "yaw": 2.71,
    "distance": 1,
    "backwardYaw": -179.81
   }
  ],
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "minWidth": 342,
   "playbackBarHeadShadow": true,
   "playbackBarRight": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderSize": 0,
   "shadow": false,
   "progressBackgroundOpacity": 1,
   "toolTipShadowSpread": 0,
   "paddingBottom": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "transitionMode": "blending",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipOpacity": 1,
   "toolTipFontStyle": "normal",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderSize": 1,
   "progressLeft": 0,
   "toolTipPaddingLeft": 6,
   "height": 436,
   "width": 682,
   "borderRadius": 10,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0,
   "borderSize": 0,
   "progressHeight": 10,
   "class": "ViewerArea",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 218,
   "progressRight": 0,
   "progressBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "playbackBarOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "playbackBarBottom": 0,
   "toolTipFontFamily": "Arial",
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": 18,
   "paddingLeft": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowColor": "#000000",
   "progressBarOpacity": 1
  }
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90E83C68_9D07_0B3A_41DB_EB383A767100",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90E83C68_9D07_0B3A_41DB_EB383A767100, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F5EC6D_9D07_0B3A_41AE_4E613303BADB",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F5EC6D_9D07_0B3A_41AE_4E613303BADB, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F26C6D_9D07_0B3A_41E0_A490484A928D",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F26C6D_9D07_0B3A_41E0_A490484A928D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F2CC6E_9D07_0B36_41D4_942D2683748E",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F2CC6E_9D07_0B36_41D4_942D2683748E, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F5CC6F_9D07_0B36_41DA_325CB869CA90",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F5CC6F_9D07_0B36_41DA_325CB869CA90, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F23C6F_9D07_0B36_41D4_96EC0D6632A7",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F23C6F_9D07_0B36_41D4_96EC0D6632A7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F2AC70_9D07_0B2A_41BB_F2F127512B91",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F2AC70_9D07_0B2A_41BB_F2F127512B91, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F31C70_9D07_0B2A_41DB_F968146BE74A",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F31C70_9D07_0B2A_41DB_F968146BE74A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F07C71_9D07_0B2A_41E2_BB4B30CC6F1A",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F07C71_9D07_0B2A_41E2_BB4B30CC6F1A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F0FC71_9D07_0B2A_41CC_5CC6C5033336",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F0FC71_9D07_0B2A_41CC_5CC6C5033336, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F17C72_9D07_0B2E_41E2_C758AB4A3BF2",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F17C72_9D07_0B2E_41E2_C758AB4A3BF2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F1EC72_9D07_0B2E_41B0_A6FEBC1BC340",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F1EC72_9D07_0B2E_41B0_A6FEBC1BC340, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FE3C73_9D07_0B2E_41C0_6A8608CBBD18",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FE3C73_9D07_0B2E_41C0_6A8608CBBD18, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FEAC73_9D07_0B2E_41D5_A61B6CF9AFA8",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FEAC73_9D07_0B2E_41D5_A61B6CF9AFA8, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FF1C74_9D07_0B2A_41E1_8ACB3B7BA8C0",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FF1C74_9D07_0B2A_41E1_8ACB3B7BA8C0, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FC6C74_9D07_0B2A_41D0_27320CF1D3B2",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FC6C74_9D07_0B2A_41D0_27320CF1D3B2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FCDC75_9D07_0B2A_41DE_4C12DEB6863C",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FCDC75_9D07_0B2A_41DE_4C12DEB6863C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FD4C75_9D07_0B2A_41D5_654CDC719E82",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FD4C75_9D07_0B2A_41D5_654CDC719E82, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FA7C76_9D07_0B17_41C3_DF0A8F03044C",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FA7C76_9D07_0B17_41C3_DF0A8F03044C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FA0C77_9D07_0B16_41BC_DA64B35FB896",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FA0C77_9D07_0B16_41BC_DA64B35FB896, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FB5C78_9D07_0B1A_41E0_A97E7085F3DD",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FB5C78_9D07_0B1A_41E0_A97E7085F3DD, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90FBCC78_9D07_0B1A_41DF_4F2CF971B2D6",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90FBCC78_9D07_0B1A_41DF_4F2CF971B2D6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_90F83C79_9D07_0B1A_41DD_5C8C178DEF6F",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90F83C79_9D07_0B1A_41DD_5C8C178DEF6F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "class": "PlayList",
  "id": "playList_90E0AC61_9D07_0B2A_41DD_00421E8CCBDF",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_90F8AC7A_9D07_0B1E_41AD_33C3420BE3BB",
 {
  "class": "PanoramaCamera",
  "id": "camera_919AECCA_9D07_0B7E_41DD_08B858EFB809",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91AE5CD9_9D07_0B1A_41BF_F39C821E988C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91B60CE7_9D07_0B36_41D2_64937F6DD2BB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91BCDCF5_9D07_0B15_41D6_29C772AE6C0C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91C20D02_9D07_0AEF_41A0_761568786A97",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91CB4D10_9D07_0AEB_41BF_62F4CC14499B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91D11D1E_9D07_0517_41D1_B35C8BC465A7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91E63D2C_9D07_053B_41B1_933E0C5F7F28",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.67,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91EC0D39_9D07_051C_41DC_BE4E250CA94D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91F55D48_9D07_057B_41D1_B76EC76CBB26",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.19,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91FBFD56_9D07_0517_41D1_96750B65913B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.62,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9001ED64_9D07_052B_4180_AD1AF5A4BF52",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9016AD73_9D07_052D_41CC_B4FCEF4DC783",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_901DAD81_9D07_05ED_41C2_D459E1721E98",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90231D8F_9D07_05F5_41C6_C88751216B8B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90361D9D_9D07_0515_41D2_11BA030F8D08",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_903FADAB_9D07_053D_41DB_7B3195CC4217",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90429DB9_9D07_051A_41C0_0EC0674B8F12",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.84,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9056BDC8_9D07_057A_41A6_BFBED73EEA3F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_905A7DD7_9D07_0516_41D8_DAC1B5303B7D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_906E8DE5_9D07_0535_41E1_81190C001310",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90720DF5_9D07_052A_41A9_8A330D1828A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90873E03_9D07_06EE_41CF_312AD9BDF416",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.66,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_908B5E12_9D07_06EE_41E2_B40AD2A8395B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_909CEE20_9D07_072A_4191_BC0460EA2F50",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.23,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90A19E2E_9D07_0736_41BB_427FBE62DC04",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.09,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90B24E4F_9D07_0776_41B9_085C24A7D1D8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90C56E6C_9D07_073A_41B2_51270058E36E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90D63E7F_9D07_0715_41D3_998D0C947760",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90D88E97_9D07_0715_41E0_E54E8B73A6B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90ED8EAA_9D07_073F_41D0_60CAB0457994",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_90FC1EC3_9D07_076D_41DE_92B3FAED53AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_930F6EDB_9D07_071D_41E0_0B548E2678F5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9310EEEE_9D07_0737_41DA_868A99B2C74F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.46,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93235F06_9D07_06F7_41E0_A396D9CDE708",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93345F1E_9D07_0517_41B4_446F294E7A6B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.34,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9346EF32_9D07_052E_41D6_2414ABC20437",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93488F44_9D07_056A_41D4_618A673CEE8F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_935A5F52_9D07_056E_41E0_1D95B81A8430",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_936FAF60_9D07_052A_419A_A976FB2F2496",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_937E0F6E_9D07_0536_41E0_48614D2EF571",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.57,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93826F7B_9D07_051E_41E2_04D765EC2241",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93956F8A_9D07_05FE_41DE_2D3ED0A65EC6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91CD5FCA_9D07_057E_41D1_3AFCE57AD159",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.49,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91C9DFD7_9D07_0516_41DF_7E5D423A0299",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91D5CFE5_9D07_0535_41E2_7F4825BCAC8A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91DF0FF4_9D07_052B_41E0_51D5C9B37C66",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91DB5002_9D07_FAEF_41AC_374602623458",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadow": true,
  "minWidth": 100,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "shadow": false,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipOpacity": 1,
  "toolTipFontStyle": "normal",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "progressLeft": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "borderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarLeft": 0,
  "width": "100%",
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "progressRight": 0,
  "progressBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "bottom": "0%",
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "left": 0,
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "progressBarOpacity": 1
 },
 {
  "paddingRight": 0,
  "width": "98.794%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "layout": "absolute",
  "borderSize": 0,
  "gap": 3,
  "class": "Container",
  "height": "96.96%",
  "minWidth": 1,
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "left",
  "shadow": false,
  "overflow": "hidden",
  "paddingBottom": 0,
  "bottom": "0.12%",
  "backgroundOpacity": 0,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "children": [
   {
    "paddingRight": 0,
    "width": 235.1,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
    "class": "Container",
    "height": "99.327%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "paddingLeft": 0,
    "children": [
     {
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 145,
      "width": 181.7,
      "borderRadius": 0,
      "height": 71,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "maxWidth": 378,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "paddingTop": 0,
      "left": "2.47%",
      "paddingLeft": 0,
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingRight": 0,
    "width": 1638,
    "borderRadius": 9,
    "scrollBarWidth": 10,
    "height": 436,
    "verticalAlign": "top",
    "layout": "absolute",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 4,
    "class": "Container",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": "0.06%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "paddingLeft": 0,
    "children": [
     "this.MapViewer",
     {
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 145,
      "width": 70,
      "borderRadius": 0,
      "height": 70,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "maxWidth": 145,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "paddingTop": 0,
      "left": "1.16%",
      "paddingLeft": 0,
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "height": 275.05,
  "verticalAlign": "bottom",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "gap": 10,
  "class": "Container",
  "minWidth": 1,
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "center",
  "shadow": false,
  "overflow": "scroll",
  "paddingBottom": 0,
  "bottom": "0.87%",
  "backgroundOpacity": 0,
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "left": "0%",
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingRight": 0,
    "width": "97.739%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 181,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
    "class": "Container",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "paddingRight": 0,
      "width": 564,
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 181,
      "verticalAlign": "top",
      "layout": "absolute",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": 564,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 167,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "2.21%",
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C TH????NG M???I",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C TH????NG M???I",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C V??N H??A",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C V??N H??A",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C SINH TH??I",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TR???C SINH TH??I",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "width": 564,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 167,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "2.15%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "97.619%",
              "text": "Commercial District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Commercial District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Cultural District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Cultural District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Eco District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Eco District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "width": "100%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "86.188%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "5.47%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "??????????????????????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "??????????????????????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "???????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "???????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "class": "Image",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "????????????????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "????????????????????????",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
              "class": "Label",
              "minWidth": 1,
              "fontStyle": "normal",
              "textDecoration": "none",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5
       }
      ]
     }
    ]
   },
   {
    "paddingRight": 0,
    "width": "97.913%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 77,
    "verticalAlign": "bottom",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
    "class": "Container",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "paddingRight": 0,
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "paddingRight": 0,
        "mode": "push",
        "maxHeight": 84,
        "width": 70,
        "borderRadius": 0,
        "height": 70,
        "transparencyActive": false,
        "borderSize": 0,
        "class": "IconButton",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "maxWidth": 84,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "paddingBottom": 0,
        "cursor": "hand",
        "bottom": "7.35%",
        "backgroundOpacity": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "paddingTop": 0,
        "left": "2.45%",
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": 54,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 54,
        "verticalAlign": "top",
        "layout": "absolute",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "left",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "class": "Image",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "maxWidth": 509,
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "horizontalAlign": "center",
          "top": "0%",
          "paddingBottom": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "paddingTop": 0,
          "paddingLeft": 0,
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "paddingRight": 0,
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "class": "Image",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "maxWidth": 509,
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "horizontalAlign": "center",
          "top": "0%",
          "visible": false,
          "paddingBottom": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "paddingTop": 0,
          "left": "0%",
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "layout": "absolute",
  "borderSize": 0,
  "gap": 10,
  "borderRadius": 0,
  "class": "Container",
  "height": "100%",
  "minWidth": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "minHeight": 1,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "top": "0%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "left": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "paddingRight": 0,
    "width": "100%",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "class": "Image",
    "minWidth": 1,
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "scaleMode": "fit_outside",
    "minHeight": 1,
    "top": "0%",
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "backgroundOpacity": 0,
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "paddingTop": 0,
    "left": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle"
   },
   {
    "paddingRight": 0,
    "width": "95.4%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 3,
    "class": "Container",
    "height": "49.24%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "2.31%",
    "paddingLeft": 0,
    "children": [
     {
      "paddingRight": 0,
      "width": "91.466%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "10.817%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "65.789%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "0.613%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 6,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "43.969%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 49,
            "width": "92.63%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.52%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "backgroundColor": [],
      "maxHeight": 49,
      "width": "95.22%",
      "paddingRight": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 0,
      "borderRadius": 0,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0.55,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "11.131%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "98.485%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "13.57%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 243,
          "width": "97.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "39.005%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "94.66%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "6.977%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "94%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       }
      ],
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "67.082%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "97.61%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 4,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "11.389%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "98.99%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "41.415%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "99.792%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "29.099%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "97.52%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "paddingRight": 0,
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
    "class": "Container",
    "height": "12.935%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": "0%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "0%",
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 72,
      "width": 62,
      "borderRadius": 0,
      "height": 58,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "maxWidth": 72,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "23.74%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "paddingTop": 0,
      "left": "3.02%",
      "paddingLeft": 0,
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingRight": 0,
    "width": "95.4%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 3,
    "class": "Container",
    "height": "49.24%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "2.31%",
    "paddingLeft": 0,
    "children": [
     {
      "paddingRight": 0,
      "width": "91.379%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "10.82%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "47.5%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "0.613%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 6,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "99.123%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "46.891%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.52%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "backgroundColor": [],
      "maxHeight": 49,
      "width": "95.22%",
      "paddingRight": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 3,
      "borderRadius": 0,
      "class": "Container",
      "height": "12.5%",
      "minWidth": 1,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0.55,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "8.714%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "81.25%",
          "borderRadius": 0,
          "height": "95.238%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "11.212%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 243,
          "width": "91.13%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "21.881%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "97.93%",
          "borderRadius": 0,
          "height": "97.62%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "4.973%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "100%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "19.078%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 9,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "86.73%",
          "borderRadius": 0,
          "height": "85.714%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ],
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "33.333%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "97.61%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 4,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "8.534%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "77.193%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "40.316%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "98.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 459,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "53.351%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "64%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "paddingRight": 0,
    "width": "63.993%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 6,
    "class": "Container",
    "height": "80.657%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "shadow": false,
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "backgroundOpacity": 0,
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "17.25%",
    "paddingLeft": 0,
    "children": [
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "5.77%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 61,
        "width": "79.087%",
        "borderRadius": 0,
        "height": "68.085%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "0.12%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 0,
      "class": "Container",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "100%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 0,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "9.882%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "80.769%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "right",
            "borderSize": 0,
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "9.88%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "right",
            "borderSize": 0,
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "52.993%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "class": "Container",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "1.23%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "20%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 5,
      "class": "Container",
      "height": "4.178%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "36.784%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "99.515%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "12.412%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 243,
          "width": "97.78%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "18.943%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "93.13%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "66.075%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "99.764%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 800,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 2,
      "class": "Container",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "4.213%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 1000,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "95.45%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "10.118%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "82.14%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "right",
          "borderSize": 0,
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "32.594%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "92.89%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "1.35%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "18.18%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 0,
      "class": "Container",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "33.925%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "92.12%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "maxHeight": 300,
        "width": "8.471%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "89.8%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "17.96%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "93.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "class": "Container",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 49,
        "width": "56.984%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "class": "Container",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "99.78%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 }
], 
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "gap": 10,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "height": "100%",
 "minWidth": 20,
 "width": "100%",
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "minHeight": 20,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "paddingLeft": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_90E0AC61_9D07_0B2A_41DD_00421E8CCBDF.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
})