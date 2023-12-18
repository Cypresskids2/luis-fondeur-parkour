import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const objects = [];
let raycaster;

let moveForward = false;
let moveBackward = false;
let moveleft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now(); //current time
const velocity = new THREE.Vector3(); //velocity in 3 directions
const directions = new THREE.Vector3(); //directions

let camera, scene, renderer, controls;
init();
animate();

function init() {
    scene = new THREE.Scene(); //direction
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 10;

    controls = new PointerLockControls(camera, document.body);
    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();

    });
    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function () {
        instructions.style.display = 'block';
        blocker.style.display = '';
    });
    scene.add(controls.getObject());


    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = true;
                break;
            case 'KeyA':
                moveleft = true;
                break;
            case 'KeyD':
                moveRight = true;
                break;
            case 'KeyS':
                moveBackward = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    }

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = false;
                break;
            case 'KeyA':
                moveleft = false;
                break;
            case 'KeyD':
                moveRight = false;
                break;
            case 'KeyS':
                moveBackward = false;
                break;
        }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);

    const planeGeometry = new THREE.BoxGeometry(20, 20, 10, 10)
    const planeMat = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const shape3 = new THREE.Mesh(planeGeometry, planeMat)
    shape3.position.set(0, -8, 30)
    scene.add(shape3);
    objects.push(shape3);



    const pGeometry = new THREE.BoxGeometry(20, 20, 10, 10)
    const Mat = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const shape4 = new THREE.Mesh(pGeometry, Mat)
    shape4.position.set(0, -8, 0)
    scene.add(shape4);
    objects.push(shape4);



    const p2Geometry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M2at = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const sh2ape4 = new THREE.Mesh(p2Geometry, M2at)
    sh2ape4.position.set(0, -8, -30)
    scene.add(sh2ape4);
    objects.push(sh2ape4);


    const p2Geo2metry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M2a2t = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const sh2ap2e4 = new THREE.Mesh(p2Geo2metry, M2a2t)
    sh2ap2e4.position.set(0, -8, -60)
    scene.add(sh2ap2e4);
    objects.push(sh2ap2e4);


    const p2G2eo2metry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M22a2t = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const sh22ap2e4 = new THREE.Mesh(p2G2eo2metry, M22a2t)
    sh22ap2e4.position.set(0, -8, -90)
    scene.add(sh22ap2e4);
    objects.push(sh22ap2e4);


    const p32G2eo2metry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M322a2t = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const s3h22ap2e4 = new THREE.Mesh(p32G2eo2metry, M322a2t)
    sh22ap2e4.position.set(0, -8, 60)
    scene.add(s3h22ap2e4);
    objects.push(s3h22ap2e4);


    const p22G2eo2metry = new THREE.PlaneGeometry(90, 290, 80, 80)
    const p222a2t = new THREE.MeshLambertMaterial({ color: 0xFF0000 })
    const ph222ap2e4 = new THREE.Mesh(p22G2eo2metry, p222a2t)
    ph222ap2e4.position.set(0, -8, 0)
    ph222ap2e4.rotateX(-1.57)
    scene.add(ph222ap2e4);
    objects.push(ph222ap2e4);

    const p0Geometry = new THREE.BoxGeometry(40, 10, 40, 10)
    const p0Mat = new THREE.MeshLambertMaterial({ color: 0x00800 })
    const shape9 = new THREE.Mesh(p0Geometry, p0Mat)
    shape9.position.set(0, -8, -110)
    scene.add(shape9);
    objects.push(shape9);


    const p332G2eo2metry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M3322a2t = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const s33h22ap2e4 = new THREE.Mesh(p332G2eo2metry, M3322a2t)
    sh22ap2e4.position.set(0, -8, 70)
    scene.add(s33h22ap2e4);
    objects.push(s33h22ap2e4);


    const p3322eo2metry = new THREE.BoxGeometry(20, 20, 10, 10)
    const M332a2t = new THREE.MeshLambertMaterial({ color: 0x111111 })
    const p2982 = new THREE.Mesh(p3322eo2metry, M332a2t)
    p2982.position.set(0, -8, 120)
    scene.add(p2982);
    objects.push(p2982);
    const light = new THREE.AmbientLight(0xffffff, 999);
    light.position.set(0, 1000, 1000);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize',onWindowResize);

}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);
    
    const time = performance.now();

    if(controls.isLocked === true) {
        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        const intersections = raycaster.intersectObjects(objects,false);

        const onObject = intersections.length > 0;

        const delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta;// 100.0 = mass

        directions.z = Number(moveForward) - Number(moveBackward);
        directions.x = Number(moveRight) - Number(moveleft);
        directions.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= directions.z * 400.0 * delta;
        if (moveleft || moveRight) velocity.x -= directions.x * 400.0 * delta;
    
        if(onObject === true){
            velocity.y = Math.max(0, velocity.y);
            canJump = true;
        }
        controls.moveRight(-velocity.x * delta );
        controls.moveForward(-velocity.z * delta );

        controls.getObject().position.y += (velocity.y * delta); // new behavior
        if(controls.getObject().position.y < 10) {

            velocity.y = 0;
            controls.getObject().position.y = 10;

            canJump = true;
        }
    } 
    prevTime = time;

    renderer.render(scene, camera);
}


