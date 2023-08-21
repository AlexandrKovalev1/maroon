import { createSelector } from "reselect";



const getInitGoods = (state) => {
    return state.goods.initGoods.allInitGoods;
}

const getPageProducts = (state) => {
    return state.goods.initGoods.pageInitGoods;
}

export const getProducts = createSelector(getPageProducts, (products) => products)

export const getIsFiltered = (state) => {
    return state.goods.isFiltered;
}
export const getInitGoodsSelector = createSelector(getInitGoods, (init) => {
    return init;
})

export const getBestSellers = (state) => {
    return state.goods.bestSellers;
}



