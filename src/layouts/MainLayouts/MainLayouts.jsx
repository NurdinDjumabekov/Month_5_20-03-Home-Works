////// hooks
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

////// style
import "./MainLayouts.scss";

////// components
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu/Menu";
import ModalNumber from "../../components/Modals/ModalNumber/ModalNumber";
import ModalNumConfirm from "../../components/Modals/ModalNumConfirm/ModalNumConfirm";

const MainLayouts = () => {
  const footerRef = useRef(null);

  const { preloader } = useSelector((state) => state.requestSlice);

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mainLayouts">
      <Menu />
      <Outlet />
      {!preloader && <Footer footerRef={footerRef} />}
      <ModalNumber />
      <ModalNumConfirm />
    </div>
  );
};

export default MainLayouts;
