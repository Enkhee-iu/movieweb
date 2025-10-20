

export const Header = () => {
  return (
    <div className="w-[1440px] min-h-[59px] bg-[#ffffff] pr-16 pl-16 ">
      <div className="w-[1280px] min-h-[36px] p-[16px] flex justify-between">
        <div className="flex gap-[8px]">
          <div className="w-[18px] h-[19px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              fill="none"
              viewBox="0 0 18 19"
            >
              <path
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.834 1.167v16.666m8.333-16.666v16.666M.667 9.5h16.667M.667 5.333h4.167M.667 13.667h4.167m8.333 0h4.167m-4.167-8.334h4.167M2.484 1.167h13.033c1.003 0 1.817.813 1.817 1.816v13.034a1.817 1.817 0 0 1-1.817 1.816H2.484a1.817 1.817 0 0 1-1.817-1.816V2.983c0-1.003.813-1.816 1.817-1.816Z"
              />
            </svg>
          </div>
          <div className="w-[64px] h-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 65 13"
              className="w-full h-full"
              fill="none"
            >
              <path
                fill="#4338CA"
                d="M2.216.864H5.25l1.915 7.818H7.3L11.796.864h3.034L12.897 12.5H10.51l1.262-7.574h-.102l-4.25 7.517H5.79L4.04 4.898h-.097L2.67 12.5H.284L2.216.864ZM19.154 12.67c-.89 0-1.627-.19-2.21-.569a3.063 3.063 0 0 1-1.233-1.59c-.235-.682-.279-1.476-.131-2.381.144-.894.443-1.676.898-2.347a4.76 4.76 0 0 1 1.733-1.562c.7-.375 1.49-.563 2.369-.563.886 0 1.621.191 2.205.574.583.379.994.91 1.232 1.59.24.683.285 1.476.137 2.382-.148.89-.451 1.67-.91 2.34a4.873 4.873 0 0 1-1.732 1.569c-.697.37-1.483.556-2.358.556Zm.238-1.875c.41 0 .771-.116 1.086-.347.318-.235.581-.553.79-.955.212-.405.36-.863.443-1.375.083-.503.089-.95.017-1.34-.072-.395-.224-.705-.455-.932-.227-.228-.54-.341-.937-.341-.41 0-.773.117-1.091.352-.319.231-.582.55-.79.955a4.616 4.616 0 0 0-.438 1.38c-.08.5-.085.947-.017 1.341.069.39.218.699.45.926.23.224.545.335.942.335Zm15.25-7.023L30.135 12.5h-2.727l-1.597-8.727h2.466l.773 6.244h.09l2.847-6.244h2.653Zm.103 8.727L36.2 3.773h2.42L37.166 12.5h-2.42Zm2.915-9.864c-.36 0-.657-.119-.892-.358a1.013 1.013 0 0 1-.284-.863c.042-.341.205-.629.489-.864.284-.239.606-.358.966-.358s.653.12.88.358c.228.235.322.523.284.864-.037.333-.198.621-.483.863-.28.239-.6.358-.96.358Zm5.72 10.035c-.895 0-1.635-.182-2.222-.546-.587-.367-1-.886-1.239-1.557-.235-.674-.274-1.471-.12-2.392.152-.898.457-1.685.916-2.364a4.934 4.934 0 0 1 1.738-1.585c.697-.379 1.474-.568 2.33-.568a4.19 4.19 0 0 1 1.562.279c.47.181.86.458 1.17.83.311.366.523.827.637 1.38.118.553.116 1.2-.005 1.943l-.108.665h-7.364l.233-1.5h5.09c.058-.349.035-.658-.067-.926a1.256 1.256 0 0 0-.512-.631c-.238-.155-.532-.233-.88-.233-.357 0-.69.087-1 .261-.311.175-.572.404-.785.688-.208.28-.342.585-.403.915l-.267 1.488c-.076.459-.06.84.045 1.142.11.303.3.53.569.682.269.148.61.222 1.022.222.27 0 .521-.038.756-.114.239-.076.45-.188.636-.335.186-.152.337-.34.455-.563l2.21.148a3.82 3.82 0 0 1-.932 1.41 4.436 4.436 0 0 1-1.505.93c-.584.22-1.237.33-1.96.33Zm9.887-.171.25-1.46 7.164-8.148h-5.835l.341-2.028h8.91l-.245 1.46-7.17 8.148h5.835l-.341 2.028h-8.91Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-[12px] w-[488px] min-h-[36px] gap-4">
          <div className="w-[97px] min-h-[36px] border flex gap-[8px] rounded-md border-[#e4e4e7] py-1 pr-4 pl-4">
           <button className="flex gap-2 items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={5}
    fill="none"
  >
    <path
      stroke="#18181B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1 .5 4 4 4-4"
    />
  </svg>
  Genre
</button>
</div>

      <div className="flex items-center border rounded-md border-[#e4e4e7] w-[379px] min-h-[36px] px-2">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        fill="none"
        className="mr-2"
      >
        <path
          fill="#09090B"
          stroke="#09090B"
          d="M6.934 3.133a4.3 4.3 0 0 1 3.36 6.984l-.28.35 3.343 3.343c.007.007.01.015.01.024l-.01.023a.033.033 0 0 1-.046 0l-3.344-3.344-.35.28a4.3 4.3 0 1 1-2.684-7.66Zm0 .067a4.234 4.234 0 1 0 0 8.467 4.234 4.234 0 0 0 0-8.467Z"
          opacity={0.5}
        />
      </svg>

      
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none"
      />
        </div>
        </div>
         <div >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={41}
        fill="none"
       
      >
        <g filter="url(#a)">
          <path
            fill="#fff"
            d="M2 11.5c0-5.523 4.477-10 10-10h16c5.523 0 10 4.477 10 10v16c0 5.523-4.477 10-10 10H12c-5.523 0-10-4.477-10-10v-16Z"
            shapeRendering="crispEdges"
          />
          <path
            stroke="#E4E4E7"
            d="M12 2h16a9.5 9.5 0 0 1 9.5 9.5v16A9.5 9.5 0 0 1 28 37H12a9.5 9.5 0 0 1-9.5-9.5v-16A9.5 9.5 0 0 1 12 2Z"
            shapeRendering="crispEdges"
          />
          <path
            stroke="#18181B"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13.5a4.243 4.243 0 0 0 6 6 6 6 0 1 1-6-6Z"
          />
        </g>
        <defs>
          <filter
            id="a"
            width={40}
            height={40}
            x={0}
            y={0.5}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
      </div>
    </div>
  );
};
