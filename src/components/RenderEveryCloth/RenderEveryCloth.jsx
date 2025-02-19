/////// hooks
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

////// style
import "./style.scss";

////// img
import { sarchImg } from "../../helpers/sarchImg";

////// components
import Favourite from "../../common/Menu/Favourite/Favourite";

const RenderEveryCloth = ({ item }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const clickBtn = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${item?.id}`);
    }
  };

  // console.log(item, 'item');
  // console.log(sarchImg(item?.photos), 'sarchImg(item?.photos)?.url');

  return (
    <li className="every">
      <Favourite obj={item} disable={true} />
      <div onClick={clickBtn} className="favourite"></div>
      <div className="mainCard">
        <div className="mainCard__inner">
          <div className="mainImg" onClick={clickBtn}>
            <img src={sarchImg(item?.photos)?.url} alt="img" />
            <button className="lookDetailed">Посмотреть</button>
          </div>
          <h5>{item?.productStatus?.status}</h5>
        </div>
        <div className="mainCard__content">
          <div className="mainCard__content__title" onClick={clickBtn}>
            <h6>{item?.price} рублей за м²</h6>
            <div>{item?.discountActive && <p>-{item?.discount}%</p>}</div>
          </div>
          <span>{item?.collection?.brand?.productName}</span>
          <div className="mainCard__content__decription">
            <p onClick={clickBtn}>{item?.collection?.collectionName}</p>
            <b>{item?.complect}.</b>
          </div>
        </div>
      </div>
      {/* ////// для адаптивки */}
      <div className="clickAdaptive" onClick={clickBtn}></div>
    </li>
  );
};

export default RenderEveryCloth;
