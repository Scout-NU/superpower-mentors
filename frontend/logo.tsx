"use client"

import { Player } from "@lottiefiles/react-lottie-player"

export default function Logo() {
  return (
    <Player
      autoplay
      loop
      src="/animations/logo-spin.json"
      style={{ height: "45px", width: "45px" }}
    />
  )
}