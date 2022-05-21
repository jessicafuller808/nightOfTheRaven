class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //loads background image
        this.load.image('background', '../assets/Background.png');

        //loads background track
        this.load.audio('darkFog', [
            '../assets/darkFog.mp3'
        ]);

        //sets loading path for animation files
        this.load.path = '../assets/animations/';

        //loops through and loads 24 different pngs from animations dir to create raven animation
        for (let i = 1; i < 25; i++) {
            this.load.image(`raven${i}`, `raven${i}.png`);
        }

        //Loops through and loads 3 different pngs from animations dir to create reaper animation
        for (let i = 1; i < 3; i++) {
            this.load.image(`reaper${i}`, `reaper${i}.png`);
        }


    }

    create ()
    {

      //creates background image
      let bg = this.add.image(400, 300, 'background');

      //creates audio, plays, and loops it
      let backgroundMusic = this.sound.add('darkFog');
      backgroundMusic.loop = true;
      backgroundMusic.play();

      //creates raven flight animation
      this.anims.create({
          key: 'fly',
          frames: [
              { key: 'raven1' },
              { key: 'raven2' },
              { key: 'raven3' },
              { key: 'raven4' },
              { key: 'raven5' },
              { key: 'raven6' },
              { key: 'raven7' },
              { key: 'raven8' },
              { key: 'raven9' },
              { key: 'raven10' },
              { key: 'raven11' },
              { key: 'raven12' },
              { key: 'raven13' },
              { key: 'raven14' },
              { key: 'raven15' },
              { key: 'raven16' },
              { key: 'raven17' },
              { key: 'raven18' },
              { key: 'raven19' },
              { key: 'raven20' },
              { key: 'raven21' },
              { key: 'raven22' },
              { key: 'raven23' },
              { key: 'raven24', duration: 50 }
          ],
          frameRate: 25,
          repeat: -1
      });

      //creates reaper idle animation
      this.anims.create({
        key: 'reap',
        frames: [
            { key: 'reaper1' },
            { key: 'reaper2' },
            { key: 'reaper3', duration: 50 }
      ],
      frameRate: 10,
      repeat: -1
        });

        //adds Raven to scene, sets the size, and applies the fly animation
        let player = this.add.sprite(100, 50, 'raven1')
        .setScale(.15)
        .play('fly');

        //adds Reaper to scene, sets the size, and applies the reap animation
        let enemy1 = this.add.sprite(400, 50, 'reaper1')
        .setScale(.30)
        .play('reap');


    }
 
}

//Configuration
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ Example ]
};

const game = new Phaser.Game(config);