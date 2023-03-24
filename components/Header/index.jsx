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
        blurDataURL="data:image/webp;base64,UklGRswGAABXRUJQVlA4WAoAAAAgAAAA0QIA0QEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3gQAAFBhAJ0BKtIC0gE+0WiqUygloyKgCEkAGglpbuFksDM/3usdNdvz6i/yCHy/9gC0zfINdHsWdOnTo6fjXthZqaiysDYoItZMmTHplcCJHxJFxS3E2QX2q1Wq1afsWhPgDzKMKy5VvZsByZhfq69Y1syPcPRYQReUE7CT7BCGKhd60FHQki65FCcCjwXV27J8j9oXuaudvm9kPqLfHShtUblDfr69UUIrY4U9Sl6ueAIF+E4itsKUpyMjEEOjSgz+8rOQJxPJtWn7Fss9t82vMoIEnIY8CHIfVb+auxDaLmzJPlmbM8IFHI8ZgR7SM/ueGEgTi8Jit17pIM5VJ7XljkOy9i+d4y+WnpF7CMyO3jkQJlde6MvaonxTz4fAy0jdzJnS56dDj6AyoTyKDxD8iQithn4xTQWcDLJj1IpXSQF4e7TJ8eXZfZtde6Hl9tza2OpI9i7uRQnAtY1jjIZuxbnl2XukhKbNFhTtWxWN8g10bRshf1b4hN9FORe0Urr3SSNSHcZRjxAgQIGIYWgfyYqchPBnT28Fde6SF9tlmiOHDhw4cUdZvnV7Yu412gvif22mF/nG1sLv5h3ZUxDssXBIpXBcP7ZQVCjIvbwV17oy9uuMosmTJkyZTZ+6GQQkTErQpyKE4F8FdZ8g10exZ06dOnTvKeXrjiYXt4K690ho+dOnTp06dOnTp1JsPy9b/ljAWOi5XSQzfINdHsWdOnTqWAWiRci+rMvn6h7m8tzfINdHsWdOnTuZEhhqFq02Aqv1EIECBAgQIECBAgRI2n1Dhw5QSZQKfX8g10exZ06dOnTp06rUvC5h3rcQb0vN8g10exZ06dOnTqTWD6q6GrUQxshUusmTJkyZMmTJktQkmYScbkEG5oaUdplZQ4cOHDhw4cOW969zRoHmP+s0rgrIBWUOHDhw4cOHDLPE3HBdtljwz8SuvLdOnTp06dOnTgTp+xfPGlkzoxhdDXHWTJkyZMmTJkzSqGVo9m8DOWGVfqIYEkexZ06dOnTp089XIIQ4cOd1gA3ExZOb5Bro9izp0cAA/vfe73D2qj5vmXbYYqMaENYmlt9uIx4rt92+USLPUl1kXSeUoU08cUrOivuWpc8bR6ksyFJN2j3U2S5j4AazLo1LpuQkO7GtWI3gj3TxMKat/7GS0MEui7OXRJm5PG+EuX058xgkYnWjTQG7ohQZAzr00rCdWAQcR3qDNywg1d1ttGVDRyJXYLPWA3ExnkdRzc7WqHsoah7+PdVrFZpA2TGFzvZPLkGaNT3hY+1KlC0BnNssHnNC4jCWNkHsiwNvg+JeEbULJj31ElqejSLbROJe+pQzWZWff1bJTGgypcWrONjYaFbDcw2mMai2KxUKTDsJzk9dOeGwLkR/lEqviQB3unB/TZBNmRhVyEUVCBn9eTUgLBqu5y4tDKuc+LTI1/WHW8UcNbXSuJ45UPQ9u9o1hYLGlxjhGO1nDhQDZocUDAou/555/hwPLyDGBfopyR/D5U5qldWgjiHgYEo0DYVBUJuC9DDggPochYOis6GCABaEZO7gDYgNCjJdkQAAgJXYdTFlAFRwOTs7eRiX8BAFElGKM75/K7ZABFGCR6UwdSs5wCt4c27LnFbR3gLyXMrQXOXmAO/eLTrAAA6cyWcqxEFEMAAAAAA="
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
