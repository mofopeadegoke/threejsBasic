import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const far = 10;
const near = 0.1;
const camera = new THREE.PerspectiveCamera(fov, aspect, far, near);
camera.position.z = 2;
const scene = new THREE.Scene();

const geo = new THREE.OctahedronGeometry(1.0, 2);
const mat = new THREE.MeshBasicMaterial({
    color: 0xccff
})

const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh);

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
}


animate();




