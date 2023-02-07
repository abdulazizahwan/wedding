/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import toast from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

import { db, storage } from "../../firebase/firebase";
import { numberValidator } from "../../utils/numberValidator";

export default function ImageUpload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const [nameData, nameInput] = useState();
  const [amountData, amountInput] = useState();

  function validateAngpaoInput(nameData, amountData) {
    // Check if name is not empty
    if (!nameData) {
      return "Nama tidak boleh kosong";
    }

    // Check if amount is valid Indonesian phone number
    if (isNaN(amountData) || amountData <= 0) {
      return "Jumlah tidak valid";
    }

    return "";
  }

  async function addAngpao(name, amount, url) {
    const fileUpload = document.querySelector(".file-upload");

    // Validate user input
    const error = validateAngpaoInput(name, amount);
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await addDoc(collection(db, "angpao"), {
        name: name,
        amount: amount,
        imageURL: url,
        timestamp: serverTimestamp(),
      }).then(() => {
        nameInput("");
        amountInput("");
        setImgUrl("");
        fileUpload.value = "";
        setProgressPercent(0);
      });

      // Show success toast
      toast.success(
        "Berhasil mengunggah bukti Transferan kamu. Terima kasih!",
        {
          duration: 6000,
          position: "top-center",
          icon: "🙏",
        }
      );
    } catch (error) {
      toast.error(`Maaf terjadi kesalahan.\nSilahkan coba lagi.`, {
        duration: 6000,
        position: "top-center",
        icon: "😔",
      });
    }
  }

  const handleUpload = (e) => {
    e.preventDefault();
    // Set the maximum file size to 5 MB
    const maxFileSize = 5 * 1024 * 1024;

    const file = e.target[2]?.files[0];

    if (!file) return;

    // Check the size of the file
    if (file.size > maxFileSize) {
      toast.error(
        `Oh No, Ukuran file kamu terlalu besar! Maksimal ${
          maxFileSize / 1024 / 1024
        } MB ^_^`
      );
      return;
    }

    const fileName = `${new Date().getTime()}-${nameData}-${file.name}`;
    const storageRef = ref(storage, `angpao/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);

          addAngpao(nameData, amountData, downloadURL);
        });
      }
    );
  };

  function openFile() {
    document.getElementById("fileUploadInput").click();
  }

  return (
    <>
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col">
          <div className="mb-5 pb-1 text-center">
            <h5 className="display-4">
              Silahkan Jika Ingin Mengunggah Bukti Transfer
            </h5>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-8 col-md-10">
          <form onSubmit={handleUpload} className="form mx-2">
            <input
              name="name"
              type="text"
              className="form-control rounded-3rem my-3"
              placeholder="Tuliskan nama Anda"
              value={nameData || ""}
              required
              autoComplete="off"
              onChange={(e) => nameInput(e.target.value)}
            />
            <input
              name="amount"
              type="number"
              min={1}
              onKeyDown={numberValidator}
              className="form-control rounded-3rem my-3"
              placeholder="Tuliskan nominal Anda"
              value={amountData || ""}
              required
              autoComplete="off"
              onChange={(e) => amountInput(e.target.value)}
            />
            <div className="form-group">
              <div className="input-group my-3">
                <input
                  type="file"
                  className="form-control rounded-3rem-left file-upload form-control-image-upload"
                  id="fileUploadInput"
                  placeholder="Upload File"
                  required
                  autoComplete="off"
                  accept="image/*"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    onClick={openFile}
                    className="browse btn btn-primary rounded-3rem-right"
                  >
                    Browse...
                  </button>
                </div>
              </div>

              {progressPercent != 0 && (
                <ProgressBar
                  now={progressPercent}
                  label={`${progressPercent}`}
                  className="my-3 rounded-3rem progress-primary-color"
                />
              )}

              <button
                type="submit"
                className="btn btn-block btn-primary rounded-3rem my-5"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
