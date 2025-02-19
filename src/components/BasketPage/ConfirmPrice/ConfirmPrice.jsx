////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import money from '../../../assets/icons/money.svg';
import truck from '../../../assets/icons/truck.svg';

////// style
import "./style.scss";

////// helpers
import { sumTotalBasket } from "../../../helpers/SumTotalBasket";

const ConfirmPrice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { basketList } = useSelector((state) => state.serverSaveSlice);

  const nav = () => {
    if (basketList?.length === 0) {
      alert("У вас пустой список");
      navigate("/");
    } else {
      navigate("/decor");
    }
  };

  return (
    <div className="resultAction confirm">
      <p>Итоговая стоимость вашего заказа</p>
      <div className="action">
        <span>{sumTotalBasket(basketList)} руб.</span>
        <button className="choiceCloth" onClick={nav}>
          Подтвердить
        </button>
      </div>
      <div className="moreInfo">
        <img src={money} alt="money" />
        <b>минимальная сумма заказа от 10000 руб.</b>
      </div>
      <div className="moreInfo">
        <img src={truck} alt="truck" />
        <b>бесплатная доставка заказа от 20000 руб.</b>
      </div>
    </div>
  );
};

export default ConfirmPrice;
