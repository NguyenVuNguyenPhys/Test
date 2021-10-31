using UnityEngine.SceneManagement;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class LoadS : MonoBehaviour
{
    public GameObject Hide_Toturial;
    public GameObject Show_Menu;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Scene_Image()
    {
        SceneManager.LoadScene(1);



    }

    public void Scene_Plane()
    {
        SceneManager.LoadScene(2);

    }

    public void Return_Menu()
    {

        SceneManager.LoadScene(0);


    }

    public void Click()
    {
        Hide_Toturial.SetActive(false);
        Show_Menu.SetActive(true);
    }
}
