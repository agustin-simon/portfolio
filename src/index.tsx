import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

root.render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <App />
    </Router>
  </I18nextProvider>
);
