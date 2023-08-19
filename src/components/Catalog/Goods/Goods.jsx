import { useEffect } from 'react';
import Icon from '../../common/Icon';
import classes from './Goods.module.css'
import { connect } from 'react-redux';
import { getInitGoodsSelector, getIsFiltered, getProducts } from '../../../redux/goods-selectors';
import { getInitGoods, putPageProducts } from '../../../redux/goodsReducer';
import usePageSwitcher from '../../common/hooks/usePageSwitcher';
import ProductItem from '../ProductItem/ProductItem';




const Goods = ({ initGoods, getInitGoods, isFiltered,pageProducts,putPageProducts }) => {
    let lastPage;
    let countGoodsOnPage = 12;
    let countPages = lastPage = Math.ceil(initGoods.length / countGoodsOnPage);

    let [currentPage, nextDisabled,
        prevDesabled, incremented,
        decremented] = usePageSwitcher(lastPage)

        console.log(currentPage)

    useEffect(() => {
        if (!initGoods.length && !isFiltered) { getInitGoods() };
        putPageProducts(currentPage, countGoodsOnPage);
        console.log('effect')
    }, [initGoods,currentPage]);

    let isNothingFound = Boolean(isFiltered && !initGoods.length);

    let classLastPage = currentPage === lastPage ? 'bold' : "normal";

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



            <div className={classes.block__buttons__control}>
                <div className={classes.page__info}>
                    <span>
                        {currentPage}
                    </span>
                    <span className={classes.line}>
                    </span>
                    <span className={classes[classLastPage]}>
                        {countPages}
                    </span>
                </div>
                <div className={classes.block__page__switching__buttons}>

                    <button className={classes.button} disabled={prevDesabled} onClick={decremented}>
                        <Icon id={'arrowLeft'} className={classes.button__arrow} />
                    </button>

                    <button className={classes.button} disabled={nextDisabled} onClick={incremented}>
                        <Icon id={'arrowRight'} className={classes.button__arrow} />
                    </button>

                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    initGoods: getInitGoodsSelector(state),
    isFiltered: getIsFiltered(state),
    pageProducts: getProducts(state),
})

export default connect(mapStateToProps, { getInitGoods,putPageProducts })(Goods);