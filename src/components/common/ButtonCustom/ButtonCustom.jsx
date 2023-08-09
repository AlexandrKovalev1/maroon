import classes from './ButtonCustom.module.css'


const ButtonCustom = ({ title, type, disabled, onClick, className, ...props }) => {

    return <>
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${className} ${classes.customButton}`}
        >
            {title}
        </button>
    </>
}

export default ButtonCustom