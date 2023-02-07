import Document, { Head, Html, Main, NextScript } from 'next/document';

import Favicon from '../components/Favicon';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Elsie+Swash+Caps&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:200,300,400,600,700&display=swap" />
                    <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
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