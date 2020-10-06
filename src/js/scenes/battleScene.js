import Phaser from 'phaser';
import Character from '../objects/character';
import Enemy from '../objects/enemy';
import Score from '../objects/score';

class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');
  }

  create() {
    this.add.image(0, 0, 'battle_back').setScrollFactor(1);
    this.startBattle();
    this.sys.events.on('wake', this.startBattle, this);
  }

  nextTurn() {
    const checkStat = this.checkEndBattle();

    if (checkStat.stat === 'victory') {
      this.endBattle('victory');
      return;
    }

    if (checkStat.stat === 'gameOver') {
      this.endBattle('gameOver');
      return;
    }

    do {
      this.index += 1;
      if (this.index >= this.units.length) this.index = 0;
    } while (!this.units[this.index].living);

    if (this.units[this.index] instanceof Character) {
      this.events.emit('PlayerSelect', this.index);
    } else {
      let r;
      do {
        r = Math.floor(Math.random() * this.heroes.length);
      } while (!this.heroes[r].living);

      this.units[this.index].attack(this.heroes[r]);
      this.time.addEvent({
        delay: 3000,
        callback: this.nextTurn,
        callbackScope: this,
      });
    }
  }

  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }

    this.time.addEvent({
      delay: 3000,
      callback: this.nextTurn,
      callbackScope: this,
    });
  }

  checkEndBattle() {
    let victory = true;
    let gameOver = true;

    for (let i = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].living) {
        victory = false;
      }
    }

    for (let i = 0; i < this.heroes.length; i += 1) {
      if (this.heroes[i].living) {
        gameOver = false;
      }
    }

    if (victory) return { stat: 'victory' };
    if (gameOver) return { stat: 'gameOver' };
    return victory || gameOver;
  }

  endBattle(stat) {
    this.heroes.length = 0;
    this.enemies.length = 0;

    for (let i = 0; i < this.units.length; i += 1) {
      this.units[i].destroy();
    }

    this.units.length = 0;
    this.index = -1;

    this.scene.remove('GameUI');
    this.scene.remove('Battle');

    if (stat === 'gameOver') {
      this.scene.stop('Game');
      this.scene.start('GameOver');
    } else if (stat === 'victory') {
      Score.incScore(20);
      this.scene.wake('Game');
    }
  }

  startBattle() {
    this.score = 0;
    const warrior = new Character(this, 600, 200, 'player', 'Warrior', 12, 25);
    this.add.existing(warrior);

    const mage = new Character(this, 600, 300, 'mage', 'Mage', 12, 30);
    this.add.existing(mage);

    const zombiePumpkin = new Enemy(this, 100, 200, 'zombie_pumpkin', 'Zombie Pumpkin', 50, 6);
    this.add.existing(zombiePumpkin);

    const dragonOrrange = new Enemy(this, 100, 300, 'dragonorrange', 'Dragon 2', 50, 6);
    this.add.existing(dragonOrrange);

    const bird = new Enemy(this, 100, 400, 'bird', 'Bird', 50, 6);
    this.add.existing(bird);

    this.heroes = [warrior, mage];

    this.enemies = [zombiePumpkin, dragonOrrange, bird];

    this.units = this.heroes.concat(this.enemies);

    this.index = -1;
    this.scene.launch('GameUI');
  }
}

export default BattleScene;