import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';
import { getData } from '../api/scoreApi';

class ScoreBoardScene extends Phaser.Scene {
  constructor() {
    super('ScoreBoard');
  }

  create() {
    this.add.image(config.width / 2, config.height / 2, 'scores_back').setScale(1.5);

    this.title = this.add.text(240, 100, 'Leaderboard', { fontSize: '40px' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    getData()
      .then(scores => {
        const arr = [];
        scores.map((user, i) => {
          arr.push(
            `${(i + 1).toString()}. ${user[0]}   ${user[1].toString()}`,
          );
          return true;
        });

        const graphics = this.add.graphics();
        graphics.fillRect(235, 140, 320, 250);

        const mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
        const text = this.add.text(250, 150, arr, { fontFamily: 'Aria', color: '#fff', wordWrap: { width: 310 } }).setOrigin(0);

        text.setMask(mask);

        const zone = this.add.zone(235, 130, 320, 256).setOrigin(0).setInteractive();

        zone.on('pointermove', (pointer) => {
          if (pointer.isDown) {
            text.y += (pointer.velocity.y / 10);

            text.y = Phaser.Math.Clamp(text.y, -400, 300);
          }
        });
      });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}

export default ScoreBoardScene;