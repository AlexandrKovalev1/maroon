import Icons from '../../img/svg_sprite.svg';

const Icon = ({className,id,width,height,onClick }) => {
    return (
        <svg className={className} width={width} height={height} onClick={onClick}>
            <use href={Icons +`#${id}` }></use>
        </svg>
    )
}
export default Icon;