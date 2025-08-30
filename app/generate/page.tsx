"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <UploadDropzone
      className="ut-button:h-10"
      appearance={{
        container:{
            background:"red"
        },
        uploadIcon:{
            background:"yellow",
            color:"blue"
        },
        label:{
            color:"pink",
        },
        allowedContent:{
            color:"cyan"
        },
        button:{
            width:"150px",
            background:"orange",
            color:"black",
        },
        


        
        
      }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default page;
