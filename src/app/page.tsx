"use client";

import { useEffect } from "react";
import Images from "./Images";
import Lenis from '@studio-freight/lenis'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])


  return (
    <section id="about" className="bg-gradient-to-r from-black via-[rgba(54,53,53,0.625)] to-[rgba(34,34,34,1)]">
    <Images />
    </section>
  )
}
