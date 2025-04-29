import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeInfo({feat}) {
  const imageUrl =
    "/breathtaking-shot-sea-dark-purple-sky-filled-with-stars.jpg";

  return (
    <section className="text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="w-full aspect-video md:aspect-square relative overflow-hidden rounded-lg shadow-lg">
            {" "}
            <Image
              src={feat.imageUrl}
              alt="Vibrant cosmic nebula with swirling clouds of gas and dust, revealing stars within, set against the darkness of space." // نص بديل وصفي!
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>

          {/* عمود النص */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {feat.title}
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {feat.description}
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              These celestial clouds come in various forms: emission nebulae
              glow brightly as nearby stars energize their gases, reflection
              nebulae scatter the light of nearby stars appearing blue, and dark
              nebulae obscure the light from objects behind them. Studying
              nebulae helps astronomers understand the lifecycle of stars and
              the chemical evolution of galaxies.
            </p>
            {/* يمكنك إضافة زر هنا إذا أردت */}
            <Link href="/explore/nebulae">
              <Button variant="outline" className="mt-4 text-black">
                {feat.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
