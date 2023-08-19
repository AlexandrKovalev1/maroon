import classes from './ProductItem.module.css'

const ProductItem = ({ coverPicture, title, price, volume, about, ...props }) => {
    return (
        <div className={classes.card__wrapper}>
            <div style={{ position: 'relative'}}>
                <img src={coverPicture} alt="coverPicture" className={classes.cover__picture} />
                <div className={classes.product__info}>
                    <div className={classes.titles__block}>
                        <span>{title}</span>
                        <span>{price} руб</span>
                    </div>
                    <div className={classes.description__block}>
                        <small>{about}</small>
                        <small>{volume}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;