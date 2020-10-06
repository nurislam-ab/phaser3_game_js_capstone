import Phaser from 'phaser';
import config from '../config/config';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.video('bat', 'src/assets/videos/bat.mp4', 'canplay', true);
    this.load.image('logo', 'src/assets/images/game_logo_concept_2.png');
    this.load.audio('boot_scene_audio', 'src/assets/audio/horror_sound.mp3');
    this.load.image('preloader_screne_back', 'src/assets/images/preloader_screne_back.jpg');
  }

  create() {
    const video = this.add.video(config.width / 2, config.height / 2, 'bat');
    const sfx = this.sound.add('boot_scene_audio');
    sfx.play();
    video.play();
    this.add.image(config.width / 2, config.height / 2, 'logo');
    this.timedEvent = this.time.delayedCall(9000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Preloader');
  }
}

export default BootScene;