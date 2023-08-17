import { useEffect, useState } from 'react';
import Icon from '../../common/Icon';
import classes from './Goods.module.css'
import { connect } from 'react-redux';
import { getInitGoodsSelector, getIsFiltered } from '../../../redux/goods-selectors';
import { getInitGoods } from '../../../redux/goodsReducer';

const Goods = ({ initGoods, getInitGoods, isFiltered }) => {
    let countGoodsOnPage = 12;
    let desableIncriment = false;
    let desableDecrement = false;
    let countPages = Math.ceil(initGoods.length / countGoodsOnPage);

    console.log(desableIncriment);

    let [currentPage, setCurrentPage] = useState(1);
    const incrementPage = (e) => {
        if (currentPage < countPages) {
            desableIncriment = false;
            return setCurrentPage(currentPage + 1)
        } else {
            return desableIncriment = true;
        }
    }

    const decrementPage = () => {
        if (currentPage > 1) {
            desableDecrement = false;
            return setCurrentPage(currentPage - 1)
        } else {
            return desableDecrement = true;
        }
    }

    let isNothingFound = Boolean(isFiltered && !initGoods.length);



    console.log(initGoods)
    useEffect(() => {
        if (!initGoods.length && !isFiltered) getInitGoods();
        setCurrentPage(1);
    }, [initGoods, desableDecrement, desableDecrement])

    return (
        <div className={classes.goods__wrapper}>
            <div className={classes.block__goods}>
                {isNothingFound && <div className={classes.message__block}>
                    <span>
                        Ничего не найдено 🙈
                    </span>
                </div>}
                {!isNothingFound}
            </div>
            <div className={classes.block__buttons__control}>
                <div className={classes.page__info}>
                    <span>
                        {currentPage}
                    </span>
                    <span className={classes.line}>
                    </span>
                    <span>
                        {countPages}
                    </span>
                </div>
                <div className={classes.block__page__switching__buttons}>

                    <button className={classes.button} onClick={decrementPage} disabled={desableDecrement}>
                        <Icon id={'arrowLeft'} className={classes.button__arrow} />
                    </button>

                    <button className={classes.button} disabled={desableIncriment} onClick={incrementPage} >
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
})

export default connect(mapStateToProps, { getInitGoods })(Goods);