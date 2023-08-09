import { NavLink } from 'react-router-dom';
import classes from './SliderBestSEllers.module.css'


const SliderBestSellers = () => {
    return (
        <div>
            <div className={classes.block__bestsellers__goods}>
                <div>
                    <img src="" alt="" />
                    <span></span>
                    <NavLink className={classes.bestsellers__link}></NavLink>
                </div>
                <div>
                    <img src="" alt="" />
                    <span></span>
                    <NavLink className={classes.bestsellers__link}></NavLink>
                </div>
                <div>
                    <img src="" alt="" />
                    <span></span>
                    <NavLink className={classes.bestsellers__link}></NavLink>
                </div>
                <div>
                    <img src="" alt="" />
                    <span></span>
                    <NavLink className={classes.bestsellers__link}></NavLink>
                </div>
            </div>
            <div className={classes.block__bestsellers__control}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default SliderBestSellers;