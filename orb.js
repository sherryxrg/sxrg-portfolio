var frame = $('.frame')
var fheight = frame.height();
var fwidth = frame.width();

let scene, camera, renderer, cube;

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

    document.getElementById("boxframe").appendChild(renderer.domElement);

    // create cube object
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial({color: 0x00ffff});
    cube = new THREE.Mesh(geometry, material );
    scene.add(cube);

    // set camera distance from cube
    camera.position.z = 4;
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