import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('background', 'src/assets/images/background.jpg');
  }

  create() {
    this.add.image(400, 300, 'background');
  }
}