import Image from "next/image";

import CurvedSeparator from "./curved-separator.svg";
import IconLoveplus from "./icon-loveplus.svg";
import useLightbox from "./use-lightbox";

export default function Gallery({ gallery }) {
    const images = gallery.map(({ image }) => image);
    const { LightBox, setImgIndex, setOpen } = useLightbox({ images });

    return (
        <section id="gallery" className="bg-secondary">
            <div className="container spacer-double-lg">
                <div className="col-lg-12 mx-lg-auto">
                    <div className="row justify-content-center card-gutters">
                        {gallery.map(({ className, thumbnail }, i) => {
                            return (
                                <div className={className} key={i}>
                                    <div
                                        className="cursor-pointer hover-effect d-block"
                                        onClick={() => {
                                            setImgIndex(i);
                                            setOpen(true);
                                        }}
                                    >
                                        <div>
                                            <Image className="img-fluid"
                                                src={thumbnail}
                                                layout="responsive"
                                                width={30}
                                                height={20}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL={thumbnail}
                                                alt="" />
                                        </div>
                                        <span className="hover-effect-container">
                                            <span className="hover-effect-icon has-svg">
                                                <IconLoveplus />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <LightBox />
            <div className="curved-decoration">
                <CurvedSeparator
                    className="bg-primary-svg"
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
}
