TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "cardboardMenu": {
   "class": "Menu",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "opacity": 0.4,
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "backgroundColor": "#404040",
   "id": "Menu_91FB222C_8077_4F62_41D6_591A93D44172",
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
   "fontColor": "#FFFFFF"
  },
  "class": "Panorama",
  "hfovMin": 60,
  "partial": false,
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
           "height": 83,
           "width": 81,
           "class": "ImageResourceLevel",
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 11.39,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.7,
        "pitch": -12.45
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_92279382_8077_4D26_41D5_18B537C85C1D); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 4.7,
        "hfov": 11.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 166,
           "width": 162,
           "class": "ImageResourceLevel",
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_0_0.png"
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
           "height": 16,
           "width": 19,
           "class": "ImageResourceLevel",
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_1_0_map.gif"
          }
         ]
        },
        "hfov": 7.05,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 5.33,
        "pitch": -15.37
       }
      ],
      "id": "overlay_43E8339E_4E2B_64FD_4196_5CCD6F483301",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 5.33,
        "hfov": 7.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 83,
           "width": 101,
           "class": "ImageResourceLevel",
           "url": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -15.37
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
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "mapLocations": [
   {
    "x": 310.61,
    "class": "PanoramaMapLocation",
    "y": 133.35,
    "angle": 114.15,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#10A8B3",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_t.png",
     "maximumZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 652,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1D3B3B_3FEA_3F13_41C8_94B28D48FE56",
       "map": {
        "offsetY": 0,
        "x": 299.86,
        "width": 21.5,
        "class": "HotspotMapOverlayMap",
        "y": 122.39,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 299.86,
        "class": "HotspotMapOverlayImage",
        "y": 122.39,
        "width": 21.5,
        "height": 21.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46.png"
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
       "id": "overlay_2F1CCB3B_3FEA_3F13_41A5_F89560AB6BE4",
       "map": {
        "offsetY": 0,
        "x": 344.74,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 141.71,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 344.74,
        "class": "HotspotMapOverlayImage",
        "y": 141.71,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47.png"
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
       "id": "overlay_2F1CDB3B_3FEA_3F13_41C7_954F616FADFF",
       "map": {
        "offsetY": 0,
        "x": 391.86,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 160.93,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 391.86,
        "class": "HotspotMapOverlayImage",
        "y": 160.93,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48.png"
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
       "id": "overlay_2F1CEB3B_3FEA_3F13_41B9_540F108BAE8A",
       "map": {
        "offsetY": 0,
        "x": 442.55,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 183.82,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 442.55,
        "class": "HotspotMapOverlayImage",
        "y": 183.82,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49.png"
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
       "id": "overlay_2F1CFB3B_3FEA_3F13_41B9_A207A65471C8",
       "map": {
        "offsetY": 0,
        "x": 502.54,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 202.95,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 502.54,
        "class": "HotspotMapOverlayImage",
        "y": 202.95,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50.png"
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
       "id": "overlay_2F1C8B3B_3FEA_3F13_41CE_8DE5F5E5198B",
       "map": {
        "offsetY": 0,
        "x": 535.98,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 217.16,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 535.98,
        "class": "HotspotMapOverlayImage",
        "y": 217.16,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51.png"
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
       "id": "overlay_2F1C9B3C_3FEA_3F15_41A2_29A259D7E0E6",
       "map": {
        "offsetY": 0,
        "x": 600.53,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 247.65,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 600.53,
        "class": "HotspotMapOverlayImage",
        "y": 247.65,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52.png"
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
       "id": "overlay_2F1CAB3C_3FEA_3F15_41CA_198DAA8D1C71",
       "map": {
        "offsetY": 0,
        "x": 624.85,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 207.87,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.85,
        "class": "HotspotMapOverlayImage",
        "y": 207.87,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53.png"
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
       "id": "overlay_2F1C4B3C_3FEA_3F15_41C4_DB1A2E53C8A4",
       "map": {
        "offsetY": 0,
        "x": 623.69,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 147.25,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 623.69,
        "class": "HotspotMapOverlayImage",
        "y": 147.25,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54.png"
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
       "id": "overlay_2F1C5B3C_3FEA_3F15_41CF_4074A93C96C6",
       "map": {
        "offsetY": 0,
        "x": 675,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 675,
        "class": "HotspotMapOverlayImage",
        "y": 239.43,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55.png"
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
       "id": "overlay_2F1C6B3C_3FEA_3F15_41B9_19D38B52E075",
       "map": {
        "offsetY": 0,
        "x": 736.43,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 238.62,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 736.43,
        "class": "HotspotMapOverlayImage",
        "y": 238.62,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56.png"
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
       "id": "overlay_2F1C0B3C_3FEA_3F15_41C5_2F0BA3E5E3D1",
       "map": {
        "offsetY": 0,
        "x": 801.15,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 801.15,
        "class": "HotspotMapOverlayImage",
        "y": 239.43,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57.png"
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
       "id": "overlay_2F1C1B3C_3FEA_3F15_41C6_9B5397747DDE",
       "map": {
        "offsetY": 0,
        "x": 846.84,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 846.84,
        "class": "HotspotMapOverlayImage",
        "y": 239.43,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58.png"
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
       "id": "overlay_2F1C2B3C_3FEA_3F15_41C5_38FDC514C895",
       "map": {
        "offsetY": 0,
        "x": 887.61,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 242.2,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 887.61,
        "class": "HotspotMapOverlayImage",
        "y": 242.2,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59.png"
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
       "id": "overlay_2F1C3B3C_3FEA_3F15_41CA_E63E755E4528",
       "map": {
        "offsetY": 0,
        "x": 935.98,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 240.77,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 935.98,
        "class": "HotspotMapOverlayImage",
        "y": 240.77,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60.png"
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
       "id": "overlay_2EE3CB3C_3FEA_3F15_41CE_5FE33CB3A992",
       "map": {
        "offsetY": 0,
        "x": 617.34,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 299.33,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 617.34,
        "class": "HotspotMapOverlayImage",
        "y": 299.33,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61.png"
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
       "id": "overlay_2EE3DB3C_3FEA_3F15_41C7_0CF0266FD3E9",
       "map": {
        "offsetY": 0,
        "x": 664.99,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 305.58,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 664.99,
        "class": "HotspotMapOverlayImage",
        "y": 305.58,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62.png"
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
       "id": "overlay_2EE3EB3C_3FEA_3F15_41C0_F4A5B8FC5CA9",
       "map": {
        "offsetY": 0,
        "x": 663.56,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 332.85,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 663.56,
        "class": "HotspotMapOverlayImage",
        "y": 332.85,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63.png"
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
       "id": "overlay_2EE3FB3C_3FEA_3F15_41BA_DE40AF8987B4",
       "map": {
        "offsetY": 0,
        "x": 659.36,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 375.5,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 659.36,
        "class": "HotspotMapOverlayImage",
        "y": 375.5,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64.png"
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
       "id": "overlay_2EE39B3C_3FEA_3F15_41CF_AE5CE5A26D54",
       "map": {
        "offsetY": 0,
        "x": 673.66,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 423.96,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 673.66,
        "class": "HotspotMapOverlayImage",
        "y": 423.96,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65.png"
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
       "id": "overlay_2EE3BB3C_3FEA_3F15_41BA_E510AF188848",
       "map": {
        "offsetY": 0,
        "x": 625.65,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 331.42,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 625.65,
        "class": "HotspotMapOverlayImage",
        "y": 331.42,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66.png"
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
       "id": "overlay_2EE34B3C_3FEA_3F15_41C9_2C3CBE09C98E",
       "map": {
        "offsetY": 0,
        "x": 586.4,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 344.74,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 586.4,
        "class": "HotspotMapOverlayImage",
        "y": 344.74,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67.png"
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
       "id": "overlay_2F1CCB3D_3FEA_3F17_4199_9E79BDD719A8",
       "map": {
        "offsetY": 0,
        "x": 559.31,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 360.66,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 559.31,
        "class": "HotspotMapOverlayImage",
        "y": 360.66,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68.png"
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
        "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799.png"
       },
       {
        "height": 326,
        "width": 510,
        "class": "ImageResourceLevel",
        "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_lq.png",
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
     "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
     "class": "Panorama",
     "hfovMin": 60,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
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
              "height": 16,
              "width": 18,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0_map.gif"
             }
            ]
           },
           "hfov": 6.64,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 2.5,
           "pitch": -16.04
          }
         ],
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 2.5,
           "hfov": 6.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 82,
              "width": 95,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -16.04
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
              "height": 16,
              "width": 18,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0_map.gif"
             }
            ]
           },
           "hfov": 6.19,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 177.07,
           "pitch": -15.48
          }
         ],
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 177.07,
           "hfov": 6.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 77,
              "width": 89,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -15.48
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
              "height": 65,
              "width": 85,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 11.96,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 1.7,
           "pitch": -12.66
          }
         ],
         "id": "overlay_311D0F38_3C32_38E6_41B9_16CD7FB2884F",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_9376B44A_8077_4B26_41DB_3D717BB06D86); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 1.7,
           "hfov": 11.96,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 130,
              "width": 170,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -12.66
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
              "height": 60,
              "width": 79,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "hfov": 11.22,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 176.46,
           "pitch": -12.28
          }
         ],
         "id": "overlay_3114B52C_3C32_48FE_41B5_406CC4DEDCA5",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_9364645A_8077_4B26_41D5_B55BAD2D293F); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 176.46,
           "hfov": 11.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 121,
              "width": 159,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0.png"
             }
            ]
           },
           "pitch": -12.28
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
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40.jpeg"
         }
        ]
       }
      }
     ],
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
      }
     ],
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
        "class": "Panorama",
        "hfovMin": 60,
        "partial": false,
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
                 "height": 16,
                 "width": 17,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0_map.gif"
                }
               ]
              },
              "hfov": 5.5,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.39,
              "pitch": -17.33
             }
            ],
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 0.39,
              "hfov": 5.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 74,
                 "width": 80,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -17.33
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
                 "height": 18,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0_map.gif"
                }
               ]
              },
              "hfov": 5.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -178.17,
              "pitch": -12.91
             }
            ],
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -178.17,
              "hfov": 5.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 88,
                 "width": 77,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -12.91
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
                 "height": 65,
                 "width": 56,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "hfov": 8.04,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -178.44,
              "pitch": -9.52
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_91CA52AE_8077_4F7E_41C7_9E5895C4F716); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -178.44,
              "hfov": 8.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 131,
                 "width": 113,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -9.52
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
                 "height": 65,
                 "width": 65,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "hfov": 9.11,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -0.32,
              "pitch": -14.46
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
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_91B322BD_8077_4F62_41D8_C1311C82DE8A); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -0.32,
              "hfov": 9.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 130,
                 "width": 130,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -14.46
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
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
         }
        ],
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
           "class": "Panorama",
           "hfovMin": 60,
           "partial": false,
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
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 5.23,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -1.24,
                 "pitch": -14.81
                }
               ],
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -1.24,
                 "hfov": 5.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 73,
                    "width": 75,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -14.81
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
                    "height": 16,
                    "width": 19,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 5.72,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -178.46,
                 "pitch": -17.6
                }
               ],
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -178.46,
                 "hfov": 5.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 68,
                    "width": 83,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -17.6
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
                    "width": 51,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.22,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -179.19,
                 "pitch": -14.72
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_92FD53BF_8077_4D5E_41C6_3265149D0B98); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.19,
                 "hfov": 7.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 109,
                    "width": 103,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -14.72
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
                 "yaw": -1.53,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_92E843CF_8077_4D3E_41D1_6B7C66C2ADEA); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -1.53,
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
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
            }
           ],
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "class": "AdjacentPanorama",
             "yaw": -179.19,
             "backwardYaw": -178.44,
             "distance": 1
            },
            {
             "panorama": {
              "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
              "class": "Panorama",
              "hfovMin": 60,
              "partial": false,
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
                       "height": 16,
                       "width": 17,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -2.12,
                    "pitch": -12.26
                   }
                  ],
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -2.12,
                    "hfov": 5.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 67,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -12.26
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
                       "height": 16,
                       "width": 17,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.48,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -170.98,
                    "pitch": -16.91
                   }
                  ],
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -170.98,
                    "hfov": 5.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 72,
                       "width": 79,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -16.91
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
                       "width": 53,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.48,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -171.64,
                    "pitch": -14.18
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_928BB43B_8077_4B66_41DA_4F44237C2A88); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -171.64,
                    "hfov": 7.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 106,
                       "width": 107,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -14.18
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
                       "width": 50,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.1,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -2.5,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_929A442B_8077_4B66_41DE_BB5FDC6A6DC3); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -2.5,
                    "hfov": 7.1,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "width": 100,
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
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
               }
              ],
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "class": "AdjacentPanorama",
                "yaw": -2.5,
                "backwardYaw": -1.53,
                "distance": 1
               },
               {
                "panorama": {
                 "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                 "class": "Panorama",
                 "hfovMin": 60,
                 "partial": false,
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
                          "height": 16,
                          "width": 17,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.55,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 6.07,
                       "pitch": -12.68
                      }
                     ],
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 6.07,
                       "hfov": 5.55,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 73,
                          "width": 79,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -12.68
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
                          "height": 16,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.38,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -178.67,
                       "pitch": -16.61
                      }
                     ],
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -178.67,
                       "hfov": 5.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 77,
                          "width": 78,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -16.61
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
                          "width": 47,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 6.71,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -178.95,
                       "pitch": -13.71
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_919292FA_8077_4CE6_41D3_159E4E06C3E7); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -178.95,
                       "hfov": 6.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 105,
                          "width": 95,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -13.71
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
                          "width": 46,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 6.54,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 5.81,
                       "pitch": -9.79
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
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_919E9309_8077_4D22_4194_199FF3A7873F); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 5.81,
                       "hfov": 6.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 105,
                          "width": 92,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -9.79
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
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                  }
                 ],
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "class": "AdjacentPanorama",
                   "yaw": -178.95,
                   "backwardYaw": -171.64,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                    "class": "Panorama",
                    "hfovMin": 60,
                    "partial": false,
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
                             "height": 16,
                             "width": 18,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 4.94,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 12.56,
                          "pitch": -13.19
                         }
                        ],
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 12.56,
                          "hfov": 4.94,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 70,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -13.19
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
                             "height": 16,
                             "width": 19,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 4.63,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 161.43,
                          "pitch": -10.12
                         }
                        ],
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 161.43,
                          "hfov": 4.63,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 54,
                             "width": 65,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0.png"
                            }
                           ]
                          },
                          "pitch": -10.12
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
                             "height": 16,
                             "width": 20,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.88,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -92.35,
                          "pitch": -12.4
                         }
                        ],
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -92.35,
                          "hfov": 5.88,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 65,
                             "width": 83,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0.png"
                            }
                           ]
                          },
                          "pitch": -12.4
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
                             "width": 52,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.42,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -92.77,
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_91C1C28F_8077_4F3E_41D8_2BE6514E0993); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -92.77,
                          "hfov": 7.42,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 96,
                             "width": 104,
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
                             "height": 73,
                             "width": 53,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.52,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 11.9,
                          "pitch": -11.04
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_91D48271_8077_4FE2_41B4_7D8BF6A1F787); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 11.9,
                          "hfov": 7.52,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 146,
                             "width": 106,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png"
                            }
                           ]
                          },
                          "pitch": -11.04
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
                             "height": 50,
                             "width": 45,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.5,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 161.1,
                          "pitch": -7.81
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
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_91D84280_8077_4F22_41C6_F7B36C5B8508); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 161.1,
                          "hfov": 6.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 100,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png"
                            }
                           ]
                          },
                          "pitch": -7.81
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
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 611.03,
                      "class": "PanoramaMapLocation",
                      "y": 258.15,
                      "angle": 25.28,
                      "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                     }
                    ],
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                       "class": "Panorama",
                       "hfovMin": 60,
                       "partial": false,
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
                                "height": 16,
                                "width": 17,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 4.32,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -168.99,
                             "pitch": -14.77
                            }
                           ],
                           "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -168.99,
                             "hfov": 4.32,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 55,
                                "width": 60,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -14.77
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
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 4.99,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -36.37,
                             "pitch": -16.53
                            }
                           ],
                           "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -36.37,
                             "hfov": 4.99,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 71,
                                "width": 70,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -16.53
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
                                "height": 16,
                                "width": 20,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 5.06,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 29.72,
                             "pitch": -9.5
                            }
                           ],
                           "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 29.72,
                             "hfov": 5.06,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 54,
                                "width": 69,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0.png"
                               }
                              ]
                             },
                             "pitch": -9.5
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
                                "height": 49,
                                "width": 59,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.58,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -169.12,
                             "pitch": -12.44
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_9319E4D2_8077_4B26_41D6_D4F109E5C40D); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -169.12,
                             "hfov": 8.58,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 99,
                                "width": 119,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png"
                               }
                              ]
                             },
                             "pitch": -12.44
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
                                "width": 52,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 7.56,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -36.17,
                             "pitch": -13.63
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_93F2E4FC_8077_54E2_41B1_94CC681E2682); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -36.17,
                             "hfov": 7.56,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 97,
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png"
                               }
                              ]
                             },
                             "pitch": -13.63
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
                                "height": 42,
                                "width": 37,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 5.49,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 29.29,
                             "pitch": -7.6
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
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_930574E7_8077_54EE_41BF_E6152B3AD4E5); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 29.29,
                             "hfov": 5.49,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 85,
                                "width": 75,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png"
                               }
                              ]
                             },
                             "pitch": -7.6
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
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "class": "PanoramaMapLocation",
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                        }
                       ],
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                          "class": "Panorama",
                          "hfovMin": 60,
                          "partial": false,
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
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 3.8,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 130.8,
                                "pitch": -6.02
                               }
                              ],
                              "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.8,
                                "hfov": 3.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 51,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "pitch": -6.02
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
                                   "height": 35,
                                   "width": 36,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.39,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 130.87,
                                "pitch": -4.35
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_9355B469_8077_4BE2_41D1_C1D363720A68); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.87,
                                "hfov": 5.39,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 70,
                                   "width": 73,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "pitch": -4.35
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
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "class": "PanoramaMapLocation",
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
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
                            "backwardYaw": -169.12,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -169.12,
                         "backwardYaw": 130.87,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "class": "AdjacentPanorama",
                         "yaw": 29.29,
                         "backwardYaw": 11.9,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                          "class": "Panorama",
                          "hfovMin": 60,
                          "partial": false,
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
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.29,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -1.39,
                                "pitch": -15.05
                               }
                              ],
                              "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -1.39,
                                "hfov": 5.29,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 76,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -15.05
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
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.66,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -137.13,
                                "pitch": -10.84
                               }
                              ],
                              "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -137.13,
                                "hfov": 4.66,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 65,
                                   "width": 65,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "pitch": -10.84
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
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.3,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 77.39,
                                "pitch": -13.91
                               }
                              ],
                              "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 77.39,
                                "hfov": 5.3,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 73,
                                   "width": 75,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0.png"
                                  }
                                 ]
                                },
                                "pitch": -13.91
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
                                   "width": 56,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.01,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -137.31,
                                "pitch": -8.06
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_92A1140C_8077_4B22_41C0_0BE72A147101); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -137.31,
                                "hfov": 8.01,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 95,
                                   "width": 112,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png"
                                  }
                                 ]
                                },
                                "pitch": -8.06
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
                                   "width": 59,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -1.61,
                                "pitch": -12.43
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_92AF641B_8077_4B26_41D5_B84790C311C9); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -1.61,
                                "hfov": 8.34,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 118,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png"
                                  }
                                 ]
                                },
                                "pitch": -12.43
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
                                   "width": 50,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.09,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 77.51,
                                "pitch": -11.18
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
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_92B213FC_8077_4CE2_41C8_36E1B9A50206); this.mainPlayList.set('selectedIndex', 16)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 77.51,
                                "hfov": 7.09,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 96,
                                   "width": 100,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png"
                                  }
                                 ]
                                },
                                "pitch": -11.18
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
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "class": "PanoramaMapLocation",
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                           }
                          ],
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                             "class": "Panorama",
                             "hfovMin": 60,
                             "partial": false,
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
                                      "height": 16,
                                      "width": 19,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.01,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 34.28,
                                   "pitch": -12.61
                                  }
                                 ],
                                 "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 34.28,
                                   "hfov": 5.01,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "width": 71,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -12.61
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
                                      "height": 16,
                                      "width": 21,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.1,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 155.57,
                                   "pitch": -10.97
                                  }
                                 ],
                                 "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 155.57,
                                   "hfov": 5.1,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 53,
                                      "width": 72,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -10.97
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
                                      "height": 16,
                                      "width": 17,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 4.57,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -90.63,
                                   "pitch": -12.47
                                  }
                                 ],
                                 "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -90.63,
                                   "hfov": 4.57,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "width": 65,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -12.47
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
                                      "height": 63,
                                      "width": 60,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.62,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -91.01,
                                   "pitch": -10.13
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_93DCF540_8077_5521_41D4_6F646055A2D2); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -91.01,
                                   "hfov": 8.62,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 126,
                                      "width": 121,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -10.13
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
                                      "width": 56,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.05,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 155.07,
                                   "pitch": -8.66
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_93EF0526_8077_556E_41C2_AFBD8780EE40); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 155.07,
                                   "hfov": 8.05,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 104,
                                      "width": 113,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -8.66
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
                                      "height": 65,
                                      "width": 59,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.42,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 33.58,
                                   "pitch": -10.09
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_93E06511_8077_5522_41D5_A8827300668F); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 33.58,
                                   "hfov": 8.42,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 131,
                                      "width": 118,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -10.09
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
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "class": "PanoramaMapLocation",
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 33.58,
                               "backwardYaw": 77.51,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                "class": "Panorama",
                                "hfovMin": 60,
                                "partial": false,
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
                                         "height": 16,
                                         "width": 17,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.52,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -162.47,
                                      "pitch": -13.48
                                     }
                                    ],
                                    "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -162.47,
                                      "hfov": 4.52,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 57,
                                         "width": 64,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -13.48
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
                                         "height": 16,
                                         "width": 17,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.91,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 3.62,
                                      "pitch": -11.76
                                     }
                                    ],
                                    "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 3.62,
                                      "hfov": 4.91,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 62,
                                         "width": 69,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -11.76
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
                                         "height": 38,
                                         "width": 46,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.63,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 3.13,
                                      "pitch": -9.38
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_92C573ED_8077_4CE2_41D5_35D44D28548D); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 3.13,
                                      "hfov": 6.63,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 76,
                                         "width": 93,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -9.38
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
                                         "width": 58,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 8.2,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -162.57,
                                      "pitch": -11.22
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_92D9A3DE_8077_4CDE_41DE_CA2337929490); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -162.57,
                                      "hfov": 8.2,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 82,
                                         "width": 116,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -11.22
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
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "class": "PanoramaMapLocation",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -162.57,
                                  "backwardYaw": 155.07,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "partial": false,
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
                                            "height": 16,
                                            "width": 17,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5.09,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 25.98,
                                         "pitch": -12.36
                                        }
                                       ],
                                       "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 25.98,
                                         "hfov": 5.09,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 66,
                                            "width": 72,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -12.36
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
                                            "height": 16,
                                            "width": 17,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 4.5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -35.88,
                                         "pitch": -13.89
                                        }
                                       ],
                                       "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -35.88,
                                         "hfov": 4.5,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 57,
                                            "width": 64,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -13.89
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
                                            "height": 16,
                                            "width": 17,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 4.4,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 177.68,
                                         "pitch": -9.24
                                        }
                                       ],
                                       "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 177.68,
                                         "hfov": 4.4,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 56,
                                            "width": 61,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -9.24
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
                                            "width": 63,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.92,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -36.15,
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_920033A0_8077_4D62_41D3_E652D3D52FBC); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -36.15,
                                         "hfov": 8.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 106,
                                            "width": 126,
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
                                            "height": 56,
                                            "width": 65,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 9.26,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 26.17,
                                         "pitch": -9.63
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_920FC3B0_8077_4D62_41C9_448A0E80711F); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 26.17,
                                         "hfov": 9.26,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 113,
                                            "width": 130,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -9.63
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
                                         "hfov": 8.25,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 177.2,
                                         "pitch": -6.84
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_92135391_8077_4D22_41D7_EF2B831F5898); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 177.2,
                                         "hfov": 8.25,
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
                                         "pitch": -6.84
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
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "class": "PanoramaMapLocation",
                                     "y": 386.76,
                                     "angle": 0,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "label": "C19",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "partial": false,
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
                                               "height": 44,
                                               "width": 59,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.43,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -179.27,
                                            "pitch": -8.16
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_935E9478_8077_4BE2_41AF_8593D2601866); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -179.27,
                                            "hfov": 8.43,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 89,
                                               "width": 118,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -8.16
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
                                               "height": 16,
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 3.86,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -178.69,
                                            "pitch": -10.25
                                           }
                                          ],
                                          "id": "overlay_6FF7E701_6086_B32E_41D0_EEE74FA7AD07",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -178.69,
                                            "hfov": 3.86,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 52,
                                               "width": 54,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -10.25
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
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                      "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                      "mapLocations": [
                                       {
                                        "x": 684.16,
                                        "class": "PanoramaMapLocation",
                                        "y": 434.46,
                                        "angle": 147.84,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
                                      "label": "C20",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -179.27,
                                        "backwardYaw": 177.2,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 177.2,
                                     "backwardYaw": -179.27,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "partial": false,
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
                                               "height": 16,
                                               "width": 18,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.34,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 91.25,
                                            "pitch": -11.65
                                           }
                                          ],
                                          "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 91.25,
                                            "hfov": 5.34,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 66,
                                               "width": 75,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.65
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
                                               "height": 16,
                                               "width": 17,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.06,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -6.08,
                                            "pitch": -12.08
                                           }
                                          ],
                                          "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -6.08,
                                            "hfov": 5.06,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 64,
                                               "width": 71,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -12.08
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
                                               "height": 16,
                                               "width": 17,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.62,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -166.51,
                                            "pitch": -10.36
                                           }
                                          ],
                                          "id": "overlay_2C7EB04D_21FB_7ABB_4179_D08D1BA68999",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -166.51,
                                            "hfov": 6.62,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 86,
                                               "width": 93,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -10.36
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
                                               "width": 60,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.69,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -166.65,
                                            "pitch": -7.54
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_92628336_8077_4D6E_41D5_3F503592E600); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -166.65,
                                            "hfov": 8.69,
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
                                            "pitch": -7.54
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
                                            "hfov": 6.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -6.39,
                                            "pitch": -9.63
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_925CA354_8077_4D22_41CE_6C7BED7B0014); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -6.39,
                                            "hfov": 6.49,
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
                                            "pitch": -9.63
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
                                            "hfov": 8.17,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 90.68,
                                            "pitch": -9.3
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_9251D346_8077_4D2E_41DC_43DD9ACEF932); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 90.68,
                                            "hfov": 8.17,
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
                                            "pitch": -9.3
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
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "class": "PanoramaMapLocation",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
                                      "label": "C23",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                         "class": "Panorama",
                                         "hfovMin": 60,
                                         "partial": false,
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
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.65,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -172.8,
                                               "pitch": -11.69
                                              }
                                             ],
                                             "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -172.8,
                                               "hfov": 4.65,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 68,
                                                  "width": 66,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.69
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
                                                  "height": 16,
                                                  "width": 17,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.59,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -20.22,
                                               "pitch": -10.07
                                              }
                                             ],
                                             "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -20.22,
                                               "hfov": 4.59,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 57,
                                                  "width": 64,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.07
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
                                                  "height": 16,
                                                  "width": 19,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 101.88,
                                               "pitch": -18.77
                                              }
                                             ],
                                             "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 101.88,
                                               "hfov": 5,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 60,
                                                  "width": 73,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.77
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
                                                  "height": 43,
                                                  "width": 51,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.26,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -173.01,
                                               "pitch": -8.89
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_91A012DB_8077_4F26_41D3_A82F58D7474A); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -173.01,
                                               "hfov": 7.26,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 87,
                                                  "width": 102,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -8.89
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
                                                  "width": 49,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.01,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -20.45,
                                               "pitch": -7.87
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_91A822EB_8077_4CE6_41DE_97B4581088B9); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -20.45,
                                               "hfov": 7.01,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 75,
                                                  "width": 98,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -7.87
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
                                                  "height": 56,
                                                  "width": 65,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 9.08,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 101.24,
                                               "pitch": -16.26
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_91B9E2CC_8077_4F22_41D7_5A888DA0D92A); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 101.24,
                                               "hfov": 9.08,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 112,
                                                  "width": 131,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.26
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
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "class": "PanoramaMapLocation",
                                           "y": 310.59,
                                           "angle": 0,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
                                         "label": "C16",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "class": "AdjacentPanorama",
                                           "yaw": 101.24,
                                           "backwardYaw": -91.01,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "class": "AdjacentPanorama",
                                           "yaw": -173.01,
                                           "backwardYaw": -166.65,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "class": "AdjacentPanorama",
                                           "yaw": -20.45,
                                           "backwardYaw": 161.1,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -166.65,
                                        "backwardYaw": -173.01,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                         "class": "Panorama",
                                         "hfovMin": 60,
                                         "partial": false,
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
                                                  "height": 16,
                                                  "width": 18,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.62,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 23.68,
                                               "pitch": -14.06
                                              }
                                             ],
                                             "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 23.68,
                                               "hfov": 5.62,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 71,
                                                  "width": 80,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -14.06
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
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.64,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -177.35,
                                               "pitch": -18.46
                                              }
                                             ],
                                             "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -177.35,
                                               "hfov": 5.64,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 81,
                                                  "width": 82,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.46
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_932824BD_8077_4B62_41CB_F6EACB59C4F2); this.mainPlayList.set('selectedIndex', 20)"
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_933DC4A2_8077_4B66_41D8_7B127AC32B24); this.mainPlayList.set('selectedIndex', 22)"
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
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "class": "PanoramaMapLocation",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
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
                                           "backwardYaw": 90.68,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": {
                                            "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                            "class": "Panorama",
                                            "hfovMin": 60,
                                            "partial": false,
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
                                                     "height": 16,
                                                     "width": 18,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 5.17,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -177.49,
                                                  "pitch": -19.38
                                                 }
                                                ],
                                                "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -177.49,
                                                  "hfov": 5.17,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 67,
                                                     "width": 76,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -19.38
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
                                                     "height": 82,
                                                     "width": 77,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 10.65,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -178.38,
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
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_91C7129E_8077_4F5E_41C8_1527436B9701); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -178.38,
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
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "class": "PanoramaMapLocation",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                             }
                                            ],
                                            "label": "C21",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "class": "AdjacentPanorama",
                                              "yaw": -178.38,
                                              "backwardYaw": -178.42,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": -178.42,
                                           "backwardYaw": -178.38,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 90.68,
                                        "backwardYaw": 23.25,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -6.39,
                                        "backwardYaw": -36.15,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -36.15,
                                     "backwardYaw": -6.39,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "class": "AdjacentPanorama",
                                     "yaw": 26.17,
                                     "backwardYaw": 3.13,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 3.13,
                                  "backwardYaw": 26.17,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 155.07,
                               "backwardYaw": -162.57,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "class": "AdjacentPanorama",
                               "yaw": -91.01,
                               "backwardYaw": 101.24,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 77.51,
                            "backwardYaw": 33.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": -137.31,
                            "backwardYaw": -36.17,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                             "class": "Panorama",
                             "hfovMin": 60,
                             "partial": false,
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
                                      "height": 16,
                                      "width": 17,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.46,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 2.23,
                                   "pitch": -14.08
                                  }
                                 ],
                                 "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 2.23,
                                   "hfov": 5.46,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 72,
                                      "width": 78,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -14.08
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
                                      "height": 16,
                                      "width": 17,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 4.83,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -177.5,
                                   "pitch": -23.37
                                  }
                                 ],
                                 "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -177.5,
                                   "hfov": 4.83,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 68,
                                      "width": 73,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -23.37
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
                                      "height": 65,
                                      "width": 59,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.41,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 1.72,
                                   "pitch": -11.32
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_93B9556B_8077_55E7_4190_94DFF0D013A7); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 1.72,
                                   "hfov": 8.41,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 130,
                                      "width": 119,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -11.32
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
                                      "width": 81,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.06,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -177.86,
                                   "pitch": -20.19
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_93CB3556_8077_5521_41D8_F7D8164D0111); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -177.86,
                                   "hfov": 11.06,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 122,
                                      "width": 163,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -20.19
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
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "class": "PanoramaMapLocation",
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                "class": "Panorama",
                                "hfovMin": 60,
                                "partial": false,
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
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.25,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.38,
                                      "pitch": -14.73
                                     }
                                    ],
                                    "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -0.38,
                                      "hfov": 5.25,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 75,
                                         "width": 75,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -14.73
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
                                         "height": 16,
                                         "width": 17,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.34,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -178.32,
                                      "pitch": -43.27
                                     }
                                    ],
                                    "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -178.32,
                                      "hfov": 4.34,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 73,
                                         "width": 82,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -43.27
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
                                         "width": 62,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 8.74,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.46,
                                      "pitch": -12.02
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_9239A372_8077_4DE6_41DB_A4595C10BE29); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -0.46,
                                      "hfov": 8.74,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 124,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -12.02
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
                                         "width": 62,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.8,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -178.97,
                                      "pitch": -40.38
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_92487363_8077_4DE6_41B6_BABE8028604D); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -178.97,
                                      "hfov": 6.8,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 124,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -40.38
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
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "class": "PanoramaMapLocation",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "partial": false,
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
                                            "height": 16,
                                            "width": 17,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 4.96,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -0.35,
                                         "pitch": -17.85
                                        }
                                       ],
                                       "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -0.35,
                                         "hfov": 4.96,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 66,
                                            "width": 72,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -17.85
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
                                            "height": 16,
                                            "width": 18,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 4.98,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 176.18,
                                         "pitch": -17.98
                                        }
                                       ],
                                       "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 176.18,
                                         "hfov": 4.98,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 63,
                                            "width": 72,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -17.98
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
                                            "height": 70,
                                            "width": 56,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.83,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -0.27,
                                         "pitch": -15.23
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_92763327_8077_4D6E_41B9_675D2083CFBF); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -0.27,
                                         "hfov": 7.83,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 141,
                                            "width": 112,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png"
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
                                            "height": 80,
                                            "width": 74,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.32,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 176.03,
                                         "pitch": -15.27
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_918B1318_8077_4D22_41B4_F639EFBF111B); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 176.03,
                                         "hfov": 10.32,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 160,
                                            "width": 148,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -15.27
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
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "label": "C13",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "class": "AdjacentPanorama",
                                     "yaw": 176.03,
                                     "backwardYaw": -178.97,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "partial": false,
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
                                               "height": 16,
                                               "width": 17,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.17,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -3.27,
                                            "pitch": -13.26
                                           }
                                          ],
                                          "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -3.27,
                                            "hfov": 5.17,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 67,
                                               "width": 73,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -13.26
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
                                               "height": 16,
                                               "width": 18,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.35,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 176.68,
                                            "pitch": -15.1
                                           }
                                          ],
                                          "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 176.68,
                                            "hfov": 5.35,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 66,
                                               "width": 76,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -15.1
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
                                               "width": 61,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.59,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 176.25,
                                            "pitch": -12.44
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_91EAE253_8077_4F26_41D1_882C1FA15628); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 176.25,
                                            "hfov": 8.59,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 125,
                                               "width": 122,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -12.44
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
                                               "height": 50,
                                               "width": 59,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.45,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -2.84,
                                            "pitch": -10.54
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
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_91EEC262_8077_4FE6_418C_94B325A2D974); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -2.84,
                                            "hfov": 8.45,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 100,
                                               "width": 119,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -10.54
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
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "class": "PanoramaMapLocation",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "class": "AdjacentPanorama",
                                        "yaw": 176.25,
                                        "backwardYaw": -0.27,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "cardboardMenu": "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
                                         "class": "Panorama",
                                         "hfovMin": 60,
                                         "partial": false,
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
                                                  "height": 16,
                                                  "width": 18,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.58,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 3.11,
                                               "pitch": -10.56
                                              }
                                             ],
                                             "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 3.11,
                                               "hfov": 5.58,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 66,
                                                  "width": 78,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.56
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
                                                  "width": 63,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.99,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 2.93,
                                               "pitch": -7.95
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
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_934FB487_8077_4B2E_41CA_6F72A1E1321A); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 2.93,
                                               "hfov": 8.99,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 89,
                                                  "width": 126,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -7.95
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
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "class": "PanoramaMapLocation",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
                                         "label": "C15",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "class": "AdjacentPanorama",
                                           "yaw": 2.93,
                                           "backwardYaw": -2.84,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -2.84,
                                        "backwardYaw": 2.93,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -0.27,
                                     "backwardYaw": 176.25,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": -178.97,
                                  "backwardYaw": 176.03,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -0.46,
                                  "backwardYaw": -177.86,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -177.86,
                               "backwardYaw": -0.46,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 1.72,
                               "backwardYaw": -1.61,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -1.61,
                            "backwardYaw": 1.72,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -36.17,
                         "backwardYaw": -137.31,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 11.9,
                      "backwardYaw": 29.29,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "class": "AdjacentPanorama",
                      "yaw": 161.1,
                      "backwardYaw": -20.45,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -92.77,
                      "backwardYaw": 5.81,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 5.81,
                   "backwardYaw": -92.77,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": -171.64,
                "backwardYaw": -178.95,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -1.53,
             "backwardYaw": -2.5,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": -178.44,
          "backwardYaw": -179.19,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "class": "AdjacentPanorama",
          "yaw": -0.32,
          "backwardYaw": 1.7,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 1.7,
       "backwardYaw": -0.32,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "class": "AdjacentPanorama",
       "yaw": 176.46,
       "backwardYaw": 4.7,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": 4.7,
    "backwardYaw": 176.46,
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
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 150,
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "minHeight": 96,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "toolTipShadowHorizontalLength": 0,
   "id": "MapViewer",
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
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
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
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F5D21E_8077_4F5E_41C9_71D6C33499A7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F5D21E_8077_4F5E_41C9_71D6C33499A7",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F5421E_8077_4F5E_41D3_E808A28FC4F9, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F5421E_8077_4F5E_41D3_E808A28FC4F9",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F4921F_8077_4F5E_41DB_0C2CFB36615F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F4921F_8077_4F5E_41DB_0C2CFB36615F",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F42220_8077_4F62_41CD_B75716162E16, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F42220_8077_4F62_41CD_B75716162E16",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F47220_8077_4F62_41D8_CB6023864024, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F47220_8077_4F62_41D8_CB6023864024",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F7B221_8077_4F62_41D3_E1F45C335493, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F7B221_8077_4F62_41D3_E1F45C335493",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F7C221_8077_4F62_41D6_9D08194C4E5C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F7C221_8077_4F62_41D6_9D08194C4E5C",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F71222_8077_4F66_4199_F59B31524B08, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F71222_8077_4F66_4199_F59B31524B08",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F6A223_8077_4F66_41BB_F0A07E3AED93, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F6A223_8077_4F66_41BB_F0A07E3AED93",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F6F223_8077_4F66_41A1_7FBC5E61CC0B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F6F223_8077_4F66_41A1_7FBC5E61CC0B",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F60224_8077_4F62_41D1_B339864A3F7A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F60224_8077_4F62_41D1_B339864A3F7A",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F65224_8077_4F62_41D1_2985092BC575, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F65224_8077_4F62_41D1_2985092BC575",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F99225_8077_4F62_41DA_33B1F0A4F344, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F99225_8077_4F62_41DA_33B1F0A4F344",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F92226_8077_4F6E_41D8_8ECD08E74825, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F92226_8077_4F6E_41D8_8ECD08E74825",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F94226_8077_4F6E_41DB_F7C404ADDAC7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F94226_8077_4F6E_41DB_F7C404ADDAC7",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F60227_8077_4F6E_41D1_804C6053DE56, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F60227_8077_4F6E_41D1_804C6053DE56",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F9A227_8077_4F6E_41CF_BDF5541246A1, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F9A227_8077_4F6E_41CF_BDF5541246A1",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F9F228_8077_4F62_41CB_D9EBD867829A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F9F228_8077_4F62_41CB_D9EBD867829A",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F91229_8077_4F62_41CF_8AF3A9085E80, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F91229_8077_4F62_41CF_8AF3A9085E80",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F8A229_8077_4F62_418E_1F9B1FEDBF43, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F8A229_8077_4F62_418E_1F9B1FEDBF43",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F8C22A_8077_4F66_41CF_3538E19B5E13, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F8C22A_8077_4F66_41CF_3538E19B5E13",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91F8122A_8077_4F66_41CB_0DF4E29B1ED7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91F8122A_8077_4F66_41CB_0DF4E29B1ED7",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_91FBA22B_8077_4F66_41DA_F9AF20382B9C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_91FBA22B_8077_4F66_41DA_F9AF20382B9C",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
 {
  "class": "PlayList",
  "id": "playList_91F2721D_8077_4F22_41B8_10C1C2177858",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "class": "MapPlayListItem",
    "media": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_91FB222C_8077_4F62_41D6_591A93D44172",
 {
  "class": "PanoramaCamera",
  "id": "camera_91EAE253_8077_4F26_41D1_882C1FA15628",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
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
  "id": "camera_91EEC262_8077_4FE6_418C_94B325A2D974",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.07,
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
  "id": "camera_91D48271_8077_4FE2_41B4_7D8BF6A1F787",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.71,
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
  "id": "camera_91D84280_8077_4F22_41C6_F7B36C5B8508",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.55,
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
  "id": "camera_91C1C28F_8077_4F3E_41D8_2BE6514E0993",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.19,
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
  "id": "camera_91C7129E_8077_4F5E_41C8_1527436B9701",
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
  "id": "camera_91CA52AE_8077_4F7E_41C7_9E5895C4F716",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.81,
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
  "id": "camera_91B322BD_8077_4F62_41D8_C1311C82DE8A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.3,
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
  "id": "camera_91B9E2CC_8077_4F22_41D7_5A888DA0D92A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.99,
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
  "id": "camera_91A012DB_8077_4F26_41D3_A82F58D7474A",
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
  "id": "camera_91A822EB_8077_4CE6_41DE_97B4581088B9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.9,
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
  "id": "camera_919292FA_8077_4CE6_41D3_159E4E06C3E7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.36,
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
  "id": "camera_919E9309_8077_4D22_4194_199FF3A7873F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.23,
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
  "id": "camera_918B1318_8077_4D22_41B4_F639EFBF111B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.03,
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
  "id": "camera_92763327_8077_4D6E_41B9_675D2083CFBF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.75,
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
  "id": "camera_92628336_8077_4D6E_41D5_3F503592E600",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.99,
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
  "id": "camera_9251D346_8077_4D2E_41DC_43DD9ACEF932",
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
  "id": "camera_925CA354_8077_4D22_41CE_6C7BED7B0014",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.85,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92487363_8077_4DE6_41B6_BABE8028604D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.97,
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
  "id": "camera_9239A372_8077_4DE6_41DB_A4595C10BE29",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.14,
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
  "id": "camera_92279382_8077_4D26_41D5_18B537C85C1D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.54,
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
  "id": "camera_92135391_8077_4D22_41D7_EF2B831F5898",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
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
  "id": "camera_920033A0_8077_4D62_41D3_E652D3D52FBC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.61,
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
  "id": "camera_920FC3B0_8077_4D62_41C9_448A0E80711F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.87,
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
  "id": "camera_92FD53BF_8077_4D5E_41C6_3265149D0B98",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.56,
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
  "id": "camera_92E843CF_8077_4D3E_41D1_6B7C66C2ADEA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.5,
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
  "id": "camera_92D9A3DE_8077_4CDE_41DE_CA2337929490",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.93,
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
  "id": "camera_92C573ED_8077_4CE2_41D5_35D44D28548D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92B213FC_8077_4CE2_41C8_36E1B9A50206",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -146.42,
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
  "id": "camera_92A1140C_8077_4B22_41C0_0BE72A147101",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.83,
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
  "id": "camera_92AF641B_8077_4B26_41D5_B84790C311C9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.28,
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
  "id": "camera_929A442B_8077_4B66_41DE_BB5FDC6A6DC3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.47,
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
  "id": "camera_928BB43B_8077_4B66_41DA_4F44237C2A88",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.05,
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
  "id": "camera_9376B44A_8077_4B26_41DB_3D717BB06D86",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.68,
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
  "id": "camera_9364645A_8077_4B26_41D5_B55BAD2D293F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.3,
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
  "id": "camera_9355B469_8077_4BE2_41D1_C1D363720A68",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.88,
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
  "id": "camera_935E9478_8077_4BE2_41AF_8593D2601866",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.8,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_934FB487_8077_4B2E_41CA_6F72A1E1321A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.16,
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
  "id": "camera_933DC4A2_8077_4B66_41D8_7B127AC32B24",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.32,
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
  "id": "camera_932824BD_8077_4B62_41CB_F6EACB59C4F2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.62,
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
  "id": "camera_9319E4D2_8077_4B26_41D6_D4F109E5C40D",
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
  "id": "camera_930574E7_8077_54EE_41BF_E6152B3AD4E5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.1,
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
  "id": "camera_93F2E4FC_8077_54E2_41B1_94CC681E2682",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.69,
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
  "id": "camera_93E06511_8077_5522_41D5_A8827300668F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.49,
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
  "id": "camera_93EF0526_8077_556E_41C2_AFBD8780EE40",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.43,
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
  "id": "camera_93DCF540_8077_5521_41D4_6F646055A2D2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.76,
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
  "id": "camera_93CB3556_8077_5521_41D8_F7D8164D0111",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.54,
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
  "id": "camera_93B9556B_8077_55E7_4190_94DFF0D013A7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.39,
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
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "bottom": "0%",
  "paddingLeft": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "id": "MainViewer",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "toolTipShadowHorizontalLength": 0,
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
  "layout": "vertical",
  "height": 137.15,
  "width": "98.378%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "1.95%",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "layout": "vertical",
    "width": 408,
    "height": 90,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "layout": "absolute",
      "width": 408,
      "height": 90,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": 90,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 0,
        "borderRadius": 9,
        "shadow": false,
        "contentOpaque": false,
        "top": "-1.37%",
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "paddingTop": 0,
        "scrollBarVisible": "always",
        "overflow": "visible",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "right": "0%",
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "layout": "vertical",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 201,
              "height": 200,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "shadow": false,
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
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
          "verticalAlign": "middle",
          "layout": "vertical",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 201,
              "height": 200,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "shadow": false,
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
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
          "verticalAlign": "middle",
          "layout": "vertical",
          "width": 94,
          "height": 90,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "gap": 0,
          "borderRadius": 0,
          "contentOpaque": false,
          "shadow": false,
          "minHeight": 1,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "width": 63,
            "height": 63,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "verticalAlign": "middle",
              "mode": "push",
              "width": 201,
              "height": 200,
              "maxHeight": 63,
              "transparencyActive": false,
              "borderSize": 0,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "shadow": false,
              "maxWidth": 63,
              "top": "0%",
              "minHeight": 1,
              "cursor": "hand",
              "paddingBottom": 0,
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "verticalAlign": "top",
            "layout": "absolute",
            "height": 21,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "gap": 10,
            "borderRadius": 0,
            "contentOpaque": false,
            "shadow": false,
            "minHeight": 1,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "overflow": "scroll",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "paddingTop": 0,
              "fontColor": "#FFFFFF",
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
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "fontWeight": "normal",
              "shadow": false,
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "paddingLeft": 0,
              "backgroundOpacity": 0,
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "paddingTop": 0,
              "fontColor": "#FFFF00",
              "left": "0%"
             }
            ]
           }
          ]
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 6)",
          "iconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 8)",
          "iconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 9)",
          "iconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 11)",
          "iconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 14)",
          "iconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1FB96738_3C7E_733E_41C6_983EE3914862",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 17)",
          "iconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 19)",
          "iconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 20)",
          "iconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8_rollover.png"
         },
         {
          "class": "IconButton",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "mode": "push",
          "width": 42,
          "height": 57,
          "maxHeight": 57,
          "transparencyActive": false,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "click": "this.mainPlayList.set('selectedIndex', 22)",
          "iconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29.png",
          "maxWidth": 42,
          "shadow": false,
          "minHeight": 1,
          "cursor": "hand",
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29",
          "paddingTop": 0,
          "rollOverIconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29_rollover.png"
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
    "layout": "horizontal",
    "height": 42,
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "bottom",
      "layout": "horizontal",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
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
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "maxWidth": 84,
        "shadow": false,
        "minHeight": 1,
        "cursor": "hand",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "paddingTop": 0
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "layout": "horizontal",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_71C7C7ED_7FD2_E9D7_4170_C42954483082",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "top",
        "layout": "absolute",
        "width": 27,
        "height": 27,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "left",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "width": 27,
          "height": 27,
          "maxHeight": 509,
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "scaleMode": "fit_inside",
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "minHeight": 1,
          "paddingBottom": 0,
          "shadow": false,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "paddingTop": 0,
          "right": "-1.96%"
         },
         {
          "class": "Image",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "height": "100%",
          "maxHeight": 509,
          "width": "100%",
          "borderSize": 0,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "scaleMode": "fit_inside",
          "shadow": false,
          "maxWidth": 509,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "minHeight": 1,
          "visible": false,
          "paddingBottom": 0,
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
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
      "verticalAlign": "top",
      "layout": "absolute",
      "height": 42,
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
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
  "layout": "absolute",
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
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
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "layout": "absolute",
    "width": 38.1,
    "height": "99.332%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
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
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "left": 14,
    "scrollBarOpacity": 0.5,
    "children": [
     {
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
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "shadow": false,
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "paddingTop": 0,
      "left": "0%"
     },
     {
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
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "maxWidth": 108,
      "top": "0%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "paddingTop": 0,
      "right": "-2.13%"
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "layout": "absolute",
    "width": 1638,
    "height": 335,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
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
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
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
      "verticalAlign": "middle",
      "mode": "push",
      "width": 35,
      "height": 35,
      "maxHeight": 108,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "shadow": false,
      "maxWidth": 108,
      "top": "0.1%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "paddingTop": 0,
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
  "layout": "absolute",
  "paddingRight": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
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
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "borderRadius": 0,
    "scaleMode": "fit_outside",
    "shadow": false,
    "top": 0,
    "click": "eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "minHeight": 1,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingTop": 0,
    "left": -0.04,
    "verticalAlign": "middle"
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "layout": "vertical",
    "height": "88.587%",
    "width": "60.736%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 4,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "top": "2.62%",
    "minHeight": 1,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "18.69%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "bottom",
      "layout": "horizontal",
      "height": "10.152%",
      "width": "92.083%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
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
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "top",
      "layout": "absolute",
      "height": "1.764%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "7.327%",
      "width": "99.94%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "86.667%",
        "width": "99.901%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 6,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.55%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
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
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
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
            "paddingLeft": 0,
            "backgroundOpacity": 0,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "height": "97.297%",
          "maxHeight": 300,
          "width": "10.549%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
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
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
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
            "paddingLeft": 0,
            "backgroundOpacity": 0,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "height": "97.297%",
          "width": "46.753%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
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
          "paddingLeft": 0,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
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
            "paddingLeft": 0,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "1.227%",
      "width": "99.858%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
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
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "4.417%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 5,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "13.477%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "14.091%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "39.063%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "15.139%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "7.276%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "97.67%",
        "width": "83.008%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "2.454%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
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
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "6.937%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 4,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "62.5%",
        "width": "13.505%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "12.891%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "67.857%",
        "width": "54.618%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
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
      "class": "Container",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "height": "5.834%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "gap": 10,
      "borderRadius": 0,
      "contentOpaque": false,
      "shadow": false,
      "minHeight": 1,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "verticalAlign": "middle",
        "layout": "horizontal",
        "height": "100%",
        "width": "33.984%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "gap": 10,
        "borderRadius": 0,
        "contentOpaque": false,
        "shadow": false,
        "minHeight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
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
          "paddingLeft": 0,
          "backgroundOpacity": 0,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
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
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "top",
    "layout": "absolute",
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
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
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
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
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "shadow": false,
      "maxWidth": 72,
      "top": "23.74%",
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "backgroundOpacity": 0,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "paddingTop": 0,
      "left": "3.02%"
     }
    ]
   }
  ]
 }
], 
 "class": "Player",
 "verticalAlign": "top",
 "layout": "absolute",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "contentOpaque": false,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_91F2721D_8077_4F22_41B8_10C1C2177858.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)"
})