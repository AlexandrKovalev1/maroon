
import OptionsForm from './OptionsForm/OptionsForm';
import classes from './ProductInfo.module.css'
import BlockAditionalInfo from './BlockAditionalInfo/BlockAditionalInfo'


const ProductInfo = ({
    coverPicture, title, smallDescription,
    aboutInfo, composition, methodOfApplication, options, ...props
}) => {



    return (
        <div className={classes.productInfo__wrapper} >
            <div >
                <img src={coverPicture} alt="cover_picture" className={classes.cover__img} />
            </div>
            <div >
                <h3>{title}</h3>
                <span>{smallDescription}</span>
                <p>
                    {aboutInfo}
                </p>
                <div className={classes.block__additional__inform}>
                    <BlockAditionalInfo heading={'Состав'} content={composition}/>
                    <BlockAditionalInfo heading={'Способ применения'} content={methodOfApplication}/>
                </div>

                {options && <OptionsForm options={options} />}
            </div>
        </div>
    )
}


export default ProductInfo;