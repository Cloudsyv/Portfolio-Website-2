"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Cloud3D from "@/components/Cloud3D";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Cloud3D />
    </div>
  );
}
