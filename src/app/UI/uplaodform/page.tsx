'use client';
import React, { useState } from 'react';
import axios from 'axios';


const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const logo = {
    name: 'LogoName',
    icon: 'LogoIcon',
    business: { name: 'BusinessName' },
    alt: 'Logo Alt Text',
    size: 40,
    quality: 75
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      if (selectedFile.size > 1 * 1024 * 1024) {
        alert('File size exceeds the limit of 1MB.');
        return;
      }
      setFile(selectedFile);
      setSelectedFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file.');
      return;
    }

    setUploading(true);
    const controller = new AbortController();
    setAbortController(controller);

    const formData = new FormData();
    formData.append('pdf_file', file);

    try {
      const response = await axios.post('http://localhost:9000/2015-03-31/functions/function/invocations/api/uploadpdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        signal: controller.signal,
      });

      const responseData = response.data;
      if (responseData.status === 'error') {
        alert(responseData.message);
      } else {
        const uploadedPdfKey = responseData.key;
        setPdfUrl(`https://mydocsignchat.s3.amazonaws.com/${uploadedPdfKey}`);
        alert('File uploaded successfully.');
      }
    } catch (error: any) {
      if (error.name === 'CanceledError') {
        console.log('Upload canceled');
      } else {
        console.error('Error uploading file:', error.message);
        alert('Upload failed. Please try again later.');
      }
    }

    setUploading(false);
    setAbortController(null);
  };

  const handleCancelUpload = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  return (
    <div className="flex flex-col items-center justify-top h-full">
     
      <span className="italic hover:not-italic" id="websiteTitle">
        TheChatPdf
      </span>
      <div className="mb-4 flex items-center justify-top w-full">
        <div className="flex items-center">
          <label
            htmlFor="pdf_file"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Choose File
          </label>
          <input
            type="file"
            id="pdf_file"
            name="pdf_file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFileName && (
            <span className="ml-2 font-semibold">Selected: {selectedFileName}</span>
          )}
          <form onSubmit={handleSubmit} className="ml-4">
            {uploading ? (
              <div className="flex items-center">
                <div className="flex items-center justify-center m-[10px]">
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                  <div className="ml-2">Uploading...</div>
                </div>
                <button
                  type="button"
                  onClick={handleCancelUpload}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={uploading}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Upload
              </button>
            )}
          </form>
        </div>
      </div>
      {pdfUrl && (
        <div className="mt-4">
          <iframe src={pdfUrl} width="150%" height="600px"></iframe>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
