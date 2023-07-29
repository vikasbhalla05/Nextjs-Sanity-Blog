import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="m-4">
        <Link href="/" className="text-[#6254f3] flex item-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#6254f3]" />
          Go To The Website
        </Link>
      </div>

      {/* to keep the default navbar items */}
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
