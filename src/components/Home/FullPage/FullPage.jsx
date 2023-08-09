import classes from './FullPage.module.css'
import { NavLink } from "react-router-dom"
import ButtonCustom from "../../common/ButtonCustom/ButtonCustom"
import Footer from '../../Footer/Footer'
import SliderBestSellers from './SliderBestsellers/SliderBestSellers'



const FullPage = () => {
    return (
        <>
            <section className={classes.section__bestsellers}>
                <div className={classes.container}>
                    <div>
                        <h3>Бестселлеры</h3>
                        <p>
                            Легендарные продукты, <br />
                            завоевавшие любовь <br />
                            наших клиентов
                        </p>
                        <ButtonCustom title={'Смотреть все'} className={classes.button__bestSellers}/>
                    </div>
                    <SliderBestSellers />
                </div>

            </section>

            <section>
                <div>
                    <h3></h3>
                    <p></p>
                    <ButtonCustom />
                </div>
            </section>

            <section>
                <div>
                    <h3></h3>
                    <p></p>
                    <ButtonCustom />
                </div>
            </section>

            <section>
                <p></p>
                <ButtonCustom />
            </section>

            <section>
                <div>
                    <h3></h3>
                    <p></p>
                    <ButtonCustom />
                </div>
            </section>

            <section>
                <div>
                    <h3></h3>
                    <span>
                    </span>
                    <NavLink></NavLink>

                    <span>
                    </span>
                    <a href="tel:+79001234567">+79001234567</a>

                    <span>
                    </span>
                    <a href="mailto:info@pochta.ru">info@pochta.ru</a>
                </div>
                <div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default FullPage