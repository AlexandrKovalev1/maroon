import classes from './FullPage.module.css'
import { NavLink } from "react-router-dom"
import ButtonCustom from "../../common/ButtonCustom/ButtonCustom"
import Footer from '../../Footer/Footer'
import SectionBestSellers from './SectionBestSellers/SectionBestSellers'
import SectionBunner from './SectionBunner/SectionBunner'
import SectionOffer from './SectionOffer/SectionOffer'
import SectionOurHistory from './SectionOurHistory/SectionOurHistory'



const FullPage = () => {
    return (
        <>
            <SectionBestSellers />

            <SectionBunner />

            <SectionOffer />

            <SectionOurHistory />



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