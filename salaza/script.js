TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "class": "Menu",
   "opacity": 0.4,
   "id": "Menu_B543A413_A7F4_393D_41B3_952019A837D6",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "label": "1",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "2",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "3",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "4",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "5",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "6",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "7",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "8",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "10",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "11",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "12",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "13",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "14",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "16",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "17",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "18",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    },
    {
     "label": "19",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "class": "MenuItem"
    },
    {
     "label": "20",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "class": "MenuItem"
    },
    {
     "label": "21",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "class": "MenuItem"
    },
    {
     "label": "22",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "class": "MenuItem"
    },
    {
     "label": "23",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "class": "MenuItem"
    },
    {
     "label": "24",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "class": "MenuItem"
    }
   ],
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF"
  },
  "id": "panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "1",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "2",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "3",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "4",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "5",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "6",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "7",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2450,
       "width": 4900,
       "url": "media/panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "8",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2450,
       "width": 4900,
       "url": "media/panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "9",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "10",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "11",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "12",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D717DC_A7B4_272B_41D1_834850925A22",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D717DC_A7B4_272B_41D1_834850925A22_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D717DC_A7B4_272B_41D1_834850925A22_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D717DC_A7B4_272B_41D1_834850925A22_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D717DC_A7B4_272B_41D1_834850925A22.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "13",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D717DC_A7B4_272B_41D1_834850925A22_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "14",
  "class": "Panorama",
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 896.67,
    "map": {
     "initialZoomFactor": 1,
     "overlays": [
      {
       "id": "overlay_9BC75E9D_973A_9CF1_41BF_4EB86B8B1803",
       "map": {
        "offsetY": 0,
        "x": 298.47,
        "width": 21.5,
        "y": 120.87,
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
       "rollOverDisplay": false,
       "image": {
        "x": 298.47,
        "y": 120.87,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC74E9D_973A_9CF1_41CB_C358AC274EEA",
       "map": {
        "offsetY": 0,
        "x": 343.17,
        "width": 21,
        "y": 140.44,
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
       "rollOverDisplay": false,
       "image": {
        "x": 343.17,
        "y": 140.44,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC77E9D_973A_9CF1_41DE_62A4A2DDA31C",
       "map": {
        "offsetY": 0,
        "x": 390.45,
        "width": 21,
        "y": 159.28,
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
       "rollOverDisplay": false,
       "image": {
        "x": 390.45,
        "y": 159.28,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC76E9E_973A_9CF3_41E2_4F5AF955B6FC",
       "map": {
        "offsetY": 0,
        "x": 440.98,
        "width": 21,
        "y": 182.26,
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
       "rollOverDisplay": false,
       "image": {
        "x": 440.98,
        "y": 182.26,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC79E9E_973A_9CF3_41BE_D7EFEAC49E95",
       "map": {
        "offsetY": 0,
        "x": 500.97,
        "width": 21,
        "y": 201.61,
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
       "rollOverDisplay": false,
       "image": {
        "x": 500.97,
        "y": 201.61,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7BE9E_973A_9CF3_41DA_EC0F5D2B51DA",
       "map": {
        "offsetY": 0,
        "x": 534.44,
        "width": 21,
        "y": 215.87,
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
       "rollOverDisplay": false,
       "image": {
        "x": 534.44,
        "y": 215.87,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7AE9E_973A_9CF3_41CF_6D6DD68FD7D3",
       "map": {
        "offsetY": 0,
        "x": 599.08,
        "width": 21,
        "y": 246.31,
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
       "rollOverDisplay": false,
       "image": {
        "x": 599.08,
        "y": 246.31,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7DE9E_973A_9CF3_41D2_BF05749C5EFA",
       "map": {
        "offsetY": 0,
        "x": 623.61,
        "width": 21,
        "y": 206.49,
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
       "rollOverDisplay": false,
       "image": {
        "x": 623.61,
        "y": 206.49,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7CE9E_973A_9CF3_419B_9C7C2EE63E84",
       "map": {
        "offsetY": 0,
        "x": 622.5,
        "width": 21,
        "y": 145.69,
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
       "rollOverDisplay": false,
       "image": {
        "x": 622.5,
        "y": 145.69,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC7EE9E_973A_9CF3_41D9_067A79783438",
       "map": {
        "offsetY": 0,
        "x": 673.62,
        "width": 21,
        "y": 238.04,
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
       "rollOverDisplay": false,
       "image": {
        "x": 673.62,
        "y": 238.04,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC61E9E_973A_9CF3_41AD_51294A331697",
       "map": {
        "offsetY": 0,
        "x": 735.16,
        "width": 21,
        "y": 237.22,
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
       "rollOverDisplay": false,
       "image": {
        "x": 735.16,
        "y": 237.22,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC62E9E_973A_9CF3_41C5_B4A1661544E5",
       "map": {
        "offsetY": 0,
        "x": 799.81,
        "width": 21,
        "y": 238.04,
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
       "rollOverDisplay": false,
       "image": {
        "x": 799.81,
        "y": 238.04,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC65E9E_973A_9CF3_41DC_A8AAB68098DE",
       "map": {
        "offsetY": 0,
        "x": 845.32,
        "width": 21,
        "y": 238.04,
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
       "rollOverDisplay": false,
       "image": {
        "x": 845.32,
        "y": 238.04,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC64E9E_973A_9CF3_41DC_856228CA7900",
       "map": {
        "offsetY": 0,
        "x": 886.17,
        "width": 21,
        "y": 240.7,
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
       "rollOverDisplay": false,
       "image": {
        "x": 886.17,
        "y": 240.7,
        "class": "HotspotMapOverlayImage",
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
       "id": "overlay_9BC69E9E_973A_9CF3_41C6_EF99E7AFFC0F",
       "map": {
        "offsetY": 0,
        "x": 615.92,
        "width": 21,
        "y": 298.03,
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
       "rollOverDisplay": false,
       "image": {
        "x": 615.92,
        "y": 298.03,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC6AE9E_973A_9CF3_41B5_F0ADF242649A",
       "map": {
        "offsetY": 0,
        "x": 663.65,
        "width": 21,
        "y": 304.16,
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
       "rollOverDisplay": false,
       "image": {
        "x": 663.65,
        "y": 304.16,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC6DE9E_973A_9CF3_4166_B9758871A36A",
       "map": {
        "offsetY": 0,
        "x": 662.32,
        "width": 21,
        "y": 331.57,
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
       "rollOverDisplay": false,
       "image": {
        "x": 662.32,
        "y": 331.57,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC75E9F_973A_9CF1_41D9_FCB4F758F122",
       "map": {
        "offsetY": 0,
        "x": 657.89,
        "width": 21,
        "y": 373.9,
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
       "rollOverDisplay": false,
       "image": {
        "x": 657.89,
        "y": 373.9,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC74E9F_973A_9CF1_41DC_8ED89A78BC0F",
       "map": {
        "offsetY": 0,
        "x": 672.37,
        "width": 21,
        "y": 422.36,
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
       "rollOverDisplay": false,
       "image": {
        "x": 672.37,
        "y": 422.36,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC77E9F_973A_9CF1_41DE_603C60C00CFF",
       "map": {
        "offsetY": 0,
        "x": 624.27,
        "width": 21,
        "y": 329.94,
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
       "rollOverDisplay": false,
       "image": {
        "x": 624.27,
        "y": 329.94,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC79E9F_973A_9CF1_41DA_D16CFAC52894",
       "map": {
        "offsetY": 0,
        "x": 585.04,
        "width": 21,
        "y": 343.17,
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
       "rollOverDisplay": false,
       "image": {
        "x": 585.04,
        "y": 343.17,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_9BC78E9F_973A_9CF1_41B7_0C1F859E00F6",
       "map": {
        "offsetY": 0,
        "x": 557.86,
        "width": 21,
        "y": 359.12,
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
       "rollOverDisplay": false,
       "image": {
        "x": 557.86,
        "y": 359.12,
        "class": "HotspotMapOverlayImage",
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "id": "overlay_AD9E256A_A29C_7A99_41BD_16DA71BA0E10",
       "map": {
        "offsetY": 0,
        "x": 936.93,
        "width": 12.51,
        "y": 247.2,
        "height": 12.51,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 6,
           "width": 6,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "image": {
        "x": 936.93,
        "y": 247.2,
        "class": "HotspotMapOverlayImage",
        "width": 12.51,
        "height": 12.51,
        "image": {
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/map_9BC73E9D_973A_9CF1_41D7_30B94025AD62_HS_69.png",
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
      }
     ],
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
     "fieldOfViewOverlayRadiusScale": 0.05,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "class": "Map",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1
    },
    "y": 251.2,
    "angle": 79.22,
    "class": "PanoramaMapLocation"
   }
  ]
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "class": "ViewerArea",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipFontStyle": "normal",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "minWidth": 342,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 682,
   "height": 436,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 10,
   "toolTipFontSize": 12,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minHeight": 218,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "shadow": false,
   "progressHeight": 10,
   "left": 18,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0
  },
  "class": "MapPlayer"
 },
 {
  "id": "panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "16",
  "class": "Panorama",
  "hfovMin": 60,
  "mapLocations": [
   {
    "x": 943.18,
    "map": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "y": 253.45,
    "angle": 265.43,
    "class": "PanoramaMapLocation"
   }
  ]
 },
 {
  "id": "panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "17",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "18",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "19",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "20",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "21",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "22",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "23",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "cardboardMenu": "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6",
  "id": "panorama_B6D64A77_A7B4_69E5_41D6_853033534384",
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B6D64A77_A7B4_69E5_41D6_853033534384_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_B6D64A77_A7B4_69E5_41D6_853033534384_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_B6D64A77_A7B4_69E5_41D6_853033534384_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B6D64A77_A7B4_69E5_41D6_853033534384.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "24",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "id": "panorama_B6D64A77_A7B4_69E5_41D6_853033534384_camera",
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
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B62B89C7_A7BC_EB24_41BC_BD3986C62DDC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D0E9A1_A7BC_2B1C_41D8_81BD7A348934_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D17459_A7BC_392D_41D0_988CD9DB4A4C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D0BEE1_A7BC_291D_41DF_EDC9A2DA3BC4_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D15931_A7BC_6B7D_41D0_0A3F4A959F87_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D093D1_A7BC_7F3D_41D5_346C925FDB6C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D14E32_A7BC_697C_41C4_9ADC98C22F3E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D0FCE2_A7BC_291C_41BF_FA410F6EEE8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D0DB5F_A7BC_2F24_41E0_53803D87D157_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D0D9AE_A7B3_EB67_41B6_8AD7996C6BED_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D108BC_A7B3_E964_41E4_E1CADCEBD13A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D728B4_A7B4_2964_41D0_11ECC74654DF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_B6D717DC_A7B4_272B_41D1_834850925A22",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D717DC_A7B4_272B_41D1_834850925A22_camera"
   },
   {
    "id": "PanoramaPlayListItem_B546140F_A7F4_3925_41CC_6395D83B7D43",
    "media": "this.panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B546140F_A7F4_3925_41CC_6395D83B7D43, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D707CE_A7B4_6727_419A_7BCFAB449C36_camera"
   },
   {
    "id": "PanoramaPlayListItem_B547B410_A7F4_393B_41C4_FED375619145",
    "media": "this.panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B547B410_A7F4_393B_41C4_FED375619145, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D6C76F_A7B4_67E4_41DF_FDFC6A91E0DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D76906_A7B4_2B24_41CF_D0FE2E84C575_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D6AB3D_A7B4_2F65_41D2_C695809AFBF3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D74BBE_A7B4_EF67_41E4_99304F153FF1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D68BB4_A7B4_EF7B_41D6_DD73FC8C9916_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D7AA6B_A7B4_29ED_41B2_EC3B9A479556_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D669AB_A7B4_2B6C_41DB_4BEAA1CE4C6D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D79924_A7B4_6B1B_41AA_BD5C25071567_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "media": "this.panorama_B6D64A77_A7B4_69E5_41D6_853033534384",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B6D64A77_A7B4_69E5_41D6_853033534384_camera"
   }
  ]
 },
 "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
 {
  "id": "playList_B4CFB408_A7F4_392B_41DD_132D4883C284",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9BC73E9D_973A_9CF1_41D7_30B94025AD62",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_B543A413_A7F4_393D_41B3_952019A837D6"
], "children": [
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "class": "ViewerArea",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "minHeight": 50,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "shadow": false,
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0
 },
 {
  "minWidth": 1,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "gap": 3,
  "height": "96.96%",
  "width": "98.794%",
  "borderRadius": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "verticalAlign": "top",
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.12%",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "paddingTop": 0,
  "shadow": false,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 235.1,
    "gap": 10,
    "height": "99.327%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "verticalAlign": "top",
    "top": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "paddingTop": 0,
    "shadow": false,
    "left": 14,
    "backgroundOpacity": 0,
    "children": [
     {
      "maxHeight": 145,
      "minWidth": 1,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 181.7,
      "iconURL": "skin/IconButton_901BF942_9CD6_8FED_41D1_23F89F978632.png",
      "height": 71,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false)",
      "cursor": "hand",
      "minHeight": 1,
      "maxWidth": 378,
      "paddingBottom": 0,
      "id": "IconButton_901BF942_9CD6_8FED_41D1_23F89F978632",
      "paddingTop": 0,
      "shadow": false,
      "left": "2.47%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 1638,
    "gap": 4,
    "height": 436,
    "borderRadius": 9,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "class": "Container",
    "layout": "absolute",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "top": "0.06%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "paddingTop": 0,
    "shadow": false,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     "this.MapViewer",
     {
      "maxHeight": 145,
      "minWidth": 1,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 70,
      "iconURL": "skin/IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F.png",
      "height": 70,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "minHeight": 1,
      "maxWidth": 145,
      "paddingBottom": 0,
      "id": "IconButton_92C4617C_9CDA_BF95_41D4_B6B6538A1C1F",
      "paddingTop": 0,
      "shadow": false,
      "left": "1.16%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "hidden",
  "scrollBarVisible": "rollOver"
 },
 {
  "minWidth": 1,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "gap": 10,
  "height": 275.05,
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "class": "Container",
  "layout": "vertical",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "bottom",
  "minHeight": 1,
  "paddingBottom": 0,
  "bottom": "0.87%",
  "id": "Container_8293DF5A_8EE8_EA38_41D0_9D6827E057B4",
  "paddingTop": 0,
  "shadow": false,
  "left": "0%",
  "backgroundOpacity": 0,
  "children": [
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "gap": 10,
    "height": 181,
    "width": "97.739%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "class": "Container",
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "middle",
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_805A0D2D_8F18_EE18_41DF_2D69567E8663",
    "paddingTop": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "children": [
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "width": 564,
      "gap": 10,
      "height": 181,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "layout": "absolute",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_81C906DC_8F28_FA38_4178_ED208F0792DA",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "top": "2.21%",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_80287839_8F18_F678_41E1_9731D3310D43",
        "paddingTop": 0,
        "shadow": false,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_70B131E5_7F3E_549A_41C8_D2730AAFAB66",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_69803541_7F62_BD9A_41AC_883C79A1ACBB",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, true, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, true, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED",
              "url": "skin/Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6EF7815D_7F62_55AA_41BB_9C63EB12D942",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6FEE575F_7F62_5DA6_41DE_1016A20B3C01",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_6F467094_7F3F_D4BA_41BB_F5B530199C22",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_68299B6A_7F1E_546E_41D1_795279CB6E4F",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, true, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, false, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC",
              "url": "skin/Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6CF09583_7F62_FC9E_41BB_E98FC9AA461F",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CB0EBBA_7F62_D4EE_41C3_53C089F59213",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_70D33B01_7F3F_B59A_41D9_EF8AC228CA28",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_69AB3937_7F1E_55E6_41D0_ABA4EE7904ED",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57, true, 0, null, null, false); this.setComponentVisibility(this.Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6, true, 0, null, null, false); this.setComponentVisibility(this.Image_674737F6_7F1E_5C66_41B5_05B6530DE3ED, false, 0, null, null, false); this.setComponentVisibility(this.Label_6DF29D96_7F66_CCA6_41B0_9F3F2A0E62F4, false, 0, null, null, false); this.setComponentVisibility(this.Image_6957A9FE_7F26_5466_41DE_E475D58AB3AC, false, 0, null, null, false); this.setComponentVisibility(this.Label_6B40451E_7F6E_BDA6_41DC_1DAC339BE94F, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57",
              "url": "skin/Image_680A741F_7F2E_B3A6_41DE_3DC4F6802C57.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_6B2D0764_7F62_5D9A_41D6_19F7B64E2742",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6C2D55F6_7F62_7C79_41D0_25A0D57EAE17",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_6CECCBC5_7F61_B49A_41B4_2A1C2156C8C6",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 564,
        "height": 167,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "gap": 10,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "top": "2.15%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3",
        "paddingTop": 0,
        "shadow": false,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E1D43DE_8F38_9A38_41D5_09B49AC84656",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1D53DE_8F38_9A38_41CE_6929C8949807",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_9E1D63DE_8F38_9A38_41C7_F8CEBAFE3785",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F",
              "url": "skin/Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1D93DE_8F38_9A38_41D2_6EE28E7D4287",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "97.619%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DB3DE_8F38_9A38_41D3_9434E16292EA",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Commercial District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E1DD3DE_8F38_9A38_41D7_4D6F87C17E38",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E1DE3DE_8F38_9A38_41BB_74DB7075A655",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_9E1DF3DE_8F38_9A38_41DD_120B80095BF2",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58",
              "url": "skin/Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E0223DE_8F38_9A38_41C4_87BB70EE4CF8",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0233DE_8F38_9A38_41AC_7C19224B84E5",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Cultural District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_9E0253DE_8F38_9A38_41D8_2EC8709CFA88",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E0273DF_8F38_9A38_41D0_2A7ACCD642D0",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F, true, 0, null, null, false); this.setComponentVisibility(this.Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921, true, 0, null, null, false); this.setComponentVisibility(this.Image_9E1D83DE_8F38_9A38_41B2_5A34F50C508F, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E1DC3DE_8F38_9A38_41C1_F829381D5A9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_9E0203DE_8F38_9A38_41D1_E13AABC07C58, false, 0, null, null, false); this.setComponentVisibility(this.Label_9E0243DE_8F38_9A38_41DD_FC883B2EE30E, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_9E0283DF_8F38_9A38_41DA_B5ED4C2BA6EF",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F",
              "url": "skin/Image_9E0293DF_8F38_9A38_4181_FA676C1AEB1F.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_9E02A3DF_8F38_9A38_41E0_854B96FD5DCE",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02B3DF_8F38_9A38_41D1_9112D94854A7",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "Eco District",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_9E02C3DF_8F38_9A38_4192_B53C3D1C0921",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "height": "86.188%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "gap": 10,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "top": "5.47%",
        "minHeight": 1,
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA",
        "paddingTop": 0,
        "shadow": false,
        "left": "0%",
        "backgroundOpacity": 0,
        "children": [
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D2BBD2_8F20_7E4C_41B1_00A572E6E7ED",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D24BD2_8F20_7E4C_41B0_3C330640CF6D",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_80D25BD2_8F20_7E4C_41BA_BDDEAFB370F0",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79",
              "url": "skin/Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D27BD2_8F20_7E4C_41D7_86E2A33BD3B6",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D20BD2_8F20_7E4C_41C1_152797D1B2D4",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ショッピングセンター",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D3CBD2_8F20_7E4C_41DE_B3BA0DA8F979",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D3DBD2_8F20_7E4C_41E1_5E5FC0C8B844",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 300,
              "iconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274.png",
              "height": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, true, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, false, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_80D3FBD2_8F20_7E4C_41D3_2307DD087274",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611",
              "url": "skin/Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D3ABD2_8F20_7E4C_41DD_3833282BC286",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D3BBD3_8F20_7E4C_41E0_F9A206A35572",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "伝統⽂化町",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         },
         {
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "width": 180,
          "gap": 0,
          "height": 156,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "layout": "vertical",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "verticalAlign": "middle",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Container_80D36BD3_8F20_7E4C_41DB_4C807CA8532D",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "width": 126,
            "gap": 10,
            "height": 126,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D37BD3_8F20_7E4C_41B2_141B067BEC18",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "width": 126,
              "iconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725.png",
              "height": 126,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "class": "IconButton",
              "rollOverIconURL": "skin/IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725_rollover.png",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B, true, 0, null, null, false); this.setComponentVisibility(this.Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80D26BD2_8F20_7E4C_4170_77A760BE6A79, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D22BD2_8F20_7E4C_41D0_2A232F759BFD, false, 0, null, null, false); this.setComponentVisibility(this.Image_80D38BD2_8F20_7E4C_41D5_0E18B3CF1611, false, 0, null, null, false); this.setComponentVisibility(this.Label_80D34BD3_8F20_7E4C_41C7_A395AC23DA9C, false, 0, null, null, false)",
              "cursor": "hand",
              "minHeight": 1,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "IconButton_80D30BD3_8F20_7E4C_41A3_574760AB4725",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "maxHeight": 126,
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "width": 126,
              "height": 126,
              "borderRadius": 0,
              "horizontalAlign": "center",
              "borderSize": 0,
              "class": "Image",
              "scaleMode": "fit_inside",
              "top": "0%",
              "minHeight": 1,
              "visible": false,
              "maxWidth": 126,
              "paddingBottom": 0,
              "id": "Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B",
              "url": "skin/Image_80D31BD3_8F20_7E4C_41C7_F4C32EC78A6B.png",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "visible",
            "scrollBarVisible": "rollOver"
           },
           {
            "minWidth": 1,
            "scrollBarColor": "#000000",
            "paddingLeft": 0,
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "gap": 10,
            "height": 42,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "left",
            "contentOpaque": false,
            "class": "Container",
            "layout": "absolute",
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Container_80D33BD3_8F20_7E4C_41E0_329C04924F0E",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "children": [
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFFFF",
              "fontWeight": "normal",
              "minHeight": 1,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCCBD3_8F20_7E4C_41C2_D4F18D83BB6A",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             },
             {
              "horizontalAlign": "center",
              "minWidth": 1,
              "paddingLeft": 0,
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 18,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "⽣態観光区への道",
              "borderSize": 0,
              "class": "Label",
              "fontColor": "#FFFF00",
              "fontWeight": "normal",
              "minHeight": 1,
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80DCDBD3_8F20_7E4C_41D7_79C4CEB576DC",
              "fontStyle": "normal",
              "paddingTop": 0,
              "shadow": false,
              "left": "0%",
              "backgroundOpacity": 0
             }
            ],
            "overflow": "scroll",
            "scrollBarVisible": "rollOver"
           }
          ],
          "overflow": "visible",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "gap": 10,
    "height": 77,
    "width": "97.913%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "class": "Container",
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "bottom",
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_81BAC611_8F18_BA08_41D8_4A5C9F55672F",
    "paddingTop": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "children": [
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9B1979E0_8F28_9608_41C3_E8C0D61F9C05",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 84,
        "minWidth": 1,
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "width": 70,
        "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
        "height": 70,
        "transparencyActive": false,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "IconButton",
        "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false)",
        "cursor": "hand",
        "minHeight": 1,
        "maxWidth": 84,
        "paddingBottom": 0,
        "bottom": "7.35%",
        "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
        "paddingTop": 0,
        "shadow": false,
        "left": "2.45%",
        "backgroundOpacity": 0
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9A36B08B_8F29_B61F_41D0_F9E41A084F46",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "width": 54,
        "gap": 10,
        "height": 54,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "left",
        "contentOpaque": false,
        "class": "Container",
        "layout": "absolute",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "verticalAlign": "top",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_6D14B5EF_7FCF_E9D2_41D4_47829C9AFF15",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 509,
          "minWidth": 1,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, true, 0, null, null, false); this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, false, 0, null, null, false)",
          "minHeight": 1,
          "maxWidth": 509,
          "paddingBottom": 0,
          "id": "Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8",
          "url": "skin/Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "right": "-1.96%"
         },
         {
          "maxHeight": 509,
          "minWidth": 1,
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "paddingRight": 0,
          "width": 54,
          "height": 54,
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_81C906DC_8F28_FA38_4178_ED208F0792DA, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C665E80_7FCE_BA4E_41AC_BD6EB72B9EB8, true, 0, null, null, false); this.setComponentVisibility(this.Image_6C885858_7FB2_A6FE_41C0_C3713976F10D, false, 0, null, null, false)",
          "minHeight": 1,
          "visible": false,
          "maxWidth": 509,
          "paddingBottom": 0,
          "id": "Image_6C885858_7FB2_A6FE_41C0_C3713976F10D",
          "url": "skin/Image_6C885858_7FB2_A6FE_41C0_C3713976F10D.png",
          "paddingTop": 0,
          "shadow": false,
          "left": "0%",
          "backgroundOpacity": 0
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "100%",
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_9CFCC4CB_8F29_FE1F_41C3_9C777B7ED9F1",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "scrollBarVisible": "rollOver"
 },
 {
  "minWidth": 1,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "height": "100%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "gap": 10,
  "layout": "absolute",
  "verticalAlign": "middle",
  "top": "0%",
  "minHeight": 1,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_98B6FC5C_8F20_FA74_419D_9155966BA899",
  "paddingTop": 0,
  "shadow": false,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "minWidth": 1,
    "paddingLeft": 0,
    "paddingRight": 0,
    "width": "100%",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "borderSize": 0,
    "class": "Image",
    "scaleMode": "fit_outside",
    "click": "eval('var lang = location.search.split(\"lang=\")[1];lang = lang ? lang : \"vn\";this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, false, 0, null, null, false);this.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, false, 0, null, null, false);this.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, false, 0, null, null, false);this.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, false, 0, null, null, false);this.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, false, 0, null, null, false);switch (lang) {\tcase \"vn\":\t\tthis.setComponentVisibility(this.Container_80287839_8F18_F678_41E1_9731D3310D43, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_B5E63A6A_9810_4846_41CA_675CC909F056, true, 0, null, null, false);\t\tbreak;\tcase \"en\":\t\tthis.setComponentVisibility(this.Container_9E02D3DF_8F38_9A38_41BB_CBCA612863B3, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_810A0772_9749_1191_41D4_913AE23BDFA3, true, 0, null, null, false);\t\tbreak;\tcase \"jp\":\t\tthis.setComponentVisibility(this.Container_80DCEBD3_8F20_7E4C_41C1_BFE0AF725EEA, true, 0, null, null, false);\t\tthis.setComponentVisibility(this.Container_8E6407BD_975F_3093_41A3_B8A1B57847D7, true, 0, null, null, false);\t\tbreak;}');; eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false); }, 5000);');",
    "top": "0%",
    "minHeight": 1,
    "paddingBottom": 0,
    "bottom": "0%",
    "id": "Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9",
    "url": "skin/Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.png",
    "paddingTop": 0,
    "shadow": false,
    "left": "0%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "49.24%",
    "width": "95.4%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "gap": 3,
    "layout": "vertical",
    "verticalAlign": "middle",
    "top": "23.14%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_B5E63A6A_9810_4846_41CA_675CC909F056",
    "paddingTop": 0,
    "shadow": false,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "10.817%",
      "width": "91.466%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E73A69_9810_4842_41E0_730101DD54E3",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "height": "65.789%",
        "width": "47.17%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "id": "Image_B5E70A69_9810_4842_41D6_8A00A2E74403",
        "url": "skin/Image_B5E70A69_9810_4842_41D6_8A00A2E74403.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "0.613%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E71A69_9810_4842_41D3_A74688B20693",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "95.69%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E76A69_9810_4842_41A8_9D174DDE1594",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 6,
        "height": "100%",
        "width": "69.5%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E77A69_9810_4842_41DF_9EBBE5C22FA9",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "10.79%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_B5E74A69_9810_4842_41CA_59D09CAC957D",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_B5E75A69_9810_4842_41BF_E7FC4208D234",
            "url": "skin/Image_B5E75A69_9810_4842_41BF_E7FC4208D234.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "8.63%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_B5E7BA69_9810_4842_41DA_0236CF2338B6",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "98.889%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E",
            "url": "skin/Image_B5E79A69_9810_4842_41D1_B1D4AD9B221E.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "43.969%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Container_B5E7EA69_9810_4842_41BC_2F1B01C77489",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "92.63%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "id": "Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C",
            "url": "skin/Image_B5E7FA69_9810_4842_41E0_73A0BC842E0C.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "3.07%",
      "width": "99.52%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E7CA69_9810_4842_41D6_BE7B4401B90E",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_B5E7DA69_9810_4842_41DC_BD2CDE743379",
        "url": "skin/Image_B5E7DA69_9810_4842_41DC_BD2CDE743379.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "backgroundColor": [],
      "scrollBarColor": "#000000",
      "height": "12.46%",
      "width": "95.22%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "gap": 0,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_B5E62A69_9810_4842_41C2_AB6FB7FFB459",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "11.131%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E63A69_9810_4842_41A7_39B58EAB416C",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 45,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "98.485%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "id": "Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5",
          "url": "skin/Image_B5E60A69_9810_4842_41D3_2B31FF3DDEE5.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "13.57%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E61A69_9810_4842_41E2_C6B11C6023E0",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "97.98%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "id": "Image_B5E66A69_9810_4842_41E1_8E98C87CF60F",
          "url": "skin/Image_B5E66A69_9810_4842_41E1_8E98C87CF60F.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "39.005%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E67A69_9810_4842_41B4_E524884C131D",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "94.66%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 408,
          "paddingBottom": 0,
          "id": "Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5",
          "url": "skin/Image_B5E64A69_9810_4842_41BD_5BFBCEF5FAC5.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "6.977%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_B5E65A69_9810_4842_41D8_F5293F7CF47C",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "94%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Image_B5E6AA6A_9810_4846_41D8_54D1B2298809",
          "url": "skin/Image_B5E6AA6A_9810_4846_41D8_54D1B2298809.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "93.798%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E6EA6A_9810_4846_41E0_0CA3B9E8DD15",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "88.522%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E73A6A_9810_4846_41DF_68BEFF21FDF2",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "67.082%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 734,
          "paddingBottom": 0,
          "id": "Image_B5E70A6A_9810_4846_41DA_33DFF10BC917",
          "url": "skin/Image_B5E70A6A_9810_4846_41DA_33DFF10BC917.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "3.07%",
      "width": "97.61%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E71A6A_9810_4846_41DA_290263BF3FB1",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3",
        "url": "skin/Image_B5E76A6A_9810_4846_41BD_A7477B1FBAB3.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 4,
      "height": "12.46%",
      "width": "99.914%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E74A6A_9810_4846_41B5_C3C1EA8C04BA",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "11.389%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E75A6A_9810_4846_41D8_855FD686402B",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "98.99%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "id": "Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612",
          "url": "skin/Image_B5E7AA6A_9810_4846_41AF_D3B689BD5612.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "6.897%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_B5E7BA6A_9810_4846_41D3_466CEF63F27C",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 222,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "85.612%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 222,
          "paddingBottom": 0,
          "id": "Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747",
          "url": "skin/Image_B5E78A6A_9810_4846_41C3_1D1DA31D9747.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "41.415%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E79A6A_9810_4846_41D2_77786CB68B4D",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "99.792%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F",
          "url": "skin/Image_B5E7EA6A_9810_4846_41D7_5AAE216FD54F.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "95.69%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_B5E7FA6A_9810_4846_41DF_F5C54B4F23BC",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "29.099%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_B5E7CA6A_9810_4846_41DD_CF79FBF15028",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "97.52%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4",
          "url": "skin/Image_B5E7DA6A_9810_4846_41C0_922C2FE98BE4.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "gap": 10,
    "height": "12.935%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "layout": "absolute",
    "verticalAlign": "top",
    "top": "0%",
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_98B71C5B_8F20_FA7C_41E1_C9D17D177960",
    "paddingTop": 0,
    "shadow": false,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "maxHeight": 72,
      "minWidth": 1,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 62,
      "iconURL": "skin/IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1.png",
      "height": 58,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "23.74%",
      "click": "this.setComponentVisibility(this.Container_98B6FC5C_8F20_FA74_419D_9155966BA899, false, 0, null, null, false)",
      "cursor": "hand",
      "minHeight": 1,
      "maxWidth": 72,
      "paddingBottom": 0,
      "id": "IconButton_98B72C5B_8F20_FA7C_41C2_A4EEEAD036E1",
      "paddingTop": 0,
      "shadow": false,
      "left": "3.02%",
      "backgroundOpacity": 0
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "49.24%",
    "width": "95.4%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "gap": 3,
    "layout": "vertical",
    "verticalAlign": "middle",
    "top": "23.14%",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_810A0772_9749_1191_41D4_913AE23BDFA3",
    "paddingTop": 0,
    "shadow": false,
    "left": "2.31%",
    "backgroundOpacity": 0,
    "children": [
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "10.82%",
      "width": "91.379%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B0770_9749_1191_41D5_0523224DA5CF",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "height": "47.5%",
        "width": "47.17%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "id": "Image_810B3770_9749_1191_41DF_50093CA80BF0",
        "url": "skin/Image_810B3770_9749_1191_41DF_50093CA80BF0.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "0.613%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B2770_9749_1191_41D7_6B0E80A4EE90",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "95.69%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AD770_9749_1191_41D0_5C83E12AA341",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 6,
        "height": "100%",
        "width": "69.5%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AC770_9749_1191_41DF_63CE679F9081",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "10.79%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_810AF770_9749_1191_41A8_DC0AE06FD5C5",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "99.123%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_810AE770_9749_1191_41C7_CE8734D640E6",
            "url": "skin/Image_810AE770_9749_1191_41C7_CE8734D640E6.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "8.63%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_810A9771_9749_1193_41AC_E076343CF4E8",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "98.889%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_810A8771_9749_1193_41D5_6A2439D8489A",
            "url": "skin/Image_810A8771_9749_1193_41D5_6A2439D8489A.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "46.891%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Container_810AB771_9749_1193_41BB_CBC7A4C9DD91",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "id": "Image_810AA771_9749_1193_41CE_E27221198D42",
            "url": "skin/Image_810AA771_9749_1193_41CE_E27221198D42.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "3.07%",
      "width": "99.52%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810A4771_9749_1193_41E0_AD255465FD89",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_810A7771_9749_1193_41C8_718509C5BBB2",
        "url": "skin/Image_810A7771_9749_1193_41C8_718509C5BBB2.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "backgroundColor": [],
      "scrollBarColor": "#000000",
      "height": "12.5%",
      "width": "95.22%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "gap": 3,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "backgroundColorRatios": [],
      "id": "Container_810A6771_9749_1193_41B4_BFEA4A03BBB9",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0.55,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "8.714%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A0771_9749_1193_41E1_F5766AD28200",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 45,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "95.238%",
          "width": "81.25%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "id": "Image_810A3771_9749_1193_41B8_441EE8A546C0",
          "url": "skin/Image_810A3771_9749_1193_41B8_441EE8A546C0.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "11.212%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A2771_9749_1193_41C4_BF825E89F8D8",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "91.13%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "id": "Image_810DD771_9749_1193_41B2_D5B207820CD9",
          "url": "skin/Image_810DD771_9749_1193_41B2_D5B207820CD9.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "21.881%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DC771_9749_1193_41D4_1DA9CFCF6A55",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "97.62%",
          "width": "97.93%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 408,
          "paddingBottom": 0,
          "id": "Image_810DF771_9749_1193_41DD_CC9B1C052DAD",
          "url": "skin/Image_810DF771_9749_1193_41DD_CC9B1C052DAD.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "4.973%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_810DE771_9749_1193_41DE_79CD39D4629A",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Image_810D9771_9749_1193_41C8_E055CC2AE5D6",
          "url": "skin/Image_810D9771_9749_1193_41C8_E055CC2AE5D6.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 9,
        "height": "100%",
        "width": "19.078%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_80A23D36_9749_719E_41A9_D5B3AC43A8EC",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "85.714%",
          "width": "86.73%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8043ED84_9756_F171_41C0_115C064396CD",
          "url": "skin/Image_8043ED84_9756_F171_41C0_115C064396CD.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "93.798%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810D8771_9749_1193_41A8_74B5F092EA7E",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "88.522%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810DA771_9749_1193_41BD_5225197C2FBB",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "33.333%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 734,
          "paddingBottom": 0,
          "id": "Image_810D5771_9749_1193_41BE_62A29D563C48",
          "url": "skin/Image_810D5771_9749_1193_41BE_62A29D563C48.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "3.07%",
      "width": "97.61%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810B2772_9749_1191_41CD_111B266D323B",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": 726,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC",
        "url": "skin/Image_810AD772_9749_1191_41BF_A5A0C1A4CCAC.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 4,
      "height": "12.46%",
      "width": "99.914%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810AC772_9749_1191_41CA_75B415A06C0B",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "8.534%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AF772_9749_1191_41B8_A186B348B3E1",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "77.193%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 117,
          "paddingBottom": 0,
          "id": "Image_810AE772_9749_1191_41D5_0001594AF05B",
          "url": "skin/Image_810AE772_9749_1191_41D5_0001594AF05B.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "6.897%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_810A8772_9749_1191_41BF_731E7FFFB69E",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 222,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "85.612%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 222,
          "paddingBottom": 0,
          "id": "Image_810AB772_9749_1191_41E0_DC5FB3957CEF",
          "url": "skin/Image_810AB772_9749_1191_41E0_DC5FB3957CEF.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "40.316%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810AA772_9749_1191_41C2_1BEEB5936967",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "98.98%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 459,
          "paddingBottom": 0,
          "id": "Image_810A5772_9749_1191_41E0_3663EA0BF99C",
          "url": "skin/Image_810A5772_9749_1191_41E0_3663EA0BF99C.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "12.46%",
      "width": "95.69%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_810A4772_9749_1191_41BA_B22F68AC5904",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "53.351%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_810A6772_9749_1191_41D8_D02C3ADF592F",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "64%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_810A1772_9749_1191_41BC_098F70755C6A",
          "url": "skin/Image_810A1772_9749_1191_41BC_098F70755C6A.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "visible",
    "scrollBarVisible": "rollOver"
   },
   {
    "minWidth": 1,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "height": "80.657%",
    "width": "63.993%",
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "gap": 6,
    "layout": "vertical",
    "verticalAlign": "middle",
    "minHeight": 1,
    "visible": false,
    "paddingBottom": 0,
    "bottom": "8.81%",
    "id": "Container_8E6407BD_975F_3093_41A3_B8A1B57847D7",
    "paddingTop": 0,
    "shadow": false,
    "left": "17.25%",
    "backgroundOpacity": 0,
    "children": [
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "5.77%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E7B77BB_975F_3097_41D2_E0DCAE4E8C9F",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 61,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "height": "68.085%",
        "width": "79.087%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 500,
        "paddingBottom": 0,
        "id": "Image_8E7B47BB_975F_3097_41C0_90259DB665D7",
        "url": "skin/Image_8E7B47BB_975F_3097_41C0_90259DB665D7.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "0.12%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "left",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "absolute",
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E7B57BB_975F_3097_41DE_3C818A0F3B56",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 0,
      "height": "4.17%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E64A7BB_975F_3097_41BB_DC9A028AE122",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 0,
        "height": "100%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E64B7BB_975F_3097_41DC_58BA3A907AC0",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "9.882%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_8E6487BB_975F_3097_41CA_A03FBAEE647C",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "80.769%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "right",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F",
            "url": "skin/Image_8E6497BC_975F_3091_4195_5A2AE45E3E9F.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 300,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "9.88%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Container_8E64E7BC_975F_3091_41BE_EAD486B75114",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 300,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "right",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 300,
            "paddingBottom": 0,
            "id": "Image_8E64F7BC_975F_3091_41E1_10D62E471F01",
            "url": "skin/Image_8E64F7BC_975F_3091_41E1_10D62E471F01.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         },
         {
          "maxHeight": 49,
          "minWidth": 1,
          "scrollBarColor": "#000000",
          "paddingLeft": 0,
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "gap": 10,
          "height": "100%",
          "width": "52.993%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "contentOpaque": false,
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "layout": "horizontal",
          "verticalAlign": "middle",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Container_8E64C7BC_975F_3091_41CD_444BE8F00216",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "children": [
           {
            "maxHeight": 49,
            "minWidth": 1,
            "paddingLeft": 0,
            "paddingRight": 0,
            "height": "100%",
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "class": "Image",
            "scaleMode": "fit_inside",
            "minHeight": 1,
            "maxWidth": 1000,
            "paddingBottom": 0,
            "id": "Image_8E64D7BC_975F_3091_41D2_9768B4A77718",
            "url": "skin/Image_8E64D7BC_975F_3091_41D2_9768B4A77718.png",
            "paddingTop": 0,
            "shadow": false,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "overflow": "scroll",
          "scrollBarVisible": "rollOver"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "1.23%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6427BC_975F_3091_41BB_F9C33FAEF625",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "height": "20%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_8E6437BC_975F_3091_41C5_9A343EF18CD5",
        "url": "skin/Image_8E6437BC_975F_3091_41C5_9A343EF18CD5.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 5,
      "height": "4.178%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6407BC_975F_3091_41DC_25F55CC0A628",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "36.784%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6417BC_975F_3091_41B7_FC2C7E752060",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "99.515%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8E6477BC_975F_3091_41C8_99C284E064B4",
          "url": "skin/Image_8E6477BC_975F_3091_41C8_99C284E064B4.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "12.412%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6447BC_975F_3091_41D2_45524518CB90",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 243,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "97.78%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 258,
          "paddingBottom": 0,
          "id": "Image_8E6457BC_975F_3091_41BD_9AFE44D019D9",
          "url": "skin/Image_8E6457BC_975F_3091_41BD_9AFE44D019D9.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "18.943%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65A7BC_975F_3091_41C3_6C9F119094BA",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "93.13%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1",
          "url": "skin/Image_8E65B7BD_975F_3093_41D6_DE0E9687C9F1.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "4.17%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E65E7BD_975F_3093_41DF_34FD806088D2",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "66.075%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E65F7BD_975F_3093_41B0_2D5F1D009ECA",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "99.764%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 800,
          "paddingBottom": 0,
          "id": "Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B",
          "url": "skin/Image_8E65C7BD_975F_3093_41DE_33EE7CBD089B.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 2,
      "height": "4.17%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8DE1CE45_97B9_13F3_41CC_5EB2010FD449",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "4.213%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 1000,
        "paddingBottom": 0,
        "id": "Container_8D4262ED_97B9_10B2_41B5_0E2076C4A030",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "95.45%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8BDC031F_97BB_118F_41E0_F4093458F051",
          "url": "skin/Image_8BDC031F_97BB_118F_41E0_F4093458F051.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "10.118%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_8CF42712_97B9_3191_41E2_13F3A657A6FC",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "82.14%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "right",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Image_8E6597BD_975F_3093_41DC_3864A4E6ED90",
          "url": "skin/Image_8E6597BD_975F_3093_41DC_3864A4E6ED90.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "32.594%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8A8510DA_97BF_3091_41BE_F7743078FE5B",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "92.89%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8A74C1D4_97B9_3092_41DB_41844B4DF089",
          "url": "skin/Image_8A74C1D4_97B9_3092_41DB_41844B4DF089.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     },
     {
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "1.35%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E65D7BD_975F_3093_41A8_1898BC94F8B1",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 2,
        "minWidth": 1,
        "paddingLeft": 0,
        "paddingRight": 0,
        "height": "18.18%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "class": "Image",
        "scaleMode": "fit_inside",
        "minHeight": 1,
        "maxWidth": 726,
        "paddingBottom": 0,
        "id": "Image_8E6527BD_975F_3093_41CB_92316929EE17",
        "url": "skin/Image_8E6527BD_975F_3093_41CB_92316929EE17.png",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "overflow": "hidden",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 0,
      "height": "4.17%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E6507BD_975F_3093_41D8_0C1B0D8D6567",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "33.925%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6517BD_975F_3093_41D8_2DAA0CA56CD9",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "92.12%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55",
          "url": "skin/Image_8E6567BD_975F_3093_41C6_EB1BB16F6A55.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "visible",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 300,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "8.471%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "maxWidth": 300,
        "paddingBottom": 0,
        "id": "Container_8E6577BD_975F_3093_41C3_A5F9E36E4241",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 300,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "89.8%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 300,
          "paddingBottom": 0,
          "id": "Image_8E6547BD_975F_3093_41AD_42D0E4776616",
          "url": "skin/Image_8E6547BD_975F_3093_41AD_42D0E4776616.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       },
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "17.96%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6557BD_975F_3093_41D7_467541A47525",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "93.98%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA",
          "url": "skin/Image_8E66A7BD_975F_3093_41DF_F2FCD10562BA.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "visible",
      "scrollBarVisible": "rollOver"
     },
     {
      "maxHeight": 49,
      "minWidth": 1,
      "scrollBarColor": "#000000",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "gap": 10,
      "height": "4.17%",
      "width": "99.44%",
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "contentOpaque": false,
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "layout": "horizontal",
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Container_8E64D7BD_975F_3093_41DA_F8DE67969F23",
      "paddingTop": 0,
      "shadow": false,
      "backgroundOpacity": 0,
      "children": [
       {
        "maxHeight": 49,
        "minWidth": 1,
        "scrollBarColor": "#000000",
        "paddingLeft": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "gap": 10,
        "height": "100%",
        "width": "56.984%",
        "borderRadius": 0,
        "borderSize": 0,
        "horizontalAlign": "center",
        "contentOpaque": false,
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "layout": "horizontal",
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingBottom": 0,
        "id": "Container_8E6427BD_975F_3093_41E1_44FD3D6391AF",
        "paddingTop": 0,
        "shadow": false,
        "backgroundOpacity": 0,
        "children": [
         {
          "maxHeight": 49,
          "minWidth": 1,
          "paddingLeft": 0,
          "paddingRight": 0,
          "height": "100%",
          "width": "99.78%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "class": "Image",
          "scaleMode": "fit_inside",
          "minHeight": 1,
          "maxWidth": 1000,
          "paddingBottom": 0,
          "id": "Image_8E6437BD_975F_3093_41A3_9FB0EED2882C",
          "url": "skin/Image_8E6437BD_975F_3093_41A3_9FB0EED2882C.png",
          "paddingTop": 0,
          "shadow": false,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "overflow": "scroll",
        "scrollBarVisible": "rollOver"
       }
      ],
      "overflow": "scroll",
      "scrollBarVisible": "rollOver"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver"
   }
  ],
  "overflow": "scroll",
  "scrollBarVisible": "rollOver"
 }
], 
 "minWidth": 20,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "gap": 10,
 "vrPolyfillScale": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingBottom": 0,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } }
 },
 "id": "rootPlayer",
 "paddingTop": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B4CFB408_A7F4_392B_41DD_132D4883C284.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_98B59C58_8F20_FA7C_41DD_65DDE7CD16E9.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
})