import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from '@react-three/fiber'
gsap.registerPlugin(ScrollTrigger)

export default function Animations() {

    const { camera } = useThree();
  
    const animateCamera = () => {
      gsap.to(camera.position, {
        duration: 1,
        x: 1,
        y: 1,
        z: 1,
        ease: 'power3.out'
      });
    };
  
    return null
  }