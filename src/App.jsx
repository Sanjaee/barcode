import React, { useState } from "react";
import { generateQRCode } from "./assets/api";

function App() {
  const [qrData, setQrData] = useState("example.com");
  const [qrSize, setQrSize] = useState("200x200");

  return (
    <div className=" flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">QR Code Generator</h1>
        <div className="mt-10">
          <label className="text-left">QR URL :</label>
          <input className="ml-2 text-center border-slate-700 border-4 rounded-lg" type="text" value={qrData} onChange={(e) => setQrData(e.target.value)} />
        </div>
        <div className="mt-6">
          <label className="text-left">QR Size :</label>
          <input className="ml-2 text-center border-slate-700 border-4 rounded-lg" type="text" value={qrSize} onChange={(e) => setQrSize(e.target.value)} />
        </div>
        <div className="mt-14 justify-center flex items-center">
          <img className="" src={generateQRCode(qrData, qrSize)} alt="QR Code" />
        </div>
        <div className="flex">
          <a href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/">
            <img className="w-8 h-8 text-gray-500 " src="/img/linkedin.png" alt="" />
          </a>
          <a className="ml-64 " href="https://www.instagram.com/ahmdfrizza/?hl=en">
            <img className="w-8 h-8 text-gray-500 " src="/img/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

//https://www.tiktok.com/@ahmadafriza25
