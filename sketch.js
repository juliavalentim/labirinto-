var player;

function preload(){

}

function setup(){
createCanvas(750,650)

player = createSprite(42,20,38,30)

}

function draw(){
    background("green")

    if (keyDown("right")) {
        player.x += 2
    }

    if (keyDown("left")) {
        player.x -= 2
    }

    if (keyDown("up")) {
        player.y -= 2
    }

    if (keyDown("down")) {
        player.y += 2
    }

    text(mouseX + "-" + mouseY, mouseX, mouseY)

    wall()
    drawSprites()
}

function wall(){
    var wall1 = createSprite(8,375,15,750)
    var wall2 = createSprite(742,250,15,660)
    var wall3 = createSprite(402,8,664,15)
    var wall4 = createSprite(390,642,750,15)
    var wall5 = createSprite(402,8,664,15)
    var wall6 = createSprite(402,8,664,15)
    var wall7 = createSprite(78,75,15,120)
    var wall8 = createSprite(160,127,160,15)
    var wall9 = createSprite(312,125,15,120)
    var wall10 = createSprite(95,185,450,15)
    var wall11 = createSprite(250,65,140,15)
    var wall12 = createSprite(400,140,15,140)
    var wall13 = createSprite(520,78,240,15)
    var wall14 = createSprite(400,300,15,300)
    var wall15 = createSprite(632,230,15,300)
    var wall16 = createSprite(557,388,165,15)
    var wall17 = createSprite(550,400,240,15)
}
