import classes from './SectionOurHistory.module.css'
import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom'
import background from '../../../../img/home/ourHistory.jpg'

const SectionOurHistory = () => {
    return (
        <section className={classes.section__ourHistory} style={{ backgroundImage: `url(${background})` }}>
            <div className={classes.ourHistory__description}>
                <h3 className={classes.ourHistory__description__heading}>
                    “Мы стремимся сделать уход за кожей доступным
                    и приятным ритуалом для всех, кто хочет
                    заботиться о себе и своем теле”
                </h3>
                <ButtonCustom title={'Наша история'} className={classes.button} />
            </div>
        </section>
    )
}

export default SectionOurHistory;