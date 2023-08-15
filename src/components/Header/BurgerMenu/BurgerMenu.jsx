import classes from './BurgerMenu.module.css'
import Icon from "../../common/Icon";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                <div className={classes.menu__body}>
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
                            <span onClick={deactivateMenu}>
                                <NavLink>
                                    <Icon id={'facebook'} width={11} height={18} />
                                </NavLink>
                            </span>
                            <span onClick={deactivateMenu}>
                                <NavLink>
                                    <Icon id={'instagram'} width={20} height={20} />
                                </NavLink>
                            </span>
                            <span onClick={deactivateMenu}>
                                <NavLink>
                                    <Icon id={'twitter'} width={20} height={17} />
                                </NavLink>
                            </span>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}
export default BurgerMenu;