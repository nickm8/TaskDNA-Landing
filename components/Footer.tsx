import { Github } from "lucide-react";
import Link from "next/link";

const GithubLink = process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/";

const CardFooter = () => {
  return (
    <div className="pt-4 space-y-2">
      {/* Social Media */}
      <div className="flex items-center gap-2">
        <Link
          href={GithubLink}
          target="_blank"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-600 shadow transition duration-200 ease-linear hover:bg-gray-100 hover:text-gray-500 hover:shadow-none"
        >
          <Github size={22} />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
