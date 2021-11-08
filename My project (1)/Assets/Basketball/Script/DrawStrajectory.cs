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
    public LayerMask Collidable;

    public static DrawStrajectory instance;

    private void Awake()
    {
        instance = this;
    }

    #region ORBIT FUNCTION TRAJECTORY
    public void UpdateStrajectory(Vector3 forceVector, Rigidbody Ri, Vector3 StartPoint)
    {
        float Y0 = this.transform.position.y;
        Vector3 volocity = forceVector / Ri.mass * 0.02f;
        _linePoints.Clear();
        _linePoints.Add(StartPoint);
        int n = 0;
        for (float i = 0; i < _lineSegmentcount; i += 0.1f)
        {
            n++;
            Vector3 Move = StartPoint + i * volocity;
            Move.y = Y0 + volocity.y * i + Physics.gravity.y / 2f * i * i;
            _linePoints.Add(Move);
  
        }
        _lineRenderer.positionCount = _linePoints.Count;
        _lineRenderer.SetPositions(_linePoints.ToArray());
    }
    #endregion

    #region HIDE TRAJECTORY LINE
    /// <summary>
    /// Hide line function after the ball was shoot
    /// </summary>
    public void HideLine()
    {
        _lineRenderer.positionCount = 0;
    }
    #endregion

}





