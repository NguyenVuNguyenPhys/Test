// Copyright 2021 Niantic, Inc. All Rights Reserved.

using System;

using Niantic.ARDK.AR;
using Niantic.ARDK.AR.Awareness;
using Niantic.ARDK.AR.Awareness.Depth;
using Niantic.ARDK.Extensions;
using Niantic.ARDK.AR.Anchors;

using Niantic.ARDK.AR.Mesh;


using System;
using System.Collections.Generic;

using Niantic.ARDK.AR;
using Niantic.ARDK.AR.Anchors;
using Niantic.ARDK.AR.ARSessionEventArgs;
using Niantic.ARDK.AR.HitTest;
using Niantic.ARDK.Utilities;
using Niantic.ARDK.Utilities.Logging;
using Niantic.ARDKExamples.Common.Helpers;

using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


namespace Niantic.ARDKExamples
{

    /// @brief An example script to visualize Context Awareness' depth information.
    /// @remark This example only works in portrait mode.
    public class DepthExampleManager :
    MonoBehaviour
    {

        private IARSession _session = null;
        private Dictionary<Guid, IARAnchor> _addedAnchors = new Dictionary<Guid, IARAnchor>();
        private Dictionary<Guid, GameObject> _placedObjects = new Dictionary<Guid, GameObject>();


        [SerializeField]
        private ARDepthManager _arDepthManager = null;


        [Header("UI")]
        [SerializeField]
        private GameObject _toggles = null;

        [SerializeField]
        private Text _toggleViewButtonText = null;

        [SerializeField]
        private Text _togglePointCloudButtonText = null;

        [SerializeField]
        private Text _toggleOcclusionButtonText = null;

        [SerializeField]
        private Text _toggleInterpolationButtonText = null;

        [SerializeField]
        private Text _toggleDepthButtonText = null;

        [Header("Game Objects")]
        [SerializeField]
        private GameObject _pointer;

        [SerializeField]
        private GameObject _cube;
        public GameObject Basketball_To;

        private bool _isShowingMesh;


        private bool _isShowingDepths;
        private bool _isShowingPointCloud;

        /// <summary>
        /// CUSTOM CODE HERE
        /// </summary>
        private void Awake()
        {
            // Listen for the ARSession that is created/run by the ARSessionManager component in the scene.
            ARSessionFactory.SessionInitialized += OnARSessionInitialized;
        }

        private void OnARSessionInitialized(AnyARSessionInitializedArgs args)
        {
            _session = args.Session;
            _session.AnchorsAdded += OnAnchorsAdded;
            _session.AnchorsRemoved += OnAnchorsRemoved;
            _session.Deinitialized += _ => _session = null;
        }

        private void OnAnchorsAdded(AnchorsArgs args)
        {
            foreach (var anchor in args.Anchors)
            {
                if (!_addedAnchors.ContainsKey(anchor.Identifier))
                {
                    // Plane and image detection are both disabled in this scene, so the only anchors getting
                    // surfaced through this callback are the anchors added in HitTestToPlaceAnchor.
                    Debug.LogWarningFormat
                    (
                      "Found anchor (id: {0}) not added by this class. This should not happen.",
                      anchor.Identifier
                    );

                    continue;
                }

                // Create the cube object and add a component that will keep it attached to the new anchor.
                var cube =
                  Instantiate
                  (
                    Basketball_To,
                    new Vector3(0, 0, 0),
                    Quaternion.identity
                  );

                var attachment = cube.AddComponent<ARAnchorAttachment>();
                attachment.AttachedAnchor = anchor;
                var cubeYOffset = Basketball_To.transform.localScale.y / 2;
                attachment.Offset = Matrix4x4.Translate(new Vector3(0, cubeYOffset, 0));


                attachment.Offset = Matrix4x4.Rotate(GameObject.Find("ARSceneCamera").transform.localRotation);
              // attachment.Offset.m01 = 0f;
              //  attachment.Offset.m02 = GameObject.Find("ARSceneCamera").transform.rotation.y;
              //  attachment.Offset.m22 += attachment.Offset.m02;
             //   attachment.Offset.m32 = GameObject.Find("ARSceneCamera").transform.rotation.y;
                attachment.Offset.m12 = 0f;
                attachment.Offset.m01 = 0f;
                attachment.Offset.m21 = 0f;
                attachment.Offset.m31 = 0f;
                Debug.Log("ANCHOR COUNT" + _session.CurrentFrame.Anchors.Count);
                // Keep track of the anchor objects
                _placedObjects.Add(anchor.Identifier, cube);
            }
        }

        private void OnAnchorsRemoved(AnchorsArgs args)
        {
            foreach (var anchor in args.Anchors)
            {
                if (_addedAnchors.ContainsKey(anchor.Identifier))
                {
                    _addedAnchors.Remove(anchor.Identifier);

                    Destroy(_placedObjects[anchor.Identifier]);
                    _placedObjects.Remove(anchor.Identifier);
                }
            }
        }


        private void Start()
        {
            if (_toggles != null)
                _toggles.SetActive(false);

            Application.targetFrameRate = 60;
            _arDepthManager.DepthBufferInitialized += OnDepthBufferInitialized;
        }

        private void OnDepthBufferInitialized(ContextAwarenessArgs<IDepthBuffer> args)
        {
            _arDepthManager.DepthBufferInitialized -= OnDepthBufferInitialized;
            if (_toggles != null)
                _toggles.SetActive(true);
        }

        private void Update()
        {

            var touchPosition = Input.touchCount > 0
              ? new Vector2Int((int)Input.touches[0].position.x, (int)Input.touches[0].position.y)
              : new Vector2Int(Screen.width / 2, Screen.height / 2);

            var worldPosition = _arDepthManager.DepthBufferProcessor.GetWorldPosition
            (
              touchPosition.x,
              touchPosition.y
            );

            var normal = _arDepthManager.DepthBufferProcessor.GetSurfaceNormal
            (
              touchPosition.x,
              touchPosition.y
            );

            var rotation = Quaternion.Slerp
            (
              _pointer.transform.rotation,
              Quaternion.FromToRotation(Vector3.up, normal),
              Time.deltaTime * 10.0f
            );

            _pointer.transform.position = worldPosition;
            _pointer.transform.rotation = rotation;

        }
        /// <summary>
        /// Custom code
        /// </summary>
        public void MeshVisualization()
        {
            _isShowingMesh = !_isShowingMesh;

            _toggleViewButtonText.text = _isShowingMesh ? "Show Mesh" : "Hide Mesh";


        }
        float x = 10;

        public void PlaceCube()
    {


          
            /// Place Cube Thuongg theo sample
            _cube.transform.position = _arDepthManager.DepthBufferProcessor.GetWorldPosition
        (Screen.width / 2, Screen.height / 2);
            var position = _arDepthManager.DepthBufferProcessor.GetWorldPosition
        (Screen.width / 2, Screen.height / 2);

            var anchor = _session.AddAnchor(Matrix4x4.TRS(position, Quaternion.identity, Vector3.one));
            _addedAnchors.Add(anchor.Identifier, anchor);

            Debug.LogFormat("Created anchor (id: {0}, position: {1} ", anchor.Identifier, position.ToString("F4"));
        }

    public void ToggleInterpolation()
    {
      if(_arDepthManager == null)
        return;

      var provider = _arDepthManager.DepthBufferProcessor;
      var current = provider.InterpolationMode;
      switch (current)
      {
        case InterpolationMode.None:
          provider.InterpolationMode = InterpolationMode.Balanced;
          break;

        case InterpolationMode.Balanced:
          provider.InterpolationMode = InterpolationMode.Smooth;
          break;

        case InterpolationMode.Smooth:
          provider.InterpolationMode = InterpolationMode.None;
          break;

        default:
          throw new ArgumentOutOfRangeException();
      }

      _toggleInterpolationButtonText.text = "Interpolation:\n" + provider.InterpolationMode;
    }
    
    public void ToggleOcclusion()
    {
      if(_arDepthManager == null)
        return;
      
      var current = _arDepthManager.OcclusionTechnique;
      switch (current)
      {
      case ARDepthManager.OcclusionMode.None:
        _arDepthManager.OcclusionTechnique = ARDepthManager.OcclusionMode.DepthBuffer;
        break;

      case ARDepthManager.OcclusionMode.DepthBuffer:
        _arDepthManager.OcclusionTechnique = ARDepthManager.OcclusionMode.ScreenSpaceMesh;
        break;

      case ARDepthManager.OcclusionMode.ScreenSpaceMesh:
        _arDepthManager.OcclusionTechnique = ARDepthManager.OcclusionMode.None;
        break;

      case ARDepthManager.OcclusionMode.Auto:
        _arDepthManager.OcclusionTechnique = ARDepthManager.OcclusionMode.None;
        break;

      default:
        throw new ArgumentOutOfRangeException();
      }

      _toggleOcclusionButtonText.text = "Occlusion:\n" + _arDepthManager.OcclusionTechnique;
    }

    public void ToggleShowDepth()
    {
      _isShowingDepths = !_isShowingDepths;

      // Toggle UI elements
      _toggleViewButtonText.text = _isShowingDepths ? "Show Camera" : "Show Depth";
      _arDepthManager.ToggleDebugVisualization(_isShowingDepths);
    }

    public void ToggleShowPointCloud()
    {
      _isShowingPointCloud = !_isShowingPointCloud;
      
      // Toggle UI elements
      _togglePointCloudButtonText.text =
        _isShowingPointCloud ? "Hide Point Cloud" : "Show Current Point Cloud" ;
    }

    public void ToggleSessionDepthFeatures()
    {
      var depthEnabled = !_arDepthManager.enabled;
            Debug.LogError("Bool value of Depth Button" + depthEnabled);

      //Toggle pointer visibility
      _pointer.SetActive(depthEnabled);
      
      // ARSession configuration through ARDepthManager
      _arDepthManager.enabled = depthEnabled;

      // Toggle UI elements
      _toggleDepthButtonText.text = depthEnabled ? "Disable Depth" : "Enable Depth";
    }

        public void ClearAnchors()
        {
            if (_session == null)
                return;

            // Clear out anchors. The OnAnchorsRemoved method should get invoked and handle clearing
            // the placed objects.
            foreach (var anchor in _addedAnchors)
                _session.RemoveAnchor(anchor.Value);
        }
    }
}
