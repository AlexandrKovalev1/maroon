import classes from './CheckboxInputMobile.module.css'

const CheckboxInputMobile = ({

    field: { name, value, onChange },
    id,
    label,
    ...props
}) => {

    return (
        <div className={classes.input__wrapper}>
            <input
                name={name}
                id={id}
                type="checkbox"
                value={value}
                checked={value}
                onChange={onChange}
                className={classes.radio_button}
            />
            <label htmlFor={id} className={classes.custom__checkbox} ></label>
            <label htmlFor={id} className={classes[value?'input_selected':'input_not_selected']} >{label}</label>
        </div>
    );
};

export default CheckboxInputMobile;