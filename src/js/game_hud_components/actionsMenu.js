import Phaser from 'phaser';
import Menu from './menu';

class ActionsMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.addMenuItem('Attack');
  }

  confirm() {
    // when player does smotheing do smth
  }
}

export default ActionsMenu;