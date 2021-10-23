TDV.PlayerAPI.defineScript({ "definitions": [
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A04CD7F7_AB7E_865D_41B2_E42C3427D986); this.mainPlayList.set('selectedIndex', 1)",
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
  "hfovMin": 60,
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "opacity": 0.4,
   "id": "Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
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
  "mapLocations": [
   {
    "x": 262.97,
    "map": {
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084_t.png",
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
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 652,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
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
       "image": {
        "x": 797.89,
        "y": 198.88,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 763.83,
        "y": 197.92,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 248.97,
        "y": 101.95,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 298.99,
        "y": 117.98,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 336,
        "y": 128.99,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 379,
        "y": 147.98,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 420.96,
        "y": 165.93,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 461.96,
        "y": 185.95,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 512.94,
        "y": 203.98,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 548.99,
        "y": 178.93,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 537.98,
        "y": 112.96,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 579.95,
        "y": 199.99,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 634.99,
        "y": 199.99,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 689.95,
        "y": 197.99,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 728,
        "y": 198.95,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 582.97,
        "y": 357.94,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 567.98,
        "y": 320.93,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 572.93,
        "y": 275.94,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 575,
        "y": 253.99,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 474.96,
        "y": 304.97,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
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
       "image": {
        "x": 504,
        "y": 287.98,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 545.96,
        "y": 286.94,
        "class": "HotspotMapOverlayImage",
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
       "image": {
        "x": 529.93,
        "y": 250.97,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_to_height",
     "maximumZoomFactor": 1
    },
    "y": 114.95,
    "angle": 114.15,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C01",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "viewerArea": {
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "minHeight": 436,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "transitionMode": "blending",
   "paddingTop": 0,
   "progressHeight": 10,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
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
   "width": 683,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "paddingLeft": 0,
   "height": 436,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowBlurRadius": 3,
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
   "borderRadius": 10,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "minWidth": 683,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
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
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowVerticalLength": 0
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_A074C7C0_AB7E_86B3_41C9_C9D7CDC23CC5); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
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
        "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_A183B7B3_AB7E_86D6_41E2_03B65FC82128); this.mainPlayList.set('selectedIndex', 0)",
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
  "hfovMin": 60,
  "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
  "mapLocations": [
   {
    "x": 310.49,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 130.98,
    "angle": 118.81,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C02",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_A1A9C76D_AB7E_8672_41E0_F449E6010A98); this.mainPlayList.set('selectedIndex', 3)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A1AC5760_AB7E_8672_41DA_D83F35E67F73); this.mainPlayList.set('selectedIndex', 1)",
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
  "hfovMin": 60,
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
  "mapLocations": [
   {
    "x": 350.5,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 142.99,
    "angle": 289.92,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C03",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_A76E26F9_AB7E_8655_41D4_90DF2A4DA757); this.mainPlayList.set('selectedIndex', 2)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_A77846EA_AB7E_8677_41D6_DCABD25380C6); this.mainPlayList.set('selectedIndex', 4)",
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
  "hfovMin": 60,
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
  "mapLocations": [
   {
    "x": 392.49,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 160.98,
    "angle": 114.78,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C04",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_A0E93656_AB7E_865F_41D3_1168219D686E); this.mainPlayList.set('selectedIndex', 5)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_A0D8A66A_AB7E_8677_41DA_558E71F3BEB6); this.mainPlayList.set('selectedIndex', 3)",
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
  "hfovMin": 60,
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
  "mapLocations": [
   {
    "x": 433.92,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 177.93,
    "angle": 291.13,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C05",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_A044C5AA_AB7E_FAF7_41DF_25A20BED65A5); this.mainPlayList.set('selectedIndex', 4)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A03DA5B9_AB7E_FAD5_41A5_6AB531C43361); this.mainPlayList.set('selectedIndex', 6)",
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
  "hfovMin": 60,
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
  "mapLocations": [
   {
    "x": 474.39,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 196.95,
    "angle": 112.99,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C06",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_A0007859_AB7E_8A55_41E1_1584ABB1FF12); this.mainPlayList.set('selectedIndex', 5)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A0F4B86A_AB7E_8A77_41E1_9DC19F1D1676); this.mainPlayList.set('selectedIndex', 7)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A0EAF879_AB7E_8A55_41E4_C635D0F1D785); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
  "hfovMin": 60,
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
  "mapLocations": [
   {
    "x": 526.44,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 217.48,
    "angle": 24.78,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C07",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_A09436CC_AB7E_86B3_41D8_16E742F64C20); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A0A6A6BD_AB7E_86CD_41D8_F3D50ADFD601); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A08B16DB_AB7E_8655_41D9_A73E27916E5D); this.mainPlayList.set('selectedIndex', 6)",
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
  "hfovMin": 60,
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
  "mapLocations": [
   {
    "x": 562.49,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 192.43,
    "angle": 176.22,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C08",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A1B60752_AB7E_8656_41B4_CC21B8615AE4); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
  "hfovMin": 60,
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
  "mapLocations": [
   {
    "x": 551.48,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 126.46,
    "angle": 34.51,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C09",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A0F5963D_AB7E_F9D2_41CE_5DFD4E00A7A7); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_A0079629_AB7E_F9F2_41C7_A90DC9931296); this.mainPlayList.set('selectedIndex', 10)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A011760F_AB7E_F9CE_41D4_AA2C6D015C35); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
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
  "hfovMin": 60,
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
  "mapLocations": [
   {
    "x": 593.45,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 213.49,
    "angle": 90,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C10",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A05EE58D_AB7E_FACD_41B9_4124EF644F8D); this.mainPlayList.set('selectedIndex', 9)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A064257E_AB7E_FA4F_41E1_09A7746228E3); this.mainPlayList.set('selectedIndex', 11)",
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
  "hfovMin": 60,
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
  "mapLocations": [
   {
    "x": 648.49,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 213.49,
    "angle": -82.09,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C11",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_A024582F_AB7E_89CD_41E5_6F2AA9274C8F); this.mainPlayList.set('selectedIndex', 10)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_A0310821_AB7E_89F5_41B8_0DA3D5B5730A); this.mainPlayList.set('selectedIndex', 12)",
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
  "hfovMin": 60,
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
  "mapLocations": [
   {
    "x": 703.45,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 211.49,
    "angle": 274.9,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C12",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_A073E56E_AB7E_FA4F_41E4_F2FB2857898D); this.mainPlayList.set('selectedIndex', 13)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A07BF55F_AB7E_FA4D_4165_92300D61FB2C); this.mainPlayList.set('selectedIndex', 11)",
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
  "hfovMin": 60,
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
  "mapLocations": [
   {
    "x": 741.5,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 212.45,
    "angle": 91.55,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C13",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_A045B805_AB7E_89BD_41A7_0080EB8794E7); this.mainPlayList.set('selectedIndex', 12)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_A038F813_AB7E_89D5_41D4_86CADAC519C2); this.mainPlayList.set('selectedIndex', 14)",
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
  "hfovMin": 60,
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
  "mapLocations": [
   {
    "x": 779.33,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 213.86,
    "angle": 83.66,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C14",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_A18957A5_AB7E_86F2_41E2_E11975E21DF5); this.mainPlayList.set('selectedIndex', 13)",
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
  "hfovMin": 60,
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
  "mapLocations": [
   {
    "x": 813.39,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 214.38,
    "angle": 264.59,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C15",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A02AD5E1_AB7E_FA72_4198_5B360B93AE4E); this.mainPlayList.set('selectedIndex', 22)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A01D95FA_AB7E_FA56_41D1_EA65A726E5FE); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A030B5C8_AB7E_FAB3_41D7_17CE05CD36BA); this.mainPlayList.set('selectedIndex', 16)",
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
  "hfovMin": 60,
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
  "mapLocations": [
   {
    "x": 543.43,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 264.47,
    "angle": 14.04,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C16",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A06657DB_AB7E_8655_41B4_4FFAAEECE5AB); this.mainPlayList.set('selectedIndex', 15)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A06D37CD_AB7E_864D_41D0_230B4850EE44); this.mainPlayList.set('selectedIndex', 17)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A059A7E9_AB7E_8675_41E0_5D7EF5F44AD0); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
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
  "hfovMin": 60,
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
  "mapLocations": [
   {
    "x": 588.5,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 267.49,
    "angle": -2.86,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C17",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A19F2789_AB7E_86B2_41A1_30A12E027084); this.mainPlayList.set('selectedIndex', 18)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A1A7D77B_AB7E_8656_41D1_344C54F66A0B); this.mainPlayList.set('selectedIndex', 16)",
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
  "hfovMin": 60,
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
  "mapLocations": [
   {
    "x": 586.43,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 289.44,
    "angle": 170.61,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C18",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A1C1E729_AB7E_87F5_41CF_096C7EC5D0BF); this.mainPlayList.set('selectedIndex', 22)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A1BD8737_AB7E_87DD_41DC_629918E7AF7C); this.mainPlayList.set('selectedIndex', 17)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_A1B9F745_AB7E_87B2_41AD_463C1B924D53); this.mainPlayList.set('selectedIndex', 19)",
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
  "hfovMin": 60,
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
  "mapLocations": [
   {
    "x": 581.48,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 334.43,
    "angle": 0,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C19",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A191D798_AB7E_86D2_41D0_D76621A7FE94); this.mainPlayList.set('selectedIndex', 18)",
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
  "hfovMin": 60,
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
  "mapLocations": [
   {
    "x": 596.47,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 371.44,
    "angle": 154.54,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C20",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A051C59B_AB7E_FAD5_41E3_AFA735D4A8B1); this.mainPlayList.set('selectedIndex', 21)",
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
  "hfovMin": 60,
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
  "mapLocations": [
   {
    "x": 488.46,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 318.47,
    "angle": 242.01,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C21",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_A013084B_AB7E_89B5_41C3_76C87CA04D22); this.mainPlayList.set('selectedIndex', 20)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A01F883D_AB7E_89CD_41E0_AFA1E190D9B7); this.mainPlayList.set('selectedIndex', 22)",
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
  "hfovMin": 60,
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
  "mapLocations": [
   {
    "x": 517.5,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 301.48,
    "angle": 74.74,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C22",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
 {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A0CD8683_AB7E_86B5_41DD_2BD38FD4940E); this.mainPlayList.set('selectedIndex', 15)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A0B1E6AD_AB7E_86CD_41DD_1AAB9524A78F); this.mainPlayList.set('selectedIndex', 18)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A0C3269C_AB7E_86D3_41DC_12707A8294E0); this.mainPlayList.set('selectedIndex', 21)",
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
  "hfovMin": 60,
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
  "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
  "mapLocations": [
   {
    "x": 559.46,
    "map": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "y": 300.44,
    "angle": 151.39,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "C23",
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180
 },
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
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1A2F516_AB7E_FBDF_41DA_B82A8B43C50D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A1A2F516_AB7E_FBDF_41DA_B82A8B43C50D",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19E451B_AB7E_FBD5_41DD_EC6EBFD62E06, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19E451B_AB7E_FBD5_41DD_EC6EBFD62E06",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19E151C_AB7E_FBD3_41E0_665B856C9CA1, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19E151C_AB7E_FBD3_41E0_665B856C9CA1",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19D751D_AB7E_FBCD_41DA_54FF30E18D2B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19D751D_AB7E_FBCD_41DA_54FF30E18D2B",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19EC51D_AB7E_FBCD_4196_A44E32933195, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19EC51D_AB7E_FBCD_4196_A44E32933195",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19EA51E_AB7E_FBCF_41E5_30C98F9CD0CE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19EA51E_AB7E_FBCF_41E5_30C98F9CD0CE",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19E751E_AB7E_FBCF_41E4_D855EFE05ECF, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19E751E_AB7E_FBCF_41E4_D855EFE05ECF",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19FD51F_AB7E_FBCD_41D3_3934FB10F3FA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19FD51F_AB7E_FBCD_41D3_3934FB10F3FA",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19FA51F_AB7E_FBCD_41BB_6277302BF7AF, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19FA51F_AB7E_FBCD_41BB_6277302BF7AF",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19F0520_AB7E_FBF3_41A1_923D5CE081A6, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19F0520_AB7E_FBF3_41A1_923D5CE081A6",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A198E520_AB7E_FBF3_41D3_36CB9F77EAFB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A198E520_AB7E_FBF3_41D3_36CB9F77EAFB",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A198B521_AB7E_FBF5_41E4_0779EDD46951, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A198B521_AB7E_FBF5_41E4_0779EDD46951",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1981521_AB7E_FBF5_41C7_0B7B6C2028DE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A1981521_AB7E_FBF5_41C7_0B7B6C2028DE",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A199E522_AB7E_FBF7_41CE_D8D8702E6F5B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A199E522_AB7E_FBF7_41CE_D8D8702E6F5B",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1994522_AB7E_FBF7_41DF_5888532644B5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A1994522_AB7E_FBF7_41DF_5888532644B5",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A1992523_AB7E_FBF5_41D4_258951D29C5F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A1992523_AB7E_FBF5_41D4_258951D29C5F",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19AF523_AB7E_FBF5_41B5_F8248E6D8B89, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19AF523_AB7E_FBF5_41B5_F8248E6D8B89",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19A6524_AB7E_FBF3_41C5_8703708E6F07, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19A6524_AB7E_FBF3_41C5_8703708E6F07",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19A3524_AB7E_FBF3_419C_F1536CE6E519, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19A3524_AB7E_FBF3_419C_F1536CE6E519",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19B9525_AB7E_FBFD_41BB_6AB136B9B561, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19B9525_AB7E_FBFD_41BB_6AB136B9B561",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A19B7525_AB7E_FBFD_41D7_4288BD38367D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A19B7525_AB7E_FBFD_41D7_4288BD38367D",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A194C526_AB7E_FBFF_41CD_21F0DBD6D502, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A194C526_AB7E_FBFF_41CD_21F0DBD6D502",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A194B526_AB7E_FBFF_41D5_ABFC4FAC7211, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A194B526_AB7E_FBFF_41D5_ABFC4FAC7211",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
 {
  "id": "playList_A1ABA50F_AB7E_FBCD_41E0_EC397B17BB36",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_A1941527_AB7E_FBFD_41B4_9744FEA8D661",
 {
  "id": "camera_A07BF55F_AB7E_FA4D_4165_92300D61FB2C",
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
  "id": "camera_A073E56E_AB7E_FA4F_41E4_F2FB2857898D",
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
  "id": "camera_A064257E_AB7E_FA4F_41E1_09A7746228E3",
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
  "id": "camera_A05EE58D_AB7E_FACD_41B9_4124EF644F8D",
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
  "id": "camera_A051C59B_AB7E_FAD5_41E3_AFA735D4A8B1",
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
  "id": "camera_A044C5AA_AB7E_FAF7_41DF_25A20BED65A5",
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
  "id": "camera_A03DA5B9_AB7E_FAD5_41A5_6AB531C43361",
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
  "id": "camera_A030B5C8_AB7E_FAB3_41D7_17CE05CD36BA",
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
  "id": "camera_A02AD5E1_AB7E_FA72_4198_5B360B93AE4E",
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
  "id": "camera_A01D95FA_AB7E_FA56_41D1_EA65A726E5FE",
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
  "id": "camera_A011760F_AB7E_F9CE_41D4_AA2C6D015C35",
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
  "id": "camera_A0079629_AB7E_F9F2_41C7_A90DC9931296",
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
  "id": "camera_A0F5963D_AB7E_F9D2_41CE_5DFD4E00A7A7",
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
  "id": "camera_A0E93656_AB7E_865F_41D3_1168219D686E",
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
  "id": "camera_A0D8A66A_AB7E_8677_41DA_558E71F3BEB6",
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
  "id": "camera_A0CD8683_AB7E_86B5_41DD_2BD38FD4940E",
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
  "id": "camera_A0C3269C_AB7E_86D3_41DC_12707A8294E0",
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
  "id": "camera_A0B1E6AD_AB7E_86CD_41DD_1AAB9524A78F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A0A6A6BD_AB7E_86CD_41D8_F3D50ADFD601",
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
  "id": "camera_A09436CC_AB7E_86B3_41D8_16E742F64C20",
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
  "id": "camera_A08B16DB_AB7E_8655_41D9_A73E27916E5D",
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
  "id": "camera_A77846EA_AB7E_8677_41D6_DCABD25380C6",
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
  "id": "camera_A76E26F9_AB7E_8655_41D4_90DF2A4DA757",
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
  "id": "camera_A1C1E729_AB7E_87F5_41CF_096C7EC5D0BF",
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
  "id": "camera_A1BD8737_AB7E_87DD_41DC_629918E7AF7C",
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
  "id": "camera_A1B9F745_AB7E_87B2_41AD_463C1B924D53",
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
  "id": "camera_A1B60752_AB7E_8656_41B4_CC21B8615AE4",
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
  "id": "camera_A1AC5760_AB7E_8672_41DA_D83F35E67F73",
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
  "id": "camera_A1A9C76D_AB7E_8672_41E0_F449E6010A98",
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
  "id": "camera_A1A7D77B_AB7E_8656_41D1_344C54F66A0B",
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
  "id": "camera_A19F2789_AB7E_86B2_41A1_30A12E027084",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A191D798_AB7E_86D2_41D0_D76621A7FE94",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A18957A5_AB7E_86F2_41E2_E11975E21DF5",
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
  "id": "camera_A183B7B3_AB7E_86D6_41E2_03B65FC82128",
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
  "id": "camera_A074C7C0_AB7E_86B3_41C9_C9D7CDC23CC5",
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
  "id": "camera_A06D37CD_AB7E_864D_41D0_230B4850EE44",
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
  "id": "camera_A06657DB_AB7E_8655_41B4_4FFAAEECE5AB",
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
  "id": "camera_A059A7E9_AB7E_8675_41E0_5D7EF5F44AD0",
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
  "id": "camera_A04CD7F7_AB7E_865D_41B2_E42C3427D986",
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
  "id": "camera_A045B805_AB7E_89BD_41A7_0080EB8794E7",
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
  "id": "camera_A038F813_AB7E_89D5_41D4_86CADAC519C2",
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
  "id": "camera_A0310821_AB7E_89F5_41B8_0DA3D5B5730A",
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
  "id": "camera_A024582F_AB7E_89CD_41E5_6F2AA9274C8F",
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
  "id": "camera_A01F883D_AB7E_89CD_41E0_AFA1E190D9B7",
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
  "id": "camera_A013084B_AB7E_89B5_41C3_76C87CA04D22",
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
  "id": "camera_A0007859_AB7E_8A55_41E1_1584ABB1FF12",
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
  "id": "camera_A0F4B86A_AB7E_8A77_41E1_9DC19F1D1676",
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
  "id": "camera_A0EAF879_AB7E_8A55_41E4_C635D0F1D785",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "minHeight": 50,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
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
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowBlurRadius": 3,
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
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
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
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowVerticalLength": 0
 },
 {
  "verticalAlign": "top",
  "paddingRight": 0,
  "layout": "absolute",
  "paddingLeft": 0,
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 0,
  "horizontalAlign": "left",
  "overflow": "hidden",
  "gap": 3,
  "minWidth": 1,
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "bottom": "0.12%",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "contentOpaque": false,
  "children": [
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "width": 235.1,
    "layout": "absolute",
    "paddingLeft": 0,
    "height": "99.327%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "left",
    "overflow": "visible",
    "gap": 10,
    "minWidth": 1,
    "top": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 181.7,
      "paddingLeft": 0,
      "height": 71,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "minWidth": 1,
      "top": "0%",
      "cursor": "hand",
      "maxWidth": 378,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "shadow": false,
      "left": "2.47%",
      "maxHeight": 145,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png"
     }
    ]
   },
   {
    "verticalAlign": "top",
    "paddingRight": 0,
    "width": 1638,
    "layout": "absolute",
    "paddingLeft": 0,
    "height": 436,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 9,
    "horizontalAlign": "left",
    "overflow": "visible",
    "gap": 4,
    "minWidth": 1,
    "top": "0.06%",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     "this.MapViewer",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 70,
      "paddingLeft": 0,
      "height": 70,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "minWidth": 1,
      "top": "0%",
      "cursor": "hand",
      "maxWidth": 145,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "shadow": false,
      "left": "1.16%",
      "maxHeight": 145,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "bottom",
  "paddingRight": 0,
  "layout": "vertical",
  "paddingLeft": 0,
  "height": 275.05,
  "width": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "overflow": "scroll",
  "gap": 10,
  "minWidth": 1,
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "bottom": "0.87%",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "layout": "horizontal",
    "paddingLeft": 0,
    "height": 181,
    "width": "97.739%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "overflow": "scroll",
    "gap": 10,
    "minWidth": 1,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": 181,
      "width": 564,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "contentOpaque": false,
        "paddingRight": 0,
        "width": 564,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "top": "2.21%",
        "shadow": false,
        "visible": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
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
        "contentOpaque": false,
        "paddingRight": 0,
        "width": 564,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "top": "2.15%",
        "shadow": false,
        "visible": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "97.619%",
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
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
        "contentOpaque": false,
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "86.188%",
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "top": "5.47%",
        "shadow": false,
        "visible": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "vertical",
          "paddingLeft": 0,
          "height": 156,
          "width": 180,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "overflow": "visible",
          "gap": 0,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 126,
            "width": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "visible",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "minWidth": 1,
              "top": "0%",
              "cursor": "hand",
              "maxWidth": 126,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "paddingLeft": 0,
              "height": 126,
              "borderSize": 0,
              "class": "Image",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "minWidth": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "maxHeight": 126
             }
            ]
           },
           {
            "verticalAlign": "top",
            "paddingRight": 0,
            "layout": "absolute",
            "paddingLeft": 0,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "class": "Container",
            "borderRadius": 0,
            "horizontalAlign": "left",
            "overflow": "scroll",
            "gap": 10,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
              "left": "0%"
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "class": "Label",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "minWidth": 1,
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minHeight": 1,
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "backgroundOpacity": 0,
              "bottom": "0%",
              "paddingTop": 0,
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
    "layout": "horizontal",
    "paddingLeft": 0,
    "height": 77,
    "width": "97.913%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "overflow": "scroll",
    "gap": 10,
    "minWidth": 1,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "paddingLeft": 0,
        "height": 70,
        "width": 70,
        "transparencyActive": false,
        "borderSize": 0,
        "class": "IconButton",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "minWidth": 1,
        "cursor": "hand",
        "maxWidth": 84,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "bottom": "7.35%",
        "paddingTop": 0,
        "shadow": false,
        "left": "2.45%",
        "maxHeight": 84,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "top",
        "paddingRight": 0,
        "layout": "absolute",
        "paddingLeft": 0,
        "height": 54,
        "width": 54,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "left",
        "overflow": "visible",
        "gap": 10,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "paddingLeft": 0,
          "height": 54,
          "borderSize": 0,
          "class": "Image",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "minWidth": 1,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "maxWidth": 509,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 509,
          "right": "-1.96%"
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "paddingLeft": 0,
          "height": 54,
          "borderSize": 0,
          "class": "Image",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "minWidth": 1,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "maxWidth": 509,
          "visible": false,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "left": "0%",
          "maxHeight": 509
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "layout": "absolute",
  "paddingLeft": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "overflow": "scroll",
  "gap": 10,
  "minWidth": 1,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "shadow": false,
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
  "left": "0%",
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": "100%",
    "borderSize": 0,
    "class": "Image",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "minWidth": 1,
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "backgroundOpacity": 0,
    "bottom": "0%",
    "paddingTop": 0,
    "left": "0%",
    "verticalAlign": "middle"
   },
   {
    "verticalAlign": "middle",
    "contentOpaque": false,
    "paddingRight": 0,
    "layout": "vertical",
    "paddingLeft": 0,
    "height": "49.24%",
    "width": "95.4%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "overflow": "visible",
    "gap": 3,
    "minWidth": 1,
    "top": "23.14%",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "10.817%",
      "width": "91.466%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "65.789%",
        "width": "47.17%",
        "borderSize": 0,
        "class": "Image",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 61,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 6,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "100%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "98.889%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "43.969%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "92.63%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 49,
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
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": 2,
        "width": 726,
        "borderSize": 0,
        "class": "Image",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "backgroundColor": [],
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "95.22%",
      "paddingRight": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 0,
      "borderRadius": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "11.131%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "98.485%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 45,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "13.57%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "97.98%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 243,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "39.005%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "94.66%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 408,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "6.977%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "94%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "67.082%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 734,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": 2,
        "width": 726,
        "borderSize": 0,
        "class": "Image",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 4,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "11.389%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "98.99%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "85.612%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 222,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 222,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "41.415%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "99.792%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "29.099%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "97.52%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
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
    "layout": "absolute",
    "paddingLeft": 0,
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "left",
    "overflow": "scroll",
    "gap": 10,
    "minWidth": 1,
    "top": "0%",
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 62,
      "paddingLeft": 0,
      "height": 58,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "minWidth": 1,
      "top": "23.74%",
      "cursor": "hand",
      "maxWidth": 72,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "shadow": false,
      "left": "3.02%",
      "maxHeight": 72,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png"
     }
    ]
   },
   {
    "verticalAlign": "middle",
    "contentOpaque": false,
    "paddingRight": 0,
    "layout": "vertical",
    "paddingLeft": 0,
    "height": "49.24%",
    "width": "95.4%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "overflow": "visible",
    "gap": 3,
    "minWidth": 1,
    "top": "23.14%",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "10.82%",
      "width": "91.379%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "47.5%",
        "width": "47.17%",
        "borderSize": 0,
        "class": "Image",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 61,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 6,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "99.123%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "98.889%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "46.891%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "100%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 49,
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
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": 2,
        "width": 726,
        "borderSize": 0,
        "class": "Image",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "backgroundColor": [],
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.5%",
      "width": "95.22%",
      "paddingRight": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 3,
      "borderRadius": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "minHeight": 1,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "8.714%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "95.238%",
          "width": "81.25%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 45,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "11.212%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "91.13%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 243,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "21.881%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.62%",
          "width": "97.93%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 408,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "4.973%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "100%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "19.078%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 9,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "85.714%",
          "width": "86.73%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "33.333%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 734,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": 2,
        "width": 726,
        "borderSize": 0,
        "class": "Image",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 4,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "8.534%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "77.193%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "85.612%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 222,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 222,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "40.316%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "98.98%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 459,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "12.46%",
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "53.351%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "64%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
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
    "contentOpaque": false,
    "paddingRight": 0,
    "layout": "vertical",
    "paddingLeft": 0,
    "height": "80.657%",
    "width": "63.993%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "overflow": "scroll",
    "gap": 6,
    "minWidth": 1,
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "bottom": "8.81%",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "17.25%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "5.77%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "68.085%",
        "width": "79.087%",
        "borderSize": 0,
        "class": "Image",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 61,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "layout": "absolute",
      "paddingLeft": 0,
      "height": "0.12%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "left",
      "overflow": "scroll",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 0,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "9.882%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "80.769%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "9.88%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "100%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 300,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "layout": "horizontal",
          "paddingLeft": 0,
          "height": "100%",
          "width": "52.993%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "class": "Container",
          "horizontalAlign": "center",
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "width": "100%",
            "borderSize": 0,
            "class": "Image",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "borderRadius": 0,
            "minWidth": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "minHeight": 1,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "shadow": false,
            "maxHeight": 49,
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
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "1.23%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "20%",
        "width": "100%",
        "borderSize": 0,
        "class": "Image",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.178%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 5,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "36.784%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "99.515%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "12.412%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "97.78%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 243,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "18.943%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "93.13%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "66.075%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "99.764%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 800,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 2,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "4.213%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 1000,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 49,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "95.45%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "10.118%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "82.14%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "32.594%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "92.89%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "1.35%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "overflow": "hidden",
      "gap": 10,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "18.18%",
        "width": "100%",
        "borderSize": 0,
        "class": "Image",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 2,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "visible",
      "gap": 0,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "33.925%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "visible",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "92.12%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "8.471%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "shadow": false,
        "maxHeight": 300,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "89.8%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 300,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "17.96%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "93.98%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "layout": "horizontal",
      "paddingLeft": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "Container",
      "horizontalAlign": "center",
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "minWidth": 1,
      "shadow": false,
      "paddingBottom": 0,
      "minHeight": 1,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "maxHeight": 49,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "layout": "horizontal",
        "paddingLeft": 0,
        "height": "100%",
        "width": "56.984%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "class": "Container",
        "horizontalAlign": "center",
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "minHeight": 1,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "maxHeight": 49,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "99.78%",
          "borderSize": 0,
          "class": "Image",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "borderRadius": 0,
          "minWidth": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "minHeight": 1,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "shadow": false,
          "maxHeight": 49,
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
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": "100%",
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "class": "Player",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "overflow": "visible",
 "gap": 10,
 "minWidth": 20,
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "width": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_A1ABA50F_AB7E_FBCD_41E0_EC397B17BB36.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
})