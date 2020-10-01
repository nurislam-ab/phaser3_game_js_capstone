import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // this.load.image('background', 'src/assets/images/background.jpg');
    // map tiles
    this.load.image('tiles', 'src/assets/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'src/assets/map/map.json');

    // our two characters
    this.load.spritesheet('player', 'src/assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    // this.add.image(400, 300, 'background');
    const map = this.make.tilemap({ key: 'map' });

    const tiles = map.addTilesetImage('spritesheet', 'tiles');

    const grass = map.createStaticLayer('Grass', tiles, 0, 0);
    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    this.player = this.physics.add.sprite(50, 100, 'player', 6);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
  }
}