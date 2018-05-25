import { View, Wave } from '@picabia/picabia';

import { BgView } from './bg';

class GameView extends View {
  constructor (v, target, game) {
    super(v, target);
    this._game = game;

    this._viewport = this._v.get('viewport:camera');

    this._createChild(BgView, { layer: 'bg' });

    this._game.on('new-player', (player) => {

    });
  }

  _preUpdate () {
    if (!this._wave) {
      this._wave = Wave.sine(this._time.t, 0, Math.PI / 4, 5000);
    }

    const oscillatingNumber = this._wave(this._time);
    this._viewport.setRotation(oscillatingNumber);
    this._viewport.setZoom(1 - Math.abs(oscillatingNumber / 2));
  }
}

export {
  GameView
};
