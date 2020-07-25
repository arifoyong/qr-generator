import { useState } from "react";

import { QRCode } from "react-qr-svg";

import useDebounce from "../helper/useDebounce";

const QrCode = () => {
  const [state, setValues] = useState({
    qrInput: "",
  });
  const { qrInput } = state;
  let debouncedQr = useDebounce(qrInput, 500);

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  const renderQrCode = () => {
    debouncedQr && console.log("Deb", debouncedQr);
    return debouncedQr ? (
      <QRCode
        bgColor="#fff"
        fgColor="#2D3748"
        level="Q"
        className="w-1/2"
        value={debouncedQr}
      />
    ) : (
      <QRCode
        bgColor="#fff"
        fgColor="#ddd"
        level="Q"
        className="w-1/2"
        value=""
      />
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
            className="shadow appearance-none border rounded py-2 px-3 my-3 mx-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // className="border py-2 px-3 text-grey-darkest"
          />
          <div className="flex justify-center">{renderQrCode()}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QrCode;
