import { COMPANY_SERVICES } from "consants/companyServices";
import React from "react";
import ServiceCard from "./ServiceCard";

const CompanyServices = () => {
  return (
    <div className="px-3 sm:px-20 lg:px-44 py-7 sm:py-20">
      <p className="text-4xl font-semibold text-center">Our Services</p>
      <div className="flex gap-7 flex-wrap mt-8 justify-center">
        {COMPANY_SERVICES.map((item, i) => (
          <ServiceCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CompanyServices;
