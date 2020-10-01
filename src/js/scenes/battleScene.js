import Phaser from 'phaser';

class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');
  }

  preload() {
    // load resources
    this.load.spritesheet('player', 'src/assets/sprites/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('dragonblue', 'src/assets/sprites/dragonblue.png');
    this.load.image('dragonorrange', 'src/assets/sprites/dragonorrange.png');
  }

  create() {
    this.scene.launch('GameUIScene');
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
  }
}

export default BattleScene;