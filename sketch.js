var player;
var wallGroup;
var key1
var key2
var wall26, wall27

function preload(){

}

function setup(){
createCanvas(750,650)

player = createSprite(42,20,38,30)
key1 = createSprite(520,190,25,20)
key2 = createSprite(680,510,25,20)
wall26 = createSprite(270,230,15,80)
wall27 = createSprite(290,610,15,80)

wallGroup = new Group()

}

function draw(){
    background("green")

    if (keyDown("right")) {
        player.x += 4
    }

    if (keyDown("left")) {
        player.x -= 4
    }

    if (keyDown("up")) {
        player.y -= 4
    }

    if (keyDown("down")) {
        player.y += 4
    }

    if(player.isTouching(wallGroup)){
        player.x = 42
        player.y = 20
    }

    if(player.isTouching(key1)){
        wall26.destroy()
        
    }

    if(player.isTouching(key2)){
        wall27.destroy()
        
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
    var wall17 = createSprite(565,450,345,15)
    var wall18 = createSprite(482,265,15,230)
    var wall19 = createSprite(520,150,92,15)
    var wall20 = createSprite(558,250,15,190)
    var wall19 = createSprite(390,450,200,15)
    var wall21 = createSprite(298,360,15,180)
    var wall22 = createSprite(206,270,200,15)
    var wall23 = createSprite(100,413,15,302)
    var wall25 = createSprite(500,572,650,15)
    var wall24 = createSprite(183,450,15,230)
    wallGroup.add(wall1)
    wallGroup.add(wall2)
    wallGroup.add(wall3)
    wallGroup.add(wall4)
    wallGroup.add(wall5)
    wallGroup.add(wall6)
    wallGroup.add(wall7)
    wallGroup.add(wall8)
    wallGroup.add(wall9)
    wallGroup.add(wall10)
    wallGroup.add(wall11)
    wallGroup.add(wall12)
    wallGroup.add(wall13)
    wallGroup.add(wall14)
    wallGroup.add(wall15)
    wallGroup.add(wall16)
    wallGroup.add(wall17)
    wallGroup.add(wall18)
    wallGroup.add(wall19)
    wallGroup.add(wall20)
    wallGroup.add(wall21)
    wallGroup.add(wall22)
    wallGroup.add(wall23)
    wallGroup.add(wall24)
    wallGroup.add(wall25)
    
    
}
