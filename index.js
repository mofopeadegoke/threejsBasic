import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const far = 30;
const near = 0.1;
const camera = new THREE.PerspectiveCamera(fov, aspect, far, near);
camera.position.z = 6;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geo = new THREE.OctahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
})

const taurGeo = new THREE.TorusKnotGeometry(3.5, 1.5, 8, 64, 2, 3);
const taurMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37
});
const taurWireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const taurWireMesh = new THREE.Mesh(taurGeo, taurWireMat);
taurWireMesh.scale.setScalar(1.001);

const taurMesh = new THREE.Mesh(taurGeo, taurMat);

taurMesh.add(taurWireMesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);

const hemi = new THREE.HemisphereLight(0x0099ff, 0xffffff);


const mesh = new THREE.Mesh(geo, mat)
// mesh.add(wireMesh);
// scene.add(mesh);
scene.add(hemi);
scene.add(taurMesh);

function animate(t = 0) {
    requestAnimationFrame(animate)
    // mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera);
    controls.update();
}


animate();




