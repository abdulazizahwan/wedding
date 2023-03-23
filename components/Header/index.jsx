/* eslint-disable @next/next/no-img-element */
import { AddToCalendarButton } from "add-to-calendar-button-react";
import Image from "next/image";

import { scrollToAnchor } from "../../utils/helpers";

import CurvedSeparator from "./curved-separator.svg";

export default function Header({
  title,
  subtitle,
  date,
  background,
  msgButtonText,
  giftButtonText,
  rsvpButtonText,
  isGuestPage,
  greetings,
  guestName,
  addToCalendarName,
  addToCalendarDescription,
  addToCalendarLabel,
}) {
  return (
    <section className="gradient-overlay gradient-overlay-dark">
      <Image
        className="bg-image"
        src={background}
        alt=""
        layout="fill"
        placeholder="blur"
        loading="eager"
        blurDataURL="data:image/webp;base64,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"
      />
      <div className="container">
        <div
          className="
            row
            min-vh-80
            align-items-center
            z-index-2
            position-relative
            text-center
          "
        >
          <div className="col-12">
            {isGuestPage && (
              <>
                <p className="font-weight-300 text-white lead mb-2">
                  {greetings} :
                </p>
                <h3 className="font-weight-500 text-white mb-5">{guestName}</h3>
              </>
            )}
            <p className="font-weight-300 text-white lead mb-5">{title}</p>
            <h1 className="display-2 font-weight-500 font-secondary text-white mb-4">
              {subtitle}
            </h1>
            <p className="font-weight-300 text-white lead mb-5">{date}</p>
          </div>
          <div className="col-12">
            <a
              href="#messages"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2 mt-3 mt-md-0 rounded-3rem"
            >
              {msgButtonText}
            </a>

            <a
              href="#send-gift"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2 mt-3 mt-md-0 rounded-3rem"
            >
              {giftButtonText}
            </a>
          </div>
          <div className="col-12">
            <a
              href="#rsvp"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2 mt-3 rounded-3rem"
            >
              {rsvpButtonText}
            </a>
          </div>
          <div
            className="mt-2 "
            style={{
              float: "none",
              margin: "0 auto",
            }}
          >
            <AddToCalendarButton
              name={addToCalendarName}
              options={[
                "Apple",
                "Google",
                "iCal",
                "Microsoft365",
                "MicrosoftTeams",
                "Outlook.com",
                "Yahoo",
              ]}
              label={addToCalendarLabel}
              location="336X+WQ2, Jl. Raya Pagiyanten Barat, Kedungsukun, Pagiyanten, Kec. Adiwerna, Kabupaten Tegal, Jawa Tengah 52194"
              startDate="2023-06-05"
              endDate="2023-06-05"
              startTime="10:00"
              endTime="14:00"
              description={addToCalendarDescription}
              timeZone="Asia/Jakarta"
              buttonStyle="round"
              styleLight="--btn-background: #fff; --btn-text: #E887AF; btn-border: transparent;"
              lightMode="bodyScheme"
              hideBranding={true}
              size="4|4|4"
              listStyle="modal"
              trigger="click"
            ></AddToCalendarButton>
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator width="100%" height="100%" />
      </div>
    </section>
  );
}
