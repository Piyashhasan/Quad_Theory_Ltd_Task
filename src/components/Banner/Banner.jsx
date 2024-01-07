import bannerImg from "../../assets/img/banner.png";

const Banner = () => {
  return (
    <div className="my-10 sm:container sm:my-16">
      {/* --- for mobile device banner start --- */}
      <div className="sm:hidden">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#11263C] leading-normal">
            Deliver Food To Your Door Step |
          </h1>
          <p className="mt-5 text-sm text-[#9BA3AC]">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="bg-cover bg-center bg-[#FD9460] rounded-3xl mt-10 h-44 mx-1">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImg})`,
              height: "230px",
              position: "relative",
              top: "-30%",
            }}
          ></div>
        </div>
      </div>
      {/* --- for mobile device banner end --- */}

      {/* --- for large screen --- */}
      <div className="bg-[#F99F1C] rounded-3xl hidden sm:block">
        <div className="grid grid-cols-2 sm:place-items-center">
          {/* --- banner left part start --- */}
          <div>
            <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">
              Deliver Food To Your <br /> Door Step |
            </h1>
            <p className="mt-5 text-white">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>
          {/* --- banner left part end --- */}

          {/* --- banner right part start --- */}
          <div className="px-10">
            <img src={bannerImg} alt="banner-image" />
          </div>
          {/* --- banner right part end --- */}
        </div>
      </div>
      {/* --- for large screen --- */}
    </div>
  );
};

export default Banner;
