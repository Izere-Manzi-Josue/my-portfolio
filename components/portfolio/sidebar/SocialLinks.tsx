import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-6">
      <Link
        href="https://github.com/yourusername"
        target="_blank"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaGithub size={24} />
      </Link>

      <Link
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaLinkedin size={24} />
      </Link>

      <Link
        href="mailto:you@example.com"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <Mail size={24} />
      </Link>
      <Link href="/" className="text-slate-500 transition hover:text-orange-500 duration-300">
        <FaTwitter size={24} />
      </Link>
      <Link href="/" className="text-slate-500 transition hover:text-orange-500 duration-300">
        <FaInstagram size={24} />
      </Link>
    </div>
  );
}
