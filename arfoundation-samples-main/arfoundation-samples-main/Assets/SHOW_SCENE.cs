using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SHOW_SCENE : MonoBehaviour
{
    public GameObject ShowObject;
    public GameObject Cam_Po;
    public Text ARSeasion_po;
    public string text;
    Vector3 Plus;
    // Start is called before the first frame update
    void Start()
    {
        Plus = new Vector3(0,0,0);
    }

    // Update is called once per frame
    void Update()
    {
       
        text = Cam_Po.GetComponent<Transform>().position.ToString();
        ARSeasion_po.text = text;
 




    }

    public void show_Function()
    {
        ShowObject.transform.position = Cam_Po.transform.position;
        ShowObject.transform.eulerAngles = Cam_Po.transform.eulerAngles;
        ShowObject.transform.localPosition += ShowObject.transform.forward;
        ShowObject.transform.eulerAngles = new Vector3(0, Cam_Po.transform.eulerAngles.y, 0);
      //  ShowObject.transform.position = new Vector3(ShowObject.transform.position.x, ShowObject.transform.position.y - 1, ShowObject.transform.position.z);
    }
}
