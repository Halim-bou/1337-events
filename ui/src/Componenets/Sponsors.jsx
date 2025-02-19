import { Image } from "@heroui/react";
import th_logo from '../assets/1337.jpg';
import um6p from '../assets/um6p.png';
import youcode from '../assets/youcode.jpeg'

export default function Sponsors() {
  const sponsors = [
    th_logo,
    um6p,
    youcode,
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
