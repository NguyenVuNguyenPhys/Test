TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_9F7BEDEC_8D55_A933_41CB_98B7E0CEC3BA); this.mainPlayList.set('selectedIndex', 1)"
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
  "cardboardMenu": {
   "class": "Menu",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "id": "Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
   "opacity": 0.4,
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
   "fontFamily": "Arial"
  },
  "partial": false,
  "hfovMin": 60,
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
     "id": "map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_t.png",
     "maximumZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 652,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_855A603C_8917_88E2_41A5_F822EA9A33B4",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_46_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_46.png"
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
       "id": "overlay_855BB03D_8917_88E2_41C9_65A4C290BC8C",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_47_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_47.png"
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
       "id": "overlay_855BA03D_8917_88E2_41DB_DD15D051FB9D",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_48_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_48.png"
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
       "id": "overlay_855BC03D_8917_88E2_41BD_19497E1F64EF",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_49_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_49.png"
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
       "id": "overlay_855B103D_8917_88E2_41A3_331535F785BE",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_50_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_50.png"
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
       "id": "overlay_855B303D_8917_88E2_41C9_1C213ABBC16F",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_51_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_51.png"
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
       "id": "overlay_855B503D_8917_88E2_41AC_DFC835E0FE4A",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_52_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_52.png"
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
       "id": "overlay_855B603D_8917_88E2_41BE_C037DB949489",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_53_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_53.png"
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
       "id": "overlay_8558903D_8917_88E2_41D0_94973DD895E2",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_54_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_54.png"
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
       "id": "overlay_8558D03D_8917_88E2_41C1_C6C520062768",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_55_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_55.png"
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
       "id": "overlay_8558F03D_8917_88E2_41DB_8F1CF35834FD",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_56_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_56.png"
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
       "id": "overlay_855A603E_8917_88DE_41D6_F87BF1703986",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_57_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_57.png"
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
       "id": "overlay_855B803E_8917_88DE_4181_E171754FD037",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_58_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_58.png"
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
       "id": "overlay_855BB03E_8917_88DE_41E0_925AE9CE5610",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_59_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_59.png"
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
       "id": "overlay_855BD03E_8917_88DE_419E_0B0FEC08978E",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_60_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_60.png"
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
       "id": "overlay_855BC03E_8917_88DE_41B9_CB2520A4CD44",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_61_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_61.png"
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
       "id": "overlay_855BF03E_8917_88DE_41CE_4D6C02EFE3C6",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_62_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_62.png"
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
       "id": "overlay_855BE03F_8917_88DE_41D2_999BB793A744",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_63_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_63.png"
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
       "id": "overlay_855B103F_8917_88DE_41A3_27BC9B54E65F",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_64_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_64.png"
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
       "id": "overlay_855B003F_8917_88DE_41D4_0B0EDEAE8AB0",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_65_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_65.png"
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
       "id": "overlay_855B203F_8917_88DE_41DC_FFD072F40D48",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_66_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_66.png"
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
       "id": "overlay_855B703F_8917_88DE_41AD_2D9A87E12983",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_67_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_67.png"
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
       "id": "overlay_8558803F_8917_88DE_41DF_D108FC825A35",
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_68_map.gif"
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
           "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_HS_68.png"
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
        "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D.png"
       },
       {
        "height": 326,
        "width": 510,
        "class": "ImageResourceLevel",
        "url": "media/map_855A403C_8917_88E2_41D3_CA28A77F3E6D_lq.png",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "none",
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
     "class": "Panorama",
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
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_9EE0BB8B_8D55_A9F6_41D5_D16277DF19CF); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
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
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_9EEB8BA5_8D55_A93D_41D7_0771FF151E7B); this.mainPlayList.set('selectedIndex', 0)"
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
     "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
     "partial": false,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
      }
     ],
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "class": "Panorama",
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_99067D23_8D55_A936_41B1_99BF2B322E23); this.mainPlayList.set('selectedIndex', 3)"
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
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_9C992D75_8D55_A91D_41C5_35B1E073ABB9); this.mainPlayList.set('selectedIndex', 1)"
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
        "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
        "partial": false,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
         }
        ],
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "class": "Panorama",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_9961FCA7_8D55_AF3D_41D1_490868527401); this.mainPlayList.set('selectedIndex', 2)"
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_99751CBD_8D55_AF0D_41D3_3E3FEB621958); this.mainPlayList.set('selectedIndex', 4)"
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
           "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
           "partial": false,
           "hfovMin": 60,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
              "class": "Panorama",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_9ED83C21_8D55_AF35_41D9_D3409800EB37); this.mainPlayList.set('selectedIndex', 5)"
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_9ED63C08_8D55_AEF3_4193_6236D8AEFCB7); this.mainPlayList.set('selectedIndex', 3)"
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
              "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
              "partial": false,
              "hfovMin": 60,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                 "class": "Panorama",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_9E178B59_8D55_A912_41DB_D45F11A35D47); this.mainPlayList.set('selectedIndex', 4)"
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_9E0F1B3E_8D55_A90E_41C7_93AF953863AA); this.mainPlayList.set('selectedIndex', 6)"
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
                 "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                 "partial": false,
                 "hfovMin": 60,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                  }
                 ],
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "class": "Panorama",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_9F296E8C_8D55_ABF2_41D6_EBDFE0F2A700); this.mainPlayList.set('selectedIndex', 5)"
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9F2DCE79_8D55_AB12_41E0_3A6FB00330A4); this.mainPlayList.set('selectedIndex', 7)"
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_9F373E9C_8D55_AB12_41DF_7C38FF4311A7); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
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
                    "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                    "partial": false,
                    "hfovMin": 60,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "class": "PanoramaMapLocation",
                      "y": 258.07,
                      "angle": 25.28,
                      "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                     }
                    ],
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "class": "Panorama",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_9F4DAE0D_8D55_AB0D_41E0_60A7FC53C0FD); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_9F475DFE_8D55_A90F_41D2_6D25146804DE); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_9F497E1E_8D55_AB0F_41DA_6277EE70F952); this.mainPlayList.set('selectedIndex', 6)"
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
                       "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                       "partial": false,
                       "hfovMin": 60,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "class": "PanoramaMapLocation",
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                        }
                       ],
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "class": "Panorama",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9F520E40_8D55_AB73_41E1_10E22EF06248); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_9F27CE6A_8D55_AB36_41CB_5781BC60E95F); this.mainPlayList.set('selectedIndex', 10)"
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_9F59EE57_8D55_AB1D_417D_E1D962B7D96B); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
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
                          "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                          "partial": false,
                          "hfovMin": 60,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "class": "PanoramaMapLocation",
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                           }
                          ],
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": -138.38,
                            "backwardYaw": -36.3,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "class": "Panorama",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_9E047B26_8D55_A93E_41DF_9BB67609A208); this.mainPlayList.set('selectedIndex', 15)"
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_9E3FAB09_8D55_AAF2_41E1_257F67C386E4); this.mainPlayList.set('selectedIndex', 17)"
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_9E376AED_8D55_AB32_41D1_CF66B22633F1); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
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
                             "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                             "partial": false,
                             "hfovMin": 60,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "class": "PanoramaMapLocation",
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                              }
                             ],
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 37.47,
                               "backwardYaw": 78.56,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "class": "Panorama",
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_9F613D96_8D55_A91F_41B6_5CCFB93B6272); this.mainPlayList.set('selectedIndex', 18)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_9F652D86_8D55_A9FF_41DF_7432C9F6E3A3); this.mainPlayList.set('selectedIndex', 16)"
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
                                "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                "partial": false,
                                "hfovMin": 60,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "class": "PanoramaMapLocation",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                                 }
                                ],
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -162.77,
                                  "backwardYaw": 155.68,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "class": "Panorama",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_992DBCFF_8D55_AF0D_41B0_C4BBC5C91DCB); this.mainPlayList.set('selectedIndex', 22)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_9930ED12_8D55_A917_41B3_6DFA43EFD06A); this.mainPlayList.set('selectedIndex', 17)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_995FECEF_8D55_AF0D_41DE_7B179C472D7B); this.mainPlayList.set('selectedIndex', 19)"
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
                                   "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                   "partial": false,
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "class": "PanoramaMapLocation",
                                     "y": 386.76,
                                     "angle": 0,
                                     "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                                    }
                                   ],
                                   "label": "C19",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "class": "Panorama",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_9F543E2D_8D55_AB0D_41C6_27555B2AE182); this.mainPlayList.set('selectedIndex', 18)"
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
                                      "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                      "partial": false,
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                      "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                      "mapLocations": [
                                       {
                                        "x": 684.05,
                                        "class": "PanoramaMapLocation",
                                        "y": 434.27,
                                        "angle": 147.84,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                                    },
                                    {
                                     "panorama": {
                                      "class": "Panorama",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_9EB98C78_8D55_AF12_41CA_7EBF09DF9B14); this.mainPlayList.set('selectedIndex', 15)"
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_9E905C97_8D55_AF1D_41C2_2A95B8666DA5); this.mainPlayList.set('selectedIndex', 18)"
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_9E8D7C86_8D55_AFFF_4185_A71700C9038B); this.mainPlayList.set('selectedIndex', 21)"
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
                                      "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                      "partial": false,
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "class": "PanoramaMapLocation",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                                       }
                                      ],
                                      "label": "C23",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "class": "Panorama",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_9EC52BD6_8D55_A91F_41BB_A6EECDA5A8A6); this.mainPlayList.set('selectedIndex', 22)"
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_9ECE8BF3_8D55_A915_41D4_88C9F3F1E8D8); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_9EFD9BBA_8D55_A917_41E1_7014BD177DAA); this.mainPlayList.set('selectedIndex', 16)"
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
                                         "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                         "partial": false,
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "class": "PanoramaMapLocation",
                                           "y": 310.59,
                                           "angle": 0,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                                          }
                                         ],
                                         "label": "C16",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "class": "AdjacentPanorama",
                                           "yaw": 101.34,
                                           "backwardYaw": -93.19,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "class": "AdjacentPanorama",
                                           "yaw": -172.45,
                                           "backwardYaw": -166.65,
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
                                        "panorama": {
                                         "class": "Panorama",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_9F053EC0_8D55_AB72_41BF_03C1E39CE6B6); this.mainPlayList.set('selectedIndex', 20)"
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_9F3DDEAF_8D55_AB0E_41D0_3C012D9D4FD0); this.mainPlayList.set('selectedIndex', 22)"
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
                                         "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                         "partial": false,
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "class": "PanoramaMapLocation",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                                            "class": "Panorama",
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_9E1E5B73_8D55_A916_41D1_CCF85640C039); this.mainPlayList.set('selectedIndex', 21)"
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
                                            "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                            "partial": false,
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "class": "PanoramaMapLocation",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                                       },
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -6.22,
                                        "backwardYaw": -36.03,
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
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 4.5,
                                  "backwardYaw": 26.17,
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
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 78.56,
                            "backwardYaw": 37.47,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "class": "Panorama",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_9948DCDE_8D55_AF0E_41B3_345E1AFA752A); this.mainPlayList.set('selectedIndex', 9)"
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_997B0CCD_8D55_AF0D_41D6_FA90A85C8C2C); this.mainPlayList.set('selectedIndex', 11)"
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
                             "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                             "partial": false,
                             "hfovMin": 60,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "class": "PanoramaMapLocation",
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                              }
                             ],
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "class": "Panorama",
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_9EB48C5F_8D55_AF0D_41D8_6B160D8C7E84); this.mainPlayList.set('selectedIndex', 10)"
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_9EAD4C49_8D55_AF75_41DA_513A67FBAC1F); this.mainPlayList.set('selectedIndex', 12)"
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
                                "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                "partial": false,
                                "hfovMin": 60,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "class": "PanoramaMapLocation",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
                                 }
                                ],
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "class": "Panorama",
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_9F7DADDC_8D55_A913_41D6_AD83CD3154E7); this.mainPlayList.set('selectedIndex', 13)"
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_9F775DCB_8D55_A976_41DE_8C7F56439E61); this.mainPlayList.set('selectedIndex', 11)"
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
                                   "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                   "partial": false,
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                                      "class": "Panorama",
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_9F0FDED1_8D55_AB12_41D9_A7B41A022F08); this.mainPlayList.set('selectedIndex', 12)"
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_9F112EE5_8D55_AB32_41D8_490CCC4410F4); this.mainPlayList.set('selectedIndex', 14)"
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
                                      "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                      "partial": false,
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "class": "PanoramaMapLocation",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                                         "class": "Panorama",
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_9F6BBDBA_8D55_A916_41DD_2EB21BC27F06); this.mainPlayList.set('selectedIndex', 13)"
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
                                         "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                                         "partial": false,
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "class": "PanoramaMapLocation",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                          "class": "Panorama",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9F6D1DA7_8D55_A93D_41D9_29D0B9001642); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
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
                          "cardboardMenu": "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
                          "partial": false,
                          "hfovMin": 60,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "class": "PanoramaMapLocation",
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D"
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
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -91.86,
                      "backwardYaw": 5.64,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "class": "AdjacentPanorama",
                      "yaw": 163.21,
                      "backwardYaw": -20.33,
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
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "viewerArea": {
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderRadius": 3,
   "class": "ViewerArea",
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
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBorderColor": "#000000",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "borderRadius": 10,
   "minHeight": 218,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "minWidth": 342,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "paddingLeft": 0,
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
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E441A9F_8D55_AB0E_41BF_020413FB3BEF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_9E441A9F_8D55_AB0E_41BF_020413FB3BEF",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E474AA0_8D55_AB32_41D1_984EF2CF19B4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_9E474AA0_8D55_AB32_41D1_984EF2CF19B4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E46EAA0_8D55_AB32_41C3_E9507EEFC966, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_9E46EAA0_8D55_AB32_41C3_E9507EEFC966",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E460AA1_8D55_AB32_41DA_CBE136CDA7D6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_9E460AA1_8D55_AB32_41DA_CBE136CDA7D6",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E414AA2_8D55_AB36_41DC_43F4AA21CE9B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_9E414AA2_8D55_AB36_41DC_43F4AA21CE9B",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E40EAA2_8D55_AB36_41B0_9DFAAC0F2AEA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_9E40EAA2_8D55_AB36_41B0_9DFAAC0F2AEA",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E401AA3_8D55_AB36_41B5_9F8A8DA20BDF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_9E401AA3_8D55_AB36_41B5_9F8A8DA20BDF",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E43BAA3_8D55_AB36_41E0_3CD4B3999A60, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_9E43BAA3_8D55_AB36_41E0_3CD4B3999A60",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E42DAA4_8D55_AB32_4123_6A89189B7B10, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_9E42DAA4_8D55_AB32_4123_6A89189B7B10",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E427AA4_8D55_AB32_41DE_716ED82D9A89, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_9E427AA4_8D55_AB32_41DE_716ED82D9A89",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4DAAA6_8D55_AB3E_41D0_AC032DE102D9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_9E4DAAA6_8D55_AB3E_41D0_AC032DE102D9",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4CCAA7_8D55_AB3E_41DD_73C130A28D35, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_9E4CCAA7_8D55_AB3E_41DD_73C130A28D35",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4C7AA8_8D55_AB32_41D9_50108B1D35BC, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_9E4C7AA8_8D55_AB32_41D9_50108B1D35BC",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4FAAA8_8D55_AB32_41E0_3EF15CB3A172, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_9E4FAAA8_8D55_AB32_41E0_3EF15CB3A172",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4ECAA9_8D55_AB32_41BD_C692AC5102D7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_9E4ECAA9_8D55_AB32_41BD_C692AC5102D7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4E6AA9_8D55_AB32_41C1_BF7E3C9C8688, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_9E4E6AA9_8D55_AB32_41C1_BF7E3C9C8688",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E49AAAA_8D55_AB36_41D6_71806B764361, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_9E49AAAA_8D55_AB36_41D6_71806B764361",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E48DAAA_8D55_AB36_41D3_D9F1C6BD0125, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_9E48DAAA_8D55_AB36_41D3_D9F1C6BD0125",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E481AAB_8D55_AB36_4106_52972A1578C0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_9E481AAB_8D55_AB36_4106_52972A1578C0",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4BAAAB_8D55_AB36_41D4_2311AEEB2DC4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_9E4BAAAB_8D55_AB36_41D4_2311AEEB2DC4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4ACAAC_8D55_AB32_41D8_CBD23550F6D8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "id": "PanoramaPlayListItem_9E4ACAAC_8D55_AB32_41D8_CBD23550F6D8",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E4A7AAC_8D55_AB32_41AF_772D190D7B2A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "id": "PanoramaPlayListItem_9E4A7AAC_8D55_AB32_41AF_772D190D7B2A",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9E559AAD_8D55_AB32_41C0_581644146631, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "id": "PanoramaPlayListItem_9E559AAD_8D55_AB32_41C0_581644146631",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
 {
  "class": "PlayList",
  "id": "playList_9E456A9F_8D55_AB0E_41C2_8D5B9CF9A8D8",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "class": "MapPlayListItem",
    "media": "this.map_855A403C_8917_88E2_41D3_CA28A77F3E6D",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_9E54CAAD_8D55_AB32_41D2_EDD646D0F1AA",
 {
  "class": "PanoramaCamera",
  "id": "camera_9E376AED_8D55_AB32_41D1_CF66B22633F1",
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
  "id": "camera_9E3FAB09_8D55_AAF2_41E1_257F67C386E4",
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
  "id": "camera_9E047B26_8D55_A93E_41DF_9BB67609A208",
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
  "id": "camera_9E0F1B3E_8D55_A90E_41C7_93AF953863AA",
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
  "id": "camera_9E178B59_8D55_A912_41DB_D45F11A35D47",
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
  "id": "camera_9E1E5B73_8D55_A916_41D1_CCF85640C039",
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
  "id": "camera_9EE0BB8B_8D55_A9F6_41D5_D16277DF19CF",
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
  "id": "camera_9EEB8BA5_8D55_A93D_41D7_0771FF151E7B",
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
  "id": "camera_9EFD9BBA_8D55_A917_41E1_7014BD177DAA",
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
  "id": "camera_9EC52BD6_8D55_A91F_41BB_A6EECDA5A8A6",
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
  "id": "camera_9ECE8BF3_8D55_A915_41D4_88C9F3F1E8D8",
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
  "id": "camera_9ED63C08_8D55_AEF3_4193_6236D8AEFCB7",
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
  "id": "camera_9ED83C21_8D55_AF35_41D9_D3409800EB37",
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
  "id": "camera_9EAD4C49_8D55_AF75_41DA_513A67FBAC1F",
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
  "id": "camera_9EB48C5F_8D55_AF0D_41D8_6B160D8C7E84",
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
  "id": "camera_9EB98C78_8D55_AF12_41CA_7EBF09DF9B14",
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
  "id": "camera_9E8D7C86_8D55_AFFF_4185_A71700C9038B",
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
  "automaticZoomSpeed": 10,
  "id": "camera_9E905C97_8D55_AF1D_41C2_2A95B8666DA5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9961FCA7_8D55_AF3D_41D1_490868527401",
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
  "id": "camera_99751CBD_8D55_AF0D_41D3_3E3FEB621958",
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
  "id": "camera_997B0CCD_8D55_AF0D_41D6_FA90A85C8C2C",
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
  "id": "camera_9948DCDE_8D55_AF0E_41B3_345E1AFA752A",
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
  "id": "camera_995FECEF_8D55_AF0D_41DE_7B179C472D7B",
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
  "id": "camera_992DBCFF_8D55_AF0D_41B0_C4BBC5C91DCB",
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
  "id": "camera_9930ED12_8D55_A917_41B3_6DFA43EFD06A",
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
  "id": "camera_99067D23_8D55_A936_41B1_99BF2B322E23",
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
  "id": "camera_9C992D75_8D55_A91D_41C5_35B1E073ABB9",
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
  "id": "camera_9F652D86_8D55_A9FF_41DF_7432C9F6E3A3",
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
  "automaticZoomSpeed": 10,
  "id": "camera_9F613D96_8D55_A91F_41B6_5CCFB93B6272",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9F6D1DA7_8D55_A93D_41D9_29D0B9001642",
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
  "id": "camera_9F6BBDBA_8D55_A916_41DD_2EB21BC27F06",
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
  "id": "camera_9F775DCB_8D55_A976_41DE_8C7F56439E61",
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
  "id": "camera_9F7DADDC_8D55_A913_41D6_AD83CD3154E7",
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
  "id": "camera_9F7BEDEC_8D55_A933_41CB_98B7E0CEC3BA",
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
  "id": "camera_9F475DFE_8D55_A90F_41D2_6D25146804DE",
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
  "id": "camera_9F4DAE0D_8D55_AB0D_41E0_60A7FC53C0FD",
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
  "id": "camera_9F497E1E_8D55_AB0F_41DA_6277EE70F952",
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
  "automaticZoomSpeed": 10,
  "id": "camera_9F543E2D_8D55_AB0D_41C6_27555B2AE182",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9F520E40_8D55_AB73_41E1_10E22EF06248",
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
  "id": "camera_9F59EE57_8D55_AB1D_417D_E1D962B7D96B",
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
  "id": "camera_9F27CE6A_8D55_AB36_41CB_5781BC60E95F",
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
  "id": "camera_9F2DCE79_8D55_AB12_41E0_3A6FB00330A4",
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
  "id": "camera_9F296E8C_8D55_ABF2_41D6_EBDFE0F2A700",
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
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9F373E9C_8D55_AB12_41DF_7C38FF4311A7",
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
  "id": "camera_9F3DDEAF_8D55_AB0E_41D0_3C012D9D4FD0",
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
  "id": "camera_9F053EC0_8D55_AB72_41BF_03C1E39CE6B6",
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
  "id": "camera_9F0FDED1_8D55_AB12_41D9_A7B41A022F08",
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
  "id": "camera_9F112EE5_8D55_AB32_41D8_490CCC4410F4",
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
 }
], "children": [
 {
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadBorderRadius": 0,
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "width": "100%",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "minWidth": 100,
  "bottom": "0%",
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "paddingLeft": 0,
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
  "toolTipFontStyle": "normal"
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": 137.15,
  "width": "98.378%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "overflow": "visible",
  "gap": 0,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "bottom": "1.95%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "width": 408,
    "height": 90,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "overflow": "visible",
    "gap": 0,
    "shadow": false,
    "contentOpaque": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "width": 407,
      "height": 90,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "98.889%",
        "width": "73.775%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 0,
        "borderRadius": 9,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_9C759F1A_8D4D_6917_41D1_99D9098BCBC0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "always",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C76EF19_8D4D_6915_41CF_1F92F3526681",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C76DF19_8D4D_6915_41C1_DBE8529D8544",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C76CF19_8D4D_6915_41CC_BD7D5705697F_rollover.png"
             },
             {
              "maxWidth": 747,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 746,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C76BF19_8D4D_6915_41B5_6383DCE62785.png",
              "shadow": false,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C76BF19_8D4D_6915_41B5_6383DCE62785",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C76AF19_8D4D_6915_4195_C667A952066B",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C769F19_8D4D_6915_41DC_01AE20E7C388",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C768F19_8D4D_6915_41BF_6DC24E727A11",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C757F19_8D4D_6915_41D4_5F1D35595902",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C756F19_8D4D_6915_41B7_850EE7902773",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C755F19_8D4D_6915_41AC_8A542F025A85_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C754F19_8D4D_6915_41DA_84DA498E7E99.png",
              "shadow": false,
              "top": "0%",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C754F19_8D4D_6915_41DA_84DA498E7E99",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C753F19_8D4D_6915_41B4_7B7D1F7C10C4",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C752F19_8D4D_6915_41DF_4B7C7F78F981",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C750F19_8D4D_6915_41E0_945509E9DDB0",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C75FF19_8D4D_6915_41DE_487487FBFD0A",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C75DF19_8D4D_6915_417A_E78A67B252B8, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C76BF19_8D4D_6915_41B5_6383DCE62785, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C768F19_8D4D_6915_41BF_6DC24E727A11, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C754F19_8D4D_6915_41DA_84DA498E7E99, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C751F19_8D4D_6915_41D4_1D6E71DFEA06, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C75EF19_8D4D_6915_41C3_8B9CB1DB7EE2_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C75DF19_8D4D_6915_417A_E78A67B252B8.png",
              "shadow": false,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C75DF19_8D4D_6915_417A_E78A67B252B8",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C75CF19_8D4D_6915_41CE_9BE8EBA8BF95",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C75BF19_8D4D_6915_419E_9A3150FA1D20",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C75AF1A_8D4D_6917_41D4_AC892A0FB2AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
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
        "verticalAlign": "middle",
        "height": "98.889%",
        "width": "73.775%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 0,
        "borderRadius": 9,
        "shadow": false,
        "contentOpaque": false,
        "visible": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_9C4C9683_8D76_9BF5_41DE_B6C4865FBFEB",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "always",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C4F3682_8D76_9BF7_41C4_2D0210C87520",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4FC682_8D76_9BF7_41D3_17DE40E5F355",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4FD682_8D76_9BF7_41D3_528986AA84B0_rollover.png"
             },
             {
              "maxWidth": 747,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 746,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37.png",
              "shadow": false,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4FF682_8D76_9BF7_41BD_231DC203DDF5",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4F8682_8D76_9BF7_41E1_6072568F77B0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C4FA682_8D76_9BF7_41D0_AD941B375245",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4FB682_8D76_9BF7_41C5_86E5CCA06E3E",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4C4682_8D76_9BF7_41B1_C325865CDBCB_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E.png",
              "shadow": false,
              "top": "0%",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4C6682_8D76_9BF7_41DC_DC4E74152725",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4C7682_8D76_9BF7_41B6_615370711AB3",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_9C4C1682_8D76_9BF7_41B6_54DD48F2D37B",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4C3682_8D76_9BF7_41DF_46606733E348",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.setComponentVisibility(this.Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0, true, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9C4FE682_8D76_9BF7_41CD_B625DBAACD37, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4F9682_8D76_9BF7_41E0_B39A1FB3EBB1, false, 0, null, null, false); this.setComponentVisibility(this.Image_9C4C5682_8D76_9BF7_41D6_05CB3BDF8D9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_9C4C0682_8D76_9BF7_41C6_04061C8E5AD9, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9C4CC682_8D76_9BF7_41DA_3D72D3944C9F_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0.png",
              "shadow": false,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_9C4CD682_8D76_9BF7_41D7_4E083988D6E0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_9C4CE682_8D76_9BF7_41D8_F75BC9981B22",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4CF683_8D76_9BF5_41E0_DC9F91153BD9",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_9C4C8683_8D76_9BF5_41BD_20D373D57FC4",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
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
        "verticalAlign": "middle",
        "height": 90,
        "width": "73.775%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 0,
        "borderRadius": 9,
        "shadow": false,
        "contentOpaque": false,
        "visible": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "always",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             },
             {
              "maxWidth": 747,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 746,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "shadow": false,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "shadow": false,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "visible",
          "gap": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "vertical",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "borderRadius": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "visible",
            "gap": 10,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "maxWidth": 63,
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 300,
              "height": 300,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "shadow": false,
              "top": "0%",
              "cursor": "hand",
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             },
             {
              "maxWidth": 63,
              "class": "Image",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "width": 63,
              "height": 63,
              "maxHeight": 63,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "shadow": false,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minHeight": 1,
            "overflow": "scroll",
            "gap": 10,
            "borderRadius": 0,
            "shadow": false,
            "contentOpaque": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "scrollBarVisible": "rollOver",
            "layout": "absolute",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFFFF",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
              "left": "0%"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "fontSize": 9,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "fontColor": "#FFFF00",
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "visible": false,
              "paddingBottom": 0,
              "minWidth": 1,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "paddingLeft": 0,
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
    "verticalAlign": "middle",
    "height": 42,
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "scroll",
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "bottom",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "maxWidth": 84,
        "class": "IconButton",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "mode": "push",
        "width": 35,
        "height": 35,
        "maxHeight": 84,
        "transparencyActive": false,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "shadow": false,
        "cursor": "hand",
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_71C7C7ED_7FD2_E9D7_4170_C42954483082",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "top",
        "width": 27,
        "height": 27,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 10,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "absolute",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 509,
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 27,
          "height": 27,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "shadow": false,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "right": "-1.96%"
         },
         {
          "maxWidth": 509,
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 509,
          "borderSize": 0,
          "width": "100%",
          "horizontalAlign": "center",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "borderRadius": 0,
          "shadow": false,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "left": "0%"
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ]
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "verticalAlign": "top",
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "left",
  "minHeight": 1,
  "overflow": "hidden",
  "gap": 3,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "width": 38.1,
    "height": "99.332%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "visible",
    "gap": 10,
    "shadow": false,
    "top": 0,
    "contentOpaque": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "maxWidth": 108,
      "class": "IconButton",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "shadow": false,
      "top": "0%",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "left": "0%"
     },
     {
      "maxWidth": 108,
      "class": "IconButton",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "shadow": false,
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "right": "-2.13%"
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "width": 1638,
    "height": 335,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "borderRadius": 9,
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "visible",
    "gap": 4,
    "shadow": false,
    "top": "0.06%",
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.MapViewer",
     {
      "maxWidth": 108,
      "class": "IconButton",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "shadow": false,
      "top": "0.1%",
      "cursor": "hand",
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "left": "1.17%"
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
  "verticalAlign": "middle",
  "paddingRight": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "center",
  "minHeight": 1,
  "overflow": "scroll",
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "horizontalAlign": "center",
    "borderSize": 0,
    "minHeight": 1,
    "scaleMode": "fit_outside",
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "borderRadius": 0,
    "shadow": false,
    "top": 0,
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, false, 0, null, null, false);this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false);this.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, false, 0, null, null, false);this.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, false, 0, null, null, false);this.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, false, 0, null, null, false);this.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_3533313B_3A04_0067_41CC_CF6BC934FA11, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_82077B4C_8C59_84CB_41E0_E40E43CBF346, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8094493A_8C48_84B7_41A9_59553E60A5AE, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_8372F4BC_8C49_8C44_41B9_58C55305A0BF, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "left": -0.04,
    "verticalAlign": "middle"
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": "88.587%",
    "width": "60.736%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "overflow": "scroll",
    "gap": 4,
    "borderRadius": 0,
    "shadow": false,
    "top": "2.62%",
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "left": "18.69%",
    "layout": "vertical",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "bottom",
      "height": "10.152%",
      "width": "92.083%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "maxWidth": 500,
        "class": "Image",
        "paddingRight": 0,
        "height": "73.333%",
        "maxHeight": 61,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "79.193%",
        "minHeight": 1,
        "scaleMode": "fit_inside",
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "borderRadius": 0,
        "shadow": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "height": "1.764%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minHeight": 1,
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "7.327%",
      "width": "99.94%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "86.667%",
        "width": "99.901%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 6,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 300,
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "maxHeight": 300,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "width": "10.55%",
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "horizontal",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "maxWidth": 108,
            "class": "Image",
            "paddingRight": 0,
            "height": "96%",
            "maxHeight": 108,
            "horizontalAlign": "center",
            "borderSize": 0,
            "width": "95.833%",
            "minHeight": 1,
            "scaleMode": "fit_inside",
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "borderRadius": 0,
            "shadow": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "maxWidth": 300,
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "maxHeight": 300,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "width": "10.549%",
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "horizontal",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "maxWidth": 108,
            "class": "Image",
            "paddingRight": 0,
            "height": "96%",
            "maxHeight": 108,
            "horizontalAlign": "center",
            "borderSize": 0,
            "width": "95.83%",
            "minHeight": 1,
            "scaleMode": "fit_inside",
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "borderRadius": 0,
            "shadow": false,
            "paddingBottom": 0,
            "minWidth": 1,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "paddingLeft": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "maxWidth": 1000,
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "97.297%",
          "width": "46.753%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "overflow": "scroll",
          "gap": 10,
          "borderRadius": 0,
          "shadow": false,
          "contentOpaque": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "scrollBarVisible": "rollOver",
          "layout": "horizontal",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "maxWidth": 275,
            "class": "Image",
            "paddingRight": 0,
            "height": "70.59%",
            "maxHeight": 40,
            "horizontalAlign": "center",
            "borderSize": 0,
            "width": "99.138%",
            "minHeight": 1,
            "scaleMode": "fit_inside",
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "borderRadius": 0,
            "shadow": false,
            "paddingBottom": 0,
            "minWidth": 1,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "1.227%",
      "width": "99.858%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "hidden",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "maxWidth": 726,
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "scaleMode": "fit_inside",
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "shadow": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "4.417%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "scroll",
      "gap": 5,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "13.477%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 117,
          "class": "Image",
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "86.03%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "14.091%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 258,
          "class": "Image",
          "paddingRight": 0,
          "height": "100%",
          "maxHeight": 243,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "97.183%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "39.063%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 408,
          "class": "Image",
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "99.491%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "15.139%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "visible",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 300,
          "class": "Image",
          "paddingRight": 0,
          "width": 30,
          "height": "100%",
          "maxHeight": 300,
          "horizontalAlign": "center",
          "borderSize": 0,
          "borderRadius": 0,
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "7.276%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "visible",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "97.67%",
        "width": "83.008%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 734,
          "class": "Image",
          "paddingRight": 0,
          "height": "64.407%",
          "maxHeight": 49,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "87.799%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "2.454%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "hidden",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "maxWidth": 726,
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "borderSize": 0,
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "scaleMode": "fit_inside",
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "shadow": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "6.937%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "scroll",
      "gap": 4,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "62.5%",
        "width": "13.505%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 117,
          "class": "Image",
          "paddingRight": 0,
          "height": "97.14%",
          "maxHeight": 45,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "86.03%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "12.891%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 222,
          "class": "Image",
          "paddingRight": 0,
          "height": "83.33%",
          "maxHeight": 222,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "85.42%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "67.857%",
        "width": "54.618%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 459,
          "class": "Image",
          "paddingRight": 0,
          "height": "84.211%",
          "maxHeight": 41,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "83.455%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": "5.834%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "overflow": "scroll",
      "gap": 10,
      "borderRadius": 0,
      "shadow": false,
      "contentOpaque": false,
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "height": "100%",
        "width": "33.984%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "overflow": "scroll",
        "gap": 10,
        "borderRadius": 0,
        "shadow": false,
        "contentOpaque": false,
        "paddingBottom": 0,
        "minWidth": 1,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "paddingLeft": 0,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "maxWidth": 297,
          "class": "Image",
          "paddingRight": 0,
          "height": "70.833%",
          "maxHeight": 44,
          "horizontalAlign": "center",
          "borderSize": 0,
          "width": "86.842%",
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "borderRadius": 0,
          "shadow": false,
          "paddingBottom": 0,
          "minWidth": 1,
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
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "scroll",
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "top": "0%",
    "contentOpaque": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "maxWidth": 72,
      "class": "IconButton",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "width": 31,
      "height": 29,
      "maxHeight": 72,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "shadow": false,
      "top": "23.74%",
      "cursor": "hand",
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "left": "3.02%"
     }
    ]
   },
   {
    "class": "Container",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "top",
    "paddingRight": 0,
    "height": "77.065%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "53.136%",
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "scroll",
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "bottom": "9.57%",
    "id": "Container_8094493A_8C48_84B7_41A9_59553E60A5AE",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "right": "20.33%",
    "children": [
     {
      "class": "Label",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "fontSize": 36,
      "textDecoration": "none",
      "width": "70.034%",
      "height": "77.433%",
      "fontFamily": "Arial",
      "text": "English",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "fontColor": "#FFFFFF",
      "fontStyle": "normal",
      "borderRadius": 0,
      "fontWeight": "normal",
      "shadow": false,
      "top": "8.32%",
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Label_80D5A638_8C48_8C4C_41DF_09CEF71B3091",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "left": "14.87%"
     }
    ]
   },
   {
    "class": "Container",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "top",
    "paddingRight": 0,
    "height": "72.065%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "54.346%",
    "horizontalAlign": "left",
    "minHeight": 1,
    "overflow": "scroll",
    "gap": 10,
    "borderRadius": 0,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "bottom": "13.8%",
    "id": "Container_824D9F9B_8C49_9C4C_41D0_5DFB8FAE39C5",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "right": "20.75%",
    "children": [
     {
      "class": "Label",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "fontSize": 36,
      "textDecoration": "none",
      "width": "37.292%",
      "height": "26.848%",
      "fontFamily": "Arial",
      "text": "Japanese",
      "borderSize": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "fontColor": "#FFFFFF",
      "fontStyle": "normal",
      "borderRadius": 0,
      "fontWeight": "normal",
      "shadow": false,
      "top": "36.5%",
      "paddingBottom": 0,
      "minWidth": 1,
      "id": "Label_813B3942_8C49_843F_41AE_348AA4BEC457",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "paddingLeft": 0,
      "left": "31.3%"
     }
    ]
   }
  ]
 }
], 
 "class": "Player",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "minHeight": 20,
 "overflow": "visible",
 "gap": 10,
 "borderRadius": 0,
 "shadow": false,
 "width": "100%",
 "paddingBottom": 0,
 "minWidth": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_9E456A9F_8D55_AB0E_41C2_8D5B9CF9A8D8.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
})