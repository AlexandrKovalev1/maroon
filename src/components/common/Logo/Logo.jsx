import { NavLink } from "react-router-dom"
import Icon from "../Icon"

const Logo = () => {
    return (
        <NavLink to={'/home'}>
            <Icon id={'logo'} width={'131'} height={'21'} />
        </NavLink>
    )
}

export default Logo