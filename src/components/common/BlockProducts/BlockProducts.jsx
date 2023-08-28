import BlockButtonsControl from '../BlockButtonsControl/BlockButtonsControl';
import classes from './BlockProducts.module.css'
import useResizeWidth from '../hooks/useResizeWidth';
import ProductItem from '../ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import { putPageArr } from '../../../haks/paginationFunc';

const BlockProducts = ({ initArr, blockTitle, countItemsOnPage,onClickFunc,scrollSetting, ...props }) => {
    let countProductsOnPage;

    const [currentPage, setCurrentPage] = useState(1);

    let widthDisplay = useResizeWidth()

    if (countItemsOnPage || countItemsOnPage === 0) {
        countProductsOnPage = countItemsOnPage;
    } else {
        countProductsOnPage = widthDisplay >= 768 ? 4 : 1;
    }

    let page = putPageArr(initArr, currentPage, countProductsOnPage);

    useEffect(() => {
        if(Boolean(scrollSetting)){
            window.scrollTo(0,0);
        }
        
    }, [initArr, page.length,scrollSetting])

    let products = page.map(item => <ProductItem
        id={item.id}
        key={item.id}
        coverPicture={item.coverPicture}
        title={item.title}
        price={item.options[0].price}
        volume={item.options[0].volume}
        about={item.smallDescription}
        onClickFunc={onClickFunc}
    />)

    return (
        <section>
            <div >
                {blockTitle && <h3 className={classes.section__heading}>{blockTitle}</h3>}
                <div className={classes.cards__wrapper}>
                    {products}
                </div>
                <BlockButtonsControl
                    setPage={setCurrentPage}
                    initStateArr={initArr}
                    countItemsOnPage={countProductsOnPage}
                />
            </div>
        </section>
    )
}




export default BlockProducts;