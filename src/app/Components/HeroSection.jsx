import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const videoUrl = "/0_Earth_Planet_3840x2160.mov";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 mx-auto max-w-3xl text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          CosmoScope: Explore NASA's Universe
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Your daily dose of astronomical wonders, near-Earth object tracking,
          and more directly from NASA's vast data resources.
        </p>

        <div className="mt-10">
          <Button
            variant="outline"
            size="lg"
            className="text-black"
            asChild
          >
            <Link href="/apod">Start Exploring</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
