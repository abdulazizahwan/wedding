import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import { LangContext } from "../../contexts/language";
import { firebaseApp } from "../../firebase/firebase";

export default function MessageForm({ config }) {
  useEffect(() => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    nameInput(params.get("from"));
  }, []);

  const [state] = useContext(LangContext);
  const { locale } = state;

  const [nameData, nameInput] = useState();
  const [messageData, messageInput] = useState();

  const db = getFirestore(firebaseApp);

  function validateMessageInput(nameData, messageData) {
    // Check if name is not empty
    if (!nameData) {
      return locale.toast.error_name_validation;
    }

    // Check if message is not empty
    if (!messageData) {
      return locale.toast.error_message_validation;
    }
  }

  async function addMessage(name, message) {
    // Validate user input
    const error = validateMessageInput(name, message);
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name,
        message,
        timestamp: serverTimestamp(),
      }).then(() => {
        nameInput("");
        messageInput("");
      });

      toast.success(locale.toast.success_send_message, {
        duration: 6000,
        position: "top-center",
        icon: "👏",
      });
    } catch (error) {
      toast.error(locale.toast.error_send_message, {
        duration: 6000,
        position: "top-center",
        icon: "😔",
      });
    }
  }

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    addMessage(nameData, messageData);
  };

  return (
    <>
      <div className="col-md-5 d-flex flex-column">
        <form className="form" onSubmit={handleSubmitMessage}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              className="form-control rounded-1rem"
              placeholder={config.name_placeholder}
              value={nameData || ""}
              required
              autoComplete="off"
              onChange={(e) => nameInput(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control rounded-1rem"
              placeholder={config.message_placeholder}
              cols="30"
              rows="8"
              required
              autoComplete="off"
              style={{ height: "280px" }}
              value={messageData}
              onChange={(e) => messageInput(e.target.value)}
            />
          </div>
          <div className="form-group text-right">
            <button
              className="btn btn-sm btn-block btn-primary rounded-3rem"
              type="submit"
            >
              {config.button_text}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
