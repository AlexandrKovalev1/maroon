import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon'
import Logo from '../common/Logo/Logo'
import SocialContactsList from '../common/SocialContactsList/SocialContactsList'
import classes from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.navigation}>
                <div className={`${classes.container} ${classes.row__gap}`}>
                    <nav>
                        <ul className={classes.footer__nav__list}>
                            <li>
                                <Logo />
                            </li>
                            <li>
                                <NavLink to={'/catalog'}>
                                    Каталог
                                </NavLink>

                            </li>
                            <li>
                                <NavLink>
                                    О нас
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    Магазины
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <SocialContactsList />
                </div>
            </div>
            <div className={classes.copirates__wrapper}>
                <div className={classes.container}>
                    <span>
                        <small style={{ paddingRight: '3px' }}>Maroon</small>
                        <Icon id={'copirates'} width={14} height={14} />
                        <small style={{ paddingLeft: '3px' }}>2020 Все права защищены</small>
                    </span>
                    <span>
                        <small>Политика конфиденциальности</small>
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer