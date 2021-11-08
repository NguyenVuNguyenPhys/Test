using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Drag_Shoot : MonoBehaviour
{
    private Vector3 Press_Position;
    private Vector3 Release_Position;
    public float No;
    int n = 0;
    float Rotate_Value = 100;
    private bool isMoving = false;

    #region MOUSE POSITION
    private void OnMouseDown()
    {
        Press_Position = Input.mousePosition;     
    }

    public void OnMouseDrag()
    {
        Vector3 forceInit = (Input.mousePosition- Press_Position);
        Vector3 forceInitz = (this.transform.up + this.transform.forward) * forceInit.magnitude;

        /// Draw Trajectory To The Ball
        DrawStrajectory.instance.UpdateStrajectory(forceVector: forceInitz, this.GetComponent<Rigidbody>(), StartPoint: transform.position);
        ///
    }

    private void OnMouseUp()
    {
        DrawStrajectory.instance.HideLine();
        Release_Position = Input.mousePosition;
        Shoot(force: Release_Position- Press_Position);
        /// Activate gravity for the ball
        this.gameObject.GetComponent<Rigidbody>().useGravity = true;
        ///
        Debug.LogError("rotate_Value"+ Rotate_Value/9);
        /// Applied Rotation When The Ball Is Moving
        if (isMoving)
        {
            this.GetComponent<Rigidbody>().AddTorque(transform.right * - Rotate_Value/9);
        }
        ///
        StartCoroutine(ExampleCoroutine());

    }
    #endregion

    #region APPLY FORCE TO THE BALL

    public void Shoot(Vector3 force)
    {

        this.GetComponent<Rigidbody>().AddForce((this.transform.up + this.transform.forward )* force.magnitude);

        isMoving = true;

    }
    #endregion

    #region  INSTANCE NEW BALL
    /// <summary>
    ///  INSTANCE NEW BALL AFTER 1.5 SECONDS BEGIN FROM THE SHOOT EVENT
    /// </summary>
    /// <returns></returns>
    IEnumerator ExampleCoroutine()
    {
        FindObjectOfType<Cloneing_Prefab>().IsThrow = true;
        yield return new WaitForSeconds(1.5f);
        FindObjectOfType<Cloneing_Prefab>().IsThrow = false;
        FindObjectOfType<Cloneing_Prefab>().Instan();   
    }
    /// <summary>
    /// 
    /// </summary>
    #endregion

    #region DESTROY EVENT WHEN BALL HIT THE GROUND
    public void OnCollisionEnter(Collision collision)
    {

        if (collision.gameObject.tag == "Ground")
        {
            Destroy(this.gameObject, 6f);
            Debug.LogError("Destroy");

        }

    }
    #endregion

    #region PLUS POINT EVENT
    public void OnTriggerEnter(Collider other)
    {
               
        if (other.gameObject.tag == "Check_Point")
        {
            n++;
        }

        if (n==2)
        {
            FindObjectOfType<Plus_Point>().PlusPoint(n - 1);
        }
    }
    #endregion
}
