"use client";

import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({
  width = 120,
  height = 120,
}: LogoProps) {
  return (
    <Image
      src="/images/extra-logo.png"
      alt="EXTRA Connect"
      width={width}
      height={height}
      priority
    />
  );
}