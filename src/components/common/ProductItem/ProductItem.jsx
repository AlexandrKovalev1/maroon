import { NavLink } from 'react-router-dom';
import classes from './ProductItem.module.css'

const ProductItem = ({ id, coverPicture, title, price, volume, about, onClickFunc, ...props }) => {

    const onClickProduct = () => {
        if (onClickFunc) onClickFunc(id);
        
    }

    return (
        <div className={classes.card__wrapper} onClick={onClickProduct}>
            <NavLink to={`/product/${id}`} style={{ position: 'relative' }}>
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
            </NavLink>
        </div>
    )
}

export default ProductItem;