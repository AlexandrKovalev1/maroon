import classes from './FullPage.module.css'
import Footer from '../../Footer/Footer'
import BlockAboutUs from '../../common/BlockAboutUs/BlockAboutUs'
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

            <BlockAboutUs className={classes.container}/>

            <Footer />
        </>
    )
}

export default FullPage