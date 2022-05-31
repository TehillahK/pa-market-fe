import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/farm-custom.css"
import { Provider } from "react-redux";
import store from "./redux/store";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
