GU360 - Virtual Tours App

Software Requirement

Setting up Tools and Run Project:
1. Install Node.js – Before getting started with project, you will need to install node.js. Because application run in a browser, the build pipeline that bundles up code relies on Node.
https://nodejs.org/en/
2. Install React 360 CLI – It’s a tool that lets you create and manage you React 360 project. Make sure you install it in an outside the root directory. 
npm install -g react-360-cli 
3. Npm start – It will start server and inspect your project and gather all the data and open in http://localhost:8081/index.html.
 npm start


Steps for deploying to a live 

Once the project is completely done in local server and it’s ready to deploy live. First you will need to build production version of the code. The application includes a command that packages everything up into a single folder. Running npm run bundle from the root directory of project will create production folder called “build”. Inside the build folder there will be index.bundle.js  and  client.bundle.js and create a copy of index.html and place it inside build directory.
Static_assests directory also need to copy to you server. As shown in below fig.


Web Server
├─ static_assets/ </br>
├─ index.html </br>
├─ index.bundle.js </br>
└─ client.bundle.js



Software Dependencies
1.	React Native – “react-native” – v0.55.4, the application needs the exact version of React Native. 
2.	Webvr-polyfill – “webvr-polyfill” – v0.10.11, the application support latest version as well.
3.	Simple raycaster – “simple-raycaster” – v1.1.0, the application support latest version as well.




