

let btn = document.getElementById("btn");
let child1 = document.getElementById("child1");
let child2 = document.getElementById("child2");
let child3 = document.getElementById("child3");
let child4 = document.getElementById("child4");
let child5 = document.getElementById("child5");
let child6 = document.getElementById("child6");
let child7 = document.getElementById("child7");
let child8 = document.getElementById("child8");
let child9 = document.getElementById("child9");
let back = document.getElementById("back");
let time = document.getElementById("time");

let set;

let num = 0;
const timeout = 25;


let im = document.createElement("img");
im.src = "images.webp";

im.height = 73;
im.width = 75;

const gameover = new Audio("gameover.mp3");

function game() {


    set = setInterval(function () {

        child1.innerHTML = "";
        child2.innerHTML = "";
        child3.innerHTML = "";
        child4.innerHTML = "";
        child5.innerHTML = "";
        child6.innerHTML = "";
        child7.innerHTML = "";
        child8.innerHTML = "";
        child9.innerHTML = "";

        let x = Math.floor(Math.random() * 10);

        if (x === 1) {

            im.src = "image.webp";
            child1.appendChild(im);
        }
        else if (x === 2) {
            im.src = "image.webp";
            child2.appendChild(im);
        }
        else if (x === 3) {
            im.src = "image.webp";
            child3.appendChild(im);


        }
        else if (x === 4) {
            im.src = "image.webp";
            child4.appendChild(im);


        }
        else if (x === 5) {
            im.src = "image.webp";
            child5.appendChild(im);


        }
        else if (x === 6) {
            im.src = "image.webp";
            child6.appendChild(im);


        }
        else if (x === 7) {
            im.src = "image.webp";
            child7.appendChild(im);


        }
        else if (x === 8) {
            im.src = "image.webp";
            child8.appendChild(im);


        }
        else if (x === 9) {
            im.src = "image.webp";
            child9.appendChild(im);


        }

        num++;
        time.textContent = num;

        if (num >= timeout) {

            clearInterval(set);
            back.style.display = "block";
            gameover.play();
        }

    }, 1000);


}

function game1() {


    child1.innerHTML = "";
    child2.innerHTML = "";
    child3.innerHTML = "";
    child4.innerHTML = "";
    child5.innerHTML = "";
    child6.innerHTML = "";
    child7.innerHTML = "";
    child8.innerHTML = "";
    child9.innerHTML = "";

    set = setInterval(function () {

        let x = Math.floor(Math.random() * 10);

        if (x === 1) {
            im.src = "image.webp";
            child1.appendChild(im);
        }
        else if (x === 2) {
            im.src = "image.webp";
            child2.appendChild(im);
        }
        else if (x === 3) {
            im.src = "image.webp";
            child3.appendChild(im);
        }
        else if (x === 4) {
            im.src = "image.webp";
            child4.appendChild(im);
        }
        else if (x === 5) {
            im.src = "image.webp";
            child5.appendChild(im);
        }
        else if (x === 6) {
            im.src = "image.webp";
            child6.appendChild(im);
        }
        else if (x === 7) {
            im.src = "image.webp";
            child7.appendChild(im);
        }
        else if (x === 8) {
            im.src = "image.webp";
            child8.appendChild(im);
        }
        else if (x === 9) {
            im.src = "image.webp";
            child9.appendChild(im);
        }

        num++;
        time.textContent = num;
        if (num >= timeout) {

            clearInterval(set);
            back.style.display = "block";
            gameover.play();

        }

    }, 600);
};

function game2() {


    set = setInterval(function () {

        child1.innerHTML = "";
        child2.innerHTML = "";
        child3.innerHTML = "";
        child4.innerHTML = "";
        child5.innerHTML = "";
        child6.innerHTML = "";
        child7.innerHTML = "";
        child8.innerHTML = "";
        child9.innerHTML = "";

        let x = Math.floor(Math.random() * 10);

        if (x === 1) {

            im.src = "image.webp";
            child1.appendChild(im);
        }
        else if (x === 2) {
            im.src = "image.webp";
            child2.appendChild(im);
        }
        else if (x === 3) {
            im.src = "image.webp";
            child3.appendChild(im);


        }
        else if (x === 4) {
            im.src = "image.webp";
            child4.appendChild(im);


        }
        else if (x === 5) {
            im.src = "image.webp";
            child5.appendChild(im);


        }
        else if (x === 6) {
            im.src = "image.webp";
            child6.appendChild(im);


        }
        else if (x === 7) {
            im.src = "image.webp";
            child7.appendChild(im);


        }
        else if (x === 8) {
            im.src = "image.webp";
            child8.appendChild(im);


        }
        else if (x === 9) {
            im.src = "image.webp";
            child9.appendChild(im);


        }
        num++;
        time.textContent = num;
        if (num >= timeout) {

            clearInterval(set);
            back.style.display = "block";
            gameover.play();

        }


    }, 500);
}



let score = 0;
im.addEventListener("click", () => {



    if (num < timeout) {

        const dscore = document.getElementById("score");
        score++;
        dscore.textContent = score;
        document.getElementById("scr").innerHTML = score;

    }

},);

const audio = new Audio("audio.mp3");

im.addEventListener("click", () => {
    audio.play();
})

