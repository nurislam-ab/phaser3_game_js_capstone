import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: 1280,
  height: 600,
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