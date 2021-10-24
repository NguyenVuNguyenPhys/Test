TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
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
   "id": "Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
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
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "mapLocations": [
   {
    "x": 262.97,
    "map": {
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_BC8E2140_AB58_64EC_41B6_0D6A85AAD76A",
       "map": {
        "offsetY": 0,
        "x": 794.71,
        "width": 31,
        "y": 195.7,
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
        "x": 794.71,
        "y": 195.7,
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
        "x": 744.47,
        "width": 31,
        "y": 197.77,
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
        "x": 744.47,
        "y": 197.77,
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
        "x": 248.75,
        "width": 28,
        "y": 101.8,
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
        "x": 248.75,
        "y": 101.8,
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
        "x": 298.84,
        "width": 23,
        "y": 117.76,
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
        "x": 298.84,
        "y": 117.76,
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
        "x": 335.85,
        "width": 29,
        "y": 128.84,
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
        "x": 335.85,
        "y": 128.84,
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
        "x": 378.85,
        "width": 26.99,
        "y": 147.83,
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
        "x": 378.85,
        "y": 147.83,
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
        "x": 420.81,
        "width": 25.92,
        "y": 165.78,
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
        "x": 420.81,
        "y": 165.78,
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
        "x": 461.81,
        "width": 24.85,
        "y": 185.66,
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
        "x": 461.81,
        "y": 185.66,
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
        "x": 512.72,
        "width": 27,
        "y": 203.83,
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
        "x": 512.72,
        "y": 203.83,
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
        "x": 548.7,
        "width": 27,
        "y": 178.79,
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
        "x": 548.7,
        "y": 178.79,
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
        "x": 537.76,
        "width": 27,
        "y": 112.81,
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
        "x": 537.76,
        "y": 112.81,
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
        "x": 579.8,
        "width": 27,
        "y": 199.77,
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
        "x": 579.8,
        "y": 199.77,
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
        "x": 634.76,
        "width": 27,
        "y": 199.77,
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
        "x": 634.76,
        "y": 199.77,
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
        "x": 679.39,
        "width": 27,
        "y": 200.8,
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
        "x": 679.39,
        "y": 200.8,
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
        "x": 715.96,
        "width": 27,
        "y": 198.73,
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
        "x": 715.96,
        "y": 198.73,
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
        "x": 582.75,
        "width": 27,
        "y": 357.79,
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
        "x": 582.75,
        "y": 357.79,
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
        "x": 567.76,
        "width": 27,
        "y": 320.78,
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
        "x": 567.76,
        "y": 320.78,
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
        "x": 572.78,
        "width": 27,
        "y": 275.79,
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
        "x": 572.78,
        "y": 275.79,
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
        "x": 574.77,
        "width": 27,
        "y": 253.7,
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
        "x": 574.77,
        "y": 253.7,
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
        "x": 474.82,
        "width": 27,
        "y": 304.82,
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
        "x": 474.82,
        "y": 304.82,
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
        "x": 503.85,
        "width": 27,
        "y": 287.76,
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
        "x": 503.85,
        "y": 287.76,
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
        "x": 545.81,
        "width": 27,
        "y": 286.72,
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
        "x": 545.81,
        "y": 286.72,
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
      }
     ],
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#97004E",
     "minimumZoomFactor": 1,
     "width": 1021,
     "id": "map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
     "height": 652,
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
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "maximumZoomFactor": 1,
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside"
    },
    "y": 114.95,
    "angle": 114.15,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A19A2932_B09B_8216_41DF_445911865AF5); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.2,
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
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
  "partial": false,
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
  "id": "ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer",
  "viewerArea": "this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3F",
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
 {
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_A1BEB977_B09B_821E_41AB_34EF53B77DCC); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.06,
        "yaw": 2.66,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_A1B7D984_B09B_82F2_41C6_48CAF389D25E); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.74,
        "yaw": -179.81,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_A0613C03_B09B_81F5_41A3_B186CB418D87); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.78,
        "yaw": 179.91,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_A0654BF4_B09B_8613_41CF_2CD5F465261B); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.98,
        "yaw": 1.93,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_A0469B9B_B09B_8615_41C2_19F928D25936); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.04,
        "yaw": -179.87,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_A040EBA9_B09B_8635_41C8_22215721AEA1); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.5,
        "yaw": -1.54,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_A1A20C6A_B09B_8236_41D6_250B8E0630BD); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.01,
        "yaw": -177.15,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_A1B87C78_B09B_8212_41E0_B921D796502B); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -1.42,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_A1E51A07_B09B_81FD_41A5_94C855B7F242); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.08,
        "yaw": -179.79,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A1D199F0_B09B_8212_41BB_2BB609CF30F9); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": 5.64,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_A110AA69_B09B_8635_41D8_2370B9D2D329); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -91.86,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A135FA9A_B09B_8617_41BE_6E822803DD2B); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": 11.96,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A1243A82_B09B_86F7_41D9_1DD0AA354055); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.24,
        "yaw": 163.21,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_A06BBBE5_B09B_863D_41DA_333EBBDE59CD); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.23,
        "yaw": -168.2,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A0561BC7_B09B_867D_41DA_421E957A36DA); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.92,
        "yaw": -36.3,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A051ABD6_B09B_861F_41D4_1C7B5C92ABB7); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.36,
        "yaw": 30.75,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A1DB59D7_B09B_821E_41C1_E37DB33603D6); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.5,
        "yaw": 130.87,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_A074FC21_B09B_8235_41AC_E50EE10124A7); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.23,
        "yaw": -138.38,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_A18AEC31_B09B_8212_41D0_ED86D9D04756); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": -1.2,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A07ADC12_B09B_8216_41C6_F0DA6AEB9121); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.12,
        "yaw": 78.56,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A1719AEF_B09B_860E_41D9_F7315D6D4CAE); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.95,
        "yaw": 1.16,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A17FEAE0_B09B_8632_41D4_733F19E6761B); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.75,
        "yaw": -179.89,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_A1802C40_B09B_8272_41E4_21282DAA2F22); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.14,
        "yaw": 0.64,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_A196EC4E_B09B_820E_41D4_B2FE4749A401); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.47,
        "yaw": 167.51,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_A190794E_B09B_820E_41E5_E14492E3A9BC); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.95,
        "yaw": 0.65,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_A194B940_B09B_8272_41E2_BFE9B3E3D62E); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.14,
        "yaw": 176.12,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_A2966B0C_B09B_87F2_41BD_9924DF9F95B9); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.08,
        "yaw": 178.92,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_A284EAFE_B09B_860E_41B5_CAC226A0ECEC); this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.12,
        "yaw": 0.43,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_A05C1BB9_B09B_8615_41B0_198ACE6D06CD); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.1,
        "yaw": 0.3,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
  "mapLocations": [
   {
    "x": 635.45,
    "map": {
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_BE74A0ED_B031_FD0A_41D3_8BEFA6263EC5",
       "map": {
        "offsetY": 0,
        "x": 617.95,
        "width": 35,
        "y": 163.95,
        "height": 33.76,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 17,
           "url": "media/map_BEC3E759_B032_630D_417F_0A4FF28AE967_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 617.95,
        "y": 163.95,
        "class": "HotspotMapOverlayImage",
        "width": 35,
        "height": 33.76,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 35,
           "url": "media/map_BEC3E759_B032_630D_417F_0A4FF28AE967_HS_0.png",
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
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "minimumZoomFactor": 0.5,
     "width": 683,
     "id": "map_BEC3E759_B032_630D_417F_0A4FF28AE967",
     "height": 436,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "thumbnailUrl": "media/map_BEC3E759_B032_630D_417F_0A4FF28AE967_t.png",
     "image": {
      "levels": [
       {
        "height": 436,
        "width": 683,
        "url": "media/map_BEC3E759_B032_630D_417F_0A4FF28AE967.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 218,
        "width": 341,
        "url": "media/map_BEC3E759_B032_630D_417F_0A4FF28AE967_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.1,
     "label": "oie_png",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside"
    },
    "y": 180.83,
    "angle": -80.13,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A1CBE9A0_B09B_8232_41BF_45B54955E150); this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -172.45,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_A1C3F9BA_B09B_8216_4197_130EAA4B8CB7); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.21,
        "yaw": -20.33,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A1B2A992_B09B_8216_41E0_1F3F39CBF100); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.93,
        "yaw": 101.34,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
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
  "partial": false,
  "vfov": 180
 },
 {
  "movementMode": "constrained",
  "id": "ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814MapPlayer",
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "minWidth": 1,
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
   "paddingLeft": 0,
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
   "width": 683,
   "borderRadius": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarLeft": 0,
   "progressBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 1,
   "progressRight": 0,
   "playbackBarOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "2.42%",
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "visible": false,
   "playbackBarHeadBorderSize": 0,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814",
   "playbackBarBottom": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowColor": "#000000",
   "progressBarOpacity": 1,
   "right": "10.62%"
  },
  "class": "MapPlayer"
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A035EB6F_B09B_860E_41D8_A2997C0BB1BD); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.05,
        "yaw": -93.19,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A039CB60_B09B_8632_41CB_8E98FB3EE4D6); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.25,
        "yaw": 155.68,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_A03FAB51_B09B_8612_41D3_B431DC1B65E5); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.11,
        "yaw": 37.47,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A04ADB8B_B09B_86F5_41D8_9EEFBA86E097); this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.16,
        "yaw": 4.5,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_A0301B7E_B09B_860F_41E2_AB2EBDE20C98); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.19,
        "yaw": -162.77,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A1496AB3_B09B_8616_41A5_6FC9291A70D6); this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.18,
        "yaw": -36.03,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_A15ADAC3_B09B_8676_41D1_14B5E6F26FC4); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.21,
        "yaw": 26.17,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_A16CAAD1_B09B_8612_41D2_B6F129D7F5A5); this.mainPlayList.set('selectedIndex', 19)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.06,
        "yaw": 163.47,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
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
  "partial": false,
  "vfov": 180
 },
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
 {
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A1AD7C5B_B09B_8216_41C5_ABB332D5CECF); this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.22,
        "yaw": -179.2,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A2A99B1A_B09B_8616_41E5_696DC2771633); this.mainPlayList.set('selectedIndex', 21)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.65,
        "yaw": -178.92,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_A1A50969_B09B_8232_41E3_A54C29159FD7); this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.82,
        "yaw": -178.42,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_A1AA495B_B09B_8216_41D4_F6ABAEF15224); this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9,
        "yaw": 23.25,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
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
  "partial": false,
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
  "class": "Panorama",
  "cardboardMenu": "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
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
  "frames": [
   {
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_A10B6A37_B09B_861D_41E5_D3BF14C369A6); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.68,
        "yaw": -166.65,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_A11F2A50_B09B_8613_41E1_1D7FE0B7B058); this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 6.47,
        "yaw": -6.22,
        "class": "HotspotPanoramaOverlayImage",
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
        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_A1F79A1F_B09B_860D_41BB_C36D1D6EEB20); this.mainPlayList.set('selectedIndex', 21)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 8.15,
        "yaw": 87.5,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
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
  "partial": false,
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
    "id": "PanoramaPlayListItem_A07468F9_B09B_8215_419A_CA611F099DC6",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07468F9_B09B_8215_419A_CA611F099DC6, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_A073D8FA_B09B_8217_41C3_D78BB74C582F",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A073D8FA_B09B_8217_41C3_D78BB74C582F, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_A073A8FA_B09B_8217_41D5_BBE25188EC9B",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A073A8FA_B09B_8217_41D5_BBE25188EC9B, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_A07308FB_B09B_8215_41BC_92026EF311C4",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07308FB_B09B_8215_41BC_92026EF311C4, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_A072C8FB_B09B_8215_41B3_F7C7BAD91664",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A072C8FB_B09B_8215_41B3_F7C7BAD91664, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_A07298FC_B09B_8213_41E4_543034287C89",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07298FC_B09B_8213_41E4_543034287C89, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_A07268FD_B09B_820D_41D2_D3F4314FB1F6",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07268FD_B09B_820D_41D2_D3F4314FB1F6, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_A07238FD_B09B_820D_41E0_1E9BB52E59E3",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07238FD_B09B_820D_41E0_1E9BB52E59E3, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_A07188FE_B09B_820F_41E1_EC120C8F2B7B",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07188FE_B09B_820F_41E1_EC120C8F2B7B, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "id": "PanoramaPlayListItem_A07158FE_B09B_820F_4166_98A3FEC7593C",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07158FE_B09B_820F_4166_98A3FEC7593C, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "id": "PanoramaPlayListItem_A07138FF_B09B_820D_41C5_6A4AD0DFEF93",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A07138FF_B09B_820D_41C5_6A4AD0DFEF93, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "id": "PanoramaPlayListItem_A0709900_B09B_83F3_41DB_5524042A1F4B",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A0709900_B09B_83F3_41DB_5524042A1F4B, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "id": "PanoramaPlayListItem_A0706901_B09B_83F5_41D0_27BC9A13AB66",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A0706901_B09B_83F5_41D0_27BC9A13AB66, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "id": "PanoramaPlayListItem_A0703901_B09B_83F5_41B5_17FC9BE54080",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A0703901_B09B_83F5_41B5_17FC9BE54080, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "id": "PanoramaPlayListItem_A18FA902_B09B_83F7_41E4_825FD1AE1C51",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18FA902_B09B_83F7_41E4_825FD1AE1C51, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "id": "PanoramaPlayListItem_A18F7903_B09B_83F5_41D9_E9B715B6042E",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18F7903_B09B_83F5_41D9_E9B715B6042E, this.ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814MapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "id": "PanoramaPlayListItem_A18ED903_B09B_83F5_41E5_FACB30FC23DE",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18ED903_B09B_83F5_41E5_FACB30FC23DE, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "id": "PanoramaPlayListItem_A18EA904_B09B_83F3_41CE_71EDA98D73F9",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18EA904_B09B_83F3_41CE_71EDA98D73F9, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "id": "PanoramaPlayListItem_A18E7904_B09B_83F3_41DE_0C96CB165399",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18E7904_B09B_83F3_41DE_0C96CB165399, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "id": "PanoramaPlayListItem_A18DD905_B09B_83FD_41AE_AA772F5BEBFC",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18DD905_B09B_83FD_41AE_AA772F5BEBFC, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "id": "PanoramaPlayListItem_A18DA906_B09B_83FF_41E0_A6BA0344D317",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18DA906_B09B_83FF_41E0_A6BA0344D317, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "id": "PanoramaPlayListItem_A18D0906_B09B_83FF_41D7_AD23A2547B84",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18D0906_B09B_83FF_41D7_AD23A2547B84, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "id": "PanoramaPlayListItem_A18CF907_B09B_83FD_41D5_10E2353D9331",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A18CF907_B09B_83FD_41D5_10E2353D9331, this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
 {
  "id": "playList_A07538F8_B09B_8213_41E5_154D07426CED",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer",
    "media": "this.map_BC8E1140_AB58_64EC_41C4_FB6F6B9FB084",
    "class": "MapPlayListItem",
    "begin": "this.ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3FMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_BEC3E759_B032_630D_417F_0A4FF28AE967",
 {
  "id": "playList_A074C8F8_B09B_8213_41E0_8DEC872114D2",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814MapPlayer",
    "media": "this.map_BEC3E759_B032_630D_417F_0A4FF28AE967",
    "class": "MapPlayListItem",
    "begin": "this.ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814MapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_A18C1908_B09B_83F3_41E2_084E39FE5FDF",
 {
  "id": "camera_A19A2932_B09B_8216_41DF_445911865AF5",
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
  "id": "camera_A194B940_B09B_8272_41E2_BFE9B3E3D62E",
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
  "id": "camera_A190794E_B09B_820E_41E5_E14492E3A9BC",
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
  "id": "camera_A1AA495B_B09B_8216_41D4_F6ABAEF15224",
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
  "id": "camera_A1A50969_B09B_8232_41E3_A54C29159FD7",
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
  "id": "camera_A1BEB977_B09B_821E_41AB_34EF53B77DCC",
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
  "id": "camera_A1B7D984_B09B_82F2_41C6_48CAF389D25E",
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
  "id": "camera_A1B2A992_B09B_8216_41E0_1F3F39CBF100",
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
  "id": "camera_A1CBE9A0_B09B_8232_41BF_45B54955E150",
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
  "id": "camera_A1C3F9BA_B09B_8216_4197_130EAA4B8CB7",
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
  "id": "camera_A1DB59D7_B09B_821E_41C1_E37DB33603D6",
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
  "id": "camera_A1D199F0_B09B_8212_41BB_2BB609CF30F9",
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
  "id": "camera_A1E51A07_B09B_81FD_41A5_94C855B7F242",
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
  "id": "camera_A1F79A1F_B09B_860D_41BB_C36D1D6EEB20",
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
  "id": "camera_A10B6A37_B09B_861D_41E5_D3BF14C369A6",
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
  "id": "camera_A11F2A50_B09B_8613_41E1_1D7FE0B7B058",
  "initialPosition": {
   "yaw": 143.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A110AA69_B09B_8635_41D8_2370B9D2D329",
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
  "id": "camera_A1243A82_B09B_86F7_41D9_1DD0AA354055",
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
  "id": "camera_A135FA9A_B09B_8617_41BE_6E822803DD2B",
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
  "id": "camera_A1496AB3_B09B_8616_41A5_6FC9291A70D6",
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
  "id": "camera_A15ADAC3_B09B_8676_41D1_14B5E6F26FC4",
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
  "id": "camera_A16CAAD1_B09B_8612_41D2_B6F129D7F5A5",
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
  "id": "camera_A17FEAE0_B09B_8632_41D4_733F19E6761B",
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
  "id": "camera_A1719AEF_B09B_860E_41D9_F7315D6D4CAE",
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
  "id": "camera_A284EAFE_B09B_860E_41B5_CAC226A0ECEC",
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
  "id": "camera_A2966B0C_B09B_87F2_41BD_9924DF9F95B9",
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
  "id": "camera_A2A99B1A_B09B_8616_41E5_696DC2771633",
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
  "id": "camera_A03FAB51_B09B_8612_41D3_B431DC1B65E5",
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
  "id": "camera_A039CB60_B09B_8632_41CB_8E98FB3EE4D6",
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
  "id": "camera_A035EB6F_B09B_860E_41D8_A2997C0BB1BD",
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
  "id": "camera_A0301B7E_B09B_860F_41E2_AB2EBDE20C98",
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
  "id": "camera_A04ADB8B_B09B_86F5_41D8_9EEFBA86E097",
  "initialPosition": {
   "yaw": -153.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A0469B9B_B09B_8615_41C2_19F928D25936",
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
  "id": "camera_A040EBA9_B09B_8635_41C8_22215721AEA1",
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
  "id": "camera_A05C1BB9_B09B_8615_41B0_198ACE6D06CD",
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
  "id": "camera_A0561BC7_B09B_867D_41DA_421E957A36DA",
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
  "id": "camera_A051ABD6_B09B_861F_41D4_1C7B5C92ABB7",
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
  "id": "camera_A06BBBE5_B09B_863D_41DA_333EBBDE59CD",
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
  "id": "camera_A0654BF4_B09B_8613_41CF_2CD5F465261B",
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
  "id": "camera_A0613C03_B09B_81F5_41A3_B186CB418D87",
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
  "id": "camera_A07ADC12_B09B_8216_41C6_F0DA6AEB9121",
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
  "id": "camera_A074FC21_B09B_8235_41AC_E50EE10124A7",
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
  "id": "camera_A18AEC31_B09B_8212_41D0_ED86D9D04756",
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
  "id": "camera_A1802C40_B09B_8272_41E4_21282DAA2F22",
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
  "id": "camera_A196EC4E_B09B_820E_41D4_B2FE4749A401",
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
  "id": "camera_A1AD7C5B_B09B_8216_41C5_ABB332D5CECF",
  "initialPosition": {
   "yaw": -16.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_A1A20C6A_B09B_8236_41D6_250B8E0630BD",
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
  "id": "camera_A1B87C78_B09B_8212_41E0_B921D796502B",
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
  "paddingLeft": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "progressBottom": 0,
  "bottom": "0%",
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
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
  "paddingLeft": 0,
  "paddingRight": 0,
  "class": "Container",
  "width": "98.794%",
  "borderRadius": 0,
  "gap": 3,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "left",
  "height": "96.96%",
  "minWidth": 1,
  "contentOpaque": false,
  "minHeight": 1,
  "shadow": false,
  "overflow": "hidden",
  "visible": false,
  "paddingBottom": 0,
  "bottom": "0.12%",
  "backgroundOpacity": 0,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "layout": "absolute",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": 235.1,
    "borderRadius": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "height": "99.327%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "top": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "absolute",
    "backgroundOpacity": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 145,
      "width": 181.7,
      "borderRadius": 0,
      "height": 71,
      "transparencyActive": false,
      "borderSize": 0,
      "horizontalAlign": "center",
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "maxWidth": 378,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "paddingTop": 0,
      "left": "2.47%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": 1582,
    "borderRadius": 9,
    "gap": 4,
    "scrollBarWidth": 10,
    "height": 496,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "top": "0.06%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "absolute",
    "backgroundOpacity": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "verticalAlign": "top",
    "children": [
     {
      "toolTipFontWeight": "normal",
      "toolTipFontSize": 12,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadWidth": 6,
      "progressBorderRadius": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderSize": 0,
      "minWidth": 683,
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
      "paddingLeft": 0,
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
      "height": 449,
      "width": 703,
      "borderRadius": 10,
      "progressLeft": 0,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingTop": 4,
      "playbackBarBorderSize": 0,
      "progressHeight": 10,
      "playbackBarHeadHeight": 15,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "borderSize": 0,
      "playbackBarLeft": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "minHeight": 436,
      "progressRight": 0,
      "playbackBarOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "top": 0,
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "visible": false,
      "playbackBarHeadBorderSize": 0,
      "progressOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "progressBottom": 2,
      "progressBarBackgroundColorDirection": "vertical",
      "id": "MapViewer",
      "playbackBarBottom": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipShadowHorizontalLength": 0,
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
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 145,
      "width": 70,
      "borderRadius": 0,
      "height": 70,
      "transparencyActive": false,
      "borderSize": 0,
      "horizontalAlign": "center",
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "maxWidth": 145,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "paddingTop": 0,
      "left": "1.16%",
      "verticalAlign": "middle"
     },
     "this.ViewerAreaLabeled_A0943A64_B036_6D3B_41DE_2C3B6F2D0814"
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "class": "Container",
  "width": "100%",
  "borderRadius": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "height": 275.05,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "contentOpaque": false,
  "minHeight": 1,
  "shadow": false,
  "overflow": "scroll",
  "paddingBottom": 0,
  "bottom": "0.87%",
  "backgroundOpacity": 0,
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "scrollBarColor": "#000000",
  "layout": "vertical",
  "paddingTop": 0,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "verticalAlign": "bottom",
  "children": [
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "97.739%",
    "borderRadius": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "height": 181,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": 564,
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "height": 181,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": 564,
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "height": 167,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "top": "2.21%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
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
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
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
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
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
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
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
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "minWidth": 1,
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "maxWidth": 126,
              "minHeight": 1,
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
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
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
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
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
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": 564,
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "height": 167,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "top": "2.15%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
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
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": "100%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "86.188%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "top": "5.47%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "left": "0%",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 300,
              "borderRadius": 0,
              "height": 300,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           }
          ]
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "borderRadius": 0,
          "gap": 0,
          "scrollBarWidth": 10,
          "height": 156,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "contentOpaque": false,
          "minHeight": 1,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "layout": "vertical",
          "backgroundOpacity": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 126,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "IconButton",
              "mode": "push",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "transparencyActive": false,
              "borderSize": 0,
              "horizontalAlign": "center",
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "minWidth": 1,
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "maxWidth": 126,
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "shadow": false,
              "cursor": "hand",
              "backgroundOpacity": 0,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "paddingTop": 0,
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
              "paddingRight": 0,
              "class": "Image",
              "maxHeight": 126,
              "width": 126,
              "borderRadius": 0,
              "height": 126,
              "borderSize": 0,
              "horizontalAlign": "center",
              "minWidth": 1,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "maxWidth": 126,
              "scaleMode": "fit_inside",
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "backgroundOpacity": 0,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "paddingTop": 0,
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Container",
            "width": "100%",
            "borderRadius": 0,
            "gap": 10,
            "scrollBarWidth": 10,
            "height": 42,
            "scrollBarMargin": 2,
            "borderSize": 0,
            "horizontalAlign": "left",
            "minWidth": 1,
            "contentOpaque": false,
            "minHeight": 1,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "layout": "absolute",
            "backgroundOpacity": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "scrollBarColor": "#000000",
            "paddingTop": 0,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingLeft": 0,
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
              "shadow": false,
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "backgroundOpacity": 0,
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
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
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "97.913%",
    "borderRadius": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "height": 77,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "bottom",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "IconButton",
        "mode": "push",
        "maxHeight": 84,
        "width": 70,
        "borderRadius": 0,
        "height": 70,
        "transparencyActive": false,
        "borderSize": 0,
        "horizontalAlign": "center",
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "minWidth": 1,
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "maxWidth": 84,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "cursor": "hand",
        "bottom": "7.35%",
        "backgroundOpacity": 0,
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "paddingTop": 0,
        "left": "2.45%",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": 54,
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "height": 54,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "left",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "absolute",
        "backgroundOpacity": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "top",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "maxWidth": 509,
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "paddingTop": 0,
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 509,
          "width": 54,
          "borderRadius": 0,
          "height": 54,
          "borderSize": 0,
          "horizontalAlign": "center",
          "minWidth": 1,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "maxWidth": 509,
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
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
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "33.33%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "height": "100%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     }
    ]
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "class": "Container",
  "width": "100%",
  "paddingRight": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
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
  "top": "0%",
  "overflow": "scroll",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "left": "0%",
  "verticalAlign": "middle",
  "children": [
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Image",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "scaleMode": "fit_outside",
    "minHeight": 1,
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "backgroundOpacity": 0,
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "paddingTop": 0,
    "left": "0%",
    "verticalAlign": "middle"
   },
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "95.4%",
    "borderRadius": 0,
    "gap": 3,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "49.24%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "layout": "vertical",
    "backgroundOpacity": 0,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "2.31%",
    "verticalAlign": "middle",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "91.466%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "10.817%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "65.789%",
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "100%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "height": "0.613%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "gap": 6,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 49,
          "width": "43.969%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 49,
            "width": "92.63%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "paddingTop": 0,
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
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.52%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [],
      "class": "Container",
      "maxHeight": 49,
      "width": "95.22%",
      "paddingRight": 0,
      "gap": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "height": "12.46%",
      "minWidth": 1,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0.55,
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "11.131%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 45,
          "width": "98.485%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": "13.57%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 243,
          "width": "97.98%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "39.005%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "94.66%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "6.977%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 300,
          "width": "94%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       }
      ],
      "scrollBarOpacity": 0.5
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "67.082%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "97.61%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "11.389%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "98.99%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "41.415%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "99.792%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "29.099%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "97.52%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "paddingTop": 0,
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
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "100%",
    "borderRadius": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "left",
    "height": "12.935%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "top": "0%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "absolute",
    "backgroundOpacity": 0,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "0%",
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "mode": "push",
      "maxHeight": 72,
      "width": 62,
      "borderRadius": 0,
      "height": 58,
      "transparencyActive": false,
      "borderSize": 0,
      "horizontalAlign": "center",
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "minWidth": 1,
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "maxWidth": 72,
      "minHeight": 1,
      "top": "23.74%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "paddingTop": 0,
      "left": "3.02%",
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "95.4%",
    "borderRadius": 0,
    "gap": 3,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "49.24%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "layout": "vertical",
    "backgroundOpacity": 0,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "left": "2.31%",
    "verticalAlign": "middle",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "91.379%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "10.82%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 61,
        "width": "47.17%",
        "borderRadius": 0,
        "height": "47.5%",
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "100%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "height": "0.613%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "69.5%",
        "borderRadius": 0,
        "gap": 6,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "10.79%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "99.123%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "8.63%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "98.889%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 49,
          "width": "46.891%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "paddingTop": 0,
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
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.52%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "backgroundColor": [],
      "class": "Container",
      "maxHeight": 49,
      "width": "95.22%",
      "paddingRight": 0,
      "gap": 3,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "height": "12.5%",
      "minWidth": 1,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0.55,
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "8.714%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 45,
          "width": "81.25%",
          "borderRadius": 0,
          "height": "95.238%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": "11.212%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 243,
          "width": "91.13%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "21.881%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "97.93%",
          "borderRadius": 0,
          "height": "97.62%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "maxWidth": 408,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "4.973%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 300,
          "width": "100%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "19.078%",
        "borderRadius": 0,
        "gap": 9,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "86.73%",
          "borderRadius": 0,
          "height": "85.714%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ],
      "scrollBarOpacity": 0.5
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "93.798%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "88.522%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "33.333%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "maxWidth": 734,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "97.61%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "3.07%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": 726,
        "borderRadius": 0,
        "height": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "99.914%",
      "borderRadius": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "8.534%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "77.193%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "maxWidth": 117,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "6.897%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 222,
          "width": "85.612%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "maxWidth": 222,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "40.316%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "98.98%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "maxWidth": 459,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "95.69%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "12.46%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "53.351%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "64%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "paddingTop": 0,
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
    "paddingLeft": 0,
    "paddingRight": 0,
    "class": "Container",
    "width": "63.993%",
    "borderRadius": 0,
    "gap": 6,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "center",
    "height": "80.657%",
    "minWidth": 1,
    "contentOpaque": false,
    "minHeight": 1,
    "shadow": false,
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "backgroundOpacity": 0,
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "scrollBarColor": "#000000",
    "layout": "vertical",
    "paddingTop": 0,
    "left": "17.25%",
    "verticalAlign": "middle",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "5.77%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 61,
        "width": "79.087%",
        "borderRadius": 0,
        "height": "68.085%",
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "maxWidth": 500,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "left",
      "height": "0.12%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "absolute",
      "backgroundOpacity": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "100%",
        "borderRadius": 0,
        "gap": 0,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "9.882%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "80.769%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 300,
          "width": "9.88%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 300,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 300,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "right",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "maxWidth": 300,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ],
          "scrollBarOpacity": 0.5
         },
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Container",
          "maxHeight": 49,
          "width": "52.993%",
          "borderRadius": 0,
          "gap": 10,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "borderSize": 0,
          "horizontalAlign": "center",
          "height": "100%",
          "minWidth": 1,
          "maxWidth": 1000,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "layout": "horizontal",
          "backgroundOpacity": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "middle",
          "children": [
           {
            "paddingLeft": 0,
            "paddingRight": 0,
            "class": "Image",
            "maxHeight": 49,
            "width": "100%",
            "borderRadius": 0,
            "height": "100%",
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "maxWidth": 1000,
            "minWidth": 1,
            "minHeight": 1,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "paddingTop": 0,
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
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "1.23%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "20%",
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "100%",
      "borderRadius": 0,
      "gap": 5,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.178%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "36.784%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "99.515%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "width": "12.412%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 243,
          "width": "97.78%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "maxWidth": 258,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "18.943%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "93.13%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "66.075%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "99.764%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "maxWidth": 800,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 2,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "4.213%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 1000,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "95.45%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "10.118%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 300,
          "width": "82.14%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "right",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "32.594%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "92.89%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "1.35%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Image",
        "maxHeight": 2,
        "width": "100%",
        "borderRadius": 0,
        "height": "18.18%",
        "borderSize": 0,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "maxWidth": 726,
        "minWidth": 1,
        "minHeight": 1,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "33.925%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "92.12%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 300,
        "width": "8.471%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "maxWidth": 300,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 300,
          "width": "89.8%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "maxWidth": 300,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ],
        "scrollBarOpacity": 0.5
       },
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "17.96%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "93.98%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "Container",
      "maxHeight": 49,
      "width": "99.44%",
      "borderRadius": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "borderSize": 0,
      "horizontalAlign": "center",
      "height": "4.17%",
      "minWidth": 1,
      "contentOpaque": false,
      "minHeight": 1,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "layout": "horizontal",
      "backgroundOpacity": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingLeft": 0,
        "paddingRight": 0,
        "class": "Container",
        "maxHeight": 49,
        "width": "56.984%",
        "borderRadius": 0,
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "borderSize": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "minWidth": 1,
        "contentOpaque": false,
        "minHeight": 1,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "layout": "horizontal",
        "backgroundOpacity": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingLeft": 0,
          "paddingRight": 0,
          "class": "Image",
          "maxHeight": 49,
          "width": "99.78%",
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "maxWidth": 1000,
          "minWidth": 1,
          "minHeight": 1,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "paddingTop": 0,
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
 },
 {
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "minWidth": 1,
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
  "paddingLeft": 0,
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
  "height": 449,
  "width": 703,
  "borderRadius": 0,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingTop": 4,
  "playbackBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 1,
  "progressRight": 0,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": "2.72%",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBottom": 2,
  "progressBarBackgroundColorDirection": "vertical",
  "id": "ViewerAreaLabeled_A1EBCCCE_B09D_820E_41C9_93CCD83A4B3F",
  "playbackBarBottom": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": "1.57%",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "progressBarOpacity": 1
 }
], 
 "paddingLeft": 0,
 "class": "Player",
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "width": "100%",
 "height": "100%",
 "minWidth": 20,
 "scripts": {
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "minHeight": 20,
 "contentOpaque": false,
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_A07538F8_B09B_8213_41E5_154D07426CED.set('selectedIndex', 0); this.playList_A074C8F8_B09B_8213_41E0_8DEC872114D2.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
})