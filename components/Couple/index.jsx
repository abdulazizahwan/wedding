/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import CurvedSeparator from "./curved-separator.svg";
import IllustrationLove from "./illustration-love.svg";

export default function Couple({ brideLabel, groomLabel }) {
  return (
    <section id="couple">
      <div className="container spacer-double-lg">
        <div className="row justify-content-center p-3">
          <div className="col-md-3 col-sm-12">
            <div
              style={{
                filter: "drop-shadow(0 4px 12px rgba(136, 136, 136, 0.3))",
              }}
            >
              <Image
                style={{
                  width: "100%",
                }}
                layout="responsive"
                width={40}
                height={60}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2Fdewi-d-shape.webp?alt=media&token=46ff1fd8-3123-4a9b-953b-384a693f2841"
                src="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2Fdewi-d-shape.webp?alt=media&token=46ff1fd8-3123-4a9b-953b-384a693f2841"
                alt="Image of {brideLabel}"
              />
            </div>
          </div>
          <div className="col"></div>
          <div className="col-md-8 col-sm-12 text-left mt-4">
            <h2 className="font-secondary" style={{ color: "#28375A" }}>
              Dewi Rizqi Nur Azizah, S.Pd.
            </h2>
            <p className="lead font-weight-300 text-dark-gray opacity-8">
              {brideLabel}
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse mt-6 p-3">
          <div className="col-md-3 col-sm-12">
            <div
              style={{
                filter: "drop-shadow(0 4px 12px rgba(136, 136, 136, 0.3))",
              }}
            >
              <Image
                style={{
                  width: "100%",
                }}
                layout="responsive"
                width={40}
                height={60}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2Faziz-a-shape.webp?alt=media&token=fd797a10-abb6-4acf-8473-d44a6aa3efa1"
                src="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2Faziz-a-shape.webp?alt=media&token=fd797a10-abb6-4acf-8473-d44a6aa3efa1"
                alt="Image of {brideLabel}"
              />
            </div>
          </div>
          <div className="col"></div>
          <div className="col-md-8 col-sm-12 text-right mt-4">
            <h2 className="font-secondary" style={{ color: "#28375A" }}>
              Abd Aziz, S.Pd.
            </h2>
            <p className="lead font-weight-300 text-dark-gray opacity-8">
              {groomLabel}
            </p>
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator
          className="bg-secondary-svg"
          width="100%"
          height="100%"
        />
      </div>
      <div className="svg-decoration-container">
        <div className="svg-decoration middle-left">
          <IllustrationLove width="100%" height="100%" />
        </div>
        <div className="svg-decoration bottom-right">
          <IllustrationLove />
        </div>
      </div>
    </section>
  );
}
