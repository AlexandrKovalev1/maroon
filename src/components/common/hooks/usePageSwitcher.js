import { useCallback, useLayoutEffect, useState } from "react";


const usePageSwitcher = (countPages = 1) => {

    const [currentPage, setPage] = useState(0);
    const [disabled, setDisabled] = useState({ next: false, prev: true, });

    useLayoutEffect(() => {
        if (countPages <= 1) {
            setPage(countPages);
            setDisabled({ next: true, prev: true })
        } else {
            setPage(1);
            setDisabled({ next: false, prev: true })
        }
    }, [countPages])


    const nextDisabled = disabled.next;
    const prevDesabled = disabled.prev;

    const incrementedPage = useCallback(() => { setPage(currentCount => currentCount + 1) }, [])
    const decrementedPage = useCallback(() => { setPage(currentCount => currentCount - 1) }, [])

    const incremented = () => {
        let preLastPage = countPages - 1;

        if (prevDesabled && (currentPage !== preLastPage)) {
            setDisabled({ ...disabled, prev: false });
            return incrementedPage();
        }

        if (prevDesabled && (currentPage === preLastPage)) {
            setDisabled({ prev: false, next: true });
            return incrementedPage();
        }

        if (currentPage === preLastPage) {
            setDisabled({ ...disabled, next: true });
        }

        return incrementedPage();
    };

    const decremented = () => {
        let preFirstPage = 2;

        if (nextDisabled && currentPage !== preFirstPage) {
            setDisabled({ ...disabled, next: false });
            return decrementedPage();
        }

        if (currentPage === preFirstPage && nextDisabled) {
            setDisabled({ next: false, prev: true });
            return decrementedPage();
        }

        if (currentPage === preFirstPage) {
            setDisabled({ ...disabled, prev: true })
        }

        return decrementedPage();

    };



    return [currentPage, nextDisabled, prevDesabled, incremented, decremented, setPage];
}

export default usePageSwitcher;