using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Delete_Script : MonoBehaviour
{
    public Camera Camera;
    public GameObject PlaceObject;
    public GameObject TurnOffTouching;
    void Update()
    {
        RaycastHit hit;
      ///Ray ray = Camera.ScreenPointToRay(Input.mousePosition);
        Ray ray = new Ray(transform.position, transform.forward);

        if (Physics.Raycast(ray, out hit))
        {
            PlaceObject.transform.position = hit.point;
            Debug.DrawLine(ray.origin, hit.point, Color.red);
            Debug.LogError("Position" + PlaceObject.transform.position);

            // Do something with the object that was hit by the raycast.
        }
    }

    public void TurnOff()
    {
        TurnOffTouching = GameObject.Find("AR Session");
        (TurnOffTouching.GetComponent("ARInputManager") as MonoBehaviour).enabled = false;


    }

}
