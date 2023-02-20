import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { LangContext } from "../../contexts/language";
import { db } from "../../firebase/firebase";

export default function RsvpForm({ config }) {
  const [nameData, nameInput] = useState();
  const [phoneData, phoneInput] = useState();
  const [attendData, attendInput] = useState();
  const [attendNumberData, attendNumberInput] = useState("0");

  const [state] = useContext(LangContext);
  const { locale } = state;

  function validateRsvpInput(
    nameData,
    phoneData,
    attendData,
    attendNumberData
  ) {
    // Check if name is not empty
    if (!nameData) {
      return locale.toast.error_name_validation;
    }

    // Check if phone is valid Indonesian phone number
    const phonePattern = /^62\d{10,12}$/;
    if (!phonePattern.test(phoneData)) {
      return locale.toast.error_phone_validation;
    }

    // Check if attend is boolean
    if (typeof attendData !== "boolean") {
      return locale.toast.error_attend_validation;
    }

    // Check if number is between 1 and 2
    if (attendData === true) {
      if (attendNumberData < 1 || attendNumberData > 10) {
        return locale.toast.error_attend_number_validation;
      }
    }

    return "";
  }

  async function addRsvp(name, phone, attend, number) {
    // Validate user input
    const error = validateRsvpInput(name, phone, attend, number);
    if (error) {
      toast.error(error);
      return;
    }

    // Get the radio button value
    const radioButtons = document.getElementsByName("attending");

    try {
      await addDoc(collection(db, "rsvp"), {
        name: name,
        phone: phone,
        attend: attend,
        number: number,
        timestamp: serverTimestamp(),
      }).then(() => {
        nameInput("");
        phoneInput("");
        attendInput("");
        attendNumberInput("0");

        for (let i = 0; i < radioButtons.length; i++) {
          radioButtons[i].checked = false;
        }
      });
      toast.success(locale.toast.success_rsvp, {
        duration: 6000,
        position: "top-center",
        icon: "👏",
      });
    } catch (error) {
      toast.error(locale.toast.error_rsvp, {
        duration: 6000,
        position: "top-center",
        icon: "😔",
      });
    }
  }

  const handleSubmitRsvp = (e) => {
    e.preventDefault();

    addRsvp(nameData, phoneData, attendData, attendNumberData);
  };

  return (
    <>
      <form onSubmit={handleSubmitRsvp} className="form">
        <div className="form-group">
          <label className="text-white">{config.name_label}</label>
          <input
            name="name"
            type="text"
            id="rsvpName"
            className="form-control form-control rounded-3rem"
            placeholder={config.name_placeholder}
            value={nameData || ""}
            required
            autoComplete="off"
            onChange={(e) => nameInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text-white">{config.phone_label}</label>
          <input
            name="phone-number"
            type="tel"
            id="rsvpPhone"
            minLength={8}
            maxLength={15}
            className="form-control form-control rounded-3rem"
            placeholder={config.phone_placeholder}
            value={phoneData || ""}
            required
            autoComplete="off"
            onChange={(e) => phoneInput(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group mb-1">
              <label className="text-white">{config.registry_label}</label>
            </div>
          </div>
          <div className="col">
            <div className="form-group rounded-3rem bg-white p-2 border">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="attending-yes"
                  name="attending"
                  className="custom-control-input"
                  required
                  value={attendData || true}
                  onChange={(e) => attendInput(true)}
                />
                <label className="custom-control-label" htmlFor="attending-yes">
                  {config.registry_radio_label_yes}
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group rounded-3rem bg-white p-2 border">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="attending-no"
                  name="attending"
                  className="custom-control-input"
                  value={attendData || false}
                  onChange={(e) => attendInput(false)}
                />
                <label className="custom-control-label" htmlFor="attending-no">
                  {config.registry_radio_label_no}
                </label>
              </div>
            </div>
          </div>
        </div>
        {attendData && (
          <div className="form-group">
            <label className="text-white">{config.total_attend_label}</label>
            <input
              name="number"
              type="number"
              id="rsvpNumber"
              min="1"
              max="10"
              maxLength={2}
              autoComplete="off"
              className="form-control form-control rounded-3rem"
              placeholder={config.total_attend_placeholder}
              value={attendNumberData || ""}
              onChange={(e) => attendNumberInput(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <button
            className="btn btn-block btn-primary rounded-3rem my-5"
            type="submit"
          >
            {config.button_text}
          </button>
        </div>
        <div className="form-group text-center mt-5">
          <small className="mt-2 text-dark-gray opacity-8">
            {config.submission_info}
          </small>
        </div>
      </form>
    </>
  );
}
