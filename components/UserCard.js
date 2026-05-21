class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/user-card.css";

    this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./css/user-card.css">

<div class="card" part="card">

    <div class="avatar" part="avatar">
        ${this.getAttribute("avatar")}
    </div>

    <h3 part="name">
        ${this.getAttribute("name")}
    </h3>

    <p class="role" part="role">
        ${this.getAttribute("role")}
    </p>

    <div class="extra-info">
        <p>Estado: Activo</p>
        <p>Departamento: Académico</p>
    </div>

    <button id="saludar" part="button">
        Saludar
    </button>

</div>
`;

    this.shadowRoot.appendChild(link);
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#saludar").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("saludar", {
          bubbles: true,
          composed: true,
          detail: {
            mensaje: `⚠️Sesión por expirar`,
          },
        }),
      );
    });
  }
}

customElements.define("user-card", UserCard);
