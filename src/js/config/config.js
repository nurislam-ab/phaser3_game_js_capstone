import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: 1364,
  height: 632,
  dom: {
    createContainer: true,
  },
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};