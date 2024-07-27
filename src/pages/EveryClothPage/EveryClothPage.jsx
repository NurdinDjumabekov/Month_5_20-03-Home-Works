///////////hoooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

///////// components
import { NavPath } from "../../common/NavPath/NavPath";
import RecomCloth from "../../components/EveryClothPage/RecomCloth/RecomCloth";
import { Description } from "../../components/EveryClothPage/Description/Description";
import Favourite from "../../common/Menu/Favourite/Favourite";

////////// fns
import { addBasket, getListhistory } from "../../store/reducers/requestSlice";
import { detailedCloth } from "../../store/reducers/requestSlice";
import { changeTemporary } from "../../store/reducers/stateSlice";

///////// helpers
import { sarchImg, sarchImgSeconds } from "../../helpers/sarchImg";
import PriceMeter from "../../components/EveryClothPage/PriceMeter/PriceMeter";
import EveryClothSize from "../../components/EveryClothPage/EveryClothSize/EveryClothSize";
import EveryClothColor from "../../components/EveryClothPage/EveryClothColor/EveryClothColor";
import SkeletonsDetailedPage from "../../common/Skeletons/SkeletonsDetailedPage/SkeletonsDetailedPage";

///////// /style
import "./style.scss";
import { addProdBasket } from "../../store/reducers/serverSaveSlice";

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth } = useSelector((state) => state.requestSlice);
  const { temporary } = useSelector((state) => state.stateSlice);

  const { preloader } = useSelector((state) => state.requestSlice);

  const addProdInBasket = () => {
    ///// добавляю в корзину
    if (temporary?.sizeId == 0) {
      alert("Выберите размер одежды");
    } else if (temporary?.colorId == 0) {
      alert("Выберите цвет одежды");
    } else {
      alert("Товар добавлен в корзину");
      const data = { ...everyCloth, ...temporary, productId: 1 };
      // dispatch(addBasket(data));
      dispatch(addProdBasket(data));
      ///// добавляю в корзину через запрос
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(detailedCloth(id));
    dispatch(getListhistory());
  }, [id]);

  useEffect(() => {
    const type = everyCloth?.saleType?.id;
    dispatch(changeTemporary({ colorId: 0, sizeId: 0, count: 1, type }));
    ///// подставляю state для временного хранения типа размера
  }, [everyCloth]);

  const listImg = sarchImgSeconds(everyCloth?.photos);

  const listNavDecor = [
    { link: everyCloth?.brand?.brandName, path: "/", active: false },
    { link: everyCloth?.coating?.type, path: `/every/${id}`, active: true },
  ];

  if (preloader) {
    return <SkeletonsDetailedPage />;
  }

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={listNavDecor} />

        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              {listImg?.slice(0, 3)?.map((item) => (
                <div key={item?.id}>
                  <img src={item?.url} alt="" />
                </div>
              ))}
            </div>
            <div className="mainImg">
              <img src={sarchImg(everyCloth?.photos)?.url} alt="" />
            </div>
          </div>

          <div className="dopContant">
            <div className="titles">
              <div>
                <span>{everyCloth?.brand?.brandName}</span>
                <b>{everyCloth?.productStatus?.status}</b>
              </div>
              <h5>{everyCloth?.productName}</h5>
            </div>
            <div className="prices">
              <p>{everyCloth?.price} рублей за м²</p>
              <span>
                {everyCloth?.discountActive && <p>{everyCloth?.discount}</p>}
              </span>
            </div>

            <EveryClothSize listSizes={everyCloth?.sizes} />

            <EveryClothColor listColor={everyCloth?.colors} />

            <PriceMeter count={temporary?.count} everyCloth={everyCloth} />

            <div className="actions">
              <button className="choiceCloth" onClick={addProdInBasket}>
                Добавить
              </button>
              <Favourite obj={everyCloth} black={true} />
            </div>
            <Description everyCloth={everyCloth} />
          </div>
        </div>
        <RecomCloth />
      </div>
    </div>
  );
};

export default EveryClothPage;
