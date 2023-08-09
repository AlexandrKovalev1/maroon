import classes from './PrevCard.module.css'
import Header from "../../Header/Header"
import ButtonCustom from "../../common/ButtonCustom/ButtonCustom"
import background from '../../../img/home/backgroundPrevCard.jpg'
import PrevCardItem from './PrevCardItem/PrevCardItem'
import forBody from '../../../img/home/forBody.png'
import forFace from '../../../img/home/forFace.jpg'

const PrevCard = ({show, ...props}) => {
    return (
        <div className={classes.prevCard__wrapper} style={{ backgroundImage: `url(${background})` }}>
            <Header />
            <div className={classes.container}>
                <div>
                    <PrevCardItem src={forFace} titleLink={'Уход для лица'} />
                </div>
                <div className={classes.block__info}>
                    <h1 className={classes.heading}>MAROON</h1>
                    <p className={classes.description}>Натуральная косметика <br/> для бережного ухода за кожей</p>
                    <ButtonCustom title={'Подробнее'} onClick={show} />
                </div>
                <div>
                    <PrevCardItem src={forBody} titleLink={'Уход для тела'} />
                </div>
            </div>
        </div>
    )
}

export default PrevCard