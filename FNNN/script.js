TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "width": 65,
           "class": "ImageResourceLevel",
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 9.2,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.71,
        "pitch": -10.74
       }
      ],
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_8448230E_99B8_29A1_419F_967ADD63973E); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.71,
        "hfov": 9.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 83,
           "width": 130,
           "class": "ImageResourceLevel",
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
       "height": 2500,
       "width": 5000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "class": "Panorama",
  "cardboardMenu": {
   "class": "Menu",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "opacity": 0.4,
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
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
   "id": "Menu_873A8168_99B8_2861_41D3_60FDD54566AD"
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
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_t.png",
     "maximumZoomFactor": 1,
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
        "x": 299.01,
        "width": 21.5,
        "class": "HotspotMapOverlayMap",
        "y": 121.45,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 299.01,
        "class": "HotspotMapOverlayImage",
        "y": 121.45,
        "width": 21.5,
        "height": 21.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_46.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "offsetY": 0,
        "x": 343.76,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 140.93,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 343.76,
        "class": "HotspotMapOverlayImage",
        "y": 140.93,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_47.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "offsetY": 0,
        "x": 390.86,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 159.94,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 390.86,
        "class": "HotspotMapOverlayImage",
        "y": 159.94,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_48.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "offsetY": 0,
        "x": 441.55,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 182.83,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 441.55,
        "class": "HotspotMapOverlayImage",
        "y": 182.83,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_49.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "offsetY": 0,
        "x": 501.54,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 202.17,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 501.54,
        "class": "HotspotMapOverlayImage",
        "y": 202.17,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_50.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "offsetY": 0,
        "x": 535.02,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 216.34,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 535.02,
        "class": "HotspotMapOverlayImage",
        "y": 216.34,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_51.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "offsetY": 0,
        "x": 599.62,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 246.89,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 599.62,
        "class": "HotspotMapOverlayImage",
        "y": 246.89,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_52.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "offsetY": 0,
        "x": 624.09,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 207.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.09,
        "class": "HotspotMapOverlayImage",
        "y": 207.08,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_53.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "offsetY": 0,
        "x": 622.95,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 146.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 622.95,
        "class": "HotspotMapOverlayImage",
        "y": 146.32,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_54.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "offsetY": 0,
        "x": 674.15,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 674.15,
        "class": "HotspotMapOverlayImage",
        "y": 238.61,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_55.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "offsetY": 0,
        "x": 735.61,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 237.81,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 735.61,
        "class": "HotspotMapOverlayImage",
        "y": 237.81,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_56.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "offsetY": 0,
        "x": 800.29,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 800.29,
        "class": "HotspotMapOverlayImage",
        "y": 238.61,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_57.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "offsetY": 0,
        "x": 845.89,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 238.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 845.89,
        "class": "HotspotMapOverlayImage",
        "y": 238.61,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_58.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "offsetY": 0,
        "x": 886.76,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 241.36,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 886.76,
        "class": "HotspotMapOverlayImage",
        "y": 241.36,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_59.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC66E9E_973A_9CF3_4188_A666263EFCE3",
       "map": {
        "offsetY": 0,
        "x": 935.07,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.97,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 935.07,
        "class": "HotspotMapOverlayImage",
        "y": 239.97,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_60.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "offsetY": 0,
        "x": 616.43,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 298.53,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 616.43,
        "class": "HotspotMapOverlayImage",
        "y": 298.53,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_61.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "offsetY": 0,
        "x": 664.19,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 304.61,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 664.19,
        "class": "HotspotMapOverlayImage",
        "y": 304.61,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_62.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "offsetY": 0,
        "x": 662.87,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 332.15,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 662.87,
        "class": "HotspotMapOverlayImage",
        "y": 332.15,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_63.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "offsetY": 0,
        "x": 658.55,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 374.45,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 658.55,
        "class": "HotspotMapOverlayImage",
        "y": 374.45,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_64.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "offsetY": 0,
        "x": 672.84,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 422.91,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 672.84,
        "class": "HotspotMapOverlayImage",
        "y": 422.91,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_65.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "offsetY": 0,
        "x": 624.78,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 330.58,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.78,
        "class": "HotspotMapOverlayImage",
        "y": 330.58,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_66.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "offsetY": 0,
        "x": 585.56,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 343.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 585.56,
        "class": "HotspotMapOverlayImage",
        "y": 343.8,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_67.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "offsetY": 0,
        "x": 558.42,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 359.69,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 558.42,
        "class": "HotspotMapOverlayImage",
        "y": 359.69,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_68.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "useHandCursor": true
      }
     ],
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "class": "ImageResourceLevel",
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62.png"
       },
       {
        "height": 326,
        "width": 510,
        "class": "ImageResourceLevel",
        "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_lq.png",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1
    }
   }
  ],
  "label": "C01",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 65,
              "width": 65,
              "class": "ImageResourceLevel",
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 9.06,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 2.66,
           "pitch": -14.65
          }
         ],
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_84D161F9_99B8_2862_41D1_49FEC7CC8BE6); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 2.66,
           "hfov": 9.06,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 130,
              "width": 130,
              "class": "ImageResourceLevel",
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -14.65
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "width": 65,
              "class": "ImageResourceLevel",
              "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "hfov": 8.74,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.81,
           "pitch": -20.94
          }
         ],
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_84CCC207_99B8_2BAE_41B6_5EA5F2C2428D); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -179.81,
           "hfov": 8.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 78,
              "width": 130,
              "class": "ImageResourceLevel",
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
          "height": 2500,
          "width": 5000,
          "class": "ImageResourceLevel",
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60.jpeg"
         }
        ]
       }
      }
     ],
     "hfovMin": 60,
     "class": "Panorama",
     "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
       "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
      }
     ],
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 65,
                 "width": 65,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "hfov": 8.78,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 179.91,
              "pitch": -20.32
             }
            ],
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_84F2A251_99B8_2BA2_41DD_B073EBDFE82A); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 179.91,
              "hfov": 8.78,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 130,
                 "width": 130,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -20.32
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 37,
                 "width": 65,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "hfov": 8.98,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 1.93,
              "pitch": -17.36
             }
            ],
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_84ECC260_99B8_2862_4142_4B8D693ECA80); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 1.93,
              "hfov": 8.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 74,
                 "width": 130,
                 "class": "ImageResourceLevel",
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
             "height": 2500,
             "width": 5000,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg"
            }
           ]
          }
         }
        ],
        "hfovMin": 60,
        "class": "Panorama",
        "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
          "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
         }
        ],
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "width": 64,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 9.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -179.87,
                 "pitch": -14.96
                }
               ],
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_87FB53B3_99B8_28E6_41E2_289AC46C4473); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.87,
                 "hfov": 9.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 104,
                    "width": 129,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -14.96
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "width": 60,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 8.5,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -1.54,
                 "pitch": -11.8
                }
               ],
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_87EBE3D1_99B8_28A2_41DB_650468F74F74); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -1.54,
                 "hfov": 8.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 104,
                    "width": 120,
                    "class": "ImageResourceLevel",
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
                "height": 2500,
                "width": 5000,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg"
               }
              ]
             }
            }
           ],
           "hfovMin": 60,
           "class": "Panorama",
           "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
             "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
            }
           ],
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "class": "AdjacentPanorama",
             "yaw": -179.87,
             "backwardYaw": 179.91,
             "distance": 1
            },
            {
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 53,
                       "width": 65,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -177.15,
                    "pitch": -15.71
                   }
                  ],
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_879D4344_99B8_29A2_41D6_09552772FF53); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -177.15,
                    "hfov": 9.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 106,
                       "width": 130,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -15.71
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 64,
                       "width": 64,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.22,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -1.42,
                    "pitch": -9.99
                   }
                  ],
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_8466B336_99B8_29EE_4191_347460D30CED); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -1.42,
                    "hfov": 9.22,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "width": 129,
                       "class": "ImageResourceLevel",
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
                   "height": 2500,
                   "width": 5000,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg"
                  }
                 ]
                }
               }
              ],
              "hfovMin": 60,
              "class": "Panorama",
              "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
               }
              ],
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "class": "AdjacentPanorama",
                "yaw": -1.42,
                "backwardYaw": -1.54,
                "distance": 1
               },
               {
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 37,
                          "width": 65,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 9.08,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -179.79,
                       "pitch": -14.13
                      }
                     ],
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_8452D300_99B8_29A1_41DB_30A8A7F85B46); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -179.79,
                       "hfov": 9.08,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "width": 130,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -14.13
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 32,
                          "width": 65,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 9.22,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 5.64,
                       "pitch": -9.93
                      }
                     ],
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_845C52F2_99B8_2861_41B2_80B65E7CDE90); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 5.64,
                       "hfov": 9.22,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 65,
                          "width": 130,
                          "class": "ImageResourceLevel",
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
                      "height": 2500,
                      "width": 5000,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMin": 60,
                 "class": "Panorama",
                 "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                   "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                  }
                 ],
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 48,
                             "width": 65,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 9.22,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -91.86,
                          "pitch": -10.01
                         }
                        ],
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_86BEC4F9_99B8_2862_41D2_6570C6EF3586); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -91.86,
                          "hfov": 9.22,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 96,
                             "width": 130,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png"
                            }
                           ]
                          },
                          "pitch": -10.01
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 34,
                             "width": 65,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 9.14,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 11.96,
                          "pitch": -12.45
                         }
                        ],
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_869A24DE_99B8_285E_41B6_81BC0E995E57); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 11.96,
                          "hfov": 9.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 69,
                             "width": 130,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png"
                            }
                           ]
                          },
                          "pitch": -12.45
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 30,
                             "width": 65,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 9.24,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 163.21,
                          "pitch": -9.18
                         }
                        ],
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_868F34EB_99B8_2865_41BD_F57E52C55DF7); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 163.21,
                          "hfov": 9.24,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 61,
                             "width": 130,
                             "class": "ImageResourceLevel",
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
                         "height": 2500,
                         "width": 5000,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMin": 60,
                    "class": "Panorama",
                    "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                      "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                     }
                    ],
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 33,
                                "width": 65,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 9.23,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -168.2,
                             "pitch": -15
                            }
                           ],
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_84FF4233_99B8_2BE6_41C9_EDE280B77828); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -168.2,
                             "hfov": 9.23,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 67,
                                "width": 130,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png"
                               }
                              ]
                             },
                             "pitch": -15
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "width": 65,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.92,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -36.3,
                             "pitch": -21.01
                            }
                           ],
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_84C2F224_99B8_2BE2_41C9_55A6FC369175); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -36.3,
                             "hfov": 8.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 69,
                                "width": 130,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png"
                               }
                              ]
                             },
                             "pitch": -21.01
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 26,
                                "width": 65,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 9.36,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 30.75,
                             "pitch": -11.5
                            }
                           ],
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_84F92242_99B8_2BA6_41BF_B0843D0435B2); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 30.75,
                             "hfov": 9.36,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 53,
                                "width": 130,
                                "class": "ImageResourceLevel",
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
                            "height": 2450,
                            "width": 4900,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 60,
                       "class": "Panorama",
                       "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                         "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                        }
                       ],
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 33,
                                   "width": 65,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 9.23,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -138.38,
                                "pitch": -9.68
                               }
                              ],
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_84E2227E_99B8_2861_41D1_772553FEC189); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -138.38,
                                "hfov": 9.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 130,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png"
                                  }
                                 ]
                                },
                                "pitch": -9.68
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 65,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 9.14,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -1.2,
                                "pitch": -12.42
                               }
                              ],
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_84E8226F_99B8_287E_41DB_2B5EDB3038C5); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -1.2,
                                "hfov": 9.14,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 130,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png"
                                  }
                                 ]
                                },
                                "pitch": -12.42
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 48,
                                   "width": 65,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 9.12,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 78.56,
                                "pitch": -12.93
                               }
                              ],
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_841C128C_99B8_28A1_41D9_657FC0135B77); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 78.56,
                                "hfov": 9.12,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 96,
                                   "width": 130,
                                   "class": "ImageResourceLevel",
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
                               "height": 2500,
                               "width": 5000,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 60,
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                           }
                          ],
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 42,
                                      "width": 64,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.95,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 1.16,
                                   "pitch": -17.05
                                  }
                                 ],
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_840462B6_99B8_28E1_41A7_0371D2F2BFAB); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 1.16,
                                   "hfov": 8.95,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 84,
                                      "width": 129,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -17.05
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 44,
                                      "width": 64,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.75,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -179.89,
                                   "pitch": -20.83
                                  }
                                 ],
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_840CF2A8_99B8_28E1_41E2_930C1F469B4E); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -179.89,
                                   "hfov": 8.75,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 89,
                                      "width": 129,
                                      "class": "ImageResourceLevel",
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
                                  "height": 2500,
                                  "width": 5000,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMin": 60,
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 53,
                                         "width": 65,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 9.14,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 0.64,
                                      "pitch": -12.53
                                     }
                                    ],
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_877644C3_99B8_28A6_41D6_AD147D875E38); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 0.64,
                                      "hfov": 9.14,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 130,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -12.53
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 53,
                                         "width": 65,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 8.47,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 167.51,
                                      "pitch": -25.2
                                     }
                                    ],
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_874424B4_99B8_28E2_41BE_517F3D99A529); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 167.51,
                                      "hfov": 8.47,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 130,
                                         "class": "ImageResourceLevel",
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
                                     "height": 2500,
                                     "width": 5000,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "hfovMin": 60,
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 36,
                                            "width": 65,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.95,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 0.65,
                                         "pitch": -17.08
                                        }
                                       ],
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_872111C1_99B8_28A2_41B0_ADF147E2A333); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 0.65,
                                         "hfov": 8.95,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 73,
                                            "width": 130,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -17.08
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 47,
                                            "width": 74,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.14,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 176.12,
                                         "pitch": -18.57
                                        }
                                       ],
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_8727C1B4_99B8_28E1_41D0_DDC942C1847B); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 176.12,
                                         "hfov": 10.14,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 94,
                                            "width": 148,
                                            "class": "ImageResourceLevel",
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
                                        "height": 2500,
                                        "width": 5000,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C13",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "class": "AdjacentPanorama",
                                     "yaw": 176.12,
                                     "backwardYaw": 167.51,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 42,
                                               "width": 65,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 9.08,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 178.92,
                                            "pitch": -14.01
                                           }
                                          ],
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8738844C_99B8_2FA1_41DD_14EDA7439C7D); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 178.92,
                                            "hfov": 9.08,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 84,
                                               "width": 130,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -14.01
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 30,
                                               "width": 65,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 9.12,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 0.43,
                                            "pitch": -12.99
                                           }
                                          ],
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_872AA46E_99B8_287E_41AC_1B97C3F70D76); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 0.43,
                                            "hfov": 9.12,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 61,
                                               "width": 130,
                                               "class": "ImageResourceLevel",
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
                                           "height": 2500,
                                           "width": 5000,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "class": "AdjacentPanorama",
                                        "yaw": 178.92,
                                        "backwardYaw": 0.65,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 29,
                                                  "width": 65,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 9.1,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 0.3,
                                               "pitch": -13.54
                                              }
                                             ],
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_87C953A5_99B8_28E2_41D6_95DDB12FD624); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 0.3,
                                               "hfov": 9.1,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 59,
                                                  "width": 130,
                                                  "class": "ImageResourceLevel",
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
                                              "height": 2500,
                                              "width": 5000,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "label": "C15",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "class": "AdjacentPanorama",
                                           "yaw": 0.3,
                                           "backwardYaw": 0.43,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 0.43,
                                        "backwardYaw": 0.3,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 0.65,
                                     "backwardYaw": 178.92,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 167.51,
                                  "backwardYaw": 176.12,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "class": "AdjacentPanorama",
                                  "yaw": 0.64,
                                  "backwardYaw": -179.89,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -179.89,
                               "backwardYaw": 0.64,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 1.16,
                               "backwardYaw": -1.2,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -1.2,
                            "backwardYaw": 1.16,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": -138.38,
                            "backwardYaw": -36.3,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 34,
                                      "width": 65,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.05,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -93.19,
                                   "pitch": -14.74
                                  }
                                 ],
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_87859360_99B8_2862_41D6_4D57CBAF7BF5); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -93.19,
                                   "hfov": 9.05,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 69,
                                      "width": 130,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -14.74
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 52,
                                      "width": 64,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.25,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 155.68,
                                   "pitch": -8.65
                                  }
                                 ],
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_878EC351_99B8_29A2_41E0_E7F62B6B8CFB); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 155.68,
                                   "hfov": 9.25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 104,
                                      "width": 129,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -8.65
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 33,
                                      "width": 65,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.11,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 37.47,
                                   "pitch": -13.25
                                  }
                                 ],
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_87B9636E_99B8_287E_41B4_DC43C4DDB73C); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 37.47,
                                   "hfov": 9.11,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 67,
                                      "width": 130,
                                      "class": "ImageResourceLevel",
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
                                  "height": 2500,
                                  "width": 5000,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMin": 60,
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                               "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                              }
                             ],
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 38,
                                         "width": 65,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 9.16,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 4.5,
                                      "pitch": -11.86
                                     }
                                    ],
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_847E231B_99B8_29A7_41C3_49D9A022B623); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 4.5,
                                      "hfov": 9.16,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 76,
                                         "width": 130,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -11.86
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 41,
                                         "width": 65,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 9.19,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -162.77,
                                      "pitch": -11.1
                                     }
                                    ],
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_84750329_99B8_29E3_41E1_DFD2E28EDF3A); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -162.77,
                                      "hfov": 9.19,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 82,
                                         "width": 130,
                                         "class": "ImageResourceLevel",
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
                                     "height": 2500,
                                     "width": 5000,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "hfovMin": 60,
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                  "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                 }
                                ],
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 53,
                                            "width": 65,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 9.18,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -36.03,
                                         "pitch": -11.37
                                        }
                                       ],
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_87AA837C_99B8_2862_41CF_8DB3DF55993A); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -36.03,
                                         "hfov": 9.18,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 106,
                                            "width": 130,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -11.37
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 34,
                                            "width": 65,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 9.21,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 26.17,
                                         "pitch": -11.26
                                        }
                                       ],
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_87A1638A_99B8_28A6_41B9_9695CAB1B377); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 26.17,
                                         "hfov": 9.21,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 68,
                                            "width": 130,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -11.26
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 54,
                                            "width": 57,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.06,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 163.47,
                                         "pitch": -14.17
                                        }
                                       ],
                                       "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_87D2C397_99B8_28AE_41D7_F5F568167A52); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 163.47,
                                         "hfov": 8.06,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 109,
                                            "width": 115,
                                            "class": "ImageResourceLevel",
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
                                        "height": 2500,
                                        "width": 5000,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                     "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                    }
                                   ],
                                   "label": "C19",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 61,
                                               "width": 60,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.68,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -166.65,
                                            "pitch": -8.17
                                           }
                                          ],
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_871E83F4_99B8_2862_41E3_174BAEB6E136); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -166.65,
                                            "hfov": 8.68,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 123,
                                               "width": 121,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -8.17
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 39,
                                               "width": 45,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.47,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -6.22,
                                            "pitch": -10.72
                                           }
                                          ],
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_87129411_99B8_2FA3_41D2_66FB0F7EF7C6); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -6.22,
                                            "hfov": 6.47,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 79,
                                               "width": 91,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -10.72
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 62,
                                               "width": 57,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.15,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 87.5,
                                            "pitch": -9.88
                                           }
                                          ],
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_8704942E_99B8_2FE1_41B4_0230D01D69D3); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 87.5,
                                            "hfov": 8.15,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 124,
                                               "width": 114,
                                               "class": "ImageResourceLevel",
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
                                           "height": 2500,
                                           "width": 5000,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "label": "C23",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 32,
                                                  "width": 65,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 9.22,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -172.45,
                                               "pitch": -10.04
                                              }
                                             ],
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_843A62C4_99B8_28A1_41E2_424345A87C23); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -172.45,
                                               "hfov": 9.22,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 64,
                                                  "width": 130,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.04
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 26,
                                                  "width": 65,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 9.21,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -20.33,
                                               "pitch": -10.3
                                              }
                                             ],
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_842922E3_99B8_2867_41BC_EC9DFAD285ED); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -20.33,
                                               "hfov": 9.21,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 53,
                                                  "width": 130,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.3
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 33,
                                                  "width": 65,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.93,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 101.34,
                                               "pitch": -17.37
                                              }
                                             ],
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_8433D2D4_99B8_28A1_41E0_D135247557F7); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 101.34,
                                               "hfov": 8.93,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 66,
                                                  "width": 130,
                                                  "class": "ImageResourceLevel",
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
                                              "height": 2500,
                                              "width": 5000,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "label": "C16",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "class": "AdjacentPanorama",
                                           "yaw": -172.45,
                                           "backwardYaw": -166.65,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "class": "AdjacentPanorama",
                                           "yaw": 101.34,
                                           "backwardYaw": -93.19,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "class": "AdjacentPanorama",
                                           "yaw": -20.33,
                                           "backwardYaw": 163.21,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -166.65,
                                        "backwardYaw": -172.45,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -6.22,
                                        "backwardYaw": -36.03,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 64,
                                                  "width": 63,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.82,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -178.42,
                                               "pitch": -15.23
                                              }
                                             ],
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_8750A4A3_99B8_28E6_41DC_DCB5BCCB13DF); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -178.42,
                                               "hfov": 8.82,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 128,
                                                  "width": 127,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -15.23
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 55,
                                                  "width": 63,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 9,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 23.25,
                                               "pitch": -11.12
                                              }
                                             ],
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_875E148C_99B8_28A1_41D8_272C22640404); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 23.25,
                                               "hfov": 9,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 111,
                                                  "width": 127,
                                                  "class": "ImageResourceLevel",
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
                                              "height": 2500,
                                              "width": 5000,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                           "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                          }
                                         ],
                                         "label": "C22",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "class": "AdjacentPanorama",
                                           "yaw": 23.25,
                                           "backwardYaw": 87.5,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": {
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 82,
                                                     "width": 77,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 10.65,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -178.92,
                                                  "pitch": -16.66
                                                 }
                                                ],
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_84C95215_99B8_2BA2_41CF_2ACD0E2C4C73); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -178.92,
                                                  "hfov": 10.65,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 165,
                                                     "width": 154,
                                                     "class": "ImageResourceLevel",
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
                                                 "height": 2500,
                                                 "width": 5000,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "class": "Panorama",
                                            "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                              "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                             }
                                            ],
                                            "label": "C21",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "class": "AdjacentPanorama",
                                              "yaw": -178.92,
                                              "backwardYaw": -178.42,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": -178.42,
                                           "backwardYaw": -178.92,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 87.5,
                                        "backwardYaw": 23.25,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -36.03,
                                     "backwardYaw": -6.22,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "class": "AdjacentPanorama",
                                     "yaw": 26.17,
                                     "backwardYaw": 4.5,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 34,
                                               "width": 65,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 9.22,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -179.2,
                                            "pitch": -9.77
                                           }
                                          ],
                                          "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_876B54D0_99B8_28A2_41D6_BDCF27DF0079); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -179.2,
                                            "hfov": 9.22,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 69,
                                               "width": 130,
                                               "class": "ImageResourceLevel",
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
                                           "height": 2500,
                                           "width": 5000,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                                        "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                                       }
                                      ],
                                      "label": "C20",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -179.2,
                                        "backwardYaw": 163.47,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 163.47,
                                     "backwardYaw": -179.2,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 4.5,
                                  "backwardYaw": 26.17,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -162.77,
                                  "backwardYaw": 155.68,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 155.68,
                               "backwardYaw": -162.77,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "class": "AdjacentPanorama",
                               "yaw": -93.19,
                               "backwardYaw": 101.34,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 37.47,
                               "backwardYaw": 78.56,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 78.56,
                            "backwardYaw": 37.47,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -36.3,
                         "backwardYaw": -138.38,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "width": 65,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 9.5,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 130.87,
                                "pitch": -5.71
                               }
                              ],
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_8416529A_99B8_28A1_41C6_570240483DBC); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.87,
                                "hfov": 9.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "width": 130,
                                   "class": "ImageResourceLevel",
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
                               "height": 2450,
                               "width": 4900,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 60,
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
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
                            "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62"
                           }
                          ],
                          "label": "C09",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": 130.87,
                            "backwardYaw": -168.2,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -168.2,
                         "backwardYaw": 130.87,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "class": "AdjacentPanorama",
                         "yaw": 30.75,
                         "backwardYaw": 11.96,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 11.96,
                      "backwardYaw": 30.75,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "class": "AdjacentPanorama",
                      "yaw": 163.21,
                      "backwardYaw": -20.33,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -91.86,
                      "backwardYaw": 5.64,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 5.64,
                   "backwardYaw": -91.86,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "class": "AdjacentPanorama",
                   "yaw": -179.79,
                   "backwardYaw": -177.15,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": -177.15,
                "backwardYaw": -179.79,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -1.54,
             "backwardYaw": -1.42,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": 179.91,
          "backwardYaw": -179.87,
          "distance": 1
         },
         {
          "panorama": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
          "class": "AdjacentPanorama",
          "yaw": 1.93,
          "backwardYaw": 2.66,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 2.66,
       "backwardYaw": 1.93,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "class": "AdjacentPanorama",
       "yaw": -179.81,
       "backwardYaw": 2.71,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": 2.71,
    "backwardYaw": -179.81,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true
 },
 {
  "viewerArea": {
   "toolTipFontStyle": "normal",
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 342,
   "playbackBarHeadShadow": true,
   "playbackBarRight": 0,
   "shadow": false,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "toolTipPaddingBottom": 4,
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
   "class": "ViewerArea",
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
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
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "paddingLeft": 0
  },
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.84,
   "pitch": 3.87
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.31,
   "pitch": -3.25
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.78,
   "pitch": 5.39
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.32,
   "pitch": -2.81
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.92,
   "pitch": -0.89
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.16,
   "pitch": -4.17
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.48,
   "pitch": 4.56
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  }
 },
 "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 2.88
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_87032141_99B8_29A3_41D1_4D104335CB28, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_87032141_99B8_29A3_41D1_4D104335CB28",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_87009142_99B8_29A1_4195_FE873C569459, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_87009142_99B8_29A1_4195_FE873C569459",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_87004142_99B8_29A1_41CF_56EC853038FD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_87004142_99B8_29A1_41CF_56EC853038FD",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8701E148_99B8_29A1_41D4_E24DEAF62EAA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_8701E148_99B8_29A1_41D4_E24DEAF62EAA",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_87019149_99B8_29A3_41D9_D0032E2C2CD7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_87019149_99B8_29A3_41D9_D0032E2C2CD7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_87013149_99B8_29A3_41BB_E0223AEE7249, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_87013149_99B8_29A3_41BB_E0223AEE7249",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873EE14A_99B8_29A1_41AE_CD81C7FEB125, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_873EE14A_99B8_29A1_41AE_CD81C7FEB125",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873E914A_99B8_29A1_41E2_82155D95404F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_873E914A_99B8_29A1_41E2_82155D95404F",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873E2150_99B8_29A1_41D4_658A2D260EAE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_873E2150_99B8_29A1_41D4_658A2D260EAE",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873FC151_99B8_29A3_41D4_71BDF2B86378, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_873FC151_99B8_29A3_41D4_71BDF2B86378",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873F7151_99B8_29A3_41C9_A5144892F63B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_873F7151_99B8_29A3_41C9_A5144892F63B",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873F1152_99B8_29A1_41D4_190742D105B2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_873F1152_99B8_29A1_41D4_190742D105B2",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873CC152_99B8_29A1_41C5_22077546C887, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_873CC152_99B8_29A1_41C5_22077546C887",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873C7158_99B8_29A1_41E2_DE458DDB0C47, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_873C7158_99B8_29A1_41E2_DE458DDB0C47",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873C1158_99B8_29A1_41DD_905A5075CBDF, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_873C1158_99B8_29A1_41DD_905A5075CBDF",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873DB159_99B8_29A3_41E2_7CA6B7B989C8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_873DB159_99B8_29A3_41E2_7CA6B7B989C8",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873D6159_99B8_29A3_41D9_F8E5E0E17EC8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_873D6159_99B8_29A3_41D9_F8E5E0E17EC8",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873D015F_99B8_285F_41BB_F89D12149914, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_873D015F_99B8_285F_41BB_F89D12149914",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873AB160_99B8_2861_41DE_2A2D6496780B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_873AB160_99B8_2861_41DE_2A2D6496780B",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873A6160_99B8_2861_41E2_9069A21D324F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_873A6160_99B8_2861_41E2_9069A21D324F",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873A0161_99B8_2863_41C3_5F197F3E3DA7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "id": "PanoramaPlayListItem_873A0161_99B8_2863_41C3_5F197F3E3DA7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873BB161_99B8_2863_41C3_891AC709F50D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "id": "PanoramaPlayListItem_873BB161_99B8_2863_41C3_891AC709F50D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_873B5167_99B8_286F_41E0_7A71CDE3C64A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "id": "PanoramaPlayListItem_873B5167_99B8_286F_41E0_7A71CDE3C64A",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "class": "PlayList",
  "id": "playList_8703C141_99B8_29A3_41D1_D9720DB37FEA",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "class": "MapPlayListItem",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_873A8168_99B8_2861_41D3_60FDD54566AD",
 {
  "class": "PanoramaCamera",
  "id": "camera_8727C1B4_99B8_28E1_41D0_DDC942C1847B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.49,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_872111C1_99B8_28A2_41B0_ADF147E2A333",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84D161F9_99B8_2862_41D1_49FEC7CC8BE6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.07,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84CCC207_99B8_2BAE_41B6_5EA5F2C2428D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.29,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84C95215_99B8_2BA2_41CF_2ACD0E2C4C73",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84C2F224_99B8_2BE2_41C9_55A6FC369175",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.62,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84FF4233_99B8_2BE6_41C9_EDE280B77828",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.13,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84F92242_99B8_2BA6_41BF_B0843D0435B2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84F2A251_99B8_2BA2_41DD_B073EBDFE82A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84ECC260_99B8_2862_4142_4B8D693ECA80",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.34,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84E8226F_99B8_287E_41DB_2B5EDB3038C5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.84,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_84E2227E_99B8_2861_41D1_772553FEC189",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.7,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_841C128C_99B8_28A1_41D9_657FC0135B77",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.53,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8416529A_99B8_28A1_41C6_570240483DBC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_840CF2A8_99B8_28E1_41E2_930C1F469B4E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_840462B6_99B8_28E1_41A7_0371D2F2BFAB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_843A62C4_99B8_28A1_41E2_424345A87C23",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.35,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8433D2D4_99B8_28A1_41E0_D135247557F7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.81,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_842922E3_99B8_2867_41BC_EC9DFAD285ED",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_845C52F2_99B8_2861_41B2_80B65E7CDE90",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.14,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8452D300_99B8_29A1_41DB_30A8A7F85B46",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.85,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8448230E_99B8_29A1_419F_967ADD63973E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.19,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "id": "camera_847E231B_99B8_29A7_41C3_49D9A022B623",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_84750329_99B8_29E3_41E1_DFD2E28EDF3A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8466B336_99B8_29EE_4191_347460D30CED",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.46,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_879D4344_99B8_29A2_41D6_09552772FF53",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.21,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_878EC351_99B8_29A2_41E0_E7F62B6B8CFB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.23,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87859360_99B8_2862_41D6_4D57CBAF7BF5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.66,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87B9636E_99B8_287E_41B4_DC43C4DDB73C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.44,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87AA837C_99B8_2862_41CF_8DB3DF55993A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87A1638A_99B8_28A6_41B9_9695CAB1B377",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.5,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87D2C397_99B8_28AE_41D7_F5F568167A52",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87C953A5_99B8_28E2_41D6_95DDB12FD624",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.57,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87FB53B3_99B8_28E6_41E2_289AC46C4473",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.09,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_87EBE3D1_99B8_28A2_41DB_650468F74F74",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_871E83F4_99B8_2862_41E3_174BAEB6E136",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.55,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "id": "camera_87129411_99B8_2FA3_41D2_66FB0F7EF7C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8704942E_99B8_2FE1_41B4_0230D01D69D3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.75,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8738844C_99B8_2FA1_41DD_14EDA7439C7D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.35,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_872AA46E_99B8_287E_41AC_1B97C3F70D76",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.7,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_875E148C_99B8_28A1_41D8_272C22640404",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.5,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_8750A4A3_99B8_28E6_41DC_DCB5BCCB13DF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_874424B4_99B8_28E2_41BE_517F3D99A529",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_877644C3_99B8_28A6_41D6_AD147D875E38",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.11,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "automaticZoomSpeed": 10,
  "id": "camera_876B54D0_99B8_28A2_41D6_BDCF27DF0079",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_869A24DE_99B8_285E_41B6_81BC0E995E57",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.25,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_868F34EB_99B8_2865_41BD_F57E52C55DF7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.67,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "id": "camera_86BEC4F9_99B8_2862_41D2_6570C6EF3586",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  "toolTipFontStyle": "normal",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
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
  "class": "ViewerArea",
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
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "paddingLeft": 0
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "paddingLeft": 0,
  "verticalAlign": "top",
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
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
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": 235.1,
    "verticalAlign": "top",
    "height": "99.327%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": 14,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "IconButton",
      "paddingRight": 0,
      "paddingLeft": 0,
      "mode": "push",
      "width": 200,
      "verticalAlign": "middle",
      "height": 71,
      "maxHeight": 147,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false)",
      "shadow": false,
      "maxWidth": 390,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_964A337C_9947_17EB_41DF_68F1AD905CE7",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_964A337C_9947_17EB_41DF_68F1AD905CE7.png",
      "left": "1%"
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": 1638,
    "verticalAlign": "top",
    "height": 436,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 9,
    "shadow": false,
    "contentOpaque": false,
    "top": "0.06%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.MapViewer",
     {
      "class": "IconButton",
      "paddingRight": 0,
      "paddingLeft": 0,
      "mode": "push",
      "width": 70,
      "verticalAlign": "middle",
      "height": 70,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "shadow": false,
      "maxWidth": 108,
      "top": "0.1%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "left": "1.17%"
     }
    ]
   }
  ]
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "paddingLeft": 0,
  "verticalAlign": "bottom",
  "height": 275.05,
  "width": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "vertical",
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "height": 181,
    "width": "97.739%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "width": 564,
      "verticalAlign": "top",
      "height": 181,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "width": 564,
        "verticalAlign": "middle",
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "top": "2.21%",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
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
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
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
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 300,
              "verticalAlign": "middle",
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
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
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
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
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "width": 564,
        "verticalAlign": "middle",
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "top": "2.15%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 300,
              "verticalAlign": "middle",
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "86.188%",
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "top": "5.47%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 300,
              "verticalAlign": "middle",
              "height": 300,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 180,
          "verticalAlign": "middle",
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "width": 126,
            "verticalAlign": "top",
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "paddingLeft": 0,
              "mode": "push",
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "paddingLeft": 0,
              "width": 126,
              "verticalAlign": "middle",
              "height": 126,
              "maxHeight": 126,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "scaleMode": "fit_inside",
              "shadow": false,
              "maxWidth": 126,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "paddingLeft": 0,
            "verticalAlign": "top",
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "paddingLeft": 0,
              "fontSize": 18,
              "verticalAlign": "middle",
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
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "bottom",
    "height": 77,
    "width": "97.913%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "IconButton",
        "paddingRight": 0,
        "paddingLeft": 0,
        "mode": "push",
        "width": 70,
        "verticalAlign": "middle",
        "height": 70,
        "maxHeight": 84,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "shadow": false,
        "maxWidth": 84,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "left": "2.45%"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "width": 54,
        "verticalAlign": "top",
        "height": 54,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "absolute",
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
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 54,
          "verticalAlign": "middle",
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
          "right": "-1.96%"
         },
         {
          "class": "Image",
          "paddingRight": 0,
          "paddingLeft": 0,
          "width": 54,
          "verticalAlign": "middle",
          "height": 54,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "minHeight": 1,
          "visible": false,
          "paddingBottom": 0,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "left": "0%"
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ]
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "borderRadius": 0,
    "scaleMode": "fit_outside",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"jp\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "left": "0%"
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "height": "35%",
    "width": "69.961%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": "28.15%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": "11.52%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "23.602%",
      "width": "91.379%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "65.789%",
        "maxHeight": 61,
        "width": "47.17%",
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "100%",
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 49,
          "width": "43.969%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "backgroundColor": [],
      "paddingLeft": 0,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "width": "95.22%",
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "11.131%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "13.57%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "39.005%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "94.66%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.977%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "94%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "11.389%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "41.415%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "29.099%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "top",
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": "0%",
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "IconButton",
      "paddingRight": 0,
      "paddingLeft": 0,
      "mode": "push",
      "width": 62,
      "verticalAlign": "middle",
      "height": 58,
      "maxHeight": 72,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "shadow": false,
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "left": "3.02%"
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "height": "36.522%",
    "width": "69.961%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 3,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": "26.8%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": "14.16%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "23.81%",
      "width": "91.379%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "47.5%",
        "maxHeight": 61,
        "width": "47.17%",
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "100%",
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 49,
          "width": "46.891%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "100%",
            "maxHeight": 49,
            "width": "100%",
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
            "paddingTop": 0
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "backgroundColor": [],
      "paddingLeft": 0,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "12.5%",
      "maxHeight": 49,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "width": "95.22%",
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 3,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "8.714%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "95.238%",
          "maxHeight": 45,
          "width": "81.25%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "11.212%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "91.13%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "21.881%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "97.62%",
          "maxHeight": 49,
          "width": "97.93%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "4.973%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "19.078%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 9,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "85.714%",
          "maxHeight": 49,
          "width": "86.73%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "33.333%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "8.534%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "40.316%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "98.98%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "53.351%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "64%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "height": "88.587%",
    "width": "60.736%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "vertical",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 6,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": "2.61%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "18.64%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "bottom",
      "height": "5.767%",
      "width": "92.131%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "top",
      "height": "0.175%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "4.908%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "9.82%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "right",
          "minWidth": 1,
          "gap": 10,
          "maxWidth": 300,
          "shadow": false,
          "minHeight": 1,
          "contentOpaque": false,
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 300,
          "width": "10.592%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "height": "75%",
          "maxHeight": 49,
          "width": "52.532%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
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
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
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
            "paddingTop": 0
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "1.227%",
      "width": "99.858%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "3.804%",
      "maxHeight": 49,
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "30.884%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "98.71%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "9.136%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 243,
          "width": "97.83%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "15.094%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 49,
          "width": "90.13%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "4.049%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "89.474%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "4.17%",
      "maxHeight": 49,
      "width": "69.836%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 2,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "7.835%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "right",
        "minWidth": 1,
        "gap": 10,
        "maxWidth": 1000,
        "shadow": false,
        "minHeight": 1,
        "contentOpaque": false,
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "13.229%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "97.06%",
        "maxHeight": 49,
        "width": "46.479%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "left",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "1.35%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "width": 726,
        "paddingLeft": 0,
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
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "4.417%",
      "maxHeight": 49,
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "24.528%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "94.44%",
          "maxHeight": 49,
          "width": "94.33%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 300,
        "width": "6.951%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
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
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "maxHeight": 300,
          "width": "71.43%",
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
          "paddingTop": 0
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "16.981%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "94.44%",
          "maxHeight": 49,
          "width": "87.13%",
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
          "paddingTop": 0
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "height": "4.417%",
      "maxHeight": 49,
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "maxHeight": 49,
        "width": "73.209%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
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
          "paddingTop": 0
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
 "class": "Player",
 "paddingLeft": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "contentOpaque": false,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_8703C141_99B8_29A3_41D1_D9720DB37FEA.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "width": "100%"
})