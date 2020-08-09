var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html } from 'lit-element';
import './app-game';
let AppPlay = class AppPlay extends LitElement {
    render() {
        return html `<p>Hola mundo</p>
    <app-game @app-game-game-lost="${this._handleGameLost}" @app-game-game-won="${this._handleGameWon}"></app-game>`;
    }
    _handleGameLost() {
        alert('Juego terminado, no hubo ganadores');
    }
    _handleGameWon() {
        alert('Juego ganado');
    }
};
AppPlay = __decorate([
    customElement('app-play')
], AppPlay);
export { AppPlay };
//# sourceMappingURL=app-play.js.map