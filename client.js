// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import RCTWorkInProgressSurface from './RCTWorkInProgressSurface';
//Vr Cursor enable
//import SimpleRaycaster from 'simple-raycaster';

// VR mode enable 
// import WebVRPolyfill from 'webvr-polyfill';
// const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {

  // initialise instant game
  if (FBInstant) {
    FBInstant.initializeAsync()
    .then(function() {
      FBInstant.setLoadingProgress(100);
      FBInstant.startGameAsync();
    });
  }

  //VR Cursor

//    const SimpleRaycaster = {
//   drawsCursor: () => true,
//   fillDirection: direction => {
//     direction[0] = 0;
//     direction[1] = 0;
//     direction[2] = -1;
//     return true;
//   },
// const vr = new ReactInstance(bundle, "Gannon360", parent, {
//     raycasters: [
//        SimpleRaycaster // Add SimpleRaycaster to the options
//     ],
//     cursorVisibility: "auto", // Add cursorVisibility
//     ...options
//   });
//   vr.start();
//   return vr;
  const useDynamicSurface = options.useDynamicSurface;
  let mainSurfaceWidth;
  let mainSurfaceHeight;
  // If use dynamic surface, the main surface renders nothing, so we can make it really small: 1x1
  if (useDynamicSurface) {
    mainSurfaceWidth = 1;
    mainSurfaceHeight = 1;
  } else {
    // If use cylinder surface to layout, we need full circle to put hotspot anywhere.
    mainSurfaceWidth = 4096; // default surface density for circle
    mainSurfaceHeight = 600;
  }

  const mainSurface = new Surface(mainSurfaceWidth, mainSurfaceHeight);
  if (!useDynamicSurface) {
    mainSurface.setDensity(mainSurfaceWidth);
  }

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
     
    customViews: [
      {
        // Add custom native view "RCTSurface" to support surface control
        name: 'RCTWorkInProgressSurface',
        view: RCTWorkInProgressSurface,
      },
    ],
    ...options,
  });

  RCTWorkInProgressSurface.__reactInstance = r360;


  
  r360.renderToSurface(
    r360.createRoot('Gannon360', { 
      /* initial props */
      useDynamicSurface: useDynamicSurface,
      mainSurfaceWidth: mainSurfaceWidth,
      mainSurfaceHeight: mainSurfaceHeight,
    }),
    mainSurface, //r360.getDefaultSurface()
  );
  
  //r360.controls.clearRaycasters();
  //r360.controls.addRaycasters(SimpleRaycaster);
   r360.compositor.setBackground(r360.getAssetURL('gannonuniversity.jpg'));
}

window.React360 = {init};