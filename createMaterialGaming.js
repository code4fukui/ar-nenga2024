import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const createMaterialGaming = () => {
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    void main() {
      float t = time + (vUv.x + vUv.y) * 0.02; //gl_FragCoord.y;
      gl_FragColor = vec4(
        0.5 + 0.5 * sin(t),           // R
        0.5 + 0.5 * sin(t + 2.09439), // G
        0.5 + 0.5 * sin(t + 4.18879), // B
        1.0 // Alpha
      );
    }
  `;
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0.0 }
    }
  });
  material.update = () => {
    material.uniforms.time.value += 0.05;
  };
  return material;
};
