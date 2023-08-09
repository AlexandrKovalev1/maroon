import { connect } from 'react-redux';
import classes from './SliderBestSellers.module.css'
import { getBestSellers } from '../../../../redux/goods-selectors';
import BestSellerCard from './BestSellerCard/BestSellerCard';
import Icon from '../../../common/Icon';
import { useState } from 'react';
const STAPE_WIDTH = 290;

const SliderBestSellers = ({ bestSelleres, ...props }) => {
    const [offset, setOfset] = useState(0)

    const handleLeftArrowClick = () => {
        setOfset((currentOfset) => {
            let newOffset = currentOfset + STAPE_WIDTH;

            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOfset((currentOfset) => {
            let newOffset = currentOfset - STAPE_WIDTH;
            const maxOffset = -Math.round((STAPE_WIDTH*(bestSelleres.length -1))-60)
            return Math.max(newOffset,maxOffset);
        })
    }




    let bestSellerCardItem = bestSelleres.map(bestSeller => <BestSellerCard
        title={bestSeller.title}
        cardImage={bestSeller.coverPicture}
        smallDescription={bestSeller.smallDescription}
        id={bestSeller.id}
        key={bestSeller.id}
    />)


    return (
        <div className={classes.bestsellers__slider__wrapper}>
            <div className={classes.block__bestsellers__cards} style={{ transform: `translateX(${offset}px)` }}>
                {bestSellerCardItem}
            </div>
            <div className={classes.block__bestsellers__control} >
                <span onClick={handleLeftArrowClick}>
                    <Icon id={'arrowLeft'} className={classes.button__arrow} />
                </span>
                <span onClick={handleRightArrowClick}>
                    <Icon id={'arrowRight'} className={classes.button__arrow} />
                </span>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    bestSelleres: getBestSellers(state),
})



export default connect(mapStateToProps)(SliderBestSellers);