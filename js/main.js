class NoR extends Phaser.Scene
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

        //!RAVEN - load img
        //loops through and loads 24 different pngs from animations dir to create raven animation
        for (let i = 1; i < 25; i++) {
            this.load.image(`raven${i}`, `raven${i}.png`);
        }

        //!REAPER - load img
        //Loops through and loads 3 different pngs from animations dir to create reaper animation
        for (let i = 1; i < 5; i++) {
            this.load.image(`reaper${i}`, `reaper${i}.png`);
        }

        //!ORB - Load img
        //loops through and loads 20 different pngs from animations dir to create orb animation
        for (let i = 1; i < 21; i++) {
            this.load.image(`orb${i}`, `ball${i}.png`);
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

      //!RAVEN animation
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

      //!REAPER animation (attack)
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

        //!REAPER animation (idle)
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

        //!ORB animation
      //creates orb electric animation
      this.anims.create({
        key: 'energy',
        frames: [
            { key: 'orb1' },
            { key: 'orb2' },
            { key: 'orb3' },
            { key: 'orb4' },
            { key: 'orb5' },
            { key: 'orb6' },
            { key: 'orb7' },
            { key: 'orb8' },
            { key: 'orb9' },
            { key: 'orb10' },
            { key: 'orb11' },
            { key: 'orb12' },
            { key: 'orb13' },
            { key: 'orb14' },
            { key: 'orb15' },
            { key: 'orb16' },
            { key: 'orb17' },
            { key: 'orb18' },
            { key: 'orb19' },
            { key: 'orb20', duration: 50 }
        ],
        frameRate: 40,
        repeat: -1
    });

        //!RAVEN - add
        //adds Raven to scene, sets size, and applies the fly animation
        this.player = this.add.sprite(100, 50, 'raven1')
        .setScale(.15)
        .play('fly');

        //!REAPER - add
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

        //!ORB1 - add
        //adds orb1 to scene, sets size, and applies the fly animation
        this.orb1 = this.add.sprite(400, 300, 'orb1')
        .setScale(1.5)
        .play('energy');

        //!ORB2 - add
        //adds orb2 to scene, sets size, and applies the fly animation
        this.orb2 = this.add.sprite(400, 300, 'orb2')
        .setScale(1)
        .play('energy');

    }

    update() {
        //Makes Reaper slowly creep toward left side of screen
        //this.reaper.x += -(0.4);

        //!REAPER - AI
        //if reaper is flipped on x axis and it's x coord is greater than 8...
        {if (this.reaper.flipX === true && this.reaper.x > 8) {
            //increment reaper down the x axis (toward origin) by 0.4
            this.reaper.x += -(0.5);
        //if reaper's x coord is less than or equal to 8 and it's flipped on the x axis
        } else if (this.reaper.x <= 8 && this.reaper.flipX === true){
            //flip the reaper away from origin on x axis
            this.reaper.flipX = false;
        //if reaper is facing away from origin (not flipped) and repear's x coord is less than 750
        } else if (this.reaper.flipX === false && this.reaper.x < 750){
            //increment reaper up the x axis by 0.4
            this.reaper.x += 0.5;
        //if reaper is not flipped and is greater than or equal to 750 on the x axis
        } else if (this.reaper.flipX === false && this.reaper.x >= 750) {
            //flip reaper to origin on the x axis
            this.reaper.flipX = true;
        }}
        
        //console.log(this.reaper.x);

        //!ORB1 & ORB2 - sets position
        //moves orb1 along the x & y axis with the reaper
        this.orb1.x = this.reaper.x;
        this.orb1.y = this.reaper.y;

        //moves orb2 along the x & y axis with the reaper
        this.orb2.x = this.reaper.x;
        this.orb2.y = this.reaper.y;

        //!ORB1 & ORB2 - rotation math
        {Phaser.Math.RotateAroundDistance(this.orb1, this.reaper.x, this.reaper.y, angle1, distance1);
        Phaser.Math.RotateAroundDistance(this.orb2, this.orb1.x, this.orb1.y, angle2, distance2);

        angle1 = Phaser.Math.Angle.Wrap(angle1 + 0.03);
        angle2 = Phaser.Math.Angle.Wrap(angle2 + 0.03);}

        //TODO: Create controller for Raven
    }
 
}

//Configuration
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ NoR ]
};

const game = new Phaser.Game(config);

//defining variables for orb rotation
let angle1 = 0;
let distance1 = 130;

let angle2 = 0;
let distance2 = 40;
