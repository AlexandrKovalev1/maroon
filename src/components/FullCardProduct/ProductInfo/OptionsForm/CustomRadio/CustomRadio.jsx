import classes from './CustomRadio.module.css'


const CustomRadio = ({
onChangeFunc,
checked,
    name,
    id,
    value,
    title,
    ...props
}) => {
    return (
        <div className={classes.form__radio}>
            <input type={'radio'} name={name} value={value} id={id} onChange={onChangeFunc} checked={checked}/>
            <label className={classes.custom__label} htmlFor={id}></label>
            <label htmlFor={id}>{title}</label>
        </div>
    )
}

export default CustomRadio;