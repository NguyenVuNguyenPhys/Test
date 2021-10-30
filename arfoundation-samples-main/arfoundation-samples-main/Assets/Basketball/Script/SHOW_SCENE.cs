using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SHOW_SCENE : MonoBehaviour
{
    public GameObject ShowObject;
    public GameObject Cam_Po;
    public Text ARSeasion_po;
    public Text Point;
    int point;
    
    public string text;
    public Rigidbody m_Rigidbody;
    Vector3 Plus;
    public float Up;
    public float foward;
    public float rotate;
    private bool isMoving = false;
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
        if (isMoving)
        {
            m_Rigidbody.AddTorque(transform.right * rotate);
        }
        
    }

    public void show_Function()
    {
        ShowObject.transform.position = Cam_Po.transform.position;
        ShowObject.transform.eulerAngles = Cam_Po.transform.eulerAngles;
        ShowObject.transform.localPosition += ShowObject.transform.forward*3;
        ShowObject.transform.eulerAngles = new Vector3(0, Cam_Po.transform.eulerAngles.y, 0);
        ShowObject.SetActive(true);
    }

    public void add_Force()
    {
        m_Rigidbody.AddForce(transform.up * Up);
        m_Rigidbody.AddForce(transform.forward * -foward);
        isMoving = true;
       

    }

    public void PlusPoint(int n)
    {
        point+=n;
        Point.text = (point ).ToString();
        Debug.LogError(point);

    }
}
