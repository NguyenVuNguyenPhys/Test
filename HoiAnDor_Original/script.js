TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "partial": false,
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
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
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_86EFD516_8827_A5C2_41CD_7615C568F5FF); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayImage",
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
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "fontFamily": "Arial",
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "class": "Menu",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedBackgroundColor": "#202020",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
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
  "mapLocations": [
   {
    "x": 310.47,
    "y": 133.23,
    "class": "PanoramaMapLocation",
    "angle": 115.94,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_8633A8ED_8821_6C46_41D3_FD763A705482",
     "height": 652,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_t.png",
     "image": {
      "levels": [
       {
        "height": 652,
        "class": "ImageResourceLevel",
        "width": 1021,
        "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482.png"
       },
       {
        "height": 326,
        "class": "ImageResourceLevel",
        "width": 510,
        "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_lq.png",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.05,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_8633D8ED_8821_6C46_41DA_590DC1520BED",
       "map": {
        "offsetY": 0,
        "x": 299.65,
        "width": 21.5,
        "y": 122.15,
        "height": 21.92,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_46_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "x": 299.65,
        "y": 122.15,
        "class": "HotspotMapOverlayImage",
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_46.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8633C8ED_8821_6C46_41B5_E280224F8FFB",
       "map": {
        "offsetY": 0,
        "x": 344.45,
        "width": 21,
        "y": 141.55,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_47_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "x": 344.45,
        "y": 141.55,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_47.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8633E8ED_8821_6C46_41D2_BD5A882BA683",
       "map": {
        "offsetY": 0,
        "x": 391.55,
        "width": 21,
        "y": 160.65,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_48_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "x": 391.55,
        "y": 160.65,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_48.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863008EE_8821_6C42_41DD_44C15EDD8C2A",
       "map": {
        "offsetY": 0,
        "x": 442.3,
        "width": 21,
        "y": 183.55,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_49_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "x": 442.3,
        "y": 183.55,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_49.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863028EE_8821_6C42_41B3_1A6FB9C734DB",
       "map": {
        "offsetY": 0,
        "x": 502.25,
        "width": 21,
        "y": 202.7,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_50_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "x": 502.25,
        "y": 202.7,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_50.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863058EE_8821_6C42_41D1_6FD9CDD2D815",
       "map": {
        "offsetY": 0,
        "x": 535.65,
        "width": 21,
        "y": 216.95,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_51_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "x": 535.65,
        "y": 216.95,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_51.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863048EE_8821_6C42_41A6_D832EC1EFD8A",
       "map": {
        "offsetY": 0,
        "x": 600.3,
        "width": 21,
        "y": 247.45,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_52_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "x": 600.3,
        "y": 247.45,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_52.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863078EE_8821_6C42_41D0_E141C3E12091",
       "map": {
        "offsetY": 0,
        "x": 624.6,
        "width": 21,
        "y": 207.65,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_53_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "x": 624.6,
        "y": 207.65,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_53.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863098EE_8821_6C42_41D2_AE7968995C4F",
       "map": {
        "offsetY": 0,
        "x": 623.45,
        "width": 21,
        "y": 147,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_54_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "x": 623.45,
        "y": 147,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_54.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8630B8EE_8821_6C42_41C7_B0D40C9B3A03",
       "map": {
        "offsetY": 0,
        "x": 674.8,
        "width": 21,
        "y": 239.2,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_55_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "x": 674.8,
        "y": 239.2,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_55.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8630A8EE_8821_6C42_41B8_9C9C5FA42E5F",
       "map": {
        "offsetY": 0,
        "x": 736.15,
        "width": 21,
        "y": 238.4,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_56_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "x": 736.15,
        "y": 238.4,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_56.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8630C8EE_8821_6C42_41CD_DE3CBBD6FE18",
       "map": {
        "offsetY": 0,
        "x": 800.95,
        "width": 21,
        "y": 239.2,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_57_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "x": 800.95,
        "y": 239.2,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_57.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8630F8EE_8821_6C42_41CF_65B6CA6D4A81",
       "map": {
        "offsetY": 0,
        "x": 846.6,
        "width": 21,
        "y": 239.2,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_58_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "x": 846.6,
        "y": 239.2,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_58.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863108EE_8821_6C42_41BB_82F5CF54EF0A",
       "map": {
        "offsetY": 0,
        "x": 887.4,
        "width": 21,
        "y": 241.85,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_59_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "image": {
        "x": 887.4,
        "y": 241.85,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_59.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863138EE_8821_6C42_41CF_B932C3610554",
       "map": {
        "offsetY": 0,
        "x": 935.65,
        "width": 21,
        "y": 240.5,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_60_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "image": {
        "x": 935.65,
        "y": 240.5,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_60.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863148EE_8821_6C42_41B3_3D154BCE456B",
       "map": {
        "offsetY": 0,
        "x": 617.1,
        "width": 21,
        "y": 299.1,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_61_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "image": {
        "x": 617.1,
        "y": 299.1,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_61.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863178EE_8821_6C42_41DE_4AF150AFF589",
       "map": {
        "offsetY": 0,
        "x": 664.75,
        "width": 21,
        "y": 305.3,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_62_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "image": {
        "x": 664.75,
        "y": 305.3,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_62.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863168EE_8821_6C42_41C9_F9F667FD9510",
       "map": {
        "offsetY": 0,
        "x": 663.35,
        "width": 21,
        "y": 332.65,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_63_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "image": {
        "x": 663.35,
        "y": 332.65,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_63.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_863188EE_8821_6C42_41D7_58BC1975365A",
       "map": {
        "offsetY": 0,
        "x": 659.1,
        "width": 21,
        "y": 375.15,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_64_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "image": {
        "x": 659.1,
        "y": 375.15,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_64.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8631A8EF_8821_6C42_41DC_A6F213182913",
       "map": {
        "offsetY": 0,
        "x": 673.45,
        "width": 21,
        "y": 423.65,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_65_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "image": {
        "x": 673.45,
        "y": 423.65,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_65.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8631D8EF_8821_6C42_41CA_5232892BF747",
       "map": {
        "offsetY": 0,
        "x": 625.45,
        "width": 21,
        "y": 331.1,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_66_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "image": {
        "x": 625.45,
        "y": 331.1,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_66.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8631F8EF_8821_6C42_41D3_4FEB98DBF9F8",
       "map": {
        "offsetY": 0,
        "x": 586.2,
        "width": 21,
        "y": 344.45,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_67_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "image": {
        "x": 586.2,
        "y": 344.45,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_67.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8631E8EF_8821_6C42_41AF_47FB132ED3F5",
       "map": {
        "offsetY": 0,
        "x": 559.1,
        "width": 21,
        "y": 360.35,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_68_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "image": {
        "x": 559.1,
        "y": 360.35,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_8633A8ED_8821_6C46_41D3_FD763A705482_HS_68.png"
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
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMin": 60,
     "partial": false,
     "class": "Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_86FDB543_8827_A442_41C0_DB1F8D09C0A8); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayImage",
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_86F6E553_8827_A442_41BD_B2431982392B); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -179.81,
           "class": "HotspotPanoramaOverlayImage",
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
     "pitch": 0,
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
     "mapLocations": [
      {
       "x": 356.03,
       "y": 152.86,
       "class": "PanoramaMapLocation",
       "angle": 108.43,
       "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
      }
     ],
     "label": "C02",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMin": 60,
        "partial": false,
        "class": "Panorama",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_87CE967A_8827_A442_41D6_3EB5EB92A5D9); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "yaw": 179.91,
              "class": "HotspotPanoramaOverlayImage",
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_87BC8661_8827_A47E_41DB_B8A4FC033193); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "yaw": 1.93,
              "class": "HotspotPanoramaOverlayImage",
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
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
        "mapLocations": [
         {
          "x": 403.09,
          "y": 172.15,
          "class": "PanoramaMapLocation",
          "angle": -70.14,
          "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
         }
        ],
        "label": "C03",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "hfovMax": 120,
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
           "hfovMin": 60,
           "partial": false,
           "class": "Panorama",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_870E4562_8827_A442_41D0_34E5B26F4CE4); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "yaw": -179.87,
                 "class": "HotspotPanoramaOverlayImage",
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
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.5,
                 "yaw": -1.53,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_87066571_8827_A45E_41D5_EDEA12BCE12D); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "yaw": -1.54,
                 "class": "HotspotPanoramaOverlayImage",
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
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
           "mapLocations": [
            {
             "x": 453.77,
             "y": 194.9,
             "class": "PanoramaMapLocation",
             "angle": 107.74,
             "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
            }
           ],
           "label": "C04",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "hfovMax": 120,
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
              "hfovMin": 60,
              "partial": false,
              "class": "Panorama",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_982A1720_8827_A5FE_41CE_0E24730F6409); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -177.15,
                    "class": "HotspotPanoramaOverlayImage",
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_98247737_8827_A5C2_41A3_92E312656576); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -1.42,
                    "class": "HotspotPanoramaOverlayImage",
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
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
              "mapLocations": [
               {
                "x": 513.69,
                "y": 214.18,
                "class": "PanoramaMapLocation",
                "angle": -68.2,
                "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
               }
              ],
              "label": "C05",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMin": 60,
                 "partial": false,
                 "class": "Panorama",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_86FA7533_8827_A5C2_41D6_3352CFE2A1C8); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -179.79,
                       "class": "HotspotPanoramaOverlayImage",
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_86E16524_8827_A5C6_41DF_C4F3BAEE5824); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 5.64,
                       "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "y": 228.44,
                   "class": "PanoramaMapLocation",
                   "angle": 109.18,
                   "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                  }
                 ],
                 "label": "C06",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMin": 60,
                    "partial": false,
                    "class": "Panorama",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_86D9D4EB_8827_A442_41D6_1B2A20C3E9C8); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -91.86,
                          "class": "HotspotPanoramaOverlayImage",
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_86D6E507_8827_A5C2_41D5_1C7F67B8B8E5); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 11.96,
                          "class": "HotspotPanoramaOverlayImage",
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_86DCB4F9_8827_A44E_41D6_59EAA5AC4D43); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 163.21,
                          "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                    "mapLocations": [
                     {
                      "x": 610.91,
                      "y": 258.07,
                      "class": "PanoramaMapLocation",
                      "angle": 25.28,
                      "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                     }
                    ],
                    "label": "C07",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "distance": 1,
                      "backwardYaw": 5.64
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMin": 60,
                       "partial": false,
                       "class": "Panorama",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_8741D5C8_8827_A44E_41B1_FA6A3A44562E); this.mainPlayList.set('selectedIndex', 22)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -172.45,
                             "class": "HotspotPanoramaOverlayImage",
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_875F65D7_8827_A442_41B8_08807F39FD7C); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -20.33,
                             "class": "HotspotPanoramaOverlayImage",
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_875405E4_8827_A447_419C_D12B17680F9E); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 101.34,
                             "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                       "mapLocations": [
                        {
                         "x": 628.49,
                         "y": 310.59,
                         "class": "PanoramaMapLocation",
                         "angle": 0,
                         "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                        }
                       ],
                       "label": "C16",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMin": 60,
                          "partial": false,
                          "class": "Panorama",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_87E0C6C0_8827_A4BE_41DD_85504DB7BAE0); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -166.65,
                                "class": "HotspotPanoramaOverlayImage",
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_980D96ED_8827_A446_41D2_14E9C6C258FE); this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -6.22,
                                "class": "HotspotPanoramaOverlayImage",
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_87F2D6DA_8827_A442_41D6_3C8A4FEF30DD); this.mainPlayList.set('selectedIndex', 21)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 87.5,
                                "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                          "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                          "mapLocations": [
                           {
                            "x": 636.99,
                            "y": 342.51,
                            "class": "PanoramaMapLocation",
                            "angle": 144.87,
                            "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                           }
                          ],
                          "label": "C23",
                          "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
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
                             "hfovMin": 60,
                             "partial": false,
                             "class": "Panorama",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_8796F62B_8827_A7C2_41D4_5A364C7E46FE); this.mainPlayList.set('selectedIndex', 20)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -178.42,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_87A13648_8827_A44E_41B9_26F09D030DB4); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 23.25,
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                             "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                             "mapLocations": [
                              {
                               "x": 597.76,
                               "y": 356.03,
                               "class": "PanoramaMapLocation",
                               "angle": 71.57,
                               "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                              }
                             ],
                             "label": "C22",
                             "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_98182706_8827_A5C2_41D8_FC498133971A); this.mainPlayList.set('selectedIndex', 21)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -178.92,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                "mapLocations": [
                                 {
                                  "x": 570.65,
                                  "y": 371.77,
                                  "class": "PanoramaMapLocation",
                                  "angle": 249.33,
                                  "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                 }
                                ],
                                "label": "C21",
                                "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                "hfovMax": 120,
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
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "yaw": 23.25,
                               "distance": 1,
                               "backwardYaw": 87.5
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
                            "panorama": {
                             "hfovMin": 60,
                             "partial": false,
                             "class": "Panorama",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_985D4765_8827_A441_41D0_6CF34D508549); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -36.03,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_986FA774_8827_A447_4184_96403E45052C); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 26.17,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_987BE784_8827_A4C7_41D6_F86D66C77AD7); this.mainPlayList.set('selectedIndex', 19)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 163.47,
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                             "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                             "mapLocations": [
                              {
                               "x": 670.6,
                               "y": 386.76,
                               "class": "PanoramaMapLocation",
                               "angle": 0,
                               "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                              }
                             ],
                             "label": "C19",
                             "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                             "hfovMax": 120,
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
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_86C974BF_8827_A4C2_41D0_D28426FD5168); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 4.5,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                         "width": 64,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.1
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_86C304CD_8827_A446_41D6_5E0A8EC09F9A); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -162.77,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.19,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 82,
                                         "class": "ImageResourceLevel",
                                         "width": 129,
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
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "y": 343.99,
                                  "class": "PanoramaMapLocation",
                                  "angle": 163.35,
                                  "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                 }
                                ],
                                "label": "C18",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "hfovMax": 120,
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
                                  "panorama": {
                                   "hfovMin": 60,
                                   "partial": false,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_8727A59D_8827_A4C6_41CD_BBB997FA7EAB); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -93.19,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_872AD58E_8827_A4C2_41D4_B91F257DCF4F); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 155.68,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_8713557F_8827_A442_41AC_14F4377E4E8F); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 37.47,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                                   "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                   "mapLocations": [
                                    {
                                     "x": 676.22,
                                     "y": 316.87,
                                     "class": "PanoramaMapLocation",
                                     "angle": 0,
                                     "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                    }
                                   ],
                                   "label": "C17",
                                   "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMin": 60,
                                      "partial": false,
                                      "class": "Panorama",
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_86B87495_8827_A4C1_41D4_B1758600C199); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -138.38,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_86B3E4A3_8827_A4C1_41DD_0629245E7E15); this.mainPlayList.set('selectedIndex', 10)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -1.2,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_86B614B1_8827_A4DE_41D1_1F718B63A2B0); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 78.56,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                      "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                      "mapLocations": [
                                       {
                                        "x": 686.27,
                                        "y": 250.53,
                                        "class": "PanoramaMapLocation",
                                        "angle": 91.91,
                                        "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                       }
                                      ],
                                      "label": "C10",
                                      "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMin": 60,
                                         "partial": false,
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_9886F7A1_8827_A4FE_41E0_C447339167FD); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -168.2,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_98747793_8827_A4C1_41E0_809360B6A182); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -36.3,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_989157B0_8827_A4DE_41D2_D7DF52AD2FF0); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 30.75,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                         "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                         "mapLocations": [
                                          {
                                           "x": 636.25,
                                           "y": 219.13,
                                           "class": "PanoramaMapLocation",
                                           "angle": 180.55,
                                           "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                          }
                                         ],
                                         "label": "C08",
                                         "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                           "yaw": -36.3,
                                           "distance": 1,
                                           "backwardYaw": -138.38
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "hfovMin": 60,
                                            "partial": false,
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_86C7E4DC_8827_A446_41D2_87E4BA663772); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": 130.87,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                            "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                            "mapLocations": [
                                             {
                                              "x": 634.92,
                                              "y": 158.55,
                                              "class": "PanoramaMapLocation",
                                              "angle": 35.54,
                                              "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                             }
                                            ],
                                            "label": "C09",
                                            "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                            "hfovMax": 120,
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
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": 30.75,
                                           "distance": 1,
                                           "backwardYaw": 11.96
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -138.38,
                                        "distance": 1,
                                        "backwardYaw": -36.3
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMin": 60,
                                         "partial": false,
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_9842E756_8827_A442_41D1_1BD6471BADBA); this.mainPlayList.set('selectedIndex', 9)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 1.16,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_9830F747_8827_A442_41DB_DDDAFB1062B4); this.mainPlayList.set('selectedIndex', 11)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.89,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                         "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                         "mapLocations": [
                                          {
                                           "x": 747.51,
                                           "y": 249.79,
                                           "class": "PanoramaMapLocation",
                                           "angle": -86.82,
                                           "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                          }
                                         ],
                                         "label": "C11",
                                         "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "hfovMin": 60,
                                            "partial": false,
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_87DAD68E_8827_A4C2_41DC_2C82144594F0); this.mainPlayList.set('selectedIndex', 10)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": 0.64,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_87D486A7_8827_A4C2_41DB_445D293C6C40); this.mainPlayList.set('selectedIndex', 12)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": 167.51,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                            "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                            "mapLocations": [
                                             {
                                              "x": 812.45,
                                              "y": 250.53,
                                              "class": "PanoramaMapLocation",
                                              "angle": -88.57,
                                              "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                             }
                                            ],
                                            "label": "C12",
                                            "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                              "yaw": 0.64,
                                              "distance": 1,
                                              "backwardYaw": -179.89
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "hfovMin": 60,
                                               "partial": false,
                                               "class": "Panorama",
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "rollOverDisplay": false,
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
                                                        "width": 64,
                                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": -17.08
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_877E7600_8827_A7BF_41DF_CABCDC7C488A); this.mainPlayList.set('selectedIndex', 13)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "yaw": 0.65,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 8.95,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 73,
                                                        "class": "ImageResourceLevel",
                                                        "width": 129,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_876165F2_8827_A443_41D5_7BDD53733E9B); this.mainPlayList.set('selectedIndex', 11)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "yaw": 176.12,
                                                     "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                               "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                               "mapLocations": [
                                                {
                                                 "x": 858.03,
                                                 "y": 250.53,
                                                 "class": "PanoramaMapLocation",
                                                 "angle": 86.73,
                                                 "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                                }
                                               ],
                                               "label": "C13",
                                               "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                                 "yaw": 176.12,
                                                 "distance": 1,
                                                 "backwardYaw": 167.51
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "hfovMin": 60,
                                                  "partial": false,
                                                  "class": "Panorama",
                                                  "frames": [
                                                   {
                                                    "class": "SphericPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "rollOverDisplay": false,
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_8784961D_8827_A7C6_41C0_F47866294AC9); this.mainPlayList.set('selectedIndex', 12)"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "yaw": 178.92,
                                                        "class": "HotspotPanoramaOverlayImage",
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_8788460F_8827_A7C1_41B8_805826917846); this.mainPlayList.set('selectedIndex', 14)"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "yaw": 0.43,
                                                        "class": "HotspotPanoramaOverlayImage",
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
                                                  "pitch": 0,
                                                  "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                                  "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                                  "mapLocations": [
                                                   {
                                                    "x": 898.74,
                                                    "y": 253.41,
                                                    "class": "PanoramaMapLocation",
                                                    "angle": 88.03,
                                                    "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                                   }
                                                  ],
                                                  "label": "C14",
                                                  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                                  "hfovMax": 120,
                                                  "hfov": 360,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "hfovMin": 60,
                                                     "partial": false,
                                                     "class": "Panorama",
                                                     "frames": [
                                                      {
                                                       "class": "SphericPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "rollOverDisplay": false,
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
                                                         "useHandCursor": true,
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_874B25B9_8827_A4CE_41CE_A070E4B02B31); this.mainPlayList.set('selectedIndex', 13)"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "yaw": 0.3,
                                                           "class": "HotspotPanoramaOverlayImage",
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
                                                     "pitch": 0,
                                                     "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                                     "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                                     "mapLocations": [
                                                      {
                                                       "x": 947.2,
                                                       "y": 251.93,
                                                       "class": "PanoramaMapLocation",
                                                       "angle": -86.35,
                                                       "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                                      }
                                                     ],
                                                     "label": "C15",
                                                     "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                                     "hfovMax": 120,
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
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                                    "yaw": 178.92,
                                                    "distance": 1,
                                                    "backwardYaw": 0.65
                                                   }
                                                  ],
                                                  "vfov": 180
                                                 },
                                                 "yaw": 0.65,
                                                 "distance": 1,
                                                 "backwardYaw": 178.92
                                                }
                                               ],
                                               "vfov": 180
                                              },
                                              "yaw": 167.51,
                                              "distance": 1,
                                              "backwardYaw": 176.12
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "yaw": -179.89,
                                           "distance": 1,
                                           "backwardYaw": 0.64
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                           "yaw": 1.16,
                                           "distance": 1,
                                           "backwardYaw": -1.2
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -1.2,
                                        "distance": 1,
                                        "backwardYaw": 1.16
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "yaw": 78.56,
                                        "distance": 1,
                                        "backwardYaw": 37.47
                                       }
                                      ],
                                      "vfov": 180
                                     },
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
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "yaw": -93.19,
                                     "distance": 1,
                                     "backwardYaw": 101.34
                                    }
                                   ],
                                   "vfov": 180
                                  },
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
                                "hfovMin": 60,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_873DA5AB_8827_A4C2_41D8_715DC6DB41B3); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -179.2,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                "cardboardMenu": "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
                                "mapLocations": [
                                 {
                                  "x": 684.05,
                                  "y": 434.27,
                                  "class": "PanoramaMapLocation",
                                  "angle": 147.84,
                                  "map": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482"
                                 }
                                ],
                                "label": "C20",
                                "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                "hfovMax": 120,
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
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": -20.33,
                         "distance": 1,
                         "backwardYaw": 163.21
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                         "yaw": 101.34,
                         "distance": 1,
                         "backwardYaw": -93.19
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 163.21,
                      "distance": 1,
                      "backwardYaw": -20.33
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "yaw": 11.96,
                      "distance": 1,
                      "backwardYaw": 30.75
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
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "distance": 1,
                "backwardYaw": -1.54
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
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true
 },
 {
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeight": 10,
   "maxHeight": 218,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "minWidth": 342,
   "playbackBarHeadShadow": true,
   "maxWidth": 342,
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
   "class": "ViewerArea",
   "playbackBarHeadBorderRadius": 0,
   "toolTipOpacity": 1,
   "toolTipFontStyle": "normal",
   "progressBackgroundColorRatios": [
    0
   ],
   "width": 342,
   "toolTipBorderSize": 1,
   "progressLeft": 0,
   "toolTipPaddingLeft": 6,
   "height": 218,
   "toolTipBackgroundColor": "#F6F6F6",
   "borderRadius": 10,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "borderSize": 0,
   "progressHeight": 10,
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "paddingLeft": 0,
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
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer"
 },
 {
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -175.84,
   "pitch": 3.87
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -175.31,
   "pitch": -3.25
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -162.78,
   "pitch": 5.39
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 176.32,
   "pitch": -2.81
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -177.92,
   "pitch": -0.89
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -179.16,
   "pitch": -4.17
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 6.48,
   "pitch": 4.56
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
 {
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 2.88
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
    "id": "PanoramaPlayListItem_8691E465_8827_A446_41B0_835542229CB4",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8691E465_8827_A446_41B0_835542229CB4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_86900466_8827_A442_41CB_A96EE7F81F3D",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86900466_8827_A442_41CB_A96EE7F81F3D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_8690B466_8827_A442_41C9_EE09E61522A7",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8690B466_8827_A442_41C9_EE09E61522A7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_8690E467_8827_A442_41CF_9738DA62A10E",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8690E467_8827_A442_41CF_9738DA62A10E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_86971467_8827_A442_41DD_BDDC9FC53785",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86971467_8827_A442_41DD_BDDC9FC53785, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_86974468_8827_A44E_41D7_EF947836AE80",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86974468_8827_A44E_41D7_EF947836AE80, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_8697E468_8827_A44E_41DB_735F1116F94E",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8697E468_8827_A44E_41DB_735F1116F94E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_86961469_8827_A44E_41DD_A47A12629C7C",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86961469_8827_A44E_41DD_A47A12629C7C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_86965469_8827_A44E_41D8_009DF80396B3",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86965469_8827_A44E_41D8_009DF80396B3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "id": "PanoramaPlayListItem_8696846A_8827_A442_41D6_4AE46C0C08DA",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8696846A_8827_A442_41D6_4AE46C0C08DA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "id": "PanoramaPlayListItem_8695346A_8827_A442_41D6_7F796F86B2EE",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8695346A_8827_A442_41D6_7F796F86B2EE, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "id": "PanoramaPlayListItem_8695646B_8827_A442_41C9_EE70E1C45FD5",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8695646B_8827_A442_41C9_EE70E1C45FD5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "id": "PanoramaPlayListItem_8695946B_8827_A442_41CC_5A1EA5F6026E",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8695946B_8827_A442_41CC_5A1EA5F6026E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "id": "PanoramaPlayListItem_8694346C_8827_A446_41E0_06277F438BC4",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8694346C_8827_A446_41E0_06277F438BC4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "id": "PanoramaPlayListItem_8694546C_8827_A446_41DC_EED3F9B20A0F",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8694546C_8827_A446_41DC_EED3F9B20A0F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "id": "PanoramaPlayListItem_8694846D_8827_A446_41D3_54B2FD76EDA3",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8694846D_8827_A446_41D3_54B2FD76EDA3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "id": "PanoramaPlayListItem_86AB346D_8827_A446_41D7_DCC36FCAB2A9",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86AB346D_8827_A446_41D7_DCC36FCAB2A9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "id": "PanoramaPlayListItem_86AB646E_8827_A442_41D4_FD65D9D650B8",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86AB646E_8827_A442_41D4_FD65D9D650B8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "id": "PanoramaPlayListItem_86AB946E_8827_A442_41DA_07E18D8FD71A",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86AB946E_8827_A442_41DA_07E18D8FD71A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "id": "PanoramaPlayListItem_86ABC46F_8827_A442_41D6_8B8D9FB7FA3B",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86ABC46F_8827_A442_41D6_8B8D9FB7FA3B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "id": "PanoramaPlayListItem_86AA746F_8827_A441_41D4_A8613BD2BA6E",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86AA746F_8827_A441_41D4_A8613BD2BA6E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "id": "PanoramaPlayListItem_86AA8470_8827_A45E_41C3_4035AD885C7A",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86AA8470_8827_A45E_41C3_4035AD885C7A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "id": "PanoramaPlayListItem_86A92471_8827_A45E_41D8_8919993C3FD9",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_86A92471_8827_A45E_41D8_8919993C3FD9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_8633A8ED_8821_6C46_41D3_FD763A705482",
 {
  "class": "PlayList",
  "id": "playList_86912464_8827_A446_41D3_A21594D88A2F",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_8633A8ED_8821_6C46_41D3_FD763A705482",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_86A94471_8827_A45E_41D9_CB35551E9BA6",
 {
  "id": "camera_86B87495_8827_A4C1_41D4_B1758600C199",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86B3E4A3_8827_A4C1_41DD_0629245E7E15",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.84,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86B614B1_8827_A4DE_41D1_1F718B63A2B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86C974BF_8827_A4C2_41D0_D28426FD5168",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_86C304CD_8827_A446_41D6_5E0A8EC09F9A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86C7E4DC_8827_A446_41D2_87E4BA663772",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86D9D4EB_8827_A442_41D6_1B2A20C3E9C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86DCB4F9_8827_A44E_41D6_59EAA5AC4D43",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.67,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86D6E507_8827_A5C2_41D5_1C7F67B8B8E5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86EFD516_8827_A5C2_41CD_7615C568F5FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.19,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86E16524_8827_A5C6_41DF_C4F3BAEE5824",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86FA7533_8827_A5C2_41D6_3352CFE2A1C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86FDB543_8827_A442_41C0_DB1F8D09C0A8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_86F6E553_8827_A442_41BD_B2431982392B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_870E4562_8827_A442_41D0_34E5B26F4CE4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.09,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87066571_8827_A45E_41D5_EDEA12BCE12D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8713557F_8827_A442_41AC_14F4377E4E8F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_872AD58E_8827_A4C2_41D4_B91F257DCF4F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.23,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8727A59D_8827_A4C6_41CD_BBB997FA7EAB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.66,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_873DA5AB_8827_A4C2_41D8_715DC6DB41B3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_874B25B9_8827_A4CE_41CE_A070E4B02B31",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.57,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8741D5C8_8827_A44E_41B1_FA6A3A44562E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_875F65D7_8827_A442_41B8_08807F39FD7C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_875405E4_8827_A447_419C_D12B17680F9E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_876165F2_8827_A443_41D5_7BDD53733E9B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.49,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_877E7600_8827_A7BF_41DF_CABCDC7C488A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8788460F_8827_A7C1_41B8_805826917846",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8784961D_8827_A7C6_41C0_F47866294AC9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_8796F62B_8827_A7C2_41D4_5A364C7E46FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87A13648_8827_A44E_41B9_26F09D030DB4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87BC8661_8827_A47E_41DB_B8A4FC033193",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.34,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87CE967A_8827_A442_41D6_3EB5EB92A5D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87DAD68E_8827_A4C2_41DC_2C82144594F0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87D486A7_8827_A4C2_41DB_445D293C6C40",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87E0C6C0_8827_A4BE_41DD_85504DB7BAE0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_87F2D6DA_8827_A442_41D6_3C8A4FEF30DD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_980D96ED_8827_A446_41D2_14E9C6C258FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_98182706_8827_A5C2_41D8_FC498133971A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_982A1720_8827_A5FE_41CE_0E24730F6409",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_98247737_8827_A5C2_41A3_92E312656576",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.46,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_9830F747_8827_A442_41DB_DDDAFB1062B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_9842E756_8827_A442_41D1_1BD6471BADBA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_985D4765_8827_A441_41D0_6CF34D508549",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_986FA774_8827_A447_4184_96403E45052C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_987BE784_8827_A4C7_41D6_F86D66C77AD7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_98747793_8827_A4C1_41E0_809360B6A182",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.62,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_9886F7A1_8827_A4FE_41E0_C447339167FD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "camera_989157B0_8827_A4DE_41D2_D7DF52AD2FF0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
  "class": "ViewerArea",
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
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "progressRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
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
  "paddingLeft": 0,
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
  "class": "Container",
  "paddingRight": 0,
  "layout": "vertical",
  "width": "98.378%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "height": 137.15,
  "verticalAlign": "middle",
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
  "bottom": "1.95%",
  "backgroundOpacity": 0,
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "layout": "vertical",
    "width": 408,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 90,
    "verticalAlign": "top",
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
    "id": "Container_736476C8_7FB6_ABDE_41D1_5E39493F51E1",
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "absolute",
      "width": 408,
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 90,
      "verticalAlign": "top",
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
      "id": "Container_719CE22C_7FD3_AA56_41DE_5478E06EA77E",
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "borderRadius": 9,
        "scrollBarWidth": 10,
        "height": 90,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 0,
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "-1.37%",
        "overflow": "visible",
        "paddingBottom": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "always",
        "left": "0%",
        "right": "0%",
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "vertical",
          "width": 94,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": 63,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "class": "IconButton",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "maxHeight": 746,
              "width": 63,
              "borderRadius": 0,
              "height": 63,
              "borderSize": 0,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 747,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "vertical",
          "width": 94,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": 63,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "class": "IconButton",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "borderRadius": 0,
              "height": 63,
              "borderSize": 0,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "vertical",
          "width": 94,
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "height": 90,
          "verticalAlign": "middle",
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": 63,
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 63,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "class": "IconButton",
              "paddingRight": 0,
              "mode": "push",
              "maxHeight": 63,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "maxHeight": 63,
              "width": 63,
              "borderRadius": 0,
              "height": 63,
              "borderSize": 0,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 63,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "class": "Container",
            "paddingRight": 0,
            "layout": "absolute",
            "width": "100%",
            "borderRadius": 0,
            "scrollBarWidth": 10,
            "height": 21,
            "verticalAlign": "top",
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
            "paddingLeft": 0,
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "children": [
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "class": "Label",
              "paddingRight": 0,
              "fontSize": 9,
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
              "paddingLeft": 0,
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         }
        ],
        "scrollBarOpacity": 0.5
       }
      ]
     }
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "layout": "horizontal",
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "height": 42,
    "verticalAlign": "middle",
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
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "bottom",
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
      "id": "Container_7242AA16_7FD2_BA75_41D1_9F0ED0D1784D",
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "class": "IconButton",
        "paddingRight": 0,
        "mode": "push",
        "maxHeight": 84,
        "width": 35,
        "borderRadius": 0,
        "height": 35,
        "transparencyActive": false,
        "borderSize": 0,
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "top",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "absolute",
        "width": 27,
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "height": 27,
        "verticalAlign": "top",
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 509,
          "width": 27,
          "borderRadius": 0,
          "height": 27,
          "borderSize": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "maxWidth": 509,
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "horizontalAlign": "center",
          "top": "0%",
          "paddingBottom": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "paddingLeft": 0,
          "paddingTop": 0,
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 509,
          "width": "100%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "minWidth": 1,
          "click": "this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "left": "0%",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "absolute",
      "width": "33.33%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "height": 42,
      "verticalAlign": "top",
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
      "id": "Container_725F54EC_7FD2_EFD5_41DF_F39BC04D4F80",
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     }
    ]
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "layout": "absolute",
  "width": "98.794%",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
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
  "paddingLeft": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "layout": "absolute",
    "width": 38.1,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "borderSize": 0,
    "gap": 10,
    "height": "99.332%",
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
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "children": [
     {
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "borderRadius": 0,
      "height": 35,
      "transparencyActive": false,
      "borderSize": 0,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "0%",
      "verticalAlign": "middle"
     },
     {
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "borderRadius": 0,
      "height": 35,
      "transparencyActive": false,
      "borderSize": 0,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "right": "-2.13%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "layout": "absolute",
    "width": 1638,
    "borderRadius": 9,
    "scrollBarWidth": 10,
    "height": 335,
    "verticalAlign": "top",
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
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "children": [
     "this.MapViewer",
     {
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 108,
      "width": 35,
      "borderRadius": 0,
      "height": 35,
      "transparencyActive": false,
      "borderSize": 0,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "1.17%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "layout": "absolute",
  "width": "100%",
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
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
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "minWidth": 1,
    "click": "eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "scaleMode": "fit_outside",
    "minHeight": 1,
    "top": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingLeft": 0,
    "paddingTop": 0,
    "left": -0.04,
    "verticalAlign": "middle"
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "layout": "vertical",
    "width": "60.736%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "borderSize": 0,
    "gap": 4,
    "height": "88.587%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "top": "2.62%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "paddingTop": 0,
    "left": "18.69%",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "92.083%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "bottom",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "maxHeight": 61,
        "width": "79.193%",
        "borderRadius": 0,
        "height": "73.333%",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "scaleMode": "fit_inside",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "absolute",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "99.94%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "99.901%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "borderSize": 0,
        "gap": 6,
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "horizontal",
          "maxHeight": 300,
          "width": "10.55%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "borderSize": 0,
          "gap": 10,
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "maxHeight": 108,
            "width": "95.833%",
            "borderRadius": 0,
            "height": "96%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "scaleMode": "fit_inside",
            "maxWidth": 108,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "paddingLeft": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "horizontal",
          "maxHeight": 300,
          "width": "10.549%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "borderSize": 0,
          "gap": 10,
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "maxHeight": 108,
            "width": "95.83%",
            "borderRadius": 0,
            "height": "96%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "scaleMode": "fit_inside",
            "maxWidth": 108,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "paddingLeft": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "layout": "horizontal",
          "width": "46.753%",
          "borderRadius": 0,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "borderSize": 0,
          "gap": 10,
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
          "paddingLeft": 0,
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "maxHeight": 40,
            "width": "99.138%",
            "borderRadius": 0,
            "height": "70.59%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "scaleMode": "fit_inside",
            "maxWidth": 275,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "paddingLeft": 0,
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
      "layout": "horizontal",
      "width": "99.858%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 5,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "13.477%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "86.03%",
          "borderRadius": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "14.091%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 243,
          "width": "97.183%",
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "scaleMode": "fit_inside",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "39.063%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "99.491%",
          "borderRadius": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "scaleMode": "fit_inside",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "15.139%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 300,
          "width": 30,
          "borderRadius": 0,
          "height": "100%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "scaleMode": "fit_inside",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "83.008%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "borderSize": 0,
        "gap": 10,
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 49,
          "width": "87.799%",
          "borderRadius": 0,
          "height": "64.407%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "scaleMode": "fit_inside",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "scaleMode": "fit_inside",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "paddingLeft": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "layout": "horizontal",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 4,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "13.505%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "borderSize": 0,
        "gap": 10,
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 45,
          "width": "86.03%",
          "borderRadius": 0,
          "height": "97.14%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "scaleMode": "fit_inside",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "12.891%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 222,
          "width": "85.42%",
          "borderRadius": 0,
          "height": "83.33%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "scaleMode": "fit_inside",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "paddingLeft": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "54.618%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
        "borderSize": 0,
        "gap": 10,
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
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 41,
          "width": "83.455%",
          "borderRadius": 0,
          "height": "84.211%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "scaleMode": "fit_inside",
          "maxWidth": 459,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "paddingLeft": 0,
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
      "layout": "horizontal",
      "width": "100%",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "middle",
      "borderSize": 0,
      "gap": 10,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "layout": "horizontal",
        "width": "33.984%",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "middle",
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
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "maxHeight": 44,
          "width": "86.842%",
          "borderRadius": 0,
          "height": "70.833%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "scaleMode": "fit_inside",
          "maxWidth": 297,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "paddingLeft": 0,
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
    "class": "Container",
    "paddingRight": 0,
    "layout": "absolute",
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
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
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "paddingTop": 0,
    "left": "0%",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 72,
      "width": 31,
      "borderRadius": 0,
      "height": 29,
      "transparencyActive": false,
      "borderSize": 0,
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
      "paddingLeft": 0,
      "paddingTop": 0,
      "left": "3.02%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 }
], 
 "class": "Player",
 "layout": "absolute",
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "gap": 10,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "minWidth": 20,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "minHeight": 20,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_86912464_8827_A446_41D3_A21594D88A2F.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
})