import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4">
       <Navbar />
       <main>
        <Hero />
        <h1>Hello saisa</h1></main>
    </div>
    
  )
}
