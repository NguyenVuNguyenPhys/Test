TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_AD04422B_A2AA_5FF8_41D8_A0B25BA5509C); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 2.71,
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
     "id": "map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
     "height": 652,
     "minimumZoomFactor": 1,
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
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_t.png",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "overlays": [
      {
       "id": "overlay_9BC75E9D_973A_9CF1_41BF_4EB86B8B1803",
       "map": {
        "offsetY": 0,
        "x": 298.29,
        "width": 21.5,
        "y": 120.77,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 298.29,
        "class": "HotspotMapOverlayImage",
        "y": 120.77,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "offsetY": 0,
        "x": 342.93,
        "width": 21,
        "y": 140.25,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 342.93,
        "class": "HotspotMapOverlayImage",
        "y": 140.25,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "offsetY": 0,
        "x": 390.13,
        "width": 21,
        "y": 159.12,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 390.13,
        "class": "HotspotMapOverlayImage",
        "y": 159.12,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "offsetY": 0,
        "x": 440.95,
        "width": 21,
        "y": 182.12,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 440.95,
        "class": "HotspotMapOverlayImage",
        "y": 182.12,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "offsetY": 0,
        "x": 500.76,
        "width": 21,
        "y": 201.39,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 500.76,
        "class": "HotspotMapOverlayImage",
        "y": 201.39,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "offsetY": 0,
        "x": 534.29,
        "width": 21,
        "y": 215.62,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 534.29,
        "class": "HotspotMapOverlayImage",
        "y": 215.62,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "offsetY": 0,
        "x": 598.96,
        "width": 21,
        "y": 246.32,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 598.96,
        "class": "HotspotMapOverlayImage",
        "y": 246.32,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "offsetY": 0,
        "x": 623.36,
        "width": 21,
        "y": 206.31,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 623.36,
        "class": "HotspotMapOverlayImage",
        "y": 206.31,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "offsetY": 0,
        "x": 622.14,
        "width": 21,
        "y": 145.68,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 622.14,
        "class": "HotspotMapOverlayImage",
        "y": 145.68,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "offsetY": 0,
        "x": 673.43,
        "width": 21,
        "y": 237.91,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 673.43,
        "class": "HotspotMapOverlayImage",
        "y": 237.91,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "offsetY": 0,
        "x": 734.96,
        "width": 21,
        "y": 237.01,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 734.96,
        "class": "HotspotMapOverlayImage",
        "y": 237.01,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "offsetY": 0,
        "x": 799.8,
        "width": 21,
        "y": 237.91,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 799.8,
        "class": "HotspotMapOverlayImage",
        "y": 237.91,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "offsetY": 0,
        "x": 845.24,
        "width": 21,
        "y": 237.91,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 845.24,
        "class": "HotspotMapOverlayImage",
        "y": 237.91,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "offsetY": 0,
        "x": 886.14,
        "width": 21,
        "y": 240.64,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 886.14,
        "class": "HotspotMapOverlayImage",
        "y": 240.64,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "offsetY": 0,
        "x": 615.74,
        "width": 21,
        "y": 297.82,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 615.74,
        "class": "HotspotMapOverlayImage",
        "y": 297.82,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "offsetY": 0,
        "x": 663.47,
        "width": 21,
        "y": 303.86,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 663.47,
        "class": "HotspotMapOverlayImage",
        "y": 303.86,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "offsetY": 0,
        "x": 662.39,
        "width": 21,
        "y": 331.36,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 662.39,
        "class": "HotspotMapOverlayImage",
        "y": 331.36,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "offsetY": 0,
        "x": 658.01,
        "width": 21,
        "y": 373.77,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 658.01,
        "class": "HotspotMapOverlayImage",
        "y": 373.77,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "offsetY": 0,
        "x": 672.21,
        "width": 21,
        "y": 422.22,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 672.21,
        "class": "HotspotMapOverlayImage",
        "y": 422.22,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "offsetY": 0,
        "x": 623.97,
        "width": 21,
        "y": 329.85,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 623.97,
        "class": "HotspotMapOverlayImage",
        "y": 329.85,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "offsetY": 0,
        "x": 584.79,
        "width": 21,
        "y": 342.93,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 584.79,
        "class": "HotspotMapOverlayImage",
        "y": 342.93,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "offsetY": 0,
        "x": 557.58,
        "width": 21,
        "y": 358.93,
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 557.58,
        "class": "HotspotMapOverlayImage",
        "y": 358.93,
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
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_AFF72F1D_A29A_25DB_41DA_8DA11532E86C",
       "map": {
        "offsetY": 0,
        "x": 932.83,
        "width": 23.51,
        "y": 241,
        "height": 23.51,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 11,
           "width": 11,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69_map.gif",
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
        "x": 932.83,
        "class": "HotspotMapOverlayImage",
        "y": 241,
        "width": 23.51,
        "height": 23.51,
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 23,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69.png",
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
     "fieldOfViewOverlayRadiusScale": 0.05,
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
     "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
     "partial": false,
     "pitch": 0,
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
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_AD56629E_A2AA_5CD9_41B1_F6787FCAC9DC); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 2.66,
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
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_B2A2A2B0_A2AA_5CE9_41C7_44C4588573AF); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -179.81,
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
     "hfovMin": 60,
     "label": "C02",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
        "partial": false,
        "pitch": 0,
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_B2D310C3_A2AA_5CA8_41E3_A3930F487465); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 179.91,
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
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_B2D8B0D3_A2AA_5CA8_41B7_61EC3248DF2C); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 1.93,
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
        "hfovMin": 60,
        "label": "C03",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfovMax": 120,
           "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
           "partial": false,
           "pitch": 0,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_ADEF216D_A2AA_5C7B_41DE_11D7DE970D85); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -179.87,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_ADF3517C_A2AA_5C59_41DA_58418E15A7FB); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -1.54,
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
           "hfovMin": 60,
           "label": "C04",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": 179.91
            },
            {
             "panorama": {
              "hfovMax": 120,
              "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
              "partial": false,
              "pitch": 0,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_B22D40F6_A2AA_5C69_41C8_594A48CA9A63); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -177.15,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_B227A0E5_A2AA_5C68_41E0_97D83B45874B); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -1.42,
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
              "hfovMin": 60,
              "label": "C05",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -1.54
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                 "partial": false,
                 "pitch": 0,
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_ADF8819C_A2AA_5CD9_41DD_276B4B15DF59); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -179.79,
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_ADF5218C_A2AA_5CB9_41E2_993BD0ECB881); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 5.64,
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
                 "hfovMin": 60,
                 "label": "C06",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                    "partial": false,
                    "pitch": 0,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_AD2911FA_A2AA_5C59_41BD_0D6C3E80DB53); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -91.86,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_AD37320B_A2AA_5FBF_41DD_AB6E06D6363F); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 11.96,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_AD3E621A_A2AA_5FD9_41DE_51F105D50D34); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 163.21,
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
                    "hfovMin": 60,
                    "label": "C07",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 5.64
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                       "partial": false,
                       "pitch": 0,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_AD4B128F_A2AA_5CB7_41A3_F75C4311818D); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -168.2,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_AD7E3280_A2AA_5CA9_41D1_DAFEADFBB6B0); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -36.3,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_AD72C26E_A2AA_5C79_41BD_551A3AC0E675); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 30.75,
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
                       "hfovMin": 60,
                       "label": "C08",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 30.75,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": 11.96
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                          "partial": false,
                          "pitch": 0,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B21CD410_A2AA_5BA9_41E2_D850F7D9582E); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -138.38,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B2135400_A2AA_5BA9_41C7_097D52556634); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -1.2,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B26E9421_A2AA_5BEB_41E4_289889DDA792); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 78.56,
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
                          "hfovMin": 60,
                          "label": "C10",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                             "partial": false,
                             "pitch": 0,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B2E0E327_A2AA_5DF7_41D7_991FAEC9F2D2); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 1.16,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B2F27342_A2AA_5DA9_41E3_53F3CB6F7AC7); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.89,
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
                             "hfovMin": 60,
                             "label": "C11",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": -1.2
                              },
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                "partial": false,
                                "pitch": 0,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B2D9F396_A2AA_5CA9_4195_D15D5E09C5FE); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 0.64,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B22B73B2_A2AA_5CE8_41CC_31F5A55F5871); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 167.51,
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
                                "hfovMin": 60,
                                "label": "C12",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.64,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": -179.89
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                   "partial": false,
                                   "pitch": 0,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B28422EE_A2AA_5C79_41DE_1FD656B7419E); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 0.65,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B295F30C_A2AA_5DB9_41AD_F7761EA29A33); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 176.12,
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
                                   "hfovMin": 60,
                                   "label": "C13",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                      "partial": false,
                                      "pitch": 0,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_ADC461BD_A2AA_5CDB_41B0_DB2FCA2566B4); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 178.92,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_ADC2A1AD_A2AA_5CFB_41E1_ACFEBDEE8302); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 0.43,
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
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                         "partial": false,
                                         "pitch": 0,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_ADE5015C_A2AA_5C59_41C6_02DF5BFBF903); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.3,
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
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 944.59,
                                           "class": "PanoramaMapLocation",
                                           "y": 252.76,
                                           "angle": 274.72,
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
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
                                           "distance": 1,
                                           "backwardYaw": 0.43
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 0.43,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 0.3
                                       },
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": 178.92,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 0.65
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 0.65,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 178.92
                                    },
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 167.51
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 167.51,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 176.12
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": -179.89,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 0.64
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": 1.16
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -36.3
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                             "partial": false,
                             "pitch": 0,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_AD2311EB_A2AA_5C7F_41D7_0A4BCFAB7FA4); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -93.19,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_ADCCF1CD_A2AA_5CBB_41BF_E09DC5F1C1CA); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 155.68,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_ADDBA1DC_A2AA_5C59_41C5_D413BDCFC3A0); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 37.47,
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
                             "hfovMin": 60,
                             "label": "C17",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                "partial": false,
                                "pitch": 0,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B2FD735B_A2AA_5C5F_419A_CA93786C7DDC); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 4.5,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B2CED37C_A2AA_5C59_41CF_F746DD917E34); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -162.77,
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
                                "hfovMin": 60,
                                "label": "C18",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                   "partial": false,
                                   "pitch": 0,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B24B3444_A2AA_5BA9_41D3_361C91E81D9B); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -36.03,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B279D433_A2AA_5BEF_41CD_2BAE23361540); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 26.17,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_B2562455_A2AA_5BAB_41DC_AFACCDEFE269); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 163.47,
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
                                   "hfovMin": 60,
                                   "label": "C19",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "yaw": 26.17,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 4.5
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                      "partial": false,
                                      "pitch": 0,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B2343107_A2AA_5DB7_41D2_A19966C7F735); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -166.65,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_ADE1414C_A2AA_5DB9_41E2_54B6070CB1E7); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -6.22,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B2019119_A2AA_5DDB_41D4_45E15AB75A9A); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 87.5,
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
                                      "hfovMin": 60,
                                      "label": "C23",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                         "partial": false,
                                         "pitch": 0,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_AD18B24D_A2AA_5FB8_41D1_8A2937A00046); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -172.45,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_AD67325F_A2AA_5C58_41BC_1E61C36963F9); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -20.33,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_AD13623C_A2AA_5FD8_41C0_E22B77E6A8F0); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 101.34,
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
                                         "hfovMin": 60,
                                         "label": "C16",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 101.34,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -93.19
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -172.45,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -166.65
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": -20.33,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 163.21
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -166.65,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -172.45
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                         "partial": false,
                                         "pitch": 0,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_B236B3D3_A2AA_5CA8_41BC_1738801F9557); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -178.42,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B20053EC_A2AA_5C79_41D0_F01DFFF7C9D1); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 23.25,
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
                                         "hfovMin": 60,
                                         "label": "C22",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "hfovMax": 120,
                                            "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                            "partial": false,
                                            "pitch": 0,
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B2B902CE_A2AA_5CB9_41BB_66AE51353BD3); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": -178.92,
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
                                            "hfovMin": 60,
                                            "label": "C21",
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "yaw": -178.92,
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": -178.42
                                             }
                                            ],
                                            "class": "Panorama",
                                            "vfov": 180
                                           },
                                           "yaw": -178.42,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -178.92
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": 23.25,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 87.5
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 87.5,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 23.25
                                       },
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -6.22,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -36.03
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": -36.03,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -6.22
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                                      "partial": false,
                                      "pitch": 0,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B2AF12BE_A2AA_5CD9_41CB_5477748BA770); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -179.2,
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
                                      "hfovMin": 60,
                                      "label": "C20",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -179.2,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 163.47
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 163.47,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -179.2
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 4.5,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 26.17
                                 },
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": -162.77,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 155.68
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 155.68,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": -162.77
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 78.56
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "yaw": -93.19,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 101.34
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 78.56,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": 37.47
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": -138.38
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "cardboardMenu": "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
                          "partial": false,
                          "pitch": 0,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B3A7B466_A2AA_2469_41CB_5EAE9DB83FBB); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 130.87,
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
                          "hfovMin": 60,
                          "label": "C09",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 130.87,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -168.2
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -168.2,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": 130.87
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": 11.96,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 30.75
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": -20.33
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": -91.86
                  },
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": -177.15
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -177.15,
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -179.79
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -1.54,
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": -1.42
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 179.91,
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": -179.87
         },
         {
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "yaw": 1.93,
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": 2.66
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 2.66,
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 1.93
      },
      {
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 2.71
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 2.71,
    "class": "AdjacentPanorama",
    "distance": 1,
    "backwardYaw": -179.81
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "toolTipShadowOpacity": 1,
   "toolTipFontWeight": "normal",
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "progressBarBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "minWidth": 342,
   "progressBarBorderSize": 0,
   "progressBarOpacity": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipPaddingBottom": 4,
   "toolTipBackgroundColor": "#F6F6F6",
   "width": 682,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "height": 436,
   "toolTipTextShadowOpacity": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "minHeight": 218,
   "toolTipFontSize": 12,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarLeft": 0,
   "playbackBarHeadShadow": true,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadHeight": 15,
   "top": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "borderRadius": 10,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressHeight": 10,
   "playbackBarHeadBorderSize": 0,
   "left": 18,
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_B296104D_A2AA_5BBB_41E0_54FEC660B8C1",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B296104D_A2AA_5BBB_41E0_54FEC660B8C1, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "id": "PanoramaPlayListItem_B295304E_A2AA_5BB9_41C4_661D38595496",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B295304E_A2AA_5BB9_41C4_661D38595496, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera"
   },
   {
    "id": "PanoramaPlayListItem_B294504F_A2AA_5BB7_41D7_33B70249EDD8",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B294504F_A2AA_5BB7_41D7_33B70249EDD8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29B604F_A2AA_5BB7_41BE_828CF0F6AA3A",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29B604F_A2AA_5BB7_41BE_828CF0F6AA3A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29AB050_A2AA_5BA9_41E3_DA261355E89E",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29AB050_A2AA_5BA9_41E3_DA261355E89E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29A1051_A2AA_5BAB_4162_0AAB0EDA26A5",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29A1051_A2AA_5BAB_4162_0AAB0EDA26A5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2995057_A2AA_5C57_41B8_38753E2BBEB7",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2995057_A2AA_5C57_41B8_38753E2BBEB7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2986057_A2AA_5C57_41D7_ECEC5BBFCFF7",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2986057_A2AA_5C57_41D7_ECEC5BBFCFF7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29F9058_A2AA_5C59_41D1_EC0E6010A4CC",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29F9058_A2AA_5C59_41D1_EC0E6010A4CC, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29EA058_A2AA_5C59_41D5_97015009AA7E",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29EA058_A2AA_5C59_41D5_97015009AA7E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29DF059_A2AA_5C5B_41E2_05AFEEFF66E4",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29DF059_A2AA_5C5B_41E2_05AFEEFF66E4, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29D2059_A2AA_5C5B_41E0_1355F0E842CD",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29D2059_A2AA_5C5B_41E0_1355F0E842CD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "id": "PanoramaPlayListItem_B29C705A_A2AA_5C59_41E3_F56DE3835E1C",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B29C705A_A2AA_5C59_41E3_F56DE3835E1C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E39060_A2AA_5C69_41E0_8699721FA7F5",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E39060_A2AA_5C69_41E0_8699721FA7F5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E28061_A2AA_5C6B_41E0_A48CDBBA2D12",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E28061_A2AA_5C6B_41E0_A48CDBBA2D12, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E1A061_A2AA_5C6B_41CE_B203AC8CF35C",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E1A061_A2AA_5C6B_41CE_B203AC8CF35C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E0C062_A2AA_5C69_41E2_C3CE157A5ED8",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E0C062_A2AA_5C69_41E2_C3CE157A5ED8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E01062_A2AA_5C69_41E0_AE63A2873E18",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E01062_A2AA_5C69_41E0_AE63A2873E18, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E73063_A2AA_5C6F_41D5_FF1F9F3E8C37",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E73063_A2AA_5C6F_41D5_FF1F9F3E8C37, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E69064_A2AA_5C69_41D2_07A9111B5D7B",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E69064_A2AA_5C69_41D2_07A9111B5D7B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E5B06A_A2AA_5C79_41D5_98424261F039",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E5B06A_A2AA_5C79_41D5_98424261F039, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E4F06A_A2AA_5C79_41C3_DF47A9AE8FE5",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E4F06A_A2AA_5C79_41C3_DF47A9AE8FE5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "id": "PanoramaPlayListItem_B2E4006B_A2AA_5C7F_41C7_39A02AF327A6",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E4006B_A2AA_5C7F_41C7_39A02AF327A6, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "id": "playList_B297204D_A2AA_5BBB_41CC_EEFB3A282471",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_B2EB006C_A2AA_5C79_41DC_D39824BC5AB1",
 {
  "id": "camera_B2D310C3_A2AA_5CA8_41E3_A3930F487465",
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2D8B0D3_A2AA_5CA8_41B7_61EC3248DF2C",
  "initialPosition": {
   "yaw": -177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B227A0E5_A2AA_5C68_41E0_97D83B45874B",
  "initialPosition": {
   "yaw": 178.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B22D40F6_A2AA_5C69_41C8_594A48CA9A63",
  "initialPosition": {
   "yaw": 0.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2343107_A2AA_5DB7_41D2_A19966C7F735",
  "initialPosition": {
   "yaw": 7.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2019119_A2AA_5DDB_41D4_45E15AB75A9A",
  "initialPosition": {
   "yaw": -156.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADE1414C_A2AA_5DB9_41E2_54B6070CB1E7",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADE5015C_A2AA_5C59_41C6_02DF5BFBF903",
  "initialPosition": {
   "yaw": -179.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADEF216D_A2AA_5C7B_41DE_11D7DE970D85",
  "initialPosition": {
   "yaw": -0.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADF3517C_A2AA_5C59_41DA_58418E15A7FB",
  "initialPosition": {
   "yaw": 178.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADF5218C_A2AA_5CB9_41E2_993BD0ECB881",
  "initialPosition": {
   "yaw": 88.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADF8819C_A2AA_5CD9_41DD_276B4B15DF59",
  "initialPosition": {
   "yaw": 2.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADC2A1AD_A2AA_5CFB_41E1_ACFEBDEE8302",
  "initialPosition": {
   "yaw": -179.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADC461BD_A2AA_5CDB_41B0_DB2FCA2566B4",
  "initialPosition": {
   "yaw": -179.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADCCF1CD_A2AA_5CBB_41BF_E09DC5F1C1CA",
  "initialPosition": {
   "yaw": 17.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_ADDBA1DC_A2AA_5C59_41C5_D413BDCFC3A0",
  "initialPosition": {
   "yaw": -101.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD2311EB_A2AA_5C7F_41D7_0A4BCFAB7FA4",
  "initialPosition": {
   "yaw": -78.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD2911FA_A2AA_5C59_41BD_0D6C3E80DB53",
  "initialPosition": {
   "yaw": -174.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD37320B_A2AA_5FBF_41DD_AB6E06D6363F",
  "initialPosition": {
   "yaw": -149.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD3E621A_A2AA_5FD9_41DE_51F105D50D34",
  "initialPosition": {
   "yaw": 159.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD04422B_A2AA_5FF8_41D8_A0B25BA5509C",
  "initialPosition": {
   "yaw": 0.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD13623C_A2AA_5FD8_41C0_E22B77E6A8F0",
  "initialPosition": {
   "yaw": 86.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD18B24D_A2AA_5FB8_41D1_8A2937A00046",
  "initialPosition": {
   "yaw": 13.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD67325F_A2AA_5C58_41BC_1E61C36963F9",
  "initialPosition": {
   "yaw": -16.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD72C26E_A2AA_5C79_41BD_551A3AC0E675",
  "initialPosition": {
   "yaw": -168.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD7E3280_A2AA_5CA9_41D1_DAFEADFBB6B0",
  "initialPosition": {
   "yaw": 41.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD4B128F_A2AA_5CB7_41A3_F75C4311818D",
  "initialPosition": {
   "yaw": -49.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_AD56629E_A2AA_5CD9_41B1_F6787FCAC9DC",
  "initialPosition": {
   "yaw": -178.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2A2A2B0_A2AA_5CE9_41C7_44C4588573AF",
  "initialPosition": {
   "yaw": -177.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2AF12BE_A2AA_5CD9_41CB_5477748BA770",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2B902CE_A2AA_5CB9_41BB_66AE51353BD3",
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B28422EE_A2AA_5C79_41DE_1FD656B7419E",
  "initialPosition": {
   "yaw": -1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B295F30C_A2AA_5DB9_41AD_F7761EA29A33",
  "initialPosition": {
   "yaw": -12.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2E0E327_A2AA_5DF7_41D7_991FAEC9F2D2",
  "initialPosition": {
   "yaw": 178.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2F27342_A2AA_5DA9_41E3_53F3CB6F7AC7",
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2FD735B_A2AA_5C5F_419A_CA93786C7DDC",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2CED37C_A2AA_5C59_41CF_F746DD917E34",
  "initialPosition": {
   "yaw": -24.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2D9F396_A2AA_5CA9_4195_D15D5E09C5FE",
  "initialPosition": {
   "yaw": 0.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B22B73B2_A2AA_5CE8_41CC_31F5A55F5871",
  "initialPosition": {
   "yaw": -3.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B236B3D3_A2AA_5CA8_41BC_1738801F9557",
  "initialPosition": {
   "yaw": 1.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B20053EC_A2AA_5C79_41D0_F01DFFF7C9D1",
  "initialPosition": {
   "yaw": -92.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2135400_A2AA_5BA9_41C7_097D52556634",
  "initialPosition": {
   "yaw": -178.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B21CD410_A2AA_5BA9_41E2_D850F7D9582E",
  "initialPosition": {
   "yaw": 143.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B26E9421_A2AA_5BEB_41E4_289889DDA792",
  "initialPosition": {
   "yaw": -142.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B279D433_A2AA_5BEF_41CD_2BAE23361540",
  "initialPosition": {
   "yaw": -175.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B24B3444_A2AA_5BA9_41D3_361C91E81D9B",
  "initialPosition": {
   "yaw": 173.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B2562455_A2AA_5BAB_41DC_AFACCDEFE269",
  "initialPosition": {
   "yaw": 0.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_B3A7B466_A2AA_2469_41CB_5EAE9DB83FBB",
  "initialPosition": {
   "yaw": 11.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "toolTipShadowOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarRight": 0,
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "minHeight": 50,
  "toolTipFontSize": 12,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": "0%",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "borderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressHeight": 10,
  "playbackBarHeadBorderSize": 0,
  "left": 0,
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "98.794%",
  "paddingLeft": 0,
  "height": "96.96%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "class": "Container",
  "paddingBottom": 0,
  "layout": "absolute",
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "minWidth": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 235.1,
    "paddingLeft": 0,
    "height": "99.327%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "scrollBarMargin": 2,
    "shadow": false,
    "scrollBarWidth": 10,
    "class": "Container",
    "top": 0,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": 14,
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingRight": 0,
      "maxWidth": 378,
      "width": 181.7,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "height": 71,
      "mode": "push",
      "transparencyActive": false,
      "borderSize": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "maxHeight": 145,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "left": "2.47%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 1638,
    "paddingLeft": 0,
    "height": 436,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "borderSize": 0,
    "gap": 4,
    "minHeight": 1,
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "top": "0.06%",
    "visible": false,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "minWidth": 1,
    "borderRadius": 9,
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     "this.MapViewer",
     {
      "paddingRight": 0,
      "maxWidth": 145,
      "width": 70,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "height": 70,
      "mode": "push",
      "transparencyActive": false,
      "borderSize": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "maxHeight": 145,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "left": "1.16%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top"
   }
  ],
  "verticalAlign": "top"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "100%",
  "paddingLeft": 0,
  "height": 275.05,
  "scrollBarVisible": "rollOver",
  "contentOpaque": false,
  "borderSize": 0,
  "gap": 10,
  "minHeight": 1,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "class": "Container",
  "paddingBottom": 0,
  "layout": "vertical",
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "minWidth": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0,
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "97.739%",
    "paddingLeft": 0,
    "height": 181,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "borderSize": 0,
    "gap": 10,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": 564,
      "paddingLeft": 0,
      "height": 181,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "borderSize": 0,
      "gap": 10,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "paddingLeft": 0,
        "height": 167,
        "scrollBarVisible": "rollOver",
        "contentOpaque": false,
        "borderSize": 0,
        "gap": 10,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "top": "2.21%",
        "visible": false,
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 300,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "height": 300,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "paddingLeft": 0,
        "height": 167,
        "scrollBarVisible": "rollOver",
        "contentOpaque": false,
        "borderSize": 0,
        "gap": 10,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "top": "2.15%",
        "visible": false,
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "97.619%",
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 300,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "height": 300,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "100%",
        "paddingLeft": 0,
        "height": "86.188%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "top": "5.47%",
        "visible": false,
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 300,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "height": 300,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "paddingLeft": 0,
          "height": 156,
          "scrollBarVisible": "rollOver",
          "contentOpaque": false,
          "borderSize": 0,
          "gap": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "vertical",
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "paddingLeft": 0,
            "height": 126,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "height": 126,
              "mode": "push",
              "transparencyActive": false,
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "maxHeight": 126,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "class": "IconButton",
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxWidth": 126,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "borderSize": 0,
              "minHeight": 1,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxHeight": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "class": "Image",
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "height": 42,
            "scrollBarVisible": "rollOver",
            "contentOpaque": false,
            "borderSize": 0,
            "gap": 10,
            "minHeight": 1,
            "horizontalAlign": "left",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "class": "Container",
            "paddingBottom": 0,
            "layout": "absolute",
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "width": "100%",
              "paddingLeft": 0,
              "textDecoration": "none",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "fontStyle": "normal",
              "minHeight": 1,
              "horizontalAlign": "center",
              "shadow": false,
              "fontColor": "#FFFF00",
              "class": "Label",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "minWidth": 1,
              "borderRadius": 0,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "top"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "top"
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "97.913%",
    "paddingLeft": 0,
    "height": 77,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "borderSize": 0,
    "gap": 10,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "height": "100%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 84,
        "width": 70,
        "paddingLeft": 0,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "height": 70,
        "mode": "push",
        "transparencyActive": false,
        "borderSize": 0,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "maxHeight": 84,
        "class": "IconButton",
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "cursor": "hand",
        "bottom": "7.35%",
        "paddingBottom": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "left": "2.45%",
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "top"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "height": "100%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 54,
        "paddingLeft": 0,
        "height": 54,
        "scrollBarVisible": "rollOver",
        "contentOpaque": false,
        "borderSize": 0,
        "gap": 10,
        "minHeight": 1,
        "horizontalAlign": "left",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "absolute",
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 509,
          "width": 54,
          "paddingLeft": 0,
          "height": 54,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "borderSize": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "class": "Image",
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "paddingRight": 0,
          "maxWidth": 509,
          "width": 54,
          "paddingLeft": 0,
          "height": 54,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "borderSize": 0,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "class": "Image",
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "left": "0%",
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "top"
       }
      ],
      "verticalAlign": "top"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "height": "100%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top"
     }
    ],
    "verticalAlign": "bottom"
   }
  ],
  "verticalAlign": "bottom"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "height": "100%",
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "top": "0%",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "minWidth": 1,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "width": "100%",
    "paddingLeft": 0,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "borderSize": 0,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "shadow": false,
    "class": "Image",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "95.4%",
    "paddingLeft": 0,
    "height": "49.24%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "gap": 3,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "top": "23.14%",
    "visible": false,
    "paddingBottom": 0,
    "layout": "vertical",
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "91.466%",
      "paddingLeft": 0,
      "height": "10.817%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 500,
        "width": "47.17%",
        "paddingLeft": 0,
        "height": "65.789%",
        "borderSize": 0,
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 61,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "height": "0.613%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "95.69%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "69.5%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "10.79%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "100%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "8.63%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "98.889%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "43.969%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 49,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 1000,
            "width": "92.63%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 49,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.52%",
      "paddingLeft": 0,
      "height": "3.07%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "borderSize": 0,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [],
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "width": "95.22%",
      "borderSize": 0,
      "gap": 0,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "shadow": false,
      "scrollBarWidth": 10,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "minWidth": 1,
      "borderRadius": 0,
      "backgroundColorRatios": [],
      "paddingTop": 0,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "11.131%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 117,
          "width": "98.485%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 45,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "13.57%",
        "paddingLeft": 0,
        "height": "100%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 258,
          "width": "97.98%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 243,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "39.005%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 408,
          "width": "94.66%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "6.977%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "94%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 300,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "93.798%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "88.522%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 734,
          "width": "67.082%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "97.61%",
      "paddingLeft": 0,
      "height": "3.07%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "borderSize": 0,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.914%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "11.389%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 117,
          "width": "98.99%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "6.897%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 222,
          "width": "85.612%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 222,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "41.415%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "99.792%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "95.69%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "29.099%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "97.52%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "100%",
    "paddingLeft": 0,
    "height": "12.935%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "top": "0%",
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingRight": 0,
      "maxWidth": 72,
      "width": 62,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "height": 58,
      "mode": "push",
      "transparencyActive": false,
      "borderSize": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "maxHeight": 72,
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "left": "3.02%",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "95.4%",
    "paddingLeft": 0,
    "height": "49.24%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "gap": 3,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "top": "23.14%",
    "visible": false,
    "paddingBottom": 0,
    "layout": "vertical",
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "91.379%",
      "paddingLeft": 0,
      "height": "10.82%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 500,
        "width": "47.17%",
        "paddingLeft": 0,
        "height": "47.5%",
        "borderSize": 0,
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 61,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "height": "0.613%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "95.69%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "69.5%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "10.79%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "99.123%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "8.63%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "98.889%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "46.891%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 49,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 1000,
            "width": "100%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 49,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.52%",
      "paddingLeft": 0,
      "height": "3.07%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "borderSize": 0,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [],
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "12.5%",
      "scrollBarVisible": "rollOver",
      "width": "95.22%",
      "borderSize": 0,
      "gap": 3,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "shadow": false,
      "scrollBarWidth": 10,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "minWidth": 1,
      "borderRadius": 0,
      "backgroundColorRatios": [],
      "paddingTop": 0,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "8.714%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 117,
          "width": "81.25%",
          "paddingLeft": 0,
          "height": "95.238%",
          "borderSize": 0,
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 45,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "11.212%",
        "paddingLeft": 0,
        "height": "100%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 258,
          "width": "91.13%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 243,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "21.881%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 408,
          "width": "97.93%",
          "paddingLeft": 0,
          "height": "97.62%",
          "borderSize": 0,
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "4.973%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "100%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 300,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "19.078%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 9,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "86.73%",
          "paddingLeft": 0,
          "height": "85.714%",
          "borderSize": 0,
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "93.798%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "88.522%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 734,
          "width": "33.333%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "97.61%",
      "paddingLeft": 0,
      "height": "3.07%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "borderSize": 0,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.914%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "8.534%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 117,
          "width": "77.193%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "6.897%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 222,
          "width": "85.612%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 222,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "40.316%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 459,
          "width": "98.98%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "95.69%",
      "paddingLeft": 0,
      "height": "12.46%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "53.351%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "64%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "63.993%",
    "paddingLeft": 0,
    "height": "80.657%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "gap": 6,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "visible": false,
    "paddingBottom": 0,
    "layout": "vertical",
    "bottom": "8.81%",
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "left": "17.25%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "5.77%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 500,
        "width": "79.087%",
        "paddingLeft": 0,
        "height": "68.085%",
        "borderSize": 0,
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 61,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "0.12%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "4.17%",
      "borderSize": 0,
      "gap": 0,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "100%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 0,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "9.882%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "80.769%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "minHeight": 1,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "9.88%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 300,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 300,
            "width": "100%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "minHeight": 1,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 300,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "52.993%",
          "paddingLeft": 0,
          "height": "100%",
          "scrollBarVisible": "rollOver",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "maxHeight": 49,
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "maxWidth": 1000,
            "width": "100%",
            "paddingLeft": 0,
            "height": "100%",
            "borderSize": 0,
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "minHeight": 1,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "maxHeight": 49,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "minWidth": 1,
            "borderRadius": 0,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "1.23%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": "100%",
        "paddingLeft": 0,
        "height": "20%",
        "borderSize": 0,
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "height": "4.178%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 5,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "36.784%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "99.515%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "12.412%",
        "paddingLeft": 0,
        "height": "100%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 258,
          "width": "97.78%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 243,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "18.943%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "93.13%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "4.17%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "66.075%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 800,
          "width": "99.764%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "4.17%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 2,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 1000,
        "width": "4.213%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "95.45%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "10.118%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "82.14%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "minHeight": 1,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 300,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "32.594%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "92.89%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "1.35%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "maxWidth": 726,
        "width": "100%",
        "paddingLeft": 0,
        "height": "18.18%",
        "borderSize": 0,
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "minHeight": 1,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "maxHeight": 2,
        "class": "Image",
        "paddingBottom": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "4.17%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 0,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "33.925%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "92.12%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "maxWidth": 300,
        "width": "8.471%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 300,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 300,
          "width": "89.8%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 300,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "17.96%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "93.98%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": "99.44%",
      "paddingLeft": 0,
      "height": "4.17%",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "maxHeight": 49,
      "class": "Container",
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "minWidth": 1,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": "56.984%",
        "paddingLeft": 0,
        "height": "100%",
        "scrollBarVisible": "rollOver",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "maxHeight": 49,
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "minWidth": 1,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "maxWidth": 1000,
          "width": "99.78%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "minHeight": 1,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxHeight": 49,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "minWidth": 1,
          "borderRadius": 0,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle"
 }
], 
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "minHeight": 20,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "vrPolyfillScale": 1,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "id": "rootPlayer",
 "minWidth": 20,
 "borderRadius": 0,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B297204D_A2AA_5BBB_41CC_EEFB3A282471.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "verticalAlign": "top"
})