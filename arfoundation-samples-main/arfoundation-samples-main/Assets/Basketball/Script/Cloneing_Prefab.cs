using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cloneing_Prefab : MonoBehaviour
{
    public GameObject Clone;
    public GameObject Plate;
    public GameObject SpawPos;

    public Transform Parent;
    public GameObject Tem_Pla;
    public GameObject Tem_Clo;
    public bool IsThrow = false;

    public void Start()
    {

        Tem_Clo = Instantiate(Clone);
        BallPosition();
    }

    public void Update()
    {
        BallPosition();
    }

    public void Instan()
    {
        Tem_Clo = Instantiate(Clone);
        BallPosition();
    }

    private void BallPosition()
    {
        if (IsThrow == false)
        {
            Tem_Clo.transform.position = SpawPos.transform.position;
            Tem_Clo.transform.localPosition += SpawPos.transform.forward * 1.5f;
            Tem_Clo.transform.localPosition += SpawPos.transform.up * -1.11f;
            Tem_Clo.transform.eulerAngles = SpawPos.transform.eulerAngles;

            Tem_Pla.transform.position = Tem_Clo.transform.position;
            Tem_Pla.transform.eulerAngles = Tem_Clo.transform.eulerAngles;
        }

    }

}
