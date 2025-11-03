import Filmicon from "../_icons/Filmicon";
import Filmtitle from "../_icons/Filmtitle";
import Moonicon from "../_icons/Moonicon";
import Searchicon from "../_icons/Searchicon";
import { Genre } from "../_components/Genre";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full min-h-9 p-4 flex justify-between mb-6 pl-20 pr-20">
      <Link
        href="/"
        className="flex gap-2 items-center cursor-pointer
      hover:opacity-80 transition"
      >
        <div className="w-[18px] h-[19px]">
          <Filmicon />
        </div>
        <div className="w-16 h-5 flex items-center">
          <Filmtitle />
        </div>
      </Link>
      <div className="flex w-[488px] min-h-9 gap-4">
        <div className="w-[97px] border flex gap-8 rounded-md border-[#e4e4e7] py-1 pr-4 pl-4">
          <Genre />
        </div>

        <div className="flex items-center border rounded-md border-[#e4e4e7] w-[379px] min-h-9 gap-2 px-2">
          <Searchicon />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none"
          />
        </div>
      </div>
      <div className="border w-9 min-h-9 flex items-center rounded-md justify-center">
        <Moonicon />
      </div>
    </div>
  );
};
