class WeatherTime extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/weather-time.css";

    this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./css/weather-time.css">

<div class="weather" part="weather-box">

    <h2>${this.getAttribute("city")}</h2>

    <div class="temp">
        ${this.getAttribute("temperature")}
    </div>

    <div class="state">
        ${this.getAttribute("weather")}
    </div>

    <div class="extra-weather">
        <p>Humedad: 72%</p>
        <p>Viento: 12 km/h</p>
    </div>

</div>
`;

    this.shadowRoot.appendChild(link);
  }
}

customElements.define("weather-time", WeatherTime);
