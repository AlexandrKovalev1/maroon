import Footer from '../../Footer/Footer'
import SectionBestSellers from './SectionBestSellers/SectionBestSellers'
import SectionBunner from './SectionBunner/SectionBunner'
import SectionOffer from './SectionOffer/SectionOffer'
import SectionOurHistory from './SectionOurHistory/SectionOurHistory'
import SectionJoinUs from './SectionJoinUs/SectionJoinUs'
import SectionContacts from './SectionContacts/SectionContacts'



const FullPage = () => {
    return (
        <>
            <SectionBestSellers />

            <SectionBunner />

            <SectionOffer />

            <SectionOurHistory />

            <SectionJoinUs />

            <SectionContacts />

            <Footer />
        </>
    )
}

export default FullPage