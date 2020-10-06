import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, 'menu_back');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Form');
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
    this.scoresBoardBtn = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Scores', 'ScoreBoard');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}

export default TitleScene;