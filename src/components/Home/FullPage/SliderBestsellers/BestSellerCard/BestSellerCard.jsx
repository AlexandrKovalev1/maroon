import { NavLink } from "react-router-dom"
import classes from './BestSellerCard.module.css'


const BestSellerCard = ({ title, cardImage, smallDescription, id }) => {
    return (
        <div className={classes.card__bestSeller_wrapper}>
            <div className={classes.card__content}
                style={{ backgroundImage: `url(${cardImage})` }}>
                <span>{title}</span>
                <span className={classes.card__description}>{smallDescription}</span>
                <NavLink className={classes.bestsellers__link}>Подробнее</NavLink>
            </div>
        </div>
    )
}

export default BestSellerCard