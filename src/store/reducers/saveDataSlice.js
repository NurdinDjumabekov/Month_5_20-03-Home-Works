import { createSlice } from "@reduxjs/toolkit";
import { generateUniqueId } from "../../helpers/generateUniqueId";

const initialState = {
  dataUser: { haveBeen: false, chechAccount: false, token: "" },

  basketList: [], //// корзина
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },

    changeToken: (state, action) => {
      state.dataUser = { ...state.dataUser, token: action.payload };
    },

    /// добавление продуктов в корзину
    addProdBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.basketList?.find(
        (item) =>
          item.id === newItem.id &&
          item.activeColorEvery === newItem.activeColorEvery &&
          item.activeSizeEvery === newItem.activeSizeEvery
      );

      if (existingItem) {
        // Если элемент уже есть в корзине, увеличиваю счетчик
        state.basketList = state.basketList.map((item) =>
          item.id === newItem.id &&
          item.activeColorEvery === newItem.activeColorEvery &&
          item.activeSizeEvery === newItem.activeSizeEvery
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        // Добавляю новый элемент с начальным счетчиком и новым codeid
        state.basketList = [
          ...state.basketList,
          { ...newItem, count: 1, codeid: generateUniqueId() },
        ];
      }
    },

    //// удаение с count(отнимаю по одному)
    removeProdBasket: (state, action) => {
      const { codeid } = action.payload; // Используем codeid для удаления

      // Находим индекс элемента в корзине по codeid
      const existingOrderIndex = state.basketList.findIndex(
        (obj) => obj?.codeid === codeid
      );

      if (existingOrderIndex !== -1) {
        // Получаем элемент корзины по найденному индексу
        const existingOrder = state.basketList[existingOrderIndex];

        if (existingOrder?.count > 0) {
          // Уменьшаем счетчик count на 1
          state.basketList[existingOrderIndex] = {
            ...existingOrder,
            count: existingOrder.count - 1,
          };

          // Если count стал равным 0, удаляем элемент из корзины
          if (existingOrder.count === 1) {
            // Фильтруем массив и удаляем элемент с соответствующим codeid
            state.basketList = state.basketList.filter(
              (item) => item?.codeid !== codeid
            );
          }
        }
      }
    },

    //// прямое уджаление, не считая count сразу удаляет
    deleteProdBasket: (state, action) => {
      const { codeid } = action.payload; // Используем codeid для удаления

      state.basketList = state.basketList?.filter(
        (item) => item?.codeid !== codeid
      );
    },

    clearBasketList: (state, action) => {
      state.basketList = [];
    },
  },
});

export const {
  changeDataUser,
  changeToken,
  addProdBasket,
  removeProdBasket,
  deleteProdBasket,
  clearBasketList,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;