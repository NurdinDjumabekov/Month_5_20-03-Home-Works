import woman from '../assets/noneData/Rectangle 996.png';
import woman2 from '../assets/noneData//Rectangle 996.png';
import colorBig from '../assets/noneData/bigMaterial.png';

const pages = [];

export const listSorting = [
  { id: 1, name: 'по доступным' },
  { id: 2, name: 'по премиальным' },
  { id: 3, name: 'по новым' },
  { id: 4, name: 'по популярным' },
];

export const dataCatalog = [
  {
    id: 1,
    title: 'Реализация',
    description: 'Популярное со скидками до -70%, то что осталось на складах',
    img: woman,
  },
  {
    id: 2,
    title: 'Бестселлер-коллекция',
    description: 'Легендарное, то что в трендах, останется навечно с нами',
    img: woman,
  },
  {
    id: 3,
    title: 'Нью-коллекция',
    description:
      'Новое, то что в хитах, останется ли оно, решать только тебе и твоим близким',
    img: woman,
  },
];

export const texxtSize1 =
  'пожалуйста, перед заказом одежды измерьте свои показатели обхватов “талии”, “груди” и “бёдер”';

export const texxtSize2 =
  ' “обхват талии”, “обхват груди”, “обхват бёдер” — отражен в сантиметрах (см)';

export const list = [
  {
    id: 230,
    price: 1050,
    oldPrice: 0,
    discount: 0,
    discountActive: false,
    material: 'керамика',
    country: 'республика беларусь ',
    articul: 'УТ000000905',
    complect: '9',
    collectionId: 1,
    brandId: 4,
    coatingId: 1,
    saleTypeId: 1,
    factureId: 1,
    photos: [
      {
        createdAt: '2024-08-05T15:45:58.433Z',
        id: 244,
        interier: false,
        main: true,
        productId: 244,
        updatedAt: '2024-08-05T15:45:58.433Z',
        url: 'https://mirplitki.kg/uploads/mini/1695642956.jpg',
      },
    ],
    textureId: null,
    masonryId: 1,
    statusId: 1,
    createdAt: '2024-08-04T09:58:06.608Z',
    updatedAt: '2024-08-04T09:58:06.608Z',
    sizes: [
      {
        sizeId: 1,
        size: {
          id: 1,
          sizeName: '300х600',
        },
      },
    ],
    colors: [
      {
        colorId: 1,
        color: {
          id: 1,
          color: 'серый',
        },
      },
    ],
    collection: {
      collectionName: 'Avalanche',
      brandId: 4,
      brand: {
        productName: 'Керамическая плитка',
      },
    },
    saleType: {
      id: 1,
      type: 'м²',
    },
    texture: null,
    productStatus: {
      id: 1,
      status: 'в наличии',
    },
    coating: null,
    masonry: {
      id: 1,
      masonry_name: 'облицовочная кладка',
    },
  },
  {
    id: 231,
    price: 1050,
    oldPrice: 0,
    discount: 0,
    discountActive: false,
    material: 'керамика',
    country: 'республика беларусь ',
    articul: 'УТ000000904',
    complect: '9',
    collectionId: 1,
    brandId: 4,
    coatingId: 1,
    saleTypeId: 1,
    factureId: 1,
    textureId: null,
    photos: [
      {
        createdAt: '2024-08-05T15:45:58.433Z',
        id: 244,
        interier: false,
        main: true,
        productId: 244,
        updatedAt: '2024-08-05T15:45:58.433Z',
        url: 'https://mirplitki.kg/uploads/mini/1695642956.jpg',
      },
    ],
    masonryId: 1,
    statusId: 1,
    createdAt: '2024-08-04T09:58:08.105Z',
    updatedAt: '2024-08-04T09:58:08.105Z',
    sizes: [
      {
        sizeId: 1,
        size: {
          id: 1,
          sizeName: '300х600',
        },
      },
    ],
    colors: [
      {
        colorId: 2,
        color: {
          id: 2,
          color: 'белый',
        },
      },
    ],
    collection: {
      collectionName: 'Avalanche',
      brandId: 4,
      brand: {
        productName: 'Керамическая плитка',
      },
    },
    saleType: {
      id: 1,
      type: 'м²',
    },
    texture: null,
    productStatus: {
      id: 1,
      status: 'в наличии',
    },
    coating: null,
    masonry: {
      id: 1,
      masonry_name: 'облицовочная кладка',
    },
  },
];

