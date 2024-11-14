//   se configura un juego con una variable tipo json\
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  // creacion de las fisicas para estaticasy dinamicas
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);
//cargar fondo del juego, nos permite usar las imagenes 
//guardadas en nuestra carpeta imag.
// vcargar la imagen de nuestro personaje y le definimos su alto y ancho
function preload() {

  this.load.image('sky', '/components/imag/sky.png');
  this.load.image('star', '/components/imag/star.png');
  this.load.image('ground', '/components/imag/platform.png');
  this.load.image('bomb', '/components/imag/bomb.png');
  this.load.spritesheet('dude', '/components/imag/dude.png', { frameWidth: 32, frameHeight: 48 });// nos servira para poder dar movimiento a nuestro persnaje
}
//vamos a llamar anuestra imagen, usasmos 'this.add'
//nos trae la imagen cargada en la funcion anterios a nuestra pagaina
// sus parametors son x, y, nombre de nuesta imagen. 
function create() {
  this.add.image(400, 300, 'sky');
  
  // esta linea crea un nuevo gupo de elementos en la variable local platforms con fisica estatica
  platforms = this.physics.add.staticGroup(); 
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  //iniciamos a crear nuestro personaje, aun no indicamos los limites de colicion
  player = this.physics.add.sprite(100, 450, 'dude');
  // agrega colision con los bordes del juego
  player.setCollideWorldBounds(true);
  // agrega efecto a la colision con los bordes 'bounce'
  player.setBounce(0.2);

  //Insertamos la animacion que da la sensacion de movimiento del player, Vamos a definir que fotogramas va ausar el juego cuando movamosal personaje
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20
  });

  //player.body.setGravityY(300); // MAYOR VALOR EL PERSO DEL OBJETO SERA MAYOR
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  // se crea este objeto que Define las plataformas como limites de colicion del player
  // cuando creamos un sprite dinamicos, le creamos una propiedad body que hace 
  //referencia a su cuerpo fisico en el sistema arcade de phaser
  this.physics.add.collider(player, platforms);

  //funcion de phaser que permite crear un variable para anadir control al movimieto de nuestro objeto player
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  //esta funcion determina como va a ser la velocidad y direccion del mivimiento generado por la variable cursor
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play('left', true);
  }
  //esta funcion determina como va a ser la velocidad y direccion del mivimiento generado por la variable cursor
  else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
  }
  // ESTATICO 
  else {
    player.setVelocityX(0);
    player.anims.play('turn', true);
  }
  // SALTO
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}