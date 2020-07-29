class Scene6 extends Phaser.Scene{
    constructor(){
        super('seleccion');
    }

create(){
this.add.image(400, 568, 'ground').setScale(1000).setTint(0x001a19);
this.selecsound = this.sound.add('character');
selecnene = this.add.sprite(250, 500,'dude').setScale(10);
selecnene.anims.play('selecnene', true);
selecnene.setInteractive();
selecnene.on('pointerdown', () => {seleccion = 'nene',this.selecsound.play(); this.scene.start('juego');} );

selecnena = this.add.sprite(730,500, 'nena').setScale(10);
selecnena.anims.play('selecnena', true);
selecnena.setInteractive();
selecnena.on('pointerdown', () => {seleccion = 'nena', this.selecsound.play(); this.scene.start('juego');} );



}




}