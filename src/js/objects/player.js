import Phaser from 'phaser';
import Unit from './unit';

class Player extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.flipX = true;

    this.setScale(2);
  }
}

export default Player;