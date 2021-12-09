using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class test01 : MonoBehaviour
{
    public GameObject PlaceObject;
    public GameObject Plane;
    public GameObject Tower_Collider;
    public GameObject PlaceButton;
    public bool IsPlace = false;

    void Start()
    {
        Plane.SetActive(false);
    }

    #region PLACE OBJECT IN THE RAYCAST
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
            }
        }
    }
    #endregion

    #region RELATIED TO UI

    public void placeObject()
    {
        IsPlace = true;
        Plane.SetActive(true);
        Tower_Collider.GetComponent<Collider>().enabled = true;
        PlaceButton.SetActive(false);
    }

    #endregion
}
