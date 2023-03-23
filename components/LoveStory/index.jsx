import Image from "next/image";

import CurvedSeparator from "./curved-separator.svg";
import IconLove from "./icon-love.svg";
import Illustration2Love from "./illustration-2-love.svg";
import IllustrationLove from "./illustration-love.svg";

const htmlDecode = (content) => {
  if (process.browser) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
};

export default function Dates({
  title,
  subtitle,
  topContentTitle,
  topContent,
  timeline,
  bottomContentTitle,
  bottomContent,
}) {
  return (
    <section id="story" className="bg-secondary spacer-one-top-lg o-hidden">
      <div className="container spacer-one-bottom-lg">
        <div className="row align-items-center justify-content-center text-center mb-4">
          <div className="col-lg-3 col-md-4 col-sm-auto px-sm-6">
            <Image
              alt="Image of Groom and Bride"
              className="rounded-circle img-fluid"
              src="/img/bride-and-groom.webp"
              width={40}
              height={40}
              layout="responsive"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="text-center mb-5 pb-5">
              <h1 className="display-4 mb-0 text-white font-secondary">
                {title}
              </h1>
            </div>
            <div className="text-center mb-5">
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="mb-3 pb-3">
              <h5
                className="mb-0 text-white opacity-8"
                dangerouslySetInnerHTML={{ __html: topContentTitle }}
              ></h5>
              <span
                className="small text-dark-gray opacity-8"
                dangerouslySetInnerHTML={{ __html: topContent }}
              ></span>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 px-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <ol className="story mb-0">
              {timeline.map(([title, subtitle, content], i) => {
                return (
                  <li key={i}>
                    <div className="story-icon bg-icon-primary">
                      <IconLove className="icon-svg" />
                    </div>
                    <div>
                      <h5 className="mb-0 text-white">{title}</h5>
                      <span className="small text-primary">{subtitle}</span>
                      <p
                        className="text-white opacity-8 pt-2"
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 mt-3 pt-3 px-4"></div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="">
              <h5
                className="mb-0 text-white"
                dangerouslySetInnerHTML={{ __html: bottomContentTitle }}
              ></h5>
              <span
                className="text-white opacity-8"
                dangerouslySetInnerHTML={{ __html: bottomContent }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator className="bg-white-svg" width="100%" height="100%" />
      </div>

      <div className="svg-decoration-container">
        <div className="svg-decoration middle-left">
          <IllustrationLove width="100%" height="100%" />
        </div>
        <div className="svg-decoration bottom-right">
          <Illustration2Love />
        </div>
      </div>
    </section>
  );
}
