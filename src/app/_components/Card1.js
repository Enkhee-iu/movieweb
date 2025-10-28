import * as React from "react";

export const Card1 = ({ title, rating }) => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: "url(/HeroCard.jpg)" }}
        className="relative bg-cover bg-center w-full h-[750px]"
      >
        <div className="absolute left-[159px] top-[178px] w-[404px] h-[264px] gap-4 font-inter text-white">
          <div>
            <h3 className="text-base font-normal">Now Playing:</h3>
            <h1 className="font-bold text-4xl">Wicked</h1>

            <p className="text-sm mt-1 flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              {typeof rating === "number" ? rating.toFixed(1) : "N/A"}/10
            </p>
          </div>

          <div>
            <p className="mt-4">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>

            <button className="flex justify-center cursor-pointer items-center gap-2 w-[145px] mt-4 h-10 text-black bg-[#f4f4f5] rounded-md">
              <svg
                width={11}
                height={13}
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5L9.83333 6.5L0.5 12.5V0.5Z"
                  stroke="#18181B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
