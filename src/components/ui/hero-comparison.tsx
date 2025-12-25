"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileBadge, Github } from "lucide-react";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/kibo-ui/comparison";
import Image from "next/image";

const Example = () => (
  <Comparison className="aspect-video max-h-screen w-full">
    <ComparisonItem className="max-h-screen w-full" position="left">
     <div className="relative flex flex-col items-center justify-center h-screen text-center gap-2 max-w-2xl mx-auto">
        <h1 className="font-medium text-5xl transition-colors duration-300 text-white">
          Hello, This is Abdulahi Muhammad
        </h1>
        <p className="text-gray-400 text-lg">
          Frontend Developer with 3+ Years of Experience I build scalable,
          performant, and user-focused web applications using modern frontend
          technologies.
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
    </ComparisonItem>
    <ComparisonItem className="max-h-screen w-full" position="right">
      <Image
        alt="Placeholder 2"
        className="opacity-50"
        height={1440}
        src="https://placehold.co/2560x1440?random=2"
        unoptimized
        width={2560}
      />
    </ComparisonItem>
    <ComparisonHandle />
  </Comparison>
);

export default Example;
