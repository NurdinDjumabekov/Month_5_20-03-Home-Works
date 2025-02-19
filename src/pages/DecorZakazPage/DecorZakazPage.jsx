//////// hooks
import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/////// components
import Promocode from '../../components/BasketPage/BasketPage/Promocode';
import ConfirmPrice from '../../components/BasketPage/ConfirmPrice/ConfirmPrice';
import CheckUser from '../../components/CheckUser/CheckUser';
import UserInputs from '../../components/DecorPage/UserInputs/UserInputs';
import UserAddresInputs from '../../components/DecorPage/UserAddresInputs/UserAddresInputs';
import DeliveryPay from '../../components/DecorPage/DeliveryPay/DeliveryPay';
import GoodSendData from '../../components/DecorPage/GoodSendData/GoodSendData';
import { NavPath } from '../../common/NavPath/NavPath';

/////// fns
import { setError } from '../../store/reducers/stateSlice';

/////// helpers
import { listNavDecor } from '../../helpers/LodalData';
import { tranformNumber } from '../../helpers/tranformNumber';
import { validateEmail, validationSendData } from '../../helpers/validation';

/////// style
import './style.scss';

const DecorZakazPage = () => {
  const refAddres = useRef(null);
  const dispatch = useDispatch();

  const [good, setGood] = useState(false);

  const { inputsDecor } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    if (!inputsDecor?.checkIfDeliv) {
      alert('Ознакомьтесь с условиями доставки');
      return;
    }
    if (inputsDecor?.typePay == 0) {
      alert('Выберите способ оплаты');
      return;
    }
    if (inputsDecor?.typeDelivery == 0) {
      alert('Выберите способ доставки');
      return;
    }

    // navigate("/");
    // alert("Ваш заказ успешно был оформлен");

    const validations = {
      name: inputsDecor?.name?.text?.length > 1,
      // firstName: inputsDecor?.firstName?.text?.length > 1,
      // lastName: inputsDecor?.lastName?.text?.length > 1,
      num: tranformNumber(inputsDecor?.num?.text)?.length === 11,
      email: validateEmail(inputsDecor.email.text),
      deliv: inputsDecor?.deliv?.text?.length > 1,
      deliv_home: inputsDecor?.deliv_home?.text?.length > 1,
      deliv_home_num: inputsDecor?.deliv_home_num?.text?.length > 1,
    };

    Object.keys(validations).forEach((key) => {
      const isValid = validations[key];
      if (!isValid) {
        dispatch(setError({ key, error: true }));
        window.scrollTo({ top: 250, behavior: 'smooth' });
        setTimeout(() => {
          dispatch(setError({ key, error: false }));
        }, 3000);
      } else {
        setGood(true);
        window.scrollTo({ bottom: 0, behavior: 'smooth' });
      }
    });
  };

  return (
    <div className={`decor`}>
      <div className="container">
        <div className={`decor__inner ${good && 'shadowSend'}`}>
          <NavPath list={listNavDecor} />
          <CheckUser />
          <form onSubmit={sendData}>
            <UserInputs refAddres={refAddres} />
            <UserAddresInputs refAddres={refAddres} />
            <DeliveryPay />
          </form>
          {/* <div className="actionsDecor">
            <Promocode />
            <ConfirmPrice />
          </div> */}
        </div>
        {true && <GoodSendData />}
      </div>
    </div>
  );
};

export default DecorZakazPage;
