import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/images/Logo.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;