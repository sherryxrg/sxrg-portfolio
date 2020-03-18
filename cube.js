var frame = $('.frame')
var fheight = frame.height();
var fwidth = frame.width();

let scene, camera, renderer, cube;
let hemisphereLight, ambientLight, shadowLight;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
    75, 
    fwidth/fheight,
    0.1,
    1000
    );

    // add anti-aliasing
    renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha: true
    });
    renderer.setSize(fwidth, fheight);
    renderer.setClearColor( 0xffffff, 0);
    renderer.shadowMap.enabled = true;

    document.getElementById("boxframe").appendChild(renderer.domElement);

    // create cube object
    const geometry = new THREE.BoxGeometry( 2, 2, 2);
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // set camera distance from cube
    camera.position.z = 6;

    // add light
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);

    // an ambient light modifies the global color of a scene and makes the shadows softer
    ambientLight = new THREE.AmbientLight(0x5c88a4, .5);
    scene.add(ambientLight);

    // A directional light shines from a specific direction. 
    // It acts like the sun, that means that all the rays produced are parallel. 
    shadowLight = new THREE.DirectionalLight(0xffffff, .6);

    // Set the direction of the light  
    shadowLight.position.set(150, 350, 100);
    shadowLight.castShadow = true;

    // define the visible area of the projected shadow
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    // res of shadow
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);
}

// create and call animation function
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}


// resize scene based on window
function onWindowResize() {
    camera.aspect = fwidth/fheight;
    camera.updateProjectionMatrix();
    renderer.setSize(fwidth, fheight);
}
// add the function to an event listener
window.addEventListener('resize', onWindowResize, false);

init();
animate();


console.log(fwidth);
console.log(fheight);