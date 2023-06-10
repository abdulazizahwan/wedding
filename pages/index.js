import { useContext } from "react";
import Head from "next/head";

import BottomNavigation from "../components/BottomNavigation";
import Couple from "../components/Couple";
import Credit from "../components/Credit";
import Events from "../components/Events";
import Favicon from "../components/Favicon";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gift from "../components/Gift";
import Header from "../components/Header";
import LoveStory from "../components/LoveStory";
import Messages from "../components/Messages";
import Navigation from "../components/Navigation";
import Rsvp from "../components/RSVP";
import SaveTheDate from "../components/SaveTheDate";
import ScrollToTop from "../components/ScrollToTop";
import Teaser from "../components/Teaser";
import WhereToStay from "../components/WhereToStay";
import { LangContext } from "../contexts/language";
import sharedData from "../shared/data";

export default function Home() {
    const [state] = useContext(LangContext);
    const { locale } = state;

    return (
        <div className={"wrapper"}>
            <Head>
                <title>{locale.page.title}</title>
                <meta name="description" content={locale.page.description} />
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
                <Favicon />
            </Head>

            <Navigation
                navigationItems={locale.navigation.items}
                navigationLogoText={locale.navigation.logo_text}
            />

            <BottomNavigation
                navigationItems={locale.navigation_mobile.items}
            />

            <Header
                title={locale.header.title}
                subtitle={locale.header.subtitle}
                date={locale.header.date}
                background={sharedData.headerBackground}
                msgButtonText={locale.message.title}
                giftButtonText={locale.gift.giftText}
                rsvpButtonText={locale.rsvp.title}
                streamId={sharedData.liveStreamSource}
                addToCalendarName={locale.page.title}
                addToCalendarDescription={locale.header.title + " " + locale.header.subtitle + " " + locale.header.date}
                addToCalendarLabel={locale.header.addToCalendarLabel}
            />

            <SaveTheDate
                title={locale.save_the_date.title}
                subtitle={locale.save_the_date.subtitle}
                liveStreamText={locale.save_the_date.liveStreamText}
                body={locale.save_the_date.body}
                body_after={locale.save_the_date.body_after}
                countdownText={locale.save_the_date.countdown}
                dateCountdown={sharedData.dateCountdown}
                background={sharedData.dateMaskPicture}
                streamId={sharedData.liveStreamSource}
            />

            <Couple
                brideLabel={locale.couple.bride}
                groomLabel={locale.couple.groom}
            />

            <LoveStory
                title={locale.story.title}
                subtitle={locale.story.subtitle}
                topContentTitle={locale.story.top_title}
                topContent={locale.story.top_body}
                timeline={locale.story.timeline}
                bottomContentTitle={locale.story.bottom_title}
                bottomContent={locale.story.bottom_body}
            />

            <Events
                title={locale.events.title}
                akadData={locale.events.akad}
                teapaiData={locale.events.teapai}
                receptionData={locale.events.reception}
                background={sharedData.eventBackground}
                background2={sharedData.eventBackground2}
                giftButtonText={locale.gift.giftText}
            />

            <Gallery gallery={sharedData.gallery} />

            <Gift
                title={locale.gift.title}
                angpaoText={locale.gift.angpaoText}
                giftText={locale.gift.giftText}
                content={locale.gift.body}
            />

            <Messages
                title={locale.message.title}
                subtitle={locale.message.subtitle}
                formConfig={locale.message.form_config}
            />

            <Rsvp
                title={locale.rsvp.title}
                subtitle={locale.rsvp.subtitle}
                formConfig={locale.rsvp.form_config}
            />

            <WhereToStay
                title={locale.accommodation.title}
                subtitle={locale.accommodation.subtitle}
                directionText={locale.accommodation.get_direction_button}
                accommodations={locale.accommodation.items}
            />

            <Teaser
                title={locale.teaser.title}
                subtitle={locale.teaser.subtitle}
                videoId={sharedData.videoSource}
                background={sharedData.videoBackground}
            />

            <Footer
                title={locale.health_protocol.title}
                subtitle={locale.health_protocol.subtitle}
                healthProtocols={locale.health_protocol.items}
            />

            <Credit
                title={locale.credit.header}
                subtitle={locale.credit.title}
                dates={locale.credit.subtitle}
            />

            <ScrollToTop />

            <FloatingButton />
        </div>
    );
}
