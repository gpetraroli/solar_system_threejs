import * as THREE from 'three';

const Earth = () => {
    const renderer = new THREE.WebGLRenderer();

    const textureLoader = new THREE.TextureLoader();

    const earthGeometry = new THREE.SphereGeometry(10, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load('../assets/images/earth_6K.jpg')});
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.receiveShadow = true;
    earth.rotation.x = (23.5 / 180) * Math.PI;

    const moonGeometry = new THREE.SphereGeometry(2, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load('../assets/images/moon.jpg')});
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(-20, 0, 0);
    moon.castShadow = true;
    moon.receiveShadow = true;
    moon.rotation.y = Math.PI;
    const moonPivot = new THREE.Object3D();
    moonPivot.rotation.y = (5.14 / 180) * Math.PI;
    moonPivot.add(moon);

    const earthGroup = new THREE.Object3D();
    earthGroup.add(earth);
    earthGroup.add(moonPivot);


    renderer.setAnimationLoop(() => {
        moonPivot.rotation.y += 0.0261;
        earth.rotation.y += 0.365;
    });

    return earthGroup;
};

export default Earth;