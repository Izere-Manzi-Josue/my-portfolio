import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-6">
      <Link
        href="https://github.com/Izere-Manzi-Josue"
        target="_blank"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaGithub size={24} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/izere-manzi-josue-3b5937401?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaLinkedin size={24} />
      </Link>

      <Link
        href="mailto:izeremanzijosue2@gmail.com"
        target="_black"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <Mail size={24} />
      </Link>
      <Link
        href="https://x.com/Izere_Manzi2"
        target="_black"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaTwitter size={24} />
      </Link>
      <Link
        href="https://www.instagram.com/manzi_izere4"
        target="_black"
        className="text-slate-500 transition hover:text-orange-500 duration-300"
      >
        <FaInstagram size={24} />
      </Link>
    </div>
  );
}
