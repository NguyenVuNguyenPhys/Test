using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DrawStrajectory : MonoBehaviour
{
    [SerializeField]
    private LineRenderer _lineRenderer;
    [SerializeField]
    private int _lineSegmentcount = 20;
    private List<Vector3> _linePoints = new List<Vector3>();

    public static DrawStrajectory instance;

    private void Awake()
    {
        instance = this;
    }

    public void UpdateStrajectory(Vector3 forceVector, Rigidbody Ri, Vector3 StartPoint)
    {
        float Y0 = this.transform.position.y;
        Vector3 volocity = forceVector/Ri.mass*0.02f ;
        float  Flight_Du = (2*volocity.y)/ Physics.gravity.y;
        float Step_time = Flight_Du/_lineSegmentcount ;
        _linePoints.Clear();

        for (float i = 0; i < _lineSegmentcount; i+= 0.1f )
        {
            float SteptimePass = Step_time * i;
            Vector3 Move = StartPoint + i * volocity;
            Move.y = Y0 + volocity.y * i + Physics.gravity.y / 2f * i * i;
            _linePoints.Add(Move);
        }
        _lineRenderer.positionCount = _linePoints.Count;
        _lineRenderer.SetPositions(_linePoints.ToArray());

    }

    public void HideLine()
    {
        _lineRenderer.positionCount = 0;

    }
    
}   
    
    
    
    
    
    