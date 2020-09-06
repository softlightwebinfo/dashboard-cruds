import * as React from "react";
import { Paginator } from "../libs/Paginator";

const displayItem = (currentPage: number, maxPerPage: number, index: number): boolean => {
    const currentPageStart = ((currentPage - 1) * maxPerPage) + 1;
    const currentPageEnd = currentPage * maxPerPage;
    return (index + 1) >= currentPageStart && (index + 1) <= currentPageEnd;
}

export const usePaginationDynamic = (itemList: any[], maxItemsPerPage: number = 10) => {
    const [items, setItems] = React.useState(itemList);
    const [currentPage, setCurrentPage] = React.useState(1);

    const isPaginating = items.length > maxItemsPerPage;
    const totalPages = Math.ceil(items.length / maxItemsPerPage);

    const pageItems: any[] = items.filter((_, index) => {
        if (!isPaginating) {
            return true;
        }
        return displayItem(currentPage, maxItemsPerPage, index);
    });

    const setItemList = (items: any[]) => {
        setCurrentPage(1);
        setItems(items);
    }

    return {
        setItemList,
        isPaginating,
        currentPage,
        setCurrentPage,
        pageItems,
        totalPages
    };
}

export const usePagination = (totalItems, currentPage: number = 1, maxItemsPerPage: number = 10) => {
    const paginator = new Paginator(totalItems, maxItemsPerPage, currentPage, "/pricing/(:num)");

    return {paginator, isPaginating: paginator.isPaginating()}
}