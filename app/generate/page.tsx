"use client";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Model, models } from "../constants/modelData";
import Models from "../components/Models";
import toast from "react-hot-toast";
import { BiDownload } from "react-icons/bi";
import { numberOfImages } from "../constants/data";

export default function GeneratePage() {
  const { isSignedIn, isLoaded } = useUser(); // Clerk auth
  const router = useRouter();

  const [selectedModel, setSelectedModel] = useState<Model | undefined>(
    undefined
  );
  const [imageUrl, setImageUrl] = useState("");
  const [numberSelected,setNumberSelected] = useState(1)
  const [modelBarOpen, setModelBarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
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
    if (!selectedModel) {
      toast.error("No Model Selected!");
      return;
    }
    if (!imageUrl) {
      toast.error("No Image Uploaded!");
      return;
    }

    setLoading(true);
    setImages([]);

    try {
    const selectedNumberPrompt =
      numberOfImages.find((n) => n.number === numberSelected)?.numberPrompt;

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `${prompt}\n\n${selectedNumberPrompt}`,
        imgInput: imageUrl,
      }),
    });
      console.log(selectedNumberPrompt)
      const data = await res.json();
      console.log("API Response:", data);

      const msg = data.choices[0].message;

      if (msg.images && msg.images.length > 0) {
        const urls = msg.images
          .map((img: any) => img.image_url?.url)
          .filter(Boolean);
        setImages(urls);
      }
      toast.success("Results Generated", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
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
      <div className="bg-blue-500 w-[18%] h-full flex items-center flex-col relative">
        <div
          onClick={() => setModelBarOpen(!modelBarOpen)}
          className="w-[90%] h-10 flex justify-center items-center cursor-pointer rounded-md select-none bg-[#4c3122] hover:bg-[#3e2518]"
        >
          <h3 className="text-[#F4F1E8] font-semibold font-roboto tracking-wider">{selectedModel? selectedModel.name : "Choose Model"}</h3>
        </div>
        {modelBarOpen && (
          <div className="absolute z-10 max-h-full overflow-y-auto hide-scrollbar w-full -right-[100%] top-0 bg-amber-400">
            {models.map((model) => (
              <Models
                selectedModel={selectedModel}
                key={model.id}
                model={model}
                setSelectedModel={setSelectedModel}
                setPrompt={setPrompt}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center items-center w-[90%] gap-5 my-5">
          {numberOfImages.map((numberofImage)=>(
            <div key={numberofImage.number} onClick={()=>setNumberSelected(numberofImage.number)} className={`border-[#4c3122] border-2 w-7 h-7 flex justify-center items-center text-[#4c3122] font-roboto font-semibold cursor-pointer ${numberSelected===numberofImage.number?"bg-[#4c3122] text-[#F4F1E8]":""} `}>
              {numberofImage.number}
            </div>
          ))}
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////INPUT FIELD/////////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        onClick={() => setModelBarOpen(false)}
        className=" flex-1 justify-center items-center flex"
      >
        <div className="h-[calc(100vh-3.75rem)] overflow-y-auto w-full flex items-center flex-col bg-[#F4F1E8] px-6 pb-6">
          {images.length === 0 ? (
            <div className="bg-[#4c3122] shadow-lg rounded-2xl mt-15 p-6 max-w-lg w-full flex flex-col gap-6 justify-center items-center">
              <h1 className="text-xl text-[#F4F1E8] font-bold font-roboto text-center">
                Upload you image
              </h1>

              {/* Prompt Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-[90%] flex flex-col items-center gap-3"
              >
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
                    container: { border: "2px solid #F4F1E8" },
                    uploadIcon: { color: "#F4F1E8" },
                    label: { color: "#F4F1E8", fontFamily: "roboto" },
                    allowedContent: { color: "#c6c0ad", fontFamily: "roboto" },
                    button: {
                      width: "150px",
                      height: "35px",
                      borderRadius: "5px",
                      background: "#F4F1E8",
                      fontSize: "0.8rem",
                      fontFamily: "roboto",
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
                    <div
                      onClick={() => setImageUrl("")}
                      className="absolute -right-1 -top-2 bg-gray-300 rounded-[50%] w-3 text-xs text-gray-600 cursor-pointer h-3 flex justify-center items-center"
                    >
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
                  className="w-[150px] h-[35px] flex justify-center items-center  bg-[#F4F1E8] hover:bg-[#c6c0ad] text-[#351E11] py-2 rounded-md cursor-pointer font-semibold font-roboto"
                >
                  {loading ? "Processing..." : "Generate"}
                </button>
              </form>

              {/* AI Response
            {responseText && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
                <strong>AI Response:</strong>
                <p>{responseText}</p>
              </div>
            )} */}

              {/* Generated Images */}
            </div>
          ):
          
          
          
          
          
          <div className="bg-[#4c3122] shadow-lg rounded-lg p-6 w-full flex gap-6 justify-between items-center">
              <h1 className="text-xl text-[#F4F1E8] font-bold font-roboto text-center">
                Generate Another Image
              </h1>

              {/* Prompt Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-1 justify-end items-center gap-10"
              >
                {/* <textarea
                placeholder="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full border rounded-lg p-2 h-24"
                required
              /> */}

                {/* Upload */}
                  
                <UploadButton
                  className=""
                  appearance={{
                    container: { },
                    allowedContent: { display:"none" },
                    button: {
                      width: "150px",
                      height: "35px",
                      borderRadius: "5px",
                      background: "#F4F1E8",
                      fontSize: "0.8rem",
                      fontFamily: "roboto",
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
                    <div
                      onClick={() => setImageUrl("")}
                      className="absolute -right-1 -top-2 bg-gray-300 rounded-[50%] w-3 text-xs text-gray-600 cursor-pointer h-3 flex justify-center items-center"
                    >
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
                  className="w-[150px] h-[35px] flex justify-center items-center  bg-[#F4F1E8] hover:bg-[#c6c0ad] text-[#351E11] py-2 rounded-md cursor-pointer font-semibold font-roboto"
                >
                  {loading ? "Processing..." : "Generate"}
                </button>
              </form>
            </div>
          
          
          
          
          
          
          }
          {images.length > 0 && (
            <div className="mt-4 bg-orange-500 w-full h-full flex gap-4 overflow-y-auto">
              {images.map((url, i) => (
                <div key={i} className="flex flex-col items-center relative">
                  <Image
                    src={url}
                    alt={`AI generated ${i + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg border"
                  />
                  <button
                    onClick={() => handleDownload(url, i)}
                    className="bg-black/50 hover:bg-black text-white right-1 top-1 cursor-pointer rounded-[50%] text-sm absolute w-8 h-8 flex justify-center items-center "
                  >
                    <BiDownload/>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
