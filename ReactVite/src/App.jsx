// export default App

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./assets/MusicVis.loader.js",
    dataUrl: "./assets/MusicVis.data.unityweb",
    frameworkUrl: "./assets/MusicVis.framework.js.unityweb",
    codeUrl: "./assets/MusicVis.wasm.unityweb",
  });
  return (
    <div>
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
       
      />
    </div>
  );
}

export default App;
