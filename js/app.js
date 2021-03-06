//Character prototype parent object
var Character = function(){}
Character.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function(yPosition, speed) {
  this.sprite = 'images/enemy-bug.png';
  this.x=-83;
  this.speed = speed;
  this.y=yPosition;
  this.width = 101;
  this.height = 83;
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.update = function(dt) {
  this.x += this.speed*dt;
};

var player = function(){
  this.sprite;
  this.x = 101*2;
  this.y = 83*5-20;
  this.width = 101;
  this.height = 83;
}
player.prototype = Object.create(Character.prototype);
player.prototype.constructor = player;
player.prototype.update = function(){
  if(this.y<83-20){
    this.reset();
  }

  allEnemies.forEach(function(enemy){
    if (enemy.x < this.x + this.width &&
       enemy.x + enemy.width > this.x &&
       enemy.y +70 < this.y + 70 + this.height &&
       enemy.height + enemy.y+70 > this.y + 70) {
      this.reset();
    }
  }.bind(this));
}
player.prototype.reset = function(){
  this.x = 101*2;
  this.y = 83*5-20;
}
player.prototype.handleInput = function(input){
  switch(input) {
    case "up":
      this.y -= 83
      break;
    case "down":
      if (this.y < 395){
        this.y += 83
      }
      break;
    case "left":
      if (this.x > 0){
        this.x -= 101
      }
      break;
    case "right":
      if (this.x < 404){
        this.x += 101
      }
      break;
  }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

enemyYpositions = [];
var tileHeight = 83;
enemyYpositions.push(tileHeight-20,tileHeight*2-20,tileHeight*3-20);

var NumEnemies = 7;

var allEnemies = []
setInterval(function(){
  allEnemies.forEach(function(enemy){
    if (enemy.x>550-83){
      enemy.x = -83;
      enemy.y = enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)];
    }
  });
  if (allEnemies.length < NumEnemies){
    allEnemies.push(new Enemy(enemyYpositions[Math.floor(Math.random() * enemyYpositions.length)],Math.floor(Math.random() * 500)));
  }
}, 2000);

var player = new player;



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
