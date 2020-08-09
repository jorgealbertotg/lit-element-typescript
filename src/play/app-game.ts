import { LitElement, customElement, html, property, css } from 'lit-element';

@customElement('app-game')
export class AppGame extends LitElement {
  @property({ type: Array })
  panels = [...new Array(9)].fill('');

  @property({ type: Array })
  route = [0, 1, 2];

  @property({ type: String })
  title = 'JUEGO';

  @property({ type: String })
  mark = 'O';

  @property({ type: Boolean })
  finished = false;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host>div {
      }

      :host>div>div {
        background-color: blue;
        width: 500px;
        height: 500px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        grid-template-rows: repeat(3, minmax(100px,1fr));
      }

      div>div>div {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      div>p {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .winner {
        background-color: gold;
      }
    `;
  }

  render() {
    return html`
      <div>
        ${this.title}
        <div>
          ${
            this.panels.map((panel, index) => {
              return html`<div><p @click="${this._handleClick}" id="${index}" class="${this.route.includes(index) ? 'winner' : ''}">${ panel }</p></div>`})
          }
        </div>
      </div>
    `;
  }

  _handleClick(e: MouseEvent) {
    const panel: HTMLParagraphElement = e.target as HTMLParagraphElement;
    const panelId = Number.parseInt(panel.id);
    if (!this.panels[panelId] && !this.finished) {
      this.panels[panelId] = this._getMark();
      this._checkForGameOver();
      this.requestUpdate();
    }
  }

  _checkForGameOver() {
    const r = this._getGameResult(this.panels);
    console.log('resultado',r);
    if (!this.panels.includes('') && !this.finished) {
      this.finished = true;
      if (r) {
        this._fireEvent('game-won', {});
      } else {
        this._fireEvent('game-lost', {});
      }
    } else {
      if (r) {
        this._fireEvent('game-won', {});
        this.finished = true;
      }
    }
  }

  _fireEvent(name: string, detail: any) {
    this.dispatchEvent(new CustomEvent(`app-game-${name}`, {
      bubbles: true,
      composed: true,
      detail: detail
    }));
  }

  _getMark() {
    this.mark = this.mark === 'X' ? 'O' : 'X';
    return this.mark;
  }

  _setWinnerRoute(route: Array<any>) {
    console.log('winner', route);
    this.route = route;
  }

  _getGameResult(game: Array<number>) {
    if (game[0] && (game[0] === game[1]) && (game[1] === game[2])) {
      this._setWinnerRoute([0, 1, 2]);
    }
    else if (game[3] && (game[3] === game[4]) && (game[4] === game[5])) {
      this._setWinnerRoute([3, 4, 5]);
    }
    else if (game[6] && (game[6] === game[7]) && (game[7] === game[8])) {
      this._setWinnerRoute([6, 7, 8]);
    }
    else if (game[0] && (game[0] === game[3]) && (game[3] === game[6])) {
      this._setWinnerRoute([0, 3, 6]);
    }
    else if (game[1] && (game[1] === game[4]) && (game[4] === game[7])) {
      this._setWinnerRoute([1, 4, 7]);
    }
    else if (game[2] && (game[2] === game[5]) && (game[5] === game[8])) {
      this._setWinnerRoute([2, 5, 8]);
    }
    else if (game[0] && (game[0] === game[4]) && (game[4] === game[8])) {
      this._setWinnerRoute([0, 4, 8]);
    }
    else if (game[2] && (game[2] === game[4]) && (game[4] === game[6])) {
      this._setWinnerRoute([2, 4, 6]);
    }
    else {
      this._setWinnerRoute([]);
      return false;
    }
    return true;
  }

}