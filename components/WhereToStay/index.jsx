/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function WhereToStay({
  title,
  subtitle,
  directionText,
  accommodations,
}) {
  return (
    <section id="location" className="bg-secondary spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h1 className="display-4 text-white font-secondary">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-white opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          {accommodations.map((acc, i) => {
            return (
              <div className="col-md-4 mb-3 mb-md-0" key={i}>
                <Image
                  src={acc.picture}
                  alt="Image"
                  layout="responsive"
                  width={160}
                  height={90}
                  placeholder="blur"
                  blurDataURL={acc.picture}
                  className="rounded-1rem img-fluid"
                />
                <div className="badge-overlap">
                  <span className="badge rounded-1rem">{acc.type}</span>
                </div>
                <h5 className="mt-3 mb-3 text-white">{acc.place}</h5>
                <p className="text-white opacity-8">
                  {acc.address} <br />
                  {acc.address_2}
                </p>
                <a
                  href={acc.link}
                  target="_blank"
                  className="hover-arrow"
                  rel="noreferrer"
                >
                  {directionText} &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
