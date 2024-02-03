import { LitElement, html, css } from 'lit';

export class PageOne extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('page-one', PageOne);
