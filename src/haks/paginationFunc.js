export const putPageArr = (initArr, currentPage, countGoodsOnPage) => {
    let page = [];

    let countPages = Math.ceil(initArr / countGoodsOnPage)


    if (currentPage < 1) {
        return page;

    } else if (currentPage === countPages) {
        page = initArr.slice(
            (countGoodsOnPage * (currentPage - 1)),
            (initArr.length)
        );
        return page;

    } else {

        page = initArr.slice(
            (countGoodsOnPage * (currentPage - 1)),
            (countGoodsOnPage * currentPage)
        );

        return page;
    };
}
