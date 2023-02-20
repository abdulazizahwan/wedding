import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Favicon from "../components/Favicon";
import { LangContext } from "../contexts/language";

export default function GiftPage() {
    const router = useRouter();
    let ref = null;

    const [state] = useContext(LangContext);
    const [isLoading, updateLoading] = useState(true);
    const [isReady, setIsready] = useState(router.isReady);
    const [hasMounted, setHasMounted] = useState(false);

    const { locale } = state;

    useEffect(() => {
        setIsready(router.isReady);
    }, [router]);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    if (isReady) {
        ref = router.query.ref;
    }

    return (
        <div className={"wrapper"}>
            <Head>
                <title>{locale.page.title}</title>
                <meta name="description" content={locale.page.description} />
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
                <Favicon />
            </Head>

            <div>
                <div className="text-center mt-5 mb-5">
                    <Link
                        href={{ pathname: router.query.ref === ref ? ref : "/" }}
                        scroll={false}
                    >
                        <a className="btn btn-secondary btn-wide-md btn-md cursor-pointer rounded-3rem">
                            Kembali ke e-invitation
                        </a>
                    </Link>
                </div>

                <div>
                    {isLoading ? <div className="loader" /> : null}
                    <iframe
                        src="https://www.wishsite.net/embed/c8c27wvm"
                        width="100%"
                        height="auto"
                        style={{
                            height: "calc(100vh - 150px)",
                        }}
                        onLoad={() => updateLoading(!isLoading)}
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
