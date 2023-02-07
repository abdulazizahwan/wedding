import { useContext } from "react";
import Head from "next/head";

import Angpao from "../components/Angpao";
import Favicon from "../components/Favicon";
import { LangContext } from "../contexts/language";

export default function AngpaoPage() {
    const [state] = useContext(LangContext);
    const { locale } = state;

    return (
        <div className={"wrapper"}>
            <Head>
                <title>{locale.page.title}</title>
                <meta name="description" content={locale.page.description} />
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />                <Favicon/>
            </Head>

            <Angpao />
        </div>
    );
}
