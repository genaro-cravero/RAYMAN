var creditosimg;
class Scene5 extends Phaser.Scene{
    constructor(){
        super('creditos');
    }
create(){

creditosimg = this.add.image(24,0, 'creditos').setOrigin(0,0);
creditosimg.setInteractive();
creditosimg.setInteractive().on('pointerdown', () => {this.scene.start('inicio')});


}



}