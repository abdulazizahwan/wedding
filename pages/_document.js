import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import Favicon from '../components/Favicon';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="id">
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Elsie+Swash+Caps&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:200,300,400,600,700&display=swap" />
                    <Script strategy="afterInteractive" defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" />
                    <Favicon />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument