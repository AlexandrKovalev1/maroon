import { useEffect } from 'react';
import Icon from '../Icon'
import usePageSwitcher from '../hooks/usePageSwitcher';
import classes from './BlockButtonsControl.module.css'




const BlockButtonsControl = ({ initStateArr, countItemsOnPage, setPage, ...props }) => {

    let lastPage;
    let countPages = lastPage = Math.ceil(initStateArr.length / countItemsOnPage);

    let [currentPage, nextDisabledPage,
        prevDesabledPage, incremented,
        decremented] = usePageSwitcher(lastPage);

    useEffect(() => {
        setPage(currentPage);
    }, [initStateArr, currentPage,setPage])

    let classLastPage = currentPage === lastPage ? 'bold' : "normal";

    return (
        <div className={classes.block__buttons__control}>
            <div className={classes.page__info}>
                <span>
                    {currentPage}
                </span>
                <span className={classes.line}>
                </span>
                <span className={classes[classLastPage]}>
                    {countPages}
                </span>
            </div>
            <div className={classes.block__page__switching__buttons}>

                <button className={classes.button} disabled={prevDesabledPage} onClick={decremented}>
                    <Icon id={'arrowLeft'} className={classes.button__arrow} />
                </button>

                <button className={classes.button} disabled={nextDisabledPage} onClick={incremented}>
                    <Icon id={'arrowRight'} className={classes.button__arrow} />
                </button>

            </div>
        </div>
    )
}


export default BlockButtonsControl;