(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"shadow":false,"defaultVRPointer":"laser","contentOpaque":false,"gap":10,"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","scrollBarWidth":10,"width":"100%","propagateClick":false,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","horizontalAlign":"left","paddingTop":0,"class":"Player","paddingBottom":0,"id":"rootPlayer","backgroundOpacity":1,"borderRadius":0,"paddingLeft":0,"mouseWheelEnabled":true,"paddingRight":0,"scrollBarMargin":2,"verticalAlign":"top","definitions": [{"subtitlesVerticalAlign":"bottom","toolTipShadowBlurRadius":3,"subtitlesHorizontalAlign":"center","playbackBarOpacity":1,"toolTipShadowOpacity":1,"subtitlesBorderSize":0,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBackgroundOpacity":1,"doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","borderRadius":0,"subtitlesTextShadowOpacity":1,"id":"MainViewer","toolTipFontStyle":"normal","toolTipTextShadowOpacity":0,"paddingLeft":0,"transitionMode":"blending","playbackBarBackgroundColor":["#FFFFFF"],"paddingRight":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","surfaceReticleOpacity":0.6,"playbackBarProgressBorderSize":0,"subtitlesFontWeight":"normal","displayTooltipInTouchScreens":true,"toolTipBorderRadius":3,"subtitlesPaddingLeft":5,"subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"progressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"toolTipFontColor":"#606060","subtitlesPaddingRight":5,"height":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"progressOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorDirection":"vertical","playbackBarBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","toolTipShadowVerticalLength":0,"toolTipShadowSpread":0,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"borderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","toolTipFontWeight":"normal","progressBorderColor":"#000000","minHeight":50,"playbackBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBorderColor":"#FFFFFF","minWidth":100,"playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"subtitlesTop":0,"toolTipHorizontalAlign":"center","transitionDuration":500,"progressBackgroundColor":["#FFFFFF"],"propagateClick":false,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","progressBarOpacity":1,"playbackBarProgressOpacity":1,"vrPointerSelectionColor":"#FF6600","vrPointerColor":"#FFFFFF","paddingTop":0,"class":"ViewerArea","paddingBottom":0,"progressHeight":10,"subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"toolTipShadowColor":"#333333","playbackBarBorderSize":0,"progressBarBorderRadius":0,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBottom":0,"toolTipBorderSize":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipOpacity":1,"subtitlesPaddingBottom":5,"translationTransitionDuration":1000,"toolTipPaddingTop":4,"subtitlesEnabled":true,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"subtitlesTextShadowBlurRadius":0,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarHeadShadowHorizontalLength":0,"playbackBarLeft":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadHeight":15,"progressLeft":0,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderColor":"#767676","subtitlesShadow":false,"toolTipShadowHorizontalLength":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"vrPointerSelectionTime":2000,"subtitlesOpacity":1,"data":{"name":"Main Viewer"},"playbackBarHeadOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesGap":0,"shadow":false,"subtitlesBackgroundColor":"#000000"},{"aaEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","zoomEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","clickAction":"play_pause","displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"partial":false,"hfov":360,"overlays":["this.overlay_BDDF2D04_B16A_4CE0_41E0_32EA7BB69842"],"class":"Panorama","vfov":180,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_t.jpg","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_0/{face}/0/{row}_{column}.jpg","colCount":12,"height":1024,"rowCount":2,"tags":"ondemand"},{"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_0/{face}/1/{row}_{column}.jpg","colCount":6,"height":512,"rowCount":1,"tags":["ondemand","preload"]}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"label":trans('panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_t.jpg","id":"panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6","data":{"label":"02"}},{"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_BBF909EE_B16A_3720_41AA_AB10AEDEABCA","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_camera"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6_camera","media":"this.panorama_BAD00FCB_B16A_4B60_41E4_381F4BDCDBE6","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"video":{"height":624,"width":1182,"levels":[{"width":1182,"class":"VideoResourceLevel","url":"media/video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0.mp4","framerate":30,"height":624,"type":"video/mp4","bitrate":1659,"posterURL":"media/video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0_poster.jpg"}],"class":"VideoResource"},"loop":false,"height":676,"width":1280,"class":"Video","id":"video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0","thumbnailUrl":"media/video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0_t.jpg","label":trans('video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0.label'),"autoplay":true,"data":{"label":"KING CROWN INFINITY"},"scaleMode":"fit_inside"},{"class":"PlayList","items":[{"class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_BE68347C_B16E_FD20_41CB_86C8548A4C8B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BE68347C_B16E_FD20_41CB_86C8548A4C8B, 0)"}],"id":"playList_BE68347C_B16E_FD20_41CB_86C8548A4C8B"},{"distance":50,"videoVisibleOnStop":false,"click":"this.overlay_BDDF2D04_B16A_4CE0_41E0_32EA7BB69842.play()","loop":false,"video":{"height":624,"width":1182,"levels":[{"width":1182,"class":"VideoResourceLevel","url":"media/video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0.mp4","framerate":30,"height":624,"type":"video/mp4","bitrate":1659,"posterURL":"media/video_BDBF8EB0_B16A_4D20_41E0_DFDD0FA3C5A0_poster.jpg"}],"class":"VideoResource"},"enabledInCardboard":true,"useHandCursor":true,"class":"QuadVideoPanoramaOverlay","autoplay":false,"cues":[],"vertices":[{"yaw":0.72,"class":"PanoramaPoint","pitch":11.16},{"yaw":32.5,"class":"PanoramaPoint","pitch":10.67},{"yaw":32.02,"class":"PanoramaPoint","pitch":-5.31},{"yaw":0.72,"class":"PanoramaPoint","pitch":-4.83}],"image":"this.res_BF159857_B16A_3560_41E2_EF0A410FD5AB","id":"overlay_BDDF2D04_B16A_4CE0_41E0_32EA7BB69842"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_BBF909EE_B16A_3720_41AA_AB10AEDEABCA"},{"levels":[{"height":676,"width":1280,"class":"ImageResourceLevel","url":"media/res_BF159857_B16A_3560_41E2_EF0A410FD5AB_0.jpg"}],"class":"ImageResource","id":"res_BF159857_B16A_3560_41E2_EF0A410FD5AB"}],"height":"100%","downloadEnabled":false,"mediaActivationMode":"window","backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"children":["this.MainViewer"],"scrollBarOpacity":0.5,"layout":"absolute","overflow":"hidden","scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"scripts":{"quizFinish":TDV.Tour.Script.quizFinish,"translate":TDV.Tour.Script.translate,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getKey":TDV.Tour.Script.getKey,"mixObject":TDV.Tour.Script.mixObject,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"init":TDV.Tour.Script.init,"unregisterKey":TDV.Tour.Script.unregisterKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isPanorama":TDV.Tour.Script.isPanorama,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initQuiz":TDV.Tour.Script.initQuiz,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlays":TDV.Tour.Script.getOverlays,"setLocale":TDV.Tour.Script.setLocale,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot},"backgroundColorRatios":[0],"borderSize":0,"backgroundPreloadEnabled":true,"start":"this.init()","data":{"defaultLocale":"en","name":"Player608","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"minWidth":20,"minHeight":20};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.0.js.map
//Generated with v2021.2.0, Sun Oct 24 2021