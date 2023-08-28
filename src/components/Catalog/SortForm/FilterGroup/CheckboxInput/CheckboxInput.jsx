import classes from './CheckboxInput.module.css'

const CheckboxInput = ({

    field: { name, value, onChange },
    id,
    label,
    secondClass,
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
            <label htmlFor={id} className={`${secondClass} ${classes.custom__checkbox}`} ></label>
            <label htmlFor={id} className={classes[value?'input_selected':'input_not_selected']} >{label}</label>
        </div>
    );
};

export default CheckboxInput;