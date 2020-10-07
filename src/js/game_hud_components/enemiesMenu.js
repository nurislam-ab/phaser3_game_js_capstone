import Menu from './menu';

class EnemiesMenu extends Menu {
  // eslint-disable-next-line no-useless-constructor
  constructor(x, y, scene) {
    super(x, y, scene);
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}

export default EnemiesMenu;