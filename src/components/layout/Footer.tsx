import Link from "next/link";
import {
  Hourglass,
  Twitter,
  Github,
  Linkedin,
  Disc as Discord,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-8 text-gray-300 text-sm border-t border-cyan-900">
      <div className="flex flex-col items-center gap-2">
        <span className="text-base font-medium">
          Developed with ❤️ on Monad by Aneesh & Vikhyath
        </span>
      </div>
    </footer>
  );
};

export default Footer;
