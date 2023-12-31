import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon'
import classes from './Header.module.css'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Logo from '../common/Logo/Logo'

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.burger__menu}>
                    <BurgerMenu />
                </div>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav className={classes.menu}>
                    <ul className={classes.header__list}>
                        <li className={classes.header_list__item}>
                            <NavLink to={'/catalog'}>
                                Каталог
                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink>
                                О нас
                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink >
                                Контакты
                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink>
                                <Icon id={'cabinet'} width={'16'} height={'21'} />

                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink>
                                <Icon id={'basket'} width={'18'} height={'21'} />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header