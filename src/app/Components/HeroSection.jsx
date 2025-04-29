// components/SimpleHero.js (أو في pages/index.js)
import Link from "next/link";
import { Button } from "@/components/ui/button"; // اختياري للزر

const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      {/* حاوية لتوسيط المحتوى وتحديد العرض الأقصى */}
      <div className="mx-auto max-w-3xl text-center">
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          CosmoScope: Explore NASA's Universe
        </h1>

        {/* النص الفرعي / الوصف */}
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Your daily dose of astronomical wonders, near-Earth object tracking,
          and more directly from NASA's vast data resources.
        </p>

        {/* --- زر اختياري --- */}
        {/* يمكنك حذف هذا الـ div بالكامل إذا كنت لا تريد أي أزرار */}
        <div className="mt-10">
          <Button
            variant="outline"
            size="lg"
            className="text-black "
            asChild
          >
            <Link href="/apod">
              {" "}
              {/* أو أي رابط بداية مفضل */}
              Start Exploring
            </Link>
          </Button>
        </div>
        {/* --- نهاية الزر الاختياري --- */}
      </div>
    </section>
  );
};

export default HeroSection;
