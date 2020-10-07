import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';
import { getScore, resetScore } from '../objects/score';
import { getName } from '../objects/player';
import { postData } from '../api/scoreApi';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(0, 0, 'battle_back');

    this.title = this.add.text(0, 0, 'Game Over', { fontSize: '24px', fontStyle: 'bold', fill: '#fff' });

    this.score = this.add.text(0, 0, `Score: ${getScore()}`, { fontSize: '30px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(this.title, this.zone);

    Phaser.Display.Align.In.Center(this.score, this.zone);

    this.title.displayOriginY = 50;
    this.score.displayOriginY = -50;

    const name = getName();
    const score = getScore();
    postData(name, score);

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    resetScore();
  }
}

export default GameOver;