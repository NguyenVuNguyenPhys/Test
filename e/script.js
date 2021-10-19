TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "cardboardMenu": {
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "id": "Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
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
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF"
  },
  "class": "Panorama",
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
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
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_94A782E6_9945_16E7_41B2_720181482340); this.mainPlayList.set('selectedIndex', 1)",
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
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
     "class": "Panorama",
     "partial": false,
     "pitch": 0,
     "hfovMin": 60,
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
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_97696359_9945_172D_41DF_8A21B9885CC2); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
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
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_97651349_9945_172D_41D0_10AADE46BDF4); this.mainPlayList.set('selectedIndex', 0)",
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
     "hfovMax": 120,
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
        "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
        "class": "Panorama",
        "partial": false,
        "pitch": 0,
        "hfovMin": 60,
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
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_97A64486_9945_1127_41D0_99950699593E); this.mainPlayList.set('selectedIndex', 3)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_97AB049B_9945_112D_41BF_33E1DCF6EB92); this.mainPlayList.set('selectedIndex', 1)",
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
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
           "class": "Panorama",
           "partial": false,
           "pitch": 0,
           "hfovMin": 60,
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
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_9480029D_9945_1125_41D7_D5181695A4EF); this.mainPlayList.set('selectedIndex', 2)",
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
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_94865290_9945_113B_41E2_BE4535440FDD); this.mainPlayList.set('selectedIndex', 4)",
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
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
              "class": "Panorama",
              "partial": false,
              "pitch": 0,
              "hfovMin": 60,
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
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_975A55BF_9945_1365_41AF_BFEF092F3CF8); this.mainPlayList.set('selectedIndex', 5)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_975405B1_9945_137D_41E0_D6EDFFB67898); this.mainPlayList.set('selectedIndex', 3)",
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
              "hfovMax": 120,
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
                 "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                 "class": "Panorama",
                 "partial": false,
                 "pitch": 0,
                 "hfovMin": 60,
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
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_948DF2AB_9945_116D_41D3_ABEC05477C04); this.mainPlayList.set('selectedIndex', 4)",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_949662B8_9945_116C_41A9_384E49EC855B); this.mainPlayList.set('selectedIndex', 6)",
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
                 "hfovMax": 120,
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
                    "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                    "class": "Panorama",
                    "partial": false,
                    "pitch": 0,
                    "hfovMin": 60,
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
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_9745E31E_9945_1727_41C4_BEE064B648EE); this.mainPlayList.set('selectedIndex', 5)",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9751E33B_9945_176D_41E2_3DCFCB36E5B2); this.mainPlayList.set('selectedIndex', 7)",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_9748C32C_9945_176B_41E2_4FF9D355504E); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                    "hfovMax": 120,
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
                       "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                       "class": "Panorama",
                       "partial": false,
                       "pitch": 0,
                       "hfovMin": 60,
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
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_977C7368_9945_17EA_41D3_41E97F675266); this.mainPlayList.set('selectedIndex', 22)",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_97121395_9945_173A_41D2_73CDAD3CAF88); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_9700E377_9945_17E6_41C2_149561D57BAE); this.mainPlayList.set('selectedIndex', 16)",
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
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                          "class": "Panorama",
                          "partial": false,
                          "pitch": 0,
                          "hfovMin": 60,
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
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_97D8D411_9945_113D_41D0_CBDEFE622F0D); this.mainPlayList.set('selectedIndex', 15)",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_97F1643D_9945_1165_41E0_8EDDC4494100); this.mainPlayList.set('selectedIndex', 18)",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_97ED242A_9945_116F_41E2_7C0CD068B70B); this.mainPlayList.set('selectedIndex', 21)",
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
                          "hfovMax": 120,
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
                             "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                             "class": "Panorama",
                             "partial": false,
                             "pitch": 0,
                             "hfovMin": 60,
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
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_949CE2D8_9945_112B_41CC_41BD0631F170); this.mainPlayList.set('selectedIndex', 20)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_949072CA_9945_112F_41D5_3B095833CAA0); this.mainPlayList.set('selectedIndex', 22)",
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
                             "hfovMax": 120,
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
                                "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                "class": "Panorama",
                                "partial": false,
                                "pitch": 0,
                                "hfovMin": 60,
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
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_9783C457_9945_1125_41E1_F21FBA2298EC); this.mainPlayList.set('selectedIndex', 21)",
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
                                "hfovMax": 120,
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
                             "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                             "class": "Panorama",
                             "partial": false,
                             "pitch": 0,
                             "hfovMin": 60,
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
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_948EF4FC_9945_12EA_41AC_E13A6FD46763); this.mainPlayList.set('selectedIndex', 22)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_97BD14B4_9945_117B_4172_7F56525AB435); this.mainPlayList.set('selectedIndex', 17)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_964F94C4_9945_111B_41DB_CCB91620303D); this.mainPlayList.set('selectedIndex', 19)",
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
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": {
                                "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                "class": "Panorama",
                                "partial": false,
                                "pitch": 0,
                                "hfovMin": 60,
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
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_94AB655C_9945_132B_41B9_00672192D671); this.mainPlayList.set('selectedIndex', 18)",
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
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_94B7B56A_9945_13EF_41DB_CE3979B18B35); this.mainPlayList.set('selectedIndex', 16)",
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
                                "hfovMax": 120,
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
                                   "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                   "class": "Panorama",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfovMin": 60,
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
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_94BCB310_9945_173B_41DC_98B3D094127C); this.mainPlayList.set('selectedIndex', 15)",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_94A99302_9945_171F_41D7_4C515F068794); this.mainPlayList.set('selectedIndex', 17)",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_94A122F4_9945_16FB_41C6_BE5BD7212639); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                      "class": "Panorama",
                                      "partial": false,
                                      "pitch": 0,
                                      "hfovMin": 60,
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
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_94A7F541_9945_131D_41C7_098BF92E042A); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_949BD534_9945_137A_41BB_B963BD8C92BC); this.mainPlayList.set('selectedIndex', 10)",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_94A1F54F_9945_1325_41D3_2D740FC4AAEE); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                         "class": "Panorama",
                                         "partial": false,
                                         "pitch": 0,
                                         "hfovMin": 60,
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
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_97449595_9945_1325_41BF_4CAFAFE2785D); this.mainPlayList.set('selectedIndex', 9)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_974F75A3_9945_131D_41B5_5615BB51DAD7); this.mainPlayList.set('selectedIndex', 11)",
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
                                         "hfovMax": 120,
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
                                            "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                            "class": "Panorama",
                                            "partial": false,
                                            "pitch": 0,
                                            "hfovMin": 60,
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
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_97D6F3FE_9945_16E7_41DC_F6F45EB042DF); this.mainPlayList.set('selectedIndex', 10)",
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_97C2C3EA_9945_16EF_41D0_7E84297D0974); this.mainPlayList.set('selectedIndex', 12)",
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
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "distance": 1,
                                              "panorama": {
                                               "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                               "class": "Panorama",
                                               "partial": false,
                                               "pitch": 0,
                                               "hfovMin": 60,
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
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_94B1A578_9945_13EB_41C7_C32A81A56207); this.mainPlayList.set('selectedIndex', 13)",
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
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_94BBA586_9945_1327_41E1_C4F45A5F433A); this.mainPlayList.set('selectedIndex', 11)",
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
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "distance": 1,
                                                 "panorama": {
                                                  "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                                  "class": "Panorama",
                                                  "partial": false,
                                                  "pitch": 0,
                                                  "hfovMin": 60,
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
                                                      "enabledInCardboard": true,
                                                      "useHandCursor": true,
                                                      "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_9488950A_9945_132E_41DF_8FC362AE9FAF); this.mainPlayList.set('selectedIndex', 12)",
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
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_9494C518_9945_132A_41DD_3D06AA3BE18F); this.mainPlayList.set('selectedIndex', 14)",
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
                                                  "hfovMax": 120,
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
                                                     "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                                     "class": "Panorama",
                                                     "partial": false,
                                                     "pitch": 0,
                                                     "hfovMin": 60,
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
                                                         "enabledInCardboard": true,
                                                         "useHandCursor": true,
                                                         "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_976145CF_9945_1325_41C4_64ACC26BF3C0); this.mainPlayList.set('selectedIndex', 13)",
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
                                                     "hfovMax": 120,
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
                                         "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                         "class": "Panorama",
                                         "partial": false,
                                         "pitch": 0,
                                         "hfovMin": 60,
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
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_972D53C0_9945_171A_41D8_57A1EAED5985); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_972693A8_9945_176A_41E0_1F5E492C77E9); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_9731A3D2_9945_173F_41E2_B579E4A45950); this.mainPlayList.set('selectedIndex', 6)",
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
                                         "hfovMax": 120,
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
                                            "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                            "class": "Panorama",
                                            "partial": false,
                                            "pitch": 0,
                                            "hfovMin": 60,
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
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9797F46C_9945_11EB_419B_C67A8B3E7F42); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
                                            "hfovMax": 120,
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
                                "cardboardMenu": "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
                                "class": "Panorama",
                                "partial": false,
                                "pitch": 0,
                                "hfovMin": 60,
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
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_949E0526_9945_1366_41E1_038A7133F71E); this.mainPlayList.set('selectedIndex', 18)",
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
                                "hfovMax": 120,
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
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
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
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
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
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "class": "ViewerArea",
   "progressBackgroundColorRatios": [
    0
   ],
   "width": 682,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "height": 436,
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
   "playbackBarHeadHeight": 15,
   "playbackBarHeadShadowVerticalLength": 0,
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
   "paddingLeft": 0,
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
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "id": "PanoramaPlayListItem_979A1232_9945_117E_41D2_E4299A995D85",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_979A1232_9945_117E_41D2_E4299A995D85, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "id": "PanoramaPlayListItem_979AD233_9945_117E_41DA_D745071486FC",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_979AD233_9945_117E_41DA_D745071486FC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "id": "PanoramaPlayListItem_94E3225C_9945_112B_41D1_5C430E7EBC51",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E3225C_9945_112B_41D1_5C430E7EBC51, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "id": "PanoramaPlayListItem_94E3D25D_9945_1125_41DD_BF18E18EC85D",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E3D25D_9945_1125_41DD_BF18E18EC85D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "id": "PanoramaPlayListItem_94E0225D_9945_1125_41DC_A2A5B5C17D08",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E0225D_9945_1125_41DC_A2A5B5C17D08, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "id": "PanoramaPlayListItem_94E0625E_9945_1127_41A8_56A904ED9D11",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E0625E_9945_1127_41A8_56A904ED9D11, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "id": "PanoramaPlayListItem_94E0A25E_9945_1127_41DC_366311AD32F2",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E0A25E_9945_1127_41DC_366311AD32F2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "id": "PanoramaPlayListItem_94E0F25F_9945_1125_41D1_816B5B9CE4F9",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E0F25F_9945_1125_41D1_816B5B9CE4F9, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "id": "PanoramaPlayListItem_94E3D25F_9945_1125_41B7_95AE03FF83C9",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E3D25F_9945_1125_41B7_95AE03FF83C9, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "id": "PanoramaPlayListItem_94E01260_9945_111B_41D8_0D6BBF089932",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E01260_9945_111B_41D8_0D6BBF089932, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "id": "PanoramaPlayListItem_94E06261_9945_111D_41D2_512117662688",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E06261_9945_111D_41D2_512117662688, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "id": "PanoramaPlayListItem_94E0B261_9945_111D_41D8_512D518A996B",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E0B261_9945_111D_41D8_512D518A996B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "id": "PanoramaPlayListItem_94E10262_9945_111F_41D3_1390C2952453",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E10262_9945_111F_41D3_1390C2952453, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "id": "PanoramaPlayListItem_94E15262_9945_111F_41BB_21AE3EAA1955",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E15262_9945_111F_41BB_21AE3EAA1955, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "id": "PanoramaPlayListItem_94E1B263_9945_111D_41CC_07230BCCFEDC",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94E1B263_9945_111D_41CC_07230BCCFEDC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "id": "PanoramaPlayListItem_94EE0263_9945_111D_41DD_C0DD3DEBBFCF",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EE0263_9945_111D_41DD_C0DD3DEBBFCF, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "id": "PanoramaPlayListItem_94EE4264_9945_111B_41E2_DE25968D6376",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EE4264_9945_111B_41E2_DE25968D6376, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "id": "PanoramaPlayListItem_94EE9264_9945_111B_41E2_FA95072B2745",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EE9264_9945_111B_41E2_FA95072B2745, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "id": "PanoramaPlayListItem_94EEE265_9945_11E5_41DF_498F3A57A9CC",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EEE265_9945_11E5_41DF_498F3A57A9CC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "id": "PanoramaPlayListItem_94EF3265_9945_11E5_41CA_5F737B43D31E",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EF3265_9945_11E5_41CA_5F737B43D31E, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "id": "PanoramaPlayListItem_94EF8266_9945_11E7_41C4_35559D3A95BB",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EF8266_9945_11E7_41C4_35559D3A95BB, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "id": "PanoramaPlayListItem_94EFE266_9945_11E7_41E0_3D63670154DC",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EFE266_9945_11E7_41E0_3D63670154DC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "id": "PanoramaPlayListItem_94EC3267_9945_11E5_4199_80DC215E51D8",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_94EC3267_9945_11E5_4199_80DC215E51D8, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "id": "playList_979CF231_9945_117A_41D1_F3E56FA92286",
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
 "this.Menu_94ECB267_9945_11E5_41A9_6E9744C8C43C",
 {
  "id": "camera_94865290_9945_113B_41E2_BE4535440FDD",
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
  "id": "camera_9480029D_9945_1125_41D7_D5181695A4EF",
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
  "id": "camera_948DF2AB_9945_116D_41D3_ABEC05477C04",
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
  "id": "camera_949662B8_9945_116C_41A9_384E49EC855B",
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
  "id": "camera_949072CA_9945_112F_41D5_3B095833CAA0",
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
  "id": "camera_949CE2D8_9945_112B_41CC_41BD0631F170",
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
  "id": "camera_94A782E6_9945_16E7_41B2_720181482340",
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
  "id": "camera_94A122F4_9945_16FB_41C6_BE5BD7212639",
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
  "id": "camera_94A99302_9945_171F_41D7_4C515F068794",
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
  "id": "camera_94BCB310_9945_173B_41DC_98B3D094127C",
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
  "id": "camera_9745E31E_9945_1727_41C4_BEE064B648EE",
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
  "id": "camera_9748C32C_9945_176B_41E2_4FF9D355504E",
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
  "id": "camera_9751E33B_9945_176D_41E2_3DCFCB36E5B2",
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
  "id": "camera_97651349_9945_172D_41D0_10AADE46BDF4",
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
  "id": "camera_97696359_9945_172D_41DF_8A21B9885CC2",
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
  "id": "camera_977C7368_9945_17EA_41D3_41E97F675266",
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
  "id": "camera_9700E377_9945_17E6_41C2_149561D57BAE",
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
  "id": "camera_97121395_9945_173A_41D2_73CDAD3CAF88",
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
  "id": "camera_972693A8_9945_176A_41E0_1F5E492C77E9",
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
  "id": "camera_972D53C0_9945_171A_41D8_57A1EAED5985",
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
  "id": "camera_9731A3D2_9945_173F_41E2_B579E4A45950",
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
  "id": "camera_97C2C3EA_9945_16EF_41D0_7E84297D0974",
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
  "id": "camera_97D6F3FE_9945_16E7_41DC_F6F45EB042DF",
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
  "id": "camera_97D8D411_9945_113D_41D0_CBDEFE622F0D",
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
  "id": "camera_97ED242A_9945_116F_41E2_7C0CD068B70B",
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
  "id": "camera_97F1643D_9945_1165_41E0_8EDDC4494100",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_9783C457_9945_1125_41E1_F21FBA2298EC",
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
  "id": "camera_9797F46C_9945_11EB_419B_C67A8B3E7F42",
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
 },
 {
  "id": "camera_97A64486_9945_1127_41D0_99950699593E",
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
  "id": "camera_97AB049B_9945_112D_41BF_33E1DCF6EB92",
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
  "id": "camera_97BD14B4_9945_117B_4172_7F56525AB435",
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
  "id": "camera_964F94C4_9945_111B_41DB_CCB91620303D",
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
  "id": "camera_948EF4FC_9945_12EA_41AC_E13A6FD46763",
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
  "id": "camera_9488950A_9945_132E_41DF_8FC362AE9FAF",
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
  "id": "camera_9494C518_9945_132A_41DD_3D06AA3BE18F",
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
  "id": "camera_949E0526_9945_1366_41E1_038A7133F71E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_949BD534_9945_137A_41BB_B963BD8C92BC",
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
  "id": "camera_94A7F541_9945_131D_41C7_098BF92E042A",
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
  "id": "camera_94A1F54F_9945_1325_41D3_2D740FC4AAEE",
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
  "id": "camera_94AB655C_9945_132B_41B9_00672192D671",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_94B7B56A_9945_13EF_41DB_CE3979B18B35",
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
  "id": "camera_94B1A578_9945_13EB_41C7_C32A81A56207",
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
  "id": "camera_94BBA586_9945_1327_41E1_C4F45A5F433A",
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
  "id": "camera_97449595_9945_1325_41BF_4CAFAFE2785D",
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
  "id": "camera_974F75A3_9945_131D_41B5_5615BB51DAD7",
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
  "id": "camera_975405B1_9945_137D_41E0_D6EDFFB67898",
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
  "id": "camera_975A55BF_9945_1365_41AF_BFEF092F3CF8",
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
  "id": "camera_976145CF_9945_1325_41C4_64ACC26BF3C0",
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal"
 },
 {
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "paddingRight": 0,
  "class": "Container",
  "height": "96.96%",
  "width": "98.794%",
  "layout": "absolute",
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "gap": 3,
  "borderRadius": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "visible": false,
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "overflow": "hidden",
  "paddingLeft": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 38.1,
    "height": "99.332%",
    "layout": "absolute",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": 0,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "visible",
    "left": 14,
    "paddingLeft": 0,
    "children": [
     {
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
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
      "left": "0%",
      "paddingLeft": 0
     },
     {
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 70,
      "height": 70,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Image_9BC18700_973E_EDCF_41D1_969C35DE9E10, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "left": "10.27%",
      "paddingLeft": 0
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 1638,
    "height": 436,
    "layout": "absolute",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 9,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "0.06%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "visible",
    "left": "0%",
    "paddingLeft": 0,
    "children": [
     "this.MapViewer",
     {
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 70,
      "height": 70,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Image_9BC18700_973E_EDCF_41D1_969C35DE9E10, true, 0, null, null, false)",
      "maxWidth": 108,
      "top": "0.1%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "left": "1.17%",
      "paddingLeft": 0
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "width": 200,
    "height": 93,
    "layout": "absolute",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "1.23%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_9A9A0389_973E_64D1_41C9_5E7149E9EF5C",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "left": "6.53%",
    "paddingLeft": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Image",
      "width": 112,
      "height": 55,
      "maxHeight": 55,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "url": "skin/Image_9BC18700_973E_EDCF_41D1_969C35DE9E10.png",
      "scaleMode": "fit_inside",
      "maxWidth": 112,
      "top": "2.5%",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Image_9BC18700_973E_EDCF_41D1_969C35DE9E10",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "left": "2%",
      "paddingLeft": 0
     }
    ]
   }
  ]
 },
 {
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "class": "Container",
  "paddingRight": 0,
  "height": "100%",
  "layout": "absolute",
  "borderSize": 0,
  "width": "100%",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
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
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "left": "0%",
  "paddingLeft": 0,
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
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"en\";this.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, false, 0, null, null, false);this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false);this.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, false, 0, null, null, false);this.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, false, 0, null, null, false);this.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, false, 0, null, null, false);this.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "left": -0.04,
    "paddingLeft": 0
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": "88.587%",
    "width": "60.736%",
    "layout": "vertical",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "top": "2.62%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "left": "18.69%",
    "paddingLeft": 0,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": "10.152%",
      "width": "92.083%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "paddingTop": 0,
        "paddingLeft": 0,
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
      "layout": "absolute",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "7.327%",
      "width": "99.94%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "86.667%",
        "width": "99.901%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.55%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
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
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.549%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
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
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "97.297%",
          "width": "46.753%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
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
            "paddingTop": 0,
            "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "paddingTop": 0,
        "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "13.477%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "97.67%",
        "width": "83.008%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "paddingTop": 0,
        "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "62.5%",
        "width": "13.505%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "33.984%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
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
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "height": "12.935%",
    "width": "100%",
    "layout": "absolute",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "left": "0%",
    "paddingLeft": 0,
    "children": [
     {
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
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
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "left": "3.02%",
      "paddingLeft": 0
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "height": "77.065%",
    "layout": "absolute",
    "borderSize": 0,
    "width": "53.136%",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "bottom": "9.57%",
    "id": "Container_8094493A_8C48_84B7_41A9_59553E60A5AE",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "paddingLeft": 0,
    "right": "20.33%",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Label",
      "fontSize": 36,
      "textDecoration": "none",
      "width": "70.034%",
      "height": "77.433%",
      "fontFamily": "Arial",
      "text": "English",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "fontStyle": "normal",
      "borderRadius": 0,
      "fontWeight": "normal",
      "top": "8.32%",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Label_80D5A638_8C48_8C4C_41DF_09CEF71B3091",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "fontColor": "#FFFFFF",
      "left": "14.87%",
      "paddingLeft": 0
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "height": "72.065%",
    "layout": "absolute",
    "borderSize": 0,
    "width": "54.346%",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "bottom": "13.8%",
    "id": "Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "paddingLeft": 0,
    "right": "20.75%",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Label",
      "fontSize": 36,
      "textDecoration": "none",
      "width": "37.292%",
      "height": "26.848%",
      "fontFamily": "Arial",
      "text": "Japanese",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "fontStyle": "normal",
      "borderRadius": 0,
      "fontWeight": "normal",
      "top": "36.5%",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Label_813B3942_8C49_843F_41AE_348AA4BEC457",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "fontColor": "#FFFFFF",
      "left": "31.3%",
      "paddingLeft": 0
     }
    ]
   }
  ]
 },
 {
  "scrollBarVisible": "rollOver",
  "verticalAlign": "bottom",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "class": "Container",
  "paddingRight": 0,
  "height": 275.05,
  "layout": "vertical",
  "borderSize": 0,
  "width": "100%",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "left": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "height": 181,
    "layout": "horizontal",
    "borderSize": 0,
    "width": "97.739%",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "paddingRight": 0,
      "height": 181,
      "width": 564,
      "layout": "absolute",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 1,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "backgroundOpacity": 0.3,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "class": "Container",
        "paddingRight": 0,
        "height": 167,
        "width": 564,
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "top": "2.21%",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0,
         1
        ],
        "minHeight": 1,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "backgroundOpacity": 0.3,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
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
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "class": "Container",
        "paddingRight": 0,
        "height": 167,
        "width": 564,
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "top": "2.15%",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0,
         1
        ],
        "minHeight": 1,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "backgroundOpacity": 0.3,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "97.619%",
              "fontFamily": "Arial",
              "text": "Commercial District",
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
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Commercial District",
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
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
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
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
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
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
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
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
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
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "class": "Container",
        "paddingRight": 0,
        "height": "86.188%",
        "layout": "horizontal",
        "borderSize": 0,
        "width": "100%",
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "top": "5.47%",
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0,
         1
        ],
        "minHeight": 1,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "backgroundOpacity": 0.3,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "left": "0%",
        "paddingLeft": 0,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
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
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
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
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
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
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
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
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "height": 156,
          "layout": "vertical",
          "borderSize": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "visible",
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "height": 126,
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "visible",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0,
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Image",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "scaleMode": "fit_inside",
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%",
              "paddingLeft": 0
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "class": "Container",
            "height": 42,
            "width": "100%",
            "layout": "absolute",
            "borderSize": 0,
            "scrollBarColor": "#000000",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarOpacity": 0.5,
            "scrollBarMargin": 2,
            "overflow": "scroll",
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
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
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
              "left": "0%",
              "paddingLeft": 0
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "class": "Label",
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
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
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%",
              "paddingLeft": 0
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
    "scrollBarVisible": "rollOver",
    "verticalAlign": "bottom",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "height": 77,
    "layout": "horizontal",
    "borderSize": 0,
    "width": "97.913%",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "paddingRight": 0,
      "height": "100%",
      "layout": "absolute",
      "borderSize": 0,
      "width": "33.33%",
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 1,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "backgroundOpacity": 0.3,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "IconButton",
        "mode": "push",
        "width": 70,
        "height": 70,
        "maxHeight": 84,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "maxWidth": 84,
        "shadow": false,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "left": "2.45%",
        "paddingLeft": 0
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "paddingRight": 0,
      "height": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "width": "33.33%",
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 1,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "backgroundOpacity": 0.3,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "verticalAlign": "top",
        "paddingRight": 0,
        "class": "Container",
        "width": 54,
        "height": 54,
        "layout": "absolute",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Image",
          "width": 54,
          "height": 54,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "scaleMode": "fit_inside",
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "right": "-1.96%"
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Image",
          "width": 54,
          "height": 54,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "scaleMode": "fit_inside",
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "minHeight": 1,
          "visible": false,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "left": "0%",
          "paddingLeft": 0
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "paddingRight": 0,
      "height": "100%",
      "layout": "absolute",
      "borderSize": 0,
      "width": "33.33%",
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 1,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "backgroundOpacity": 0.3,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0
     }
    ]
   }
  ]
 },
 {
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "class": "Container",
  "paddingRight": 0,
  "height": "100%",
  "layout": "absolute",
  "borderSize": 0,
  "width": "100%",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "left": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "paddingRight": 0,
    "class": "Image",
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "borderRadius": 0,
    "scaleMode": "fit_outside",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"jp\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_98B5AC58_8F20_FA7C_41B7_17865EC5289F, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "left": "0%",
    "paddingLeft": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": "36.63%",
    "width": "69.96%",
    "layout": "vertical",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "top": "31.19%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "visible",
    "left": "14.16%",
    "paddingLeft": 0,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": "13.65%",
      "width": "91.39%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "100%",
        "maxHeight": 61,
        "width": "72.25%",
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "minWidth": 1,
        "maxWidth": 500,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": "0.613%",
      "width": "100%",
      "layout": "absolute",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "children": [
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "96.88%",
            "maxHeight": 300,
            "width": "79.49%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "112.12%",
            "maxHeight": 300,
            "width": "100%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 49,
          "width": "43.969%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "92.63%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "minWidth": 1,
            "maxWidth": 1000,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
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
      "height": "3.07%",
      "width": "99.52%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "backgroundColor": [],
      "class": "Container",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "layout": "horizontal",
      "borderSize": 0,
      "width": "95.22%",
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "11.131%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 45,
          "width": "98.485%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "13.57%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "97.98%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "minWidth": 1,
          "maxWidth": 258,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "36.561%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.545%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "minWidth": 1,
          "maxWidth": 408,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.53%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "minWidth": 1,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "67.082%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "minWidth": 1,
          "maxWidth": 734,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "height": "3.07%",
      "width": "97.61%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "11.389%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "98.99%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "minWidth": 1,
          "maxWidth": 222,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "41.415%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.792%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "29.099%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "97.52%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "paddingRight": 0,
    "class": "Container",
    "height": "12.935%",
    "width": "100%",
    "layout": "absolute",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "left": "0%",
    "paddingLeft": 0,
    "children": [
     {
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "width": 62,
      "height": 58,
      "maxHeight": 72,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "left": "3.02%",
      "paddingLeft": 0
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": "36.63%",
    "width": "70.02%",
    "layout": "vertical",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "top": "31.19%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "visible",
    "left": "14.16%",
    "paddingLeft": 0,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": "13.65%",
      "width": "91.39%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "100%",
        "maxHeight": 61,
        "width": "72.25%",
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "minWidth": 1,
        "maxWidth": 500,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": "0.613%",
      "width": "100%",
      "layout": "absolute",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "children": [
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "96.88%",
            "maxHeight": 300,
            "width": "79.49%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "112.12%",
            "maxHeight": 300,
            "width": "100%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 49,
          "width": "54.018%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "99%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "minWidth": 1,
            "maxWidth": 1000,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
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
      "height": "3.07%",
      "width": "99.52%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "backgroundColor": [],
      "class": "Container",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "layout": "horizontal",
      "borderSize": 0,
      "width": "95.22%",
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "9.05%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 45,
          "width": "98.485%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "13.57%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "97.98%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "minWidth": 1,
          "maxWidth": 258,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "29.65%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.545%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "minWidth": 1,
          "maxWidth": 408,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.53%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "minWidth": 1,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "19.1%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "70.755%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "34.751%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "minWidth": 1,
          "maxWidth": 734,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "height": "3.07%",
      "width": "97.61%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "8.534%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "77.193%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "minWidth": 1,
          "maxWidth": 117,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "minWidth": 1,
          "maxWidth": 222,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "38.879%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.27%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "minWidth": 1,
          "maxWidth": 459,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "53.351%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "76.163%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "class": "Container",
    "height": "88.587%",
    "width": "60.736%",
    "layout": "vertical",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "gap": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "top": "2.61%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "left": "18.64%",
    "paddingLeft": 0,
    "children": [
     {
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "class": "Container",
      "height": "5.767%",
      "width": "92.131%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "68.085%",
        "maxHeight": 61,
        "width": "79.087%",
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "minWidth": 1,
        "maxWidth": 500,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "class": "Container",
      "height": "0.175%",
      "width": "100%",
      "layout": "absolute",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "4.908%",
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "100%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "visible",
        "paddingLeft": 0,
        "children": [
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "9.82%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "right",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "100%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.592%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "97.059%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "minWidth": 1,
            "maxWidth": 300,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "paddingRight": 0,
          "class": "Container",
          "height": "75%",
          "maxHeight": 49,
          "width": "52.532%",
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "scrollBarColor": "#000000",
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "scrollBarWidth": 10,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarOpacity": 0.5,
          "scrollBarMargin": 2,
          "overflow": "scroll",
          "paddingLeft": 0,
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "98.78%",
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "minWidth": 1,
            "maxWidth": 1000,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
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
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "3.804%",
      "maxHeight": 49,
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "39.921%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "right",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "96.875%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "width": "11.122%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "99.123%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "left",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "minWidth": 1,
          "maxWidth": 258,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "20.159%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "left",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "height": "4.049%",
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "visible",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "89.474%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "87.879%",
          "maxHeight": 49,
          "width": "74.251%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "minWidth": 1,
          "maxWidth": 800,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "4.17%",
      "maxHeight": 49,
      "width": "69.836%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 2,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "7.835%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "right",
        "maxWidth": 1000,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "88.235%",
          "maxHeight": 45,
          "width": "81.818%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "minWidth": 1,
          "maxWidth": 45,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "13.229%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "minWidth": 1,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "97.06%",
        "maxHeight": 49,
        "width": "46.479%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "90.909%",
          "maxHeight": 49,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "left",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
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
      "height": "1.35%",
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
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
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "4.417%",
      "maxHeight": 49,
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "32.087%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "right",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "94.444%",
          "maxHeight": 49,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 300,
        "width": "14.022%",
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "80.851%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "left",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "minWidth": 1,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "20.457%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "94.444%",
          "maxHeight": 49,
          "width": "98.058%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "left",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "class": "Container",
      "height": "4.417%",
      "maxHeight": 49,
      "width": "100%",
      "layout": "horizontal",
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2,
      "overflow": "scroll",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "paddingRight": 0,
        "class": "Container",
        "height": "100%",
        "maxHeight": 49,
        "width": "73.209%",
        "layout": "horizontal",
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2,
        "overflow": "scroll",
        "paddingLeft": 0,
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "86.111%",
          "maxHeight": 49,
          "width": "98.507%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 }
], 
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "scripts": {
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } }
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "width": "100%",
 "paddingLeft": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_979CF231_9945_117A_41D1_F3E56FA92286.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click');self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)"
})