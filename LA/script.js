TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "class": "Panorama",
  "pitch": 0,
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "fontFamily": "Arial",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedBackgroundColor": "#202020",
   "class": "Menu",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
   "selectedFontColor": "#FFFFFF",
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
   "opacity": 0.4
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
     "id": "map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_t.png",
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_lq.png",
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
       "id": "overlay_9BC75E9D_973A_9CF1_41BF_4EB86B8B1803",
       "map": {
        "offsetY": 0,
        "x": 299.01,
        "width": 21.5,
        "y": 121.45,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 299.01,
        "y": 121.45,
        "class": "HotspotMapOverlayImage",
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46.png",
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
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "offsetY": 0,
        "x": 343.76,
        "width": 21,
        "y": 140.93,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 343.76,
        "y": 140.93,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47.png",
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
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "offsetY": 0,
        "x": 390.86,
        "width": 21,
        "y": 159.94,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 390.86,
        "y": 159.94,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48.png",
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
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "offsetY": 0,
        "x": 441.55,
        "width": 21,
        "y": 182.83,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 441.55,
        "y": 182.83,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49.png",
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
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "offsetY": 0,
        "x": 501.54,
        "width": 21,
        "y": 202.17,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 501.54,
        "y": 202.17,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50.png",
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
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "offsetY": 0,
        "x": 535.02,
        "width": 21,
        "y": 216.34,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 535.02,
        "y": 216.34,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51.png",
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
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "offsetY": 0,
        "x": 599.62,
        "width": 21,
        "y": 246.89,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 599.62,
        "y": 246.89,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52.png",
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
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "offsetY": 0,
        "x": 624.09,
        "width": 21,
        "y": 207.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 624.09,
        "y": 207.08,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53.png",
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
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "offsetY": 0,
        "x": 622.95,
        "width": 21,
        "y": 146.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 622.95,
        "y": 146.32,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54.png",
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
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "offsetY": 0,
        "x": 674.15,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 674.15,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55.png",
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
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "offsetY": 0,
        "x": 735.61,
        "width": 21,
        "y": 237.81,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 735.61,
        "y": 237.81,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56.png",
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
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "offsetY": 0,
        "x": 800.29,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 800.29,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57.png",
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
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "offsetY": 0,
        "x": 845.89,
        "width": 21,
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 845.89,
        "y": 238.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58.png",
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
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "offsetY": 0,
        "x": 886.76,
        "width": 21,
        "y": 241.36,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 886.76,
        "y": 241.36,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59.png",
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
       "id": "overlay_9BC66E9E_973A_9CF3_4188_A666263EFCE3",
       "map": {
        "offsetY": 0,
        "x": 935.07,
        "width": 21,
        "y": 239.97,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 935.07,
        "y": 239.97,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60.png",
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
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "offsetY": 0,
        "x": 616.43,
        "width": 21,
        "y": 298.53,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 616.43,
        "y": 298.53,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61.png",
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
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "offsetY": 0,
        "x": 664.19,
        "width": 21,
        "y": 304.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 664.19,
        "y": 304.61,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62.png",
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
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "offsetY": 0,
        "x": 662.87,
        "width": 21,
        "y": 332.15,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 662.87,
        "y": 332.15,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63.png",
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
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "offsetY": 0,
        "x": 658.55,
        "width": 21,
        "y": 374.45,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 658.55,
        "y": 374.45,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64.png",
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
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "offsetY": 0,
        "x": 672.84,
        "width": 21,
        "y": 422.91,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 672.84,
        "y": 422.91,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65.png",
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
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "offsetY": 0,
        "x": 624.78,
        "width": 21,
        "y": 330.58,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 624.78,
        "y": 330.58,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66.png",
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
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "offsetY": 0,
        "x": 585.56,
        "width": 21,
        "y": 343.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 585.56,
        "y": 343.8,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67.png",
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
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "offsetY": 0,
        "x": 558.42,
        "width": 21,
        "y": 359.69,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 558.42,
        "y": 359.69,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68.png",
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
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_AF549975_A0E0_1141_41CE_6AEF81C01529); this.mainPlayList.set('selectedIndex', 1)",
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
  "label": "C01",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "class": "Panorama",
     "pitch": 0,
     "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
       "y": 152.86,
       "angle": 108.43,
       "class": "PanoramaMapLocation"
      }
     ],
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_B0FACA52_A0E0_1340_41D6_09C45D0B4915); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_AF0B4A3A_A0E0_12C3_41E0_0F27DAF27005); this.mainPlayList.set('selectedIndex', 0)",
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
     "label": "C02",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "class": "AdjacentPanorama",
       "backwardYaw": 2.71
      },
      {
       "distance": 1,
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "class": "Panorama",
        "pitch": 0,
        "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
          "y": 172.15,
          "angle": -70.14,
          "class": "PanoramaMapLocation"
         }
        ],
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_AFDCAB71_A0E0_1141_41E0_8F7BDBFEC772); this.mainPlayList.set('selectedIndex', 3)",
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_AFC2AB81_A0E0_11C1_41C7_DC381492DD52); this.mainPlayList.set('selectedIndex', 1)",
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
        "label": "C03",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "class": "Panorama",
           "pitch": 0,
           "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
             "y": 194.9,
             "angle": 107.74,
             "class": "PanoramaMapLocation"
            }
           ],
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_AF9BC92C_A0E0_1EC0_41D3_C4D57A48AB5E); this.mainPlayList.set('selectedIndex', 2)",
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
                 "yaw": -1.54,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_AF95491C_A0E0_1EC0_41DE_566CDF735B11); this.mainPlayList.set('selectedIndex', 4)",
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
           "label": "C04",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "class": "Panorama",
              "pitch": 0,
              "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                "y": 214.18,
                "angle": -68.2,
                "class": "PanoramaMapLocation"
               }
              ],
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_AF184C7F_A0E0_1741_41B5_87F439CE2314); this.mainPlayList.set('selectedIndex', 5)",
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_AF172C70_A0E0_175F_41DD_0657628B4537); this.mainPlayList.set('selectedIndex', 3)",
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
              "label": "C05",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -1.54
               },
               {
                "distance": 1,
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "partial": false,
                 "class": "Panorama",
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                   "y": 228.44,
                   "angle": 109.18,
                   "class": "PanoramaMapLocation"
                  }
                 ],
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_AF81093A_A0E0_1EC3_41E0_5EA84CE5BA74); this.mainPlayList.set('selectedIndex', 4)",
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_AF745949_A0E0_1141_41D7_BF3D7E194D85); this.mainPlayList.set('selectedIndex', 6)",
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
                 "label": "C06",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -177.15
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "class": "Panorama",
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                      "y": 258.07,
                      "angle": 25.28,
                      "class": "PanoramaMapLocation"
                     }
                    ],
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_AF2229E2_A0E0_1143_41E1_FE10D3876E88); this.mainPlayList.set('selectedIndex', 5)",
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AF068A1B_A0E0_12C1_41E2_62B5F7478EAE); this.mainPlayList.set('selectedIndex', 7)",
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_AF172A01_A0E0_12C1_417A_7F8BCCD649DF); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                    "label": "C07",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 5.64
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "partial": false,
                       "class": "Panorama",
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "mapLocations": [
                        {
                         "x": 628.49,
                         "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                         "y": 310.59,
                         "angle": 0,
                         "class": "PanoramaMapLocation"
                        }
                       ],
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B0EE6A72_A0E0_1340_41E2_B7E2BBCB9D36); this.mainPlayList.set('selectedIndex', 22)",
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B0C3AAA3_A0E0_13C0_41D1_4FB62DB8B54A); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B0D1DA8B_A0E0_13C0_41CD_8CF0A4EFE100); this.mainPlayList.set('selectedIndex', 16)",
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
                       "label": "C16",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "partial": false,
                          "class": "Panorama",
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                          "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                          "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                          "mapLocations": [
                           {
                            "x": 636.99,
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                            "y": 342.51,
                            "angle": 144.87,
                            "class": "PanoramaMapLocation"
                           }
                          ],
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_AFE7AB27_A0E0_12C1_41DF_BBF41266B68C); this.mainPlayList.set('selectedIndex', 15)",
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_AFEDBB43_A0E0_1141_41B2_FD26239D4B8C); this.mainPlayList.set('selectedIndex', 18)",
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_AFE09B36_A0E0_12C3_41AC_3B449A8B6785); this.mainPlayList.set('selectedIndex', 21)",
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
                          "label": "C23",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "yaw": -166.65,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.45
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "partial": false,
                             "class": "Panorama",
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                             "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                             "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                             "mapLocations": [
                              {
                               "x": 597.76,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                               "y": 356.03,
                               "angle": 71.57,
                               "class": "PanoramaMapLocation"
                              }
                             ],
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_AF61F966_A0E0_1143_41D2_E9A84529CDAA); this.mainPlayList.set('selectedIndex', 20)",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_AF7AF958_A0E0_114F_41D0_F6EE6D23FBE7); this.mainPlayList.set('selectedIndex', 22)",
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
                             "label": "C22",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "yaw": 23.25,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 87.5
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                "mapLocations": [
                                 {
                                  "x": 570.65,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                  "y": 371.77,
                                  "angle": 249.33,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_AFE97B52_A0E0_1143_41CB_0FE877F0D86F); this.mainPlayList.set('selectedIndex', 21)",
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
                                "label": "C21",
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
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 87.5,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 23.25
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "partial": false,
                             "class": "Panorama",
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                             "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                             "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                             "mapLocations": [
                              {
                               "x": 670.6,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                               "y": 386.76,
                               "angle": 0,
                               "class": "PanoramaMapLocation"
                              }
                             ],
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_AFA66BAF_A0E0_11C1_41D8_ADA71C89A4E8); this.mainPlayList.set('selectedIndex', 22)",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_AFCA1B91_A0E0_11C1_41A8_84E119AD645E); this.mainPlayList.set('selectedIndex', 17)",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_AFB08BA0_A0E0_11FF_41D4_68D296431056); this.mainPlayList.set('selectedIndex', 19)",
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
                             "label": "C19",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_AF6E3C16_A0E0_16C0_41E2_04F30C56C83C); this.mainPlayList.set('selectedIndex', 18)",
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
                                         "width": 65,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_AF538C25_A0E0_16C1_41AE_3D0361979F5B); this.mainPlayList.set('selectedIndex', 16)",
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
                                         "width": 130,
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
                                "label": "C18",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                  "yaw": 4.5,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 26.17
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "partial": false,
                                   "class": "Panorama",
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                   "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                                   "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                   "mapLocations": [
                                    {
                                     "x": 676.22,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                     "y": 316.87,
                                     "angle": 0,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_AF31A9C9_A0E0_1141_41E0_C5AFB31BC64B); this.mainPlayList.set('selectedIndex', 15)",
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_AF4C79AA_A0E0_11C3_41E2_7FEA022CD6D6); this.mainPlayList.set('selectedIndex', 17)",
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_AF59998F_A0E0_11C1_41E1_46DDBAEFA5DE); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
                                   "label": "C17",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "partial": false,
                                      "class": "Panorama",
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                      "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                      "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                      "mapLocations": [
                                       {
                                        "x": 686.27,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                        "y": 250.53,
                                        "angle": 91.91,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AF749BF8_A0E0_1140_41DE_F775CA5261F0); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_AF812BE9_A0E0_1140_41D4_AD6492D3473A); this.mainPlayList.set('selectedIndex', 10)",
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_AF7BEC08_A0E0_16C0_41D9_3026BD8B65E8); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                      "label": "C10",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "partial": false,
                                         "class": "Panorama",
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                         "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                         "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                         "mapLocations": [
                                          {
                                           "x": 747.51,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                           "y": 249.79,
                                           "angle": -86.82,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_AF3F5C52_A0E0_1743_41DB_6744FDC5608A); this.mainPlayList.set('selectedIndex', 9)",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_AF221C61_A0E0_1741_4198_3D2174B029AD); this.mainPlayList.set('selectedIndex', 11)",
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
                                         "label": "C11",
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
                                            "partial": false,
                                            "class": "Panorama",
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                            "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                            "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                            "mapLocations": [
                                             {
                                              "x": 812.45,
                                              "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                              "y": 250.53,
                                              "angle": -88.57,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B08D9AEF_A0E0_1341_41AF_84A79735D5F9); this.mainPlayList.set('selectedIndex', 10)",
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B09A3AE0_A0E0_137F_41CA_CE3CB33DF68D); this.mainPlayList.set('selectedIndex', 12)",
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
                                            "label": "C12",
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "distance": 1,
                                              "panorama": {
                                               "hfovMax": 120,
                                               "hfovMin": 60,
                                               "partial": false,
                                               "class": "Panorama",
                                               "pitch": 0,
                                               "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                               "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                               "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                               "mapLocations": [
                                                {
                                                 "x": 858.03,
                                                 "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                                 "y": 250.53,
                                                 "angle": 86.73,
                                                 "class": "PanoramaMapLocation"
                                                }
                                               ],
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
                                                        "width": 65,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_AF468C34_A0E0_16C7_41D6_90900FAC7BEB); this.mainPlayList.set('selectedIndex', 13)",
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
                                                        "width": 130,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_AF4BEC43_A0E0_1741_41CC_A45A972598AB); this.mainPlayList.set('selectedIndex', 11)",
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
                                               "label": "C13",
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "distance": 1,
                                                 "panorama": {
                                                  "hfovMax": 120,
                                                  "hfovMin": 60,
                                                  "partial": false,
                                                  "class": "Panorama",
                                                  "pitch": 0,
                                                  "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                                  "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                                  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                                  "mapLocations": [
                                                   {
                                                    "x": 898.74,
                                                    "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                                    "y": 253.41,
                                                    "angle": 88.03,
                                                    "class": "PanoramaMapLocation"
                                                   }
                                                  ],
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_AFAF1BBE_A0E0_11C3_41DF_432058DB3D48); this.mainPlayList.set('selectedIndex', 12)",
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_AF925BCC_A0E0_1140_41DB_C274A8F1EE83); this.mainPlayList.set('selectedIndex', 14)",
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
                                                  "label": "C14",
                                                  "hfov": 360,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "distance": 1,
                                                    "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                                    "yaw": 178.92,
                                                    "class": "AdjacentPanorama",
                                                    "backwardYaw": 0.65
                                                   },
                                                   {
                                                    "distance": 1,
                                                    "panorama": {
                                                     "hfovMax": 120,
                                                     "hfovMin": 60,
                                                     "partial": false,
                                                     "class": "Panorama",
                                                     "pitch": 0,
                                                     "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                                     "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                                     "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                                     "mapLocations": [
                                                      {
                                                       "x": 947.2,
                                                       "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                                       "y": 251.93,
                                                       "angle": -86.35,
                                                       "class": "PanoramaMapLocation"
                                                      }
                                                     ],
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
                                                         "useHandCursor": true,
                                                         "enabledInCardboard": true,
                                                         "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_AF0BCC8F_A0E0_17C1_41D3_C09B627F8A67); this.mainPlayList.set('selectedIndex', 13)",
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
                                                     "label": "C15",
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
                                             },
                                             {
                                              "distance": 1,
                                              "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                              "yaw": 0.64,
                                              "class": "AdjacentPanorama",
                                              "backwardYaw": -179.89
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
                                         "partial": false,
                                         "class": "Panorama",
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                         "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                         "mapLocations": [
                                          {
                                           "x": 636.25,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                           "y": 219.13,
                                           "angle": 180.55,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_B0A7EAC2_A0E0_1343_41D4_E21BA9FEE52A); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B0B42AB3_A0E0_13C1_41E2_719B77FB383A); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B0A8EAD2_A0E0_1343_41E2_70CAD941553B); this.mainPlayList.set('selectedIndex', 6)",
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
                                         "label": "C08",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                           "yaw": -36.3,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -138.38
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": {
                                            "hfovMax": 120,
                                            "hfovMin": 60,
                                            "partial": false,
                                            "class": "Panorama",
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                            "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                            "mapLocations": [
                                             {
                                              "x": 634.92,
                                              "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                              "y": 158.55,
                                              "angle": 35.54,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AFD3DB61_A0E0_1141_41CF_12E50CB4AA6E); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                            "label": "C09",
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
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": 30.75,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 11.96
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -138.38,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -36.3
                                       },
                                       {
                                        "distance": 1,
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "yaw": 78.56,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 37.47
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 37.47,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 78.56
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
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
                                  "yaw": -162.77,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 155.68
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": 26.17,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 4.5
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
                                "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                "mapLocations": [
                                 {
                                  "x": 684.05,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
                                  "y": 434.27,
                                  "angle": 147.84,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_AF987BDA_A0E0_1140_41D5_FDA93D0B0FFC); this.mainPlayList.set('selectedIndex', 18)",
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
                                "label": "C20",
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
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "yaw": -36.03,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -6.22
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -6.22,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -36.03
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -172.45,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -166.65
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                         "yaw": 101.34,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -93.19
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
                      "yaw": 163.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -20.33
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "yaw": 11.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 30.75
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -91.86
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -177.15,
                "class": "AdjacentPanorama",
                "backwardYaw": -179.79
               }
              ],
              "vfov": 180
             },
             "yaw": -1.54,
             "class": "AdjacentPanorama",
             "backwardYaw": -1.42
            },
            {
             "distance": 1,
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "class": "AdjacentPanorama",
             "backwardYaw": 179.91
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
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarHeadBorderRadius": 0,
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderSize": 1,
   "toolTipFontStyle": "normal",
   "toolTipPaddingLeft": 6,
   "height": 436,
   "width": 682,
   "borderRadius": 10,
   "progressLeft": 0,
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "borderSize": 0,
   "progressHeight": 10,
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFC208D4_A0E0_1F47_41C8_CE9E286D256B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFC208D4_A0E0_1F47_41C8_CE9E286D256B",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCF98D8_A0E0_1F40_41C7_2FC44C3B86FF, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCF98D8_A0E0_1F40_41C7_2FC44C3B86FF",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCF38D9_A0E0_1F40_41D4_10E59E498701, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCF38D9_A0E0_1F40_41D4_10E59E498701",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCCE8DA_A0E0_1F40_41C1_3787E91D418B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCCE8DA_A0E0_1F40_41C1_3787E91D418B",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCC98DA_A0E0_1F40_41DB_AEE574D4A459, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCC98DA_A0E0_1F40_41DB_AEE574D4A459",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCC48DB_A0E0_1F40_41DB_0807F826C603, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCC48DB_A0E0_1F40_41DB_0807F826C603",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCDE8DB_A0E0_1F40_41DA_22B906BDD2A3, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCDE8DB_A0E0_1F40_41DA_22B906BDD2A3",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCF18DC_A0E0_1F40_41E3_259CEA6089C7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCF18DC_A0E0_1F40_41E3_259CEA6089C7",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCCA8DC_A0E0_1F40_41C9_20D88800691A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCCA8DC_A0E0_1F40_41C9_20D88800691A",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCC58DD_A0E0_1F40_41D0_F320D5F37B93, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCC58DD_A0E0_1F40_41D0_F320D5F37B93",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCC08DD_A0E0_1F40_41D3_4D6A00338A4F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCC08DD_A0E0_1F40_41D3_4D6A00338A4F",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCDA8DE_A0E0_1F40_41DD_E6E693AA9A1E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCDA8DE_A0E0_1F40_41DD_E6E693AA9A1E",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCD58DE_A0E0_1F40_41E2_1B8A5228CA31, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCD58DE_A0E0_1F40_41E2_1B8A5228CA31",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCAE8DF_A0E0_1F40_41E1_311BD0FA52CA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCAE8DF_A0E0_1F40_41E1_311BD0FA52CA",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCA78DF_A0E0_1F40_41D0_CB7EC9E4ADD0, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCA78DF_A0E0_1F40_41D0_CB7EC9E4ADD0",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCA28E0_A0E0_1F40_41D5_0E337337339A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCA28E0_A0E0_1F40_41D5_0E337337339A",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCBD8E0_A0E0_1F40_41E3_A815FF1408EC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCBD8E0_A0E0_1F40_41E3_A815FF1408EC",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCB88E1_A0E0_1F40_41B5_74FFC7F50B21, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCB88E1_A0E0_1F40_41B5_74FFC7F50B21",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFCB18E1_A0E0_1F43_41DC_671195F22892, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFCB18E1_A0E0_1F43_41DC_671195F22892",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFC8B8E2_A0E0_1F40_41D4_5DDDF8E87787, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFC8B8E2_A0E0_1F40_41D4_5DDDF8E87787",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFC868E3_A0E0_1F40_41D4_A0F0ECFB4717, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFC868E3_A0E0_1F40_41D4_A0F0ECFB4717",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFC9F8E3_A0E0_1F40_419F_337E4813D973, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFC9F8E3_A0E0_1F40_419F_337E4813D973",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_AFC978E4_A0E0_1F40_41E1_59ACF518E571, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_AFC978E4_A0E0_1F40_41E1_59ACF518E571",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "id": "playList_AFC768CF_A0E0_1F41_41D8_6BEAB83F17E7",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_AFC918E4_A0E0_1F40_41C4_DE84C203AC94",
 {
  "id": "camera_AF95491C_A0E0_1EC0_41DE_566CDF735B11",
  "initialPosition": {
   "yaw": 178.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF9BC92C_A0E0_1EC0_41D3_C4D57A48AB5E",
  "initialPosition": {
   "yaw": -0.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF81093A_A0E0_1EC3_41E0_5EA84CE5BA74",
  "initialPosition": {
   "yaw": 2.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF745949_A0E0_1141_41D7_BF3D7E194D85",
  "initialPosition": {
   "yaw": 88.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF7AF958_A0E0_114F_41D0_F6EE6D23FBE7",
  "initialPosition": {
   "yaw": -92.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF61F966_A0E0_1143_41D2_E9A84529CDAA",
  "initialPosition": {
   "yaw": 1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF549975_A0E0_1141_41CE_6AEF81C01529",
  "initialPosition": {
   "yaw": 0.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF59998F_A0E0_11C1_41E1_46DDBAEFA5DE",
  "initialPosition": {
   "yaw": -101.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF4C79AA_A0E0_11C3_41E2_7FEA022CD6D6",
  "initialPosition": {
   "yaw": 17.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF31A9C9_A0E0_1141_41E0_C5AFB31BC64B",
  "initialPosition": {
   "yaw": -78.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF2229E2_A0E0_1143_41E1_FE10D3876E88",
  "initialPosition": {
   "yaw": -174.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF172A01_A0E0_12C1_417A_7F8BCCD649DF",
  "initialPosition": {
   "yaw": 159.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF068A1B_A0E0_12C1_41E2_62B5F7478EAE",
  "initialPosition": {
   "yaw": -149.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF0B4A3A_A0E0_12C3_41E0_0F27DAF27005",
  "initialPosition": {
   "yaw": -177.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0FACA52_A0E0_1340_41D6_09C45D0B4915",
  "initialPosition": {
   "yaw": -178.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0EE6A72_A0E0_1340_41E2_B7E2BBCB9D36",
  "initialPosition": {
   "yaw": 13.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0D1DA8B_A0E0_13C0_41CD_8CF0A4EFE100",
  "initialPosition": {
   "yaw": 86.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0C3AAA3_A0E0_13C0_41D1_4FB62DB8B54A",
  "initialPosition": {
   "yaw": -16.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0B42AB3_A0E0_13C1_41E2_719B77FB383A",
  "initialPosition": {
   "yaw": 41.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0A7EAC2_A0E0_1343_41D4_E21BA9FEE52A",
  "initialPosition": {
   "yaw": -49.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B0A8EAD2_A0E0_1343_41E2_70CAD941553B",
  "initialPosition": {
   "yaw": -168.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B09A3AE0_A0E0_137F_41CA_CE3CB33DF68D",
  "initialPosition": {
   "yaw": -3.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_B08D9AEF_A0E0_1341_41AF_84A79735D5F9",
  "initialPosition": {
   "yaw": 0.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFE7AB27_A0E0_12C1_41DF_BBF41266B68C",
  "initialPosition": {
   "yaw": 7.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFE09B36_A0E0_12C3_41AC_3B449A8B6785",
  "initialPosition": {
   "yaw": -156.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFEDBB43_A0E0_1141_41B2_FD26239D4B8C",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AFE97B52_A0E0_1143_41CB_0FE877F0D86F",
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFD3DB61_A0E0_1141_41CF_12E50CB4AA6E",
  "initialPosition": {
   "yaw": 11.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFDCAB71_A0E0_1141_41E0_8F7BDBFEC772",
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFC2AB81_A0E0_11C1_41C7_DC381492DD52",
  "initialPosition": {
   "yaw": -177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFCA1B91_A0E0_11C1_41A8_84E119AD645E",
  "initialPosition": {
   "yaw": -175.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFB08BA0_A0E0_11FF_41D4_68D296431056",
  "initialPosition": {
   "yaw": 0.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFA66BAF_A0E0_11C1_41D8_ADA71C89A4E8",
  "initialPosition": {
   "yaw": 173.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AFAF1BBE_A0E0_11C3_41DF_432058DB3D48",
  "initialPosition": {
   "yaw": -179.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF925BCC_A0E0_1140_41DB_C274A8F1EE83",
  "initialPosition": {
   "yaw": -179.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF987BDA_A0E0_1140_41D5_FDA93D0B0FFC",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AF812BE9_A0E0_1140_41D4_AD6492D3473A",
  "initialPosition": {
   "yaw": -178.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF749BF8_A0E0_1140_41DE_F775CA5261F0",
  "initialPosition": {
   "yaw": 143.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF7BEC08_A0E0_16C0_41D9_3026BD8B65E8",
  "initialPosition": {
   "yaw": -142.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF6E3C16_A0E0_16C0_41E2_04F30C56C83C",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AF538C25_A0E0_16C1_41AE_3D0361979F5B",
  "initialPosition": {
   "yaw": -24.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF468C34_A0E0_16C7_41D6_90900FAC7BEB",
  "initialPosition": {
   "yaw": -1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF4BEC43_A0E0_1741_41CC_A45A972598AB",
  "initialPosition": {
   "yaw": -12.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF3F5C52_A0E0_1743_41DB_6744FDC5608A",
  "initialPosition": {
   "yaw": 178.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF221C61_A0E0_1741_4198_3D2174B029AD",
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF172C70_A0E0_175F_41DD_0657628B4537",
  "initialPosition": {
   "yaw": 178.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF184C7F_A0E0_1741_41B5_87F439CE2314",
  "initialPosition": {
   "yaw": 0.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_AF0BCC8F_A0E0_17C1_41D3_C09B627F8A67",
  "initialPosition": {
   "yaw": -179.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
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
  "toolTipFontSize": 12,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowVerticalLength": 0,
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
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "borderRadius": 0,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderSize": 0,
  "playbackBarLeft": 0,
  "width": "100%",
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
  "class": "Container",
  "width": "98.794%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "layout": "absolute",
  "borderSize": 0,
  "gap": 3,
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
    "class": "Container",
    "width": 235.1,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
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
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 145,
      "width": 181.7,
      "borderRadius": 0,
      "height": 71,
      "transparencyActive": false,
      "borderSize": 0,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
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
    "class": "Container",
    "width": 1638,
    "borderRadius": 9,
    "scrollBarWidth": 10,
    "height": 436,
    "verticalAlign": "top",
    "layout": "absolute",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 4,
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
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 145,
      "width": 70,
      "borderRadius": 0,
      "height": 70,
      "transparencyActive": false,
      "borderSize": 0,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
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
  "class": "Container",
  "width": "100%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "height": 275.05,
  "verticalAlign": "bottom",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "gap": 10,
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
    "class": "Container",
    "width": "97.739%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 181,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
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
      "class": "Container",
      "width": 564,
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 181,
      "verticalAlign": "top",
      "layout": "absolute",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "width": 564,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 167,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "2.21%",
        "overflow": "scroll",
        "visible": false,
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
        "class": "Container",
        "width": 564,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 167,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "97.619%",
              "text": "Commercial District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Commercial District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Cultural District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Cultural District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Eco District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "Eco District",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
        "class": "Container",
        "width": "100%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "verticalAlign": "middle",
          "layout": "vertical",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 0,
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
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 126,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
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
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
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
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 42,
            "verticalAlign": "top",
            "layout": "absolute",
            "scrollBarMargin": 2,
            "borderSize": 0,
            "gap": 10,
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFFFF",
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
              "class": "Label",
              "fontSize": 18,
              "width": "100%",
              "borderRadius": 0,
              "height": "96.774%",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontFamily": "Arial",
              "fontColor": "#FFFF00",
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
    "class": "Container",
    "width": "97.913%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 77,
    "verticalAlign": "bottom",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
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
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
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
        "paddingRight": 0,
        "class": "IconButton",
        "mode": "push",
        "maxHeight": 84,
        "width": 70,
        "borderRadius": 0,
        "height": 70,
        "transparencyActive": false,
        "borderSize": 0,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
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
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "width": 54,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 54,
        "verticalAlign": "top",
        "layout": "absolute",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
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
          "class": "Image",
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
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
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
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
  "class": "Container",
  "width": "100%",
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "layout": "absolute",
  "borderSize": 0,
  "gap": 10,
  "borderRadius": 0,
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
  "visible": false,
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
    "class": "Image",
    "width": "100%",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
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
    "class": "Container",
    "width": "95.4%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 3,
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
      "class": "Container",
      "width": "91.466%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "65.789%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
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
      "class": "Container",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
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
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 6,
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
          "class": "Container",
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
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
          "class": "Container",
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
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
          "class": "Container",
          "maxHeight": 49,
          "width": "43.969%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 49,
            "width": "92.63%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
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
      "class": "Container",
      "width": "99.52%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
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
      "class": "Container",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "11.131%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 45,
          "width": "98.485%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
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
        "class": "Container",
        "width": "13.57%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 243,
          "width": "97.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "39.005%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "94.66%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "6.977%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 300,
          "width": "94%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "67.082%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
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
      "class": "Container",
      "width": "97.61%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 4,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "11.389%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "98.99%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "41.415%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "99.792%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "29.099%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "97.52%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
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
    "class": "Container",
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
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
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 72,
      "width": 62,
      "borderRadius": 0,
      "height": 58,
      "transparencyActive": false,
      "borderSize": 0,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
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
    "class": "Container",
    "width": "95.4%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 3,
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
      "class": "Container",
      "width": "91.379%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "47.5%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
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
      "class": "Container",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
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
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 6,
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
          "class": "Container",
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "99.123%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
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
          "class": "Container",
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
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
          "class": "Container",
          "maxHeight": 49,
          "width": "46.891%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
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
      "class": "Container",
      "width": "99.52%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
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
      "class": "Container",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "8.714%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 45,
          "width": "81.25%",
          "borderRadius": 0,
          "height": "95.238%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
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
        "class": "Container",
        "width": "11.212%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 243,
          "width": "91.13%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "21.881%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "97.93%",
          "borderRadius": 0,
          "height": "97.62%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "4.973%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 300,
          "width": "100%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "19.078%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 9,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "86.73%",
          "borderRadius": 0,
          "height": "85.714%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "33.333%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
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
      "class": "Container",
      "width": "97.61%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 4,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "8.534%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "77.193%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "40.316%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "98.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "53.351%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "64%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
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
    "class": "Container",
    "width": "63.993%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 6,
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 61,
        "width": "79.087%",
        "borderRadius": 0,
        "height": "68.085%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 0,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "100%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 0,
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
          "class": "Container",
          "maxHeight": 300,
          "width": "9.882%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "80.769%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "right",
            "borderSize": 0,
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
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
          "class": "Container",
          "maxHeight": 300,
          "width": "9.88%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "right",
            "borderSize": 0,
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
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
          "class": "Container",
          "maxHeight": 49,
          "width": "52.993%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
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
            "class": "Image",
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "20%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 5,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "36.784%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "99.515%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
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
        "class": "Container",
        "width": "12.412%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 243,
          "width": "97.78%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "18.943%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "93.13%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "66.075%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "99.764%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 2,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "4.213%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "95.45%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "10.118%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 300,
          "width": "82.14%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "right",
          "borderSize": 0,
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "32.594%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "92.89%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
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
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Image",
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "18.18%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 0,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "33.925%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "92.12%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
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
        "class": "Container",
        "maxHeight": 300,
        "width": "8.471%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 300,
          "width": "89.8%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
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
        "class": "Container",
        "maxHeight": 49,
        "width": "17.96%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "93.98%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
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
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
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
        "class": "Container",
        "maxHeight": 49,
        "width": "56.984%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
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
          "class": "Image",
          "maxHeight": 49,
          "width": "99.78%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
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
 "class": "Player",
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
 "height": "100%",
 "minWidth": 20,
 "width": "100%",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
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
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_AFC768CF_A0E0_1F41_41D8_6BEAB83F17E7.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
})