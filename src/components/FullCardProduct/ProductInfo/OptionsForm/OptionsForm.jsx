import classes from './OptionsForm.module.css'
import { useFormik } from 'formik';
import ButtonCustom from '../../../common/ButtonCustom/ButtonCustom';
import CustomRadio from './CustomRadio/CustomRadio';
import { useEffect, useState } from 'react';


const OptionsForm = ({ options, ...props }) => {
    let [price, setPrice] = useState(0);

    let productsInStock = options.filter(option => option.availability);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            picked: `${productsInStock[0].id}`,
        },
        onSubmit: async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        },
    })

    useEffect(() => {
        let find = options.find(option => option.id === formik.values.picked);
        if (find) setPrice(find.price);
    }, [formik.values, options])



    let inputs = productsInStock.map(option => {
        return <CustomRadio
            onChangeFunc={formik.getFieldProps('picked').onChange}
            name={'picked'}
            value={option.id}
            title={option.volume}
            id={option.id}
            key={option.id}
            checked={Boolean(option.id === formik.values.picked)}
        />

    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.block__radio}>
                <div >Объем:</div>
                {inputs}
            </div>
            <div className={classes.block__price}>
                <div className={classes.price}>{price} Р</div>
                <ButtonCustom type={'submit'} title={'Добавить в корзину'} className={classes.button} />
            </div>
        </form>

    )
}


export default OptionsForm;