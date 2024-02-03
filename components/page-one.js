import { LitElement, html, css } from "lit";

export class PageOne extends LitElement {
  static properties = {
    mensaje: { type: String },
  };

  constructor() {
    super();
    this.mensaje = "¡Hola, Lit!";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "mensaje" && oldValue !== newValue) {
      console.log('La propiedad "mensaje" ha cambiado a:', this.mensaje);
    }
  }

  // method reserved from Lit, like useEffect just once at the start
  firstUpdated() {
    if (this.mensaje == "¡Hola, Lit!") {
      alert("El componente se ha actualizado from firstUpdate.");
    } 
  }

  // method reserved from Lit, like useEffect, render at the start and for every change
  updated() {
    if (this.mensaje == "¡Hola, from Lit!") {
      alert("El componente se ha actualizado from Update.");
    } 

    // Realizar acciones cada vez que el componente se actualiza
  }

  cambiarMensaje() {
    this.mensaje = "¡Hola, from Lit!";
  }

  render() {
    return html`
      <p>${this.mensaje}</p>
      <button @click=${this.cambiarMensaje}>Cambiar Mensaje</button>
    `;
  }
}

customElements.define("page-one", PageOne);
