import Icon from '../../../common/Icon'
import classes from './PrevCardItem.module.css'

const PrevCardItem = ({ src, titleLink, ...props }) => {
    return (
        <div>
            <img src={src} alt="card item" className={classes.card__img} />
            <div>
                <a href="#" >
                    <div className={classes.title__link}>
                        <span>
                            {titleLink}
                        </span>
                        <Icon id={'arrowRight'} className={classes.icon}/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PrevCardItem