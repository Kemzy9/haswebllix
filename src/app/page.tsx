import Image from 'next/image'

import React from "react";
import Nav from "@/app/UI/Nav/page";
import Hero from "@/app/UI/Hero/page";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav/>
      <Hero/>
      
    </main>
  )
}