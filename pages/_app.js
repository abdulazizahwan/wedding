import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

import { LangProvider } from "../contexts/language";

import "../styles/bootstrap.css";
import "../styles/globals.css";
import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
    const [hasMounted, setHasMounted] = useState(false);

    // Prevent the hydration warning
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return (
        <LangProvider>
            <Component {...pageProps} />
            <Toaster />
            <Analytics />
        </LangProvider>
    );
}

export default MyApp;
