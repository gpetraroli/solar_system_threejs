import * as THREE from 'three';
import {Object3D} from "three";

const Sun = () => {
    const textureLoader = new THREE.TextureLoader();

    const geometry = new THREE.SphereGeometry(40, 32, 32);
    const material = new THREE.MeshBasicMaterial({map: textureLoader.load('../assets/images/sun.jpg')});
    const sun = new THREE.Mesh(geometry, material);

    const sunLight = new THREE.PointLight(0xffffff, 5);
    sunLight.castShadow = true;
    sun.add(sunLight);

    const lightHelper = new THREE.PointLightHelper(sunLight, 75);
    const shadowCameraHelper = new THREE.CameraHelper(sunLight.shadow.camera);
    // sun.add(lightHelper);
    // sun.add(shadowCameraHelper);

    return sun;
};

export default Sun;