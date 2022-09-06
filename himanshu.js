const D = 800
const s = 5;
let i = 0;
let blue = true;

const t = D / 8;
const b = 7 * t;
const c = D / 2;

function setup() 
{
    createCanvas(D, D);
}

function draw() 
{
    background(0);
    if (blue) {
        stroke(c - t - i, i, 255);
        blue = false;
    } else {
        stroke(255, i, c - t - i);
        blue = true;
    }
    line(c, t + i, c + i, c);
    line(c - i, c, c, t + i);
    line(c, b - i, c - i, c);
    line(c + i, c, c, b - i);
    i = i + s;
}