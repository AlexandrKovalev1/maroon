import { createSelector } from "reselect";

 const getGoods = (state) => {
    return state.goods.allGoods;
}

 const getFilteredGoods = (state) => {
    return state.goods.filteredGoods;
}

export const getFormatedGoods = createSelector(getGoods, getFilteredGoods,
    (allGoods, filteredGoods) => {
        if (filteredGoods.length > 0) {
            return filteredGoods
        } else {
            return allGoods
        }
    });


