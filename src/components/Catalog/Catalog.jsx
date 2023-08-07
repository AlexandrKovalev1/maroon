import classes from './Catalog.module.css';
import { useEffect, useState } from "react";
import SortForm from "./SortForm/SortForm"
import Icon from "../common/Icon";
import { connect } from 'react-redux';
import { getFormatedGoods } from '../../redux/goods-selectors';
import { clearFilters } from '../../redux/goodsReducer';


const Catalog = (props) => {
    let [isActiveMode, setActiveMode] = useState(false);

    const show = () => setActiveMode(true);
    const hidden = () => setActiveMode(false);
    useEffect(() => {
        return () => { props.clearFilters() }
    }, [])

    return (
        <div>
            <span className={classes.heading__block}>
                <h2>Каталог</h2>
                {isActiveMode
                    ? <Icon id={'closeButton'} width={20} height={20} onClick={hidden} />
                    : <button onClick={show}>Фильтр</button>}
            </span>

            {isActiveMode && <SortForm hidden={hidden} />}
        </div>
    )
}

let mapStateToProps = (state) => ({
    goods: getFormatedGoods(state)
})


export default connect(mapStateToProps, { clearFilters })(Catalog);