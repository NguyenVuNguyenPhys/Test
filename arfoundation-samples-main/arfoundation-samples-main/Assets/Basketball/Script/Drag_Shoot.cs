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



    private void OnMouseDown()
    {
        Press_Position = Input.mousePosition;
       
    }

    private void OnMouseUp()
    {
        Release_Position = Input.mousePosition;
        Shoot(force: Release_Position- Press_Position);
        this.gameObject.GetComponent<Rigidbody>().useGravity = true;
        StartCoroutine(ExampleCoroutine());

    }

    public void Shoot(Vector3 force)
    {
          this.GetComponent<Rigidbody>().AddRelativeForce(new Vector3(force.x, force.y * 1.5f, force.y) * No);

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
