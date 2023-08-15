import classes from './Catalog.module.css';
import { useEffect } from "react";
import SortForm from "./SortForm/SortForm"
import { connect } from 'react-redux';
import { clearFilters } from '../../redux/goodsReducer';


const Catalog = (props) => {

    useEffect(() => {
        return () => { props.clearFilters() }
    }, [])

    return (
        <main className={classes.main}>
            <div className={classes.catalog__container}>
                <span className={classes.heading__block}>
                    <h2>Каталог</h2>
                    <SortForm />
                </span>
            </div>
        </main>
    )
}


export default connect(null, { clearFilters })(Catalog);