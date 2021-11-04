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
    int point;
    float Rotate_Value;
    private bool isMoving = false;
 //   public LineRenderer Orbit;
    public Vector3 Line;



    private void OnMouseDown()
    {
        Press_Position = Input.mousePosition;
       
    }

    public void OnMouseDrag()
    {
        Vector3 forceInit = (Input.mousePosition- Press_Position);
        Vector3 forceInitz = (this.transform.up + this.transform.forward) * forceInit.magnitude;
        Vector3 forceV = (new Vector3(forceInit.x, forceInit.y, forceInit.y)) * No;
        if (!isMoving)
        {
            DrawStrajectory.instance.UpdateStrajectory(forceVector: forceInitz, this.GetComponent<Rigidbody>(), StartPoint: transform.position);


        }
        }

    private void OnMouseUp()
    {
        DrawStrajectory.instance.HideLine();
        Release_Position = Input.mousePosition;
        Shoot(force: Release_Position- Press_Position);
        this.gameObject.GetComponent<Rigidbody>().useGravity = true;
      
       // Rotate_Value = Release_Position.y - Press_Position.y;
        Debug.LogError("rotate_Value"+ Rotate_Value/9);
        if (isMoving)
        {
         //   this.GetComponent<Rigidbody>().AddTorque(transform.right * -Rotate_Value/9);
        }
        StartCoroutine(ExampleCoroutine());

    }

   

    public void Shoot(Vector3 force)
    {
        Debug.Log(force);
        //  this.GetComponent<Rigidbody>().AddForce(new Vector3(force.x, force.y, force.y )*No);

        this.GetComponent<Rigidbody>().AddForce((this.transform.up + this.transform.forward )* force.magnitude);

        isMoving = true;
        //    this.GetComponent<Rigidbody>().AddRelativeForce(new Vector3((this.transform.localPosition.x+1)*px, (this.transform.localPosition.z + 1) * py, (this.transform.localPosition.z + 1) * py) * No);

    }

    IEnumerator ExampleCoroutine()
    {
        FindObjectOfType<Cloneing_Prefab>().IsThrow = true;
        this.gameObject.transform.position = FindObjectOfType<Cloneing_Prefab>().Tem_Pla.transform.position;
        yield return new WaitForSeconds(1.5f);
        FindObjectOfType<Cloneing_Prefab>().IsThrow = false;
        FindObjectOfType<Cloneing_Prefab>().Instan();
     
    }

    public void OnCollisionEnter(Collision collision)
    {

        if (collision.gameObject.tag == "Ground")
        {
            Destroy(this.gameObject, 6f);
            Debug.LogError("Destroy");

        }

    }

    public void Update()
    {


    }


    public void OnTriggerEnter(Collider other)
    {
        
        
        if (other.gameObject.tag == "Check_Point")
        {
            n++;
           


        }

        if (n==2)
        {
            FindObjectOfType<SHOW_SCENE>().PlusPoint(n - 1);

        }


    }


}
