import Unit from './unit';

class Enemy extends Unit {
  // eslint-disable-next-line no-useless-constructor
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
  }
}

export default Enemy;