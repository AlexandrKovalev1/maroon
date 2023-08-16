import classes from './BurgerMenu.module.css'
import Icon from "../../common/Icon";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialContactsList from '../../common/SocialContactsList/SocialContactsList';

const BurgerMenu = () => {
    let [isActive, setActive] = useState(false);

    const activateMenu = () => setActive(true);

    const deactivateMenu = () => setActive(false);

    return (
        <div>
            <div className={classes.menu__button}>
                {
                    isActive
                        ? <Icon id={'closeButton'}
                            className={classes.button__close}
                            width={'18'}
                            height={'18'}
                            onClick={deactivateMenu}
                        />
                        : <Icon id={'burger'}
                            width={'24'}
                            height={'14'}
                            onClick={activateMenu}
                        />
                }
            </div >
            {isActive
                &&
                <nav className={classes.menu__body}>
                    <ul>
                        <li className={classes.burger__list__item}>
                            <NavLink to={'/catalog'} onClick={deactivateMenu}>
                                Каталог
                            </NavLink>
                        </li>
                        <li className={classes.burger__list__item}>
                            <NavLink onClick={deactivateMenu}>
                                О нас
                            </NavLink >
                        </li>
                        <li className={classes.burger__list__item}>
                            <NavLink onClick={deactivateMenu}>
                                Контакты
                            </NavLink>
                        </li>
                        <li className={classes.burger__list__item}>
                            <SocialContactsList onClick={deactivateMenu} />
                        </li>
                    </ul>
                </nav>
            }
        </div>
    )
}
export default BurgerMenu;