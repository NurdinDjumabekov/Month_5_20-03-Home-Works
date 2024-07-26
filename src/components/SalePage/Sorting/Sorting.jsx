import React from "react";
import { useDispatch, useSelector } from "react-redux";

///// style
import "./style.scss";

///// imgs
import krestWhite from "../../../assets/icons/krestWhite.svg";

///// fns

import { getListCategs } from "../../../store/reducers/requestSlice";

////// components
import Selects from "../../../common/Selects/Selects";

///// helpers
import { listSorting } from "../../../helpers/LodalData";

const Sorting = () => {
  const dispatch = useDispatch();

  const { activeBrands, activeSize } = useSelector((state) => state.stateSlice);
  const { activeCateg, activeColor } = useSelector((state) => state.stateSlice);
  const { activePrice } = useSelector((state) => state.stateSlice);

  const reset = () => {};

  const onChnage = (key, name, id) => {
    // console.log(key, name, id);
    // dispatch(activeSortingFN({ name, id }));

    const { categId, type } = activeCateg;
    const obj1 = { categId, type, activeSize, sorting: id };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max, activeBrands };
    // dispatch(getListCategs({ ...obj1, ...obj2, ...obj3 }));
  };

  const check = activeColor == 0 && activeSize.up == 0 && activeSize.down == 0;

  return (
    <div className="sorting">
      {check ? (
        <div />
      ) : (
        <div className="filter" onClick={reset}>
          <p>сбросить фильтр</p>
          <button>
            <img src={krestWhite} alt="x" />
          </button>
        </div>
      )}
      <div className="selectFilter">
        <Selects
          list={listSorting}
          title={""}
          initText={"сортировать по"}
          onChnage={onChnage}
          nameKey={"name"}
        />
      </div>
    </div>
  );
};

export default Sorting;