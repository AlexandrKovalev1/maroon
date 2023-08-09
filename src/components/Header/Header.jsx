import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon'
import classes from './Header.module.css'

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div>
                    <NavLink to={'/home'}>
                        <Icon id={'logo'} className={classes.logo} />
                    </NavLink>
                </div>
                <div>
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
                            <NavLink>
                                Контакты
                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink>
                                <Icon id={'cabinet'} className={classes.cabinetSvg}/>
                                
                            </NavLink>
                        </li>
                        <li className={classes.header_list__item}>
                            <NavLink>
                                <Icon id={'basket'} className={classes.basketSvg}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header