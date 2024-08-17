"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Square } from "lucide-react";

const Webllix: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [incomingImages, setIncomingImages] = useState<
    { url: string; width: number }[]
  >([]);
  const [company, setCompany] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

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

    setLoading(true); // Start loading

    const fullPrompt = `${company} for ${prompt} landing page`;

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt: fullPrompt, company,  }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate images.");
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      alert("Image generation limit reached. You cannot generate more images.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-gray-900 text-white flex h-screen p-10">
      <div className="flex-1 pr-8 overflow-hidden">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              
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
                Company&apos;s/Name
              </label>
              <input
                id="company"
                placeholder="Webllix"
                type="text"
                value={company}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCompany(e.target.value)}
                className="border border-gray-700 bg-gray-800 text-white px-4 py-3 rounded-md w-full text-lg"
              />
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
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loader"></div>
            </div>
          ) : incomingImages && incomingImages.length > 0 ? (
            incomingImages.map((image, index) => (
              <div key={index} className="max-w-full">
                <Image
                  src={image.url}
                  alt={`Incoming Image ${index + 1}`}
                  width={600}
                  height={2024}
                  className="w-full rounded-md"
                />
                <p className="text-lg mt-2">Width: {image.width}</p>
              </div>
            ))
          ) : (
            <p className="text-xl">.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Webllix;
