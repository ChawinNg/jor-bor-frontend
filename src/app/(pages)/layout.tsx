"use client";
import BackButton from "@/components/ui/BackButton";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";

export default function Pages({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <div>
          <BackButton />
          <div className="">{children}</div>
        </div>
      </NextUIProvider>
    </ThemeProvider>
  );
}
