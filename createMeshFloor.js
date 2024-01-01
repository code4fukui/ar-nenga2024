import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const createMeshFloor = () => {
  const geometry = new THREE.BoxGeometry(50, 1, 50, 50, 1, 50);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, colorWrite: false }); 
  const cube = new THREE.Mesh(geometry, material); 
  cube.renderOrder = -1;
  cube.position.y = -.5;
  return cube;
};
