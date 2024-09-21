"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { unLock } from "./action";

const Page = () => {
  const passRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        ref={passRef}
        className="bg-transparent px-4 py-2 text-foreground border border-foreground/10 focus:outline-none text-xl"
        placeholder="Enter the password"
      />
      <Button
        className="mt-4"
        size={"lg"}
        onClick={() => {
          unLock(passRef.current?.value || "").then((e) => {
            if (e) {
              window.location.reload();
            } else {
              alert("Password is incorrect");
            }
          });
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Page;
