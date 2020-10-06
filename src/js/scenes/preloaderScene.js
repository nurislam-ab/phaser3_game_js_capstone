import Phaser from 'phaser';
import config from '../config/config';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(config.width / 2, config.height / 2, 'preloader_screne_back');
    this.add.image(config.width / 2, config.height / 3, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0xE51B23, 0.8);
    progressBox.fillRect(config.width / 3, config.height / 2 + 80, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#E51B23',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2 + 150,
      y: config.height / 2 + 105,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#E51B23',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 180,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#E51B23',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xE51B23, 1);
      progressBar.fillRect(config.width / 3, config.height / 2 + 80, 300 * value, 50);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.load.html('nameform', 'src/assets/forms/nameform.html');
    this.load.image('blueButton1', 'src/assets/images/Button10.png');
    this.load.image('blueButton2', 'src/assets/images/Button11.png');
    this.load.image('phaserLogo', 'src/assets/images/Logo.png');
    this.load.image('box', 'src/assets/images/checkbox_blue.png');
    this.load.image('checkedBox', 'src/assets/images/checkbox_grey.png');
    this.load.image('menu_back', 'src/assets/images/red_back.jpg');
    this.load.image('scores_back', 'src/assets/images/scores_back.jpg');
    this.load.image('battle_back', 'src/assets/images/red_back.jpg');
    this.load.image('tiles', 'src/assets/map/spritesheet.png');
    this.load.tilemapTiledJSON('map', 'src/assets/map/map.json');
    this.load.spritesheet('player', 'src/assets/sprites/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('mage', 'src/assets/sprites/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('zombie_pumpkin', 'src/assets/sprites/zombie_pumpkin.png');
    this.load.image('dragonorrange', 'src/assets/sprites/dragon.png');
    this.load.image('bird', 'src/assets/sprites/bird.png');
    this.load.audio('bgMusic', ['src/assets/audio/back_sound.mp3']);

    this.timedEvent = this.time.delayedCall(300000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

export default PreloaderScene;