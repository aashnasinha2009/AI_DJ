function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image( video, 0, 0, 600, 500);
}

song = "";
song2 = "";

function preload()
{
    song = loadSound("musicP.mp3");
    song2 = loadSound("musicE.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}

function play2()
{
    song2.play();
}
