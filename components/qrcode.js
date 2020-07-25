import { useState } from "react";
import { QRCode } from "react-qr-svg";
import useDebounce from "../helper/useDebounce";

const saveSvgAsPng = require("save-svg-as-png");

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: "white",
};

const QrCode = () => {
  const [qrInput, setQrInput] = useState();
  const [color, setColor] = useState("#2D3748");

  let debouncedQr = useDebounce(qrInput, 500);

  const handleChange = (e) => {
    setQrInput(e.target.value);
  };

  const handleClick = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("svg-chart"),
      "qr.png",
      imageOptions
    );
  };

  const renderQrCode = () => {
    return debouncedQr ? (
      <QRCode
        bgColor="#fff"
        fgColor="#2D3748"
        level="Q"
        className="w-1/4"
        value={debouncedQr}
      />
    ) : (
      <QRCode
        bgColor="#fff"
        fgColor="#ddd"
        level="Q"
        className="w-1/4"
        value=""
      />
    );
  };

  const renderDownloadButton = () => {
    return debouncedQr ? (
      <button
        className="bg-green-500 text-white px-16 py-3 rounded-full text-black text-xl shadow font-semibold"
        onClick={() => handleClick()}
      >
        <p>DOWNLOAD</p>
        <p className="text-xs">.png</p>
      </button>
    ) : (
      <button className="cursor-not-allowed bg-green-300 text-white px-16 py-3 rounded-full text-black text-xl shadow font-semibold">
        <p>DOWNLOAD</p>
        <p className="text-xs">.png</p>
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <input
            type="text"
            name="qrInput"
            onChange={handleChange}
            value={qrInput}
            placeholder="Enter your website or text here"
            className="shadow appearance-none border rounded py-2 px-3 my-3 mx-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="flex justify-center my-5">{renderQrCode()}</div>

          <div className="text-center py-5">{renderDownloadButton()}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QrCode;
