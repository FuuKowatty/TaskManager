"use client";

import { useEffect } from "react";

export function TransitonAnimationHandler() {
  useEffect(() => {
    document.body.classList.add("transition-colors", "duration-300");
    return () => {
      document.body.classList.remove("transition-colors", "duration-300");
    };
  }, []);

  return null;
}
