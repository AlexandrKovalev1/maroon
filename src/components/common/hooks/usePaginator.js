import { useCallback, useState } from "react";



const usePaginator = (initPage = 1) => {

    let [currentPage, setPage] = useState(initPage);

    const increment = useCallback(() => { setPage(currentCount => currentCount + 1) }, [])
    const decrement = useCallback(() => { setPage(currentCount => currentCount - 1) }, [])

    return { currentPage, increment, decrement, setPage };
}

export default usePaginator;