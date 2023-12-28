import { CalendarOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate(`/blogdetails/${item.title}`, { state: item });
  };

  return (
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
