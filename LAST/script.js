TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_B44A8B91_A3BC_0D8B_41E3_DB26B45437E0); this.mainPlayList.set('selectedIndex', 1)"
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
  "partial": false,
  "pitch": 0,
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "id": "Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
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
   "opacity": 0.4
  },
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
     "width": 1021,
     "id": "map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "class": "Map",
     "thumbnailUrl": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_t.png",
     "image": {
      "levels": [
       {
        "height": 652,
        "class": "ImageResourceLevel",
        "width": 1021,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62.png"
       },
       {
        "height": 326,
        "class": "ImageResourceLevel",
        "width": 510,
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_lq.png",
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC75E9D_973A_9CF1_41BF_4EB86B8B1803",
       "map": {
        "offsetY": 0,
        "x": 298.6,
        "class": "HotspotMapOverlayMap",
        "width": 21.5,
        "y": 120.96,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46_map.gif"
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
        "x": 298.6,
        "class": "HotspotMapOverlayImage",
        "y": 120.96,
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46.png"
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
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "offsetY": 0,
        "x": 343.31,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 140.52,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47_map.gif"
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
        "x": 343.31,
        "class": "HotspotMapOverlayImage",
        "y": 140.52,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47.png"
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
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "offsetY": 0,
        "x": 390.53,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 159.38,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48_map.gif"
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
        "x": 390.53,
        "class": "HotspotMapOverlayImage",
        "y": 159.38,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48.png"
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
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "offsetY": 0,
        "x": 441.09,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 182.39,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49_map.gif"
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
        "x": 441.09,
        "class": "HotspotMapOverlayImage",
        "y": 182.39,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49.png"
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
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "offsetY": 0,
        "x": 501.1,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 201.74,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50_map.gif"
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
        "x": 501.1,
        "class": "HotspotMapOverlayImage",
        "y": 201.74,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50.png"
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
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "offsetY": 0,
        "x": 534.55,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 215.95,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51_map.gif"
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
        "x": 534.55,
        "class": "HotspotMapOverlayImage",
        "y": 215.95,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51.png"
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
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "offsetY": 0,
        "x": 599.21,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 246.4,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52_map.gif"
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
        "x": 599.21,
        "class": "HotspotMapOverlayImage",
        "y": 246.4,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52.png"
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
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "offsetY": 0,
        "x": 623.7,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 206.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53_map.gif"
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
        "x": 623.7,
        "class": "HotspotMapOverlayImage",
        "y": 206.61,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53.png"
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
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "offsetY": 0,
        "x": 622.61,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 145.83,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54_map.gif"
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
        "x": 622.61,
        "class": "HotspotMapOverlayImage",
        "y": 145.83,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54.png"
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
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "offsetY": 0,
        "x": 673.77,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.14,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55_map.gif"
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
        "x": 673.77,
        "class": "HotspotMapOverlayImage",
        "y": 238.14,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55.png"
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
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "offsetY": 0,
        "x": 735.26,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 237.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56_map.gif"
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
        "x": 735.26,
        "class": "HotspotMapOverlayImage",
        "y": 237.32,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56.png"
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
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "offsetY": 0,
        "x": 799.92,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.14,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57_map.gif"
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
        "x": 799.92,
        "class": "HotspotMapOverlayImage",
        "y": 238.14,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57.png"
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
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "offsetY": 0,
        "x": 845.45,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 238.14,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58_map.gif"
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
        "x": 845.45,
        "class": "HotspotMapOverlayImage",
        "y": 238.14,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58.png"
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
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "offsetY": 0,
        "x": 886.27,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 240.82,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59_map.gif"
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
        "x": 886.27,
        "class": "HotspotMapOverlayImage",
        "y": 240.82,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59.png"
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
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "offsetY": 0,
        "x": 616.05,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 298.16,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61_map.gif"
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
        "x": 616.05,
        "class": "HotspotMapOverlayImage",
        "y": 298.16,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61.png"
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
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "offsetY": 0,
        "x": 663.76,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 304.28,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62_map.gif"
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
        "x": 663.76,
        "class": "HotspotMapOverlayImage",
        "y": 304.28,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62.png"
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
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "offsetY": 0,
        "x": 662.4,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 331.66,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63_map.gif"
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
        "x": 662.4,
        "class": "HotspotMapOverlayImage",
        "y": 331.66,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63.png"
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
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "offsetY": 0,
        "x": 658.02,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 374.02,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64_map.gif"
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
        "x": 658.02,
        "class": "HotspotMapOverlayImage",
        "y": 374.02,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64.png"
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
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "offsetY": 0,
        "x": 672.45,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 422.45,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65_map.gif"
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
        "x": 672.45,
        "class": "HotspotMapOverlayImage",
        "y": 422.45,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65.png"
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
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "offsetY": 0,
        "x": 624.35,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 330.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66_map.gif"
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
        "x": 624.35,
        "class": "HotspotMapOverlayImage",
        "y": 330.08,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66.png"
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
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "offsetY": 0,
        "x": 585.17,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 343.31,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67_map.gif"
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
        "x": 585.17,
        "class": "HotspotMapOverlayImage",
        "y": 343.31,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67.png"
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
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "offsetY": 0,
        "x": 558,
        "class": "HotspotMapOverlayMap",
        "width": 21,
        "y": 359.21,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68_map.gif"
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
        "x": 558,
        "class": "HotspotMapOverlayImage",
        "y": 359.21,
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68.png"
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
       "id": "overlay_AD9E256A_A29C_7A99_41BD_16DA71BA0E10",
       "map": {
        "offsetY": 0,
        "x": 937.05,
        "class": "HotspotMapOverlayMap",
        "width": 12.51,
        "y": 247.27,
        "height": 12.51,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 6,
           "class": "ImageResourceLevel",
           "width": 6,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69_map.gif"
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
        "x": 937.05,
        "class": "HotspotMapOverlayImage",
        "y": 247.27,
        "width": 12.51,
        "height": 12.51,
        "image": {
         "levels": [
          {
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1
    }
   }
  ],
  "label": "C01",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
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
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_BB6BEE3E_A3BC_06F8_41E3_F5F26CE0AFAF); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
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
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_BB1ECE19_A3BC_06B8_41D4_9FC4A0D960EF); this.mainPlayList.set('selectedIndex', 0)"
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
     "partial": false,
     "pitch": 0,
     "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
      }
     ],
     "label": "C02",
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
        "hfovMax": 120,
        "hfovMin": 60,
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_BB842EE7_A3BC_0797_41D3_59452538E4F3); this.mainPlayList.set('selectedIndex', 3)"
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
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_BB8B0ED8_A3BC_07B9_41D9_77D13C292573); this.mainPlayList.set('selectedIndex', 1)"
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
        "partial": false,
        "pitch": 0,
        "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
         }
        ],
        "label": "C03",
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
           "hfovMax": 120,
           "hfovMin": 60,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_BB770E6C_A3BC_0699_41C0_71C4422B72CC); this.mainPlayList.set('selectedIndex', 2)"
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
                 "yaw": -1.54,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_BB65AE52_A3BC_0688_41D2_3F9AAEFBBD85); this.mainPlayList.set('selectedIndex', 4)"
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
           "partial": false,
           "pitch": 0,
           "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
            }
           ],
           "label": "C04",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_BBE0BF06_A3BC_0689_41D0_F94579D68557); this.mainPlayList.set('selectedIndex', 5)"
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_BBFDEF15_A3BC_068B_41DE_67F0ADE8BA0A); this.mainPlayList.set('selectedIndex', 3)"
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
              "partial": false,
              "pitch": 0,
              "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
               }
              ],
              "label": "C05",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_B569BFB7_A3BC_05F7_41E0_7641B029EF98); this.mainPlayList.set('selectedIndex', 4)"
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B563CFCC_A3BC_0598_41E1_7361E73F69D2); this.mainPlayList.set('selectedIndex', 6)"
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
                 "partial": false,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                  }
                 ],
                 "label": "C06",
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
                    "hfovMax": 120,
                    "hfovMin": 60,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_B4624B31_A3BC_0E8B_41E0_E3A83E908C08); this.mainPlayList.set('selectedIndex', 5)"
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B47EEB5D_A3BC_0EBB_41D9_C82E1357FA86); this.mainPlayList.set('selectedIndex', 7)"
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B4676B46_A3BC_0E89_41D7_9BA128A98508); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
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
                    "partial": false,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "class": "PanoramaMapLocation",
                      "y": 258.07,
                      "angle": 25.28,
                      "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                     }
                    ],
                    "label": "C07",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "backwardYaw": 5.64,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B4471BC0_A3BC_0D88_41DD_A9DB7E2B2927); this.mainPlayList.set('selectedIndex', 22)"
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B45F7BE3_A3BC_0D88_41DE_2FCA44748615); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B44D0BA7_A3BC_0D88_41D1_8C85CB0E081B); this.mainPlayList.set('selectedIndex', 16)"
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
                       "partial": false,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "mapLocations": [
                        {
                         "x": 628.49,
                         "class": "PanoramaMapLocation",
                         "y": 310.59,
                         "angle": 0,
                         "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                        }
                       ],
                       "label": "C16",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B4686B15_A3BC_0E8B_41D4_2208B5BE9446); this.mainPlayList.set('selectedIndex', 15)"
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B4148AF8_A3BC_0F79_41D7_8315011BA0D3); this.mainPlayList.set('selectedIndex', 17)"
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B4121AE0_A3BC_0F89_41DB_BC1DFBEEB454); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
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
                          "partial": false,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                          "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                          "mapLocations": [
                           {
                            "x": 676.22,
                            "class": "PanoramaMapLocation",
                            "y": 316.87,
                            "angle": 0,
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                           }
                          ],
                          "label": "C17",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B515DFA8_A3BC_0599_41DF_5BE54D3DA495); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B5135F99_A3BC_05BB_4192_6ED9993BC3C3); this.mainPlayList.set('selectedIndex', 10)"
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B51EDF8A_A3BC_0599_41CD_53A17BD8F659); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
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
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                             "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                             "mapLocations": [
                              {
                               "x": 686.27,
                               "class": "PanoramaMapLocation",
                               "y": 250.53,
                               "angle": 91.91,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "label": "C10",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": 78.56,
                               "backwardYaw": 37.47,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B4D70D85_A3BC_058B_41DA_746007DC896A); this.mainPlayList.set('selectedIndex', 9)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B4C5ED64_A3BC_0A88_41E4_11F32C47856A); this.mainPlayList.set('selectedIndex', 11)"
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
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                "mapLocations": [
                                 {
                                  "x": 747.51,
                                  "class": "PanoramaMapLocation",
                                  "y": 249.79,
                                  "angle": -86.82,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "label": "C11",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B486CCA5_A3BC_0B8B_41D3_A353A6355692); this.mainPlayList.set('selectedIndex', 10)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B4B49C82_A3BC_0B89_41C7_3194B44F5420); this.mainPlayList.set('selectedIndex', 12)"
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
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                   "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                   "mapLocations": [
                                    {
                                     "x": 812.45,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": -88.57,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C12",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMax": 120,
                                      "hfovMin": 60,
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
                                               "width": 65,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_BBB99EC2_A3BC_0789_41DA_2F32A3F226A9); this.mainPlayList.set('selectedIndex', 13)"
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
                                               "width": 130,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_BBAC4EAB_A3BC_079F_41D0_3D451DE0FA26); this.mainPlayList.set('selectedIndex', 11)"
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
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                      "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                      "mapLocations": [
                                       {
                                        "x": 858.03,
                                        "class": "PanoramaMapLocation",
                                        "y": 250.53,
                                        "angle": 86.73,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "label": "C13",
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
                                         "hfovMax": 120,
                                         "hfovMin": 60,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B57D0008_A3BC_1A98_41DA_D4B30A60DB08); this.mainPlayList.set('selectedIndex', 12)"
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_B5776023_A3BC_1A88_41D9_427495BE99FD); this.mainPlayList.set('selectedIndex', 14)"
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
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                         "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                         "mapLocations": [
                                          {
                                           "x": 898.74,
                                           "class": "PanoramaMapLocation",
                                           "y": 253.41,
                                           "angle": 88.03,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "label": "C14",
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
                                            "hfovMax": 120,
                                            "hfovMin": 60,
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B51A9F7B_A3BC_057F_41E0_E851FDEB0771); this.mainPlayList.set('selectedIndex', 13)"
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
                                            "partial": false,
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                            "class": "Panorama",
                                            "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                            "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                            "mapLocations": [
                                             {
                                              "x": 943.31,
                                              "class": "PanoramaMapLocation",
                                              "y": 253.53,
                                              "angle": 271.89,
                                              "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                             }
                                            ],
                                            "label": "C15",
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
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_B4B9EC55_A3BC_0A8B_41A3_D2D79B6F9CAB); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B4ACBC2F_A3BC_0A98_41DF_E4FECCE2E65D); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B4568C0B_A3BC_0A98_41DA_0FEBA1EF0E2A); this.mainPlayList.set('selectedIndex', 6)"
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
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                "mapLocations": [
                                 {
                                  "x": 636.25,
                                  "class": "PanoramaMapLocation",
                                  "y": 219.13,
                                  "angle": 180.55,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "label": "C08",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": 30.75,
                                  "backwardYaw": 11.96,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "yaw": -36.3,
                                  "backwardYaw": -138.38,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B4CBDD44_A3BC_0A88_41D1_EC7D6E1107F3); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
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
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                   "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                   "mapLocations": [
                                    {
                                     "x": 634.92,
                                     "class": "PanoramaMapLocation",
                                     "y": 158.55,
                                     "angle": 35.54,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C09",
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
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -138.38,
                               "backwardYaw": -36.3,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 37.47,
                            "backwardYaw": 78.56,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_BB5D4E96_A3BC_0789_41D3_FC574FB18F4D); this.mainPlayList.set('selectedIndex', 18)"
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
                                      "width": 65,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_BB405E84_A3BC_0788_41CB_6BD19E30179E); this.mainPlayList.set('selectedIndex', 16)"
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
                                      "width": 130,
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
                             "partial": false,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                             "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                             "mapLocations": [
                              {
                               "x": 674.74,
                               "class": "PanoramaMapLocation",
                               "y": 343.99,
                               "angle": 163.35,
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "label": "C18",
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
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_BB326DD1_A3BC_058B_41E3_3E675A42C127); this.mainPlayList.set('selectedIndex', 22)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_BB0F0DFA_A3BC_0578_41E2_8B9C0E85CB22); this.mainPlayList.set('selectedIndex', 17)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_BB204DB3_A3BC_058F_41E2_B8DABCE69DD6); this.mainPlayList.set('selectedIndex', 19)"
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
                                "partial": false,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                "mapLocations": [
                                 {
                                  "x": 670.6,
                                  "class": "PanoramaMapLocation",
                                  "y": 386.76,
                                  "angle": 0,
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "label": "C19",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_BB911EF5_A3BC_078B_41BB_35D8CC323A33); this.mainPlayList.set('selectedIndex', 18)"
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
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                   "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                   "mapLocations": [
                                    {
                                     "x": 684.05,
                                     "class": "PanoramaMapLocation",
                                     "y": 434.27,
                                     "angle": 147.84,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C20",
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
                                  "panorama": {
                                   "hfovMax": 120,
                                   "hfovMin": 60,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B4925CCF_A3BC_0B97_41D4_3AC25E180D64); this.mainPlayList.set('selectedIndex', 15)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B4F96D1F_A3BC_0AB8_41E3_D445D649A1FE); this.mainPlayList.set('selectedIndex', 18)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B4EC0CF2_A3BC_0B89_41E0_2F5693EDBAB0); this.mainPlayList.set('selectedIndex', 21)"
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
                                   "partial": false,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "mapLocations": [
                                    {
                                     "x": 636.99,
                                     "class": "PanoramaMapLocation",
                                     "y": 342.51,
                                     "angle": 144.87,
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C23",
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
                                      "hfovMax": 120,
                                      "hfovMin": 60,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_B5799FF3_A3BC_0588_41DB_69681048ECE6); this.mainPlayList.set('selectedIndex', 20)"
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B5679FE1_A3BC_0588_41C8_9D531AFCAB3D); this.mainPlayList.set('selectedIndex', 22)"
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
                                      "partial": false,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "mapLocations": [
                                       {
                                        "x": 597.76,
                                        "class": "PanoramaMapLocation",
                                        "y": 356.03,
                                        "angle": 71.57,
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "label": "C22",
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
                                         "hfovMax": 120,
                                         "hfovMin": 60,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B4703B79_A3BC_0D7B_41DA_4B22B1064C0A); this.mainPlayList.set('selectedIndex', 21)"
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
                                         "partial": false,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
                                         "class": "Panorama",
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "mapLocations": [
                                          {
                                           "x": 570.65,
                                           "class": "PanoramaMapLocation",
                                           "y": 371.77,
                                           "angle": 249.33,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "label": "C21",
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
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "yaw": -6.22,
                                     "backwardYaw": -36.03,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -36.03,
                                  "backwardYaw": -6.22,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                  "yaw": 26.17,
                                  "backwardYaw": 4.5,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": 4.5,
                               "backwardYaw": 26.17,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 155.68,
                            "backwardYaw": -162.77,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "yaw": -93.19,
                            "backwardYaw": 101.34,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": 101.34,
                         "backwardYaw": -93.19,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                         "yaw": -172.45,
                         "backwardYaw": -166.65,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": -20.33,
                         "backwardYaw": 163.21,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 163.21,
                      "backwardYaw": -20.33,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "yaw": 11.96,
                      "backwardYaw": 30.75,
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
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "backwardYaw": -1.54,
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
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "width": 682,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowBlurRadius": 3,
   "height": 436,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
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
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4376A9D_A3BC_0FB8_41A2_76552F1696BF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4376A9D_A3BC_0FB8_41A2_76552F1696BF",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B434DA9E_A3BC_0FB8_41DB_58E2C77EC70E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B434DA9E_A3BC_0FB8_41DB_58E2C77EC70E",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B434BA9E_A3BC_0FB8_41D2_920B912AE7E6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B434BA9E_A3BC_0FB8_41D2_920B912AE7E6",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4340A9F_A3BC_0FB8_41D7_0260215519D4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4340A9F_A3BC_0FB8_41D7_0260215519D4",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B435DA9F_A3BC_0FB8_41E3_FB2EC36E2E00, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B435DA9F_A3BC_0FB8_41E3_FB2EC36E2E00",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B435BAA0_A3BC_0F88_41DE_7E7C4DCB5858, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B435BAA0_A3BC_0F88_41DE_7E7C4DCB5858",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4357AA1_A3BC_0F88_41CF_BBB6550A77E8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4357AA1_A3BC_0F88_41CF_BBB6550A77E8",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40ACAA1_A3BC_0F88_41BF_01ED2698603F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40ACAA1_A3BC_0F88_41BF_01ED2698603F",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40A9AA2_A3BC_0F88_41D5_C49E100FB140, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40A9AA2_A3BC_0F88_41D5_C49E100FB140",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40A6AA2_A3BC_0F88_41A6_F26C20BDA2D4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40A6AA2_A3BC_0F88_41A6_F26C20BDA2D4",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40BCAA3_A3BC_0F88_41CA_E811FE9A11E7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40BCAA3_A3BC_0F88_41CA_E811FE9A11E7",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40B9AA4_A3BC_0F88_41D1_5A0B58BF0381, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40B9AA4_A3BC_0F88_41D1_5A0B58BF0381",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40B7AA4_A3BC_0F88_41E3_014D6CB8850A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40B7AA4_A3BC_0F88_41E3_014D6CB8850A",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B408CAA5_A3BC_0F88_41DD_8843DE837D9E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B408CAA5_A3BC_0F88_41DD_8843DE837D9E",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4089AA6_A3BC_0F88_41DC_BF9BE42CE245, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4089AA6_A3BC_0F88_41DC_BF9BE42CE245",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4087AA6_A3BC_0F88_41E1_A0D0ECA0C901, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4087AA6_A3BC_0F88_41E1_A0D0ECA0C901",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B409DAA7_A3BC_0F88_41D0_8F433A682DF8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B409DAA7_A3BC_0F88_41D0_8F433A682DF8",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B409BAA7_A3BC_0F88_41D5_16FF2496F002, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B409BAA7_A3BC_0F88_41D5_16FF2496F002",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B4091AA8_A3BC_0F98_41D3_0B684F9B55E3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B4091AA8_A3BC_0F98_41D3_0B684F9B55E3",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40EFAA8_A3BC_0F98_41D3_9D3456989CD5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40EFAA8_A3BC_0F98_41D3_9D3456989CD5",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40E4AA9_A3BC_0F98_41C9_F2E5AF2F7DA9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40E4AA9_A3BC_0F98_41C9_F2E5AF2F7DA9",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40E1AA9_A3BC_0F98_41C5_6EAFBE0DDFEB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40E1AA9_A3BC_0F98_41C5_6EAFBE0DDFEB",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B40F8AAA_A3BC_0F98_41E1_78A87DFAB1BD, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_B40F8AAA_A3BC_0F98_41E1_78A87DFAB1BD",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "class": "PlayList",
  "id": "playList_B437CA9D_A3BC_0FB8_41D2_E12BF7531E42",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_B40F7AAA_A3BC_0F99_41C4_58AC3F437738",
 {
  "class": "PanoramaCamera",
  "id": "camera_B4121AE0_A3BC_0F89_41DB_BC1DFBEEB454",
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
  "id": "camera_B4148AF8_A3BC_0F79_41D7_8315011BA0D3",
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
  "id": "camera_B4686B15_A3BC_0E8B_41D4_2208B5BE9446",
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
  "id": "camera_B4624B31_A3BC_0E8B_41E0_E3A83E908C08",
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
  "id": "camera_B4676B46_A3BC_0E89_41D7_9BA128A98508",
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
  "id": "camera_B47EEB5D_A3BC_0EBB_41D9_C82E1357FA86",
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
  "id": "camera_B4703B79_A3BC_0D7B_41DA_4B22B1064C0A",
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
  "id": "camera_B44A8B91_A3BC_0D8B_41E3_DB26B45437E0",
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
  "id": "camera_B44D0BA7_A3BC_0D88_41D1_8C85CB0E081B",
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
  "id": "camera_B4471BC0_A3BC_0D88_41DD_A9DB7E2B2927",
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
  "id": "camera_B45F7BE3_A3BC_0D88_41DE_2FCA44748615",
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
  "id": "camera_B4568C0B_A3BC_0A98_41DA_0FEBA1EF0E2A",
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
  "id": "camera_B4ACBC2F_A3BC_0A98_41DF_E4FECCE2E65D",
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
  "id": "camera_B4B9EC55_A3BC_0A8B_41A3_D2D79B6F9CAB",
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
  "id": "camera_B4B49C82_A3BC_0B89_41C7_3194B44F5420",
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
  "id": "camera_B486CCA5_A3BC_0B8B_41D3_A353A6355692",
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
  "id": "camera_B4925CCF_A3BC_0B97_41D4_3AC25E180D64",
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
  "id": "camera_B4EC0CF2_A3BC_0B89_41E0_2F5693EDBAB0",
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
  "id": "camera_B4F96D1F_A3BC_0AB8_41E3_D445D649A1FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B4CBDD44_A3BC_0A88_41D1_EC7D6E1107F3",
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
  "id": "camera_B4C5ED64_A3BC_0A88_41E4_11F32C47856A",
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
  "id": "camera_B4D70D85_A3BC_058B_41DA_746007DC896A",
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
  "id": "camera_BB204DB3_A3BC_058F_41E2_B8DABCE69DD6",
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
  "id": "camera_BB326DD1_A3BC_058B_41E3_3E675A42C127",
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
  "id": "camera_BB0F0DFA_A3BC_0578_41E2_8B9C0E85CB22",
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
  "id": "camera_BB1ECE19_A3BC_06B8_41D4_9FC4A0D960EF",
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
  "id": "camera_BB6BEE3E_A3BC_06F8_41E3_F5F26CE0AFAF",
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
  "id": "camera_BB65AE52_A3BC_0688_41D2_3F9AAEFBBD85",
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
  "id": "camera_BB770E6C_A3BC_0699_41C0_71C4422B72CC",
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
  "id": "camera_BB405E84_A3BC_0788_41CB_6BD19E30179E",
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
  "id": "camera_BB5D4E96_A3BC_0789_41D3_FC574FB18F4D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BBAC4EAB_A3BC_079F_41D0_3D451DE0FA26",
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
  "id": "camera_BBB99EC2_A3BC_0789_41DA_2F32A3F226A9",
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
  "id": "camera_BB8B0ED8_A3BC_07B9_41D9_77D13C292573",
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
  "id": "camera_BB842EE7_A3BC_0797_41D3_59452538E4F3",
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
  "id": "camera_BB911EF5_A3BC_078B_41BB_35D8CC323A33",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BBE0BF06_A3BC_0689_41D0_F94579D68557",
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
  "id": "camera_BBFDEF15_A3BC_068B_41DE_67F0ADE8BA0A",
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
  "id": "camera_B51A9F7B_A3BC_057F_41E0_E851FDEB0771",
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
  "id": "camera_B51EDF8A_A3BC_0599_41CD_53A17BD8F659",
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
  "id": "camera_B5135F99_A3BC_05BB_4192_6ED9993BC3C3",
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
  "id": "camera_B515DFA8_A3BC_0599_41DF_5BE54D3DA495",
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
  "id": "camera_B569BFB7_A3BC_05F7_41E0_7641B029EF98",
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
  "id": "camera_B563CFCC_A3BC_0598_41E1_7361E73F69D2",
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
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_B5679FE1_A3BC_0588_41C8_9D531AFCAB3D",
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
  "id": "camera_B5799FF3_A3BC_0588_41DB_69681048ECE6",
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
  "id": "camera_B57D0008_A3BC_1A98_41DA_D4B30A60DB08",
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
  "id": "camera_B5776023_A3BC_1A88_41D9_427495BE99FD",
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
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_B5A807AC_A3B4_0598_41B7_0A661F685D4F",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_B5A807AC_A3B4_0598_41B7_0A661F685D4F.mp3",
   "oggUrl": "media/audio_B5A807AC_A3B4_0598_41B7_0A661F685D4F.ogg"
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
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "verticalAlign": "top",
  "overflow": "hidden",
  "paddingRight": 0,
  "height": "96.96%",
  "width": "98.794%",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "gap": 3,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "backgroundOpacity": 0,
  "layout": "absolute",
  "paddingTop": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "right": "0%",
  "children": [
   {
    "verticalAlign": "top",
    "overflow": "visible",
    "paddingRight": 0,
    "width": 235.1,
    "height": "99.327%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "top": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": 14,
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 181.7,
      "height": 71,
      "maxHeight": 145,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "maxWidth": 378,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "left": "2.47%"
     }
    ]
   },
   {
    "verticalAlign": "top",
    "overflow": "visible",
    "paddingRight": 0,
    "width": 1638,
    "height": 436,
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 9,
    "horizontalAlign": "left",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "top": "0.06%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "scrollBarColor": "#000000",
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 70,
      "height": 70,
      "maxHeight": 145,
      "paddingLeft": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "maxWidth": 145,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "left": "1.16%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "bottom",
  "overflow": "scroll",
  "paddingRight": 0,
  "height": 275.05,
  "width": "100%",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "backgroundOpacity": 0,
  "layout": "vertical",
  "paddingTop": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": 181,
    "width": "97.739%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "paddingTop": 0,
    "class": "Container",
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "width": 564,
      "height": 181,
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "top": "2.21%",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
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
              "fontSize": 18,
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
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
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
              "fontSize": 18,
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
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
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
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
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
              "fontSize": 18,
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
            ]
           }
          ]
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "top": "2.15%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
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
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
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
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ]
           }
          ]
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "86.188%",
        "width": "100%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "top": "5.47%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
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
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
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
          "width": 180,
          "height": 156,
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "contentOpaque": false,
          "scrollBarVisible": "rollOver",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "paddingTop": 0,
          "class": "Container",
          "overflow": "visible",
          "scrollBarColor": "#000000",
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "width": 126,
            "height": 126,
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "visible",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "IconButton",
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
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
              "class": "Image",
              "left": "0%"
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "height": 42,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "scrollBarWidth": 10,
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "scrollBarMargin": 2,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "minHeight": 1,
            "paddingBottom": 0,
            "shadow": false,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "paddingTop": 0,
            "class": "Container",
            "overflow": "scroll",
            "scrollBarColor": "#000000",
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
              "fontColor": "#FFFFFF",
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "paddingLeft": 0,
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
              "class": "Label",
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
    "verticalAlign": "bottom",
    "paddingRight": 0,
    "height": 77,
    "width": "97.913%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "paddingTop": 0,
    "class": "Container",
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "100%",
      "width": "33.33%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "width": 70,
        "height": 70,
        "maxHeight": 84,
        "paddingLeft": 0,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "maxWidth": 84,
        "shadow": false,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "IconButton",
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "left": "2.45%"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "100%",
      "width": "33.33%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "top",
        "paddingRight": 0,
        "width": 54,
        "height": 54,
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "backgroundOpacity": 0,
        "layout": "absolute",
        "paddingTop": 0,
        "class": "Container",
        "overflow": "visible",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
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
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
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
          "width": 54,
          "height": 54,
          "maxHeight": 509,
          "paddingLeft": 0,
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
          "class": "Image",
          "left": "0%"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "100%",
      "width": "33.33%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "height": "100%",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
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
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "width": "100%",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "borderRadius": 0,
    "scaleMode": "fit_outside",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "class": "Image",
    "left": "0%"
   },
   {
    "verticalAlign": "middle",
    "overflow": "visible",
    "paddingRight": 0,
    "height": "49.24%",
    "width": "95.4%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "top": "23.14%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "10.817%",
      "width": "91.466%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "paddingRight": 0,
        "height": "65.789%",
        "maxHeight": 61,
        "width": "47.17%",
        "paddingLeft": 0,
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
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "0.613%",
      "width": "100%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000"
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "100%",
            "paddingLeft": 0,
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "98.889%",
            "paddingLeft": 0,
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "43.969%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 49,
            "width": "92.63%",
            "paddingLeft": 0,
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
            "class": "Image",
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
      "height": "3.07%",
      "width": "99.52%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
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
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "backgroundColor": [],
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "backgroundOpacity": 0.55,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "width": "95.22%",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "11.131%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 45,
          "width": "98.485%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "height": "100%",
        "width": "13.57%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "97.98%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "39.005%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "94.66%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.977%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "94%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "67.082%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "3.07%",
      "width": "97.61%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
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
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "11.389%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "98.99%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "41.415%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "99.792%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "29.099%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "97.52%",
          "paddingLeft": 0,
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
          "class": "Image",
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
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "12.935%",
    "width": "100%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "top": "0%",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "backgroundOpacity": 0,
    "layout": "absolute",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 62,
      "height": 58,
      "maxHeight": 72,
      "paddingLeft": 0,
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
      "class": "IconButton",
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "left": "3.02%"
     }
    ]
   },
   {
    "verticalAlign": "middle",
    "overflow": "visible",
    "paddingRight": 0,
    "height": "49.24%",
    "width": "95.4%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "top": "23.14%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "10.82%",
      "width": "91.379%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "paddingRight": 0,
        "height": "47.5%",
        "maxHeight": 61,
        "width": "47.17%",
        "paddingLeft": 0,
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
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "0.613%",
      "width": "100%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000"
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "99.123%",
            "paddingLeft": 0,
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "98.889%",
            "paddingLeft": 0,
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "46.891%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 49,
            "width": "100%",
            "paddingLeft": 0,
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
            "class": "Image",
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
      "height": "3.07%",
      "width": "99.52%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
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
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "backgroundColor": [],
      "paddingRight": 0,
      "height": "12.5%",
      "maxHeight": 49,
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 3,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "backgroundOpacity": 0.55,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "width": "95.22%",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "8.714%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "95.238%",
          "maxHeight": 45,
          "width": "81.25%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "height": "100%",
        "width": "11.212%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "91.13%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "21.881%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "97.62%",
          "maxHeight": 49,
          "width": "97.93%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "4.973%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "19.078%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 9,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "85.714%",
          "maxHeight": 49,
          "width": "86.73%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "33.333%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "3.07%",
      "width": "97.61%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
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
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "minWidth": 1,
        "maxWidth": 726,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "8.534%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "77.193%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "40.316%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "98.98%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "53.351%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "64%",
          "paddingLeft": 0,
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
          "class": "Image",
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
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "80.657%",
    "width": "63.993%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "left": "17.25%",
    "scrollBarColor": "#000000",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "5.77%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000",
      "children": [
       {
        "paddingRight": 0,
        "height": "68.085%",
        "maxHeight": 61,
        "width": "79.087%",
        "paddingLeft": 0,
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
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "height": "0.12%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "left",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "scroll",
      "scrollBarColor": "#000000"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "4.17%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "visible",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "100%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "9.882%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "80.769%",
            "paddingLeft": 0,
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "9.88%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 300,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "right",
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
            "class": "Image",
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "overflow": "scroll",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "52.993%",
          "paddingLeft": 0,
          "borderSize": 0,
          "scrollBarWidth": 10,
          "borderRadius": 0,
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "gap": 10,
          "horizontalAlign": "center",
          "scrollBarMargin": 2,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "paddingTop": 0,
          "class": "Container",
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#000000",
          "children": [
           {
            "paddingRight": 0,
            "height": "100%",
            "maxHeight": 49,
            "width": "100%",
            "paddingLeft": 0,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "center",
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
            "class": "Image",
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
      "height": "1.23%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
      "children": [
       {
        "paddingRight": 0,
        "height": "20%",
        "maxHeight": 2,
        "width": "100%",
        "paddingLeft": 0,
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
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "4.178%",
      "maxHeight": 49,
      "width": "100%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "36.784%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "99.515%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "height": "100%",
        "width": "12.412%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "overflow": "scroll",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "97.78%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "18.943%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "93.13%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "4.17%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "visible",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "66.075%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "99.764%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 2,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "4.213%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 1000,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "95.45%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "minWidth": 1,
          "maxWidth": 1000,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "10.118%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "82.14%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "right",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "32.594%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "92.89%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "height": "1.35%",
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "overflow": "hidden",
      "scrollBarColor": "#000000",
      "children": [
       {
        "paddingRight": 0,
        "height": "18.18%",
        "maxHeight": 2,
        "width": "100%",
        "paddingLeft": 0,
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
        "class": "Image",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "visible",
      "paddingRight": 0,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "visible",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "33.925%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "92.12%",
          "paddingLeft": 0,
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 300,
        "width": "8.471%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "borderRadius": 0,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "maxWidth": 300,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "89.8%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "17.96%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "93.98%",
          "paddingLeft": 0,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
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
          "class": "Image",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "backgroundOpacity": 0,
      "layout": "horizontal",
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "children": [
       {
        "verticalAlign": "middle",
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "56.984%",
        "paddingLeft": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scrollBarMargin": 2,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "backgroundOpacity": 0,
        "layout": "horizontal",
        "paddingTop": 0,
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "children": [
         {
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "99.78%",
          "paddingLeft": 0,
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
          "class": "Image",
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
 "verticalAlign": "top",
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; }
 },
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "scrollBarColor": "#000000",
 "start": "this.set('mute', true); this.mainPlayList.set('selectedIndex', 0); this.playList_B437CA9D_A3BC_0FB8_41D2_E12BF7531E42.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc); this.playAudioList([this.audio_B5A807AC_A3B4_0598_41B7_0A661F685D4F])",
 "width": "100%"
})