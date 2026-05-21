class UserDashboard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/user-dashboard.css";

    this.shadowRoot.innerHTML = `
            <div class="dashboard" part="container">
                <slot></slot>
            </div>
        `;

    this.shadowRoot.appendChild(link);
  }

  connectedCallback() {
    this.addEventListener("saludar", (event) => {
      const warning = this.querySelector("warning-badge");

      warning.setMessage(`${event.detail.mensaje} `);
    });
  }
}

customElements.define("user-dashboard", UserDashboard);
