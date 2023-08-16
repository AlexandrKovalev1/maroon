import classes from './SectionOffer.module.css'
import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom'
import offerImg from '../../../../img/home/offer.jpg'
import offerMobile from '../../../../img/home/offerMobaile.jpg'
import useResizeWidth from '../../../common/hooks/useResizeWidth'

const SectionOffer = () => {

    let currentWidth = useResizeWidth();

    let sectionImg = currentWidth >= 768 ? offerImg : offerMobile;

    return (
        <section className={classes.section__offer}>
            <div className={classes.description__block}>
                <div className={classes.description__content}>
                    <h3>Индивидуальный уход</h3>
                    <p className={classes.about__offer}>
                        <span>
                            Не всегда очевидно, какие элементы и минералы необходимы коже,а многочисленные эксперименты с разными средствами только ухудшают ее качество.
                        </span>
                        <br />
                        <span className={classes.second__paragraph}>
                            Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.
                        </span>
                    </p>
                    <ButtonCustom title={'Заполнить анкету'} className={classes.button} />
                </div>
            </div>
            <div className={classes.img__wrapper}>
                <img className={classes.img} src={sectionImg} alt="offer img" />
            </div>
        </section>
    )
}

export default SectionOffer;