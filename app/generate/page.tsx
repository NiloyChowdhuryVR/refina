"use client";

import { UploadDropzone } from "@/utils/uploadthing";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Model, models } from "../constants/modelData";
import Models from "../components/Models";

export default function GeneratePage() {
  const { isSignedIn, isLoaded } = useUser(); // Clerk auth
  const router = useRouter();

  const [selectedModel, setSelectedModel] = useState<Model | undefined>(
    undefined
  );
  const [isUploading,setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState("");
  const [modelBarOpen, setModelBarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [responseText, setResponseText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔒 Protect route manually
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        Checking login...
      </div>
    );
  }

  // 📤 Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || !selectedModel) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    setResponseText("");
    setImages([]);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, imgInput: imageUrl }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      const msg = data.choices[0].message;
      setResponseText(msg.content);

      if (msg.images && msg.images.length > 0) {
        const urls = msg.images
          .map((img: any) => img.image_url?.url)
          .filter(Boolean);
        setImages(urls);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url: string, index: number) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `generated-image-${index + 1}.png`;
    a.click();
  };

  return (
    <div className="h-[calc(100vh-3.75rem)] w-full flex justify-center items-center">
      <div className="bg-blue-500 w-[18%] h-full flex items-center py-10 flex-col relative">
        <p>hi</p>
        {selectedModel?.name}
        <div
          onClick={() => setModelBarOpen(!modelBarOpen)}
          className="w-40 h-10 flex justify-center items-center cursor-pointer rounded-md select-none text-black bg-amber-400"
        >
          Choose Model
        </div>
        {modelBarOpen && (
          <div className="absolute max-h-full overflow-y-auto hide-scrollbar w-full -right-[100%] top-0 bg-amber-400">
            {models.map((model) => (
              <Models
                selectedModel={selectedModel}
                key={model.id}
                model={model}
                setSelectedModel={setSelectedModel}
              />
            ))}
          </div>
        )}
      </div>
      {/* ////////////////////////////////////////////////////////////////////////INPUT FIELD/////////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        onClick={() => setModelBarOpen(false)}
        className=" flex-1 h-full justify-center items-center flex"
      >
        <div className="min-h-[calc(100vh-3.75rem)] w-full flex items-center justify-center bg-[#F4F1E8] p-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full flex flex-col gap-6 justify-center items-center">
            <h1 className="text-xl text-gray-600 font-bold font-roboto text-center">
              Upload you image
            </h1>

            {/* Prompt Form */}
            <form onSubmit={handleSubmit} className="space-y-4 w-[90%] flex flex-col items-center gap-3">
              {/* <textarea
                placeholder="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full border rounded-lg p-2 h-24"
                required
              /> */}

              {/* Upload */}
              <UploadDropzone
                className="cursor-pointer w-full"
                appearance={{
                  container: { border: "2px dotted #c6c0ad"},
                  uploadIcon: { color: "#c6c0ad" },
                  label: { color: "gray" , fontFamily:"roboto"},
                  allowedContent: { color: "#c6c0ad" , fontFamily:"roboto"},
                  button: {
                    width: "110px",
                    height:"40px",
                    borderRadius:"5px",
                    background: "#c6c0ad",
                    fontSize:"0.8rem",
                    fontFamily:"roboto",
                    color: "black",
                  },
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  setImageUrl(res[0].ufsUrl);
                }}
                onUploadError={(error: Error) => {
                  console.log(`ERROR! ${error.message}`);
                }}
              />

              {/* Preview Uploaded Image */}
              {imageUrl && (
                <div className="flex justify-center relative">
                  <div onClick={()=>setImageUrl("")} className="absolute -right-1 -top-2 bg-gray-300 rounded-[50%] w-3 text-xs text-gray-600 cursor-pointer h-3 flex justify-center items-center">
                    x
                  </div>
                  <Image
                    src={imageUrl}
                    alt="uploaded image"
                    className="rounded-lg"
                    width={70}
                    height={70}
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-40  bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md cursor-pointer font-semibold font-roboto"
              >
                {loading ? "Processing..." : "Generate"}
              </button>
            </form>

            {/* AI Response */}
            {responseText && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
                <strong>AI Response:</strong>
                <p>{responseText}</p>
              </div>
            )}

            {/* Generated Images */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((url, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img
                      src={url}
                      alt={`AI generated ${i + 1}`}
                      className="w-full rounded-lg border"
                    />
                    <button
                      onClick={() => handleDownload(url, i)}
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg text-sm"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
