import { useLocation } from "react-router-dom";

import Layout from "containers/Layout/Layout";

const BlogDetail = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <Layout>
      <div className="my-10 md:my-24 px-3 sm:px-20 lg:px-44 ">
        <p className="text-gray-500 text-sm mb-4 ms-1">
          Published {item.publishedAt}
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl md:w-2/3 font-semibold">
          {item.title}
        </p>
        <p className="my-4 text-gray-500">{item.source.name}</p>
        <div className="bg-red-500 w-20 h-1.5 my-4"></div>
        <p className="mb-4 sm:mb-9 text-xl sm:text-2xl text-gray-700">
          {item.description}
        </p>
        <p className="mb-8 text-gray-500 ">{item.content}</p>
        <div className="w-full my-6">
          <img src={item.image} className="w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
