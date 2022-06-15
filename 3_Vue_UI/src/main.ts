import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import "./index.css";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");

// app.mount("#app");

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(createPinia())
  .mount("#app");
/* add icons to the library */
library.add(faUserSecret, faPhone);
