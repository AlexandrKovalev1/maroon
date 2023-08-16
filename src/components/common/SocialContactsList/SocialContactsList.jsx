import { NavLink } from "react-router-dom"
import Icon from "../Icon"
import classes from './SocialContactsList.module.css'

const SocialContactsList = ({ onClick,nameOfClass }) => {

    return (
        <div>
            <span onClick={onClick} className={`${classes.social_contact__item} ${nameOfClass}`}>
                <NavLink>
                    <Icon id={'facebook'} width={11} height={18} />
                </NavLink>
            </span>
            <span onClick={onClick} className={`${classes.social_contact__item} ${nameOfClass}`}>
                <NavLink>
                    <Icon id={'instagram'} width={20} height={20} />
                </NavLink>
            </span>
            <span onClick={onClick} className={`${classes.social_contact__item} ${nameOfClass}`}>
                <NavLink>
                    <Icon id={'twitter'} width={20} height={17} />
                </NavLink>
            </span>
        </div>
    )

}

export default SocialContactsList;