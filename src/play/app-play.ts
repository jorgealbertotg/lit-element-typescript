import { LitElement, customElement, html } from 'lit-element';
import './app-game';

@customElement('app-play')
export class AppPlay extends LitElement {

  render() {
    return html`<p>Hola mundo</p>
    <app-game @app-game-game-lost="${this._handleGameLost}" @app-game-game-won="${this._handleGameWon}"></app-game>`;
  }

  _handleGameLost() {
    alert('Juego terminado, no hubo ganadores');
  }

  _handleGameWon() {
    alert('Juego ganado');
  }
}