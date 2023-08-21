import { useEffect } from 'react';
import classes from './Goods.module.css'
import { connect } from 'react-redux';
import { getInitGoodsSelector, getIsFiltered, getProducts } from '../../../redux/goods-selectors';
import { filterGoods, getInitGoods, putPageProducts } from '../../../redux/goodsReducer';
import ProductItem from './ProductItem/ProductItem';
import BlockButtonsControl from '../../common/BlockButtonsControl/BlockButtonsControl';




const Goods = ({ initGoods, getInitGoods, isFiltered, pageProducts, putPageProducts, filterGoods, ...props }) => {


console.log('re')

    useEffect(() => {
        if (!initGoods.length && !isFiltered) { getInitGoods() };
    }, [initGoods]);

    let isNothingFound = Boolean(isFiltered && !initGoods.length);



    let products = pageProducts.map(item => <ProductItem
        id={item.id}
        key={item.id}
        coverPicture={item.coverPicture}
        title={item.title}
        price={item.options[0].price}
        volume={item.options[0].volume}
        about={item.smallDescription}
    />)


    return (
        <div className={classes.goods__wrapper}>
            {isNothingFound && <div className={classes.message__block} style={{ minHeight: '380px', width: '100%' }}>
                <span>
                    Ничего не найдено 🙈
                </span>
            </div>}


            {!isNothingFound && <div className={classes.block__goods}>
                {products}
            </div>}

            <BlockButtonsControl

                initStateArr={initGoods}
                countItemsOnPage={12}
                putPageItemsFunc={putPageProducts}
            />


        </div>
    )
}

let mapStateToProps = (state) => ({
    initGoods: getInitGoodsSelector(state),
    isFiltered: getIsFiltered(state),
    pageProducts: getProducts(state),
})

export default connect(mapStateToProps, { getInitGoods, putPageProducts, filterGoods })(Goods);