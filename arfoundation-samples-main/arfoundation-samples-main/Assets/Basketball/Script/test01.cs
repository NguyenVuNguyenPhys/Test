using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class test01 : MonoBehaviour
{
    public GameObject PlaceObject;
    public GameObject Plane;
    public GameObject PlaceButton;
    //  GameObject pla;
   public bool IsPlace = false;
    // Start is called before the first frame update
    void Start()
    {
        // pla = Instantiate(PlaceObject);
        Plane.SetActive(false);
}

    // Update is called once per frame
    void Update()
    {
        RaycastHit hit;
        Ray ray = new Ray(transform.position, transform.forward);
        if (!IsPlace) {
            if (Physics.Raycast(ray, out hit))
            {
                PlaceObject.transform.position = hit.point;
                PlaceObject.transform.localEulerAngles = new Vector3(0, FindObjectOfType<Cloneing_Prefab>().SpawPos.transform.eulerAngles.y, 0);
                
                Debug.DrawLine(ray.origin, hit.point, Color.red);
                //  Debug.LogError("Position" + PlaceObject.transform.position);

                // Do something with the object that was hit by the raycast.
            }
        }
    }
    public void placeObject()
    {

        IsPlace = true;
        Plane.SetActive(true);
        PlaceButton.SetActive(false);

    }
}
