var ball;
var database, position

function setup()
{
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position')
    ballPosition.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown("left"))
    {
        writePosition(-1,0);
    }
    else if(keyDown("right"))
    {
        writePosition(1,0);
    }
    else if(keyDown("up"))
    {
        writePosition(0,-1);
    }
    else if(keyDown("down"))
    {
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y)
{
    database.ref('ball/position').set({
        x: ball.x + x, 
        y: ball.y + y
    })
  
}

function readPosition(data)
{
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
