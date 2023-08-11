import classes from './SectionBestSellers.module.css'
import ButtonCustom from "../../../common/ButtonCustom/ButtonCustom";
import SliderBestSellers from "./SliderBestsellers/SliderBestSellers";



const SectionBestSellers = () => {
    return (
        <section className={classes.section__bestsellers}>
            <div className={classes.container}>
                <div className={classes.bestsellers__description}>
                    <h3 className={classes.heading}>Бестселлеры</h3>
                    <p className={classes.card__description}>
                        {`Легендарные продукты, 
                    завоевавшие любовь
                    наших клиентов`}
                    </p>
                    <ButtonCustom title={'Смотреть все'} className={classes.button__bestSellers} />
                </div>
                <SliderBestSellers />
            </div>

        </section>
    )
}
export default SectionBestSellers;