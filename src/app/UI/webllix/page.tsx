"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
// Import any other icons that are correctly available in lucide-react
import { Square } from "lucide-react"; // Replace with an actual icon

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [incomingImages, setIncomingImages] = useState<
    { url: string; width: number }[]
  >([]);
  const [company, setCompany] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUserId(res.data.data._id);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    if (!userId) {
      alert("User ID not found. Please try again later.");
      return;
    }

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt, company, aspectRatio }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate images.");
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      alert("Image generation limit reached. You cannot generate more images.");
    }
  };

  return (
    <div className="bg-gray-900 text-white flex h-screen p-10">
  <div className="flex-1 pr-8 overflow-hidden">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Essential</h2>
          {/* Placeholder for SettingsIcon */}
        </div>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="prompt">
            Prompt
          </label>
          <textarea
            id="prompt"
            placeholder="golden retriever wearing a top hat"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPrompt(e.target.value)
            }
            className="border border-gray-700 bg-gray-800 text-white px-4 py-3 rounded-md w-full h-32 resize-y overflow-auto text-lg"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            placeholder="about"
            type="text"
            value={company}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCompany(e.target.value)}
            className="border border-gray-700 bg-gray-800 text-white px-4 py-3 rounded-md w-full text-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Aspect Ratio</label>
          <div className="flex gap-4">
            <button
              className={`flex items-center justify-center p-4 rounded-md ${
                aspectRatio === 16 / 9 ? "bg-blue-600" : "bg-gray-800"
              } text-lg`}
              onClick={() => setAspectRatio(16 / 9)}
              title="16:9"
            >
              <Square size={24} /> {/* Replace with available icon */}
              <span className="ml-3">16:9</span>
            </button>
            <button
              className={`flex items-center justify-center p-4 rounded-md ${
                aspectRatio === 9 / 16 ? "bg-blue-600" : "bg-gray-800"
              } text-lg`}
              onClick={() => setAspectRatio(9 / 16)}
              title="9:16"
            >
              <Square size={24} /> {/* Replace with available icon */}
              <span className="ml-3">9:16</span>
            </button>
            <button
              className={`flex items-center justify-center p-4 rounded-md ${
                aspectRatio === 21 / 9 ? "bg-blue-600" : "bg-gray-800"
              } text-lg`}
              onClick={() => setAspectRatio(21 / 9)}
              title="21:9"
            >
              <Square size={24} /> {/* Replace with available icon */}
              <span className="ml-3">21:9</span>
            </button>
            <button
              className={`flex items-center justify-center p-4 rounded-md ${
                aspectRatio === 9 / 21 ? "bg-blue-600" : "bg-gray-800"
              } text-lg`}
              onClick={() => setAspectRatio(9 / 21)}
              title="9:21"
            >
              <Square size={24} /> {/* Replace with available icon */}
              <span className="ml-3">9:21</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-xl"
            type="button"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-1 pl-8 overflow-y-auto h-full">
    <div className="grid grid-cols-1 gap-8 overflow-y-auto max-h-full" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
      {/* Display incoming images */}
      {incomingImages && incomingImages.length > 0 ? (
        incomingImages.map((image, index) => (
          <div key={index} className="max-w-full">
            <Image
              src={image.url}
              alt={`Incoming Image ${index + 1}`}
              width={600} // Adjust width as needed
              height={2024} // Fixed height for images
              className="w-full rounded-md"
            />
            <p className="text-lg mt-2">Width: {image.width}</p>
          </div>
        ))
      ) : (
        <p className="text-xl">No images generated yet.</p>
      )}
    </div>
  </div>
</div>


  

  );
};

export default Gallery;
