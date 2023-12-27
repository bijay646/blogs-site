import { ArrowRightOutlined } from "@ant-design/icons";

import chatIcon from "assets/icons/icons-chat-48.png";
import mobileIcon from "assets/icons/icons-mobile.png";
import robotIcon from "assets/icons/icons-robot.png";
import uxIcon from "assets/icons/icons-ux.png";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const icon = {
    chat: chatIcon,
    smartphone: mobileIcon,
    robot: robotIcon,
    palette: uxIcon,
  }[item.iconName];

  return (
    <div className="p-5 shadow-lg border hover:shadow-sm rounded-md w-full sm:w-80 flex flex-col">
      <div>
        <img src={icon} alt={item.title} className="w-12 h-12 my-4" />
        <p className="font-medium mb-3">{item.title}</p>
        <p className="text-gray-400">{item.description}</p>
      </div>
      <Link className="mt-auto text-[#86B6F6]">
        Read more <ArrowRightOutlined className="ms-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
