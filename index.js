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
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
})

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);

const hemi = new THREE.HemisphereLight(0x0099ff, 0xaa5500);


const mesh = new THREE.Mesh(geo, mat)
mesh.add(wireMesh);
scene.add(mesh);
scene.add(hemi)

function animate(t = 0) {
    requestAnimationFrame(animate)
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera);
}


animate();




