using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

using Niantic.ARDK.AR;
using Niantic.ARDK.Utilities;

using Niantic.ARDK.AR.ARSessionEventArgs;
using Niantic.ARDK.AR.Configuration;

using Niantic.ARDK.AR.Awareness;
using Niantic.ARDK.AR.Awareness.Semantics;

using Niantic.ARDK.Extensions;

public class Semantics : MonoBehaviour
{
    // Start is called before the first frame update

    ISemanticBuffer _currentBuffer;

    public ARSemanticSegmentationManager _semanticManager;
    public Camera _camera;

    public Text _Textt;


    void Start()
    {
        _semanticManager.SemanticBufferUpdated += OnSemanticsBufferUpdated;
        
    }

    private void OnSemanticsBufferUpdated(ContextAwarenessStreamUpdatedArgs<ISemanticBuffer> args) 
    {

        _currentBuffer = args.Sender.AwarenessBuffer;
    
    }

    // Update is called once per frame
    void Update()
    {
        if (PlatformAgnosticInput.touchCount <= 0) { return; }
        var touch = PlatformAgnosticInput.GetTouch(0);
        if (touch.phase == TouchPhase.Began) 
        {
         //   Debug.Log("" + _semanticManager.SemanticBufferProcessor.ChannelCount);
         //   foreach (var c in _semanticManager.SemanticBufferProcessor.Channels)
         //       Debug.Log(c);

            int x = (int)touch.position.x;
            int y = (int)touch.position.y;

          //  int[] chanelsInPixel = _semanticManager.SemanticBufferProcessor.GetChannelIndicesAt(x,y);
          //  foreach (var i in chanelsInPixel)
          //      Debug.Log(i);

            string[] channelsnameInPixel = _semanticManager.SemanticBufferProcessor.GetChannelNamesAt(x,y);
            foreach (var i in channelsnameInPixel)
            {
                //  Debug.Log(i);
                _Textt.text = i;
            }
        }
    }
}
