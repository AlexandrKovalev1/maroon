import React, { useEffect} from 'react';
import classes from './Goods.module.css'
import { connect } from 'react-redux';
import { getInitGoodsSelector, getIsFiltered } from '../../../redux/goods-selectors';
import { addProductToRecentl, getInitGoods } from '../../../redux/goodsReducer.ts';
import BlockProducts from '../../common/BlockProducts/BlockProducts';



const Goods = ({ initGoods, getInitGoods, isFiltered, addProductToRecentl, ...props }) => {


    useEffect(() => {
        if (!initGoods.length && !isFiltered) { getInitGoods() };
    }, [initGoods, isFiltered, getInitGoods]);



    let isNothingFound = Boolean(isFiltered && !initGoods.length);

    return (
        <React.Fragment>
            {isNothingFound && <section className={classes.message__block} >
                <span>
                    Ничего не найдено 🙈
                </span>
            </section>}

            {!isNothingFound && <BlockProducts
                scrollSetting={true}
                initArr={initGoods}
                countItemsOnPage={12}
                onClickFunc={addProductToRecentl}
            />}
        </React.Fragment>
    )
}

let mapStateToProps = (state) => ({
    initGoods: getInitGoodsSelector(state),
    isFiltered: getIsFiltered(state),
})

export default connect(mapStateToProps, {
    getInitGoods, addProductToRecentl
})(Goods);