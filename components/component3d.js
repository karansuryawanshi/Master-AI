// pages/3dCanvas.js
import { useEffect } from "react";

const Canvas3D = () => {
  useEffect(() => {
    // This ensures the code runs only on the client-side (in the browser)
    const { Application } = require("@splinetool/runtime");

    const canvas = document.getElementById("canvas3d");
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/iXWzMoSXVUAn2Z-2/scene.splinecode");
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <canvas id="canvas3d" style={{ width: "100%", height: "100vh" }}></canvas>
    </div>
  );
};

export default Canvas3D;
