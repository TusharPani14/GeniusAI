"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6da6968f-234b-4d1e-a1e4-0635a74382a7");
  }, []);

  return null;
};