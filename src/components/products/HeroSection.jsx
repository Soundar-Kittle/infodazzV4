"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-700 text-white pt-28 pb-20 overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-600/20 rounded-full blur-xl -mb-20 -ml-20"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-blue-300/40 rotate-45"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/40 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 border-2 border-blue-400/40 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn">
              Free Online School
              <br />
              Management Software.
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 animate-fadeUp">
              Now you can manage your school, college, or any educational center with
              EduMatrix. It's 100% free for a lifetime with no limitations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeUp">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Sign Up Now, It's Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center text-sm font-medium text-blue-100 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mr-3">
                  <Play className="h-4 w-4 text-white" />
                </div>
                See how it works
              </button>
            </div>
          </div>

          {/* Right Image Preview */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="School Management Dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />
            </div>

            {/* Floating Box */}
            <div className="absolute -bottom-6 -left-6 w-48 h-32 bg-blue-500 rounded-lg transform rotate-6 shadow-lg">
              <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-lg p-4">
                <div className="h-2 w-24 bg-blue-500 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-blue-300 rounded-full mb-4"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                  <div className="h-8 w-16 bg-blue-200 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Light Blur Orb */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Wave bottom SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* Video Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
