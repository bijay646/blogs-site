import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import CompanyLogo from "components/CompanyLogo/CompanyLogo";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="py-4 px-3 sm:px-20 shadow-sm border">
      <nav className="flex justify-between">
        <Link to="/">
          <CompanyLogo />
        </Link>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-x-3 h-full text-lg">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-[black]"
                }
              >
                About Us
              </NavLink>
            </li>

            <li className="me-5">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-[black]"
                }
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          onClick={toggle}
          className="flex items-center sm:hidden"
          type="button"
        >
          <svg viewBox="0 0 100 65" width="30" height="30">
            <rect y="0" width="100" height="5" />
            <rect y="30" width="100" height="5" />
            <rect y="60" width="100" height="5" />
          </svg>
        </div>
      </nav>
      <Drawer
        title={
          <div className="flex justify-between">
            <CompanyLogo />
            <CloseOutlined onClick={toggle} />
          </div>
        }
        placement="right"
        onClose={toggle}
        open={isDrawerOpen}
        width="100%"
        closable={false}
      >
        <ul className="flex flex-col gap-y-2 text-xl">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-[black]"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className="me-5">
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-[black]"
              }
            >
              News
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
