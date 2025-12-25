import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileBadge, Github } from "lucide-react";

const HeroSection = () => {
  return (
       <div className="relative flex flex-col items-center justify-center h-screen text-center gap-4 max-w-2xl mx-auto p-4">
        <h1 className="font-medium text-5xl transition-colors duration-300 text-white">
          Hello, This is Abdulahi Muhammad
        </h1>
        <h2 className="text-xl uppercase font-cursive font-medium bg-linear-to-r from-teal-500 via-purple-500 to-orange-500 text-transparent bg-clip-text bg-size-(--background-size-300) animate-gradient-text">
          Web and Mobile Developer | PM | UI/UX Designer
        </h2>
        <p className="text-gray-400 text-lg">
          Web and Mobile Developer{" "}
          <strong className="text-white">( Frontend heavy )</strong> with 3+
          Years of Experience I build scalable, performant, and user-focused web
          and mobile applications using modern frontend and mobile technologies.
        </p>
     
        <div className="flex gap-2">
          <Button className="text-black bg-white hover:bg-white/80">
            <FileBadge className="w-4 h-4" />
            <Link
              href="https://drive.google.com/file/d/11TGQMVX8AFVdda9iQExLVNn9qyOhY55R/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </Link>
          </Button>
          <Button className="text-white bg-sky-600 hover:bg-sky-700">
            <Github className="w-4 h-4" />
            <Link
              href="https://github.com/abdulahi-muhammad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Github Profile
            </Link>
          </Button>
        </div>
      </div>
  )
}

export default HeroSection