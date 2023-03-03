/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Credit({ title, subtitle, dates }) {
  return (
    <section
      className="footer-copyright spacer-double-sm bg-white text-center mb-3"
      style={{ paddingBottom: 0 }}
    >
      <h6 className="mb-0 text-dark-gray">{title}</h6>
      <h1 className="mb-0 font-secondary" style={{ color: "#28375A" }}>
        {subtitle}
      </h1>
      <h6 className="mb-6 text-dark-gray">{dates}</h6>

      <h6 className="mb-0 text-dark-gray">
        Built using&nbsp;
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <img src="/img/nextjs-logo.png" alt="nextjs" height="24" />
        </a>
        &nbsp;technology
      </h6>

      <h6 className="mb-0 text-dark-gray">
        Deploy with&nbsp;
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          <img src="/img/vercel.png" alt="firebase" height="24" />
        </a>
        &nbsp;Powered by &nbsp;
        <a href="https://firebase.google.com" target="_blank" rel="noreferrer">
          <img src="/img/firebase.png" alt="github" height="24" />
        </a>
      </h6>

      <div
        className="mb-md-10"
        style={{
          maxWidth: "400px",
          width: "auto",
          margin: "0 auto",
          paddingTop: "40px",
        }}
      >
        <Image
          style={{ width: "100%" }}
          layout="responsive"
          width={924}
          height={198}
          loading="lazy"
          blurDataURL="/img/blue-flower-footer.webp"
          src="/img/blue-flower-footer.webp"
          alt=""
        />
      </div>
    </section>
  );
}
