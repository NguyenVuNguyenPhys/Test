using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Niantic.ARDK.AR;
using Niantic.ARDK.AR.ARSessionEventArgs;

using Niantic.ARDK.AR.Configuration;

using Unity.Collections;

using Niantic.ARDK.AR.Mesh;

using Niantic.ARDK.Utilities;

public class MeshingToturial : MonoBehaviour
{
    //pass in our ball
    public GameObject _ball;
    // Start is called before the first frame update
    void Start()
    {
       // _ball.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (PlatformAgnosticInput.touchCount <= 0) { return; }

        //if the user touches the screen enable the ball
        var touch = PlatformAgnosticInput.GetTouch(0);
        if (touch.phase == TouchPhase.Began)
        {
           // _ball.SetActive(true);
            Instantiate(_ball);
            Debug.Log("Touch");
        }
    }
}