import ContactUs from "components/ContactUs/ContactUs";
import Banner from "components/HomeBanner/Banner";
import CompanyServices from "components/Services/CompanyServices";
import Layout from "containers/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <CompanyServices />
      <ContactUs />
    </Layout>
  );
};

export default Home;
