/* eslint-disable react/no-unknown-property */
import IconScroll from "./icon-scroll.svg";
import useScrollToTop from "./use-scroll-to-top";

export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <div>
      <style jsx>{`
        a:hover {
          transform: translate3d(0, -5px, 0);
          -webkit-transform: translate3d(0, -5px, 0);
          -moz-transform: translate3d(0, -5px, 0);
        }
        a {
          position: fixed;
          width: 2.65rem;
          height: 2.65rem;
          text-align: center;
          right: 2.875rem;
          bottom: 2.875rem;
          z-index: 100;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          a {
            right: 2rem;
            bottom: 5rem !important;
          }
        }
      `}</style>
      {isVisible && (
        <a onClick={scrollToTop}>
          <IconScroll />
        </a>
      )}
    </div>
  );
}
