import Phaser from 'phaser';
import config from './js/config/config';
import GameScene from './js/scenes/gameScene';
import BootScene from './js/scenes/bootScene';
import PreloaderScene from './js/scenes/preloaderScene';
import TitleScene from './js/scenes/titleScene';
import OptionsScene from './js/scenes/optionsScene';
import CreditsScene from './js/scenes/creditsScene';
import Model from './js/model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();