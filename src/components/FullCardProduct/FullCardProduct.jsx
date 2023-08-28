import { compose } from 'redux';
import WithRouter from '../hoc/WithRouter';
import { connect } from 'react-redux';
import { getProductFull } from '../../redux/goods-selectors';
import { getProduct } from '../../redux/goodsReducer';
import { Navigate } from 'react-router-dom';
import BlockProducts from '../common/BlockProducts/BlockProducts';
import classes from './FullCardProduct.module.css'
import ProductInfo from './ProductInfo/ProductInfo';
import { getInitGoodsSelector } from '../../redux/goods-selectors';
import { useEffect } from 'react';


const FullCardProduct = ({ recomendProducts,product,getProduct, ...props }) => {
    let idProduct = props.router.params.idProduct;

    useEffect(() => {
        getProduct(idProduct);
        window.scrollTo(0,0);
    }, [idProduct,product]);


    if (!idProduct) return <Navigate to={'/home'} />;


    return (
        <main>
            <div className={classes.container}>
                <ProductInfo {...product}/>
                <BlockProducts initArr={recomendProducts} blockTitle={'Вам также может понравиться'} />
            </div>
        </main>
    )
}


let mapStateToProps = (state) => ({
    product: getProductFull(state),
    recomendProducts: getInitGoodsSelector(state),
})


export default compose(
    connect(mapStateToProps, { getProduct }),
    WithRouter,
)(FullCardProduct);