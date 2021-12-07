const parallax = document.getElementById("parallax");
const boxHolder = document.getElementById("BoxDisappear");

//THREE.JS Background

let scene, camera, renderer, stars, starGeo;
    
    function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;
        camera.rotation.x = Math.PI/2;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        starGeo = new THREE.Geometry();
        for(let i=0;i<6000;i++) {
        star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.0002;
        starGeo.vertices.push(star);
        }

        let sprite = new THREE.TextureLoader().load( 'star.png' );
        let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
        });

        stars = new THREE.Points(starGeo,starMaterial);
        scene.add(stars);

        window.addEventListener("resize", onWindowResize, false);

        animate(); 
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        }
    function animate() {
        starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
        
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0.5;
        }
        });
        starGeo.verticesNeedUpdate = true;
        stars.rotation.y +=0.002;
    
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    init();

//Parallax Scrolling

    window.addEventListener("scroll",function(){
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = -offset*0.2 + "px";
    })


// document.getElementById("titleText1").addEventListener("click",function(){
//     console.log("i have been clicked!")
// })

//Scroll Up Button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById("workTwentyTwentyOne").style.display = "block";
document.getElementById("twentytwentyone").classList.add("view");


document.getElementById("twentytwentyone").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("workTwentyNineteen").style.display = "none";
    document.getElementById("twentynineteen").classList.remove("view");
    document.getElementById("workTwentyTwenty").style.display = "none";
    document.getElementById("twentytwenty").classList.remove("view");

    document.getElementById("workTwentyTwentyOne").style.display = "block";
    document.getElementById("twentytwentyone").classList.add("view");

})

document.getElementById("twentytwenty").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("twentytwenty").classList.add("view");

    document.getElementById("workTwentyNineteen").style.display = "none";
    document.getElementById("twentynineteen").classList.remove("view");
    document.getElementById("workTwentyTwentyOne").style.display = "none";
    document.getElementById("twentytwentyone").classList.remove("view");

    document.getElementById("workTwentyTwenty").style.display = "block";
})

document.getElementById("twentynineteen").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("workTwentyTwenty").style.display = "none";
    document.getElementById("twentytwenty").classList.remove("view");
    document.getElementById("workTwentyTwentyOne").style.display = "none";
    document.getElementById("twentytwentyone").classList.remove("view");

    document.getElementById("workTwentyNineteen").style.display = "block";
    document.getElementById("twentynineteen").classList.add("view");


})
