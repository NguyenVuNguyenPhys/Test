using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Cloneing_Prefab : MonoBehaviour
{
    public GameObject Clone;
    public GameObject SpawPos;
    public GameObject Tem_Clo;
    public GameObject Tem_Tow;
    public GameObject Tower;
    public GameObject Off_Button;
    public bool IsThrow = false;
    int buildIndex;
    public void Start()
    {
        SpawPos = GameObject.Find("ARSceneCamera");
        Scene currentScene = SceneManager.GetActiveScene();
        buildIndex = currentScene.buildIndex;

        Debug.Log(buildIndex);
     
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

    public void Place_Tower()
    {
        Off_Button.SetActive(false);
        Tem_Tow = Instantiate(Tower);
        Tem_Clo = Instantiate(Clone);
    }
    
    private void BallPosition()
    {
         if (IsThrow == false)
            {
                Tem_Clo.transform.position = SpawPos.transform.position;
       
                Tem_Clo.transform.localPosition += SpawPos.transform.forward * 0.79f;
                Tem_Clo.transform.localPosition += SpawPos.transform.up * -0.18f;

        
            Tem_Clo.transform.eulerAngles = SpawPos.transform.eulerAngles;

            }
        
    }


}
