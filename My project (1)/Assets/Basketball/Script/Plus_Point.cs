using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Plus_Point : MonoBehaviour
{

    public Text Point;
    int point;

    public void PlusPoint(int n)
    {
        point+=n;
        Point.text = (point ).ToString();
        Debug.LogError(point);

    }
}
