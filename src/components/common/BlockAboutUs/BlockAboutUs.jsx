import SectionContacts from "./SectionContacts/SectionContacts";
import SectionJoinUs from "./SectionJoinUs/SectionJoinUs";
import classes from './BlockAboutUs.module.css'


const BlockAboutUs = ({ className, ...props }) => {
    return (
        <div className={`${classes.block__wrapper} ${className}`}>

            <SectionJoinUs />
            <SectionContacts />

        </div>
    )
}

export default BlockAboutUs;