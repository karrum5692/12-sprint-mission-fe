import React from "react";
import * as imgAssets from "../imgs/imgController.js";
import { Link, useLocation } from "react-router-dom";
import "../css/mainheader.css";

const MainHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // 헤더 메뉴 보여줄 페이지만 따로 설정하는 부분
  const showNavPaths = ["/forum", "/items"];
  const shouldShowNav = showNavPaths.some((path) =>
    currentPath.startsWith(path)
  );

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <div className="header__left">
            <Link to="/" className="header__logo">
              <img src={imgAssets.pandaIcon} alt="판다마켓 로고" />
              <span className="logo__title">판다마켓</span>
            </Link>

            {shouldShowNav && (
              <div className="header__menu">
                <Link
                  to="/forum"
                  className={`header__menu-link ${
                    currentPath.startsWith("/forum") ? "active" : ""
                  }`}
                >
                  자유게시판
                </Link>
                <Link
                  to="/items"
                  className={`header__menu-link ${
                    currentPath.startsWith("/items") ? "active" : ""
                  }`}
                >
                  중고마켓
                </Link>
              </div>
            )}
          </div>

          <Link to="/login" className="header__login">
            로그인
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
