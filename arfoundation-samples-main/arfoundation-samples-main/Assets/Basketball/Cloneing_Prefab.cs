using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cloneing_Prefab : MonoBehaviour
{
    public GameObject Clone;
    public GameObject Plate;
    //  public GameObject SpawPos;

   public Transform Parent;
    GameObject PrefabGameObject;


    GameObject Tem_Pla;
    GameObject Tem_Clo;


    public void Start()
    {
        //


     GameObject Tem_Pla = Instantiate(Plate);
     GameObject Tem_Clo = Instantiate(Clone);
        Tem_Pla.transform.SetParent(Parent);
        Tem_Clo.transform.SetParent(Parent);

        //  Instantiate(Plate);
        //   Instantiate(Clone);
        BallPosition();
    }

    public void Update()
    {
        BallPosition();
    }

    public void Instan()
    {
       
     // Tem_Pla = Instantiate(Plate);
    //  Tem_Clo = Instantiate(Clone);



        BallPosition();

    }

    private void BallPosition()
    {

    //    Tem_Clo.transform.position = SpawPos.transform.position;
     //   Tem_Pla.transform.position = SpawPos.transform.position;
    //    Tem_Clo.transform.localPosition += SpawPos.transform.forward * 3;
    //    Tem_Pla.transform.localPosition += SpawPos.transform.forward * 3;
    //    Tem_Clo.transform.eulerAngles = SpawPos.transform.eulerAngles;

    }

}
