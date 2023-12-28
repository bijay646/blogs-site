import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Row } from "antd";

import NewsBanner from "assets/images/blog-banner.jpg";
import BlogCard from "components/BlogCard/BlogCard";
import Layout from "containers/Layout/Layout";
import { getNewsArticles } from "redux/actions/newsActions";

const News = () => {
  const dispatch = useDispatch();
  const newsArticles = useSelector((state) => state.getArticles);
  const { articles, loading, error } = newsArticles;

  const handleChange = (page) => {
    console.log(page);
  };

  useEffect(() => {
    if (!articles.length && !loading) {
      dispatch(getNewsArticles());
    }
  }, []);

  return (
    <Layout>
      <div>
        <div className="relative">
          <img src={NewsBanner} alt="news banner" className="w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
              Global Buzz's Blogs
            </p>
            <p className="text-white hidden sm:block">
              Conversations about things that matter, expert views, and the
              latest happenings around the world. Let's hear from our experts.
            </p>
            <p className="sm:hidden text-[10px] text-white">
              Let's hear from our experts.
            </p>
          </div>
        </div>

        <div className="mt-8 px-3 sm:px-20 lg:px-44 flex flex-col items-center">
          <Row className="my-5">
            {articles?.map((item, i) => (
              <BlogCard item={item} key={i} />
            ))}
          </Row>
          <Pagination
            defaultCurrent={1}
            total={50}
            onChange={(page) => handleChange(page)}
            className="mt-auto mb-5"
          />
        </div>
      </div>
    </Layout>
  );
};

export default News;
