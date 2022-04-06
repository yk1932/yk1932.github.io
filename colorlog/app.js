import { GlowParticle } from "./glowparticle.js";

const COLORS = [

    // {r: 51, g: 160, b: 160}, // skyblue
    // {r: 54, g: 53, b: 160}, // light
    {r: 95, g:120, b: 241},
    {r: 219, g:0, b: 106},

    // {r: 231, g: 166, b: 87}, // yellow
    // {r: 147, g: 79, b: 125} // blue
];

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = "fixed";
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1)?2:1;

        this.totalParticles = 6;
        this.particles = [];
        this.maxRadius = 800;
        this.minRadius = 600;


        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();
        this.createParticles();


        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth*this.pixelRatio;
        this.canvas.height = this.stageHeight*this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.ctx.globalCompositeOperation = 'saturation';

    }

    createParticles(){
        let curColor = 0;
        this.particles = [];
    
        for(let i = 0; i < this.totalParticles; i++){
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * 
                    (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if(++curColor >= COLORS.length){
                curColor=0;
            }

            this.particles[i] = item;
        }
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        for(let i = 0; i < this.totalParticles; i++){
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload = () => {
    new App();
}

let titleColor = document.getElementById("titleColor");
let titleLog = document.getElementById("titleLog");
let startPage = document.getElementById("startPage");


titleColor.addEventListener("click", () => {
    startPage.style.display = "none";
  })

titleLog.addEventListener("click", () => {
    startPage.style.display = "none";
})


// Interaction 1: When user clicks logo on header, they are lead to the main page again

// Interaction 2: When user clicks on the post button, they are lead to the log page.


let headerPostButton = document.getElementById("headBar__postButton");

headerPostButton.addEventListener("click", () => {
    logPage.style.display = ""
})

