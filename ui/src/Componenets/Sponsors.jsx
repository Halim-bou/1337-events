import { Image } from "@heroui/react";

export default function Sponsors() {
  const sponsors = [
    "https://heroui.com/images/hero-card.jpeg",
    "https://heroui.com/images/hero-card.jpeg",
    "https://heroui.com/images/hero-card.jpeg",
    "https://heroui.com/images/hero-card.jpeg",
    "https://heroui.com/images/hero-card.jpeg",
    "https://heroui.com/images/hero-card.jpeg",
  ];

  return (
    <div className="w-full py-10">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map((src, index) => (
          <div key={index} className="w-32 h-32 flex items-center justify-center p-2 bg-white shadow-lg rounded-lg">
            <Image alt={`Sponsor ${index + 1}`} src={src} className="object-contain max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}