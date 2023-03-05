/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ImageUpload from "./image-upload";

export default function Transfer({
  title = "Pindai QR atau Salin Nomor Rekening",
  subtitle,
}) {
  const router = useRouter();
  let ref = null;

  const [isReady, setIsReady] = useState(router.isReady);
  const [hasMounted, setHasMounted] = useState(false);

  // Set router.isReady when the page has mounted
  useEffect(() => {
    setIsReady(router.isReady);
  }, [router]);

  // Blocking hydration warning
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (isReady) {
    ref = router.query.ref;
  }

  const showToastMessage = () => {
    toast.success("Berhasil Menyalin", { position: "top-center" });
  };

  return (
    <section id="location" className="spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h1 className="display-4">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center mb-lg-4">
          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">ShopeePay</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">085******335</h4>
              <Image
                alt="ShopeePay"
                className="rounded img-fluid"
                src="/angpao/angpao_shopeepay.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_shopeepay.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-shopee">
                  E-WALLET: SHOPEEPAY
                </span>
              </div>

              <CopyToClipboard text="085741838335">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Nomor
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">GoPay</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">085******335</h4>
              <Image
                alt="GoPay"
                className="rounded img-fluid"
                src="/angpao/angpao_gopay.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_gopay.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-gopay">
                  E-Wallet: GoPay
                </span>
              </div>

              <CopyToClipboard text="085741838335">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Nomor
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">OVO</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">085******335</h4>
              <Image
                alt="OVO"
                className="rounded img-fluid"
                src="/angpao/angpao_ovo.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_ovo.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-ovo">
                  E-Wallet: OVO
                </span>
              </div>

              <CopyToClipboard text="085741838335">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Nomor
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">BNI</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">123***0572</h4>
              <Image
                alt="BNI"
                className="rounded img-fluid"
                src="/angpao/angpao_bni.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_bni.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-bni">BANK: BNI</span>
              </div>
              <CopyToClipboard text="1232220572">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Rekening
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className="row text-center mb-lg-4">
          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">BRI</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">127****9501</h4>
              <Image
                alt="BRI"
                className="rounded img-fluid"
                src="/angpao/angpao_bri.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_bri.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-bri">BANK: BRI</span>
              </div>

              <CopyToClipboard text="127001009019501">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Rekening
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">Blu BCA</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">0026***7917</h4>
              <Image
                alt="Blu BCA"
                className="rounded img-fluid"
                src="/angpao/angpao_blu.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_blu.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-blu">
                  BANK: Blu BCA
                </span>
              </div>

              <CopyToClipboard text="002607467917">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Rekening
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">JAGO</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">1035***5538</h4>
              <Image
                alt="JAGO"
                className="rounded img-fluid"
                src="/angpao/angpao_jago.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_jago.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-jago">
                  BANK: JAGO
                </span>
              </div>

              <CopyToClipboard text="103524805538">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Rekening
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">Jenius</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">902*****866</h4>
              <Image
                alt="Jenius"
                className="rounded img-fluid"
                src="/angpao/angpao_jenius.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_jenius.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-jenius">
                  BANK: Jenius
                </span>
              </div>
              <CopyToClipboard text="90220062866">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Rekening
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className="row text-center mb-lg-4">
          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">LinkAja</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">085******335</h4>
              <Image
                alt="LinkAja"
                className="rounded img-fluid"
                src="/angpao/angpao_linkaja.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_linkaja.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-linkaja">
                  E-WALLET: LINKAJA
                </span>
              </div>
              <CopyToClipboard text="085741838335">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Nomor
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">PayPal</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">PayPal.Me</h4>
              <Image
                alt="PayPal"
                className="rounded img-fluid"
                src="/angpao/angpao_paypal.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_paypal.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-paypal">PAYPAL</span>
              </div>

              <CopyToClipboard text="https://paypal.me/abdulazizahwan">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Link
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">Saweria</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">Saweria.co</h4>
              <Image
                alt="GoPay"
                className="rounded img-fluid"
                src="/angpao/angpao_saweria.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_saweria.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-saweria">
                  SAWERIA.CO
                </span>
              </div>

              <CopyToClipboard text="https://saweria.co/abdulazizahwan">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Link
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between rounded-1rem">
              <h3 className="mb-0">Trakteer</h3>
              <h5 className="mb-0">ABD AZIZ</h5>
              <h4 className="mb-0">Trakteer.id</h4>
              <Image
                alt="Trakteer"
                className="rounded img-fluid"
                src="/angpao/angpao_trakteer.webp"
                width={100}
                height={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/angpao/angpao_trakteer.webp"
              />
              <div className="badge-overlap mt-1">
                <span className="badge rounded-1rem badge-trakteer">
                  TRAKTEER
                </span>
              </div>

              <CopyToClipboard text="https://trakteer.id/abdulazizahwan/tip">
                <button
                  className="btn btn-primary rounded-3rem"
                  onClick={showToastMessage}
                >
                  Salin Link
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <ImageUpload />

        <div className="row">
          <div className="col">
            <div className="text-center mt-3 pt-5">
              <Link
                href={{
                  pathname: router.query.ref === ref ? ref : "/",
                }}
                scroll={false}
              >
                <a className="btn btn-secondary btn-wide-md btn-md cursor-pointer rounded-3rem">
                  Kembali ke e-Invitation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
