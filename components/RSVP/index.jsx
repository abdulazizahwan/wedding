import RsvpForm from "./rsvp-form";

export default function Rsvp({ title, subtitle, formConfig }) {
  return (
    <section id="rsvp" className="bg-secondary spacer-one-top-lg o-hidden">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h1 className="display-4 font-secondary text-white">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-white opacity-8">
                {subtitle}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <RsvpForm config={formConfig} />
          </div>
        </div>
      </div>
    </section>
  );
}
