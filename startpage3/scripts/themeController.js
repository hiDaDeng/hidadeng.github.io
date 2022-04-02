//save the images locally in the directory and specify their path down here.
//do localStorage.clear(); to reset any uploaded pictures (also resets your temperatue)

var oneQuotePerDay = false; //change quote daily?

function pickBackground() {
    var bg0  =  "./pics/bg/0.jpg";
    var bg1  =  "./pics/bg/1.jpg";
    var bg2  =  "./pics/bg/3.jpg";
    var bg3  =  "./pics/bg/4.jpg";
    var bg4  =  "./pics/bg/5.jpg";


    var background = [bg0, bg1, bg2, bg3,
                      bg4];

    var N = background.length; // number of images
    var image = randomPicker(N);
    //image = 6; //for viewing spcific image 
    var opacity = getOpacity(image); //changes brightness for individual papes
    image = background[image];


    //document.getElementById("background").style.backgroundImage = "url(" + "'" + path + "'" +")";
    document.getElementById("background").src = image;
    document.getElementById("background").style.opacity = opacity;
}

function randomPicker(i) {
    return Math.floor(Math.random() * i);
}

//use this to control how bright each background is
function getOpacity(imageNumber) {
    var opacity;
    switch(imageNumber) {
        case 0:
            opacity = 0.7;
            break;
        case 1:
            opacity = 0.65;
            break;
        case 2:
            opacity = 0.9;
            break;
        case 3:
            opacity = 0.9;
            break;
        case 4:
            opacity = 0.7;
            break;
        case 5:
            opacity = 0.9;
            break;
        case 6:
            opacity = 0.65;
            break;
        case 7:
            opacity = 0.7;
            break;
        case 8:
            opacity = 0.55;
            break;
        case 9:
            opacity = 0.45;
            break;
        case 10:
            opacity = 0.75;
            break;
        case 11:
            opacity = 0.9;
            break;
        case 12:
            opacity = 0.8;
            break;
        default:
            opacity = 0.55;
    }
    return opacity;
}