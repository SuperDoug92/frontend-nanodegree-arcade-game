// Enemies our player must avoid
var Enemy = function(yPosition, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x=-83;
    this.y=yPosition;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
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
  this.x = 101*2;
  this.y = 83*5-20;
}
player.prototype = Object.create(Enemy.prototype);
player.prototype.constructor = player;
player.prototype.update = function(){

}
player.prototype.handleInput = function(){

}

// player.prototype.render = Enemy.prototype.render;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

enemyYpositions = [];
var tileHeight = 83;
enemyYpositions.push(tileHeight-20,tileHeight*2-20,tileHeight*3-20);

var NumEnemies = 4;

var allEnemies = []
setInterval(function(){
  allEnemies.forEach(function(enemy){
    if (enemy.x>550){
      enemy.x = -83;
      enemy.y = enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)];
    }
  });
  if (allEnemies.length < NumEnemies){
    allEnemies.push(new Enemy(enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)],101));
  }
}, 2000);
allEnemies.push(new Enemy(enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)],101));

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
