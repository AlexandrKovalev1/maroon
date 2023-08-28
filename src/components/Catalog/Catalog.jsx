import classes from './Catalog.module.css';
import {useEffect } from "react";
import SortForm from "./SortForm/SortForm"
import { connect } from 'react-redux';
import { clearFilters} from '../../redux/goodsReducer';
import BlockAboutUs from '../common/BlockAboutUs/BlockAboutUs';
import Goods from './Goods/Goods';
import BlockProducts from '../common/BlockProducts/BlockProducts';
import { getRecentProducts } from '../../redux/goods-selectors';



const Catalog = ({ initRecentes, clearFilters, ...props }) => {

    useEffect(() => {
        return () => {
            // clearFilters();
        }
    }, [clearFilters])

    return (
        <main className={classes.main} >
            <div className={classes.catalog__container}>
                <span className={classes.heading__block}>
                    <h2>Каталог</h2>
                    <SortForm />
                </span>
                <Goods />
                {Boolean(initRecentes.length) && <BlockProducts
                    blockTitle={'Вы недавно смотрели'}
                    initArr={initRecentes}
                />}
                <BlockAboutUs />
            </div>
        </main>
    )
}

let mapStateToProps = (state) => ({
    initRecentes: getRecentProducts(state),
})


export default connect(mapStateToProps, { clearFilters})(Catalog);