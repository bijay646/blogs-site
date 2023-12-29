import ContactUs from "components/ContactUs/ContactUs";
import Banner from "components/HomeBanner/Banner";
import CompanyServices from "components/Services/CompanyServices";
import Testimonials from "components/Testimonials/Testimonials";
import Layout from "containers/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <CompanyServices />
      <ContactUs />
      <Testimonials />
    </Layout>
  );
};

export default Home;
