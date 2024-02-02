import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .titlePage {
        color: blue;
      }
      .paragraph {
        color: red;
      }
    `,
  ];

  constructor() {
    super();
    
    window.addEventListener("load", () => {
      alert("¡Hola!");
    });
  }

  render() {
    return html`
      <h2 class="titlePage">My Counter:</h2>
      <p class="paragraph">Paragraph</p>
    `;
  }
}

customElements.define('eit-counter', EitCounter);