export const listBasket = [
  {
    codeid: 1,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 2,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
    sale: '2000',
  },
  {
    codeid: 3,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 4,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 5,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
];

export const confidation = 'я ознакомлен(-на) и полностью согласен(-на)';

export const link1 =
  'с условиями доставки товара, с условиями публичной оферты';

export const link2 = ' с условиями обработки персональных данных';

export const listBrands = [
  {
    codeid: 31,
    name: 'Керамическая плитка',
    count: 10,
  },
  {
    codeid: 32,
    name: 'Керамогранитная плитка',
    count: 30,
  },
  {
    codeid: 33,
    name: 'Фасадная плитка',
    count: 5,
  },
  {
    codeid: 34,
    name: 'Плитка для бассейна',
    count: 55,
  },
];

export const listCards = [
  {
    codeid: 1,
    categoryName: 'Подарочная карта',
    count: 3,
  },
];

export const listNavDecor = [
  { link: 'Подтверждение заказа', path: '/basket', active: false },
  { link: 'Оформление заказа', path: '/decor', active: true },
];

export const listNavBasket = [
  { link: 'Подтверждение заказа', path: '/basket', active: true },
];

export const listNavFavourite = [
  { link: 'Пометка', path: '/favourite', active: true },
];

export const listCloth = [
  {
    id: 1,
    productName: 'Avalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'в наличии',
    sum: '1050 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
    listWords: ['облицовочная', 'напольная', 'декор', 'с эффектом — baby skin'],
  },

  {
    id: 2,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
    listWords: ['облицовочная', 'напольная', 'напольная', 'декор'],
  },

  {
    id: 3,
    productName: 'Panamance',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: '1000',
    oldPrice: '5000',
    info: 'ограниченная коллекция',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 4,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 5,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 6,
    productName: 'Avalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: '1000',
    oldPrice: '5000',
    info: 'в наличии',
    sum: '1050 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },
];

export const listMenu = [
  { id: 1, name: 'о компании' },
  { id: 2, name: 'доставка и оплата' },
  { id: 3, name: 'подарочная карта' },
  { id: 4, name: 'партнерская программа' },
  { id: 5, name: 'рекламная кампания' },
  { id: 6, name: 'контактная информация' },
];

const errText = 'необходимо заполнить';
const errTextNum = 'необходимо правильно заполнить номер';

export const defaultInputsDecor = {
  name: { text: '', error: false, errText },
  // firstName: { text: '', error: false, errText },
  // lastName: { text: '', error: false, errText },
  num: { text: '', error: false, errText: errTextNum },
  email: { text: '', error: false, errText: 'введите корректный email' },
  deliv: { text: '', error: false, errText: errText },
  deliv_home: { text: '', error: false, errText },
  deliv_home_num: { text: '', error: false, errText },
  checkIfDeliv: false,
  typeDelivery: 0,
  typePay: 0,
};

export const listDelivery = [
  {
    id: 1,
    title: 'самостоятельный вывоз со склада',
    moreInfo: 'Московская обл., г. Подольск, ул. Вишнёвая, д. 11 ',
  },
  { id: 2, title: 'доставка до вашего адреса нашим транспортным средством' },
];

export const listTypePays = [
  { id: 1, title: 'денежными средствами при получении' },
  { id: 2, title: 'платёжным поручением от компании' },
];

export const listWords = [
  'облицовочная',
  'напольная',
  'декор',
  'с эффектом — baby skin',
];

export const listMansoty = [{ id: 18, sizeName: 'облицовочная' }];
