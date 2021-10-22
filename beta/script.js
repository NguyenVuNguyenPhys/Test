TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "vfov": 180,
  "class": "Panorama",
  "cardboardMenu": {
   "fontFamily": "Arial",
   "opacity": 0.4,
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "id": "Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
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
   ]
  },
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 9.2,
        "class": "HotspotPanoramaOverlayMap",
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
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_402357EB_4E2B_2C5A_41C7_87EDCA94055E",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_B794EB43_A8FF_D121_41B6_09F9132871EE); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 9.2,
        "yaw": 2.71,
        "class": "HotspotPanoramaOverlayImage",
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
    "thumbnailUrl": "media/panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_t.jpg",
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
  "label": "C01",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "vfov": 180,
     "class": "Panorama",
     "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
     "id": "panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
     "partial": false,
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 9.06,
           "class": "HotspotPanoramaOverlayMap",
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
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2F9752_8741_B1AF_41DA_99E6463CE598",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_B61159DA_A8FF_D123_41DC_47E5129E74D0); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "hfov": 9.06,
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayImage",
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
           "hfov": 8.74,
           "class": "HotspotPanoramaOverlayMap",
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
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C2FC752_8741_B1AF_41D7_1CD62D5EEAB8",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985, this.camera_B666BA0A_A8FF_D323_41E4_534F12BF389B); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 8.74,
           "yaw": -179.81,
           "class": "HotspotPanoramaOverlayImage",
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
       "thumbnailUrl": "media/panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_t.jpg",
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
     "label": "C02",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "vfov": 180,
        "class": "Panorama",
        "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 8.78,
              "class": "HotspotPanoramaOverlayMap",
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
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_B54DD7D6_A8FF_D123_41E3_433464985C89); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "hfov": 8.78,
              "yaw": 179.91,
              "class": "HotspotPanoramaOverlayImage",
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
              "hfov": 8.98,
              "class": "HotspotPanoramaOverlayMap",
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
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60, this.camera_B544B7BC_A8FF_D167_41E3_C84323B169E0); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "hfov": 8.98,
              "yaw": 1.93,
              "class": "HotspotPanoramaOverlayImage",
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
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
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
        "label": "C03",
        "hfovMin": 60,
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
           "vfov": 180,
           "class": "Panorama",
           "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 9.04,
                 "class": "HotspotPanoramaOverlayMap",
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
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_B6D5F8FA_A8FF_D0E3_41DE_477832F55223); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "hfov": 9.04,
                 "yaw": -179.87,
                 "class": "HotspotPanoramaOverlayImage",
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
                 "hfov": 8.5,
                 "class": "HotspotPanoramaOverlayMap",
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
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_B6D85917_A8FF_D121_41E3_9D790DE783E5); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "hfov": 8.5,
                 "yaw": -1.54,
                 "class": "HotspotPanoramaOverlayImage",
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
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
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
           "label": "C04",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.87,
             "backwardYaw": 179.91,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "vfov": 180,
              "class": "Panorama",
              "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 9.01,
                    "class": "HotspotPanoramaOverlayMap",
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
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_B6C118E9_A8FF_D0E1_41A7_A7A06912198E); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 9.01,
                    "yaw": -177.15,
                    "class": "HotspotPanoramaOverlayImage",
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
                    "hfov": 9.22,
                    "class": "HotspotPanoramaOverlayMap",
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
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_B6FF38CD_A8FF_DF20_41AC_30B9A30EFBBF); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 9.22,
                    "yaw": -1.42,
                    "class": "HotspotPanoramaOverlayImage",
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
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
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
              "label": "C05",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -1.42,
                "backwardYaw": -1.54,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "vfov": 180,
                 "class": "Panorama",
                 "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "partial": false,
                 "pitch": 0,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 9.08,
                       "class": "HotspotPanoramaOverlayMap",
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
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_B6B58835_A8FF_DF61_41E4_C0F428982568); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 9.08,
                       "yaw": -179.79,
                       "class": "HotspotPanoramaOverlayImage",
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
                       "hfov": 9.22,
                       "class": "HotspotPanoramaOverlayMap",
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
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B6BE2845_A8FF_DF21_419A_4824469A5B33); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 9.22,
                       "yaw": 5.64,
                       "class": "HotspotPanoramaOverlayImage",
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
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
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
                 "label": "C06",
                 "hfovMin": 60,
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
                    "vfov": 180,
                    "class": "Panorama",
                    "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "partial": false,
                    "pitch": 0,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 9.22,
                          "class": "HotspotPanoramaOverlayMap",
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
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_B57287A3_A8FF_D161_41B1_9CE6319D250E); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 9.22,
                          "yaw": -91.86,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "hfov": 9.14,
                          "class": "HotspotPanoramaOverlayMap",
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
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B5690789_A8FF_D121_41E1_3C9658819F9D); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 9.14,
                          "yaw": 11.96,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "hfov": 9.24,
                          "class": "HotspotPanoramaOverlayMap",
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
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B567276F_A8FF_D1E1_41DA_0958CDF7D7BF); this.mainPlayList.set('selectedIndex', 15); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 9.24,
                          "yaw": 163.21,
                          "class": "HotspotPanoramaOverlayImage",
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
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
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
                    "label": "C07",
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "vfov": 180,
                       "class": "Panorama",
                       "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "partial": false,
                       "pitch": 0,
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 9.22,
                             "class": "HotspotPanoramaOverlayMap",
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
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B6F448BC_A8FF_DF60_4177_8027D9FEEF96); this.mainPlayList.set('selectedIndex', 22)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 9.22,
                             "yaw": -172.45,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 9.21,
                             "class": "HotspotPanoramaOverlayMap",
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
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B69FB884_A8FF_DF27_41DB_2D10B2192D26); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 9.21,
                             "yaw": -20.33,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 8.93,
                             "class": "HotspotPanoramaOverlayMap",
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
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B6E268A6_A8FF_DF63_41A7_920DDF27DC0A); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.93,
                             "yaw": 101.34,
                             "class": "HotspotPanoramaOverlayImage",
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
                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
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
                       "label": "C16",
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": -20.33,
                         "backwardYaw": 163.21,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "vfov": 180,
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                          "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                          "partial": false,
                          "pitch": 0,
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 9.05,
                                "class": "HotspotPanoramaOverlayMap",
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
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B6A2D824_A8FF_DF60_41A1_60A9E0C5554B); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 9.05,
                                "yaw": -93.19,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "hfov": 9.25,
                                "class": "HotspotPanoramaOverlayMap",
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
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B559C811_A8FF_DF20_41D4_1FA549E0165E); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 9.25,
                                "yaw": 155.68,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "hfov": 9.11,
                                "class": "HotspotPanoramaOverlayMap",
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
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B557C7F7_A8FF_D0E0_4180_F0B56120D2BB); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 9.11,
                                "yaw": 37.47,
                                "class": "HotspotPanoramaOverlayImage",
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
                            "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
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
                          "label": "C17",
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "vfov": 180,
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                             "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                             "partial": false,
                             "pitch": 0,
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 9.23,
                                   "class": "HotspotPanoramaOverlayMap",
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B7EE2B84_A8FF_D127_41E0_0F02B5F123F8); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.23,
                                   "yaw": -138.38,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "hfov": 9.14,
                                   "class": "HotspotPanoramaOverlayMap",
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B799EB61_A8FF_D1E1_41E1_25B75DED8705); this.mainPlayList.set('selectedIndex', 10)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.14,
                                   "yaw": -1.2,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "hfov": 9.12,
                                   "class": "HotspotPanoramaOverlayMap",
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B7FDFBA9_A8FF_D161_41C9_D7D3D3B91036); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.12,
                                   "yaw": 78.56,
                                   "class": "HotspotPanoramaOverlayImage",
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
                               "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
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
                             "label": "C10",
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "vfov": 180,
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                "partial": false,
                                "pitch": 0,
                                "hfov": 360,
                                "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 8.95,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B674AA2A_A8FF_D363_41DC_DE3B4C209594); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.95,
                                      "yaw": 1.16,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "hfov": 8.75,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B6794A4A_A8FF_D323_41C8_1BC132E2AA0D); this.mainPlayList.set('selectedIndex', 11)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.75,
                                      "yaw": -179.89,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                  "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
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
                                "label": "C11",
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "yaw": 1.16,
                                  "backwardYaw": -1.2,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                   "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 9.14,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_B74B8CB9_A8FF_D761_4193_23450DEC11CC); this.mainPlayList.set('selectedIndex', 10)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 9.14,
                                         "yaw": 0.64,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "hfov": 8.47,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B7443CA0_A8FF_D71F_41E1_7558752968DC); this.mainPlayList.set('selectedIndex', 12)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 8.47,
                                         "yaw": 167.51,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                     "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
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
                                   "label": "C12",
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "hfovMax": 120,
                                      "vfov": 180,
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                      "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                      "partial": false,
                                      "pitch": 0,
                                      "hfov": 360,
                                      "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 8.95,
                                            "class": "HotspotPanoramaOverlayMap",
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B6812855_A8FF_DF21_41CE_931C4D727D45); this.mainPlayList.set('selectedIndex', 13)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 8.95,
                                            "yaw": 0.65,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                          "maps": [
                                           {
                                            "hfov": 10.14,
                                            "class": "HotspotPanoramaOverlayMap",
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_B694E86B_A8FF_DFE1_41B3_127411D34609); this.mainPlayList.set('selectedIndex', 11)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 10.14,
                                            "yaw": 176.12,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                        "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
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
                                      "label": "C13",
                                      "hfovMin": 60,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "hfovMax": 120,
                                         "vfov": 180,
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                         "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                         "partial": false,
                                         "pitch": 0,
                                         "hfov": 360,
                                         "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                         "mapLocations": [
                                          {
                                           "x": 763.45,
                                           "y": 212.9,
                                           "class": "PanoramaMapLocation",
                                           "angle": 83.66,
                                           "map": {
                                            "class": "Map",
                                            "fieldOfViewOverlayInsideColor": "#97004E",
                                            "minimumZoomFactor": 1,
                                            "width": 1021,
                                            "id": "map_B17CD2D9_A8FA_5320_41E0_55108A545125",
                                            "height": 652,
                                            "overlays": [
                                             {
                                              "rollOverDisplay": false,
                                              "id": "overlay_B24130EF_A8FA_50E0_41C4_3FCC279E7A48",
                                              "map": {
                                               "offsetY": 0,
                                               "x": 792.94,
                                               "width": 31,
                                               "y": 196,
                                               "height": 31,
                                               "class": "HotspotMapOverlayMap",
                                               "offsetX": 0,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 15,
                                                  "class": "ImageResourceLevel",
                                                  "width": 15,
                                                  "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_HS_90_map.gif"
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
                                               "x": 792.94,
                                               "y": 196,
                                               "class": "HotspotMapOverlayImage",
                                               "width": 31,
                                               "height": 31,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 30,
                                                  "class": "ImageResourceLevel",
                                                  "width": 31,
                                                  "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_HS_90.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               }
                                              },
                                              "useHandCursor": true
                                             },
                                             {
                                              "rollOverDisplay": false,
                                              "id": "overlay_B330659B_A8FA_D121_41D6_8346E904C511",
                                              "map": {
                                               "offsetY": 0,
                                               "x": 747.95,
                                               "width": 31,
                                               "y": 196.96,
                                               "height": 31.88,
                                               "class": "HotspotMapOverlayMap",
                                               "offsetX": 0,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 15,
                                                  "class": "ImageResourceLevel",
                                                  "width": 15,
                                                  "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_HS_91_map.gif"
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
                                               "x": 747.95,
                                               "y": 196.96,
                                               "class": "HotspotMapOverlayImage",
                                               "width": 31,
                                               "height": 31.88,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 31,
                                                  "class": "ImageResourceLevel",
                                                  "width": 31,
                                                  "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_HS_91.png"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               }
                                              },
                                              "useHandCursor": true
                                             }
                                            ],
                                            "initialZoomFactor": 1,
                                            "fieldOfViewOverlayInsideOpacity": 0.6,
                                            "thumbnailUrl": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_t.png",
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 652,
                                               "class": "ImageResourceLevel",
                                               "width": 1021,
                                               "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125.png"
                                              },
                                              {
                                               "height": 326,
                                               "class": "ImageResourceLevel",
                                               "width": 510,
                                               "url": "media/map_B17CD2D9_A8FA_5320_41E0_55108A545125_lq.png",
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
                                            "scaleMode": "fit_to_height"
                                           }
                                          }
                                         ],
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 9.08,
                                               "class": "HotspotPanoramaOverlayMap",
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
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_B7B1BAEB_A8FF_D0E0_41E3_F1A4901D5ED9); this.mainPlayList.set('selectedIndex', 12)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 9.08,
                                               "yaw": 178.92,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "hfov": 9.12,
                                               "class": "HotspotPanoramaOverlayMap",
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
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_B7869B11_A8FF_D120_41B3_455037321FAF); this.mainPlayList.set('selectedIndex', 14)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 9.12,
                                               "yaw": 0.43,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                           "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
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
                                         "label": "C14",
                                         "hfovMin": 60,
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
                                            "vfov": 180,
                                            "class": "Panorama",
                                            "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                            "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                            "partial": false,
                                            "pitch": 0,
                                            "hfov": 360,
                                            "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                            "mapLocations": [
                                             {
                                              "x": 808.44,
                                              "y": 211.5,
                                              "class": "PanoramaMapLocation",
                                              "angle": 264.59,
                                              "map": "this.map_B17CD2D9_A8FA_5320_41E0_55108A545125"
                                             }
                                            ],
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "hfov": 9.1,
                                                  "class": "HotspotPanoramaOverlayMap",
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
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_B60389AE_A8FF_D163_41DB_724733896DA0); this.mainPlayList.set('selectedIndex', 13)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 9.1,
                                                  "yaw": 0.3,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                              "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
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
                                            "label": "C15",
                                            "hfovMin": 60,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                              "yaw": 0.3,
                                              "backwardYaw": 0.43,
                                              "distance": 1
                                             }
                                            ]
                                           },
                                           "yaw": 0.43,
                                           "backwardYaw": 0.3,
                                           "distance": 1
                                          }
                                         ]
                                        },
                                        "yaw": 0.65,
                                        "backwardYaw": 178.92,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                        "yaw": 176.12,
                                        "backwardYaw": 167.51,
                                        "distance": 1
                                       }
                                      ]
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
                                   ]
                                  },
                                  "yaw": -179.89,
                                  "backwardYaw": 0.64,
                                  "distance": 1
                                 }
                                ]
                               },
                               "yaw": -1.2,
                               "backwardYaw": 1.16,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "vfov": 180,
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                "partial": false,
                                "pitch": 0,
                                "hfov": 360,
                                "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 9.23,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_B70ECC3F_A8FF_D761_41E2_C0A62D333B4C); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.23,
                                      "yaw": -168.2,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "hfov": 8.92,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_B71CAC5C_A8FF_D727_41DC_2E38DC475D79); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.92,
                                      "yaw": -36.3,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "hfov": 9.36,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_B7620C6D_A8FF_D7E0_41D7_12E7D421E6A0); this.mainPlayList.set('selectedIndex', 6)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.36,
                                      "yaw": 30.75,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                  "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
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
                                "label": "C08",
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                   "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 9.5,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_B51F9753_A8FF_D121_41D9_DDF1837020F8); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 9.5,
                                         "yaw": 130.87,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                     "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
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
                                   "label": "C09",
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                     "yaw": 130.87,
                                     "backwardYaw": -168.2,
                                     "distance": 1
                                    }
                                   ]
                                  },
                                  "yaw": -168.2,
                                  "backwardYaw": 130.87,
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
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": 30.75,
                                  "backwardYaw": 11.96,
                                  "distance": 1
                                 }
                                ]
                               },
                               "yaw": -138.38,
                               "backwardYaw": -36.3,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": 78.56,
                               "backwardYaw": 37.47,
                               "distance": 1
                              }
                             ]
                            },
                            "yaw": 37.47,
                            "backwardYaw": 78.56,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "vfov": 180,
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                             "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                             "partial": false,
                             "pitch": 0,
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 9.16,
                                   "class": "HotspotPanoramaOverlayMap",
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B7C28BBB_A8FF_D161_41DF_0C61B5355231); this.mainPlayList.set('selectedIndex', 18)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.16,
                                   "yaw": 4.5,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "hfov": 9.19,
                                   "class": "HotspotPanoramaOverlayMap",
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
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_B7D7BBCB_A8FF_D121_41E1_2FF20A671D24); this.mainPlayList.set('selectedIndex', 16)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.19,
                                   "yaw": -162.77,
                                   "class": "HotspotPanoramaOverlayImage",
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
                               "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
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
                             "label": "C18",
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "vfov": 180,
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                "partial": false,
                                "pitch": 0,
                                "hfov": 360,
                                "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "hfov": 9.18,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B7A3DABD_A8FF_D361_41DC_593A95FF2B05); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.18,
                                      "yaw": -36.03,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "hfov": 9.21,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_B64F2A70_A8FF_D3FF_41BF_BF58D84CD62D); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.21,
                                      "yaw": 26.17,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "hfov": 8.06,
                                      "class": "HotspotPanoramaOverlayMap",
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
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A, this.camera_B65D2A8E_A8FF_D323_41D2_696F004BBD76); this.mainPlayList.set('selectedIndex', 19)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.06,
                                      "yaw": 163.47,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                  "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
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
                                "label": "C19",
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                  "yaw": 26.17,
                                  "backwardYaw": 4.5,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                   "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 9.22,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_6FA1504B_6081_AD32_41C3_46B9AEEC82C5",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B776EC88_A8FF_D720_41D1_98ED3D80C8D4); this.mainPlayList.set('selectedIndex', 18)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 9.22,
                                         "yaw": -179.2,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                     "thumbnailUrl": "media/panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_t.jpg",
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
                                   "label": "C20",
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "yaw": -179.2,
                                     "backwardYaw": 163.47,
                                     "distance": 1
                                    }
                                   ]
                                  },
                                  "yaw": 163.47,
                                  "backwardYaw": -179.2,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "hfovMax": 120,
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfov": 360,
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "hfov": 8.68,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_B622992A_A8FF_D163_41E1_823EF26FC09D); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 8.68,
                                         "yaw": -166.65,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "hfov": 6.47,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_B638D987_A8FF_D121_41D4_868745ECE6C4); this.mainPlayList.set('selectedIndex', 18)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 6.47,
                                         "yaw": -6.22,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "hfov": 8.15,
                                         "class": "HotspotPanoramaOverlayMap",
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
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B6351961_A8FF_D1E1_41DB_E87DD66D24D7); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 8.15,
                                         "yaw": 87.5,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                     "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
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
                                   "label": "C23",
                                   "hfovMin": 60,
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
                                      "vfov": 180,
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "partial": false,
                                      "pitch": 0,
                                      "hfov": 360,
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "hfov": 8.82,
                                            "class": "HotspotPanoramaOverlayMap",
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_B739DC21_A8FF_D761_41E1_9C1CDA85D50D); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 8.82,
                                            "yaw": -178.42,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "hfov": 9,
                                            "class": "HotspotPanoramaOverlayMap",
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
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_B72A5BFD_A8FF_D0E1_41A8_DDF95B8845B8); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 9,
                                            "yaw": 23.25,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                        "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
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
                                      "label": "C22",
                                      "hfovMin": 60,
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
                                         "vfov": 180,
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "partial": false,
                                         "pitch": 0,
                                         "hfov": 360,
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "hfov": 10.65,
                                               "class": "HotspotPanoramaOverlayMap",
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
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_B7256BE0_A8FF_D11F_41DA_13713BFEB1F5); this.mainPlayList.set('selectedIndex', 21)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 10.65,
                                               "yaw": -178.92,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                           "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
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
                                         "label": "C21",
                                         "hfovMin": 60,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                           "yaw": -178.92,
                                           "backwardYaw": -178.42,
                                           "distance": 1
                                          }
                                         ]
                                        },
                                        "yaw": -178.42,
                                        "backwardYaw": -178.92,
                                        "distance": 1
                                       }
                                      ]
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
                                   ]
                                  },
                                  "yaw": -36.03,
                                  "backwardYaw": -6.22,
                                  "distance": 1
                                 }
                                ]
                               },
                               "yaw": 4.5,
                               "backwardYaw": 26.17,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": -162.77,
                               "backwardYaw": 155.68,
                               "distance": 1
                              }
                             ]
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
                          ]
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
                        }
                       ]
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
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -91.86,
                      "backwardYaw": 5.64,
                      "distance": 1
                     }
                    ]
                   },
                   "yaw": 5.64,
                   "backwardYaw": -91.86,
                   "distance": 1
                  }
                 ]
                },
                "yaw": -177.15,
                "backwardYaw": -179.79,
                "distance": 1
               }
              ]
             },
             "yaw": -1.54,
             "backwardYaw": -1.42,
             "distance": 1
            }
           ]
          },
          "yaw": 179.91,
          "backwardYaw": -179.87,
          "distance": 1
         }
        ]
       },
       "yaw": 2.66,
       "backwardYaw": 1.93,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
       "yaw": -179.81,
       "backwardYaw": 2.71,
       "distance": 1
      }
     ]
    },
    "yaw": 2.71,
    "backwardYaw": -179.81,
    "distance": 1
   }
  ]
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
  "id": "panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
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
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadow": true,
   "minWidth": 683,
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "class": "ViewerArea",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressLeft": 0,
   "toolTipBorderRadius": 3,
   "progressBackgroundColorRatios": [
    0
   ],
   "width": 683,
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
   "paddingLeft": 0,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 10,
   "playbackBarProgressOpacity": 1,
   "minHeight": 436,
   "playbackBarOpacity": 1,
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
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "playbackBarHeadShadowVerticalLength": 0,
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
   "toolTipFontStyle": "normal"
  },
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer"
 },
 {
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
 {
  "id": "panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_4340461A_4E29_2FC5_41C8_CAB47EFB9985_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_8C2E1751_8741_B1AD_41E0_5616F1A8FE60_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_B536F706_A8FF_D123_41E3_444A8AFBD5A8",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B536F706_A8FF_D123_41E3_444A8AFBD5A8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_B5360707_A8FF_D121_41D7_7354E5C9D571",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B5360707_A8FF_D121_41D7_7354E5C9D571, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_6D44A156_6081_AFD2_41D1_E23E920BBC8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_B17CD2D9_A8FA_5320_41E0_55108A545125",
 {
  "class": "PlayList",
  "id": "playList_B52C56FC_A8FF_D0E7_41E0_D45CF58878FB",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B17CD2D9_A8FA_5320_41E0_55108A545125",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_B53C3713_A8FF_D121_41B0_B235CA88B1CC",
 {
  "id": "camera_B51F9753_A8FF_D121_41D9_DDF1837020F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B567276F_A8FF_D1E1_41DA_0958CDF7D7BF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B5690789_A8FF_D121_41E1_3C9658819F9D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.25,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B57287A3_A8FF_D161_41B1_9CE6319D250E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.36,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B544B7BC_A8FF_D167_41E3_C84323B169E0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B54DD7D6_A8FF_D123_41E3_433464985C89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B557C7F7_A8FF_D0E0_4180_F0B56120D2BB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.44,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B559C811_A8FF_DF20_41D4_1FA549E0165E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.23,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6A2D824_A8FF_DF60_41A1_60A9E0C5554B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6B58835_A8FF_DF61_41E4_C0F428982568",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.85,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6BE2845_A8FF_DF21_419A_4824469A5B33",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.14,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6812855_A8FF_DF21_41CE_931C4D727D45",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B694E86B_A8FF_DFE1_41B3_127411D34609",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.49,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B69FB884_A8FF_DF27_41DB_2D10B2192D26",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6E268A6_A8FF_DF63_41A7_920DDF27DC0A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6F448BC_A8FF_DF60_4177_8027D9FEEF96",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6FF38CD_A8FF_DF20_41AC_30B9A30EFBBF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6C118E9_A8FF_D0E1_41A7_A7A06912198E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.21,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6D5F8FA_A8FF_D0E3_41DE_477832F55223",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6D85917_A8FF_D121_41E3_9D790DE783E5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B622992A_A8FF_D163_41E1_823EF26FC09D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.55,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6351961_A8FF_D1E1_41DB_E87DD66D24D7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.75,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B638D987_A8FF_D121_41D4_868745ECE6C4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.97,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_B60389AE_A8FF_D163_41DB_724733896DA0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.57,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B61159DA_A8FF_D123_41DC_47E5129E74D0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B666BA0A_A8FF_D323_41E4_534F12BF389B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B674AA2A_A8FF_D363_41DC_DE3B4C209594",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B6794A4A_A8FF_D323_41C8_1BC132E2AA0D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B64F2A70_A8FF_D3FF_41BF_BF58D84CD62D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.5,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B65D2A8E_A8FF_D323_41D2_696F004BBD76",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7A3DABD_A8FF_D361_41DC_593A95FF2B05",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7B1BAEB_A8FF_D0E0_41E3_F1A4901D5ED9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7869B11_A8FF_D120_41B3_455037321FAF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B794EB43_A8FF_D121_41B6_09F9132871EE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.19,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B799EB61_A8FF_D1E1_41E1_25B75DED8705",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7EE2B84_A8FF_D127_41E0_0F02B5F123F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7FDFBA9_A8FF_D161_41C9_D7D3D3B91036",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7C28BBB_A8FF_D161_41DF_0C61B5355231",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.83,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_B7D7BBCB_A8FF_D121_41E1_2FF20A671D24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7256BE0_A8FF_D11F_41DA_13713BFEB1F5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B72A5BFD_A8FF_D0E1_41A8_DDF95B8845B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.5,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B739DC21_A8FF_D761_41E1_9C1CDA85D50D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B70ECC3F_A8FF_D761_41E2_C0A62D333B4C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B71CAC5C_A8FF_D727_41DC_2E38DC475D79",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 41.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B7620C6D_A8FF_D7E0_41D7_12E7D421E6A0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B776EC88_A8FF_D720_41D1_98ED3D80C8D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_B7443CA0_A8FF_D71F_41E1_7558752968DC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "camera_B74B8CB9_A8FF_D761_4193_23450DEC11CC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressLeft": 0,
  "toolTipBorderRadius": 3,
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
  "paddingLeft": 0,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "borderRadius": 0,
  "width": "100%",
  "minHeight": 50,
  "playbackBarOpacity": 1,
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
  "progressBackgroundColorDirection": "vertical",
  "bottom": "0%",
  "id": "MainViewer",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "left": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal"
 },
 {
  "paddingRight": 0,
  "class": "Container",
  "gap": 3,
  "height": "96.96%",
  "width": "98.794%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "horizontalAlign": "left",
  "borderRadius": 0,
  "minHeight": 1,
  "contentOpaque": false,
  "shadow": false,
  "overflow": "hidden",
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "class": "Container",
    "width": 235.1,
    "gap": 10,
    "height": "99.327%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "left",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "top": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "left": 14,
    "verticalAlign": "top",
    "children": [
     {
      "class": "IconButton",
      "paddingRight": 0,
      "width": 181.7,
      "height": 71,
      "mode": "push",
      "maxHeight": 145,
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "maxWidth": 378,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "left": "2.47%",
      "verticalAlign": "middle"
     }
    ]
   },
   {
    "paddingRight": 0,
    "class": "Container",
    "width": 1638,
    "gap": 4,
    "height": 436,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "left",
    "borderRadius": 9,
    "minHeight": 1,
    "contentOpaque": false,
    "top": "0.06%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "top",
    "children": [
     "this.MapViewer",
     {
      "class": "IconButton",
      "paddingRight": 0,
      "width": 70,
      "height": 70,
      "mode": "push",
      "maxHeight": 145,
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "maxWidth": 145,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "left": "1.16%",
      "verticalAlign": "middle"
     }
    ]
   }
  ]
 },
 {
  "paddingRight": 0,
  "class": "Container",
  "gap": 10,
  "height": 275.05,
  "width": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "contentOpaque": false,
  "shadow": false,
  "overflow": "scroll",
  "paddingBottom": 0,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "bottom",
  "children": [
   {
    "paddingRight": 0,
    "class": "Container",
    "gap": 10,
    "height": 181,
    "width": "97.739%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "children": [
     {
      "paddingRight": 0,
      "class": "Container",
      "width": 564,
      "gap": 10,
      "height": 181,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "width": 564,
        "gap": 10,
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "top": "2.21%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC THƯƠNG MẠI",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC THƯƠNG MẠI",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 300,
              "height": 300,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC VĂN HÓA",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC VĂN HÓA",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC SINH THÁI",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "TRỤC SINH THÁI",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "backgroundOpacity": 0,
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
        "verticalAlign": "middle"
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "width": 564,
        "gap": 10,
        "height": 167,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "top": "2.15%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "97.619%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Commercial District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Commercial District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 300,
              "height": 300,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Cultural District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Cultural District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Eco District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "Eco District",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "backgroundOpacity": 0,
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
        "verticalAlign": "middle"
       },
       {
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "86.188%",
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "top": "5.47%",
        "overflow": "scroll",
        "visible": false,
        "paddingBottom": 0,
        "shadow": false,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 19)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "ショッピングセンター",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "ショッピングセンター",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 300,
              "height": 300,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "伝統⽂化町",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "伝統⽂化町",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "backgroundOpacity": 0,
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
          "paddingRight": 0,
          "class": "Container",
          "width": 180,
          "gap": 0,
          "height": 156,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "visible",
          "paddingBottom": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "vertical",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Container",
            "width": 126,
            "gap": 10,
            "height": 126,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "visible",
            "paddingBottom": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "class": "IconButton",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "mode": "push",
              "maxHeight": 126,
              "transparencyActive": false,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 14)",
              "cursor": "hand",
              "paddingBottom": 0,
              "shadow": false,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "left": "0%",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "verticalAlign": "middle"
             },
             {
              "class": "Image",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "maxHeight": 126,
              "paddingLeft": 0,
              "borderSize": 0,
              "maxWidth": 126,
              "minWidth": 1,
              "horizontalAlign": "center",
              "borderRadius": 0,
              "minHeight": 1,
              "scaleMode": "fit_inside",
              "top": "0%",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "visible": false,
              "paddingBottom": 0,
              "shadow": false,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "left": "0%",
              "verticalAlign": "middle"
             }
            ]
           },
           {
            "paddingRight": 0,
            "class": "Container",
            "gap": 10,
            "height": 42,
            "width": "100%",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "paddingLeft": 0,
            "borderSize": 0,
            "minWidth": 1,
            "horizontalAlign": "left",
            "borderRadius": 0,
            "minHeight": 1,
            "contentOpaque": false,
            "shadow": false,
            "overflow": "scroll",
            "paddingBottom": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "layout": "absolute",
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "verticalAlign": "top",
            "children": [
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "⽣態観光区への道",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFFFF",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "backgroundOpacity": 0,
              "paddingTop": 0,
              "horizontalAlign": "center",
              "left": "0%",
              "verticalAlign": "middle"
             },
             {
              "paddingRight": 0,
              "fontSize": 18,
              "class": "Label",
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "fontFamily": "Arial",
              "paddingLeft": 0,
              "borderSize": 0,
              "text": "⽣態観光区への道",
              "minWidth": 1,
              "fontStyle": "normal",
              "borderRadius": 0,
              "minHeight": 1,
              "fontWeight": "normal",
              "shadow": false,
              "fontColor": "#FFFF00",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "backgroundOpacity": 0,
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
        "verticalAlign": "middle"
       }
      ]
     }
    ]
   },
   {
    "paddingRight": 0,
    "class": "Container",
    "gap": 10,
    "height": 77,
    "width": "97.913%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "bottom",
    "children": [
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "class": "IconButton",
        "paddingRight": 0,
        "width": 70,
        "height": 70,
        "mode": "push",
        "maxHeight": 84,
        "transparencyActive": false,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 84,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "shadow": false,
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "cursor": "hand",
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "left": "2.45%",
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "width": 54,
        "gap": 10,
        "height": 54,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "absolute",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "top",
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "maxHeight": 509,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 509,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "right": "-1.96%",
          "verticalAlign": "middle"
         },
         {
          "class": "Image",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "maxHeight": 509,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 509,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "scaleMode": "fit_inside",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "shadow": false,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "left": "0%",
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     }
    ]
   }
  ]
 },
 {
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "gap": 10,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderSize": 0,
  "width": "100%",
  "minWidth": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "children": [
   {
    "paddingRight": 0,
    "class": "Image",
    "width": "100%",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "borderRadius": 0,
    "minHeight": 1,
    "scaleMode": "fit_outside",
    "top": "0%",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "paddingBottom": 0,
    "shadow": false,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "left": "0%",
    "verticalAlign": "middle"
   },
   {
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "class": "Container",
    "gap": 3,
    "height": "49.24%",
    "width": "95.4%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "children": [
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "10.817%",
      "width": "91.466%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "65.789%",
        "maxHeight": 61,
        "width": "47.17%",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 500,
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 6,
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "100%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "98.889%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 49,
          "width": "43.969%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "92.63%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 1000,
            "scaleMode": "fit_inside",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "backgroundOpacity": 0,
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
      "class": "Container",
      "gap": 10,
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "backgroundColor": [],
      "paddingRight": 0,
      "gap": 0,
      "height": "12.46%",
      "maxHeight": 49,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "width": "95.22%",
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "11.131%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 45,
          "width": "98.485%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 117,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "width": "13.57%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "97.98%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 258,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "39.005%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "94.66%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 408,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.977%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "94%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "67.082%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 734,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 4,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "11.389%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "98.99%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 117,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 222,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "41.415%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.792%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "29.099%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "97.52%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "class": "Container",
    "gap": 10,
    "height": "12.935%",
    "width": "100%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "left",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "top": "0%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "verticalAlign": "top",
    "children": [
     {
      "class": "IconButton",
      "paddingRight": 0,
      "width": 62,
      "height": 58,
      "mode": "push",
      "maxHeight": 72,
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "maxWidth": 72,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "left": "3.02%",
      "verticalAlign": "middle"
     }
    ]
   },
   {
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "class": "Container",
    "gap": 3,
    "height": "49.24%",
    "width": "95.4%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "top": "23.14%",
    "overflow": "visible",
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "left": "2.31%",
    "children": [
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "10.82%",
      "width": "91.379%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "47.5%",
        "maxHeight": 61,
        "width": "47.17%",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 500,
        "scaleMode": "fit_inside",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "0.613%",
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 6,
        "height": "100%",
        "maxHeight": 49,
        "width": "69.5%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "10.79%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "99.123%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "8.63%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "98.889%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 49,
          "width": "46.891%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "100%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 1000,
            "scaleMode": "fit_inside",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "backgroundOpacity": 0,
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
      "class": "Container",
      "gap": 10,
      "height": "3.07%",
      "width": "99.52%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "backgroundColor": [],
      "paddingRight": 0,
      "gap": 3,
      "height": "12.5%",
      "maxHeight": 49,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "width": "95.22%",
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.55,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "8.714%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "95.238%",
          "maxHeight": 45,
          "width": "81.25%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 117,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "width": "11.212%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "91.13%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 258,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "21.881%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "97.62%",
          "maxHeight": 49,
          "width": "97.93%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 408,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "4.973%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "100%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 9,
        "height": "100%",
        "maxHeight": 49,
        "width": "19.078%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "85.714%",
          "maxHeight": 49,
          "width": "86.73%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "93.798%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "88.522%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "33.333%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 734,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "3.07%",
      "width": "97.61%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "maxHeight": 2,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 4,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "99.914%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "8.534%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "77.193%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 117,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "6.897%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 222,
          "width": "85.612%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 222,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "40.316%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "98.98%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 459,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "12.46%",
      "maxHeight": 49,
      "width": "95.69%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "53.351%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "64%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "class": "Container",
    "gap": 6,
    "height": "80.657%",
    "width": "63.993%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "minWidth": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "shadow": false,
    "overflow": "scroll",
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "left": "17.25%",
    "children": [
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "5.77%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "68.085%",
        "maxHeight": 61,
        "width": "79.087%",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 500,
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "0.12%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "absolute",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "top"
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 0,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 0,
        "height": "100%",
        "maxHeight": 49,
        "width": "100%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "9.882%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "80.769%",
            "horizontalAlign": "right",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 300,
          "width": "9.88%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 300,
            "width": "100%",
            "horizontalAlign": "right",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 300,
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "backgroundOpacity": 0,
            "paddingTop": 0,
            "verticalAlign": "middle"
           }
          ]
         },
         {
          "paddingRight": 0,
          "class": "Container",
          "gap": 10,
          "height": "100%",
          "maxHeight": 49,
          "width": "52.993%",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "minWidth": 1,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "contentOpaque": false,
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "layout": "horizontal",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "verticalAlign": "middle",
          "children": [
           {
            "paddingRight": 0,
            "class": "Image",
            "height": "100%",
            "maxHeight": 49,
            "width": "100%",
            "horizontalAlign": "center",
            "paddingLeft": 0,
            "borderSize": 0,
            "maxWidth": 1000,
            "scaleMode": "fit_inside",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "borderRadius": 0,
            "minHeight": 1,
            "minWidth": 1,
            "shadow": false,
            "paddingBottom": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "backgroundOpacity": 0,
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
      "class": "Container",
      "gap": 10,
      "height": "1.23%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "20%",
        "maxHeight": 2,
        "width": "100%",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 5,
      "height": "4.178%",
      "maxHeight": 49,
      "width": "100%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "36.784%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.515%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "width": "12.412%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 243,
          "width": "97.78%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 258,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "18.943%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "93.13%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "4.17%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "66.075%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.764%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 800,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 2,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "4.213%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 1000,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "95.45%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "10.118%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "82.14%",
          "horizontalAlign": "right",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "32.594%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "92.89%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "1.35%",
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Image",
        "height": "18.18%",
        "maxHeight": 2,
        "width": "100%",
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 726,
        "scaleMode": "fit_inside",
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "borderRadius": 0,
        "minHeight": 1,
        "minWidth": 1,
        "shadow": false,
        "paddingBottom": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 0,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "33.925%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "92.12%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 300,
        "width": "8.471%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "maxWidth": 300,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 300,
          "width": "89.8%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "17.96%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "93.98%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "paddingRight": 0,
      "class": "Container",
      "gap": 10,
      "height": "4.17%",
      "maxHeight": 49,
      "width": "99.44%",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "borderSize": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "contentOpaque": false,
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "children": [
       {
        "paddingRight": 0,
        "class": "Container",
        "gap": 10,
        "height": "100%",
        "maxHeight": 49,
        "width": "56.984%",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "borderSize": 0,
        "minWidth": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "contentOpaque": false,
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "paddingTop": 0,
        "layout": "horizontal",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "children": [
         {
          "paddingRight": 0,
          "class": "Image",
          "height": "100%",
          "maxHeight": 49,
          "width": "99.78%",
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "borderSize": 0,
          "maxWidth": 1000,
          "scaleMode": "fit_inside",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "borderRadius": 0,
          "minHeight": 1,
          "minWidth": 1,
          "shadow": false,
          "paddingBottom": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "backgroundOpacity": 0,
          "paddingTop": 0,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B52C56FC_A8FF_D0E7_41E0_D45CF58878FB.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingRight": 0,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; }
 },
 "shadow": false,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top"
})