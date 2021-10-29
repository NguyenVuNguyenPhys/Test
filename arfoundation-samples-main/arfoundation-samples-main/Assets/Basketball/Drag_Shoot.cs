using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Drag_Shoot : MonoBehaviour
{
    private Vector3 Press_Position;
    private Vector3 Release_Position;
    public float No;
  
    

    private void OnMouseDown()
    {
        Press_Position = Input.mousePosition;
        StartCoroutine(ExampleCoroutine());


    }

    private void OnMouseUp()
    {
        Release_Position = Input.mousePosition;
        Shoot(force: Release_Position- Press_Position);
       
       
        
    }

    public void Shoot(Vector3 force)
    {

        this.GetComponent<Rigidbody>().AddForce(new Vector3(force.x, force.y*3, force.y) * No); ;

    }

    IEnumerator ExampleCoroutine()
    {
    
        yield return new WaitForSeconds(3);
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

    
}
