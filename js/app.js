// Enemies our player must avoid
var Enemy = function(yPosition) {
    this.sprite = 'images/enemy-bug.png';
    this.x=0;
    this.y=yPosition;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
xPositions = []
numCols = 5
for (col = 0; col < numCols; col++) {
  xPositions.push(col * 101);
}

Enemy.prototype.update = function(dt) {
    this.x = xPositions[xPositions.indexOf(this.x)+1];
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = function(){
  this.sprite = 'images/char-boy.png';
}
player.prototype = Object.create(Enemy.prototype);
player.prototype.constructor = player;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

enemyYpositions = [];
var tileHeight = 83;
enemyYpositions.push(tileHeight-20,tileHeight*2-20,tileHeight*3-20);

var allEnemies = []
allEnemies.push(new Enemy(enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)]));

var player = new player;
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
