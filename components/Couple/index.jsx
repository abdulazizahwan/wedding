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
                width={247}
                height={312}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2FHitam-Dewi-D-Shape.webp?alt=media&token=64c67c9a-53cc-4b11-ad1e-34d3755069ed"
                src="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2FHitam-Dewi-D-Shape.webp?alt=media&token=64c67c9a-53cc-4b11-ad1e-34d3755069ed"
                alt="Image of Bride"
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
                width={247}
                height={312}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2FHitam-Aziz-A-Shape.webp?alt=media&token=5b73916f-3312-4c45-9472-9c09c3113cef"
                src="https://firebasestorage.googleapis.com/v0/b/next-wedding-app.appspot.com/o/static%2FHitam-Aziz-A-Shape.webp?alt=media&token=5b73916f-3312-4c45-9472-9c09c3113cef"
                alt="Image of Groom"
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
