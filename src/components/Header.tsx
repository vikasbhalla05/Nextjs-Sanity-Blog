import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-5 sm:px-10 py-5">
      <div className="flex items-center justify-start px-0 sm:p-3 space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={35}
            width={35}
            alt="profile"
            src="https://i.ibb.co/cFhbmYL/Profile.jpg"
          />
        </Link>

        <h1 className="sm:p-3">Vikas Bhalla</h1>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/vikasbhalla05/"
          className="flex items-center justify-start px-0 sm:p-3 space-x-2 text-[#00A0DC]"
        >
          <LinkIcon className="h-6 w-6 mr-2" />
          LinkedIn
        </Link>
      </div>
    </header>
  );
};

export default Header;
