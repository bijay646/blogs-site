import {
  CopyrightOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-3 sm:px-20 lg:px-44 py-10 bg-[#176B87] flex flex-col">
      <div className="flex justify-between items-center w-full">
        <p className="text-3xl font-semibold text-white">Global Buzz</p>
        <div className="flex gap-x-2">
          <FacebookOutlined className="text-white text-[20px]" />
          <LinkedinOutlined className="text-white text-[20px]" />
          <TwitterSquareFilled className="text-white text-[20px]" />
        </div>
      </div>
      <div className="flex gap-x-8 gap-y-5 text-white justify-between my-6 flex-col md:flex-row">
        <div className="w-4/5 md:w-1/3">
          <p>
            Global Buzz implements advanced digital technologies in areas that
            are crucial to meeting your business objectives. Connect with us for
            details.
          </p>
          <p className="text-sm italic mt-3">buzzworld@gmail.com</p>
        </div>
        <div className="flex justify-between gap-x-10 gap-y-4 flex-col sm:flex-row">
          <ul className="text-xl">
            <li>
              <Link className="hover:underline">Our Expertise</Link>
            </li>
            <li>
              <Link className="hover:underline">Case Studies</Link>
            </li>
            <li>
              <Link className="hover:underline">Contact Us</Link>
            </li>
          </ul>
          <div>
            <p>+98745345345</p>
            <p>Sinamangal, Kamal Chowk</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-sm mt-5">
        <CopyrightOutlined /> 2023 Copyright All right Reserved
      </p>
    </div>
  );
};

export default Footer;
