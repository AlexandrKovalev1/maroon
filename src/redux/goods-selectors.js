import { createSelector } from "reselect";

const getInitGoods = (state) => {
    return state.goods.initGoods;
}

export const getRecentProducts = (state) => {
    return state.goods.initRecentesGoods;
}

export const getProductFull = (state) => {
    return state.goods.productCard;
}


export const getIsFiltered = (state) => {
    return state.goods.isFiltered;
}

export const getBestSellers = (state) => {
    return state.goods.bestSellers;
}

export const getInitGoodsSelector = createSelector(getInitGoods, (init) => {
    return init;
})







