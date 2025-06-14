import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCryptojs from "vue-cryptojs";

/*FontAwesome Core*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

import { faCopy, faFile, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
/* @fontawesome Brands */
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faCopy, faFile, faCircleXmark, faGithub);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueCryptojs);

app.mount("#app");
