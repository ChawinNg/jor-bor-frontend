"use client";
import BackButton from "@/components/ui/BackButton";
import { NextUIProvider } from "@nextui-org/react";

export default function Pages({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div>
        <BackButton />
        <div className="">{children}</div>
      </div>
    </NextUIProvider>
  );
}
