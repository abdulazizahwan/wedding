/* eslint-disable @next/next/no-img-element */
import { AddToCalendarButton } from "add-to-calendar-button-react";

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
      <img className="bg-image" src={background} alt="" />
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
              location="https://goo.gl/maps/AjmFUnYG8HUFzmks6"
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
