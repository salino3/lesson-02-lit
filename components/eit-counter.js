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
        color: orange;
        font-size: 20px;
        font-weight: 600;
      }
      .boxInput {
        padding: 12px 0px;
      }
      .boxInput input {
        width: 40px;

      }
      .btnPlus1 {
        cursor: pointer;
      }
    `,
  ];

  // static get properties() {
  //   return {
  //     prop1: {type: String}
  //   };
  // }

  static properties = {
    counter: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.counter = 10;
  }

  render() {
    return html`
      <slot></slot>
      <p class="paragraph">${this.counter}</p>
      <div class="boxInput">
        <input id="quantity" type="number" value="1" />
      </div>
      <button @click=${this.decrement} class="btnPlus1">- 1</button>
      <button @click=${this.increment} class="btnPlus1">+ 1</button>
    `;
  }

  get quantity() {
    return parseInt(this.shadowRoot.getElementById("quantity").value);
  }

  increment() {
    this.counter += this.quantity;
  }
  decrement() {
    this.counter -= this.quantity;
  }
}

customElements.define('eit-counter', EitCounter);

