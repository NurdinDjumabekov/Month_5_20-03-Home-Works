import React from 'react';
import './style.scss';
import vk from '../../assets/icons/vk.svg';
import telega from '../../assets/icons/telega.svg';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const m20 =
    pathname?.includes('every') ||
    pathname.includes('favourite') ||
    pathname?.includes('basket');

  const m100 = pathname?.includes('decor');

  return (
    <footer className="footer">
      <div
        className={`footer__container m150 ${m20 && 'm20'} ${m100 && 'm100'} `}
      >
        <div className="footer__main">
          <div className="titleMain">
            <h4>
              <p>Inquadra</p>
              <span>ceramic home</span>
            </h4>
            <div className="imgSocial">
              <div>
                <img src={vk} alt="vk" />
              </div>
              <div>
                <img src={telega} alt="telega" />
              </div>
            </div>
          </div>
          <div className="textInfo">
            <div>
              <p>о компании</p>
              <p>подарочная карта</p>
              <p>партнерская программа</p>
              <p>акционная программа</p>
              <p>контактная информация</p>
            </div>
            <div>
              <p>условия обработки персональных данных</p>
              <p>условия обработки файлов куки</p>
              <p>условия доставки товаров</p>
              <p>публичная оферта</p>
            </div>
            <div>
              <span>+7 800 800 10 10</span>
              <span>info@inquadra.ru</span>
            </div>
          </div>
          <div className="textInfo more">
            <div>
              <p>пользовательское соглашение</p>
              <b>2024 ⓒ все права защищены</b>
            </div>
            <div>
              <b>ооо «мегаполис» · огрн: 1205000032192</b>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
