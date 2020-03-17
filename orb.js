var frame = $('.frame')
frame.css('background-color', "#00ffff");



let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
    75, 
    frame.width()/frame.height(),
    0.1,
    1000
    );
}

init();

console.log(frame.width());
console.log(frame.height());