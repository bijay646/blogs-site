import BannerImage from "assets/icons/title-section.svg";

const Banner = () => {
  return (
    <div className="md:pt-14 pt-4 bg-[#EEF5FF] px-3 sm:px-20 lg:px-44 ">
      <div className="flex justify-center items-center gap-6 xl:flex-row flex-col-reverse">
        <div className="flex justify-center flex-col items-center xl:w-1/2">
          <p className="font-semibold text-lg mb-8 text-[#12243a] text-center">
            Software alchemy turning ideas into award-winning reality.
          </p>
          <p className="sm:text-6xl text-5xl text-center text-[#176B87] font-medium">
            We’re a global software engineering company making success stories
            for over 25 years.
          </p>
          <button className="hover:bg-[#176B87] hover:text-white px-7 py-3  my-9 border border-[#176B87]">
            Book Your Free Consultation
          </button>
        </div>
        <div className="xl:w-2/5 h-1/2">
          <img src={BannerImage} alt="banner" width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
