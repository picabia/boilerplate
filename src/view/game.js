import { View, Wave } from '@picabia/picabia';

class GameView extends View {
  _constructor (game) {
    this._game = game;
    this._camera = this._vm.getViewport('camera');

    // this._vm.createView(BackgroundView, [], '2d', 'layer-1', 'camera');

    this._game.on('new-player', (player) => {

    });
  }

  render (delta, timestamp) {
    if (!this._wave) {
      this._wave = Wave.sine(timestamp, 0, Math.PI / 4, 5000);
    }

    const oscillatingNumber = this._wave(timestamp);
    this._camera.setRotation(oscillatingNumber);

    const renderer = this._renderer;

    renderer.moveTo(-500, 0);
    renderer.lineTo(500, 0);
    renderer.stroke();

    renderer.strokeRect(-50, -50, 100, 100);
    renderer.fillRect(-50, 50, 100, 100);
  }
}

export {
  GameView
};
