import Banner from "components/HomeBanner/Banner";
import CompanyServices from "components/Services/CompanyServices";
import Layout from "containers/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <CompanyServices />

    </Layout>
  );
};

export default Home;
