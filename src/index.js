import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import Sun from './bodies/sun.js';
import Earth from "./bodies/planets/earth";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    '../assets/images/stars.jpg',
    '../assets/images/stars.jpg',
    '../assets/images/stars.jpg',
    '../assets/images/stars.jpg',
    '../assets/images/stars.jpg',
    '../assets/images/stars.jpg',
]);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(0, 0, -300);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

const sun = Sun();
scene.add(sun);

const earth = Earth();
earth.position.set(1000, 0, 0);
sun.add(earth);

camera.lookAt(earth.position);
orbitControls.target = earth.position;

renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
    sun.rotation.y += 0.001;

});