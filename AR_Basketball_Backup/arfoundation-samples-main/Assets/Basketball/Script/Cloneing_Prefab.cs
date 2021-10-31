using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Cloneing_Prefab : MonoBehaviour
{
    public GameObject Clone;
    public GameObject Plate;
    public GameObject SpawPos;
    public GameObject Tem_Pla;
    public GameObject Tem_Clo;
    public bool IsThrow = false;
    int buildIndex ;
    public void Start()
    {
        SpawPos = GameObject.Find("AR Camera");
        Scene currentScene = SceneManager.GetActiveScene();
        buildIndex = currentScene.buildIndex;

        Debug.Log(buildIndex);
        if (buildIndex==1)
        {
            Tem_Clo = Instantiate(Clone);
            BallPosition();

        }
     //  
     //  
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
            if (buildIndex == 1)
            {
                Tem_Clo.transform.localPosition += SpawPos.transform.forward * 1.5f;
                Tem_Clo.transform.localPosition += SpawPos.transform.up * -1.11f;

            } else if (buildIndex == 2) {
                Tem_Clo.transform.localPosition += SpawPos.transform.forward * 0.5f;
                Tem_Clo.transform.localPosition += SpawPos.transform.up * -0.3f;
            }
                Tem_Clo.transform.eulerAngles = SpawPos.transform.eulerAngles;

                Tem_Pla.transform.position = Tem_Clo.transform.position;
                Tem_Pla.transform.eulerAngles = Tem_Clo.transform.eulerAngles;
            }
        

    }

}
