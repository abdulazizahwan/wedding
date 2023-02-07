/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { useContext } from "react";

import { LangContext } from "../../contexts/language";

export default function FloatingButton() {
  const [state, dispatch] = useContext(LangContext);

  const changeLanguage = (event) => {
    event.preventDefault();
    let lang = state.lang === "id" ? "en" : "id";
    dispatch({ type: "change_lang", lang });
  };

  return (
    <div>
      <style jsx>{`
        .float {
          position: fixed;
          width: 42px;
          height: 42px;
          left: 1.5rem;
          bottom: 5.6rem;
          background-color: #e887af;
          color: #fff;
          border-radius: 50px;
          text-align: center;
          z-index: 100;
        }

        @media (min-width: 992px) {
          .float {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>
      <a className="float" onClick={changeLanguage} title="Change Language">
        <img src={`/img/${state.lang}-circle.svg`} width="42" alt="Flag" />
      </a>
    </div>
  );
}
