import Layout from "containers/Layout/Layout";
import AboutUsBanner from "assets/images/aboutusbanner.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <div className="my-12 px-3 sm:px-20 lg:px-44 flex flex-col items-center">
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <div className="xl:w-1/3 lg:w-1/2 w-full">
            <div className="gap-6 mb-6">
              <div className="w-20 bg-blue-600 h-1 rounded-full"></div>
              <span className="text-sm">Company Profile</span>
            </div>
            <p className="font-semibold text-4xl my-5">
              Create A Strong Business Presence
            </p>
            <p className="text-gray-500">
              Combining our unrivaled specialism in specific digital activities
              with a strategic & differentiated approach, Developers Point is
              able to meet the increasingly complex needs of clients in an
              effortless yet productive manner in the constantly evolving
              digital landscape.
            </p>
            <button className="bg-[#86B6F6] px-4 py-3 my-3 rounded-full">
              See more
            </button>
          </div>
          <div className="xl:w-1/2 lg:w-3/4 w-full">
            <img
              src={AboutUsBanner}
              alt="about us"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="my-16 text-center">
          <p className="text-3xl font-medium">
            We Have The Best Team To Provide
          </p>
          <p className="text-sm text-gray-500 my-3">
            Developers Point is headquartered in USA, providing web development,
            mobile application, and machine learning services to clients all
            over the globe.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
