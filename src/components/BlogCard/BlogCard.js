import { CalendarOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { useNavigate } from "react-router-dom";

import Skeleton from "react-loading-skeleton";

const BlogCard = ({ item, loading }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate(`/blogdetails/${item.title}`, { state: item });
  };

  return loading ? (
    <Col pan={24} md={12} xl={8} className="box-border py-5 px-0 md:px-5">
      <div className="shadow h-full flex flex-col">
        <div className="h-40 overflow-hidden w-full">
          <Skeleton count={4} height={160} width={"100%"} />
        </div>
        <div className="px-4 pb-5 flex flex-col flex-grow">
          <div className="flex justify-between my-2">
            <Skeleton count={1} width={80} />
            <Skeleton count={1} width={80} />
          </div>
          <Skeleton count={1} height={15} />
          <Skeleton count={1} height={45} />
          <Skeleton count={1} height={25} className="mt-5" />
        </div>
      </div>
    </Col>
  ) : (
    <Col span={24} md={12} xl={8} className="box-border py-5 px-0 md:px-5">
      <div className="shadow-xl border hover:shadow-md h-full flex flex-col">
        <div className="h-40 overflow-hidden w-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-contain"
          />
        </div>
        <div className="px-4 pb-5 flex flex-col flex-grow">
          <div className="flex justify-between my-2">
            <p className="text-gray-500">
              <span className="me-2">
                <CalendarOutlined />
              </span>
              {item.publishedAt}
            </p>
            <p className="text-gray-500">{item.source.name}</p>
          </div>
          <p className="my-3 text-lg font-semibold">{item.title}</p>
          <p className="text-gray-600 mb-3">
            {" "}
            {`${item.description.substring(0, 100)}...`}
          </p>
          <button
            className="mt-auto text-start text-[#176B87] font-medium text-xl w-fit hover:text-[#86B6F6]"
            onClick={handleReadMoreClick}
          >
            READ MORE
          </button>
        </div>
      </div>
    </Col>
  );
};

export default BlogCard;
