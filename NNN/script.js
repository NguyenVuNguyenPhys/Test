TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_83D71ED2_8E34_8A32_41DF_B6F34EDD072B); this.mainPlayList.set('selectedIndex', 1)",
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
   "id": "Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
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
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_t.png",
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_lq.png",
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
       "id": "overlay_855A603C_8917_88E2_41A5_F822EA9A33B4",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_46_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_46.png",
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
       "id": "overlay_855BB03D_8917_88E2_41C9_65A4C290BC8C",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_47_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_47.png",
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
       "id": "overlay_855BA03D_8917_88E2_41DB_DD15D051FB9D",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_48_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_48.png",
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
       "id": "overlay_855BC03D_8917_88E2_41BD_19497E1F64EF",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_49_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_49.png",
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
       "id": "overlay_855B103D_8917_88E2_41A3_331535F785BE",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_50_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_50.png",
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
       "id": "overlay_855B303D_8917_88E2_41C9_1C213ABBC16F",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_51_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_51.png",
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
       "id": "overlay_855B503D_8917_88E2_41AC_DFC835E0FE4A",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_52_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_52.png",
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
       "id": "overlay_855B603D_8917_88E2_41BE_C037DB949489",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_53_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_53.png",
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
       "id": "overlay_8558903D_8917_88E2_41D0_94973DD895E2",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_54_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_54.png",
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
       "id": "overlay_8558D03D_8917_88E2_41C1_C6C520062768",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_55_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_55.png",
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
       "id": "overlay_8558F03D_8917_88E2_41DB_8F1CF35834FD",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_56_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_56.png",
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
       "id": "overlay_855A603E_8917_88DE_41D6_F87BF1703986",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_57_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_57.png",
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
       "id": "overlay_855B803E_8917_88DE_4181_E171754FD037",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_58_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_58.png",
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
       "id": "overlay_855BB03E_8917_88DE_41E0_925AE9CE5610",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_59_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_59.png",
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
       "id": "overlay_855BD03E_8917_88DE_419E_0B0FEC08978E",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_60_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_60.png",
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
       "id": "overlay_855BC03E_8917_88DE_41B9_CB2520A4CD44",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_61_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_61.png",
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
       "id": "overlay_855BF03E_8917_88DE_41CE_4D6C02EFE3C6",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_62_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_62.png",
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
       "id": "overlay_855BE03F_8917_88DE_41D2_999BB793A744",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_63_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_63.png",
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
       "id": "overlay_855B103F_8917_88DE_41A3_27BC9B54E65F",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_64_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_64.png",
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
       "id": "overlay_855B003F_8917_88DE_41D4_0B0EDEAE8AB0",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_65_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_65.png",
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
       "id": "overlay_855B203F_8917_88DE_41DC_FFD072F40D48",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_66_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_66.png",
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
       "id": "overlay_855B703F_8917_88DE_41AD_2D9A87E12983",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_67_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_67.png",
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
       "id": "overlay_8558803F_8917_88DE_41DF_D108FC825A35",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_68_map.gif",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_68.png",
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
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1
    },
    "y": 133.23,
    "angle": 115.94,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfovMin": 60,
  "hfovMax": 120,
  "class": "Panorama",
  "label": "C01",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "partial": false,
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
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_801C1CDA_8E34_8E32_4183_69D8B77101AA); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
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
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_80112CEE_8E34_8E12_41D1_74614C78D51B); this.mainPlayList.set('selectedIndex', 0)",
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
     "pitch": 0,
     "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
       "y": 152.86,
       "angle": 108.43,
       "class": "PanoramaMapLocation"
      }
     ],
     "hfovMin": 60,
     "hfovMax": 120,
     "class": "Panorama",
     "label": "C02",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "partial": false,
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_83800E5E_8E34_8A32_41A2_0960495B28A3); this.mainPlayList.set('selectedIndex', 3)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_83849E6D_8E34_8A16_41CE_ACB763846E61); this.mainPlayList.set('selectedIndex', 1)",
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
        "pitch": 0,
        "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
          "y": 172.15,
          "angle": -70.14,
          "class": "PanoramaMapLocation"
         }
        ],
        "hfovMin": 60,
        "hfovMax": 120,
        "class": "Panorama",
        "label": "C03",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "partial": false,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_83ACBDF7_8E34_89F2_41B3_AB0610036F67); this.mainPlayList.set('selectedIndex', 2)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_83A09E05_8E34_8A16_41D1_D174582891F8); this.mainPlayList.set('selectedIndex', 4)",
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
           "pitch": 0,
           "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
             "y": 194.9,
             "angle": 107.74,
             "class": "PanoramaMapLocation"
            }
           ],
           "hfovMin": 60,
           "hfovMax": 120,
           "class": "Panorama",
           "label": "C04",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "class": "AdjacentPanorama",
             "backwardYaw": 179.91
            },
            {
             "distance": 1,
             "panorama": {
              "partial": false,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_8068ED63_8E34_8E12_41D0_CC7F565FB711); this.mainPlayList.set('selectedIndex', 5)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_807F1D4E_8E34_8E12_41B1_ECC30E87FE03); this.mainPlayList.set('selectedIndex', 3)",
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
              "pitch": 0,
              "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                "y": 214.18,
                "angle": -68.2,
                "class": "PanoramaMapLocation"
               }
              ],
              "hfovMin": 60,
              "hfovMax": 120,
              "class": "Panorama",
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
                 "partial": false,
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_802FBCAA_8E34_8E1D_41D9_FDD349B93829); this.mainPlayList.set('selectedIndex', 4)",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_802AFC96_8E34_8E35_41C9_9E3F53E3F627); this.mainPlayList.set('selectedIndex', 6)",
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
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                   "y": 228.44,
                   "angle": 109.18,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "class": "Panorama",
                 "label": "C06",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": {
                    "partial": false,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_80612F52_8E34_8A32_41AC_34E96AA0F494); this.mainPlayList.set('selectedIndex', 5)",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_8074BF44_8E34_8A16_41DC_FAD9D195BB7E); this.mainPlayList.set('selectedIndex', 7)",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_805F6F60_8E34_8A0E_41D0_1316F3DE432D); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
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
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                      "y": 258.07,
                      "angle": 25.28,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "label": "C07",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": {
                       "partial": false,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_803C7EEE_8E34_8A12_41DC_7E429F55DE8E); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_83C0BEE0_8E34_8A0E_41B0_7304FDEE7D6C); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_80292EFC_8E34_8BF6_41DB_F1E7817195EA); this.mainPlayList.set('selectedIndex', 6)",
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
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                         "y": 219.13,
                         "angle": 180.55,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "class": "Panorama",
                       "label": "C08",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "partial": false,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_801FFF17_8E34_8A32_41C2_744E78D42E21); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_80078F35_8E34_8A76_41DD_FA2B355F7268); this.mainPlayList.set('selectedIndex', 10)",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_800C6F27_8E34_8A12_41B1_7C32C67DB317); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
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
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                            "y": 250.53,
                            "angle": 91.91,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "class": "Panorama",
                          "label": "C10",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -138.38,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -36.3
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "partial": false,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_80322C7B_8E34_8EF2_41D6_68A403006F63); this.mainPlayList.set('selectedIndex', 15)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_803D2C6D_8E34_8E16_41CE_30DA1AFA370B); this.mainPlayList.set('selectedIndex', 17)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_83C71C5F_8E34_8E32_41B0_71B7AA6EE638); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)",
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
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                               "y": 316.87,
                               "angle": 0,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "class": "Panorama",
                             "label": "C17",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 37.47,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 78.56
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "partial": false,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_83F07E8A_8E34_8A12_41C8_E9FDE1C603B4); this.mainPlayList.set('selectedIndex', 18)",
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_83FA8E7B_8E34_8AF2_41B8_E562F6613EAF); this.mainPlayList.set('selectedIndex', 16)",
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
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "label": "C18",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": -162.77,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 155.68
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "partial": false,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8395DE40_8E34_8A0E_41CD_385068E2D77A); this.mainPlayList.set('selectedIndex', 22)",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_838A7E4F_8E34_8A12_41D9_F268BB35270E); this.mainPlayList.set('selectedIndex', 17)",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_83902E32_8E34_8A0D_41CA_9948688EC0EC); this.mainPlayList.set('selectedIndex', 19)",
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
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                     "y": 386.76,
                                     "angle": 0,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "class": "Panorama",
                                   "label": "C19",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "partial": false,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_80232F0A_8E34_8A12_41B8_801BD81FD437); this.mainPlayList.set('selectedIndex', 18)",
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
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                      "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                      "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                      "mapLocations": [
                                       {
                                        "x": 684.05,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                        "y": 434.27,
                                        "angle": 147.84,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "class": "Panorama",
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
                                     "panorama": {
                                      "partial": false,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8040DDAB_8E34_8E12_41B2_F6E4E00DC582); this.mainPlayList.set('selectedIndex', 15)",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_83B6DDE7_8E34_8E12_41BD_AE7D849E64BC); this.mainPlayList.set('selectedIndex', 18)",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_80BE2DBD_8E34_8E76_41C9_9D751CD7027D); this.mainPlayList.set('selectedIndex', 21)",
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
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "class": "Panorama",
                                      "label": "C23",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "partial": false,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_800FBD1F_8E34_8E32_41E0_D38F0D53F6E5); this.mainPlayList.set('selectedIndex', 22)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_8007ED34_8E34_8E76_41DC_06B67B399036); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_80081D06_8E34_8E12_41A0_7E9D454EDBB1); this.mainPlayList.set('selectedIndex', 16)",
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
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                           "y": 310.59,
                                           "angle": 0,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "class": "Panorama",
                                         "label": "C16",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 101.34,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -93.19
                                          },
                                          {
                                           "distance": 1,
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -172.45,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -166.65
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
                                        "yaw": -166.65,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -172.45
                                       },
                                       {
                                        "distance": 1,
                                        "panorama": {
                                         "partial": false,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_80BB3F7C_8E34_8AF6_41BD_34D4EC626F02); this.mainPlayList.set('selectedIndex', 20)",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_804C7F6E_8E34_8A12_41D2_F73A5C87E03F); this.mainPlayList.set('selectedIndex', 22)",
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
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "class": "Panorama",
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
                                            "partial": false,
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_80259CC3_8E34_8E13_41E0_133C6ABF4ED2); this.mainPlayList.set('selectedIndex', 21)",
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
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "hfovMax": 120,
                                            "class": "Panorama",
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
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -6.22,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -36.03
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -36.03,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -6.22
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "yaw": 26.17,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 4.5
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 4.5,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 26.17
                                 }
                                ],
                                "vfov": 180
                               },
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
                            "yaw": 78.56,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 37.47
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "partial": false,
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_839BCE24_8E34_8A15_41C7_DD4884374573); this.mainPlayList.set('selectedIndex', 9)",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_83A67E14_8E34_8A35_41D9_5BA192FD5CE3); this.mainPlayList.set('selectedIndex', 11)",
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
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                               "y": 249.79,
                               "angle": -86.82,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "class": "Panorama",
                             "label": "C11",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": {
                                "partial": false,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_8052FD97_8E34_8E32_41BB_53B6A8AD223A); this.mainPlayList.set('selectedIndex', 10)",
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8065CD7D_8E34_8EF6_41C9_8801E43F99C3); this.mainPlayList.set('selectedIndex', 12)",
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
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "class": "Panorama",
                                "label": "C12",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "partial": false,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_83DCAEC4_8E34_8A16_41C0_6F024FAC5D35); this.mainPlayList.set('selectedIndex', 13)",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_83E3BEB5_8E34_8A76_41D8_A45E4BE582AA); this.mainPlayList.set('selectedIndex', 11)",
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
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "class": "Panorama",
                                   "label": "C13",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": 176.12,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 167.51
                                    },
                                    {
                                     "distance": 1,
                                     "panorama": {
                                      "partial": false,
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_80A90F8A_8E34_8A1D_41B0_11244E0747CE); this.mainPlayList.set('selectedIndex', 12)",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_80A61F9C_8E34_8A35_41CA_2B1ABE45ACBC); this.mainPlayList.set('selectedIndex', 14)",
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
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "class": "Panorama",
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
                                         "partial": false,
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_83EC7EA7_8E34_8A12_41C1_DA9A324AF1FC); this.mainPlayList.set('selectedIndex', 13)",
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
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "class": "Panorama",
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
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 1.16,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -1.2
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -1.2,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 1.16
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -36.3,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -138.38
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "partial": false,
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_83F55E99_8E34_8A3E_41D2_88FB831BBDB0); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
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
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
                            "y": 158.55,
                            "angle": 35.54,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "class": "Panorama",
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
                      "yaw": 11.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 30.75
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 5.64
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 163.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -20.33
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 5.64,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -91.86
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -179.79,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -177.15
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
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "class": "AdjacentPanorama",
       "backwardYaw": 2.71
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
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 0,
   "class": "ViewerArea",
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
   "height": 440,
   "width": 689,
   "paddingLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "playbackBarBorderSize": 0,
   "borderRadius": 10,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0,
   "borderSize": 0,
   "progressHeight": 10,
   "playbackBarProgressOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarLeft": 0,
   "progressBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 218,
   "progressRight": 0,
   "playbackBarOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressBottom": 2,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "playbackBarBottom": 0,
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": 18,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowColor": "#000000",
   "progressBarOpacity": 1
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
    "id": "PanoramaPlayListItem_83DBCC2D_8E34_8E16_41DB_91EC0459481A",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DBCC2D_8E34_8E16_41DB_91EC0459481A, this.MapViewerMapPlayer)",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_83DC5C2E_8E34_8E12_41BA_7542DF8E0D52",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DC5C2E_8E34_8E12_41BA_7542DF8E0D52, this.MapViewerMapPlayer)",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_83DC8C2E_8E34_8E12_41E0_6E37566A73C9",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DC8C2E_8E34_8E12_41E0_6E37566A73C9, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_83DD3C2E_8E34_8E12_41CD_D0F0B6259562",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DD3C2E_8E34_8E12_41CD_D0F0B6259562, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_83DD6C2F_8E34_8E12_41C7_FD279831C438",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DD6C2F_8E34_8E12_41C7_FD279831C438, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_83DD9C2F_8E34_8E12_41BB_6ADB06B64170",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DD9C2F_8E34_8E12_41BB_6ADB06B64170, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_83DE3C30_8E34_8E0E_41C2_FDAEBB869DBA",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DE3C30_8E34_8E0E_41C2_FDAEBB869DBA, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_83DE7C30_8E34_8E0E_41DC_A7F44274DFF8",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DE7C30_8E34_8E0E_41DC_A7F44274DFF8, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_83DE9C31_8E34_8E0E_41DB_8140D620F7BF",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DE9C31_8E34_8E0E_41DB_8140D620F7BF, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "id": "PanoramaPlayListItem_83DECC32_8E34_8E72_41C7_D03FCD6ECD70",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DECC32_8E34_8E72_41C7_D03FCD6ECD70, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "id": "PanoramaPlayListItem_83DF7C32_8E34_8E72_41B1_DD57A9537216",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DF7C32_8E34_8E72_41B1_DD57A9537216, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "id": "PanoramaPlayListItem_83DFAC33_8E34_8E72_41D0_BDACE0D9F67F",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83DFAC33_8E34_8E72_41D0_BDACE0D9F67F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "id": "PanoramaPlayListItem_83D04C33_8E34_8E72_41D9_0F432E1783E6",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D04C33_8E34_8E72_41D9_0F432E1783E6, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "id": "PanoramaPlayListItem_83D0EC34_8E34_8E76_41B9_C45EF90B1319",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D0EC34_8E34_8E76_41B9_C45EF90B1319, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "id": "PanoramaPlayListItem_83D10C34_8E34_8E76_41DB_0504ECD78258",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D10C34_8E34_8E76_41DB_0504ECD78258, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "id": "PanoramaPlayListItem_83D1AC35_8E34_8E76_41E1_3ECFD1F76CC6",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D1AC35_8E34_8E76_41E1_3ECFD1F76CC6, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "id": "PanoramaPlayListItem_83D23C35_8E34_8E76_41DC_652DF9ED0629",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D23C35_8E34_8E76_41DC_652DF9ED0629, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "id": "PanoramaPlayListItem_83D26C36_8E34_8E72_41D0_3D10437B51E2",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D26C36_8E34_8E72_41D0_3D10437B51E2, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "id": "PanoramaPlayListItem_83D28C36_8E34_8E72_41D7_5CEC42311506",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D28C36_8E34_8E72_41D7_5CEC42311506, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "id": "PanoramaPlayListItem_83D32C37_8E34_8E72_41D7_18338353D49C",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D32C37_8E34_8E72_41D7_18338353D49C, this.MapViewerMapPlayer)",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "id": "PanoramaPlayListItem_83D35C37_8E34_8E72_4180_4E8EEC82CCB1",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D35C37_8E34_8E72_4180_4E8EEC82CCB1, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "id": "PanoramaPlayListItem_83D39C38_8E34_8E7E_41DC_9901DEA7B2BB",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D39C38_8E34_8E7E_41DC_9901DEA7B2BB, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "id": "PanoramaPlayListItem_83D42C38_8E34_8E7E_41C3_4EC87F4814B2",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_83D42C38_8E34_8E7E_41C3_4EC87F4814B2, this.MapViewerMapPlayer)",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
 {
  "id": "playList_83DB1C2C_8E34_8E16_41C4_53FB57E793BB",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_83D44C39_8E34_8E7E_4194_6C7F6A07697F",
 {
  "id": "camera_83C71C5F_8E34_8E32_41B0_71B7AA6EE638",
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
  "id": "camera_803D2C6D_8E34_8E16_41CE_30DA1AFA370B",
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
  "id": "camera_80322C7B_8E34_8EF2_41D6_68A403006F63",
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
  "id": "camera_802AFC96_8E34_8E35_41C9_9E3F53E3F627",
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
  "id": "camera_802FBCAA_8E34_8E1D_41D9_FDD349B93829",
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
  "id": "camera_80259CC3_8E34_8E13_41E0_133C6ABF4ED2",
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
  "id": "camera_801C1CDA_8E34_8E32_4183_69D8B77101AA",
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
  "id": "camera_80112CEE_8E34_8E12_41D1_74614C78D51B",
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
  "id": "camera_80081D06_8E34_8E12_41A0_7E9D454EDBB1",
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
  "id": "camera_800FBD1F_8E34_8E32_41E0_D38F0D53F6E5",
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
  "id": "camera_8007ED34_8E34_8E76_41DC_06B67B399036",
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
  "id": "camera_807F1D4E_8E34_8E12_41B1_ECC30E87FE03",
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
  "id": "camera_8068ED63_8E34_8E12_41D0_CC7F565FB711",
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
  "id": "camera_8065CD7D_8E34_8EF6_41C9_8801E43F99C3",
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
  "id": "camera_8052FD97_8E34_8E32_41BB_53B6A8AD223A",
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
  "id": "camera_8040DDAB_8E34_8E12_41B2_F6E4E00DC582",
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
  "id": "camera_80BE2DBD_8E34_8E76_41C9_9D751CD7027D",
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
  "id": "camera_83B6DDE7_8E34_8E12_41BD_AE7D849E64BC",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_83ACBDF7_8E34_89F2_41B3_AB0610036F67",
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
  "id": "camera_83A09E05_8E34_8A16_41D1_D174582891F8",
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
  "id": "camera_83A67E14_8E34_8A35_41D9_5BA192FD5CE3",
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
  "id": "camera_839BCE24_8E34_8A15_41C7_DD4884374573",
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
  "id": "camera_83902E32_8E34_8A0D_41CA_9948688EC0EC",
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
  "id": "camera_8395DE40_8E34_8A0E_41CD_385068E2D77A",
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
  "id": "camera_838A7E4F_8E34_8A12_41D9_F268BB35270E",
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
  "id": "camera_83800E5E_8E34_8A32_41A2_0960495B28A3",
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
  "id": "camera_83849E6D_8E34_8A16_41CE_ACB763846E61",
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
  "id": "camera_83FA8E7B_8E34_8AF2_41B8_E562F6613EAF",
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
  "id": "camera_83F07E8A_8E34_8A12_41C8_E9FDE1C603B4",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_83F55E99_8E34_8A3E_41D2_88FB831BBDB0",
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
  "id": "camera_83EC7EA7_8E34_8A12_41C1_DA9A324AF1FC",
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
 },
 {
  "id": "camera_83E3BEB5_8E34_8A76_41D8_A45E4BE582AA",
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
  "id": "camera_83DCAEC4_8E34_8A16_41C0_6F024FAC5D35",
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
  "id": "camera_83D71ED2_8E34_8A32_41DF_B6F34EDD072B",
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
  "id": "camera_83C0BEE0_8E34_8A0E_41B0_7304FDEE7D6C",
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
  "id": "camera_803C7EEE_8E34_8A12_41DC_7E429F55DE8E",
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
  "id": "camera_80292EFC_8E34_8BF6_41DB_F1E7817195EA",
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
  "id": "camera_80232F0A_8E34_8A12_41B8_801BD81FD437",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_801FFF17_8E34_8A32_41C2_744E78D42E21",
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
  "id": "camera_800C6F27_8E34_8A12_41B1_7C32C67DB317",
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
  "id": "camera_80078F35_8E34_8A76_41DD_FA2B355F7268",
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
  "id": "camera_8074BF44_8E34_8A16_41DC_FAD9D195BB7E",
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
  "id": "camera_80612F52_8E34_8A32_41AC_34E96AA0F494",
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
  "id": "camera_805F6F60_8E34_8A0E_41D0_1316F3DE432D",
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
  "id": "camera_804C7F6E_8E34_8A12_41D2_F73A5C87E03F",
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
  "id": "camera_80BB3F7C_8E34_8AF6_41BD_34D4EC626F02",
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
  "id": "camera_80A90F8A_8E34_8A1D_41B0_11244E0747CE",
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
  "id": "camera_80A61F9C_8E34_8A35_41CA_2B1ABE45ACBC",
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
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "class": "ViewerArea",
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
  "paddingLeft": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarBorderSize": 0,
  "borderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderSize": 0,
  "progressHeight": 10,
  "width": "100%",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "progressRight": 0,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 0,
  "bottom": "0%",
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "progressBarOpacity": 1
 },
 {
  "paddingRight": 0,
  "width": "98.378%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "height": 137.15,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "layout": "vertical",
  "borderSize": 0,
  "gap": 0,
  "borderRadius": 0,
  "class": "Container",
  "minWidth": 1,
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "center",
  "shadow": false,
  "overflow": "visible",
  "paddingBottom": 0,
  "bottom": "1.95%",
  "backgroundOpacity": 0,
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "right": "0%",
  "children": [
   {
    "paddingRight": 0,
    "width": 408,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "height": 90,
    "verticalAlign": "top",
    "scrollBarMargin": 2,
    "layout": "vertical",
    "borderSize": 0,
    "gap": 0,
    "borderRadius": 0,
    "class": "Container",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "shadow": false,
    "overflow": "visible",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "paddingRight": 0,
      "width": 407,
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "height": 90,
      "verticalAlign": "top",
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "73.775%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 0,
        "borderRadius": 9,
        "class": "Container",
        "height": "98.889%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "visible": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_9C759F1A_8D4D_6917_41D1_99D9098BCBC0",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C76EF19_8D4D_6915_41CF_1F92F3526681",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C76DF19_8D4D_6915_41C1_DBE8529D8544",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 746,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C76BF19_8D4D_6915_41B5_6383DCE62785.png",
              "maxWidth": 747,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C76BF19_8D4D_6915_41B5_6383DCE62785",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C76AF19_8D4D_6915_4195_C667A952066B",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "COMERCIAL",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C769F19_8D4D_6915_41DC_01AE20E7C388",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "COMERCIAL",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C768F19_8D4D_6915_41BF_6DC24E727A11",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C757F19_8D4D_6915_41D4_5F1D35595902",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C756F19_8D4D_6915_41B7_850EE7902773",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C754F19_8D4D_6915_41DA_84DA498E7E99.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C754F19_8D4D_6915_41DA_84DA498E7E99",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C753F19_8D4D_6915_41B4_7B7D1F7C10C4",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "CUSTOMS",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C752F19_8D4D_6915_41DF_4B7C7F78F981",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "CUSTOMS",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C750F19_8D4D_6915_41E0_945509E9DDB0",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C75FF19_8D4D_6915_41DE_487487FBFD0A",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C75DF19_8D4D_6915_417A_E78A67B252B8.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C75DF19_8D4D_6915_417A_E78A67B252B8",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C75CF19_8D4D_6915_41CE_9BE8EBA8BF95",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "ECO",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C75BF19_8D4D_6915_419E_9A3150FA1D20",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "ECO",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarVisible": "always"
       },
       {
        "paddingRight": 0,
        "width": "73.775%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 0,
        "borderRadius": 9,
        "class": "Container",
        "height": "98.889%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_9C4C9683_8D76_9BF5_41DE_B6C4865FBFEB",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C4F3682_8D76_9BF7_41C4_2D0210C87520",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4FC682_8D76_9BF7_41D3_17DE40E5F355",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 746,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37.png",
              "maxWidth": 747,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4FF682_8D76_9BF7_41BD_231DC203DDF5",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JJ",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4F8682_8D76_9BF7_41E1_6072568F77B0",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JP",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C4FA682_8D76_9BF7_41D0_AD941B375245",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4FB682_8D76_9BF7_41C5_86E5CCA06E3E",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4C6682_8D76_9BF7_41DC_DC4E74152725",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JP",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4C7682_8D76_9BF7_41B6_615370711AB3",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JP",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
          "class": "Container",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_9C4C1682_8D76_9BF7_41B6_54DD48F2D37B",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4C3682_8D76_9BF7_41DF_46606733E348",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 63,
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
            "class": "Container",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "horizontalAlign": "left",
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Container_9C4CE682_8D76_9BF7_41D8_F75BC9981B22",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JP",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4CF683_8D76_9BF5_41E0_DC9F91153BD9",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "JP",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "id": "Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarVisible": "always"
       },
       {
        "paddingRight": 0,
        "width": "73.775%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "height": 90,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 0,
        "borderRadius": 9,
        "class": "Container",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "visible": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
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
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 63,
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
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 746,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "maxWidth": 747,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
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
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 63,
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
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingRight": 0,
          "width": 94,
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "layout": "vertical",
          "borderSize": 0,
          "gap": 0,
          "borderRadius": 0,
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
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "width": 63,
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "paddingLeft": 0,
              "height": 300,
              "borderRadius": 0,
              "transparencyActive": false,
              "borderSize": 0,
              "class": "IconButton",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "maxWidth": 63,
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
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "paddingLeft": 0,
              "height": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "class": "Image",
              "minWidth": 1,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "width": "100%",
            "paddingLeft": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
            "scrollBarMargin": 2,
            "layout": "absolute",
            "borderSize": 0,
            "gap": 10,
            "borderRadius": 0,
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
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 9,
              "width": "100%",
              "paddingLeft": 0,
              "height": "96.774%",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontFamily": "Arial",
              "borderRadius": 0,
              "class": "Label",
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
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarVisible": "always"
       }
      ]
     }
    ]
   },
   {
    "paddingRight": 0,
    "width": "100%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "height": 42,
    "verticalAlign": "middle",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
    "class": "Container",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "bottom",
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "paddingRight": 0,
        "mode": "push",
        "maxHeight": 84,
        "width": 35,
        "paddingLeft": 0,
        "height": 35,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "class": "IconButton",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "maxWidth": 84,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "paddingBottom": 0,
        "cursor": "hand",
        "backgroundOpacity": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "top",
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_71C7C7ED_7FD2_E9D7_4170_C42954483082",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": 27,
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "height": 27,
        "verticalAlign": "top",
        "scrollBarMargin": 2,
        "layout": "absolute",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 509,
          "width": 27,
          "paddingLeft": 0,
          "height": 27,
          "borderSize": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "borderRadius": 0,
          "class": "Image",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
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
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "paddingRight": 0,
          "maxHeight": 509,
          "width": "100%",
          "paddingLeft": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "borderRadius": 0,
          "class": "Image",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
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
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "33.33%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "top",
      "scrollBarMargin": 2,
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingRight": 0,
  "width": "98.794%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "layout": "absolute",
  "borderSize": 0,
  "gap": 3,
  "borderRadius": 0,
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
  "right": "0%",
  "children": [
   {
    "paddingRight": 0,
    "width": 38.1,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "borderRadius": 0,
    "layout": "absolute",
    "borderSize": 0,
    "class": "Container",
    "height": "99.332%",
    "minWidth": 1,
    "gap": 10,
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
    "children": [
     {
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "borderRadius": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "maxWidth": 108,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "paddingTop": 0,
      "left": "0%",
      "verticalAlign": "middle"
     },
     {
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "maxWidth": 108,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "paddingTop": 0,
      "right": "-2.13%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingRight": 0,
    "width": 1638,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "height": 440,
    "verticalAlign": "top",
    "borderRadius": 9,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "borderSize": 0,
    "class": "Container",
    "minWidth": 1,
    "gap": 4,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": "0.06%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "children": [
     "this.MapViewer",
     {
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "borderRadius": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "maxWidth": 108,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0.1%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "paddingTop": 0,
      "left": "1.17%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 },
 {
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "paddingRight": 0,
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
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "left": "0%",
  "children": [
   {
    "paddingRight": 0,
    "width": "100%",
    "paddingLeft": 0,
    "height": "100%",
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "borderRadius": 0,
    "class": "Image",
    "minWidth": 1,
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"jp\";this.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, false, 0, null, null, false);this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false);this.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, false, 0, null, null, false);this.setComponentVisibility(this.Container_9C759F1A_8D4D_6917_41D1_99D9098BCBC0, false, 0, null, null, false);this.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, false, 0, null, null, false);this.setComponentVisibility(this.Container_9C4C9683_8D76_9BF5_41DE_B6C4865FBFEB, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9C759F1A_8D4D_6917_41D1_99D9098BCBC0, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_9C4C9683_8D76_9BF5_41DE_B6C4865FBFEB, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "scaleMode": "fit_outside",
    "minHeight": 1,
    "top": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingTop": 0,
    "left": -0.04,
    "verticalAlign": "middle"
   },
   {
    "paddingRight": 0,
    "width": "60.736%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "layout": "vertical",
    "borderSize": 0,
    "gap": 4,
    "borderRadius": 0,
    "class": "Container",
    "height": "88.587%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "top": "2.62%",
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "18.69%",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "paddingRight": 0,
      "width": "92.083%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "bottom",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "10.152%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 61,
        "width": "79.193%",
        "paddingLeft": 0,
        "height": "73.333%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "borderRadius": 0,
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "layout": "absolute",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "1.764%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     },
     {
      "paddingRight": 0,
      "width": "99.94%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "7.327%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "99.901%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 6,
        "borderRadius": 0,
        "class": "Container",
        "height": "86.667%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "10.55%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "class": "Container",
          "height": "97.297%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 108,
            "width": "95.833%",
            "paddingLeft": 0,
            "height": "96%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "borderRadius": 0,
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 108,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": "10.549%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "class": "Container",
          "height": "97.297%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 108,
            "width": "95.83%",
            "paddingLeft": 0,
            "height": "96%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "borderRadius": 0,
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 108,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingRight": 0,
          "width": "46.753%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "class": "Container",
          "height": "97.297%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "paddingRight": 0,
            "maxHeight": 40,
            "width": "99.138%",
            "paddingLeft": 0,
            "height": "70.59%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "borderRadius": 0,
            "class": "Image",
            "scaleMode": "fit_inside",
            "maxWidth": 275,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "99.858%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "1.227%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "borderRadius": 0,
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 5,
      "borderRadius": 0,
      "class": "Container",
      "height": "4.417%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "13.477%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "86.03%",
          "paddingLeft": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "14.091%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 243,
          "width": "97.183%",
          "paddingLeft": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "39.063%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "99.491%",
          "paddingLeft": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "15.139%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 300,
          "width": 30,
          "paddingLeft": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "7.276%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "83.008%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "class": "Container",
        "height": "97.67%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "87.799%",
          "paddingLeft": 0,
          "height": "64.407%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "2.454%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "borderRadius": 0,
        "class": "Image",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 4,
      "borderRadius": 0,
      "class": "Container",
      "height": "6.937%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "13.505%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "class": "Container",
        "height": "62.5%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "86.03%",
          "paddingLeft": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "12.891%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 222,
          "width": "85.42%",
          "paddingLeft": 0,
          "height": "83.33%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "width": "54.618%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "class": "Container",
        "height": "67.857%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 41,
          "width": "83.455%",
          "paddingLeft": 0,
          "height": "84.211%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 459,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "class": "Container",
      "height": "5.834%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingRight": 0,
        "width": "33.984%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
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
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "maxHeight": 44,
          "width": "86.842%",
          "paddingLeft": 0,
          "height": "70.833%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "borderRadius": 0,
          "class": "Image",
          "scaleMode": "fit_inside",
          "maxWidth": 297,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "paddingTop": 0,
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
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
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
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "0%",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 72,
      "width": 31,
      "paddingLeft": 0,
      "height": 29,
      "borderRadius": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "class": "IconButton",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "maxWidth": 72,
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "23.74%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "paddingTop": 0,
      "left": "3.02%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "width": "53.136%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "paddingRight": 0,
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
    "class": "Container",
    "height": "77.065%",
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "shadow": false,
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "9.57%",
    "backgroundOpacity": 0.3,
    "id": "Container_8094493A_8C48_84B7_41A9_59553E60A5AE",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "right": "20.33%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "width": "70.034%",
      "paddingLeft": 0,
      "height": "77.433%",
      "text": "English",
      "borderSize": 0,
      "fontFamily": "Arial",
      "borderRadius": 0,
      "class": "Label",
      "fontColor": "#FFFFFF",
      "minWidth": 1,
      "fontStyle": "normal",
      "textDecoration": "none",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "8.32%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "id": "Label_80D5A638_8C48_8C4C_41DF_09CEF71B3091",
      "paddingTop": 0,
      "left": "14.87%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "width": "54.346%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "paddingRight": 0,
    "layout": "absolute",
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
    "class": "Container",
    "height": "72.065%",
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "shadow": false,
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "13.8%",
    "backgroundOpacity": 0.3,
    "id": "Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "right": "20.75%",
    "children": [
     {
      "paddingRight": 0,
      "fontSize": 36,
      "width": "37.292%",
      "paddingLeft": 0,
      "height": "26.848%",
      "text": "Japanese",
      "borderSize": 0,
      "fontFamily": "Arial",
      "borderRadius": 0,
      "class": "Label",
      "fontColor": "#FFFFFF",
      "minWidth": 1,
      "fontStyle": "normal",
      "textDecoration": "none",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "36.5%",
      "fontWeight": "normal",
      "paddingBottom": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "id": "Label_813B3942_8C49_843F_41AE_348AA4BEC457",
      "paddingTop": 0,
      "left": "31.3%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 }
], 
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "borderSize": 0,
 "gap": 10,
 "borderRadius": 0,
 "class": "Player",
 "height": "100%",
 "minWidth": 20,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "mouseWheelEnabled": true,
 "minHeight": 20,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_83DB1C2C_8E34_8E16_41C4_53FB57E793BB.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
})