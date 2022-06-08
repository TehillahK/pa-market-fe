import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/farm-custom.css"
import { Provider } from "react-redux";
import store from "../redux/store";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Head>
            {/* This ways to add css on global website use css @import property and you also paste Link tag also */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap"
                        rel="stylesheet"/>
        </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
