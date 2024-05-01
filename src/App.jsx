import { useState } from "react";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Configurator from "./configurator/Configurator";
import { CustomizationProvider } from "./configurator/Customization";
import NavigationBar from "./configurator/NavigationBar";
import Experience from "./configurator/Experience";
import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen-hidden"}`}>
      <div className="loading-screen-container">
        <h1 className="loading-screen-title">Porsche</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
  <>
  <LoadingScreen />
    <section>
      <CustomizationProvider>
        <div className="App">
          <Canvas shadows camera={{ position: [0, 0.5, 6], fov: 60 }} dpr={[1, 2]}>
            <fog attach="fog" args={["white", 0, 40]} />
            <Experience />
          </Canvas>
          <NavigationBar />
        </div>
      </CustomizationProvider>
    </section>
    <section>
      
    </section>
  </>
  );
}

export default App;
