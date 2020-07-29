class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      
      this.load.image('logo', 'assets/logo.png');
      this.load.image('sky', 'assets/sky.png');
      this.load.image('ground', 'assets/platform.png');
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 39, frameHeight:68 });
      this.load.audio('jump', 'SFX/Jump.wav');
      this.load.audio('music', 'SFX/music.wav');
      this.load.audio('musicmenu', 'SFX/MenuPrincipal.wav');
      this.load.audio('character','SFX/character.wav');
      this.load.audio('gameover', 'SFX/GameOver.wav');
      this.load.audio('scorewin', 'SFX/ScoreWin.wav');
      this.load.audio('scoreloose', 'SFX/ScoreGameOver.wav');
      this.load.audio('music2', 'SFX/music2.wav');
      this.load.audio('music3', 'SFX/music3.wav');
      this.load.audio('aplastar', 'SFX/aplastar.wav');
      this.load.image('basura', 'assets/basura.png');
      this.load.image('salto', 'assets/salto.png');
      this.load.image('alcohol', 'assets/alcohol.png');
      this.load.image('infovirus', 'assets/info.png');
      this.load.image('madera', 'assets/madera.png');
      this.load.image('escuela', 'assets/escuela.png');
      this.load.image('creditos', 'assets/creditos.png');
      this.load.image('frase', 'assets/frase.png');
      this.load.spritesheet('nena', 'assets/nenarun.png',{frameWidth: 50, frameHeight: 68});
      this.load.image('saltonena', 'assets/saltonena.png');
      this.load.image('sol', 'assets/sol.png');
      this.load.image('nube', 'assets/nube.png');
      this.load.bitmapFont('pixel', 'assets/pixelfont.png', 'assets/pixelfont.fnt');
      this.load.image('pausafondo', 'assets/pausa.png');
      this.load.image('pausamadera', 'assets/madera2.png');
      this.load.image('sky2', 'assets/escenarioescuela.png');
      this.load.image('ground2', 'assets/pisoescuela.png');
      this.load.image('mochila', 'assets/mochila.png');
      this.load.image('mochila2', 'assets/mochila2.png');
      this.load.image('ventana', 'assets/ventana.png');
      this.load.image('ventana2', 'assets/ventana2.png');
      this.load.image('puerta', 'assets/puertaescuela.png');
      this.load.image('instrucciones1', 'assets/instrucciones1.png');
      this.load.image('instrucciones2', 'assets/instrucciones2.png');
      this.load.image('instrucciones3', 'assets/instrucciones3.png');
      this.load.image('cartel1,4' , 'assets/cartel1,4.png');
      this.load.image('cartel1,1' , 'assets/cartel1,1.png');
      this.load.image('cartel800' , 'assets/cartel800.png');
      this.load.image('cartel500' , 'assets/cartel500.png');
      this.load.image('cartel200' , 'assets/cartel200.png');
      this.load.spritesheet('v1', 'assets/virus1.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v2', 'assets/virus2.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v3', 'assets/virus3.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v4', 'assets/virus4.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v5', 'assets/virus5.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v6', 'assets/virus6.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('humovirus', 'assets/humovirus.png',{frameWidth:197 ,frameHeight:145});
      this.load.image('fondo3', 'assets/fondo3.png');
      this.load.image('cielo3', 'assets/cielo3.png');
      this.load.image('paralax3', 'assets/paralax3.png');
      this.load.image('hospital', 'assets/hospital.png');
      this.load.spritesheet('jeringa', 'assets/jeringa.png',{frameWidth:108 ,frameHeight:406});
      this.load.spritesheet('agua', 'assets/agua.png',{frameWidth:1800, frameHeight:1800});
      this.load.spritesheet('vx', 'assets/vxplode.png',{frameWidth:84, frameHeight: 93,});
      this.load.spritesheet('final', 'assets/final.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final2', 'assets/final2.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln', 'assets/finalnena.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln2', 'assets/finalnena2.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('luz', 'assets/luz.png',{frameHeight:64, frameWidth:64});

    };

    create() {

      ////musica principal
     
      this.musicbackground=this.sound.add('musicmenu');
      this.musicbackground.loop = true;
      this.musicbackground.play();

      ////animaciones
      this.anims.create({
        key: 'rightn',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate:5,
        repeat: -1
      });
      this.anims.create({
        key:'playerjumpn',
        frames: [ { key: 'salto', frame: 0 } ],
        frameRate:1,
        
      });

      this.anims.create({
        key:'mochila2',
        frames: [ { key: 'mochila2', frame: 0 } ],
        frameRate:1,

      });

      this.anims.create({
        key:'ventana2',
        frames: [ { key: 'ventana2', frame: 0 } ],
        frameRate:1,
        
      });

      this.anims.create({
        key:'saltonena',
        frames: [ { key: 'saltonena', frame: 0 } ],
        frameRate:1,
        
      });
      this.anims.create({
        key: 'selecnene',
        frames: [ { key: 'dude', frame: 1 } ],
        frameRate:1,
      });
      this.anims.create({
        key: 'rightf',
        frames: this.anims.generateFrameNumbers('nena', { start: 0, end: 3 }),
        frameRate:5,
        repeat: -1
      });
      this.anims.create({
        key: 'selecnena',
        frames: [ { key: 'nena', frame: 1 } ],
        frameRate:1,
      });
      this.anims.create({
        key: 'v1',
        frames: this.anims.generateFrameNumbers('v1', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'v2',
        frames: this.anims.generateFrameNumbers('v2', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'v3',
        frames: this.anims.generateFrameNumbers('v3', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'v4',
        frames: this.anims.generateFrameNumbers('v4', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'v5',
        frames: this.anims.generateFrameNumbers('v5', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'v6',
        frames: this.anims.generateFrameNumbers('v6', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
      });
      this.anims.create({
        key: 'humovirus',
        frames: this.anims.generateFrameNumbers('humovirus', { start: 0, end:4 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: 'jeringa',
        frames: this.anims.generateFrameNumbers('jeringa', { start: 0, end:4 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: 'agua',
        frames: this.anims.generateFrameNumbers('agua',{start: 0, end: 5}),
        frameRate: 15,
        repeat: -1,
      });
      this.anims.create({
        key: 'vx',
        frames: this.anims.generateFrameNumbers('vx',{start: 0, end: 6}),
        frameRate: 17,
      });
      this.anims.create({
        key: 'final',
        frames: this.anims.generateFrameNumbers('final',{start: 0, end: 28}),
        frameRate: 10,
      });
      this.anims.create({
        key: 'final2',
        frames: this.anims.generateFrameNumbers('final2',{start: 0, end: 28}),
        frameRate: 10,
      });
      this.anims.create({
        key: 'finaln',
        frames: this.anims.generateFrameNumbers('finaln',{start: 0, end: 28}),
        frameRate: 10,
      });
      this.anims.create({
        key: 'finaln2',
        frames: this.anims.generateFrameNumbers('finaln2',{start: 0, end: 28}),
        frameRate: 10,
      });
      this.anims.create({
        key: 'luz',
        frames: this.anims.generateFrameNumbers('luz',{start: 0, end: 16}),
        frameRate: 8,
      });
      



      this.add.image(400, 568, 'ground').setScale(1000).setTint(0x001a19);

      ////COMENZAR, CONOCER MÁS y CRÉDITOS 

      var logo = this.add.image(480, 250, 'logo').setScale(0.25)
      timeText = this.add.bitmapText(420,600,'pixel', 'Comenzar', 32);
      scoreText = this.add.bitmapText(270, 680,'pixel', 'Conoce mas sobre el virus', 32).setTint(0x3fad3b);
      this.add.bitmapText(455, 655, 'pixel', ".",32).setTint(0x3fad3b);
      creditosText = this.add.bitmapText(430, 760,'pixel', 'Creditos', 32).setTint(0xecd313);
      this.add.bitmapText(485, 735, 'pixel', ".",32).setTint(0xecd313);
      
      //// Interacciones con escenas
      timeText.setInteractive();
      timeText.on('pointerdown', () => { this.scene.start('seleccion');  this.musicbackground.stop();} );

      scoreText.setInteractive();
      scoreText.on('pointerdown', () => {this.scene.start('info');  this.musicbackground.stop();});

      creditosText.setInteractive();
      creditosText.on('pointerdown', () => {this.scene.start('creditos'); this.musicbackground.stop();})
    }
}
