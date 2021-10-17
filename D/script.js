TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714_t.jpg",
  "id": "panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714",
  "hfovMin": 60,
  "label": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "id": "panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3_t.jpg",
  "id": "panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3",
  "hfovMin": 60,
  "label": "C01",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B51266_8D9E_F764_41C1_072392146C73_t.jpg",
  "id": "panorama_82B51266_8D9E_F764_41C1_072392146C73",
  "hfovMin": 60,
  "label": "C02",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B51266_8D9E_F764_41C1_072392146C73_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B51266_8D9E_F764_41C1_072392146C73_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B51266_8D9E_F764_41C1_072392146C73.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B51266_8D9E_F764_41C1_072392146C73_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355_t.jpg",
  "id": "panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355",
  "hfovMin": 60,
  "label": "C03",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215_t.jpg",
  "id": "panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215",
  "hfovMin": 60,
  "label": "C04",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB_t.jpg",
  "id": "panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB",
  "hfovMin": 60,
  "label": "C05",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66_t.jpg",
  "id": "panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66",
  "hfovMin": 60,
  "label": "C06",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A_t.jpg",
  "id": "panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A",
  "hfovMin": 60,
  "label": "C07",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B08944_8D9E_52A4_41E0_B708434BF60C_t.jpg",
  "id": "panorama_82B08944_8D9E_52A4_41E0_B708434BF60C",
  "hfovMin": 60,
  "label": "C08",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B08944_8D9E_52A4_41E0_B708434BF60C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2450,
       "width": 4900,
       "url": "media/panorama_82B08944_8D9E_52A4_41E0_B708434BF60C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B08944_8D9E_52A4_41E0_B708434BF60C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B08944_8D9E_52A4_41E0_B708434BF60C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4_t.jpg",
  "id": "panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4",
  "hfovMin": 60,
  "label": "C09",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2450,
       "width": 4900,
       "url": "media/panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488_t.jpg",
  "id": "panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488",
  "hfovMin": 60,
  "label": "C10",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2_t.jpg",
  "id": "panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2",
  "hfovMin": 60,
  "label": "C11",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5_t.jpg",
  "id": "panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5",
  "hfovMin": 60,
  "label": "C12",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391_t.jpg",
  "id": "panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391",
  "hfovMin": 60,
  "label": "C13",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B12364_8D91_F69B_41A8_96FD89A51F31_t.jpg",
  "id": "panorama_82B12364_8D91_F69B_41A8_96FD89A51F31",
  "hfovMin": 60,
  "label": "C14",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B12364_8D91_F69B_41A8_96FD89A51F31_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B12364_8D91_F69B_41A8_96FD89A51F31_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B12364_8D91_F69B_41A8_96FD89A51F31.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B12364_8D91_F69B_41A8_96FD89A51F31_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6_t.jpg",
  "id": "panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6",
  "hfovMin": 60,
  "label": "C15",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A_t.jpg",
  "id": "panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A",
  "hfovMin": 60,
  "label": "C16",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3_t.jpg",
  "id": "panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3",
  "hfovMin": 60,
  "label": "C17",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B30481_8D92_539C_41DF_D27BED98D08F_t.jpg",
  "id": "panorama_82B30481_8D92_539C_41DF_D27BED98D08F",
  "hfovMin": 60,
  "label": "C18",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B30481_8D92_539C_41DF_D27BED98D08F_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B30481_8D92_539C_41DF_D27BED98D08F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B30481_8D92_539C_41DF_D27BED98D08F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B30481_8D92_539C_41DF_D27BED98D08F_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464_t.jpg",
  "id": "panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464",
  "hfovMin": 60,
  "label": "C19",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8_t.jpg",
  "id": "panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8",
  "hfovMin": 60,
  "label": "C20",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51_t.jpg",
  "id": "panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51",
  "hfovMin": 60,
  "label": "C21",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036_t.jpg",
  "id": "panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036",
  "hfovMin": 60,
  "label": "C22",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E_t.jpg",
  "id": "panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E",
  "hfovMin": 60,
  "label": "C23",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
    "media": "this.panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8301B5AA_896E_0D17_41D4_44EF2F5DE714_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9C80F8A3_8D9E_539C_41D8_A8268737D0B3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_82B51266_8D9E_F764_41C1_072392146C73",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B51266_8D9E_F764_41C1_072392146C73_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B1BB69_8D9E_F56C_41DA_C9F936E21355_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B043E9_8D9E_D56C_41D8_150B2A6C7215_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B18C60_8D9E_D29C_41D1_0CCA042C10AB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B074DB_8D9E_B3AC_41CF_DC6AF4E15E66_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B1AD1B_8D9E_B2AC_41CE_13400708949A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_82B08944_8D9E_52A4_41E0_B708434BF60C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B08944_8D9E_52A4_41E0_B708434BF60C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B1452E_8D9E_72E4_41D1_33D72195C7F4_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B0A134_8D9E_52E4_41D3_06AE84AF9488_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B17DA1_8D91_AD9D_4193_6D5C692A75D2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B0BA62_8D91_B69C_41D2_E9E6725C13B5_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B106C1_8D91_DF9C_41DF_9A0D61C99391_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_82B12364_8D91_F69B_41A8_96FD89A51F31",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B12364_8D91_F69B_41A8_96FD89A51F31_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B1306D_8D91_D364_41D4_E9748BD15DE6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B0EC35_8D91_D2E4_41D0_253625A74C6A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B13843_8D91_B29C_41D2_DD4256DA28E3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_82B30481_8D92_539C_41DF_D27BED98D08F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B30481_8D92_539C_41DF_D27BED98D08F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B2C07B_8D92_736C_41D6_A308A7B7B464_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B31C75_8D92_7364_41BA_99C2AE0370B8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B2F8DF_8D92_53A5_41E1_9BFC65616F51_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B2C5A5_8D92_BDE4_41CD_B7F9F67E1036_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
    "media": "this.panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_82B2820E_8D92_D6A4_41D0_5AB8448EB76E_camera"
   }
  ]
 },
 {
  "fieldOfViewOverlayOutsideColor": "#000000",
  "thumbnailUrl": "media/map_99E2419C_89D8_178C_41B1_81F79FEFBB49_t.png",
  "image": {
   "levels": [
    {
     "height": 652,
     "width": 1021,
     "url": "media/map_99E2419C_89D8_178C_41B1_81F79FEFBB49.png",
     "class": "ImageResourceLevel"
    },
    {
     "height": 326,
     "width": 510,
     "url": "media/map_99E2419C_89D8_178C_41B1_81F79FEFBB49_lq.png",
     "class": "ImageResourceLevel",
     "grayscale": true
    }
   ],
   "class": "ImageResource"
  },
  "class": "Map",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "label": "FloorPlan",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "width": 1021,
  "id": "map_99E2419C_89D8_178C_41B1_81F79FEFBB49",
  "maximumZoomFactor": 1,
  "height": 652,
  "minimumZoomFactor": 1,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "initialZoomFactor": 1
 },
 {
  "movementMode": "constrained",
  "id": "ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453MapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "paddingLeft": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "minHeight": 218,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundOpacity": 1,
   "minWidth": 342,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 342,
   "height": 218,
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453",
   "playbackBarHeadBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": 18,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  }
 },
 {
  "id": "playList_9C6F4E1F_8D92_AEA4_41DA_88B52ED11A8F",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453MapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_99E2419C_89D8_178C_41B1_81F79FEFBB49",
    "begin": "this.ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 }
], "children": [
 {
  "shadow": false,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "height": "100%",
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "height": "14.891%",
  "width": "98.372%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "class": "Container",
  "minHeight": 1,
  "horizontalAlign": "center",
  "layout": "vertical",
  "paddingBottom": 0,
  "bottom": "1.85%",
  "id": "Container_80152E5E_8D91_AEA4_41D5_FC0E979F973E",
  "paddingTop": 0,
  "left": "0.72%",
  "backgroundOpacity": 0,
  "minWidth": 1,
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "height": 90,
    "width": 408,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "minHeight": 1,
    "horizontalAlign": "center",
    "layout": "vertical",
    "paddingBottom": 0,
    "id": "Container_80EB9E59_8D91_AEAC_41DB_89DF56F4296C",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "top",
      "paddingLeft": 0,
      "height": 90,
      "width": 407,
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "center",
      "layout": "horizontal",
      "paddingBottom": 0,
      "id": "Container_80EB6E59_8D91_AEAC_41AF_812D4FC0A9BC",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "98.889%",
        "width": "73.775%",
        "borderRadius": 9,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_80EB7E59_8D91_AEAC_41BD_9EE01D5AFD03",
        "gap": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EB4E59_8D91_AEAC_41E1_25E928D48106",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EB5E59_8D91_AEAC_41CC_3462A9AF99FD",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EB2E5A_8D91_AEAC_41D7_CDAD1537CA05.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EB2E5A_8D91_AEAC_41D7_CDAD1537CA05_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EB3E5A_8D91_AEAC_41C2_C1462712D2F2, true, 0, null, null, false); this.setComponentVisibility(this.Label_80EAEE5A_8D91_AEAC_41D3_39D476A3C951, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EAAE5A_8D91_AEAC_41E1_0719CB6E5ECA, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA6E5A_8D91_AEAC_41DE_E45009D29F50, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA2E5A_8D91_AEAC_41D9_9F87B9B45E9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015EE5B_8D91_AEAC_41DD_4C6C819A000C, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EB2E5A_8D91_AEAC_41D7_CDAD1537CA05",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 747,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EB3E5A_8D91_AEAC_41C2_C1462712D2F2.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80EB3E5A_8D91_AEAC_41C2_C1462712D2F2",
              "maxHeight": 746,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EB0E5A_8D91_AEAC_41D4_2CE3500F609D",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EB1E5A_8D91_AEAC_41DD_5FC7B8879B9E",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "COMERCIAL",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EAEE5A_8D91_AEAC_41D3_39D476A3C951",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EAFE5A_8D91_AEAC_41B1_7DEEBE50D507",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EACE5A_8D91_AEAC_41D7_C73010770623",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EADE5A_8D91_AEAC_41CA_B7E950F11706.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EADE5A_8D91_AEAC_41CA_B7E950F11706_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EAAE5A_8D91_AEAC_41E1_0719CB6E5ECA, true, 0, null, null, false); this.setComponentVisibility(this.Label_80EA6E5A_8D91_AEAC_41DE_E45009D29F50, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EB3E5A_8D91_AEAC_41C2_C1462712D2F2, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EAEE5A_8D91_AEAC_41D3_39D476A3C951, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA2E5A_8D91_AEAC_41D9_9F87B9B45E9E, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015EE5B_8D91_AEAC_41DD_4C6C819A000C, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EADE5A_8D91_AEAC_41CA_B7E950F11706",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EAAE5A_8D91_AEAC_41E1_0719CB6E5ECA.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "id": "Image_80EAAE5A_8D91_AEAC_41E1_0719CB6E5ECA",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EABE5A_8D91_AEAC_41DC_4E3F113248F9",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA8E5A_8D91_AEAC_41DC_9154C8A19884",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "CUSTOMS",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA6E5A_8D91_AEAC_41DE_E45009D29F50",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EA7E5A_8D91_AEAC_41C7_51553FA26F26",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA4E5A_8D91_AEAC_419E_FCFA586149B9",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EA5E5A_8D91_AEAC_41D9_CDDC0275D4D6.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EA5E5A_8D91_AEAC_41D9_CDDC0275D4D6_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EA2E5A_8D91_AEAC_41D9_9F87B9B45E9E, true, 0, null, null, false); this.setComponentVisibility(this.Label_8015EE5B_8D91_AEAC_41DD_4C6C819A000C, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EB3E5A_8D91_AEAC_41C2_C1462712D2F2, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EAEE5A_8D91_AEAC_41D3_39D476A3C951, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EAAE5A_8D91_AEAC_41E1_0719CB6E5ECA, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA6E5A_8D91_AEAC_41DE_E45009D29F50, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EA5E5A_8D91_AEAC_41D9_CDDC0275D4D6",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EA2E5A_8D91_AEAC_41D9_9F87B9B45E9E.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80EA2E5A_8D91_AEAC_41D9_9F87B9B45E9E",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA3E5B_8D91_AEAC_41C5_3A7FC200C9A9",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA0E5B_8D91_AEAC_41CC_943D84927882",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "ECO",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8015EE5B_8D91_AEAC_41DD_4C6C819A000C",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "always"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "98.889%",
        "width": "73.775%",
        "borderRadius": 9,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8015CE5B_8D91_AEAC_41D4_4CE17FE2F922",
        "gap": 0,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EB5E5B_8D91_AEAC_41B8_19595336235D",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EB2E5B_8D91_AEAC_41D9_90DF5BAAFC74",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EB3E5B_8D91_AEAC_41DA_E8AB5FB419D2.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EB3E5B_8D91_AEAC_41DA_E8AB5FB419D2_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EB0E5B_8D91_AEAC_41DF_CCD1DBB6F4DE, true, 0, null, null, false); this.setComponentVisibility(this.Label_80EAFE5B_8D91_AEAC_41D1_76B7F111B0FA, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EA8E5B_8D91_AEAC_41C7_AB95E38C7E2D, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5C_8D91_AEA4_41B2_0DC9001BF816, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA0E5C_8D91_AEA4_41D6_B7DD00FC3DB0, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015FE5C_8D91_AEA4_41DF_ED0C6C85432B, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EB3E5B_8D91_AEAC_41DA_E8AB5FB419D2",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 747,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EB0E5B_8D91_AEAC_41DF_CCD1DBB6F4DE.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80EB0E5B_8D91_AEAC_41DF_CCD1DBB6F4DE",
              "maxHeight": 746,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EB1E5B_8D91_AEAC_41DC_91AACD46A17E",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JJ",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EAEE5B_8D91_AEAC_41D7_302DEBD50B07",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EAFE5B_8D91_AEAC_41D1_76B7F111B0FA",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EADE5B_8D91_AEAC_41CD_9C5AF08FA521",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EAAE5B_8D91_AEAC_41E0_A954EBF3CA24",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EABE5B_8D91_AEAC_41C6_AC7DC6C653C7.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EABE5B_8D91_AEAC_41C6_AC7DC6C653C7_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EA8E5B_8D91_AEAC_41C7_AB95E38C7E2D, true, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5C_8D91_AEA4_41B2_0DC9001BF816, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EB0E5B_8D91_AEAC_41DF_CCD1DBB6F4DE, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EAFE5B_8D91_AEAC_41D1_76B7F111B0FA, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA0E5C_8D91_AEA4_41D6_B7DD00FC3DB0, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015FE5C_8D91_AEA4_41DF_ED0C6C85432B, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EABE5B_8D91_AEAC_41C6_AC7DC6C653C7",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EA8E5B_8D91_AEAC_41C7_AB95E38C7E2D.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "id": "Image_80EA8E5B_8D91_AEAC_41C7_AB95E38C7E2D",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA6E5B_8D91_AEAC_41D9_2876EB641466",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA7E5B_8D91_AEAC_41D7_E351F42141DE",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA4E5C_8D91_AEA4_41B2_0DC9001BF816",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EA5E5C_8D91_AEA4_41E1_58C0559137AA",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA2E5C_8D91_AEA4_41E0_BFC2F2EEADBC",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EA3E5C_8D91_AEA4_41D2_9ECFAD7F56E8.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EA3E5C_8D91_AEA4_41D2_9ECFAD7F56E8_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EA0E5C_8D91_AEA4_41D6_B7DD00FC3DB0, true, 0, null, null, false); this.setComponentVisibility(this.Label_8015FE5C_8D91_AEA4_41DF_ED0C6C85432B, true, 0, null, null, false); this.setComponentVisibility(this.Image_80EB0E5B_8D91_AEAC_41DF_CCD1DBB6F4DE, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EAFE5B_8D91_AEAC_41D1_76B7F111B0FA, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA8E5B_8D91_AEAC_41C7_AB95E38C7E2D, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5C_8D91_AEA4_41B2_0DC9001BF816, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EA3E5C_8D91_AEA4_41D2_9ECFAD7F56E8",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EA0E5C_8D91_AEA4_41D6_B7DD00FC3DB0.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80EA0E5C_8D91_AEA4_41D6_B7DD00FC3DB0",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA1E5C_8D91_AEA4_41D1_FC43504ACA07",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8015EE5C_8D91_AEA4_41E0_827708AEF43B",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "JP",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8015FE5C_8D91_AEA4_41DF_ED0C6C85432B",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "always"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": 90,
        "width": "73.775%",
        "borderRadius": 9,
        "borderSize": 0,
        "gap": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "visible": false,
        "paddingBottom": 0,
        "id": "Container_8015CE5C_8D91_AEA4_41D6_6765795EB0E4",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_8015DE5C_8D91_AEA4_41DA_0C80191DB9AE",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80158E5C_8D91_AEA4_41E1_63A0879306CB",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80159E5C_8D91_AEA4_41C3_5F833D787022.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80159E5C_8D91_AEA4_41C3_5F833D787022_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80156E5C_8D91_AEA4_41D6_CFD310FEF257, true, 0, null, null, false); this.setComponentVisibility(this.Label_80155E5D_8D91_AEA4_41B4_4670AFB4EBC3, true, 0, null, null, false); this.setComponentVisibility(this.Image_80151E5D_8D91_AEA4_41D8_F39ACB5B82DE, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5D_8D91_AEA4_41E0_A1537E9CBAB6, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA1E5D_8D91_AEA4_41C6_5C0BB061B519, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015CE5D_8D91_AEA4_41D8_11C9144B5D83, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80159E5C_8D91_AEA4_41C3_5F833D787022",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 747,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80156E5C_8D91_AEA4_41D6_CFD310FEF257.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80156E5C_8D91_AEA4_41D6_CFD310FEF257",
              "maxHeight": 746,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80157E5C_8D91_AEA4_41E1_9BE16F43C234",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80154E5C_8D91_AEA4_41DB_B6EA65007CC7",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC THƯƠNG MẠI",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80155E5D_8D91_AEA4_41B4_4670AFB4EBC3",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80152E5D_8D91_AEA4_41DD_8060A6AECD16",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80153E5D_8D91_AEA4_41E0_E5ADAE61D32D",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80150E5D_8D91_AEA4_41D5_4F2A1E34E781.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80150E5D_8D91_AEA4_41D5_4F2A1E34E781_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80151E5D_8D91_AEA4_41D8_F39ACB5B82DE, true, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5D_8D91_AEA4_41E0_A1537E9CBAB6, true, 0, null, null, false); this.setComponentVisibility(this.Image_80156E5C_8D91_AEA4_41D6_CFD310FEF257, false, 0, null, null, false); this.setComponentVisibility(this.Label_80155E5D_8D91_AEA4_41B4_4670AFB4EBC3, false, 0, null, null, false); this.setComponentVisibility(this.Image_80EA1E5D_8D91_AEA4_41C6_5C0BB061B519, false, 0, null, null, false); this.setComponentVisibility(this.Label_8015CE5D_8D91_AEA4_41D8_11C9144B5D83, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80150E5D_8D91_AEA4_41D5_4F2A1E34E781",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80151E5D_8D91_AEA4_41D8_F39ACB5B82DE.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "paddingBottom": 0,
              "id": "Image_80151E5D_8D91_AEA4_41D8_F39ACB5B82DE",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_8014EE5D_8D91_AEA4_41BD_2F9CCA956EDF",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8014FE5D_8D91_AEA4_41D7_A8B6067DFE9E",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC VĂN HÓA",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_80EA4E5D_8D91_AEA4_41E0_A1537E9CBAB6",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": 90,
          "width": 94,
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "vertical",
          "paddingBottom": 0,
          "id": "Container_80EA5E5D_8D91_AEA4_41CA_E43D59BB633D",
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "visible",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 63,
            "width": 63,
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_80EA2E5D_8D91_AEA4_41BF_046BFD84B7B5",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "mode": "push",
              "paddingLeft": 0,
              "iconURL": "skin/IconButton_80EA3E5D_8D91_AEA4_41DC_14A5FE9D69AE.png",
              "height": 300,
              "maxWidth": 63,
              "width": 300,
              "transparencyActive": false,
              "borderRadius": 0,
              "borderSize": 0,
              "rollOverIconURL": "skin/IconButton_80EA3E5D_8D91_AEA4_41DC_14A5FE9D69AE_rollover.png",
              "class": "IconButton",
              "minHeight": 1,
              "horizontalAlign": "center",
              "top": "0%",
              "click": "this.setComponentVisibility(this.Image_80EA1E5D_8D91_AEA4_41C6_5C0BB061B519, true, 0, null, null, false); this.setComponentVisibility(this.Label_8015CE5D_8D91_AEA4_41D8_11C9144B5D83, true, 0, null, null, false); this.setComponentVisibility(this.Image_80156E5C_8D91_AEA4_41D6_CFD310FEF257, false, 0, null, null, false); this.setComponentVisibility(this.Label_80155E5D_8D91_AEA4_41B4_4670AFB4EBC3, false, 0, null, null, false); this.setComponentVisibility(this.Image_80151E5D_8D91_AEA4_41D8_F39ACB5B82DE, false, 0, null, null, false); this.setComponentVisibility(this.Label_80EA4E5D_8D91_AEA4_41E0_A1537E9CBAB6, false, 0, null, null, false)",
              "cursor": "hand",
              "paddingBottom": 0,
              "id": "IconButton_80EA3E5D_8D91_AEA4_41DC_14A5FE9D69AE",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": 63,
              "maxWidth": 63,
              "width": 63,
              "borderRadius": 0,
              "borderSize": 0,
              "url": "skin/Image_80EA1E5D_8D91_AEA4_41C6_5C0BB061B519.png",
              "scaleMode": "fit_inside",
              "horizontalAlign": "center",
              "class": "Image",
              "minHeight": 1,
              "top": "0%",
              "visible": false,
              "paddingBottom": 0,
              "id": "Image_80EA1E5D_8D91_AEA4_41C6_5C0BB061B519",
              "maxHeight": 63,
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "top",
            "paddingLeft": 0,
            "height": 21,
            "width": "100%",
            "borderRadius": 0,
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "left",
            "layout": "absolute",
            "paddingBottom": 0,
            "id": "Container_8015EE5D_8D91_AEA4_41BC_D63895912D40",
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontColor": "#FFFFFF",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8015FE5D_8D91_AEA4_41E1_2B1A011461C1",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             },
             {
              "verticalAlign": "middle",
              "paddingRight": 0,
              "fontSize": 9,
              "paddingLeft": 0,
              "textDecoration": "none",
              "width": "100%",
              "height": "96.774%",
              "borderRadius": 0,
              "fontFamily": "Arial",
              "text": "TRỤC SINH THÁI",
              "borderSize": 0,
              "fontColor": "#FFFF00",
              "class": "Label",
              "minHeight": 1,
              "horizontalAlign": "center",
              "fontWeight": "normal",
              "visible": false,
              "paddingBottom": 0,
              "bottom": "0%",
              "id": "Label_8015CE5D_8D91_AEA4_41D8_11C9144B5D83",
              "fontStyle": "normal",
              "paddingTop": 0,
              "left": "0%",
              "backgroundOpacity": 0,
              "minWidth": 1,
              "shadow": false
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "always"
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": 42,
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "minHeight": 1,
    "horizontalAlign": "left",
    "layout": "horizontal",
    "paddingBottom": 0,
    "id": "Container_8015DE5D_8D91_AEA4_41CF_FAB3D461EC76",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "height": 42,
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "left",
      "layout": "horizontal",
      "paddingBottom": 0,
      "id": "Container_8015AE5D_8D91_AEA4_41A9_F8194DCCDFB8",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "paddingLeft": 0,
        "iconURL": "skin/IconButton_8015BE5E_8D91_AEA4_41B8_01758CE2E957.png",
        "height": 35,
        "maxWidth": 84,
        "width": 35,
        "transparencyActive": false,
        "borderRadius": 0,
        "borderSize": 0,
        "class": "IconButton",
        "minHeight": 1,
        "horizontalAlign": "center",
        "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
        "cursor": "hand",
        "paddingBottom": 0,
        "id": "IconButton_8015BE5E_8D91_AEA4_41B8_01758CE2E957",
        "maxHeight": 84,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "shadow": false
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "top",
      "paddingLeft": 0,
      "height": 42,
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "center",
      "layout": "horizontal",
      "paddingBottom": 0,
      "id": "Container_80158E5E_8D91_AEA4_41D8_3D0B83332336",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "top",
        "paddingLeft": 0,
        "height": 27,
        "width": 27,
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "left",
        "layout": "absolute",
        "paddingBottom": 0,
        "id": "Container_80156E5E_8D91_AEA4_41D7_475943EF0BE6",
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 27,
          "maxWidth": 509,
          "width": 27,
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_80157E5E_8D91_AEA4_41CA_DE7359D9835B.png",
          "scaleMode": "fit_inside",
          "class": "Image",
          "minHeight": 1,
          "horizontalAlign": "center",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Image_80154E5E_8D91_AEA4_41B5_EE9E7A67C721, true, 0, null, null, false); this.setComponentVisibility(this.Container_80EB6E59_8D91_AEAC_41AF_812D4FC0A9BC, false, 0, null, null, false); this.setComponentVisibility(this.Image_80157E5E_8D91_AEA4_41CA_DE7359D9835B, false, 0, null, null, false)",
          "paddingBottom": 0,
          "id": "Image_80157E5E_8D91_AEA4_41CA_DE7359D9835B",
          "maxHeight": 509,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "right": "-1.96%",
          "shadow": false
         },
         {
          "verticalAlign": "middle",
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "maxWidth": 509,
          "width": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_80154E5E_8D91_AEA4_41B5_EE9E7A67C721.png",
          "scaleMode": "fit_inside",
          "class": "Image",
          "minHeight": 1,
          "horizontalAlign": "center",
          "top": "0%",
          "click": "this.setComponentVisibility(this.Container_80EB6E59_8D91_AEAC_41AF_812D4FC0A9BC, true, 0, null, null, false); this.setComponentVisibility(this.Image_80157E5E_8D91_AEA4_41CA_DE7359D9835B, true, 0, null, null, false); this.setComponentVisibility(this.Image_80154E5E_8D91_AEA4_41B5_EE9E7A67C721, false, 0, null, null, false)",
          "visible": false,
          "paddingBottom": 0,
          "id": "Image_80154E5E_8D91_AEA4_41B5_EE9E7A67C721",
          "maxHeight": 509,
          "paddingTop": 0,
          "left": "0%",
          "backgroundOpacity": 0,
          "minWidth": 1,
          "shadow": false
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "top",
      "paddingLeft": 0,
      "height": 42,
      "width": "33.33%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "left",
      "layout": "absolute",
      "paddingBottom": 0,
      "id": "Container_80155E5E_8D91_AEA4_41DD_1AD1A9A87EF7",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "shadow": false,
      "scrollBarVisible": "rollOver"
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "top",
  "paddingLeft": 0,
  "height": "96.957%",
  "width": "98.794%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "class": "Container",
  "minHeight": 1,
  "horizontalAlign": "left",
  "layout": "absolute",
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_8057D91A_8D92_D2AC_41BF_5ACCF99F6166",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "height": "99.332%",
    "width": 38.1,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "class": "Container",
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": 0,
    "layout": "absolute",
    "paddingBottom": 0,
    "id": "Container_8057791A_8D92_D2AC_41D3_537A99BEA07F",
    "paddingTop": 0,
    "left": 14,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_8057091A_8D92_D2AC_41DE_A242AAFFFE1E.png",
      "height": 35,
      "maxWidth": 108,
      "width": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "IconButton",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_8057091A_8D92_D2AC_41DE_A242AAFFFE1E, false, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8057191A_8D92_D2AC_41A7_464AF0417870, true, 0, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "id": "IconButton_8057091A_8D92_D2AC_41DE_A242AAFFFE1E",
      "maxHeight": 108,
      "paddingTop": 0,
      "left": "0%",
      "backgroundOpacity": 0,
      "minWidth": 1,
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_8057191A_8D92_D2AC_41A7_464AF0417870.png",
      "height": 35,
      "maxWidth": 108,
      "width": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "IconButton",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_8057191A_8D92_D2AC_41A7_464AF0417870, false, 0, null, null, false); this.setComponentVisibility(this.Container_8057291A_8D92_D2AC_41D1_394963D7292E, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8057C91A_8D92_D2AC_41D3_B15DE33383EE, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8057191A_8D92_D2AC_41A7_464AF0417870",
      "maxHeight": 108,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": "-2.13%",
      "shadow": false
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "height": 335,
    "width": 1638,
    "borderRadius": 9,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "minHeight": 1,
    "horizontalAlign": "left",
    "top": "0.06%",
    "layout": "absolute",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_8057291A_8D92_D2AC_41D1_394963D7292E",
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     "this.ViewerAreaLabeled_8057391A_8D92_D2AC_41A8_3FF5A2E91453",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_8057C91A_8D92_D2AC_41D3_B15DE33383EE.png",
      "height": 35,
      "maxWidth": 108,
      "width": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "IconButton",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "0.1%",
      "click": "this.setComponentVisibility(this.Container_8057291A_8D92_D2AC_41D1_394963D7292E, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8057C91A_8D92_D2AC_41D3_B15DE33383EE, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8057191A_8D92_D2AC_41A7_464AF0417870, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8057C91A_8D92_D2AC_41D3_B15DE33383EE",
      "maxHeight": 108,
      "paddingTop": 0,
      "left": "1.17%",
      "backgroundOpacity": 0,
      "minWidth": 1,
      "shadow": false
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "gap": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "class": "Container",
    "minHeight": 1,
    "horizontalAlign": "center",
    "top": "-3.14%",
    "layout": "absolute",
    "visible": false,
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_83644961_8D92_D29D_41E0_78A311A92253",
    "paddingTop": 0,
    "left": "-1.22%",
    "backgroundOpacity": 0.3,
    "minWidth": 1,
    "children": [
     {
      "shadow": false,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "100%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "url": "skin/Image_8365B95F_8D92_D2A5_41DD_833751FE3468.png",
      "horizontalAlign": "center",
      "scaleMode": "fit_outside",
      "class": "Image",
      "minHeight": 1,
      "top": 0,
      "paddingBottom": 0,
      "id": "Image_8365B95F_8D92_D2A5_41DD_833751FE3468",
      "paddingTop": 0,
      "left": -0.04,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "height": "88.587%",
      "width": "60.736%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "center",
      "top": "2.62%",
      "layout": "vertical",
      "visible": false,
      "paddingBottom": 0,
      "id": "Container_8365895F_8D92_D2A5_41D8_94AE50146926",
      "paddingTop": 0,
      "left": "18.69%",
      "backgroundOpacity": 0,
      "minWidth": 1,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "bottom",
        "paddingLeft": 0,
        "height": "10.152%",
        "width": "92.083%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8365995F_8D92_D2A5_41DD_A5174D04F231",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "shadow": false,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "73.333%",
          "maxWidth": 500,
          "width": "79.193%",
          "borderRadius": 0,
          "borderSize": 0,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "class": "Image",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8364695F_8D92_D2A5_41CA_DDDF3DEFC23D",
          "url": "skin/Image_8364695F_8D92_D2A5_41CA_DDDF3DEFC23D.png",
          "maxHeight": 61,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "verticalAlign": "middle"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "top",
        "paddingLeft": 0,
        "height": "1.764%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "left",
        "layout": "absolute",
        "paddingBottom": 0,
        "id": "Container_8364795F_8D92_D2A5_41BC_12FCDA0FF3D4",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "7.327%",
        "width": "99.94%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8364495F_8D92_D2A5_41DD_0063D6BEEEB1",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "86.667%",
          "width": "99.901%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_8364595F_8D92_D2A5_41DD_897CC194D82D",
          "gap": 6,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "97.297%",
            "maxWidth": 300,
            "width": "10.55%",
            "borderRadius": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "center",
            "layout": "horizontal",
            "paddingBottom": 0,
            "id": "Container_8364395F_8D92_D2A5_41DA_A82938237DDC",
            "gap": 10,
            "maxHeight": 300,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "shadow": false,
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": "96%",
              "maxWidth": 108,
              "width": "95.833%",
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_8364095F_8D92_D2A5_41CD_D132C0E7553E",
              "url": "skin/Image_8364095F_8D92_D2A5_41CD_D132C0E7553E.png",
              "maxHeight": 108,
              "paddingTop": 0,
              "backgroundOpacity": 0,
              "minWidth": 1,
              "verticalAlign": "middle"
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "97.297%",
            "maxWidth": 300,
            "width": "10.549%",
            "borderRadius": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "center",
            "layout": "horizontal",
            "paddingBottom": 0,
            "id": "Container_8364195F_8D92_D2A5_41CE_25A7593ED6CE",
            "gap": 10,
            "maxHeight": 300,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "shadow": false,
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": "96%",
              "maxWidth": 108,
              "width": "95.83%",
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_8364E95F_8D92_D2A5_41DB_3A552E8EB576",
              "url": "skin/Image_8364E95F_8D92_D2A5_41DB_3A552E8EB576.png",
              "maxHeight": 108,
              "paddingTop": 0,
              "backgroundOpacity": 0,
              "minWidth": 1,
              "verticalAlign": "middle"
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "verticalAlign": "middle",
            "paddingLeft": 0,
            "height": "97.297%",
            "maxWidth": 1000,
            "width": "46.753%",
            "borderRadius": 0,
            "borderSize": 0,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "class": "Container",
            "minHeight": 1,
            "horizontalAlign": "center",
            "layout": "horizontal",
            "paddingBottom": 0,
            "id": "Container_8364F95F_8D92_D2A5_41D3_D4A0E5B93457",
            "gap": 10,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "children": [
             {
              "shadow": false,
              "paddingRight": 0,
              "paddingLeft": 0,
              "height": "70.59%",
              "maxWidth": 275,
              "width": "99.138%",
              "borderRadius": 0,
              "borderSize": 0,
              "horizontalAlign": "center",
              "scaleMode": "fit_inside",
              "class": "Image",
              "minHeight": 1,
              "paddingBottom": 0,
              "id": "Image_8364C95F_8D92_D2A5_41DF_B2A48E27A817",
              "url": "skin/Image_8364C95F_8D92_D2A5_41DF_B2A48E27A817.png",
              "maxHeight": 40,
              "paddingTop": 0,
              "backgroundOpacity": 0,
              "minWidth": 1,
              "verticalAlign": "middle"
             }
            ],
            "shadow": false,
            "scrollBarVisible": "rollOver"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "hidden",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "1.227%",
        "width": "99.858%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8364D95F_8D92_D2A5_41D2_777ADFF6124C",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "shadow": false,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 2,
          "maxWidth": 726,
          "width": 726,
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_8364B95F_8D92_D2A5_41D1_38BED23A865F.png",
          "scaleMode": "fit_inside",
          "horizontalAlign": "center",
          "class": "Image",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_8364B95F_8D92_D2A5_41D1_38BED23A865F",
          "maxHeight": 2,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "verticalAlign": "middle"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "4.417%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8364895F_8D92_D2A5_41DD_44AD881CA86E",
        "gap": 5,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "13.477%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_8364995F_8D92_D2A5_41D7_27C3028F0392",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "97.14%",
            "maxWidth": 117,
            "width": "86.03%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8363695F_8D92_D2A5_41DD_9A96324B9C94",
            "url": "skin/Image_8363695F_8D92_D2A5_41DD_9A96324B9C94.png",
            "maxHeight": 45,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "14.091%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83637960_8D92_D29B_41CF_0E23719FC65C",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "maxWidth": 258,
            "width": "97.183%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83634960_8D92_D29B_41B0_91124E82E3E4",
            "url": "skin/Image_83634960_8D92_D29B_41B0_91124E82E3E4.png",
            "maxHeight": 243,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "39.063%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83635960_8D92_D29B_41AC_A4292B4A0EBC",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "97.14%",
            "maxWidth": 408,
            "width": "99.491%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83632960_8D92_D29B_41AA_A404FD67D38C",
            "url": "skin/Image_83632960_8D92_D29B_41AA_A404FD67D38C.png",
            "maxHeight": 45,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "15.139%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83633960_8D92_D29B_41D2_2D394DBDB407",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "100%",
            "maxWidth": 300,
            "width": 30,
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83630960_8D92_D29B_41B5_FC177885E4C0",
            "url": "skin/Image_83630960_8D92_D29B_41B5_FC177885E4C0.png",
            "maxHeight": 300,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "7.276%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_83646960_8D92_D29B_41D2_54D8495678DE",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "97.67%",
          "width": "83.008%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83647960_8D92_D29B_41CA_9BC2E72EE2C7",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "64.407%",
            "maxWidth": 734,
            "width": "87.799%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83644960_8D92_D29B_41D2_4465DBB5FAAE",
            "url": "skin/Image_83644960_8D92_D29B_41D2_4465DBB5FAAE.png",
            "maxHeight": 49,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "hidden",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "2.454%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_83645960_8D92_D29B_41DD_14610C71AA28",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "shadow": false,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 2,
          "maxWidth": 726,
          "width": 726,
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_83642960_8D92_D29B_41E0_3825BC084823.png",
          "scaleMode": "fit_inside",
          "horizontalAlign": "center",
          "class": "Image",
          "minHeight": 1,
          "paddingBottom": 0,
          "id": "Image_83642960_8D92_D29B_41E0_3825BC084823",
          "maxHeight": 2,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "verticalAlign": "middle"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "6.937%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_83643960_8D92_D29B_41DC_E5BEB2F9B299",
        "gap": 4,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "62.5%",
          "width": "13.505%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83640960_8D92_D29B_417E_E919647E582C",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "97.14%",
            "maxWidth": 117,
            "width": "86.03%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83641960_8D92_D29B_41D0_06C1655F4090",
            "url": "skin/Image_83641960_8D92_D29B_41D0_06C1655F4090.png",
            "maxHeight": 45,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "12.891%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_8364E960_8D92_D29B_41B2_BE29245A56EC",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "83.33%",
            "maxWidth": 222,
            "width": "85.42%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8364F960_8D92_D29B_41D8_3B5DB1354D55",
            "url": "skin/Image_8364F960_8D92_D29B_41D8_3B5DB1354D55.png",
            "maxHeight": 222,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "67.857%",
          "width": "54.618%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_8364C960_8D92_D29B_41C7_838DF414A79A",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "84.211%",
            "maxWidth": 459,
            "width": "83.455%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_8364D960_8D92_D29B_41CC_5E59E660DBF5",
            "url": "skin/Image_8364D960_8D92_D29B_41CC_5E59E660DBF5.png",
            "maxHeight": 41,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "verticalAlign": "middle",
        "paddingLeft": 0,
        "height": "5.834%",
        "width": "100%",
        "borderRadius": 0,
        "borderSize": 0,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "minHeight": 1,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "paddingBottom": 0,
        "id": "Container_8364B960_8D92_D29B_41B8_05A28DB01920",
        "gap": 10,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "minWidth": 1,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "verticalAlign": "middle",
          "paddingLeft": 0,
          "height": "100%",
          "width": "33.984%",
          "borderRadius": 0,
          "borderSize": 0,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "class": "Container",
          "minHeight": 1,
          "horizontalAlign": "center",
          "layout": "horizontal",
          "paddingBottom": 0,
          "id": "Container_83648960_8D92_D29B_41DC_BF1A084BB878",
          "gap": 10,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "minWidth": 1,
          "children": [
           {
            "shadow": false,
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "70.833%",
            "maxWidth": 297,
            "width": "86.842%",
            "borderRadius": 0,
            "borderSize": 0,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "class": "Image",
            "minHeight": 1,
            "paddingBottom": 0,
            "id": "Image_83649960_8D92_D29B_41D4_205BD44CF130",
            "url": "skin/Image_83649960_8D92_D29B_41D4_205BD44CF130.png",
            "maxHeight": 44,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "minWidth": 1,
            "verticalAlign": "middle"
           }
          ],
          "shadow": false,
          "scrollBarVisible": "rollOver"
         }
        ],
        "shadow": false,
        "scrollBarVisible": "rollOver"
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "verticalAlign": "top",
      "paddingLeft": 0,
      "height": "12.935%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "contentOpaque": false,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "left",
      "top": "0%",
      "layout": "absolute",
      "paddingBottom": 0,
      "id": "Container_83636961_8D92_D29D_41C7_8BFEA38C98F1",
      "paddingTop": 0,
      "left": "0%",
      "backgroundOpacity": 0,
      "minWidth": 1,
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "mode": "push",
        "paddingLeft": 0,
        "iconURL": "skin/IconButton_83634961_8D92_D29D_41A2_8F26A59BF147.png",
        "height": 29,
        "maxWidth": 72,
        "width": 31,
        "transparencyActive": false,
        "borderRadius": 0,
        "borderSize": 0,
        "class": "IconButton",
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "23.74%",
        "click": "this.setComponentVisibility(this.Container_83644961_8D92_D29D_41E0_78A311A92253, false, 0, null, null, false)",
        "cursor": "hand",
        "paddingBottom": 0,
        "id": "IconButton_83634961_8D92_D29D_41A2_8F26A59BF147",
        "maxHeight": 72,
        "paddingTop": 0,
        "left": "3.02%",
        "backgroundOpacity": 0,
        "minWidth": 1,
        "shadow": false
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "height": "77.065%",
      "width": "53.136%",
      "borderRadius": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "left",
      "layout": "absolute",
      "visible": false,
      "paddingBottom": 0,
      "bottom": "9.57%",
      "id": "Container_83635961_8D92_D29D_41E0_AC6AB2D146E9",
      "gap": 10,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "backgroundOpacity": 0.3,
      "minWidth": 1,
      "right": "20.33%",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "fontSize": 36,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "70.034%",
        "height": "77.433%",
        "borderRadius": 0,
        "fontFamily": "Arial",
        "text": "English",
        "borderSize": 0,
        "fontColor": "#FFFFFF",
        "class": "Label",
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "8.32%",
        "fontWeight": "normal",
        "paddingBottom": 0,
        "id": "Label_8365D961_8D92_D29D_41CD_19298246BDE0",
        "fontStyle": "normal",
        "paddingTop": 0,
        "left": "14.87%",
        "backgroundOpacity": 0,
        "minWidth": 1,
        "shadow": false
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "backgroundColorDirection": "vertical",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "verticalAlign": "top",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "height": "72.065%",
      "width": "54.346%",
      "borderRadius": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "minHeight": 1,
      "horizontalAlign": "left",
      "layout": "absolute",
      "visible": false,
      "paddingBottom": 0,
      "bottom": "13.8%",
      "id": "Container_8365A961_8D92_D29D_41D6_F32FABF7337A",
      "gap": 10,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "backgroundOpacity": 0.3,
      "minWidth": 1,
      "right": "20.75%",
      "children": [
       {
        "verticalAlign": "middle",
        "paddingRight": 0,
        "fontSize": 36,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "37.292%",
        "height": "26.848%",
        "borderRadius": 0,
        "fontFamily": "Arial",
        "text": "Japanese",
        "borderSize": 0,
        "fontColor": "#FFFFFF",
        "class": "Label",
        "minHeight": 1,
        "horizontalAlign": "center",
        "top": "36.5%",
        "fontWeight": "normal",
        "paddingBottom": 0,
        "id": "Label_8365B961_8D92_D29D_41DA_E6599FE4C62E",
        "fontStyle": "normal",
        "paddingTop": 0,
        "left": "31.3%",
        "backgroundOpacity": 0,
        "minWidth": 1,
        "shadow": false
       }
      ],
      "shadow": false,
      "scrollBarVisible": "rollOver"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_83658961_8D92_D29D_41C4_0FDF5B37446D.png",
      "height": 32,
      "width": 32,
      "transparencyActive": true,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_83658961_8D92_D29D_41C4_0FDF5B37446D_rollover.png",
      "class": "IconButton",
      "minHeight": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68, true, 0, null, null, false); this.setComponentVisibility(this.Container_8365895F_8D92_D2A5_41D8_94AE50146926, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "bottom": "42.35%",
      "id": "IconButton_83658961_8D92_D29D_41C4_0FDF5B37446D",
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_83658961_8D92_D29D_41C4_0FDF5B37446D_pressed.png",
      "backgroundOpacity": 0,
      "minWidth": 0,
      "right": "14.02%",
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_83659961_8D92_D29D_41D2_93E543A095B4.png",
      "height": 52,
      "maxWidth": 53,
      "width": 53,
      "transparencyActive": true,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "IconButton",
      "minHeight": 1,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_9C759F1A_8D4D_6917_41D1_99D9098BCBC0, true, 0, null, null, false); this.setComponentVisibility(this.Container_83635961_8D92_D29D_41E0_AC6AB2D146E9, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "bottom": "36.22%",
      "id": "IconButton_83659961_8D92_D29D_41D2_93E543A095B4",
      "maxHeight": 52,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": "4.97%",
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_83646961_8D92_D29D_41D0_041AAB341574.png",
      "height": 20,
      "maxWidth": 24,
      "width": 24,
      "transparencyActive": true,
      "borderRadius": 0,
      "borderSize": 0,
      "class": "IconButton",
      "minHeight": 1,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_9C4C9683_8D76_9BF5_41DE_B6C4865FBFEB, true, 0, null, null, false); this.setComponentVisibility(this.Container_8365A961_8D92_D29D_41D6_F32FABF7337A, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "bottom": "28.4%",
      "id": "IconButton_83646961_8D92_D29D_41D0_041AAB341574",
      "maxHeight": 20,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": "1.59%",
      "shadow": false
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "horizontalAlign": "left",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_9C6F4E1F_8D92_AEA4_41DA_88B52ED11A8F.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_8365B95F_8D92_D2A5_41DD_833751FE3468.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "minWidth": 20,
 "shadow": false,
 "scrollBarVisible": "rollOver"
})