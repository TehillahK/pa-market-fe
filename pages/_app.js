import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/farm-custom.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Provider} from "react-redux";
import store from "../redux/store";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import React from 'react';
import {UserProvider} from '@auth0/nextjs-auth0';
import {SSRProvider} from "react-bootstrap";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from "redux-persist"
config.autoAddCss = false

function MyApp({Component, pageProps}) {
    const persist = persistStore(store);

    return (
        <SSRProvider>
            <UserProvider>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persist}>
                    <Head>
                        {/* This ways to add css on global website use css @import property and you also paste Link tag also */}
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap"
                            rel="stylesheet"/>
                        <link rel="stylesheet" type="text/css" charSet="UTF-8"
                              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                        <link rel="stylesheet" type="text/css"
                              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    </Head>
                    <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </UserProvider>
        </SSRProvider>
    );
}

export default MyApp;
