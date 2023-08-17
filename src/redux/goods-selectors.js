

const getInitGoods = (state) => {
    return state.goods.initGoods;
}

export const getIsFiltered = (state) => {
    return state.goods.isFiltered;
}
export const getInitGoodsSelector=(getInitGoods,(state)=>{
    return state.goods.initGoods;
})

export const getBestSellers = (state) => {
    return state.goods.bestSellers;
}



