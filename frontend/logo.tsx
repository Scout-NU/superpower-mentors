"use client"

import Image from "next/image"
export default function Logo() {
  return (
    <Image
      alt="Logo"
      src="/images/logo_blue.png"
      width={45}
      height={45}
    />
  )
}