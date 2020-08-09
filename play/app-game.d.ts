import { LitElement } from 'lit-element';
export declare class AppGame extends LitElement {
    panels: any[];
    route: number[];
    title: string;
    mark: string;
    finished: boolean;
    constructor();
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
    _handleClick(e: MouseEvent): void;
    _checkForGameOver(): void;
    _fireEvent(name: string, detail: any): void;
    _getMark(): string;
    _setWinnerRoute(route: Array<any>): void;
    _getGameResult(game: Array<number>): boolean;
}
//# sourceMappingURL=app-game.d.ts.map