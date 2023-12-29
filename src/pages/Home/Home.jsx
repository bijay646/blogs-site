import { useRef } from "react";

import ContactUs from "components/ContactUs/ContactUs";
import Banner from "components/HomeBanner/Banner";
import CompanyServices from "components/Services/CompanyServices";
import Testimonials from "components/Testimonials/Testimonials";
import Layout from "containers/Layout/Layout";

const Home = () => {
  const contactUsRef = useRef(null);

  return (
    <Layout>
      <Banner contactUsRef={contactUsRef} />
      <CompanyServices />
      <ContactUs contactUsRef={contactUsRef} />
      <Testimonials />
    </Layout>
  );
};

export default Home;
