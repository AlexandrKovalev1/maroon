import Icons from '../../img/svg_sprite.svg';
import classes from './Icon.module.css'


const Icon = ({className,id,width,height,onClick, ...props }) => {
    return (
        <svg className={`${classes.iconCustom} ${className}`} width={width} height={height} onClick={onClick}>
            <use href={Icons +`#${id}` }></use>
        </svg>
    )
}
export default Icon;