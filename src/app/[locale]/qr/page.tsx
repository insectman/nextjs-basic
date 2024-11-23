'use client';
import { useState } from 'react';

export interface QrInputs {
  baseImage: FileList | null;
  qrImage: FileList | null;
  size: number;
  position: number;
  qrSize: number;
  margin: number;
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
}

export default function Qr() {
  const [inputs, setInputs] = useState<QrInputs>({
    baseImage: null,
    qrImage: null,
    size: 200,
    position: 50,
    qrSize: 50,
    margin: 1,
    errorCorrection: 'M',
  });

  const handleBaseImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      baseImage: e.target.files,
    }));
  };

  const handleQrImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      qrImage: e.target.files,
    }));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      size: parseInt(e.target.value, 10),
    }));
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      position: parseInt(e.target.value, 10),
    }));
  };

  const handleQrSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      qrSize: parseInt(e.target.value, 10),
    }));
  };

  const handleMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      margin: parseInt(e.target.value, 10),
    }));
  };

  const handleErrorCorrectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputs((prevState) => ({
      ...prevState,
      errorCorrection: e.target.value as QrInputs['errorCorrection'],
    }));
  };

  return (
    <form className="space-y-4">
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          Base image
        </span>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleBaseImageChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          QR codes source
        </span>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleQrImageChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          Output image size
        </span>
        <input
          type="number"
          value={inputs.size}
          onChange={handleSizeChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          QR code position
        </span>
        <input
          type="number"
          value={inputs.position}
          onChange={handlePositionChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          QR code size
        </span>
        <input
          type="number"
          value={inputs.qrSize}
          onChange={handleQrSizeChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">Margin</span>
        <input
          type="number"
          value={inputs.margin}
          onChange={handleMarginChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          Error correction
        </span>
        <select
          value={inputs.errorCorrection}
          onChange={handleErrorCorrectionChange}
          className="mt-1 block w-full px-3 py-2 text-base text-slate-700 transition duration-150 ease-in-out bg-white border border-slate-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High</option>
        </select>
      </label>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Generate QR code {/* translate */}
      </button>
    </form>
  );
}
