import { usePagination } from "../hooks/pagination";
import { IPaginationProps } from "@props/IPaginationProps";
import React from "react";
import { BEM } from "../libs/BEM";

export const Pagination = ({count, currentPage = 1, itemsPerPage = 30}: IPaginationProps) => {
    const {paginator, isPaginating} = usePagination(count, currentPage, itemsPerPage);
    if (!isPaginating) return null;
    return (
        <ul className="pagination">
            <li className={BEM.ClassName("paginate_button page-item previous", {disabled: !paginator.getPrevUrl()})}>
                <a
                    aria-controls="pricing-table"
                    tabIndex={0}
                    className="page-link"
                    href={paginator.getPrevUrl()}
                >
                    {paginator.getPrevText()}
                </a>
            </li>
            {paginator.getPages().map((item, index) => {
                if (item['url']) {
                    const className = BEM.ClassName("paginate_button page-item", {
                        "active": item.isCurrent
                    })
                    return (
                        <li className={className} key={index}>
                            <a className="page-link" href={item.url}>
                                {item.num}
                            </a>
                        </li>
                    )
                } else {
                    return (
                        <li key={index} className="paginate_button page-item">
                            <span className="page-link">
                                {item.num}
                            </span>
                        </li>
                    );
                }
            })}
            {paginator.getNextPage() && (
                <li className={BEM.ClassName("paginate_button page-item next", {disabled: !paginator.getNextUrl()})}>
                    <a
                        aria-controls="pricing-table"
                        tabIndex={0}
                        className="page-link"
                        href={paginator.getPrevUrl()}
                    >
                        {paginator.getNextText()}
                    </a>
                </li>
            )}
        </ul>
    );
}
// <li className="paginate_button page-item previous disabled" id="pricing-table_previous">
//     <a href="#"
//        aria-controls="pricing-table"
//        data-dt-idx="0"
//        tabIndex="0"
//        className="page-link">Anterior</a>
// </li>
// <li className="paginate_button page-item active">
//     <a href="#" aria-controls="pricing-table" data-dt-idx="1"
//        tabIndex="0" className="page-link">1</a>
// </li>
// <li className="paginate_button page-item ">
//     <a href="#" aria-controls="pricing-table" data-dt-idx="2"
//        tabIndex="0" className="page-link">2</a></li>
// <li className="paginate_button page-item ">
//     <a href="#" aria-controls="pricing-table" data-dt-idx="3"
//        tabIndex="0" className="page-link">3</a></li>
// <li className="paginate_button page-item next" id="pricing-table_next">
//     <a href="#"
//        aria-controls="pricing-table"
//        data-dt-idx="4" tabIndex="0"
//        className="page-link">Siguiente</a>
// </li>