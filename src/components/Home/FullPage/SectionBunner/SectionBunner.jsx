import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom'
import classes from './SectionBunner.module.css'
import banner from '../../../../img/home/banner.jpg'

const SectionBunner = () => {
    return (
        <section className={classes.section__banner} style={{ backgroundImage: `url(${banner})` }}>
            <div className={classes.banner__description__wrapper} >
                <h3 className={classes.heading}>
                    Встречайте весну <br />вместе с нами
                </h3>
                <p className={classes.bunner__description}>
                    Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
                </p>
                <ButtonCustom title={'Подробнее'} />
            </div>
        </section>
    )
}

export default SectionBunner