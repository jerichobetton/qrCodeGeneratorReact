import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// let qrImagesrc = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="


//qrText.value;
// if (qrText.value.length > 0) {
// qrImage.src =
//   "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//   qrText.value;
//   imgBox.classList.add("show-img");
// } else {
//   qrText.classList.add("error");
//   setTimeout(() => {
//     qrText.classList.remove("error");
//   }, 1000);
// }
function App() {
  const [qrImgeSource, setQrImageSource] = useState("");
  const [showImage, setShowImage] = useState(false);
  function generateQR(){
    console.log("Just something.. Anything");
    setQrImageSource(
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        "random"
    );
    setShowImage(true);
  }

  return (
    <>
      <div className="container">
        <p>Enter your text or URL</p>
        <input type="text" placeholder="Text or Url" id="qrText" />

        <div className="show-img" id="imgBox">
          <img src={qrImgeSource} id="qrImage" />
        </div>
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
    </>
  );
}

export default App;
