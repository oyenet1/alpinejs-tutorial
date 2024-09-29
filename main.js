import "./style.css";
import { setupCounter } from "./counter.js";

import LoveCounter from "./components/love-counter.js";

Alpine.data("loveCounter", LoveCounter);
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// document.querySelector("#app").innerHTML = "I 💚 Alpine JS!";

setupCounter(document.querySelector("#counter"));
