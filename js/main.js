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
        for (let i = 1; i < 5; i++) {
            this.load.image(`reaper${i}`, `reaper${i}.png`);
        }


    }

    create ()
    {

      //creates background image
      this.bg = this.add.image(400, 300, 'background');

      //creates audio, plays, and loops it
      this.backgroundMusic = this.sound.add('darkFog');
      this.backgroundMusic.loop = true;
      this.backgroundMusic.play();

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

      //creates reaper attack animation
      this.anims.create({
        key: 'reapAttack',
        frames: [
            { key: 'reaper1' },
            { key: 'reaper2' },
            { key: 'reaper3' },
            { key: 'reaper4', duration: 50 }
      ],
      frameRate: 5,
      repeat: -1
        });

        //creates reaper idle animation
      this.anims.create({
        key: 'reapIdle',
        frames: [
            { key: 'reaper1' },
            { key: 'reaper2', duration: 50 }
      ],
      frameRate: 4,
      repeat: -1
        });

        //adds Raven to scene, sets size, and applies the fly animation
        this.player = this.add.sprite(100, 50, 'raven1')
        .setScale(.15)
        .play('fly');

        //adds Reaper to scene and sets position.
        this.reaper = this.add.sprite(600, 500, 'reaper1');

        //Flips Reaper's axis to face left side of screen
        this.reaper.flipX = true;

        //Sets Reaper size
        this.reaper.setScale(.40);

        //Runs the reapIdle animation on Reaper
        this.reaper.play('reapIdle');

        //Puts Reaper at an angle to face player
        //this.reaper.angle = 40;
    }

    update() {
        //Makes Reaper slowly creep toward left side of screen
        //this.reaper.x += -(0.4);

        //TODO: Make Reaper glide back and forth across screen within the confines of the scene.

        //if reaper is flipped on x axis and it's x coord is greater than 8...
        if (this.reaper.flipX === true && this.reaper.x > 8) {
            //increment reaper down the x axis (toward origin) by 0.4
            this.reaper.x += -(0.4);
        //if reaper's x coord is less than or equal to 8 and it's flipped on the x axis
        } else if (this.reaper.x <= 8 && this.reaper.flipX === true){
            //flip the reaper away from origin on x axis
            this.reaper.flipX = false;
        //if reaper is facing away from origin (not flipped) and repear's x coord is less than 750
        } else if (this.reaper.flipX === false && this.reaper.x < 750){
            //increment reaper up the x axis by 0.4
            this.reaper.x += 0.4;
        //if reaper is not flipped and is greater than or equal to 750 on the x axis
        } else if (this.reaper.flipX === false && this.reaper.x >= 750) {
            //flip reaper to origin on the x axis
            this.reaper.flipX = true;
        }

        console.log(this.reaper.x);

        //TODO: Create controller for Raven
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