import classes from './SectionContacts.module.css'
import mapImg from '../../../../img/home/map.jpg'
import mapMobile from '../../../../img/home/mapMobile.jpg'
import useResizeWidth from '../../../common/hooks/useResizeWidth'
import SocialContactsList from '../../../common/SocialContactsList/SocialContactsList'

const SectionContacts = () => {

    let widthCurrent = useResizeWidth();

    let map = widthCurrent >= 768 ? mapImg : mapMobile;

    return (
        <section className={classes.section__contacts} id={'contacts'}>
            <div className={classes.content__wrapper}>

                <ul className={classes.section__contacts__list}>
                    <li>
                        <h3>Контакты</h3>
                    </li>
                    <li>
                        <span className={classes.list__item__heading}>Адрес</span>
                        <address className={classes.list__item__content}>
                            Санкт-Петербург,<br /> ул. Большая Конюшенная, 19
                        </address>
                    </li>


                    <li>
                        <span className={classes.list__item__heading}>
                            Телефон
                        </span>
                        <a className={classes.list__item__content} href="tel:+79001234567">+79001234567</a>
                    </li>

                    <li>
                        <span className={classes.list__item__heading}>
                            E-mail
                        </span>
                        <a className={classes.list__item__content} href="mailto:info@pochta.ru">info@pochta.ru</a>
                    </li>
                    <li>
                        <SocialContactsList />
                    </li>
                </ul>
            </div>
            <div className={classes.img__wrapper}>
                <img src={map} alt="map" className={classes.img} />
            </div>
        </section>
    )
}

export default SectionContacts;