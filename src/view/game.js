import { View, Wave } from '@picabia/picabia';

import { BgView } from './bg';

class GameView extends View {
  _constructor (game) {
    this._game = game;
    this._camera = this._vm.getViewport('camera');

    this._createChild(BgView, [], '2d', 'camera', 'layer-1');

    this._game.on('new-player', (player) => {

    });
  }

  _preRender (delta, timestamp) {
    if (!this._wave) {
      this._wave = Wave.sine(timestamp, 0, Math.PI / 4, 5000);
    }

    const oscillatingNumber = this._wave(timestamp);
    this._camera.setRotation(oscillatingNumber);
    this._camera.setZoom(1 - Math.abs(oscillatingNumber / 2));
  }
}

export {
  GameView
};
