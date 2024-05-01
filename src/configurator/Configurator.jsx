import { useEffect, useRef, useState } from "react";
import { useCustomization } from "./Customization";
import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from 'gsap'


export default function Configurator () {
  const {
    carColors,
    carColor,
    setCarColor,
  } = useCustomization();

  const { camera } = useThree();

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 5,
      x: -3,
      y: 0.75,
      z: 2.5,
      ease: 'power3.out',
      onComplete: () => {
        gsap.to(".make-visible", {
          duration: 0.5,
          opacity: 1,
          ease: 'power3.out'
        });
      }
    });
  };
  
  const cameraZoom = () => {
    gsap.to(camera.position, {
      duration: 2,
      x: -3,
      y: 0.75,
      z: -3,
      ease: 'power3.out'
    });
  };

  const cameraZoomOut = () => {
    gsap.to(camera.position, {
      duration: 2,
      x: -3,
      y: 0.75,
      z: 2.5,
      ease: 'power3.out'
    });
  };

  useEffect(() => {
    cameraLoads();
  }, []);

  const [configuratorVisible, setConfiguratorVisible] = useState(false);
  const [makeVisible, setMakeVisible] = useState(false); // Set makeVisible initially to false

  const toggleConfigurator = () => {
    setConfiguratorVisible(!configuratorVisible)
    cameraZoom()
    if (configuratorVisible) {
      gsap.to(".make-visible", {
        duration: 0.5,
        opacity: 1,
        ease: 'power3.out'
      });
    } else {
      gsap.to(".make-visible", {
        duration: 0.5,
        opacity: 0,
        ease: 'power3.out'
      });
    }
    setMakeVisible(!configuratorVisible);
  };

  const closeConfigurator = () => {
    setConfiguratorVisible(false)
    setMakeVisible(true)
    cameraZoomOut()
      gsap.to(".make-visible", {
        duration: 0.5,
        opacity: 1,
        ease: 'power3.out'
      });
  };

  const { gl } = useThree();

  return (
    <>
      <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ false } enableRotate={ true } enablePan={ false } />
      <Html as='div'>
        <div style={{ opacity: makeVisible ? 1 : 0 }} className="make-visible" onClick={toggleConfigurator}>
          <h1>Build Your Own</h1>
        </div>
      </Html>
      {configuratorVisible && (
        <Html >
          <div className="configurator">
            <div className="configurator-section">
              <i class="fa-solid fa-x" onClick={closeConfigurator} ></i>
              <div className="configurator-section-title">Exterior Colors</div>
              <div className="configurator-section-values">
                {carColors.map((item, index) => (
                  <div
                    key={index}
                    className={`item ${
                      item.color === carColor.color ? "item-active" : ""
                    }`}
                    onClick={() => setCarColor(item)}
                  >
                    <div
                      className="item-dot"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="item-label">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};