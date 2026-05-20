

// from https://www.youtube.com/watch?v=okfZRl4Xw-c

// let sketch = function (p) {
//     p.setup = function () {
//         p.createCanvas(100, 100);
//         p.background(0);
//     }
// };


// new p5(sketch, 'canvasForHTML');


var w = window.innerWidth;
var h;
var nWaves;
if (w > 600) {
    h = .2 * window.innerHeight;
    nWaves = 10;
} else {
    h = .15 * window.innerHeight;
    nWaves = 3;
}

// This 6 is the number of waves (3) by 2 bacause the amplitude is 
// measured from teh central point of the wave
const maxAmpl= h/(nWaves*2) - 2;

console.log(maxAmpl);

var canvasTotalX = w;
var canvasTotalY = h;


class Wave {
    constructor(amp, period, phase) {
        this.amplitude = amp;
        this.period = period;
        this.phase = phase;
    }
    calculate(x) {
        return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
    }
    updatePhase(value = 0.003) {
        this.phase = this.phase + value;
    }
}

let waves = [];

function setup() {
    // see this https://github.com/processing/p5.js/wiki/Positioning-your-canvas
    var canvas = createCanvas(canvasTotalX, canvasTotalY);
    canvas.parent('canvasForHTML');
    for (let i = 0; i < nWaves; i++) {
        var v1 = random(20, maxAmpl);
        var v2 = random(100, 600);
        var v3 = random(TWO_PI);
        wave = new Wave(v1, v2, v3);
        waves = [...waves, wave]
    }
}

function draw() {
    let c1 = color('#000000');
    let c2 = color('#EBEBEB');

    background(c2);
    stroke(c1);
    fill(c1);
    const step = 1;

    beginShape();
    vertex(0, 0);
    for (let x = 0; x < width; x += step) {
        let y = 0;
        for (let wave of waves) {
            y += wave.calculate(x);
        }
        vertex(x, y + height / 2);
    }
    vertex(canvasTotalX, 0);
    endShape(CLOSE);
    for (let wave of waves) {
        wave.updatePhase();
    }
}

