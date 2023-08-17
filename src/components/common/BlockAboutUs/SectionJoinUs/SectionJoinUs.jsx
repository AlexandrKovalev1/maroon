import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom'
import classes from './SectionJoinUs.module.css'
import picture1 from '../../../../img/home/joinUsSection/joinUs1.jpg'
import picture2 from '../../../../img/home/joinUsSection/joinUs2.jpg'
import picture3 from '../../../../img/home/joinUsSection/joinUs3.jpg'
import picture4 from '../../../../img/home/joinUsSection/joinUs4.jpg'
import picture5 from '../../../../img/home/joinUsSection/joinUs5.jpg'
import picture6 from '../../../../img/home/joinUsSection/joinUs6.jpg'


const SectionJoinUs = () => {
    return (
        <section className={classes.section__joinUs} >
            <div className={classes.cover__pictures}>
                <img className={`${classes.cover__picture} ${classes.picture__for_desktop}`} src={picture1} alt={'cover__picture'} />
                <img className={classes.cover__picture} src={picture2} alt={'cover__picture'} />
                <img className={classes.cover__picture} src={picture3} alt={'cover__picture'} />
                <img className={`${classes.cover__picture} ${classes.picture__for_desktop}`} src={picture4} alt={'cover__picture'} />
                <img className={classes.cover__picture} src={picture5} alt={'cover__picture'} />
                <img className={classes.cover__picture} src={picture6} alt={'cover__picture'} />
            </div>
            <div className={classes.description}>
                <h3>Присоединяйтесь к нам</h3>
                <p>
                    Подпишитесь на наш аккаунт @marooncare <br />и узнавайте о новиках и акциях первыми
                </p>

                <ButtonCustom title={'Подписаться'} />
            </div>
        </section>
    )
}

export default SectionJoinUs