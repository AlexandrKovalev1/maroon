import classes from './SectionOffer.module.css'
import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom';

const SectionOffer = () => {
    return (
        <section>
            <div className={classes.container}>
                <div className={classes.description__block}>
                    <h3>Индивидуальный уход</h3>
                    <p>
                        <span>
                            Не всегда очевидно, какие элементы и минералы необходимы коже,а многочисленные эксперименты с разными средствами только ухудшают ее качество.
                        </span>
                        <span>
                            Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.
                        </span>
                    </p>
                    <ButtonCustom title={'Заполнить анкету'} className={classes.button} />
                </div>
            </div>
        </section>
    )
}

export default SectionOffer;