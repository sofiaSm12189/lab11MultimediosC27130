class WarningBadge extends HTMLElement {
  static get observedAttributes() {
    return ["pulsing"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/warning-badge.css";

    this.shadowRoot.innerHTML = `
    <style>
        :host {
            width: 100%;
            display: block;
        }
    </style>

    <div class="warning" part="badge">
        <slot></slot>
    </div>
`;

    this.shadowRoot.appendChild(link);
  }

  attributeChangedCallback(name) {
    const badge = this.shadowRoot.querySelector(".warning");

    if (name === "pulsing") {
      if (this.hasAttribute("pulsing")) {
        badge.classList.add("pulse");
      } else {
        badge.classList.remove("pulse");
      }
    }
  }

  setMessage(message) {
    this.innerHTML = message;
    this.setAttribute("pulsing", "");
  }
}

customElements.define("warning-badge", WarningBadge);
