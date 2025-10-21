import Filmicon from "../_icons/Filmicon";
import Filmtitle from "../_icons/Filmtitle";
import Genreicon from "../_icons/Genreicon";
import Moonicon from "../_icons/Moonicon";
import Searchicon from "../_icons/Searchicon";

export const Header = () => {
  return (
    <div className="w-<fraction> min-h-[59px] bg-[#ffffff] pl-120 pr-120 ">
      <div className="w-<fraction> min-h-[36px] p-[16px] flex justify-between">
        <div className="flex gap-[8px] items-center">
          <div className="w-[18px] h-[19px]">
            <Filmicon />
          </div>
          <div className="w-[64px] h-[20px] flex items-center">
            <Filmtitle />
          </div>
        </div>

        <div className="flex  w-[488px] min-h-[36px] gap-4">
          <div className="w-[97px] min-h-[36px] border flex gap-[8px] rounded-md border-[#e4e4e7] py-1 pr-4 pl-4 ">
            <button className="flex gap-2 items-center">
              <Genreicon />
              Genre
            </button>
          </div>

          <div className="flex items-center border rounded-md border-[#e4e4e7] w-[379px] min-h-[36px] gap-[8px] px-2 ">
            <Searchicon />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
          </div>
        </div>
        <div className="border w-[36px] min-h-[36px] flex items-center rounded-md justify-center">
          <Moonicon />
        </div>
      </div>
    </div>
  );
};
