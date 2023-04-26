/* eslint-disable @next/next/no-img-element */

import MaskLoveSvg from "./mask-love";
import useCountdown from "./use-countdown";

export default function SaveTheDate({
  title,
  subtitle,
  liveStreamText,
  body,
  dateCountdown,
  background,
  countdownText,
  streamId,
}) {
  const countdownEl = useCountdown(dateCountdown, countdownText);

  return (
    <section id="live">
      <div className="container spacer-double-lg">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="pr-md-4">
              <h1
                className="font-secondary display-4"
                style={{ color: "#28375A" }}
              >
                {title}
              </h1>
              <p className="lead font-weight-300 text-dark-gray opacity-8">
                {subtitle}
              </p>
              <p className="lead">
                <a
                  href={`https://youtube.com/${streamId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {liveStreamText + " "}
                  <img
                    loading="lazy"
                    src="/img/icon_share.png"
                    alt="icon of share"
                    width={16}
                    height={16}
                    className="vertical-align-inherit"
                  />
                </a>
              </p>

              <p className="mb-4 pr-5">{body}</p>
              <div className="countdown row text-center">{countdownEl}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="svg-mask-container">
              <MaskLoveSvg background={background} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="curved-decoration">
        <CurvedSeparator
          className="bg-secondary-svg"
          width="100%"
          height="100%"
        />
      </div> */}
    </section>
  );
}
